#julia
using Makie, GeometryTypes, Colors
scene = Scene(resolution = (500, 500))
large_sphere = HyperSphere(Point3f0(0), 1f0)
positions = decompose(Point3f0, large_sphere)
linepos = view(positions, rand(1:length(positions), 1000))
lines(linepos, linewidth = 0.1, color = :black)
scatter(positions, strokewidth = 0.02, strokecolor = :white, color = RGBA(0.9, 0.2, 0.4, 0.6))
r = range(-1.5, stop=1.5, length=5)
axis(r, r, r)
scene

#julia
using Makie, GeometryTypes, Colors
scene = Scene(resolution = (500, 500))
large_sphere = HyperSphere(Point3f0(0), 1f0)
positions = decompose(Point3f0, large_sphere)
meshscatter(positions, color = RGBA(0.9, 0.2, 0.4, 1))
scene


#julia
using Makie
scene = Scene(resolution = (500, 500))
function xy_data(x, y)
    r = sqrt(x*x + y*y)
    r == 0.0 ? 1f0 : (sin(r)/r)
end
r = range(-2, stop=2, length=40)
surf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]
z = surf_func(20)
surf = surface(r, r, z)

wf = wireframe(r, r, surf[:z] .+ 1.0,
    linewidth = 2f0, color = lift_node(x-> x[5], surf[:colormap])
)
xy = range(-2.1, stop=2.1, length=4)
axis(xy, xy, range(0, stop=2, length=4))
center!(scene)

io = VideoStream(scene)
for i in range(0, stop=60, length=100)
    surf[:z] = surf_func(i)
    recordframe!(io)
end
io

#julia
using Makie, GeometryTypes, GLVisualize, GLWindow
scene = Scene(resolution = (500, 500))
function xy_data(x, y)
    r = sqrt(x*x + y*y)
    r == 0.0 ? 1f0 : (sin(r)/r)
end
r = range(-2, stop=2, length=40)
surf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]
N = 40
r = range(-2, stop=2, length=40)
surface(
    r, r, surf_func(10),
    color = GLVisualize.loadasset("doge.png")
)
center!(scene)
scene

#julia
using Makie, GeometryTypes, GLVisualize
scene = Scene(resolution = (500, 500))
x = GLVisualize.loadasset("cat.obj")
Makie.mesh(x.vertices, x.faces, color = :black)
pos = map(x.vertices, x.normals) do p, n
    p => p .+ (normalize(n) .* 0.05f0)
end
linesegment(pos)
scene

#julia
using Makie
scene = Scene(resolution = (500, 500))
x = [0, 1, 2, 0]
y = [0, 0, 1, 2]
z = [0, 2, 0, 1]
color = [:red, :green, :blue, :yellow]
i = [0, 0, 0, 1]
j = [1, 2, 3, 2]
k = [2, 3, 1, 3]

indices = [1, 2, 3, 1, 3, 4, 1, 4, 2, 2, 3, 4]
m = mesh(x, y, z, indices, color = color)
wireframe(m[:mesh], color = :black, linewidth = 2)
r = range(-0.5, stop=2.5, length=4)
axis(r, r, r)
center!(scene)
scene

#julia
using Makie, GLVisualize
scene = Scene(resolution = (500, 500))
mesh(GLVisualize.loadasset("cat.obj"))
r = range(-0.1, stop=1, length=4)
center!(scene)
scene

#julia
using Makie, GeometryTypes, FileIO, GLVisualize
using GLVisualize: loadasset, assetpath
scene = Scene(resolution = (500, 500))
cat = load(assetpath("cat.obj"), GLNormalUVMesh)
Makie.mesh(cat, color = loadasset("diffusemap.tga"))
center!(scene)

#julia
using Makie, GeometryTypes
scene = Scene(resolution = (500, 500))
Makie.mesh(Sphere(Point3f0(0), 1f0))
center!(scene)
scene


#julia
using Makie, GeometryTypes, GLVisualize
scene = Scene(resolution = (500, 500))
wireframe(GLVisualize.loadasset("cat.obj"))
center!(scene)
scene

#julia
using Makie, GeometryTypes
scene = Scene(resolution = (500, 500))
wireframe(Sphere(Point3f0(0), 1f0))
center!(scene)
scene

#julia
using Makie
scene = Scene(resolution = (500, 500))
heatmap(rand(32, 32))
center!(scene)

#julias
using Makie, FileIO, GeometryTypes, Colors
scene = Scene(resolution = (500, 500), color = :black)
earth = load(download("https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.png"))
image(earth)
center!(scene)

#julia
using Makie, FileIO, GeometryTypes, Colors
scene = Scene(resolution = (500, 500), color = :black)
m = GLNormalUVMesh(Sphere(Point3f0(0), 1f0), 60)
earth = load(download("https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.png"))
Makie.mesh(m, color = earth)
stars = 100_000
scatter((rand(Point3f0, stars) .- 0.5) .* 10,
    glowwidth = 0.005, glow_color = :white, color = RGBA(0.8, 0.9, 0.95, 0.4),
    markersize = rand(range(0.0001, stop=0.01, length=100), stars)
)
scene

#julia
using Makie
scene = Scene()
volume(rand(32, 32, 32), algorithm = :iso)
center!(scene)
