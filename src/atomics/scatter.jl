using GeometryTypes, StaticArrays, Colors, GLAbstraction

const Image = Matrix{T} where T <: Colorant

const _marker_map = Dict(
    :rect => '■',
    :star5 => '★',
    :diamond => '◆',
    :hexagon => '⬢',
    :cross => '✚',
    :xcross => '❌',
    :utriangle => '▲',
    :dtriangle => '▼',
    :ltriangle => '◀',
    :rtriangle => '▶',
    :pentagon => '⬟',
    :octagon => '⯄',
    :star4 => '✦',
    :star6 => '🟋',
    :star8 => '✷',
    :vline => '┃',
    :hline => '━',
    :+ => '+',
    :x => 'x',
    :circle => '●'
)

function available_marker_symbols()
    println("Marker Symbols:")
    for (k, v) in _marker_map
        println("    ", k, " => ", v)
    end
end

"""
Sprite marker. Allowed values:
 * GeometryTypes.Circle
 * Symbol. Available options can be printed with `available_marker_symbols()`
 * Any unicode Char
 * A shape/polygon
 * An Image
 * A distancefield (Matrix{Float}-> annotating the distance from a contour with negative distances being outside and positves inside)/
 * An array of any of the above, to give each marker it's own shape
"""
to_spritemarker(b, x::Circle) = x
to_spritemarker(b, ::Type{Circle}) = Circle(Point2f0(0), 1f0)
to_spritemarker(b, ::Type{Rectangle}) = HyperRectangle(Vec2f0(0), Vec2f0(1))

to_spritemarker(b, marker::Char) = marker
to_spritemarker(b, marker::Matrix{<: AbstractFloat}) = Float32.(marker)
to_spritemarker(b, marker::Image) = to_image(marker)

function to_spritemarker(b, marker::Symbol)
    if haskey(_marker_map, marker)
        return to_spritemarker(b, _marker_map[marker])
    else
        warn("Unsupported marker: $marker, using ● instead")
        return '●'
    end
end

# function to_spritemarker(shape::Shape)
#     points = Point2f0[GeometryTypes.Vec{2, Float32}(p) for p in zip(shape.x, shape.y)]
#     bb = GeometryTypes.AABB(points)
#     mini, maxi = minimum(bb), maximum(bb)
#     w3 = maxi-mini
#     origin, width = Point2f0(mini[1], mini[2]), Point2f0(w3[1], w3[2])
#     map!(p -> ((p - origin) ./ width) - 0.5f0, points, points) # normalize and center
#     GeometryTypes.GLNormalMesh(points)
# end
# create a marker/shape type

to_spritemarker(b, marker::Vector{Char}) = String(marker)
function to_spritemarker(b, marker::Vector)
    marker = map(marker) do sym
        to_spritemarker(b, sym)
    end
    if isa(marker, Vector{Char})
        to_spritemarker(b, marker)
    else
        marker
    end
end


function to_static_vec(b, x::AbstractArray)
    Vec(ntuple(length(x)) do i
        x[i]
    end)
end

to_static_array(b, x::SVector) = Vec(x)
to_static_array(b, x::NTuple{N}) where N = Vec(x)

function to_static_array(b, x::AbstractArray{T}) where T <: Union{Tuple, SVector, AbstractArray}
    to_static_array.(b, x)
end

to_rotations(b, x::Billboard) = x
to_rotations(b, x::Vector) = to_static_array(x)


to_markersize(b, x) = Vec2f0(x)



"""
Hack to quickly make things more consistent inside MakiE, without
changing GLVisualize too much! So we need to rewrite the attributes, the names and the
values a bit!
"""
function expand_for_glvisualize(kw_args)
    result = Dict{Symbol, Any}()
    for (k, v) in kw_args
        k in (:marker, :positions, :x, :y, :z) && continue
        if k == :rotations
            k = :rotation
            v = Vec4f0(0, 0, 0, 1)
            result[:billboard] = true
        end
        if k == :markersize
            k = :scale
        end
        if k == :glowwidth
            k = :glow_width
        end
        if k == :glowcolor
            k = :glow_color
        end
        if k == :strokewidth
            k = :stroke_width
        end
        if k == :strokecolor
            k = :stroke_color
        end
        if k == :positions
            k = :position
        end
        result[k] = to_signal(v)
    end
    result[:visible] = true
    result[:fxaa] = false
    result[:model] = eye(Mat4f0)
    result
end


function _scatter(b, kw_args)
    scene = get_global_scene()
    attributes = scatter_defaults(b, scene, kw_args)
    gl_data = expand_for_glvisualize(attributes)
    shape = to_signal(attributes[:marker])
    main = (shape, to_signal(attributes[:positions]))
    viz = GLVisualize.sprites(main, Style(:default), gl_data)
    viz = GLVisualize.assemble_shader(viz).children[]
    insert_scene!(scene, :scatter, viz, attributes)
end

for arg in ((:x, :y), (:x, :y, :z), (:positions,))
    insert_expr = map(arg) do elem
        :(attributes[$(QuoteNode(elem))] = $elem)
    end
    @eval begin
        function scatter(b::makie, $(arg...), attributes::Dict)
            $(insert_expr...)
            _scatter(b, attributes)
        end
    end
end