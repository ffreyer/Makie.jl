#julia
using Makie, GeometryTypes, Colors, MacroTools
scene = Scene()
vx = -1:0.1:1;
vy = -1:0.1:1;

f(x, y) = (sin(x*10) + cos(y*10)) / 4
psurf = surface(vx, vy, f)

pos = lift_node(psurf[:x], psurf[:y], psurf[:z]) do x, y, z
    vec(Point3f0.(x, y', z .+ 0.5))
end
pscat = scatter(pos)
plines = lines(view(pos, 1:2:length(pos)))
scene

@theme theme = begin
    markersize = to_markersize(0.01)
    strokecolor = to_color(:white)
    strokewidth = to_float(0.01)
end
# this pushes all the values from theme to the plot
# push!(pscat, theme)
# Or update the entire surface node with this
# scene[:scatter] = theme
# Or permananently (to be more precise: just for this session) change the theme for scatter
scene[:theme, :scatter] = theme
scatter(lift_node(x-> x .+ (Point3f0(0, 0, 1),), pos)) # will now use new theme
scene

# Make a completely new theme
function custom_theme(scene)
    @theme theme = begin
        linewidth = to_float(3)
        colormap = to_colormap(:BuGn)
        scatter = begin
            marker = to_spritemarker(Circle)
            markersize = to_float(0.03)
            strokecolor = to_color(:white)
            strokewidth = to_float(0.01)
            glowcolor = to_color(RGBA(0, 0, 0, 0.4))
            glowwidth = to_float(0.1)
        end
    end
    # update theme values
    scene[:theme] = theme
end

# apply it to the scene
custom_theme(scene)

# From now everything will be plotted with new theme
psurf = surface(vx, 1:0.1:2, psurf[:z])
