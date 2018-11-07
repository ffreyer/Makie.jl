var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Makie.jl-Documentation-1",
    "page": "Home",
    "title": "Makie.jl Documentation",
    "category": "section",
    "text": "Hi! Welcome to Makie, a high-performance, extendable, and multi-platform plotting package for Julia.\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"http://makie.juliaplots.org/stable/media/3d_contour_with_2d_contour_slices.jpg\" alt=\"3D contour + 2D contour<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"http://makie.juliaplots.org/stable/media/quiver_1.jpg\" alt=\"Quiver<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"http://makie.juliaplots.org/stable/media/axis___surface.jpg\" alt=\"Surface plots and Unicode axis labels<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43538627-d5d5ebf8-95c2-11e8-9aab-400a350c6bc7.gif\" alt=\"Mouseover tooltip<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43537999-20d5a154-95c1-11e8-815f-37d6345d5f5b.gif\" alt=\"Lorentz attractor with GUI<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43538067-4a12b232-95c1-11e8-9783-0b55c9ddde54.gif\" alt=\"WebGL<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43538095-579761be-95c1-11e8-8160-0651c055fd68.gif\" alt=\"Polygons<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43387927-16ed8e16-93e8-11e8-950b-c54f9f37b895.gif\" alt=\"World climate visualization - http://worldclim.org/<br>\" style=\"width:200px\" />\n   </p>\n</div>\n<div style=\"display:inline-block\">\n   <p style=\"display:inline-block; text-align: center\">\n      <img src=\"https://user-images.githubusercontent.com/1010467/43538477-73064f7c-95c2-11e8-9e50-6ddeaa68514d.gif\" alt=\"Molecule simulation<br>\" style=\"width:200px\" />\n   </p>\n</div>\nFor more examples, see the Examples index."
},

{
    "location": "index.html#Installation-and-tutorial-1",
    "page": "Home",
    "title": "Installation & tutorial",
    "category": "section",
    "text": "See the Tutorial."
},

{
    "location": "index.html#I\'m-an-expert!-1",
    "page": "Home",
    "title": "I\'m an expert!",
    "category": "section",
    "text": "Head straight to the Atomic functions overview."
},

{
    "location": "basic-tutorials.html#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "basic-tutorials.html#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "Below is a quick tutorial to help get you started. Note that we assume you have Julia installed and configured already."
},

{
    "location": "basic-tutorials.html#Getting-Makie-on-Julia-0.6-1",
    "page": "Tutorial",
    "title": "Getting Makie on Julia 0.6",
    "category": "section",
    "text": "#=\nThis will install the deprecated, first version of Makie\nLook at IJulia examples for the old style\n=#\nPkg.add(\"Makie\")\n\n#=\nGet the bleeding edge version, which is used to generate\nthe `Examples from the documentation` + `Complex examples` section\n=#\nPkg.checkout(\"Makie\")\nPkg.checkout(\"AbstractPlotting\")"
},

{
    "location": "basic-tutorials.html#Getting-Makie-on-Julia-0.7sup/sup-1",
    "page": "Tutorial",
    "title": "Getting Makie on Julia 0.7<sup>+</sup>",
    "category": "section",
    "text": "add Makie#sd/07 AbstractPlotting#sd/07 GeometryTypes#sd/07 ImageMagick#sd/07 Reactive#sd/07\nadd ImageFiltering#master\ntest MakieThe first use of Makie might take a little bit of time, due to precompilation."
},

{
    "location": "basic-tutorials.html#Set-the-Scene-1",
    "page": "Tutorial",
    "title": "Set the Scene",
    "category": "section",
    "text": "The Scene object holds everything in a plot, and you can initialize it by doing so:scene = Scene()Note that before you put anything in the scene, it will be black!"
},

{
    "location": "basic-tutorials.html#Basic-plotting-1",
    "page": "Tutorial",
    "title": "Basic plotting",
    "category": "section",
    "text": "Below are some examples of basic plots to help you get oriented.You can put your in the plot window and scroll to zoom. Right click and drag lets you pan around the scene, and left click and drag lets you do selection zoom (in 2D plots), or orbit around the scene (in 3D plots).Many of these examples also work in 3D,"
},

{
    "location": "basic-tutorials.html#Scatter-plot-1",
    "page": "Tutorial",
    "title": "Scatter plot",
    "category": "section",
    "text": "@example_database(\"Tutorial simple scatter\")@example_database(\"Tutorial markersize\")"
},

{
    "location": "basic-tutorials.html#Line-plot-1",
    "page": "Tutorial",
    "title": "Line plot",
    "category": "section",
    "text": "@example_database(\"Tutorial simple line\")"
},

{
    "location": "basic-tutorials.html#Adding-to-a-scene-1",
    "page": "Tutorial",
    "title": "Adding to a scene",
    "category": "section",
    "text": "@example_database(\"Tutorial adding to a scene\")"
},

{
    "location": "basic-tutorials.html#Adjusting-scene-limits-1",
    "page": "Tutorial",
    "title": "Adjusting scene limits",
    "category": "section",
    "text": "@example_database(\"Tutorial adjusting scene limits\")"
},

{
    "location": "basic-tutorials.html#Basic-theming-1",
    "page": "Tutorial",
    "title": "Basic theming",
    "category": "section",
    "text": "@example_database(\"Tutorial basic theming\")"
},

{
    "location": "basic-tutorials.html#Saving-plots-or-animations-1",
    "page": "Tutorial",
    "title": "Saving plots or animations",
    "category": "section",
    "text": "See the Output section."
},

{
    "location": "basic-tutorials.html#More-examples-1",
    "page": "Tutorial",
    "title": "More examples",
    "category": "section",
    "text": "See the Examples index."
},

{
    "location": "help_functions.html#",
    "page": "Help functions",
    "title": "Help functions",
    "category": "page",
    "text": ""
},

{
    "location": "help_functions.html#Help-functions-1",
    "page": "Help functions",
    "title": "Help functions",
    "category": "section",
    "text": ""
},

{
    "location": "help_functions.html#AbstractPlotting.help",
    "page": "Help functions",
    "title": "AbstractPlotting.help",
    "category": "function",
    "text": "help(func[; extended = false])\n\nWelcome to the main help function of Makie.jl / AbstractPlotting.jl.\n\nFor help on a specific function\'s arguments, type help_arguments(function_name).\n\nFor help on a specific function\'s attributes, type help_attributes(plot_Type).\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help-1",
    "page": "Help functions",
    "title": "help",
    "category": "section",
    "text": "helpExample usage:using Makie # hide\nhelp(scatter; extended = true)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_arguments",
    "page": "Help functions",
    "title": "AbstractPlotting.help_arguments",
    "category": "function",
    "text": "help_arguments([io], func)\n\nReturns a list of signatures for function func.\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help_arguments-1",
    "page": "Help functions",
    "title": "help_arguments",
    "category": "section",
    "text": "help_argumentsExample usage:using Makie # hide\nhelp_arguments(STDOUT, scatter)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_attributes",
    "page": "Help functions",
    "title": "AbstractPlotting.help_attributes",
    "category": "function",
    "text": "help_attributes([io], Union{PlotType, PlotFunction}; extended = false)\n\nReturns a list of attributes for the plot type Typ. The attributes returned extend those attributes found in the default_theme.\n\nUse the optional keyword argument extended (default = false) to show in addition the default values of each attribute. usage:\n\n>help_attributes(scatter)\n	alpha\n	color\n	colormap\n	colorrange\n	distancefield\n	glowcolor\n	glowwidth\n	linewidth\n	marker\n	marker_offset\n	markersize\n	overdraw\n	rotations\n	strokecolor\n	strokewidth\n	transform_marker\n	transparency\n	uv_offset_width\n	visible\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help_attributes-1",
    "page": "Help functions",
    "title": "help_attributes",
    "category": "section",
    "text": "help_attributesExample usage:using Makie # hide\nhelp_attributes(STDOUT, Scatter; extended = true)"
},

{
    "location": "help_functions.html#Plot-styling-options-1",
    "page": "Help functions",
    "title": "Plot styling options",
    "category": "section",
    "text": "Use these functions to find out the styling options."
},

{
    "location": "help_functions.html#available_marker_symbols-1",
    "page": "Help functions",
    "title": "available_marker_symbols",
    "category": "section",
    "text": "using AbstractPlotting # hide\nAbstractPlotting.available_marker_symbols()"
},

{
    "location": "help_functions.html#available_gradients-1",
    "page": "Help functions",
    "title": "available_gradients",
    "category": "section",
    "text": "using AbstractPlotting # hide\nAbstractPlotting.available_gradients()For other plot attributes and their usage, see the section Plot attributes."
},

{
    "location": "functions-overview.html#",
    "page": "Atomic functions overview",
    "title": "Atomic functions overview",
    "category": "page",
    "text": ""
},

{
    "location": "functions-overview.html#Atomic-functions-overview-1",
    "page": "Atomic functions overview",
    "title": "Atomic functions overview",
    "category": "section",
    "text": "The follow document lists the atomic plotting functions and their usage. These are the most atomic primitives which one can stack together to form more complex plots.For general help about each function, consult the Help functions.See Plot function signatures for the available plot function signatures.See Plot attributes for the available plot attributes."
},

{
    "location": "functions-overview.html#AbstractPlotting.heatmap",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.heatmap",
    "category": "function",
    "text": "`heatmap(x, y, values)` or `heatmap(values)`\n\nPlots a heatmap as an image on x, y (defaults to interpretation as dimensions).\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#heatmap-1",
    "page": "Atomic functions overview",
    "title": "heatmap",
    "category": "section",
    "text": "heatmapAvailable attributes and their defaults for Heatmap{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  levels          1\n  linewidth       0.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 72:73) (Image: library lines 42:43) (Image: library lines 143:150) (Image: library lines 209:209) (Image: library lines 171:183) (Image: library lines 55:67) (Image: library lines 220:251) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.image",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.image",
    "category": "function",
    "text": "`image(x, y, image)` / `image(image)`\n\nPlots an image on range x, y (defaults to dimensions).\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#image-1",
    "page": "Atomic functions overview",
    "title": "image",
    "category": "section",
    "text": "imageAvailable attributes and their defaults for Image{...} are:   alpha           1.0\n  color           :black\n  colormap        ColorTypes.RGBA{Float32}[RGBA{Float32}(0.0,0.0,0.0,1.0), RGBA{Float32}(1.0,1.0,1.0,1.0)]\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 42:43) (Image: library lines 77:77) (Image: library lines 163:167) (Image: library lines 4:13) (Image: library lines 16:24) (Image: library lines 112:119) (Image: library lines 226:234) (Image: library lines 393:394) (Image: library lines 94:119) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.lines",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.lines",
    "category": "function",
    "text": "`lines(x, y, z)` / `lines(x, y)` / or `lines(positions)`\n\nCreates a connected line plot for each element in (x, y, z), (x, y) or positions.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#lines-1",
    "page": "Atomic functions overview",
    "title": "lines",
    "category": "section",
    "text": "linesAvailable attributes and their defaults for Lines{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linestyle       nothing\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 5:28) (Image: library lines 32:39) (Image: library lines 190:194) (Image: library lines 197:198) (Image: library lines 125:128) (Image: library lines 385:390) (Image: library lines 478:519) (Image: library lines 525:558) (Image: library lines 3:51) (Image: library lines 87:116) (Image: library lines 47:57)\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 1<br><img src=\"media/axis_theming/thumb-axis_theming-1.jpg\" alt=\"Step 1<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 2<br><img src=\"media/axis_theming/thumb-axis_theming-2.jpg\" alt=\"Step 2<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 3<br><img src=\"media/axis_theming/thumb-axis_theming-3.jpg\" alt=\"Step 3<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 4<br><img src=\"media/axis_theming/thumb-axis_theming-4.jpg\" alt=\"Step 4<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 5<br><img src=\"media/axis_theming/thumb-axis_theming-5.jpg\" alt=\"Step 5<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 6<br><img src=\"media/axis_theming/thumb-axis_theming-6.jpg\" alt=\"Step 6<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 7<br><img src=\"media/axis_theming/thumb-axis_theming-7.jpg\" alt=\"Step 7<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 8<br><img src=\"media/axis_theming/thumb-axis_theming-8.jpg\" alt=\"Step 8<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 9<br><img src=\"media/axis_theming/thumb-axis_theming-9.jpg\" alt=\"Step 9<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 10<br><img src=\"media/axis_theming/thumb-axis_theming-10.jpg\" alt=\"Step 10<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 11<br><img src=\"media/axis_theming/thumb-axis_theming-11.jpg\" alt=\"Step 11<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 12<br><img src=\"media/axis_theming/thumb-axis_theming-12.jpg\" alt=\"Step 12<br>\" /></p></div>"
},

{
    "location": "functions-overview.html#AbstractPlotting.linesegments",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.linesegments",
    "category": "function",
    "text": "`linesegments(x, y, z)` / `linesegments(x, y)` / `linesegments(positions)`\n\nPlots a line for each pair of points in (x, y, z), (x, y), or positions.\n\nAttributes: The same as for lines\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#linesegments-1",
    "page": "Atomic functions overview",
    "title": "linesegments",
    "category": "section",
    "text": "linesegmentsAvailable attributes and their defaults for LineSegments{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linestyle       nothing\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 77:82) (Image: library lines 171:179) (Image: library lines 478:519) (Image: library lines 4:64)"
},

{
    "location": "functions-overview.html#AbstractPlotting.mesh",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.mesh",
    "category": "function",
    "text": "`mesh(x, y, z)`, `mesh(mesh_object)`, `mesh(x, y, z, faces)`, or `mesh(xyz, faces)`\n\nPlots a 3D mesh.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#mesh-1",
    "page": "Atomic functions overview",
    "title": "mesh",
    "category": "section",
    "text": "meshAvailable attributes and their defaults for Mesh{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 111:134) (Image: library lines 137:137) (Image: library lines 4:13) (Image: library lines 16:24) (Image: library lines 60:63) (Image: library lines 66:66) (Image: library lines 69:78) (Image: library lines 81:81) (Image: library lines 275:281) (Image: library lines 329:378) (Image: library lines 432:438) (Image: library lines 442:442) (Image: library lines 465:474)"
},

{
    "location": "functions-overview.html#AbstractPlotting.meshscatter",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.meshscatter",
    "category": "function",
    "text": "`meshscatter(x, y, z)` / `meshscatter(x, y)` / `meshscatter(positions)`\n\nPlots a mesh for each element in (x, y, z), (x, y), or positions (similar to scatter). markersize is a scaling applied to the primitive passed as marker\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#meshscatter-1",
    "page": "Atomic functions overview",
    "title": "meshscatter",
    "category": "section",
    "text": "meshscatterAvailable attributes and their defaults for MeshScatter{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  marker          GeometryTypes.HyperSphere{3,Float32}(Float32[0.0, 0.0, 0.0], 1.0f0)\n  markersize      0.1\n  overdraw        false\n  rotations       1.0 + 0.0im + 0.0jm + 0.0km\n  transparency    false\n  visible         true(Image: library lines 28:53) (Image: library lines 132:137) (Image: library lines 151:166) (Image: library lines 329:378) (Image: library lines 404:406) (Image: library lines 575:597) (Image: library lines 120:164) (Image: library lines 4:64)"
},

{
    "location": "functions-overview.html#AbstractPlotting.scatter",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.scatter",
    "category": "function",
    "text": "`scatter(x, y, z)` / `scatter(x, y)` / `scatter(positions)`\n\nPlots a marker for each element in (x, y, z), (x, y), or positions.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#scatter-1",
    "page": "Atomic functions overview",
    "title": "scatter",
    "category": "section",
    "text": "scatterAvailable attributes and their defaults for Scatter{...} are:   alpha             1.0\n  color             :black\n  colormap          :viridis\n  colorrange        AbstractPlotting.Automatic()\n  distancefield     nothing\n  glowcolor         RGBA{N0f8}(0.0,0.0,0.0,0.0)\n  glowwidth         0.0\n  linewidth         1\n  marker            GeometryTypes.HyperSphere{2,T} where T\n  marker_offset     AbstractPlotting.Automatic()\n  markersize        0.1\n  overdraw          false\n  rotations         Billboard()\n  strokecolor       RGBA{N0f8}(0.0,0.0,0.0,0.0)\n  strokewidth       0.0\n  transform_marker  false\n  transparency      false\n  uv_offset_width   Float32[0.0, 0.0, 0.0, 0.0]\n  visible           true(Image: library lines 9:13) (Image: library lines 17:21) (Image: library lines 47:58) (Image: library lines 83:83) (Image: library lines 163:167) (Image: library lines 190:194) (Image: library lines 213:219) (Image: library lines 253:271) (Image: library lines 141:141) (Image: library lines 145:145) (Image: library lines 385:390) (Image: library lines 393:394) (Image: library lines 446:456) (Image: library lines 460:461) (Image: library lines 3:51) (Image: library lines 55:67) (Image: library lines 71:82) (Image: library lines 220:251) (Image: library lines 5:33) (Image: library lines 38:42) (Image: library lines 62:63) (Image: library lines 67:74) (Image: library lines 78:78) (Image: library lines 86:90) (Image: library lines 4:10)"
},

{
    "location": "functions-overview.html#AbstractPlotting.surface",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.surface",
    "category": "function",
    "text": "`surface(x, y, z)`\n\nPlots a surface, where (x, y, z) are supposed to lie on a grid.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#surface-1",
    "page": "Atomic functions overview",
    "title": "surface",
    "category": "section",
    "text": "surfaceAvailable attributes and their defaults for Surface{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 87:95) (Image: library lines 98:106) (Image: library lines 112:119) (Image: library lines 226:234) (Image: library lines 238:253) (Image: library lines 260:271) (Image: library lines 289:325) (Image: library lines 410:427) (Image: library lines 562:571) (Image: library lines 55:86) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.text",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.text",
    "category": "function",
    "text": "`text(string)`\n\nPlots a text.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#text-1",
    "page": "Atomic functions overview",
    "title": "text",
    "category": "section",
    "text": "textAvailable attributes and their defaults for Text{...} are:   align           (:left, :bottom)\n  alpha           1.0\n  color           :black\n  font            \"Dejavu Sans\"\n  linewidth       1\n  overdraw        false\n  position        Float32[0.0, 0.0]\n  rotation        0.0\n  strokecolor     (:black, 0.0)\n  strokewidth     0\n  textsize        20\n  transparency    false\n  visible         true(Image: library lines 224:224) (Image: library lines 234:249) (Image: library lines 87:116)\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 1<br><img src=\"media/stepper_demo/thumb-stepper_demo-1.jpg\" alt=\"Step 1<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 2<br><img src=\"media/stepper_demo/thumb-stepper_demo-2.jpg\" alt=\"Step 2<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 3<br><img src=\"media/stepper_demo/thumb-stepper_demo-3.jpg\" alt=\"Step 3<br>\" /></p></div>"
},

{
    "location": "functions-overview.html#AbstractPlotting.volume",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.volume",
    "category": "function",
    "text": "`volume(volume_data)`\n\nPlots a volume. Available algorithms are:\n\n:iso => IsoValue\n:absorption => Absorption\n:mip => MaximumIntensityProjection\n:absorptionrgba => AbsorptionRGBA\n:indexedabsorption => IndexedAbsorptionRGBA\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#volume-1",
    "page": "Atomic functions overview",
    "title": "volume",
    "category": "section",
    "text": "volumeAvailable attributes and their defaults for Volume{...} are:   absorption      1.0f0\n  algorithm       :iso\n  alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      (0, 1)\n  isorange        0.05f0\n  isovalue        0.5f0\n  linewidth       1\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 57:57) (Image: library lines 171:183) (Image: library lines 19:24) (Image: library lines 28:33) (Image: library lines 37:42)"
},

{
    "location": "functions-overview.html#Makie.contour",
    "page": "Atomic functions overview",
    "title": "Makie.contour",
    "category": "function",
    "text": "contour(x, y, z)\n\nCreates a contour plot of the plane spanning x::Vector, y::Vector, z::Matrix\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#contour-1",
    "page": "Atomic functions overview",
    "title": "contour",
    "category": "section",
    "text": "contourAvailable attributes and their defaults for Contour{...} are:   alpha           1.0\n  color           :viridis\n  colorrange      AbstractPlotting.Automatic()\n  fillrange       false\n  levels          5\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 185:187) (Image: library lines 204:205) (Image: library lines 171:183) (Image: library lines 562:571) (Image: library lines 4:8) (Image: library lines 12:15) (Image: library lines 46:51) (Image: library lines 55:86) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.arrows",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.arrows",
    "category": "function",
    "text": "AbstractPlotting.arrows(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.arrows(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#arrows-1",
    "page": "Atomic functions overview",
    "title": "arrows",
    "category": "section",
    "text": "arrowsAvailable attributes and their defaults for Arrows{...} are:   arrowcolor   :black\n  arrowhead    AbstractPlotting.Automatic()\n  arrowsize    0.3\n  arrowtail    nothing\n  lengthscale  1.0f0\n  linecolor    :black\n  linestyle    nothing\n  linewidth    1\n  normalize    false\n  scale        Float32[1.0, 1.0, 1.0](Image: library lines 68:74) (Image: library lines 210:222) (Image: library lines 238:253)"
},

{
    "location": "functions-overview.html#AbstractPlotting.barplot",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.barplot",
    "category": "function",
    "text": "AbstractPlotting.barplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.barplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#barplot-1",
    "page": "Atomic functions overview",
    "title": "barplot",
    "category": "section",
    "text": "barplotAvailable attributes and their defaults for BarPlot{...} are:   color       :black\n  colormap    :viridis\n  colorrange  AbstractPlotting.Automatic()\n  fillto      0.0\n  marker      GeometryTypes.HyperRectangle\n  width       nothing(Image: library lines 86:87) (Image: library lines 64:64)"
},

{
    "location": "functions-overview.html#AbstractPlotting.poly",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.poly",
    "category": "function",
    "text": "AbstractPlotting.poly(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.poly(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#poly-1",
    "page": "Atomic functions overview",
    "title": "poly",
    "category": "section",
    "text": "polyAvailable attributes and their defaults for Poly{...} are:   color        :black\n  colormap     :viridis\n  colorrange   AbstractPlotting.Automatic()\n  linestyle    nothing\n  strokecolor  RGBA{Float32}(0.0f0,0.0f0,0.0f0,0.0f0)\n  strokewidth  0.0\n  visible      true(Image: library lines 86:108) (Image: library lines 171:179) (Image: library lines 87:116) (Image: library lines 168:216)"
},

{
    "location": "functions-overview.html#AbstractPlotting.band",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.band",
    "category": "function",
    "text": "AbstractPlotting.band(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.band(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#band-1",
    "page": "Atomic functions overview",
    "title": "band",
    "category": "section",
    "text": "bandAvailable attributes and their defaults for Band{...} are:   alpha           1.0\n  color           RGBA{Float32}(1.0f0,0.0f0,0.0f0,0.2f0)\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 32:39)"
},

{
    "location": "functions-overview.html#AbstractPlotting.slider",
    "page": "Atomic functions overview",
    "title": "AbstractPlotting.slider",
    "category": "function",
    "text": "AbstractPlotting.slider(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.slider(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#slider-1",
    "page": "Atomic functions overview",
    "title": "slider",
    "category": "section",
    "text": "sliderAvailable attributes and their defaults for Slider{...} are:   backgroundcolor    (:gray, 0.01)\n  buttoncolor        :white\n  buttonsize         15\n  buttonstroke       1.5\n  buttonstrokecolor  :black\n  position           (0, 0)\n  slidercolor        (:gray, 0.6)\n  sliderheight       50\n  sliderlength       200\n  start              AbstractPlotting.Automatic()\n  strokecolor        (:black, 0.4)\n  strokewidth        1\n  textcolor          :black\n  textsize           15\n  value              0\n  valueprinter       AbstractPlotting.default_printer(Image: library lines 71:82) (Image: library lines 120:164)"
},

{
    "location": "functions-overview.html#vbox-1",
    "page": "Atomic functions overview",
    "title": "vbox",
    "category": "section",
    "text": "vboxAvailable attributes and their defaults for Combined{AbstractPlotting.vbox,T} where T are: (Image: library lines 143:150) (Image: library lines 260:271) (Image: library lines 71:82) (Image: library lines 120:164) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "signatures.html#",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "page",
    "text": ""
},

{
    "location": "signatures.html#Plot-function-signatures-1",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#General-function-signatures-and-usage-1",
    "page": "Plot function signatures",
    "title": "General function signatures and usage",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#Create-a-new-plot-inside-a-new-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot inside a new scene object",
    "category": "section",
    "text": "func(args...; kw_args...)where func are the atomics function, e.g. lines, scatter, surface, etc. For a list of the available atomics functions, see Atomic functions overview."
},

{
    "location": "signatures.html#Create-a-new-plot-as-a-subscene-of-the-specified-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot as a subscene of the specified scene object",
    "category": "section",
    "text": "func(scene::SceneLike, args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-current_scene()-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the current_scene()",
    "category": "section",
    "text": "func!(args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-specified-scene-as-a-subscene-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the specified scene as a subscene",
    "category": "section",
    "text": "func!(scene::SceneLike, args...; kw_args...)"
},

{
    "location": "signatures.html#AbstractPlotting.convert_arguments",
    "page": "Plot function signatures",
    "title": "AbstractPlotting.convert_arguments",
    "category": "function",
    "text": "Enables to use scatter like a surface plot with x::Vector, y::Vector, z::Matrix spanning z over the grid spanned by x y\n\n\n\n\n\nconvert_arguments(P, x, y, z)::(Vector)\n\nTakes vectors x, y, and z and turns it into a vector of 3D points of the values from x, y, and z. P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input GeometryPrimitive x and decomposes it to points. P is the plot Type (it is optional).\n\n\n\n\n\nAccepts a Vector of Pair of Points (e.g. [Point(0, 0) => Point(1, 1), ...]) to encode e.g. linesegments or directions.\n\n\n\n\n\nconvert_arguments(P, y)::Vector\n\nTakes vector y and generates a range from 1 to the length of y, for plotting on an arbitrary x axis.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y)::(Vector)\n\nTakes vectors x and y and turns it into a vector of 2D points of the values from x and y.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes 2 ClosedIntervals\'s x, y, and an AbstractMatrix z, and converts the closed range to linspaces with size(z, 1/2) P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(x)::(String)\n\nTakes an input AbstractString x and converts it to a string.\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input HyperRectangle x and decomposes it to points.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x::VecOrMat, y::VecOrMat, z::Matrix)\n\nTakes 3 AbstractMatrix x, y, and z, converts them to Float32 and outputs them in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes an AbstractMatrix, converts the dimesions n and m into ClosedInterval, and stores the ClosedInterval to n and m, plus the original matrix in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, f)::(Vector, Vector, Matrix)\n\nTakes vectors x and y and the function f, and applies f on the grid that x and y span. This is equivalent to f.(x, y\'). P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, ClosedInterval, Matrix}\n\nTakes an array of {T, 3} where T, converts the dimesions n, m and k into ClosedInterval, and stores the ClosedInterval to n, m and k, plus the original array in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, i)::(Vector, Vector, Vector, Matrix)\n\nTakes 3 AbstractVector x, y, and z and the AbstractMatrix i, and puts everything in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, f)::(Vector, Vector, Vector, Matrix)\n\nTakes AbstractVector x, y, and z and the function f, evaluates f on the volume spanned by x, y and z, and puts x, y, z and f(x,y,z) in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a mesh out of those, under the assumption that every 3 points form a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, xyz::AbstractVector)::GLNormalMesh\n\nTakes an input mesh and a vector xyz representing the vertices of the mesh, and creates indices under the assumption, that each triplet in xyz forms a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z, indices)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a triangle mesh out of those, using the faces in indices, which can be integers (every 3 -> one triangle), or GeometryTypes.Face{N, <: Integer}.\n\n\n\n\n\nconvert_arguments(Mesh, vertices, indices)::GLNormalMesh\n\nTakes vertices and indices, and creates a triangle mesh out of those. See to_vertices and to_triangles for more informations about accepted types.\n\n\n\n\n\n"
},

{
    "location": "signatures.html#Detailed-function-signatures-1",
    "page": "Plot function signatures",
    "title": "Detailed function signatures",
    "category": "section",
    "text": "The input arguments are handled by the convert_arguments function, which handles a large variety of inputs. The signatures accepted by convert_arguments are also those accepted by the plotting functions.Accepted signatures are as follows:convert_argumentsSee Plot attributes for the available plot attributes."
},

{
    "location": "plot-attributes.html#",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "page",
    "text": ""
},

{
    "location": "plot-attributes.html#Plot-attributes-1",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "section",
    "text": "using MakieBelow is the list of all of the available plot attributes for Makie. You can also get this by doinghelp_attributes(Typ[; extended = true])where Typ is the plot type.To view a plot\'s attributes and their values, you can call plot.attributes to view the raw output, or plot.attributes.attributes to get a Dict of the attribute keys and their values.p = scatter(rand(10), rand(10))[end]; # use `[end]` to access the plot\np.attributes\np.attributes.attributes"
},

{
    "location": "plot-attributes.html#List-of-attributes-1",
    "page": "Plot attributes",
    "title": "List of attributes",
    "category": "section",
    "text": "Symbol Description\nabsorption Float32. Sets the absorption value for volume plots.\nalgorithm Algorithm to be used for volume plots. Can be one of :iso, :absorption, :mip, :absorptionrgba, or :indexedabsorption.\nalign (:pos, :pos). Specify the text alignment, where :pos can be :left, :center, or :right.\nalpha Float in [0,1]. The alpha value (transparency).\ncolor Symbol or Colorant. The color of the main plot element (markers, lines, etc.). Can be a color symbol/string like :red, or a Colorant.\ncolormap The color map of the main plot. Call available_gradients() to see what gradients are available. Can also be used with any Vector{<: Colorant}, or e.g. [:red, :black]\ncolorrange A tuple (min, max) where min and max specify the data range to be used for indexing the colormap. E.g. color = [-2, 4] with colorrange = (-2, 4) will map to the lowest and highest color value of the colormap.\nfillrange Bool. Toggles range filling in contour plots.\nfont String. Specifies the font, and can choose any font available on the system.\nglowcolor Color Type. Color of the marker glow (outside the border) in scatter plots.\nglowwidth Number. Width of the marker glow in scatter plots.\nimage The image to be plotted on the plot.\ninterpolate Bool. For heatmap and images. Toggles color interpolation between nearby pixels.\nisorange Float32. Sets the isorange for volume plots.\nisovalue Float32. Sets the isovalue for volume plots.\nlevels Integer. Number of levels for a contour-type plot.\nlinestyle Symbol. Style of the line (for line and linesegments plots). Available styles are :dash, :dot, :dashdot, and :dashdotdot. You can also supply an array describing the length of each gap/fill.\nlinewidth Number. Width of the line in line and linesegments plots.\nmarker Symbol, Shape, or AbstractVector.\nmarker_offset Array of GeometryTypes.Point\'s. Specifies the offset coordinates for the markers. See the Marker offset example.\nmarkersize Number or AbstractVector. Specifies size (radius pixels) of the markers.\nposition NTuple{2,Float}, (x, y). Specify the coordinates to position text at.\nrotation Float32. Specifies the rotation in radians.\nrotations AbstractVector{Float32}. Similar to :rotation, except it specifies the rotations for each element in the plot.\nshading Bool. Specifies if shading should be on or not (for meshes).\nstrokecolor Color Type. Color of the marker stroke (border).\nstrokewidth Number. Width of the marker stroke (in pixels).\ntextsize Integer. Font pointsize for text.\ntransformation (:plane, location). Transforms the :plane to the specified location. Possible :plane\'s are :xy, :yz, and :xz.\nvisible Bool. Toggle visibility of plot."
},

{
    "location": "axis.html#",
    "page": "Axis",
    "title": "Axis",
    "category": "page",
    "text": ""
},

{
    "location": "axis.html#Axis-1",
    "page": "Axis",
    "title": "Axis",
    "category": "section",
    "text": "The axis is just a scene object, making it easy to manipulate and share between plots. Axis objects also contains the mapping you want to apply to the data and can interactively be changed. An Axis object can be created from any boundingbox and inserted into any plot.There are two types of axes: Axis2D and Axis3D."
},

{
    "location": "axis.html#Interacting-with-the-Axis-1",
    "page": "Axis",
    "title": "Interacting with the Axis",
    "category": "section",
    "text": "One can quite easily interact with the attributes of the axis like with any other plot.You can access the axis of a scene by doingaxis = scene[Axis]The axis attributes are nested, and there are different attributes depending on whether it is an Axis2D or Axis3D object.You can access the nested attributes in multiple ways. Take the nested attribute axis -> :names -> :axisnames, for example:axis[:names, :axisnames] = (\"x\", \"y\", \"z\")\naxis[:names][:axisnames] = (\"x\", \"y\", \"z\")\naxis = (names = (axisnames = (\"x\", \"y\", \"z\"),),)"
},

{
    "location": "axis.html#Examples-1",
    "page": "Axis",
    "title": "Examples",
    "category": "section",
    "text": "@example_database(\"Unicode Marker\")@example_database(\"Axis + Surface\")@example_database(\"Axis theming\")"
},

{
    "location": "axis.html#Axis2D-1",
    "page": "Axis",
    "title": "Axis2D",
    "category": "section",
    "text": ""
},

{
    "location": "axis.html#Axis2D-attributes-groups-1",
    "page": "Axis",
    "title": "Axis2D attributes groups",
    "category": "section",
    "text": "Symbol Description\nframe See the detailed descriptions for frame attributes.\ngrid See the detailed descriptions for grid attributes.\nnames See the detailed descriptions for names attributes.\nticks See the detailed descriptions for ticks attributes."
},

{
    "location": "axis.html#:grid-1",
    "page": "Axis",
    "title": ":grid",
    "category": "section",
    "text": "Symbol Description\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth NTuple{2, Number}. Width of the x and y grids."
},

{
    "location": "axis.html#:ticks-1",
    "page": "Axis",
    "title": ":ticks",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{2,(:pos, :pos)}. Specify the text alignment for the axis ticks, where :pos can be :left, :center, or :right\nfont NTuple{2,String}. Specifies the font and can name any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis tick labels and the axes themselves.\nlinecolor NTuple{2,Symbol or Colorant}. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth NTuple{2,Number}. Width of the axes ticks.\nrotation NTuple{3,Float32}. Specifies the rotations for each axis\'s ticks, in radians.\ntextcolor NTuple{2,Symbol or Colorant}. Specifies the color of the axes ticks. Can be a color symbol/string like :red, or a Colorant.\ntextsize NTuple{2,Int}. Font pointsize for tick labels.\ntitle_gap Number. Specifies the gap (in pixels) between the axis titles and the axis tick labels."
},

{
    "location": "axis.html#:frame-1",
    "page": "Axis",
    "title": ":frame",
    "category": "section",
    "text": "Symbol Description\narrow_size Number. Size of the axes arrows.\naxis_arrow Bool. Toggles the axes arrows.\naxis_position \nframes NTuple{2,NTuple{2,Bool}}.\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth Number. Widths of the axes frame lines."
},

{
    "location": "axis.html#:names-1",
    "page": "Axis",
    "title": ":names",
    "category": "section",
    "text": "Symbol Description\nalign (:pos, :pos). Specify the text alignment, where :pos can be :left, :center, or :right.\naxisnames NTuple{2,String}. Specifies the text labels for the axes.\nfont NTuple{2,String}. Specifies the font and can name any font available on the system.\nrotation NTuple{3,Float32}. Specifies the rotations for each axis\'s label, in radians.\ntextcolor NTuple{2,Symbol or Colorant}. Specifies the color of the axes labels. Can be a color symbol/string like :red, or a Colorant.\ntextsize Integer. Font pointsize for text."
},

{
    "location": "axis.html#Axis3D-1",
    "page": "Axis",
    "title": "Axis3D",
    "category": "section",
    "text": ""
},

{
    "location": "axis.html#Axis3D-attributes-groups-1",
    "page": "Axis",
    "title": "Axis3D attributes groups",
    "category": "section",
    "text": "Symbol Description\nframe See the detailed descriptions for frame attributes.\nnames See the detailed descriptions for names attributes.\nscale NTuple{3,Float}. Specifies the scaling for the axes.\nshowaxis NTuple{3,Bool}. Specifies whether to show the axes.\nshowgrid NTuple{3,Bool}. Specifies whether to show the axis grids.\nshowticks NTuple{3,Bool}. Specifies whether to show the axis ticks.\nticks See the detailed descriptions for ticks attributes."
},

{
    "location": "axis.html#:ticks-2",
    "page": "Axis",
    "title": ":ticks",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{3,(:pos, :pos)}. Specify the text alignment for the axis ticks, where :pos can be :left, :center, or :right.\nfont NTuple{3,String}. Specifies the font for the axis ticks, and can choose any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis ticks and the axes themselves.\nrotation NTuple{3,Quaternion{Float32}}. Specifies the rotations for each axis\'s ticks, in radians.\ntextcolor NTuple{3,Symbol or Colorant}. Specifies the color of the axes ticks. Can be a color symbol/string like :red, or a Colorant.\ntextsize Integer. Font pointsize for text."
},

{
    "location": "axis.html#:frame-2",
    "page": "Axis",
    "title": ":frame",
    "category": "section",
    "text": "Symbol Description\naxiscolor Symbol or Colorant. Specifies the color of the axes. Can be a color symbol/string like :red, or a Colorant.\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinewidth Number. Width of the axes lines."
},

{
    "location": "axis.html#:names-2",
    "page": "Axis",
    "title": ":names",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{3,(:pos, :pos)}. Specify the text alignment for the axis labels, where :pos can be :left, :center, or :right.\naxisnames NTuple{3,String}. Specifies the axis labels.\nfont NTuple{3,String}. Specifies the font for the axis labels, and can choose any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis labels and the axes themselves.\nrotation NTuple{3,Quaternion{Float32}}. Specifies the rotations for each axis\'s label, in radians.\ntextcolor NTuple{3,Symbol or Colorant}. Specifies the color of the axes labels. Can be a color symbol/string like :red, or a Colorant.\ntextsize NTuple{3,Int}. Font pointsize for axes labels."
},

{
    "location": "interaction.html#",
    "page": "Interaction",
    "title": "Interaction",
    "category": "page",
    "text": "CurrentModule = Makieusing Makieusing Makieusing Makie"
},

{
    "location": "interaction.html#Interaction-1",
    "page": "Interaction",
    "title": "Interaction",
    "category": "section",
    "text": "Makie offers a sophisticated referencing system to share attributes across the Scene in your plot. This is great for animations and saving resources – also if the backend decides to put data on the GPU you might even share those in GPU memory.Animations in Makie are handled by using Reactive.jl signals. These signals are called Nodes in Makie, and can be continuously updated by pushing a value to it. See below for a brief tutorial about the signals pipeline."
},

{
    "location": "interaction.html#Tutorial:-interaction-pipeline-1",
    "page": "Interaction",
    "title": "Tutorial: interaction pipeline",
    "category": "section",
    "text": "First, create a Node:x = Node(0.0) # set up a Node, and give it a default value of 0.0Note that Reactive also assigns an ID and a unique name to the Node. You can then derive a signal off of the value of the Node by using lift:f(a) = a^2\ny = lift(a -> f(a), x)Now, for every value of the Node x, the derived Node y will hold the value f(x).To update the value of the Node, push! to it:push!(x, 5.0)Note how the value of y has been changed as well, in addition to x:for i in (x, y)\n    println(to_value(i))\nendThat is to say, the Node y maps the function f (which is a -> a^2 in this case) on x whenever the Node x is updated, and returns the corresponding signal to y. This is the basis of signal updating, and is used for updating plots in Makie. Any plot created based on this pipeline system will get updated whenever the Nodes it is based on are updated.Note: for now, lift is just an alias for Reactive.map, and Node is just an alias for Reactive.Signal.For more information, check out Reactive.jl\'s documentation."
},

{
    "location": "interaction.html#Animation-using-time-1",
    "page": "Interaction",
    "title": "Animation using time",
    "category": "section",
    "text": "To animate a scene, you need to create a Node, e.g.:time = Node(0.0)and use lift on the Node to set up a pipeline to access its value. For example:scene = Scene()\ntime = Node(0.0)\nmyfunc(v, t) = sin.(v, t)\n\nscene = lines!(\n    scene,\n    lift(t -> f.(range(0, stop=2pi, length=50), t), time)\n)now, whenever the Node time is updated (e.g. when you push! to it), the plot will also be updated.push!(time, Base.time())"
},

{
    "location": "interaction.html#Examples-1",
    "page": "Interaction",
    "title": "Examples",
    "category": "section",
    "text": "@example_database(\"pulsing marker\")@example_database(\"Interaction\")@example_database(\"pong\")"
},

{
    "location": "interaction.html#Interaction-using-the-mouse-1",
    "page": "Interaction",
    "title": "Interaction using the mouse",
    "category": "section",
    "text": "A few default Nodes are already implemented in a scene\'s Events (see them in scene.events), so to use them in your interaction pipeline, you can simply lift them.For example, for interaction with the mouse cursor, lift the mouseposition signal.pos = lift(scene.events.mouseposition) do mpos\n    # do stuff\nend"
},

{
    "location": "interaction.html#Examples-2",
    "page": "Interaction",
    "title": "Examples",
    "category": "section",
    "text": "@example_database(\"Interaction with Mouse\")For more examples, consult the Examples index."
},

{
    "location": "interaction.html#Correct-way-to-animate-a-plot-1",
    "page": "Interaction",
    "title": "Correct way to animate a plot",
    "category": "section",
    "text": "You can animate a plot in a for loop:r = 1:10\nfor i = 1:length(r)\n    push!(s[:markersize], r[i])\n    AbstractPlotting.force_update!()\n    sleep(1/24)\nendBut, if you push! to a plot, it doesn\'t necessarily get updated whenever an attribute changes, so you must call force_update!().A better way to do it is to access the attribute of a plot directly using its symbol, and when you change it, the plot automatically gets updated live, so you no longer need to call force_update!():for i = 1:length(r)\n    s[:markersize] = r[i]\n    # AbstractPlotting.force_update!() is no longer needed\n    sleep(1/24)\nendSimilarly, for plots based on functions:scene = Scene()\nv = range(0, stop=4pi, length=50)\nf(v, t) = sin(v + t) # some function\ns = lines!(\n    scene,\n    lift(t -> f.(v, t), time),\n)[end];\n\nfor i = 1:length(v)\n    push!(time, i)\n    sleep(1/24)\nend"
},

{
    "location": "output.html#",
    "page": "Output",
    "title": "Output",
    "category": "page",
    "text": ""
},

{
    "location": "output.html#Output-1",
    "page": "Output",
    "title": "Output",
    "category": "section",
    "text": "Makie overloads the FileIO interface, so it is simple to save plots as images or videos."
},

{
    "location": "output.html#Static-plots-1",
    "page": "Output",
    "title": "Static plots",
    "category": "section",
    "text": "To save a scene as an image, you can just write e.g.:Makie.save(\"plot.png\", scene)\nMakie.save(\"plot.jpg\", scene)where scene is the scene handle.In the backend, ImageMagick is used for the image format conversions."
},

{
    "location": "output.html#Stepper-plots-1",
    "page": "Output",
    "title": "Stepper plots",
    "category": "section",
    "text": "A Stepper is a scene type that simplifies the cumulative plotting, modifying of an existing scene, and saving of scenes. These are great for showing off progressive changes in plots, such as demonstrating the effects of theming or changing data.You can initialize a Stepper by doing:st = Stepper(scene, @replace_with_a_path)and save the scene content & increment the stepper by using:step!(st)@example_database(\"Stepper demo\")"
},

{
    "location": "output.html#Makie.record",
    "page": "Output",
    "title": "Makie.record",
    "category": "function",
    "text": "record(func, scene, path)\n\nusage:\n\n    record(scene, \"test.gif\") do io\n        for i = 1:100\n            scene.plots[:color] = ...# animate scene\n            recordframe!(io) # record a new frame\n        end\n    end\n\n\n\n\n\nrecord(func, scene, path, iter)\n\nusage:\n\n    record(scene, \"test.gif\", 1:100) do i\n        scene.plots[:color] = ...# animate scene\n    end\n\n\n\n\n\n"
},

{
    "location": "output.html#Animated-plots-1",
    "page": "Output",
    "title": "Animated plots",
    "category": "section",
    "text": "It is also possible to output animated plots as videos (note that this requires ffmpeg to be installed and properly configured on your computer (test this by running ffmpeg -version from a terminal window).)recordFor recording of videos (either as .mp4 or .gif), you can do:record(scene, \"video.mp4\", itr) do i\n    func(i) # or some other animation in scene\nendwhere itr is an iterator and scene is the scene handle.It is also possible to record to gifs:record(scene, \"video.gif\", itr) do i\n    func(i) # or some other animation in scene\nendIn both cases, the returned value is a path pointing to the location of the recorded file."
},

{
    "location": "output.html#Example-usage-1",
    "page": "Output",
    "title": "Example usage",
    "category": "section",
    "text": "@example_database(\"Record Video\")For more info, consult the Examples index."
},

{
    "location": "index-examples.html#",
    "page": "Examples index",
    "title": "Examples index",
    "category": "page",
    "text": ""
},

{
    "location": "index-examples.html#Examples-index-1",
    "page": "Examples index",
    "title": "Examples index",
    "category": "section",
    "text": "Examples for the atomic plotting functions.Pages = example_list\nDepth = 2"
},

{
    "location": "examples-heatmap.html#",
    "page": "heatmap",
    "title": "heatmap",
    "category": "page",
    "text": ""
},

{
    "location": "examples-heatmap.html#heatmap-1",
    "page": "heatmap",
    "title": "heatmap",
    "category": "section",
    "text": ""
},

{
    "location": "examples-heatmap.html#Tutorial-heatmap-1",
    "page": "heatmap",
    "title": "Tutorial heatmap",
    "category": "section",
    "text": "Tags: heatmap, tutorial, tutorials.using Makie\n\n data = rand(50, 50)\n scene = heatmap(data)\n\n(Image: library lines 72:73)"
},

{
    "location": "examples-heatmap.html#Test-heatmap-image-overlap-1",
    "page": "heatmap",
    "title": "Test heatmap + image overlap",
    "category": "section",
    "text": "Tags: 2d, heatmap, image, transparency.using Makie\n\n heatmap(rand(32, 32))\n image!(map(x->RGBAf0(x,0.5, 0.5, 0.8), rand(32,32)))\n\n(Image: library lines 42:43)"
},

{
    "location": "examples-heatmap.html#heatmap-interpolation-1",
    "page": "heatmap",
    "title": "heatmap interpolation",
    "category": "section",
    "text": "Tags: 2d, hbox, heatmap, interpolate, subscene, theme, vbox.using Makie\n using AbstractPlotting: hbox, vbox\n\n data = rand(50, 100)\n p1 = heatmap(data, interpolate = true)\n p2 = heatmap(data, interpolate = false)\n t = Theme(align = (:left, :bottom), raw = true, camera = campixel!)\n title1 = text(t, \"Interpolate = true\")\n title2 = text(t, \"Interpolate = false\")\n s = vbox(\n     hbox(p1, title1),\n     hbox(p2, title2),\n )\n\n(Image: library lines 143:150)"
},

{
    "location": "examples-heatmap.html#Heatmap-1",
    "page": "heatmap",
    "title": "Heatmap",
    "category": "section",
    "text": "Tags: 2d, heatmap.using Makie\n\n heatmap(rand(32, 32))\n\n(Image: library lines 209:209)"
},

{
    "location": "examples-heatmap.html#D-Contour-with-2D-contour-slices-1",
    "page": "heatmap",
    "title": "3D Contour with 2D contour slices",
    "category": "section",
    "text": "Tags: 3d, contour, heatmap, transformation, volume.using Makie\n using LinearAlgebra\n\n function test(x, y, z)\n     xy = [x, y, z]\n     ((xy\') * Matrix(I, 3, 3) * xy) / 20\n end\n x = range(-2pi, stop = 2pi, length = 100)\n scene = Scene()\n c = contour!(scene, x, x, x, test, levels = 6, alpha = 0.3)[end]\n xm, ym, zm = minimum(scene.limits[])\n # c[4] == fourth argument of the above plotting command\n contour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm), linewidth = 10)\n heatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\n contour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n(Image: library lines 171:183)"
},

{
    "location": "examples-heatmap.html#Mouse-Picking-1",
    "page": "heatmap",
    "title": "Mouse Picking",
    "category": "section",
    "text": "Tags: heatmap, interaction, interactive, record_events, scatter.using Makie\n\n img = rand(100, 100)\n scene = Scene(resolution = (500, 500))\n heatmap!(scene, img, scale_plot = false)\n clicks = Node(Point2f0[(0,0)])\n on(scene.events.mousebuttons) do buttons\n    if ispressed(scene, Mouse.left)\n        pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n        push!(clicks, push!(clicks[], pos))\n    end\n    return\n end\n scatter!(scene, clicks, color = :red, marker = \'+\', markersize = 10)\n RecordEvents(scene, \"./docs/media/mouse_picking\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_picking.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-heatmap.html#Add-and-change-points-1",
    "page": "heatmap",
    "title": "Add and change points",
    "category": "section",
    "text": "Tags: center, heatmap, interaction, ispressed, on, record_events, scatter, to_world.using Makie\n using LinearAlgebra\n\n img = rand(100, 100)\n scene = Scene(scale_plot = false, resolution = (500, 500))\n heatmap!(scene, img)\n clicks = Node(Point2f0[(0, 0)])\n blues = Node(Point2f0[])\n on(scene.events.mousebuttons) do buttons\n     if ispressed(scene, Mouse.left)\n         pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n         found = -1\n         c = clicks[]\n         for i in 1:length(c)\n            if norm(pos - c[i]) < 1\n                found = i\n            end\n         end\n         if found >= 1\n             blues[] = push!(blues[], pos)\n             deleteat!(clicks[], found)\n         else\n             push!(clicks[], pos)\n         end\n         clicks[] = clicks[]\n    end\n    return\n end\n t = Theme(markersize = 10, raw = true)\n scatter!(scene, t, clicks, color = :red, marker = \'+\')\n red_clicks = scene[end]\n scatter!(scene, t, blues, color = :blue, marker = \'o\')\n center!(scene)\n RecordEvents(scene, \"./docs/media/add_and_change_points\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\add_and_change_points.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-heatmap.html#Layouting-1",
    "page": "heatmap",
    "title": "Layouting",
    "category": "section",
    "text": "Tags: heatmap, layout, lines, scatter, surface, vbox.using Makie\n\n p1 = scatter(rand(10), markersize = 1)\n p2 = lines(rand(10), rand(10))\n p3 = surface(0..1, 0..1, rand(100, 100))\n p4 = heatmap(rand(100, 100))\n x = 0:0.1:10\n p5 = lines(0:0.1:10, sin.(x))\n pscene = vbox(\n     hbox(p1, p2),\n     p3,\n     hbox(p4, p5, sizes = [0.7, 0.3]),\n     sizes = [0.2, 0.6, 0.2]\n )\n\n(Image: library lines 4:10)"
},

{
    "location": "examples-heatmap.html#Comparing-contours,-image,-surfaces-and-heatmaps-1",
    "page": "heatmap",
    "title": "Comparing contours, image, surfaces and heatmaps",
    "category": "section",
    "text": "Tags: contour, heatmap, image, layout, surface, vbox.using Makie\n\n N = 20\n x = LinRange(-0.3, 1, N)\n y = LinRange(-1, 0.5, N)\n z = x .* y\'\n hbox(\n     vbox(\n         contour(x, y, z, levels = 20, linewidth =3),\n         contour(x, y, z, levels = 0, linewidth = 0, fillrange = true),\n         heatmap(x, y, z),\n     ),\n     vbox(\n         image(x, y, z, colormap = :viridis),\n         surface(x, y, fill(0f0, N, N), color = z, shading = false),\n         image(-0.3..1, -1..0.5, Makie.logo())\n     )\n )\n\n(Image: library lines 19:23)"
},

{
    "location": "examples-image.html#",
    "page": "image",
    "title": "image",
    "category": "page",
    "text": ""
},

{
    "location": "examples-image.html#image-1",
    "page": "image",
    "title": "image",
    "category": "section",
    "text": ""
},

{
    "location": "examples-image.html#Test-heatmap-image-overlap-1",
    "page": "image",
    "title": "Test heatmap + image overlap",
    "category": "section",
    "text": "Tags: 2d, heatmap, image, transparency.using Makie\n\n heatmap(rand(32, 32))\n image!(map(x->RGBAf0(x,0.5, 0.5, 0.8), rand(32,32)))\n\n(Image: library lines 42:43)"
},

{
    "location": "examples-image.html#image-2",
    "page": "image",
    "title": "image",
    "category": "section",
    "text": "Tags: 2d, image.using Makie\n\n AbstractPlotting.hbox(\n     image(Makie.logo(), scale_plot = false),\n     image(rand(100, 500), scale_plot = false),\n )\n\n(Image: library lines 77:77)"
},

{
    "location": "examples-image.html#Subscenes-1",
    "page": "image",
    "title": "Subscenes",
    "category": "section",
    "text": "Tags: 2d, image, scatter, subscene.using Makie\n\n img = rand(RGBAf0, 100, 100)\n scene = image(img, show_axis = false)\n subscene = Scene(scene, IRect(100, 100, 300, 300))\n scatter!(subscene, rand(100) * 200, rand(100) * 200, markersize = 4)\n scene\n\n(Image: library lines 163:167)"
},

{
    "location": "examples-image.html#Image-on-Geometry-(Moon)-1",
    "page": "image",
    "title": "Image on Geometry (Moon)",
    "category": "section",
    "text": "Tags: 3d, image, mesh.using Makie\n using FileIO\n\n moon = try\n     load(download(\"https://svs.gsfc.nasa.gov/vis/a000000/a004600/a004675/phases.0001_print.jpg\"))\n catch e\n     @warn(\"Download the moon failed. Using random image, so this test will fail! (error: $e)\")\n     rand(RGBAf0, 100, 100) # don\'t error test when e.g. offline\n end\n scene = mesh(Sphere(Point3f0(0), 1f0), color = moon, shading = false, show_axis = false, center = false)\n update_cam!(scene, Vec3f0(-2, 2, 2), Vec3f0(0))\n scene\n\n(Image: library lines 4:13)"
},

{
    "location": "examples-image.html#Image-on-Geometry-(Earth)-1",
    "page": "image",
    "title": "Image on Geometry (Earth)",
    "category": "section",
    "text": "Tags: 3d, image, mesh.using Makie\n using FileIO, Colors\n\n earth = try\n     load(download(\"https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.png\"))\n catch e\n     @warn(\"Downloading the earth failed. Using random image, so this test will fail! (error: $e)\")\n     rand(RGBAf0, 100, 100) # don\'t error test when e.g. offline\n end\n m = GLNormalUVMesh(Sphere(Point3f0(0), 1f0), 60)\n mesh(m, color = earth, shading = false)\n\n(Image: library lines 16:24)"
},

{
    "location": "examples-image.html#Surface-with-image-1",
    "page": "image",
    "title": "Surface with image",
    "category": "section",
    "text": "Tags: 3d, image, surface.using Makie\n\n N = 30\n function xy_data(x, y)\n     r = sqrt(x^2 + y^2)\n     r == 0.0 ? 1f0 : (sin(r)/r)\n end\n r = range(-2, stop = 2, length = N)\n surf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\n surface(\n     r, r, surf_func(10),\n     color = rand(RGBAf0, 124, 124)\n )\n\n(Image: library lines 112:119)"
},

{
    "location": "examples-image.html#Image-on-Surface-Sphere-1",
    "page": "image",
    "title": "Image on Surface Sphere",
    "category": "section",
    "text": "Tags: 3d, image, sphere, surface.using Makie\n\n n = 20\n θ = [0;(0.5:n-0.5)/n;1]\n φ = [(0:2n-2)*2/(2n-1);2]\n x = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\n y = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\n z = [cospi(θ) for θ in θ, φ in φ]\n rand([-1f0, 1f0], 3)\n pts = vec(Point3f0.(x, y, z))\n surface(x, y, z, color = Makie.logo())\n\n(Image: library lines 226:234)"
},

{
    "location": "examples-image.html#image-scatter-1",
    "page": "image",
    "title": "image scatter",
    "category": "section",
    "text": "Tags: 3d, image, scatter.using Makie\n using LinearAlgebra\n\n scatter(\n     1:10, 1:10, rand(10, 10) .* 10,\n     rotations = normalize.(rand(Quaternionf0, 10*10)),\n     markersize = 1,\n     # can also be an array of images for each point\n     # need to be the same size for best performance, though\n     marker = Makie.logo()\n )\n\n(Image: library lines 393:394)"
},

{
    "location": "examples-image.html#colormaps-1",
    "page": "image",
    "title": "colormaps",
    "category": "section",
    "text": "Tags: colorbrewer, colormap, documentation, image, meta, translate.using Makie\n\n h = 0.0\n offset = 0.1\n scene = Scene()\n cam2d!(scene)\n plot = map(AbstractPlotting.colorbrewer_names) do cmap\n     global h\n     c = to_colormap(cmap)\n     cbar = image!(\n         scene,\n         range(0, stop = 10, length = length(c)),\n         range(0, stop = 1, length = length(c)),\n         reshape(c, (1, length(c))),\n         show_axis = false\n     )[end]\n     text!(\n         scene,\n         string(cmap, \":\"),\n         position = Point2f0(-0.1, 0.5 + h),\n         align = (:right, :center),\n         show_axis = false,\n         textsize = 0.4\n     )\n     translate!(cbar, 0, h, 0)\n     h -= (1 + offset)\n end\n scene\n\n(Image: library lines 94:119)"
},

{
    "location": "examples-image.html#Comparing-contours,-image,-surfaces-and-heatmaps-1",
    "page": "image",
    "title": "Comparing contours, image, surfaces and heatmaps",
    "category": "section",
    "text": "Tags: contour, heatmap, image, layout, surface, vbox.using Makie\n\n N = 20\n x = LinRange(-0.3, 1, N)\n y = LinRange(-1, 0.5, N)\n z = x .* y\'\n hbox(\n     vbox(\n         contour(x, y, z, levels = 20, linewidth =3),\n         contour(x, y, z, levels = 0, linewidth = 0, fillrange = true),\n         heatmap(x, y, z),\n     ),\n     vbox(\n         image(x, y, z, colormap = :viridis),\n         surface(x, y, fill(0f0, N, N), color = z, shading = false),\n         image(-0.3..1, -1..0.5, Makie.logo())\n     )\n )\n\n(Image: library lines 19:23)"
},

{
    "location": "examples-lines.html#",
    "page": "lines",
    "title": "lines",
    "category": "page",
    "text": ""
},

{
    "location": "examples-lines.html#lines-1",
    "page": "lines",
    "title": "lines",
    "category": "section",
    "text": ""
},

{
    "location": "examples-lines.html#Time-Series-1",
    "page": "lines",
    "title": "Time Series",
    "category": "section",
    "text": "Tags: 2d, lines.using Makie\n\n function run_example()\n     f0 = 1/2; fs = 100;\n     winsec = 4; hopsec = 1/60\n     nwin = round(Integer, winsec*fs)\n     nhop = round(Integer, hopsec*fs)\n     # do the loop\n     frame_start = -winsec\n     frame_time = collect((0:(nwin-1)) * (1/fs))\n     aframe = sin.(2*pi*f0.*(frame_start .+ frame_time))\n     scene = lines(frame_start .+ frame_time, aframe)\n     lineplot = scene[end]\n     N = 50\n     record(scene, \"./docs/media/time_series.mp4\", 1:N) do i\n         aframe .= sin.(2*pi*f0.*(frame_start .+ frame_time))\n         # append!(aframe, randn(nhop)); deleteat!(aframe, 1:nhop)\n         lineplot[1] = frame_start .+ frame_time\n         lineplot[2] = aframe\n         AbstractPlotting.update_limits!(scene)\n         AbstractPlotting.update!(scene)\n         sleep(hopsec)\n         frame_start += hopsec\n     end\n end\n run_example()\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\time_series.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-lines.html#Fill-between-1",
    "page": "lines",
    "title": "Fill between",
    "category": "section",
    "text": "Tags: 2d, band, fill_between, lines.using Makie\n using AbstractPlotting: fill_between!\n\n x = -5:0.01:5\n y1 = -5 .* x .* x .+ x .+ 10\n y2 = 5 .* x .* x .+ x\n lines(x, y1)\n lines!(x, y2)\n fill_between!(x, y1, y2, where = y2 .> y1, color = :yellow)\n fill_between!(x, y1, y2, where = y2 .<= y1, color = :red)\n\n(Image: library lines 32:39)"
},

{
    "location": "examples-lines.html#Hbox-1",
    "page": "lines",
    "title": "Hbox",
    "category": "section",
    "text": "Tags: 2d, hbox, lines, scatter.using Makie\n\n t = range(-122277.93103448274, stop=-14798.035304081845, length=29542)\n x = -42 .- randn(length(t))\n sc1 = scatter(t, x, color=:black, markersize=sqrt(length(t)/20))\n sc2 = lines(t[1:end-1], diff(x), color = :blue)\n hbox(sc2, sc1)\n\n(Image: library lines 190:194)"
},

{
    "location": "examples-lines.html#Customize-Axes-1",
    "page": "lines",
    "title": "Customize Axes",
    "category": "section",
    "text": "Tags: 2d, axis, lines.using Makie\n\n x = LinRange(0,3pi,200); y = sin.(x)\n lin = lines(x, y, padding = (0.0, 0.0), axis = (\n     names = (axisnames = (\"\", \"\"),),\n     grid = (linewidth = (0, 0),),\n ))\n\n(Image: library lines 197:198)"
},

{
    "location": "examples-lines.html#Line-Function-1",
    "page": "lines",
    "title": "Line Function",
    "category": "section",
    "text": "Tags: 2d, 3d, lines.using Makie\n\n scene = Scene()\n x = range(0, stop = 3pi)\n lines!(scene, x, sin.(x))\n lines!(scene, x, cos.(x), color = :blue)\n\n(Image: library lines 125:128)"
},

{
    "location": "examples-lines.html#Connected-Sphere-1",
    "page": "lines",
    "title": "Connected Sphere",
    "category": "section",
    "text": "Tags: 3d, axis, lines, scatter, views.using Makie\n\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere)\n linepos = view(positions, rand(1:length(positions), 1000))\n scene = lines(linepos, linewidth = 0.1, color = :black)\n scatter!(scene, positions, strokewidth = 10, strokecolor = :white, color = RGBAf0(0.9, 0.2, 0.4, 0.6))\n scene\n\n(Image: library lines 385:390)"
},

{
    "location": "examples-lines.html#Moire-1",
    "page": "lines",
    "title": "Moire",
    "category": "section",
    "text": "Tags: 3d, camera, lines, linesegments, mp4, record, rotate_cam!, update_cam!.using Makie\n\n function cartesian(ll)\n     return Point3f0(\n         cos(ll[1]) * sin(ll[2]),\n         sin(ll[1]) * sin(ll[2]),\n         cos(ll[2])\n     )\n end\n fract(x) = x - floor(x)\n function calcpositions(rings, index, time, audio)\n     movement, radius, speed, spin = 1, 2, 3, 4;\n     position = Point3f0(0.0)\n     precision = 0.2f0\n     for ring in rings\n         position += ring[radius] * cartesian(\n             precision *\n             index *\n             Point2f0(ring[spin] + Point2f0(sin(time * ring[speed]), cos(time * ring[speed])) * ring[movement])\n         )\n     end\n     amplitude = audio[round(Int, clamp(fract(position[1] * 0.1), 0, 1) * (25000-1)) + 1]; # index * 0.002\n     position *= 1.0 + amplitude * 0.5;\n     position\n end\n rings = [(0.1f0, 1.0f0, 0.00001f0, Point2f0(0.2, 0.1)), (0.1f0, 0.0f0, 0.0002f0, Point2f0(0.052, 0.05))]\n N2 = 25000\n t_audio = sin.(range(0, stop = 10pi, length = N2)) .+ (cos.(range(-3, stop = 7pi, length = N2)) .* 0.6) .+ (rand(Float32, N2) .* 0.1) ./ 2f0\n start = time()\n t = (time() - start) * 100\n pos = calcpositions.((rings,), 1:N2, t, (t_audio,))\n\n scene = lines(pos, color = RGBAf0.(to_colormap(:RdBu, N2), 0.6), thickness = 0.6f0, show_axis = false)\n linesegments!(scene, FRect3D(Vec3f0(-1.5), Vec3f0(3)), raw = true, linewidth = 3, linestyle = :dot)\n eyepos = Vec3f0(5, 1.5, 0.5)\n lookat = Vec3f0(0)\n update_cam!(scene, eyepos, lookat)\n l = scene[1]\n N = 150\n record(scene, \"./docs/media/moire.mp4\", 1:N) do i\n     t = (time() - start) * 700\n     pos .= calcpositions.((rings,), 1:N2, t, (t_audio,))\n     l[1] = pos # update argument 1\n     rotate_cam!(scene, 0.0, 0.01, 0.01)\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\moire.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-lines.html#Line-GIF-1",
    "page": "lines",
    "title": "Line GIF",
    "category": "section",
    "text": "Tags: 3d, animated, gif, lines, offset, record.using Makie\n\n us = range(0, stop = 1, length = 100)\n scene = Scene()\n scene = linesegments!(scene, FRect3D(Vec3f0(0, -1, 0), Vec3f0(1, 2, 2)))\n p = lines!(scene, us, sin.(us .+ time()), zeros(100), linewidth = 3)[end]\n lineplots = [p]\n translate!(p, 0, 0, 0)\n colors = to_colormap(:RdYlBu)\n #display(scene) # would be needed without the record\n N = 150\n path = record(scene, \"./docs/media/line_gif.gif\", 1:N) do i\n     global lineplots, scene\n     if length(lineplots) < 20\n         p = lines!(\n             scene,\n             us, sin.(us .+ time()), zeros(100),\n             color = colors[length(lineplots)],\n             linewidth = 3\n         )[end]\n         pushfirst!(lineplots, p)\n         translate!(p, 0, 0, 0)\n         #TODO automatically insert new plots\n         insert!(Makie.GLMakie.global_gl_screen(), scene, p)\n     else\n         lineplots = circshift(lineplots, 1)\n         lp = first(lineplots)\n         lp[2] = sin.(us .+ time())\n         translate!(lp, 0, 0, 0)\n     end\n     for lp in Iterators.drop(lineplots, 1)\n         z = translation(lp)[][3]\n         translate!(lp, 0, 0, z + 0.1)\n     end\n end\n path\n\n(Image: library lines 525:558)"
},

{
    "location": "examples-lines.html#Interaction-with-Mouse-1",
    "page": "lines",
    "title": "Interaction with Mouse",
    "category": "section",
    "text": "Tags: interaction, interactive, lines, marker, record, record_events, scatter.using Makie\n using LinearAlgebra\n\n scene = Scene(raw = true, camera = cam2d!, resolution = (500, 500))\n r = range(0, stop = 3, length = 4)\n the_time = Node(time())\n last_open = false\n @async while true\n     global last_open\n     the_time[] = time()\n     # this is a bit awkward, since the isopen(scene) is false\n     # as long as the scene isn\'t displayed\n     last_open && !isopen(scene) && break\n     last_open = isopen(scene)\n     sleep(1/25)\n end\n pos = lift(scene.events.mouseposition, the_time) do mpos, t\n     map(LinRange(0, 2pi, 60)) do i\n         circle = Point2f0(sin(i), cos(i))\n         mouse = to_world(scene, Point2f0(mpos))\n         secondary = (sin((i * 10f0) + t) * 0.09) * normalize(circle)\n         (secondary .+ circle) .+ mouse\n     end\n end\n lines!(scene, pos)\n p1 = scene[end]\n p2 = scatter!(\n     scene,\n     pos, markersize = 0.1f0,\n     marker = :star5,\n     color = p1[:color],\n )[end]\n center!(scene)\n t = Theme(raw = true, camera = campixel!)\n b1 = button(t, \"color\")\n b2 = button(t, \"marker\")\n msize = slider(t, 0.1:0.01:0.5)\n on(b1[end][:clicks]) do c\n     p1[:color] = rand(RGBAf0)\n end\n markers = (\'π\', \'😹\', \'⚃\', \'◑\', \'▼\')\n on(b2[end][:clicks]) do c\n     p2[:marker] = markers[rand(1:5)]\n end\n on(msize[end][:value]) do val\n     p2[:markersize] = val\n end\n RecordEvents(hbox(\n     vbox(b1, b2, msize),\n     scene\n ), \"./docs/media/interaction_with_mouse\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\interaction_with_mouse.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-lines.html#Mouse-Hover-1",
    "page": "lines",
    "title": "Mouse Hover",
    "category": "section",
    "text": "Tags: hover, interaction, lift, lines, on, poly, popup, record_events, text, translate.using Makie\n using Colors, Observables\n\n r = range(0, stop=5pi, length=100)\n scene = Scene(resolution = (500, 500))\n lines!(scene, r, sin.(r), linewidth = 3)\n lineplot = scene[end]\n visible = node(:visible, false)\n poprect = lift(scene.events.mouseposition) do mp\n     FRect((mp .+ 5), 250, 40)\n end\n textpos = lift(scene.events.mouseposition) do mp\n     Vec3f0((mp .+ 5 .+ (250/2, 40 / 2))..., 120)\n end\n popup = poly!(campixel(scene), poprect, raw = true, color = :white, strokewidth = 2, strokecolor = :black, visible = visible)\n rect = popup[end]\n translate!(rect, Vec3f0(0, 0, 100))\n text!(popup, \"( 0.000,  0.000)\", textsize = 30, position = textpos, color = :darkred, align = (:center, :center), raw = true, visible = visible)\n text_field = popup[end]\n scene\n x = Node(false)\n on(scene.events.mouseposition) do event\n     plot, idx = Makie.mouse_selection(scene)\n     if plot == lineplot && idx > 0\n         visible[] = true\n         text_field[1] = sprint(io-> print(io, round.(Float64.(Tuple(lineplot[1][][idx])), digits = 3)))\n     else\n         visible[] = false\n     end\n     return\n end\n RecordEvents(scene, \"./docs/media/mouse_hover\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_hover.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-lines.html#Travelling-wave-1",
    "page": "lines",
    "title": "Travelling wave",
    "category": "section",
    "text": "Tags: animated, documentation, interaction, lines, updating.using Makie\n\n scene = Scene()\n mytime = Node(0.0)\n f(v, t) = sin(v + t)\n scene = lines!(\n     scene,\n     lift(t -> f.(range(0, stop = 2pi, length = 50), t), mytime),\n     color = :blue)\n p1 = scene[end];\n N = 100\n record(scene, \"./docs/media/travelling_wave.mp4\", range(0, stop = 4pi, length = N)) do i\n     mytime[] = i\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\travelling_wave.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-lines.html#Axis-theming-1",
    "page": "lines",
    "title": "Axis theming",
    "category": "section",
    "text": "Tags: axis, documentation, lines, stepper.using Makie\n using GeometryTypes\n\n scene = Scene()\n points = decompose(Point2f0, Circle(Point2f0(10), 10f0), 9)\n lines!(\n     scene,\n     points,\n     linewidth = 8,\n     color = :black\n )\n\n axis = scene[Axis] # get axis\n scene\n\n st = Stepper(scene, \"./docs/media/axis_theming\")\n step!(st);\n axis[:frame][:linewidth] = 5\n step!(st)\n axis[:grid][:linewidth] = (1, 5)\n step!(st)\n axis[:grid][:linecolor] = ((:red, 0.3), (:blue, 0.5))\n step!(st)\n axis[:names][:axisnames] = (\"x\", \"y   \")\n step!(st)\n axis[:ticks][:title_gap] = 1\n step!(st)\n axis[:names][:rotation] = (0.0, -3/8*pi)\n step!(st)\n axis[:names][:textcolor] = ((:red, 1.0), (:blue, 1.0))\n step!(st)\n axis[:ticks][:font] = (\"Dejavu Sans\", \"Helvetica\")\n step!(st)\n axis[:ticks][:rotation] = (0.0, -pi/2)\n step!(st)\n axis[:ticks][:textsize] = (3, 7)\n step!(st)\n axis[:ticks][:gap] = 5\n step!(st)\n\n\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 1<br><img src=\"media/axis_theming/thumb-axis_theming-1.jpg\" alt=\"Step 1<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 2<br><img src=\"media/axis_theming/thumb-axis_theming-2.jpg\" alt=\"Step 2<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 3<br><img src=\"media/axis_theming/thumb-axis_theming-3.jpg\" alt=\"Step 3<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 4<br><img src=\"media/axis_theming/thumb-axis_theming-4.jpg\" alt=\"Step 4<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 5<br><img src=\"media/axis_theming/thumb-axis_theming-5.jpg\" alt=\"Step 5<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 6<br><img src=\"media/axis_theming/thumb-axis_theming-6.jpg\" alt=\"Step 6<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 7<br><img src=\"media/axis_theming/thumb-axis_theming-7.jpg\" alt=\"Step 7<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 8<br><img src=\"media/axis_theming/thumb-axis_theming-8.jpg\" alt=\"Step 8<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 9<br><img src=\"media/axis_theming/thumb-axis_theming-9.jpg\" alt=\"Step 9<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 10<br><img src=\"media/axis_theming/thumb-axis_theming-10.jpg\" alt=\"Step 10<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 11<br><img src=\"media/axis_theming/thumb-axis_theming-11.jpg\" alt=\"Step 11<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 12<br><img src=\"media/axis_theming/thumb-axis_theming-12.jpg\" alt=\"Step 12<br>\" /></p></div>"
},

{
    "location": "examples-lines.html#Layouting-1",
    "page": "lines",
    "title": "Layouting",
    "category": "section",
    "text": "Tags: heatmap, layout, lines, scatter, surface, vbox.using Makie\n\n p1 = scatter(rand(10), markersize = 1)\n p2 = lines(rand(10), rand(10))\n p3 = surface(0..1, 0..1, rand(100, 100))\n p4 = heatmap(rand(100, 100))\n x = 0:0.1:10\n p5 = lines(0:0.1:10, sin.(x))\n pscene = vbox(\n     hbox(p1, p2),\n     p3,\n     hbox(p4, p5, sizes = [0.7, 0.3]),\n     sizes = [0.2, 0.6, 0.2]\n )\n\n(Image: library lines 4:10)"
},

{
    "location": "examples-linesegments.html#",
    "page": "linesegments",
    "title": "linesegments",
    "category": "page",
    "text": ""
},

{
    "location": "examples-linesegments.html#linesegments-1",
    "page": "linesegments",
    "title": "linesegments",
    "category": "section",
    "text": ""
},

{
    "location": "examples-linesegments.html#Tutorial-linesegments-1",
    "page": "linesegments",
    "title": "Tutorial linesegments",
    "category": "section",
    "text": "Tags: linesegments, tutorial, tutorials.using Makie\n\n points = [\n     Point2f0(0, 0) => Point2f0(5, 5);\n     Point2f0(15, 15) => Point2f0(25, 25);\n     Point2f0(0, 15) => Point2f0(35, 5);\n     ]\n scene = linesegments(points, color = :red, linewidth = 2)\n\n(Image: library lines 77:82)"
},

{
    "location": "examples-linesegments.html#Polygons-1",
    "page": "linesegments",
    "title": "Polygons",
    "category": "section",
    "text": "Tags: 2d, linesegments, poly, polygon.using Makie\n using GeometryTypes\n\n scene = Scene(resolution = (500, 500))\n points = decompose(Point2f0, Circle(Point2f0(50), 50f0))\n pol = poly!(scene, points, color = :gray, strokewidth = 10, strokecolor = :red)\n # Optimized forms\n poly!(scene, [Circle(Point2f0(50+300), 50f0)], color = :gray, strokewidth = 10, strokecolor = :red)\n poly!(scene, [Circle(Point2f0(50+i, 50+i), 10f0) for i = 1:100:400], color = :red)\n poly!(scene, [Rectangle{Float32}(50+i, 50+i, 20, 20) for i = 1:100:400], strokewidth = 2, strokecolor = :green)\n linesegments!(scene,\n     [Point2f0(50 + i, 50 + i) => Point2f0(i + 70, i + 70) for i = 1:100:400], linewidth = 8, color = :purple\n )\n\n(Image: library lines 171:179)"
},

{
    "location": "examples-linesegments.html#Moire-1",
    "page": "linesegments",
    "title": "Moire",
    "category": "section",
    "text": "Tags: 3d, camera, lines, linesegments, mp4, record, rotate_cam!, update_cam!.using Makie\n\n function cartesian(ll)\n     return Point3f0(\n         cos(ll[1]) * sin(ll[2]),\n         sin(ll[1]) * sin(ll[2]),\n         cos(ll[2])\n     )\n end\n fract(x) = x - floor(x)\n function calcpositions(rings, index, time, audio)\n     movement, radius, speed, spin = 1, 2, 3, 4;\n     position = Point3f0(0.0)\n     precision = 0.2f0\n     for ring in rings\n         position += ring[radius] * cartesian(\n             precision *\n             index *\n             Point2f0(ring[spin] + Point2f0(sin(time * ring[speed]), cos(time * ring[speed])) * ring[movement])\n         )\n     end\n     amplitude = audio[round(Int, clamp(fract(position[1] * 0.1), 0, 1) * (25000-1)) + 1]; # index * 0.002\n     position *= 1.0 + amplitude * 0.5;\n     position\n end\n rings = [(0.1f0, 1.0f0, 0.00001f0, Point2f0(0.2, 0.1)), (0.1f0, 0.0f0, 0.0002f0, Point2f0(0.052, 0.05))]\n N2 = 25000\n t_audio = sin.(range(0, stop = 10pi, length = N2)) .+ (cos.(range(-3, stop = 7pi, length = N2)) .* 0.6) .+ (rand(Float32, N2) .* 0.1) ./ 2f0\n start = time()\n t = (time() - start) * 100\n pos = calcpositions.((rings,), 1:N2, t, (t_audio,))\n\n scene = lines(pos, color = RGBAf0.(to_colormap(:RdBu, N2), 0.6), thickness = 0.6f0, show_axis = false)\n linesegments!(scene, FRect3D(Vec3f0(-1.5), Vec3f0(3)), raw = true, linewidth = 3, linestyle = :dot)\n eyepos = Vec3f0(5, 1.5, 0.5)\n lookat = Vec3f0(0)\n update_cam!(scene, eyepos, lookat)\n l = scene[1]\n N = 150\n record(scene, \"./docs/media/moire.mp4\", 1:N) do i\n     t = (time() - start) * 700\n     pos .= calcpositions.((rings,), 1:N2, t, (t_audio,))\n     l[1] = pos # update argument 1\n     rotate_cam!(scene, 0.0, 0.01, 0.01)\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\moire.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-linesegments.html#Type-recipe-for-molecule-simulation-1",
    "page": "linesegments",
    "title": "Type recipe for molecule simulation",
    "category": "section",
    "text": "Tags: linesegments, meshscatter, molecules, recipe.using Makie\n import AbstractPlotting: Plot, default_theme, plot!, to_value\n using Makie\n\n\n struct Simulation\n     grid::Vector{Point3f0}\n end\n # Probably worth having a macro for this!\n function default_theme(scene::SceneLike, ::Type{<: Plot(Simulation)})\n     Theme(\n         advance = 0,\n         molecule_sizes = [0.08, 0.04, 0.04],\n         molecule_colors = [:maroon, :deepskyblue2, :deepskyblue2]\n     )\n end\n\n # The recipe! - will get called for plot(!)(x::SimulationResult)\n function AbstractPlotting.plot!(p::Plot(Simulation))\n     sim = to_value(p[1]) # first argument is the SimulationResult\n     # when advance changes, get new positions from the simulation\n     mpos = lift(p[:advance]) do i\n         sim.grid .+ rand(Point3f0, length(sim.grid)) .* 0.01f0\n     end\n     # size shouldn\'t change, so we might as well get the value instead of signal\n     pos = to_value(mpos)\n     N = length(pos)\n     sizes = lift(p[:molecule_sizes]) do s\n         repeat(s, outer = N ÷ 3)\n     end\n     sizes = lift(p[:molecule_sizes]) do s\n         repeat(s, outer = N ÷ 3)\n     end\n     colors = lift(p[:molecule_colors]) do c\n         repeat(c, outer = N ÷ 3)\n     end\n     scene = meshscatter!(p, mpos, markersize = sizes, color = colors)\n     indices = Int[]\n     for i in 1:3:N\n         push!(indices, i, i + 1, i, i + 2)\n     end\n     meshplot = p.plots[end] # meshplot is the last plot we added to p\n     # meshplot[1] -> the positions (first argument) converted to points, so\n     # we don\'t do the conversion 2 times for linesegments!\n     linesegments!(p, lift(x-> view(x, indices), meshplot[1]))\n end\n\n # To write out a video of the whole simulation\n n = 5\n r = range(-1, stop = 1, length = n)\n grid = Point3f0.(r, reshape(r, (1, n, 1)), reshape(r, (1, 1, n)))\n molecules = map(1:(n^3) * 3) do i\n     i3 = ((i - 1) ÷ 3) + 1\n     xy = 0.1; z = 0.08\n     i % 3 == 1 && return grid[i3]\n     i % 3 == 2 && return grid[i3] + Point3f0(xy, xy, z)\n     i % 3 == 0 && return grid[i3] + Point3f0(-xy, xy, z)\n end\n result = Simulation(molecules)\n scene = plot(result)\n N = 100\n record(scene, \"./docs/media/type_recipe_for_molecule_simulation.mp4\", 1:N) do i\n     scene[end][:advance] = i\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\type_recipe_for_molecule_simulation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-mesh.html#",
    "page": "mesh",
    "title": "mesh",
    "category": "page",
    "text": ""
},

{
    "location": "examples-mesh.html#mesh-1",
    "page": "mesh",
    "title": "mesh",
    "category": "section",
    "text": ""
},

{
    "location": "examples-mesh.html#FEM-mesh-2D-1",
    "page": "mesh",
    "title": "FEM mesh 2D",
    "category": "section",
    "text": "Tags: 2d, fem, mesh.using Makie\n\n coordinates = [\n     0.0 0.0;\n     0.5 0.0;\n     1.0 0.0;\n     0.0 0.5;\n     0.5 0.5;\n     1.0 0.5;\n     0.0 1.0;\n     0.5 1.0;\n     1.0 1.0;\n ]\n connectivity = [\n     1 2 5;\n     1 4 5;\n     2 3 6;\n     2 5 6;\n     4 5 8;\n     4 7 8;\n     5 6 9;\n     5 8 9;\n ]\n color = [0.0, 0.0, 0.0, 0.0, -0.375, 0.0, 0.0, 0.0, 0.0]\n scene = mesh(coordinates, connectivity, color = color, shading = false)\n wireframe!(scene[end][1], color = (:black, 0.6), linewidth = 3)\n\n(Image: library lines 111:134)"
},

{
    "location": "examples-mesh.html#colored-triangle-1",
    "page": "mesh",
    "title": "colored triangle",
    "category": "section",
    "text": "Tags: 2d, mesh, polygon.using Makie\n\n mesh(\n     [(0.0, 0.0), (0.5, 1.0), (1.0, 0.0)], color = [:red, :green, :blue],\n     shading = false\n )\n\n(Image: library lines 137:137)"
},

{
    "location": "examples-mesh.html#Image-on-Geometry-(Moon)-1",
    "page": "mesh",
    "title": "Image on Geometry (Moon)",
    "category": "section",
    "text": "Tags: 3d, image, mesh.using Makie\n using FileIO\n\n moon = try\n     load(download(\"https://svs.gsfc.nasa.gov/vis/a000000/a004600/a004675/phases.0001_print.jpg\"))\n catch e\n     @warn(\"Download the moon failed. Using random image, so this test will fail! (error: $e)\")\n     rand(RGBAf0, 100, 100) # don\'t error test when e.g. offline\n end\n scene = mesh(Sphere(Point3f0(0), 1f0), color = moon, shading = false, show_axis = false, center = false)\n update_cam!(scene, Vec3f0(-2, 2, 2), Vec3f0(0))\n scene\n\n(Image: library lines 4:13)"
},

{
    "location": "examples-mesh.html#Image-on-Geometry-(Earth)-1",
    "page": "mesh",
    "title": "Image on Geometry (Earth)",
    "category": "section",
    "text": "Tags: 3d, image, mesh.using Makie\n using FileIO, Colors\n\n earth = try\n     load(download(\"https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.png\"))\n catch e\n     @warn(\"Downloading the earth failed. Using random image, so this test will fail! (error: $e)\")\n     rand(RGBAf0, 100, 100) # don\'t error test when e.g. offline\n end\n m = GLNormalUVMesh(Sphere(Point3f0(0), 1f0), 60)\n mesh(m, color = earth, shading = false)\n\n(Image: library lines 16:24)"
},

{
    "location": "examples-mesh.html#Textured-Mesh-1",
    "page": "mesh",
    "title": "Textured Mesh",
    "category": "section",
    "text": "Tags: 3d, cat, mesh, texture.using Makie\n using FileIO\n\n scene = Scene(resolution = (500, 500))\n catmesh = FileIO.load(Makie.assetpath(\"cat.obj\"), GLNormalUVMesh)\n mesh(catmesh, color = Makie.loadasset(\"diffusemap.tga\"))\n\n(Image: library lines 60:63)"
},

{
    "location": "examples-mesh.html#Load-Mesh-1",
    "page": "mesh",
    "title": "Load Mesh",
    "category": "section",
    "text": "Tags: 3d, cat, mesh.using Makie\n\n mesh(Makie.loadasset(\"cat.obj\"))\n\n(Image: library lines 66:66)"
},

{
    "location": "examples-mesh.html#Colored-Mesh-1",
    "page": "mesh",
    "title": "Colored Mesh",
    "category": "section",
    "text": "Tags: 3d, axis, mesh.using Makie\n\n x = [0, 1, 2, 0]\n y = [0, 0, 1, 2]\n z = [0, 2, 0, 1]\n color = [:red, :green, :blue, :yellow]\n i = [0, 0, 0, 1]\n j = [1, 2, 3, 2]\n k = [2, 3, 1, 3]\n # indices interpreted as triangles (every 3 sequential indices)\n indices = [1, 2, 3,   1, 3, 4,   1, 4, 2,   2, 3, 4]\n mesh(x, y, z, indices, color = color)\n\n(Image: library lines 69:78)"
},

{
    "location": "examples-mesh.html#Wireframe-of-a-Mesh-1",
    "page": "mesh",
    "title": "Wireframe of a Mesh",
    "category": "section",
    "text": "Tags: 3d, cat, mesh, wireframe.using Makie\n\n wireframe(Makie.loadasset(\"cat.obj\"))\n\n(Image: library lines 81:81)"
},

{
    "location": "examples-mesh.html#FEM-mesh-3D-1",
    "page": "mesh",
    "title": "FEM mesh 3D",
    "category": "section",
    "text": "Tags: 3d, fem, mesh.using Makie\n using GeometryTypes\n\n cat = Makie.loadasset(\"cat.obj\")\n vertices = decompose(Point3f0, cat)\n faces = decompose(Face{3, Int}, cat)\n coordinates = [vertices[i][j] for i = 1:length(vertices), j = 1:3]\n connectivity = [faces[i][j] for i = 1:length(faces), j = 1:3]\n mesh(\n     coordinates, connectivity,\n     color = rand(length(vertices))\n )\n\n(Image: library lines 275:281)"
},

{
    "location": "examples-mesh.html#Fluctuation-3D-1",
    "page": "mesh",
    "title": "Fluctuation 3D",
    "category": "section",
    "text": "Tags: 3d, animated, axis, mesh, meshscatter.using Makie\n using GeometryTypes, Colors\n\n scene = Scene()\n # define points/edges\n perturbfactor = 4e1\n N = 3; nbfacese = 30; radius = 0.02\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere, 30)\n np = length(positions)\n pts = [positions[k][l] for k = 1:length(positions), l = 1:3]\n pts = vcat(pts, 1.1 .* pts + randn(size(pts)) / perturbfactor) # light position influence ?\n edges = hcat(collect(1:np), collect(1:np) .+ np)\n ne = size(edges, 1); np = size(pts, 1)\n # define markers meshes\n meshC = GLNormalMesh(\n     Makie.Cylinder{3, Float32}(\n         Point3f0(0., 0., 0.),\n         Point3f0(0., 0, 1.),\n         Float32(1)\n     ), nbfacese\n )\n meshS = GLNormalMesh(large_sphere, 20)\n # define colors, markersizes and rotations\n pG = [Point3f0(pts[k, 1], pts[k, 2], pts[k, 3]) for k = 1:np]\n lengthsC = sqrt.(sum((pts[edges[:,1], :] .- pts[edges[:, 2], :]) .^ 2, dims = 2))\n sizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\n sizesC = [Vec3f0(1., 1., 1.) for i = 1:ne]\n colorsp = [RGBA{Float32}(rand(), rand(), rand(), 1.) for i = 1:np]\n colorsC = [(colorsp[edges[i, 1]] .+ colorsp[edges[i, 2]]) / 2.0 for i = 1:ne]\n sizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\n Qlist = zeros(ne, 4)\n for k = 1:ne\n     ct = GeometryTypes.Cylinder{3, Float32}(\n         Point3f0(pts[edges[k, 1], 1], pts[edges[k, 1], 2], pts[edges[k, 1], 3]),\n         Point3f0(pts[edges[k, 2], 1], pts[edges[k, 2], 2], pts[edges[k, 2], 3]),\n         Float32(1)\n     )\n     Q = GeometryTypes.rotation(ct)\n     r = 0.5 * sqrt(1 .+ Q[1, 1] .+ Q[2, 2] .+ Q[3, 3]); Qlist[k, 4] = r\n     Qlist[k, 1] = (Q[3, 2] .- Q[2, 3]) / (4 .* r)\n     Qlist[k, 2] = (Q[1, 3] .- Q[3, 1]) / (4 .* r)\n     Qlist[k, 3] = (Q[2, 1] .- Q[1, 2]) / (4 .* r)\n end\n rotationsC = [Vec4f0(Qlist[i, 1], Qlist[i, 2], Qlist[i, 3], Qlist[i, 4]) for i = 1:ne]\n # plot\n hm = meshscatter!(\n     scene, pG[edges[:, 1]],\n     color = colorsC, marker = meshC,\n     markersize = sizesC,  rotations = rotationsC,\n )\n hp = meshscatter!(\n     scene, pG,\n     color = colorsp, marker = meshS, markersize = radius,\n )\n\n(Image: library lines 329:378)"
},

{
    "location": "examples-mesh.html#Normals-of-a-Cat-1",
    "page": "mesh",
    "title": "Normals of a Cat",
    "category": "section",
    "text": "Tags: 3d, cat, linesegment, mesh.using Makie\n using LinearAlgebra\n\n x = Makie.loadasset(\"cat.obj\")\n mesh(x, color = :black)\n pos = map(x.vertices, x.normals) do p, n\n     p => p .+ (normalize(n) .* 0.05f0)\n end\n linesegments!(pos, color = :blue)\n\n(Image: library lines 432:438)"
},

{
    "location": "examples-mesh.html#Sphere-Mesh-1",
    "page": "mesh",
    "title": "Sphere Mesh",
    "category": "section",
    "text": "Tags: 3d, mesh.using Makie\n\n mesh(Sphere(Point3f0(0), 1f0), color = :blue)\n\n(Image: library lines 442:442)"
},

{
    "location": "examples-mesh.html#Merged-color-Mesh-1",
    "page": "mesh",
    "title": "Merged color Mesh",
    "category": "section",
    "text": "Tags: 3d, color, mesh.using Makie\n using GeometryTypes\n\n x = Vec3f0(0); baselen = 0.2f0; dirlen = 1f0\n # create an array of differently colored boxes in the direction of the 3 axes\n rectangles = [\n     (HyperRectangle(Vec3f0(x), Vec3f0(dirlen, baselen, baselen)), RGBAf0(1,0,0,1)),\n     (HyperRectangle(Vec3f0(x), Vec3f0(baselen, dirlen, baselen)), RGBAf0(0,1,0,1)),\n     (HyperRectangle(Vec3f0(x), Vec3f0(baselen, baselen, dirlen)), RGBAf0(0,0,1,1))\n ]\n meshes = map(GLNormalMesh, rectangles)\n mesh(merge(meshes))\n\n(Image: library lines 465:474)"
},

{
    "location": "examples-meshscatter.html#",
    "page": "meshscatter",
    "title": "meshscatter",
    "category": "page",
    "text": ""
},

{
    "location": "examples-meshscatter.html#meshscatter-1",
    "page": "meshscatter",
    "title": "meshscatter",
    "category": "section",
    "text": ""
},

{
    "location": "examples-meshscatter.html#Orthographic-Camera-1",
    "page": "meshscatter",
    "title": "Orthographic Camera",
    "category": "section",
    "text": "Tags: 3d, cameracontrols, meshscatter, update_cam.using Makie\n using GeometryTypes\n\n x = Vec3f0(0); baselen = 0.2f0; dirlen = 1f0\n # create an array of differently colored boxes in the direction of the 3 axes\n rectangles = [\n     (FRect3D(Vec3f0(x), Vec3f0(dirlen, baselen, baselen)), RGBAf0(1,0,0,1)),\n     (FRect3D(Vec3f0(x), Vec3f0(baselen, dirlen, baselen)), RGBAf0(0,1,0,1)),\n     (FRect3D(Vec3f0(x), Vec3f0(baselen, baselen, dirlen)), RGBAf0(0,0,1,1))\n ]\n meshes = map(GLNormalMesh, rectangles)\n scene = mesh(merge(meshes))\n display(scene)\n cam = Makie.cameracontrols(scene)\n dir = scene.limits[].widths ./ 2.\n dir_scaled = Vec3f0(\n     dir[1] * scene.transformation.scale[][1],\n     0.0,\n     dir[3] * scene.transformation.scale[][2],\n )\n cam.upvector[] = (0.0, 0.0, 1.0)\n cam.lookat[] = scene.limits[].origin + dir_scaled\n cam.eyeposition[] = (cam.lookat[][1], cam.lookat[][2] + 6.3, cam.lookat[][3])\n cam.projectiontype[] = AbstractPlotting.Orthographic\n update_cam!(scene, cam)\n # stop scene display from centering, which would overwrite the camera paramter we just set\n scene.center = false\n scene\n\n(Image: library lines 28:53)"
},

{
    "location": "examples-meshscatter.html#Meshscatter-Function-1",
    "page": "meshscatter",
    "title": "Meshscatter Function",
    "category": "section",
    "text": "Tags: 3d, meshscatter.using Makie\n using GeometryTypes\n\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere)\n colS = [RGBAf0(rand(), rand(), rand(), 1.0) for i = 1:length(positions)]\n sizesS = [rand(Point3f0) .* 0.05f0 for i = 1:length(positions)]\n meshscatter(positions, color = colS, markersize = sizesS)\n\n(Image: library lines 132:137)"
},

{
    "location": "examples-meshscatter.html#Record-Video-1",
    "page": "meshscatter",
    "title": "Record Video",
    "category": "section",
    "text": "Tags: 3d, linesegment, meshscatter, record.using Makie\n\n scene = Scene()\n\n f(t, v, s) = (sin(v + t) * s, cos(v + t) * s, (cos(v + t) + sin(v)) * s)\n t = Node(Base.time()) # create a life signal\n limits = FRect3D(Vec3f0(-1.5, -1.5, -3), Vec3f0(3, 3, 6))\n p1 = meshscatter!(scene, lift(t-> f.(t, range(0, stop = 2pi, length = 50), 1), t), markersize = 0.05)[end]\n p2 = meshscatter!(scene, lift(t-> f.(t * 2.0, range(0, stop = 2pi, length = 50), 1.5), t), markersize = 0.05)[end]\n\n lines = lift(p1[1], p2[1]) do pos1, pos2\n     map((a, b)-> (a, b), pos1, pos2)\n end\n linesegments!(scene, lines, linestyle = :dot, limits = limits)\n # record a video\n N = 150\n record(scene, \"./docs/media/record_video.mp4\", 1:N) do i\n     push!(t, Base.time())\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\record_video.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-meshscatter.html#Fluctuation-3D-1",
    "page": "meshscatter",
    "title": "Fluctuation 3D",
    "category": "section",
    "text": "Tags: 3d, animated, axis, mesh, meshscatter.using Makie\n using GeometryTypes, Colors\n\n scene = Scene()\n # define points/edges\n perturbfactor = 4e1\n N = 3; nbfacese = 30; radius = 0.02\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere, 30)\n np = length(positions)\n pts = [positions[k][l] for k = 1:length(positions), l = 1:3]\n pts = vcat(pts, 1.1 .* pts + randn(size(pts)) / perturbfactor) # light position influence ?\n edges = hcat(collect(1:np), collect(1:np) .+ np)\n ne = size(edges, 1); np = size(pts, 1)\n # define markers meshes\n meshC = GLNormalMesh(\n     Makie.Cylinder{3, Float32}(\n         Point3f0(0., 0., 0.),\n         Point3f0(0., 0, 1.),\n         Float32(1)\n     ), nbfacese\n )\n meshS = GLNormalMesh(large_sphere, 20)\n # define colors, markersizes and rotations\n pG = [Point3f0(pts[k, 1], pts[k, 2], pts[k, 3]) for k = 1:np]\n lengthsC = sqrt.(sum((pts[edges[:,1], :] .- pts[edges[:, 2], :]) .^ 2, dims = 2))\n sizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\n sizesC = [Vec3f0(1., 1., 1.) for i = 1:ne]\n colorsp = [RGBA{Float32}(rand(), rand(), rand(), 1.) for i = 1:np]\n colorsC = [(colorsp[edges[i, 1]] .+ colorsp[edges[i, 2]]) / 2.0 for i = 1:ne]\n sizesC = [Vec3f0(radius, radius, lengthsC[i]) for i = 1:ne]\n Qlist = zeros(ne, 4)\n for k = 1:ne\n     ct = GeometryTypes.Cylinder{3, Float32}(\n         Point3f0(pts[edges[k, 1], 1], pts[edges[k, 1], 2], pts[edges[k, 1], 3]),\n         Point3f0(pts[edges[k, 2], 1], pts[edges[k, 2], 2], pts[edges[k, 2], 3]),\n         Float32(1)\n     )\n     Q = GeometryTypes.rotation(ct)\n     r = 0.5 * sqrt(1 .+ Q[1, 1] .+ Q[2, 2] .+ Q[3, 3]); Qlist[k, 4] = r\n     Qlist[k, 1] = (Q[3, 2] .- Q[2, 3]) / (4 .* r)\n     Qlist[k, 2] = (Q[1, 3] .- Q[3, 1]) / (4 .* r)\n     Qlist[k, 3] = (Q[2, 1] .- Q[1, 2]) / (4 .* r)\n end\n rotationsC = [Vec4f0(Qlist[i, 1], Qlist[i, 2], Qlist[i, 3], Qlist[i, 4]) for i = 1:ne]\n # plot\n hm = meshscatter!(\n     scene, pG[edges[:, 1]],\n     color = colorsC, marker = meshC,\n     markersize = sizesC,  rotations = rotationsC,\n )\n hp = meshscatter!(\n     scene, pG,\n     color = colorsp, marker = meshS, markersize = radius,\n )\n\n(Image: library lines 329:378)"
},

{
    "location": "examples-meshscatter.html#Simple-meshscatter-1",
    "page": "meshscatter",
    "title": "Simple meshscatter",
    "category": "section",
    "text": "Tags: 3d, meshscatter.using Makie\n\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere)\n meshscatter(positions, color = RGBAf0(0.9, 0.2, 0.4, 1), markersize = 0.05)\n\n(Image: library lines 404:406)"
},

{
    "location": "examples-meshscatter.html#Explicit-frame-rendering-1",
    "page": "meshscatter",
    "title": "Explicit frame rendering",
    "category": "section",
    "text": "Tags: 3d, meshscatter, opengl, render_frame.using Makie\n using ModernGL, Makie\n using GLFW\n\n Makie.GLMakie.opengl_renderloop[] = (screen) -> nothing\n function update_loop(m, buff, screen)\n     for i = 1:20\n         GLFW.PollEvents()\n         buff .= rand.(Point3f0) .* 20f0\n         m[1] = buff\n         Makie.GLMakie.render_frame(screen)\n         GLFW.SwapBuffers(Makie.GLMakie.to_native(screen))\n         glFinish()\n     end\n end\n scene = meshscatter(rand(Point3f0, 10^4) .* 20f0)\n display(scene)\n meshplot = scene[end]\n buff = rand(Point3f0, 10^4) .* 20f0;\n screen = Makie.GLMakie.global_gl_screen();\n @time update_loop(meshplot, buff, screen)\n Makie.GLMakie.opengl_renderloop[] = Makie.GLMakie.renderloop # restore previous loop\n # when done:\n Makie.GLMakie.destroy!(screen)\n scene\n\n(Image: library lines 575:597)"
},

{
    "location": "examples-meshscatter.html#GUI-for-exploring-Lorenz-equation-1",
    "page": "meshscatter",
    "title": "GUI for exploring Lorenz equation",
    "category": "section",
    "text": "Tags: colorswatch, hbox, interaction, meshscatter, record_events, slider, textslider, vbox.using Makie\n using Colors, Makie\n using AbstractPlotting: textslider, colorswatch\n\n s1, a = textslider(0f0:50f0, \"a\", start = 13)\n s2, b = textslider(-20f0:20f0, \"b\", start = 10)\n s3, c = textslider(0f0:20f0, \"c\", start = 2)\n s4, d = textslider(range(0.0, stop = 0.02, length = 100), \"d\", start = 0.01)\n s5, scales = textslider(range(0.01, stop = 0.5, length = 100), \"scale\", start = 0.1)\n s6, colorsw, pop = colorswatch()\n\n function lorenz(t0, a, b, c, h)\n     Point3f0(\n         t0[1] + h * a * (t0[2] - t0[1]),\n         t0[2] + h * (t0[1] * (b - t0[3]) - t0[2]),\n         t0[3] + h * (t0[1] * t0[2] - c * t0[3]),\n     )\n end\n # step through the `time`\n function lorenz(array::Vector, a = 5.0 ,b = 2.0, c = 6.0, d = 0.01)\n     t0 = Point3f0(0.1, 0, 0)\n     for i = eachindex(array)\n         t0 = lorenz(t0, a,b,c,d)\n         array[i] = t0\n     end\n     array\n end\n n1, n2 = 18, 30\n N = n1*n2\n args_n = (a, b, c, d)\n v0 = lorenz(zeros(Point3f0, N), to_value.(args_n)...)\n positions = lift(lorenz, Node(v0), args_n...)\n rotations = lift(diff, positions)\n rotations = lift(x-> push!(x, x[end]), rotations)\n\n mesh_scene = meshscatter(\n     positions,\n     markersize = scales, rotation = rotations,\n     intensity = collect(range(0f0, stop = 1f0, length = length(positions[]))),\n     color = colorsw\n )\n parent = Scene(resolution = (1000, 800))\n vbox(\n     hbox(s1, s2, s3, s4, s5, s6),\n     mesh_scene, parent = parent\n )\n RecordEvents(parent, \"./docs/media/gui_for_exploring_lorenz_equation\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\gui_for_exploring_lorenz_equation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-meshscatter.html#Type-recipe-for-molecule-simulation-1",
    "page": "meshscatter",
    "title": "Type recipe for molecule simulation",
    "category": "section",
    "text": "Tags: linesegments, meshscatter, molecules, recipe.using Makie\n import AbstractPlotting: Plot, default_theme, plot!, to_value\n using Makie\n\n\n struct Simulation\n     grid::Vector{Point3f0}\n end\n # Probably worth having a macro for this!\n function default_theme(scene::SceneLike, ::Type{<: Plot(Simulation)})\n     Theme(\n         advance = 0,\n         molecule_sizes = [0.08, 0.04, 0.04],\n         molecule_colors = [:maroon, :deepskyblue2, :deepskyblue2]\n     )\n end\n\n # The recipe! - will get called for plot(!)(x::SimulationResult)\n function AbstractPlotting.plot!(p::Plot(Simulation))\n     sim = to_value(p[1]) # first argument is the SimulationResult\n     # when advance changes, get new positions from the simulation\n     mpos = lift(p[:advance]) do i\n         sim.grid .+ rand(Point3f0, length(sim.grid)) .* 0.01f0\n     end\n     # size shouldn\'t change, so we might as well get the value instead of signal\n     pos = to_value(mpos)\n     N = length(pos)\n     sizes = lift(p[:molecule_sizes]) do s\n         repeat(s, outer = N ÷ 3)\n     end\n     sizes = lift(p[:molecule_sizes]) do s\n         repeat(s, outer = N ÷ 3)\n     end\n     colors = lift(p[:molecule_colors]) do c\n         repeat(c, outer = N ÷ 3)\n     end\n     scene = meshscatter!(p, mpos, markersize = sizes, color = colors)\n     indices = Int[]\n     for i in 1:3:N\n         push!(indices, i, i + 1, i, i + 2)\n     end\n     meshplot = p.plots[end] # meshplot is the last plot we added to p\n     # meshplot[1] -> the positions (first argument) converted to points, so\n     # we don\'t do the conversion 2 times for linesegments!\n     linesegments!(p, lift(x-> view(x, indices), meshplot[1]))\n end\n\n # To write out a video of the whole simulation\n n = 5\n r = range(-1, stop = 1, length = n)\n grid = Point3f0.(r, reshape(r, (1, n, 1)), reshape(r, (1, 1, n)))\n molecules = map(1:(n^3) * 3) do i\n     i3 = ((i - 1) ÷ 3) + 1\n     xy = 0.1; z = 0.08\n     i % 3 == 1 && return grid[i3]\n     i % 3 == 2 && return grid[i3] + Point3f0(xy, xy, z)\n     i % 3 == 0 && return grid[i3] + Point3f0(-xy, xy, z)\n end\n result = Simulation(molecules)\n scene = plot(result)\n N = 100\n record(scene, \"./docs/media/type_recipe_for_molecule_simulation.mp4\", 1:N) do i\n     scene[end][:advance] = i\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\type_recipe_for_molecule_simulation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#",
    "page": "scatter",
    "title": "scatter",
    "category": "page",
    "text": ""
},

{
    "location": "examples-scatter.html#scatter-1",
    "page": "scatter",
    "title": "scatter",
    "category": "section",
    "text": ""
},

{
    "location": "examples-scatter.html#Tutorial-simple-scatter-1",
    "page": "scatter",
    "title": "Tutorial simple scatter",
    "category": "section",
    "text": "Tags: scatter, tutorial, tutorials.using Makie\n\n x = rand(10)\n y = rand(10)\n colors = rand(10)\n\n scene = scatter(x, y, color = colors)\n\n(Image: library lines 9:13)"
},

{
    "location": "examples-scatter.html#Tutorial-markersize-1",
    "page": "scatter",
    "title": "Tutorial markersize",
    "category": "section",
    "text": "Tags: markersize, scatter, tutorial, tutorials.using Makie\n\n x = 1:10\n y = 1:10\n sizevec = [s for s = 1:length(x)] ./ 10\n\n scene = scatter(x, y, markersize = sizevec)\n\n(Image: library lines 17:21)"
},

{
    "location": "examples-scatter.html#Interaction-1",
    "page": "scatter",
    "title": "Interaction",
    "category": "section",
    "text": "Tags: 2d, linesegment, record, scatter.using Makie\n\n scene = Scene()\n f(t, v, s) = (sin(v + t) * s, cos(v + t) * s)\n time_node = Node(0.0)\n p1 = scatter!(scene, lift(t-> f.(t, range(0, stop = 2pi, length = 50), 1), time_node))[end]\n p2 = scatter!(scene, lift(t-> f.(t * 2.0, range(0, stop = 2pi, length = 50), 1.5), time_node))[end]\n points = lift(p1[1], p2[1]) do pos1, pos2\n     map((a, b)-> (a, b), pos1, pos2)\n end\n linesegments!(scene, points)\n N = 150\n record(scene, \"./docs/media/interaction.mp4\", range(0, stop = 10, length = N)) do i\n     push!(time_node, i)\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\interaction.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#scatter-colormap-1",
    "page": "scatter",
    "title": "scatter colormap",
    "category": "section",
    "text": "Tags: 2d, colormap, scatter.using Makie\n\n scatter(rand(10), rand(10), color = rand(10))\n\n(Image: library lines 83:83)"
},

{
    "location": "examples-scatter.html#Subscenes-1",
    "page": "scatter",
    "title": "Subscenes",
    "category": "section",
    "text": "Tags: 2d, image, scatter, subscene.using Makie\n\n img = rand(RGBAf0, 100, 100)\n scene = image(img, show_axis = false)\n subscene = Scene(scene, IRect(100, 100, 300, 300))\n scatter!(subscene, rand(100) * 200, rand(100) * 200, markersize = 4)\n scene\n\n(Image: library lines 163:167)"
},

{
    "location": "examples-scatter.html#Hbox-1",
    "page": "scatter",
    "title": "Hbox",
    "category": "section",
    "text": "Tags: 2d, hbox, lines, scatter.using Makie\n\n t = range(-122277.93103448274, stop=-14798.035304081845, length=29542)\n x = -42 .- randn(length(t))\n sc1 = scatter(t, x, color=:black, markersize=sqrt(length(t)/20))\n sc2 = lines(t[1:end-1], diff(x), color = :blue)\n hbox(sc2, sc1)\n\n(Image: library lines 190:194)"
},

{
    "location": "examples-scatter.html#Animated-Scatter-1",
    "page": "scatter",
    "title": "Animated Scatter",
    "category": "section",
    "text": "Tags: 2d, animated, record, scatter, updating.using Makie\n\n N = 10\n r = [(rand(7, 2) .- 0.5) .* 25 for i = 1:N]\n scene = scatter(r[1][:, 1], r[1][:, 2], markersize = 1, limits = FRect(-25/2, -25/2, 25, 25))\n s = scene[end] # last plot in scene\n record(scene, \"./docs/media/animated_scatter.mp4\", r) do m\n     s[1] = m[:, 1]\n     s[2] = m[:, 2]\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\animated_scatter.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#The-famous-iris-example-1",
    "page": "scatter",
    "title": "The famous iris example",
    "category": "section",
    "text": "Tags: 2d, DataFrames, RDatasets, axis, scatter.using Makie\n using DataFrames, RDatasets # do Pkg.add.([\"DataFrames\", \"RDatasets\"]) if you don\'t have these packages installed\n\n iris = dataset(\"datasets\", \"iris\")\n\n x = iris[:SepalWidth]\n y = iris[:SepalLength]\n\n scene = Scene()\n colors = [:red, :green, :blue]\n i = 1 #color incrementer\n for sp in unique(iris[:Species])\n     idx = iris[:Species] .== sp\n     sel = iris[idx, [:SepalWidth, :SepalLength]]\n     scatter!(scene, sel[:,1], sel[:,2], color = colors[i], limits = FRect(1.5, 4.0, 3.0, 4.0))\n     global i = i+1\n end\n scene\n axis = scene[Axis] # get axis\n axis[:names][:axisnames] = (\"Sepal width\", \"Sepal length\")\n scene\n\n(Image: library lines 253:271)"
},

{
    "location": "examples-scatter.html#scatter-2",
    "page": "scatter",
    "title": "scatter",
    "category": "section",
    "text": "Tags: 2d, 3d, scatter.using Makie\n\n scatter(rand(20), rand(20), markersize = 0.03)\n\n(Image: library lines 141:141)"
},

{
    "location": "examples-scatter.html#Marker-sizes-1",
    "page": "scatter",
    "title": "Marker sizes",
    "category": "section",
    "text": "Tags: 2d, 3d, scatter.using Makie\n\n scatter(rand(20), rand(20), markersize = rand(20)./20, color = to_colormap(:Spectral, 20))\n\n(Image: library lines 145:145)"
},

{
    "location": "examples-scatter.html#Connected-Sphere-1",
    "page": "scatter",
    "title": "Connected Sphere",
    "category": "section",
    "text": "Tags: 3d, axis, lines, scatter, views.using Makie\n\n large_sphere = Sphere(Point3f0(0), 1f0)\n positions = decompose(Point3f0, large_sphere)\n linepos = view(positions, rand(1:length(positions), 1000))\n scene = lines(linepos, linewidth = 0.1, color = :black)\n scatter!(scene, positions, strokewidth = 10, strokecolor = :white, color = RGBAf0(0.9, 0.2, 0.4, 0.6))\n scene\n\n(Image: library lines 385:390)"
},

{
    "location": "examples-scatter.html#image-scatter-1",
    "page": "scatter",
    "title": "image scatter",
    "category": "section",
    "text": "Tags: 3d, image, scatter.using Makie\n using LinearAlgebra\n\n scatter(\n     1:10, 1:10, rand(10, 10) .* 10,\n     rotations = normalize.(rand(Quaternionf0, 10*10)),\n     markersize = 1,\n     # can also be an array of images for each point\n     # need to be the same size for best performance, though\n     marker = Makie.logo()\n )\n\n(Image: library lines 393:394)"
},

{
    "location": "examples-scatter.html#Stars-1",
    "page": "scatter",
    "title": "Stars",
    "category": "section",
    "text": "Tags: 3d, camera, glow, scatter, update_cam!.using Makie\n\n stars = 100_000\n scene = Scene(backgroundcolor = :black)\n scatter!(\n     scene,\n     (rand(Point3f0, stars) .- 0.5) .* 10,\n     glowwidth = 0.005, glowcolor = :white, color = RGBAf0(0.8, 0.9, 0.95, 0.4),\n     markersize = rand(range(0.0001, stop = 0.01, length = 100), stars),\n     show_axis = false\n )\n update_cam!(scene, FRect3D(Vec3f0(-2), Vec3f0(4)))\n scene\n\n(Image: library lines 446:456)"
},

{
    "location": "examples-scatter.html#Unicode-Marker-1",
    "page": "scatter",
    "title": "Unicode Marker",
    "category": "section",
    "text": "Tags: 3d, axis, marker, scatter.using Makie\n\n scene = Scene(resolution = (500, 500))\n scatter!(scene, Point3f0[(1,0,0), (0,1,0), (0,0,1)], marker = [:x, :circle, :cross])\n\n(Image: library lines 460:461)"
},

{
    "location": "examples-scatter.html#Interaction-with-Mouse-1",
    "page": "scatter",
    "title": "Interaction with Mouse",
    "category": "section",
    "text": "Tags: interaction, interactive, lines, marker, record, record_events, scatter.using Makie\n using LinearAlgebra\n\n scene = Scene(raw = true, camera = cam2d!, resolution = (500, 500))\n r = range(0, stop = 3, length = 4)\n the_time = Node(time())\n last_open = false\n @async while true\n     global last_open\n     the_time[] = time()\n     # this is a bit awkward, since the isopen(scene) is false\n     # as long as the scene isn\'t displayed\n     last_open && !isopen(scene) && break\n     last_open = isopen(scene)\n     sleep(1/25)\n end\n pos = lift(scene.events.mouseposition, the_time) do mpos, t\n     map(LinRange(0, 2pi, 60)) do i\n         circle = Point2f0(sin(i), cos(i))\n         mouse = to_world(scene, Point2f0(mpos))\n         secondary = (sin((i * 10f0) + t) * 0.09) * normalize(circle)\n         (secondary .+ circle) .+ mouse\n     end\n end\n lines!(scene, pos)\n p1 = scene[end]\n p2 = scatter!(\n     scene,\n     pos, markersize = 0.1f0,\n     marker = :star5,\n     color = p1[:color],\n )[end]\n center!(scene)\n t = Theme(raw = true, camera = campixel!)\n b1 = button(t, \"color\")\n b2 = button(t, \"marker\")\n msize = slider(t, 0.1:0.01:0.5)\n on(b1[end][:clicks]) do c\n     p1[:color] = rand(RGBAf0)\n end\n markers = (\'π\', \'😹\', \'⚃\', \'◑\', \'▼\')\n on(b2[end][:clicks]) do c\n     p2[:marker] = markers[rand(1:5)]\n end\n on(msize[end][:value]) do val\n     p2[:markersize] = val\n end\n RecordEvents(hbox(\n     vbox(b1, b2, msize),\n     scene\n ), \"./docs/media/interaction_with_mouse\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\interaction_with_mouse.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#Mouse-Picking-1",
    "page": "scatter",
    "title": "Mouse Picking",
    "category": "section",
    "text": "Tags: heatmap, interaction, interactive, record_events, scatter.using Makie\n\n img = rand(100, 100)\n scene = Scene(resolution = (500, 500))\n heatmap!(scene, img, scale_plot = false)\n clicks = Node(Point2f0[(0,0)])\n on(scene.events.mousebuttons) do buttons\n    if ispressed(scene, Mouse.left)\n        pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n        push!(clicks, push!(clicks[], pos))\n    end\n    return\n end\n scatter!(scene, clicks, color = :red, marker = \'+\', markersize = 10)\n RecordEvents(scene, \"./docs/media/mouse_picking\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_picking.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#sliders-1",
    "page": "scatter",
    "title": "sliders",
    "category": "section",
    "text": "Tags: interaction, record_events, scatter, slider, vbox.using Makie\n\n s1 = slider(LinRange(0.01, 1, 100), raw = true, camera = campixel!, start = 0.3)\n s2 = slider(LinRange(-2pi, 2pi, 100), raw = true, camera = campixel!)\n data = lift(s2[end][:value]) do v\n     map(LinRange(0, 2pi, 100)) do x\n         4f0 .* Point2f0(sin(x) + (sin(x * v) .* 0.1), cos(x) + (cos(x * v) .* 0.1))\n     end\n end\n p = scatter(data, markersize = s1[end][:value])\n\n RecordEvents(\n     hbox(p, vbox(s1, s2), parent = Scene(resolution = (500, 500))),\n     \"./docs/media/sliders\"\n )\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\sliders.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#Add-and-change-points-1",
    "page": "scatter",
    "title": "Add and change points",
    "category": "section",
    "text": "Tags: center, heatmap, interaction, ispressed, on, record_events, scatter, to_world.using Makie\n using LinearAlgebra\n\n img = rand(100, 100)\n scene = Scene(scale_plot = false, resolution = (500, 500))\n heatmap!(scene, img)\n clicks = Node(Point2f0[(0, 0)])\n blues = Node(Point2f0[])\n on(scene.events.mousebuttons) do buttons\n     if ispressed(scene, Mouse.left)\n         pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n         found = -1\n         c = clicks[]\n         for i in 1:length(c)\n            if norm(pos - c[i]) < 1\n                found = i\n            end\n         end\n         if found >= 1\n             blues[] = push!(blues[], pos)\n             deleteat!(clicks[], found)\n         else\n             push!(clicks[], pos)\n         end\n         clicks[] = clicks[]\n    end\n    return\n end\n t = Theme(markersize = 10, raw = true)\n scatter!(scene, t, clicks, color = :red, marker = \'+\')\n red_clicks = scene[end]\n scatter!(scene, t, blues, color = :blue, marker = \'o\')\n center!(scene)\n RecordEvents(scene, \"./docs/media/add_and_change_points\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\add_and_change_points.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#pong-1",
    "page": "scatter",
    "title": "pong",
    "category": "section",
    "text": "Tags: animated, documentation, scatter, updating.using Makie\n\n xyvec = rand(Point2f0, (2)) .* 5 .+ 1\n velvec = rand(Point2f0, (2)) .* 10\n # define some other parameters\n t = 0\n ts = 0.03\n balldiameter = 1\n origin = Point2f0(0, 0)\n xybounds = Point2f0(10, 10)\n N = 200\n scene = scatter(\n     xyvec,\n     markersize = balldiameter,\n     color = rand(RGBf0, 2),\n     limits = FRect(0, 0, xybounds)\n )\n s = scene[end] # last plot in scene\n\n record(scene, \"./docs/media/pong.mp4\", 1:N) do i\n     # calculate new ball position\n     global t = t + ts\n     global xyvec = xyvec .+ velvec .* ts\n     global velvec = map(xyvec, xybounds, origin, velvec) do p, b, o, vel\n         boolvec = ((p .+ balldiameter/2) .> b) .| ((p .- balldiameter/2) .< o)\n         velvec = map(boolvec, vel) do b, v\n             b ? -v : v\n         end\n     end\n     # plot\n     s[1] = xyvec\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\pong.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#pulsing-marker-1",
    "page": "scatter",
    "title": "pulsing marker",
    "category": "section",
    "text": "Tags: animated, documentation, markersize, scatter, updating.using Makie\n\n N = 100\n scene = scatter([0], [0], marker = \'❤\', markersize = 0.5, color = :red, raw = true)\n s = scene[end] # last plot in scene\n record(scene, \"./docs/media/pulsing_marker.mp4\", range(0, stop = 10pi, length = N)) do i\n     s[:markersize] = (cos(i) + 1) / 4 + 0.2\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\pulsing_marker.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-scatter.html#Viridis-scatter-1",
    "page": "scatter",
    "title": "Viridis scatter",
    "category": "section",
    "text": "Tags: 2d, color, colormap, documentation, scatter, viridis.using Makie\n\n N = 30\n scatter(1:N, 1:N, markersize = 2, color = to_colormap(:viridis, N))\n\n(Image: library lines 62:63)"
},

{
    "location": "examples-scatter.html#Viridis-meshscatter-1",
    "page": "scatter",
    "title": "Viridis meshscatter",
    "category": "section",
    "text": "Tags: 3d, color, colormap, documentation, scatter, viridis.using Makie\n\n N = 30\n R = 2\n theta = 4pi\n h = 5\n x = [R .* (t/3) .* cos(t) for t = range(0, stop = theta, length = N)]\n y = [R .* (t/3) .* sin(t) for t = range(0, stop = theta, length = N)]\n z = range(0, stop = h, length = N)\n meshscatter(x, y, z, markersize = 0.5, color = to_colormap(:viridis, N))\n\n(Image: library lines 67:74)"
},

{
    "location": "examples-scatter.html#Marker-sizes-Marker-colors-1",
    "page": "scatter",
    "title": "Marker sizes + Marker colors",
    "category": "section",
    "text": "Tags: 2d, color, documentation, markersize, scatter.using Makie\n\n scatter(\n     rand(20), rand(20),\n     markersize = rand(20) ./20 .+ 0.02,\n     color = rand(RGBf0, 20)\n )\n\n(Image: library lines 78:78)"
},

{
    "location": "examples-scatter.html#Marker-offset-1",
    "page": "scatter",
    "title": "Marker offset",
    "category": "section",
    "text": "Tags: documentation, marker_offset, scatter.using Makie\n\n scene = Scene(resolution = (500, 500))\n points = Point2f0[(0,0), (1,1), (2,2)]\n offset = rand(Point2f0, 3)./5\n scatter!(scene, points)\n scatter!(scene, points, marker_offset = offset, color = :red)\n\n(Image: library lines 86:90)"
},

{
    "location": "examples-scatter.html#Layouting-1",
    "page": "scatter",
    "title": "Layouting",
    "category": "section",
    "text": "Tags: heatmap, layout, lines, scatter, surface, vbox.using Makie\n\n p1 = scatter(rand(10), markersize = 1)\n p2 = lines(rand(10), rand(10))\n p3 = surface(0..1, 0..1, rand(100, 100))\n p4 = heatmap(rand(100, 100))\n x = 0:0.1:10\n p5 = lines(0:0.1:10, sin.(x))\n pscene = vbox(\n     hbox(p1, p2),\n     p3,\n     hbox(p4, p5, sizes = [0.7, 0.3]),\n     sizes = [0.2, 0.6, 0.2]\n )\n\n(Image: library lines 4:10)"
},

{
    "location": "examples-surface.html#",
    "page": "surface",
    "title": "surface",
    "category": "page",
    "text": ""
},

{
    "location": "examples-surface.html#surface-1",
    "page": "surface",
    "title": "surface",
    "category": "section",
    "text": ""
},

{
    "location": "examples-surface.html#Wireframe-of-a-Surface-1",
    "page": "surface",
    "title": "Wireframe of a Surface",
    "category": "section",
    "text": "Tags: 3d, surface, wireframe.using Makie\n\n function xy_data(x, y)\n     r = sqrt(x^2 + y^2)\n     r == 0.0 ? 1f0 : (sin(r)/r)\n end\n N = 30\n lspace = range(-10, stop = 10, length = N)\n z = Float32[xy_data(x, y) for x in lspace, y in lspace]\n r = range(0, stop = 3, length = N)\n wireframe(r, r, z)\n\n(Image: library lines 87:95)"
},

{
    "location": "examples-surface.html#Surface-1",
    "page": "surface",
    "title": "Surface",
    "category": "section",
    "text": "Tags: 3d, surface.using Makie\n\n N = 30\n function xy_data(x, y)\n     r = sqrt(x^2 + y^2)\n     r == 0.0 ? 1f0 : (sin(r)/r)\n end\n lspace = range(-10, stop = 10, length = N)\n z = Float32[xy_data(x, y) for x in lspace, y in lspace]\n r = range(0, stop = 3, length = N)\n surface(\n     r, r, z,\n     colormap = :Spectral\n )\n\n(Image: library lines 98:106)"
},

{
    "location": "examples-surface.html#Surface-with-image-1",
    "page": "surface",
    "title": "Surface with image",
    "category": "section",
    "text": "Tags: 3d, image, surface.using Makie\n\n N = 30\n function xy_data(x, y)\n     r = sqrt(x^2 + y^2)\n     r == 0.0 ? 1f0 : (sin(r)/r)\n end\n r = range(-2, stop = 2, length = N)\n surf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\n surface(\n     r, r, surf_func(10),\n     color = rand(RGBAf0, 124, 124)\n )\n\n(Image: library lines 112:119)"
},

{
    "location": "examples-surface.html#Image-on-Surface-Sphere-1",
    "page": "surface",
    "title": "Image on Surface Sphere",
    "category": "section",
    "text": "Tags: 3d, image, sphere, surface.using Makie\n\n n = 20\n θ = [0;(0.5:n-0.5)/n;1]\n φ = [(0:2n-2)*2/(2n-1);2]\n x = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\n y = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\n z = [cospi(θ) for θ in θ, φ in φ]\n rand([-1f0, 1f0], 3)\n pts = vec(Point3f0.(x, y, z))\n surface(x, y, z, color = Makie.logo())\n\n(Image: library lines 226:234)"
},

{
    "location": "examples-surface.html#Arrows-on-Sphere-1",
    "page": "surface",
    "title": "Arrows on Sphere",
    "category": "section",
    "text": "Tags: 3d, arrows, sphere, surface.using Makie\n using LinearAlgebra\n\n n = 20\n f   = (x,y,z) -> x*exp(cos(y)*z)\n ∇f  = (x,y,z) -> Point3f0(exp(cos(y)*z), -sin(y)*z*x*exp(cos(y)*z), x*cos(y)*exp(cos(y)*z))\n ∇ˢf = (x,y,z) -> ∇f(x,y,z) - Point3f0(x,y,z)*dot(Point3f0(x,y,z), ∇f(x,y,z))\n\n θ = [0;(0.5:n-0.5)/n;1]\n φ = [(0:2n-2)*2/(2n-1);2]\n x = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\n y = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\n z = [cospi(θ) for θ in θ, φ in φ]\n\n pts = vec(Point3f0.(x, y, z))\n ∇ˢF = vec(∇ˢf.(x, y, z)) .* 0.1f0\n surface(x, y, z)\n arrows!(\n     pts, ∇ˢF,\n     arrowsize = 0.03, linecolor = (:white, 0.6), linewidth = 3\n )\n\n(Image: library lines 238:253)"
},

{
    "location": "examples-surface.html#surface-contour3d-1",
    "page": "surface",
    "title": "surface + contour3d",
    "category": "section",
    "text": "Tags: 3d, contour3d, subscene, surface, vbox.using Makie\n\n vx = -1:0.01:1\n vy = -1:0.01:1\n\n f(x, y) = (sin(x*10) + cos(y*10)) / 4\n\n p1 = surface(vx, vy, f)\n p2 = contour3d(vx, vy, (x, y) -> f(x,y), levels = 15, linewidth = 3)\n\n scene = vbox(p1, p2)\n text!(campixel(p1), \"surface\", position = widths(p1) .* Vec(0.5, 1), align = (:center, :top), raw = true)\n text!(campixel(p2), \"contour3d\", position = widths(p2) .* Vec(0.5, 1), align = (:center, :top), raw = true)\n scene\n\n(Image: library lines 260:271)"
},

{
    "location": "examples-surface.html#Axis-Surface-1",
    "page": "surface",
    "title": "Axis + Surface",
    "category": "section",
    "text": "Tags: 3d, axis, interaction, manipulation, surface.using Makie\n\n vx = -1:0.01:1\n vy = -1:0.01:1\n\n f(x, y) = (sin(x*10) + cos(y*10)) / 4\n scene = Scene(resolution = (500, 500))\n # One way to style the axis is to pass a nested dictionary / named tuple to it.\n surface!(scene, vx, vy, f, axis = (frame = (linewidth = 2.0,),))\n psurf = scene[end] # the surface we last plotted to scene\n # One can also directly get the axis object and manipulate it\n axis = scene[Axis] # get axis\n\n # You can access nested attributes likes this:\n axis[:names, :axisnames] = (\"\\\\bf{ℜ}[u]\", \"\\\\bf{𝕴}[u]\", \" OK\\n\\\\bf{δ}\\n γ\")\n tstyle = axis[:names] # or just get the nested attributes and work directly with them\n\n tstyle[:textsize] = 10\n tstyle[:textcolor] = (:red, :green, :black)\n tstyle[:font] = \"helvetica\"\n\n\n psurf[:colormap] = :RdYlBu\n wh = widths(scene)\n t = text!(\n     campixel(scene),\n     \"Multipole Representation of first resonances of U-238\",\n     position = (wh[1] / 2.0, wh[2] - 20.0),\n     align = (:center,  :center),\n     textsize = 20,\n     font = \"helvetica\",\n     raw = :true\n )\n c = lines!(scene, Circle(Point2f0(0.1, 0.5), 0.1f0), color = :red, offset = Vec3f0(0, 0, 1))\n scene\n #update surface\n # TODO explain and improve the situation here\n psurf.converted[3][] = f.(vx .+ 0.5, (vy .+ 0.5)\')\n scene\n\n(Image: library lines 289:325)"
},

{
    "location": "examples-surface.html#Animated-surface-and-wireframe-1",
    "page": "surface",
    "title": "Animated surface and wireframe",
    "category": "section",
    "text": "Tags: 3d, animated, axis, record, surface, video, wireframe.using Makie\n\n scene = Scene();\n function xy_data(x, y)\n     r = sqrt(x^2 + y^2)\n     r == 0.0 ? 1f0 : (sin(r)/r)\n end\n\n r = range(-2, stop = 2, length = 50)\n surf_func(i) = [Float32(xy_data(x*i, y*i)) for x = r, y = r]\n z = surf_func(20)\n surf = surface!(scene, r, r, z)[end]\n\n wf = wireframe!(scene, r, r, Makie.lift(x-> x .+ 1.0, surf[3]),\n     linewidth = 2f0, color = Makie.lift(x-> to_colormap(x)[5], surf[:colormap])\n )\n N = 150\n scene\n record(scene, \"./docs/media/animated_surface_and_wireframe.mp4\", range(5, stop = 40, length = N)) do i\n     surf[3] = surf_func(i)\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\animated_surface_and_wireframe.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-surface.html#Surface-wireframe-contour-1",
    "page": "surface",
    "title": "Surface + wireframe + contour",
    "category": "section",
    "text": "Tags: 3d, contour, surface, transformation, wireframe.using Makie\n\n N = 51\n x = range(-2, stop = 2, length = N)\n y = x\n z = (-x .* exp.(-x .^ 2 .- (y\') .^ 2)) .* 4\n\n scene = wireframe(x, y, z)\n xm, ym, zm = minimum(scene.limits[])\n scene = surface!(scene, x, y, z .+ 0.05)\n contour!(scene, x, y, z, levels = 15, linewidth = 2, transformation = (:xy, zm))\n scene\n\n(Image: library lines 562:571)"
},

{
    "location": "examples-surface.html#Spacecraft-from-a-galaxy-far,-far-away-1",
    "page": "surface",
    "title": "Spacecraft from a galaxy far, far away",
    "category": "section",
    "text": "Tags: 3d, colormap, colorrange, contour, implicit, implicits, inequalities, surface.using Makie\n\n N = 100\n r = range(-1, stop = 1, length = N)\n\n # bunch of equations and inequalities\n f1(x,y,z) = x.^2 .+ y.^2 .+ z.^2 #center sphere\n f2(x,y,z) = y.^2 .+ z.^2 #command deck cylinder thing\n f3(x,y,z) = x.^2 .+ 4 .* y.^2 #controls the flattened cylinder connecting center pod to wings\n f4(x,y,z) = (y .* 0.7 .+ 0.05) #defines the diagonal spokes\n f5(x,y,z) = (y .* 0.7 .- 0.05) #defines the diagonal spokes\n f6(x,y,z) = abs.(x) + 0.3 .* abs.(y) #frame part of the wings\n\n e1(x,y,z) = 0.12 .* (1 .- abs.(z)) #limits of a hexagonal tube in the inside of the craft\n e2(x,y,z) = abs.(z) .* (abs.(z) .< 0.95) #outer limits of the wing plane\n e3(x,y,z) = abs.(z) .* (abs.(z) .> 0.9) #inner limits of the wing plane\n e4(x,y,z) = (abs.(x) + abs.(0.3 .*y)) .* ((abs.(x) + abs.(0.3 .* y)) .< 1) #frame of the wings\n e5(x,y,z) = abs.(z) .* (abs.(z) .< 1.05) #outside thickness of wing frames, including the spokes\n e6(x,y,z) = abs.(z) .* (abs.(z) .> 0.80) #inside thickness of wing frames, including the spokes\n e7(x,y,z) = abs.(x) .* (abs.(x) .< 0.7) #length of the straight bars part of frames\n e8(x,y,z) = abs.(y) .* (abs.(y) .> 0.9) #width of the straight bars part of frames\n e9(x,y,z) = abs.(y) .* (abs.(y) .< 0.035) #the thickness of the horizontal reinforcing bar on the wing planes\n\n amp = 15 #this just amplifies the \"strength\" of a volume, so that it shows up more clearly in the plot\n\n # spawn the tie fighter\n me = [(f1(x,y,z) .* f1(x,y,z).<0.2) .+ ((f2(x,y,z) .* f2(x,y,z).<0.02).*((x.<0.68).*(x.>0.50))) .+ amp .* (f3(x,y,z) .* (f3(x,y,z) .< e1(x,y,z))) .+ (e2(x,y,z).*e3(x,y,z).*e4(x,y,z)) .+ (e5(x,y,z).*e6(x,y,z)).*((e7(x,y,z)).*(e8(x,y,z)) .+ e9(x,y,z) .+ ((x.>f5(x,y,z)).*x).*((x.<f4(x,y,z)).*x) .+ (((-).(x).>f5(x,y,z)).*x).*(((-).(x).<f4(x,y,z)).*x) .+ ((f6(x,y,z).*(f6(x,y,z).<1.05)).*(f6(x,y,z).*(f6(x,y,z).>0.95)))) for x=r, y=r, z=r]\n\n me2 = me\n for i = 1:length(r)\n     me2[:,:,i] = me2[:,:,i] .- min(me2[:,:,i]...)\n     me2[:,:,i] = me2[:,:,i] ./ max(me2[:,:,i]...)\n end\n contour(me2, colormap = :Purples, colorrange = (0.001,0.6), alpha = 1.0, levels = 10)\n\n(Image: library lines 55:86)"
},

{
    "location": "examples-surface.html#Layouting-1",
    "page": "surface",
    "title": "Layouting",
    "category": "section",
    "text": "Tags: heatmap, layout, lines, scatter, surface, vbox.using Makie\n\n p1 = scatter(rand(10), markersize = 1)\n p2 = lines(rand(10), rand(10))\n p3 = surface(0..1, 0..1, rand(100, 100))\n p4 = heatmap(rand(100, 100))\n x = 0:0.1:10\n p5 = lines(0:0.1:10, sin.(x))\n pscene = vbox(\n     hbox(p1, p2),\n     p3,\n     hbox(p4, p5, sizes = [0.7, 0.3]),\n     sizes = [0.2, 0.6, 0.2]\n )\n\n(Image: library lines 4:10)"
},

{
    "location": "examples-surface.html#Comparing-contours,-image,-surfaces-and-heatmaps-1",
    "page": "surface",
    "title": "Comparing contours, image, surfaces and heatmaps",
    "category": "section",
    "text": "Tags: contour, heatmap, image, layout, surface, vbox.using Makie\n\n N = 20\n x = LinRange(-0.3, 1, N)\n y = LinRange(-1, 0.5, N)\n z = x .* y\'\n hbox(\n     vbox(\n         contour(x, y, z, levels = 20, linewidth =3),\n         contour(x, y, z, levels = 0, linewidth = 0, fillrange = true),\n         heatmap(x, y, z),\n     ),\n     vbox(\n         image(x, y, z, colormap = :viridis),\n         surface(x, y, fill(0f0, N, N), color = z, shading = false),\n         image(-0.3..1, -1..0.5, Makie.logo())\n     )\n )\n\n(Image: library lines 19:23)"
},

{
    "location": "examples-text.html#",
    "page": "text",
    "title": "text",
    "category": "page",
    "text": ""
},

{
    "location": "examples-text.html#text-1",
    "page": "text",
    "title": "text",
    "category": "section",
    "text": ""
},

{
    "location": "examples-text.html#Text-Annotation-1",
    "page": "text",
    "title": "Text Annotation",
    "category": "section",
    "text": "Tags: 2d, align, annotation, text.using Makie\n\n text(\n     \". This is an annotation!\",\n     position = (300, 200),\n     align = (:center,  :center),\n     textsize = 60,\n     font = \"Blackchancery\"\n )\n\n(Image: library lines 224:224)"
},

{
    "location": "examples-text.html#Text-rotation-1",
    "page": "text",
    "title": "Text rotation",
    "category": "section",
    "text": "Tags: 2d, rotation, text.using Makie\n\n scene = Scene()\n pos = (500, 500)\n posis = Point2f0[]\n for r in range(0, stop = 2pi, length = 20)\n     global pos, posis\n     p = pos .+ (sin(r)*100.0, cos(r) * 100)\n     push!(posis, p)\n     t = text!(\n         scene, \"test\",\n         position = p,\n         textsize = 50,\n         rotation = 1.5pi - r,\n         align = (:center, :center)\n     )\n end\n scatter!(scene, posis, markersize = 10)\n\n(Image: library lines 234:249)"
},

{
    "location": "examples-text.html#Mouse-Hover-1",
    "page": "text",
    "title": "Mouse Hover",
    "category": "section",
    "text": "Tags: hover, interaction, lift, lines, on, poly, popup, record_events, text, translate.using Makie\n using Colors, Observables\n\n r = range(0, stop=5pi, length=100)\n scene = Scene(resolution = (500, 500))\n lines!(scene, r, sin.(r), linewidth = 3)\n lineplot = scene[end]\n visible = node(:visible, false)\n poprect = lift(scene.events.mouseposition) do mp\n     FRect((mp .+ 5), 250, 40)\n end\n textpos = lift(scene.events.mouseposition) do mp\n     Vec3f0((mp .+ 5 .+ (250/2, 40 / 2))..., 120)\n end\n popup = poly!(campixel(scene), poprect, raw = true, color = :white, strokewidth = 2, strokecolor = :black, visible = visible)\n rect = popup[end]\n translate!(rect, Vec3f0(0, 0, 100))\n text!(popup, \"( 0.000,  0.000)\", textsize = 30, position = textpos, color = :darkred, align = (:center, :center), raw = true, visible = visible)\n text_field = popup[end]\n scene\n x = Node(false)\n on(scene.events.mouseposition) do event\n     plot, idx = Makie.mouse_selection(scene)\n     if plot == lineplot && idx > 0\n         visible[] = true\n         text_field[1] = sprint(io-> print(io, round.(Float64.(Tuple(lineplot[1][][idx])), digits = 3)))\n     else\n         visible[] = false\n     end\n     return\n end\n RecordEvents(scene, \"./docs/media/mouse_hover\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_hover.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-text.html#Stepper-demo-1",
    "page": "text",
    "title": "Stepper demo",
    "category": "section",
    "text": "Tags: annotation, documentation, stepper, text.using Makie\n\n function stepper_demo()\n     scene = Scene()\n     pos = (50, 50)\n     steps = [\"Step 1\", \"Step 2\", \"Step 3\"]\n     colors = AbstractPlotting.to_colormap(:Set1, length(steps))\n     lines!(scene, Rect(0,0,500,500), linewidth = 0.0001)\n     # initialize the stepper and give it an output destination\n     st = Stepper(scene, \"./docs/media/stepper_demo\")\n\n     for i = 1:length(steps)\n         text!(\n             scene,\n             steps[i],\n             position = pos,\n             align = (:left, :bottom),\n             textsize = 100,\n             font = \"Blackchancery\",\n             color = colors[i],\n             scale_plot = false\n         )\n         pos = pos .+ 100\n         step!(st) # saves the step and increments the step by one\n     end\n     st\n end\n stepper_demo()\n\n\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 1<br><img src=\"media/stepper_demo/thumb-stepper_demo-1.jpg\" alt=\"Step 1<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 2<br><img src=\"media/stepper_demo/thumb-stepper_demo-2.jpg\" alt=\"Step 2<br>\" /></p></div>\n<div style=\"display:inline-block\"><p style=\"display:inline-block; text-align: center\">Step 3<br><img src=\"media/stepper_demo/thumb-stepper_demo-3.jpg\" alt=\"Step 3<br>\" /></p></div>"
},

{
    "location": "examples-volume.html#",
    "page": "volume",
    "title": "volume",
    "category": "page",
    "text": ""
},

{
    "location": "examples-volume.html#volume-1",
    "page": "volume",
    "title": "volume",
    "category": "section",
    "text": ""
},

{
    "location": "examples-volume.html#Volume-Function-1",
    "page": "volume",
    "title": "Volume Function",
    "category": "section",
    "text": "Tags: 3d, volume.using Makie\n\n volume(rand(32, 32, 32), algorithm = :mip)\n\n(Image: library lines 57:57)"
},

{
    "location": "examples-volume.html#D-Contour-with-2D-contour-slices-1",
    "page": "volume",
    "title": "3D Contour with 2D contour slices",
    "category": "section",
    "text": "Tags: 3d, contour, heatmap, transformation, volume.using Makie\n using LinearAlgebra\n\n function test(x, y, z)\n     xy = [x, y, z]\n     ((xy\') * Matrix(I, 3, 3) * xy) / 20\n end\n x = range(-2pi, stop = 2pi, length = 100)\n scene = Scene()\n c = contour!(scene, x, x, x, test, levels = 6, alpha = 0.3)[end]\n xm, ym, zm = minimum(scene.limits[])\n # c[4] == fourth argument of the above plotting command\n contour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm), linewidth = 10)\n heatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\n contour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n(Image: library lines 171:183)"
},

{
    "location": "examples-volume.html#D-cube-with-sphere-cutout,-inside-1",
    "page": "volume",
    "title": "3D cube with sphere cutout, inside",
    "category": "section",
    "text": "Tags: 3d, implicit, implicits, volume.using Makie\n\n scene = Scene()\n r = range(-1, stop = 1, length = 100)\n mat = [(x.^2 + y.^2 + z.^2) for x = r, y = r, z = r]\n mat2 = mat .* (mat .> 1.4)\n #plot the space inside\n volume(mat2, algorithm = :absorptionrgba)\n\n(Image: library lines 19:24)"
},

{
    "location": "examples-volume.html#D-cube-with-sphere-cutout,-outside-1",
    "page": "volume",
    "title": "3D cube with sphere cutout, outside",
    "category": "section",
    "text": "Tags: 3d, implicit, implicits, volume.using Makie\n\n scene = Scene()\n r = range(-1, stop = 1, length = 100)\n mat = [(x.^2 + y.^2 + z.^2) for x=r, y=r, z=r]\n mat2 = mat .* (mat .< 1.4)\n #plot the space outside\n volume(50..100, 50..100, 50..100, mat2, algorithm = :absorptionrgba)\n\n(Image: library lines 28:33)"
},

{
    "location": "examples-volume.html#Biohazard-1",
    "page": "volume",
    "title": "Biohazard",
    "category": "section",
    "text": "Tags: 3d, absorption, algorithm, implicit, implicits, volume.using Makie\n\n (a, b) = -1, 2\n r = range(-5, stop = 5, length = 100)\n z = ((x,y) -> y.^4 - x.^4 + a.*y.^2 + b.*x.^2).(r, r\')\n me = [cos.(2 .* pi .* sqrt.(x.^2 + y.^2)) .* (4 .* z) for x=r, y=r, z=r]\n me2 = me .* (abs.(me) .> z .* 3)\n volume(me2, algorithm = :absorptionrgba)\n\n(Image: library lines 37:42)"
},

{
    "location": "examples-contour.html#",
    "page": "contour",
    "title": "contour",
    "category": "page",
    "text": ""
},

{
    "location": "examples-contour.html#contour-1",
    "page": "contour",
    "title": "contour",
    "category": "section",
    "text": ""
},

{
    "location": "examples-contour.html#Contour-Function-1",
    "page": "contour",
    "title": "Contour Function",
    "category": "section",
    "text": "Tags: 2d, contour.using Makie\n\n r = range(-10, stop = 10, length = 512)\n z = ((x, y)-> sin(x) + cos(y)).(r, r\')\n contour(r, r, z, levels = 5, color = :viridis, linewidth = 3)\n\n(Image: library lines 185:187)"
},

{
    "location": "examples-contour.html#contour-2",
    "page": "contour",
    "title": "contour",
    "category": "section",
    "text": "Tags: 2d, contour.using Makie\n\n y = range(-0.997669, stop = 0.997669, length = 23)\n contour(range(-0.99, stop = 0.99, length = 23), y, rand(23, 23), levels = 10)\n\n(Image: library lines 204:205)"
},

{
    "location": "examples-contour.html#D-Contour-with-2D-contour-slices-1",
    "page": "contour",
    "title": "3D Contour with 2D contour slices",
    "category": "section",
    "text": "Tags: 3d, contour, heatmap, transformation, volume.using Makie\n using LinearAlgebra\n\n function test(x, y, z)\n     xy = [x, y, z]\n     ((xy\') * Matrix(I, 3, 3) * xy) / 20\n end\n x = range(-2pi, stop = 2pi, length = 100)\n scene = Scene()\n c = contour!(scene, x, x, x, test, levels = 6, alpha = 0.3)[end]\n xm, ym, zm = minimum(scene.limits[])\n # c[4] == fourth argument of the above plotting command\n contour!(scene, x, x, map(v-> v[1, :, :], c[4]), transformation = (:xy, zm), linewidth = 10)\n heatmap!(scene, x, x, map(v-> v[:, 1, :], c[4]), transformation = (:xz, ym))\n contour!(scene, x, x, map(v-> v[:, :, 1], c[4]), fillrange = true, transformation = (:yz, xm))\n\n(Image: library lines 171:183)"
},

{
    "location": "examples-contour.html#Surface-wireframe-contour-1",
    "page": "contour",
    "title": "Surface + wireframe + contour",
    "category": "section",
    "text": "Tags: 3d, contour, surface, transformation, wireframe.using Makie\n\n N = 51\n x = range(-2, stop = 2, length = N)\n y = x\n z = (-x .* exp.(-x .^ 2 .- (y\') .^ 2)) .* 4\n\n scene = wireframe(x, y, z)\n xm, ym, zm = minimum(scene.limits[])\n scene = surface!(scene, x, y, z .+ 0.05)\n contour!(scene, x, y, z, levels = 15, linewidth = 2, transformation = (:xy, zm))\n scene\n\n(Image: library lines 562:571)"
},

{
    "location": "examples-contour.html#Implicit-equation-1",
    "page": "contour",
    "title": "Implicit equation",
    "category": "section",
    "text": "Tags: 2d, contour, implicit, implicits.using Makie\n\n r = range(-5, stop = 5, length = 400)\n (a, b) = -1, 2\n z = ((x,y) -> y.^4 - x.^4 + a .* y.^2 + b .* x.^2).(r, r\')\n z2 =  z .* (abs.(z) .< 250)\n contour(r, r, z2)\n\n(Image: library lines 4:8)"
},

{
    "location": "examples-contour.html#Cube-lattice-1",
    "page": "contour",
    "title": "Cube lattice",
    "category": "section",
    "text": "Tags: 3d, colormap, contour, implicit, implicits.using Makie\n\n r = range(-3, stop = 3, length = 100)\n me = [((1 ./ x).^2 + (1 ./ y).^2 + (1 ./ z).^2) for x=r, y=r, z=r]\n me2 = me .* (abs.(me) .> 1.5)\n contour(me2, color = :Set2)\n\n(Image: library lines 12:15)"
},

{
    "location": "examples-contour.html#Twisty-cube-thing-1",
    "page": "contour",
    "title": "Twisty cube thing",
    "category": "section",
    "text": "Tags: 3d, colormap, colorrange, contour, implicit, implicits.using Makie\n\n (a, b) = -1, 2\n r = range(-2, stop = 2, length = 100)\n z = ((x,y) -> x + y).(r, r\') ./ 5\n me = [z .* sin.(3 .* (atan.(y ./ x) .+ z.^2 .+ pi .* (x .> 0))) for x=r, y=r, z=r]\n me2 = me .* (me .> z .* 0.25)\n contour(me2, levels = 6, colormap = :Spectral)\n\n(Image: library lines 46:51)"
},

{
    "location": "examples-contour.html#Spacecraft-from-a-galaxy-far,-far-away-1",
    "page": "contour",
    "title": "Spacecraft from a galaxy far, far away",
    "category": "section",
    "text": "Tags: 3d, colormap, colorrange, contour, implicit, implicits, inequalities, surface.using Makie\n\n N = 100\n r = range(-1, stop = 1, length = N)\n\n # bunch of equations and inequalities\n f1(x,y,z) = x.^2 .+ y.^2 .+ z.^2 #center sphere\n f2(x,y,z) = y.^2 .+ z.^2 #command deck cylinder thing\n f3(x,y,z) = x.^2 .+ 4 .* y.^2 #controls the flattened cylinder connecting center pod to wings\n f4(x,y,z) = (y .* 0.7 .+ 0.05) #defines the diagonal spokes\n f5(x,y,z) = (y .* 0.7 .- 0.05) #defines the diagonal spokes\n f6(x,y,z) = abs.(x) + 0.3 .* abs.(y) #frame part of the wings\n\n e1(x,y,z) = 0.12 .* (1 .- abs.(z)) #limits of a hexagonal tube in the inside of the craft\n e2(x,y,z) = abs.(z) .* (abs.(z) .< 0.95) #outer limits of the wing plane\n e3(x,y,z) = abs.(z) .* (abs.(z) .> 0.9) #inner limits of the wing plane\n e4(x,y,z) = (abs.(x) + abs.(0.3 .*y)) .* ((abs.(x) + abs.(0.3 .* y)) .< 1) #frame of the wings\n e5(x,y,z) = abs.(z) .* (abs.(z) .< 1.05) #outside thickness of wing frames, including the spokes\n e6(x,y,z) = abs.(z) .* (abs.(z) .> 0.80) #inside thickness of wing frames, including the spokes\n e7(x,y,z) = abs.(x) .* (abs.(x) .< 0.7) #length of the straight bars part of frames\n e8(x,y,z) = abs.(y) .* (abs.(y) .> 0.9) #width of the straight bars part of frames\n e9(x,y,z) = abs.(y) .* (abs.(y) .< 0.035) #the thickness of the horizontal reinforcing bar on the wing planes\n\n amp = 15 #this just amplifies the \"strength\" of a volume, so that it shows up more clearly in the plot\n\n # spawn the tie fighter\n me = [(f1(x,y,z) .* f1(x,y,z).<0.2) .+ ((f2(x,y,z) .* f2(x,y,z).<0.02).*((x.<0.68).*(x.>0.50))) .+ amp .* (f3(x,y,z) .* (f3(x,y,z) .< e1(x,y,z))) .+ (e2(x,y,z).*e3(x,y,z).*e4(x,y,z)) .+ (e5(x,y,z).*e6(x,y,z)).*((e7(x,y,z)).*(e8(x,y,z)) .+ e9(x,y,z) .+ ((x.>f5(x,y,z)).*x).*((x.<f4(x,y,z)).*x) .+ (((-).(x).>f5(x,y,z)).*x).*(((-).(x).<f4(x,y,z)).*x) .+ ((f6(x,y,z).*(f6(x,y,z).<1.05)).*(f6(x,y,z).*(f6(x,y,z).>0.95)))) for x=r, y=r, z=r]\n\n me2 = me\n for i = 1:length(r)\n     me2[:,:,i] = me2[:,:,i] .- min(me2[:,:,i]...)\n     me2[:,:,i] = me2[:,:,i] ./ max(me2[:,:,i]...)\n end\n contour(me2, colormap = :Purples, colorrange = (0.001,0.6), alpha = 1.0, levels = 10)\n\n(Image: library lines 55:86)"
},

{
    "location": "examples-contour.html#Comparing-contours,-image,-surfaces-and-heatmaps-1",
    "page": "contour",
    "title": "Comparing contours, image, surfaces and heatmaps",
    "category": "section",
    "text": "Tags: contour, heatmap, image, layout, surface, vbox.using Makie\n\n N = 20\n x = LinRange(-0.3, 1, N)\n y = LinRange(-1, 0.5, N)\n z = x .* y\'\n hbox(\n     vbox(\n         contour(x, y, z, levels = 20, linewidth =3),\n         contour(x, y, z, levels = 0, linewidth = 0, fillrange = true),\n         heatmap(x, y, z),\n     ),\n     vbox(\n         image(x, y, z, colormap = :viridis),\n         surface(x, y, fill(0f0, N, N), color = z, shading = false),\n         image(-0.3..1, -1..0.5, Makie.logo())\n     )\n )\n\n(Image: library lines 19:23)"
},

{
    "location": "examples-arrows.html#",
    "page": "arrows",
    "title": "arrows",
    "category": "page",
    "text": ""
},

{
    "location": "examples-arrows.html#arrows-1",
    "page": "arrows",
    "title": "arrows",
    "category": "section",
    "text": ""
},

{
    "location": "examples-arrows.html#quiver-1",
    "page": "arrows",
    "title": "quiver",
    "category": "section",
    "text": "Tags: 2d, arrows, gradient, quiver, vectorfield.using Makie\n using ImageFiltering\n\n x = range(-2, stop = 2, length = 21)\n y = x\n z = x .* exp.(-x .^ 2 .- (y\') .^ 2)\n scene = contour(x, y, z, levels = 10, linewidth = 3)\n u, v = ImageFiltering.imgradients(z, KernelFactors.ando3)\n arrows!(x, y, u, v, arrowsize = 0.05)\n\n(Image: library lines 68:74)"
},

{
    "location": "examples-arrows.html#Arrows-3D-1",
    "page": "arrows",
    "title": "Arrows 3D",
    "category": "section",
    "text": "Tags: 3d, arrows.using Makie\n using LinearAlgebra\n\n function SphericalToCartesian(r::T,θ::T,ϕ::T) where T<:AbstractArray\n     x = @.r*sin(θ)*cos(ϕ)\n     y = @.r*sin(θ)*sin(ϕ)\n     z = @.r*cos(θ)\n     Point3f0.(x, y, z)\n end\n n = 100^2 #number of points to generate\n r = ones(n);\n θ = acos.(1 .- 2 .* rand(n))\n φ = 2π * rand(n)\n pts = SphericalToCartesian(r,θ,φ)\n arrows(pts, (normalize.(pts) .* 0.1f0), arrowsize = 0.02, linecolor = :green, arrowcolor = :darkblue)\n\n(Image: library lines 210:222)"
},

{
    "location": "examples-arrows.html#Arrows-on-Sphere-1",
    "page": "arrows",
    "title": "Arrows on Sphere",
    "category": "section",
    "text": "Tags: 3d, arrows, sphere, surface.using Makie\n using LinearAlgebra\n\n n = 20\n f   = (x,y,z) -> x*exp(cos(y)*z)\n ∇f  = (x,y,z) -> Point3f0(exp(cos(y)*z), -sin(y)*z*x*exp(cos(y)*z), x*cos(y)*exp(cos(y)*z))\n ∇ˢf = (x,y,z) -> ∇f(x,y,z) - Point3f0(x,y,z)*dot(Point3f0(x,y,z), ∇f(x,y,z))\n\n θ = [0;(0.5:n-0.5)/n;1]\n φ = [(0:2n-2)*2/(2n-1);2]\n x = [cospi(φ)*sinpi(θ) for θ in θ, φ in φ]\n y = [sinpi(φ)*sinpi(θ) for θ in θ, φ in φ]\n z = [cospi(θ) for θ in θ, φ in φ]\n\n pts = vec(Point3f0.(x, y, z))\n ∇ˢF = vec(∇ˢf.(x, y, z)) .* 0.1f0\n surface(x, y, z)\n arrows!(\n     pts, ∇ˢF,\n     arrowsize = 0.03, linecolor = (:white, 0.6), linewidth = 3\n )\n\n(Image: library lines 238:253)"
},

{
    "location": "examples-barplot.html#",
    "page": "barplot",
    "title": "barplot",
    "category": "page",
    "text": ""
},

{
    "location": "examples-barplot.html#barplot-1",
    "page": "barplot",
    "title": "barplot",
    "category": "section",
    "text": ""
},

{
    "location": "examples-barplot.html#Tutorial-barplot-1",
    "page": "barplot",
    "title": "Tutorial barplot",
    "category": "section",
    "text": "Tags: barplot, tutorial, tutorials.using Makie\n\n data = sort(randn(100))\n barplot(data)\n\n(Image: library lines 86:87)"
},

{
    "location": "examples-barplot.html#barplot-2",
    "page": "barplot",
    "title": "barplot",
    "category": "section",
    "text": "Tags: 2d, barplot.using Makie\n\n barplot(rand(10), color = rand(10))\n # barplot(rand(3), color = [:red, :blue, :green])\n\n(Image: library lines 64:64)"
},

{
    "location": "examples-poly.html#",
    "page": "poly",
    "title": "poly",
    "category": "page",
    "text": ""
},

{
    "location": "examples-poly.html#poly-1",
    "page": "poly",
    "title": "poly",
    "category": "section",
    "text": ""
},

{
    "location": "examples-poly.html#FEM-polygon-2D-1",
    "page": "poly",
    "title": "FEM polygon 2D",
    "category": "section",
    "text": "Tags: 2d, fem, poly.using Makie\n\n coordinates = [\n     0.0 0.0;\n     0.5 0.0;\n     1.0 0.0;\n     0.0 0.5;\n     0.5 0.5;\n     1.0 0.5;\n     0.0 1.0;\n     0.5 1.0;\n     1.0 1.0;\n ]\n connectivity = [\n     1 2 5;\n     1 4 5;\n     2 3 6;\n     2 5 6;\n     4 5 8;\n     4 7 8;\n     5 6 9;\n     5 8 9;\n ]\n color = [0.0, 0.0, 0.0, 0.0, -0.375, 0.0, 0.0, 0.0, 0.0]\n poly(coordinates, connectivity, color = color, strokecolor = (:black, 0.6), strokewidth = 4)\n\n(Image: library lines 86:108)"
},

{
    "location": "examples-poly.html#Polygons-1",
    "page": "poly",
    "title": "Polygons",
    "category": "section",
    "text": "Tags: 2d, linesegments, poly, polygon.using Makie\n using GeometryTypes\n\n scene = Scene(resolution = (500, 500))\n points = decompose(Point2f0, Circle(Point2f0(50), 50f0))\n pol = poly!(scene, points, color = :gray, strokewidth = 10, strokecolor = :red)\n # Optimized forms\n poly!(scene, [Circle(Point2f0(50+300), 50f0)], color = :gray, strokewidth = 10, strokecolor = :red)\n poly!(scene, [Circle(Point2f0(50+i, 50+i), 10f0) for i = 1:100:400], color = :red)\n poly!(scene, [Rectangle{Float32}(50+i, 50+i, 20, 20) for i = 1:100:400], strokewidth = 2, strokecolor = :green)\n linesegments!(scene,\n     [Point2f0(50 + i, 50 + i) => Point2f0(i + 70, i + 70) for i = 1:100:400], linewidth = 8, color = :purple\n )\n\n(Image: library lines 171:179)"
},

{
    "location": "examples-poly.html#Mouse-Hover-1",
    "page": "poly",
    "title": "Mouse Hover",
    "category": "section",
    "text": "Tags: hover, interaction, lift, lines, on, poly, popup, record_events, text, translate.using Makie\n using Colors, Observables\n\n r = range(0, stop=5pi, length=100)\n scene = Scene(resolution = (500, 500))\n lines!(scene, r, sin.(r), linewidth = 3)\n lineplot = scene[end]\n visible = node(:visible, false)\n poprect = lift(scene.events.mouseposition) do mp\n     FRect((mp .+ 5), 250, 40)\n end\n textpos = lift(scene.events.mouseposition) do mp\n     Vec3f0((mp .+ 5 .+ (250/2, 40 / 2))..., 120)\n end\n popup = poly!(campixel(scene), poprect, raw = true, color = :white, strokewidth = 2, strokecolor = :black, visible = visible)\n rect = popup[end]\n translate!(rect, Vec3f0(0, 0, 100))\n text!(popup, \"( 0.000,  0.000)\", textsize = 30, position = textpos, color = :darkred, align = (:center, :center), raw = true, visible = visible)\n text_field = popup[end]\n scene\n x = Node(false)\n on(scene.events.mouseposition) do event\n     plot, idx = Makie.mouse_selection(scene)\n     if plot == lineplot && idx > 0\n         visible[] = true\n         text_field[1] = sprint(io-> print(io, round.(Float64.(Tuple(lineplot[1][][idx])), digits = 3)))\n     else\n         visible[] = false\n     end\n     return\n end\n RecordEvents(scene, \"./docs/media/mouse_hover\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_hover.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-poly.html#Edit-Polygon-1",
    "page": "poly",
    "title": "Edit Polygon",
    "category": "section",
    "text": "Tags: events, interaction, node, on, poly, record_events.using Makie\n\n points = node(:poly, Point2f0[(0, 0), (0.5, 0.5), (1.0, 0.0)])\n scene = Scene(resolution = (500, 500))\n poly!(scene, points, strokewidth = 2, strokecolor = :black, color = :skyblue2, show_axis = false, scale_plot = false)\n scatter!(points, color = :white, strokewidth = 10, markersize = 0.05, strokecolor = :black, raw = true)\n pplot = scene[end]\n push!(points[], Point2f0(0.6, -0.3))\n points[] = points[]\n function add_move!(scene, points, pplot)\n     idx = Ref(0); dragstart = Ref(false); startpos = Base.RefValue(Point2f0(0))\n     on(events(scene).mousedrag) do drag\n         if ispressed(scene, Mouse.left)\n             if drag == Mouse.down\n                 plot, _idx = Makie.mouse_selection(scene)\n                 if plot == pplot\n                     idx[] = _idx; dragstart[] = true\n                     startpos[] = to_world(scene, Point2f0(scene.events.mouseposition[]))\n                 end\n             elseif drag == Mouse.pressed && dragstart[] && checkbounds(Bool, points[], idx[])\n                 pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n                 points[][idx[]] = pos\n                 points[] = points[]\n             end\n         else\n             dragstart[] = false\n         end\n         return\n     end\n end\n\n function add_remove_add!(scene, points, pplot)\n     on(events(scene).mousebuttons) do but\n         if ispressed(but, Mouse.left) && ispressed(scene, Keyboard.left_control)\n             pos = to_world(scene, Point2f0(events(scene).mouseposition[]))\n             push!(points[], pos)\n             points[] = points[]\n         elseif ispressed(but, Mouse.right)\n             plot, idx = Makie.mouse_selection(scene)\n             if plot == pplot && checkbounds(Bool, points[], idx)\n                 deleteat!(points[], idx)\n                 points[] = points[]\n             end\n         end\n         return\n     end\n end\n add_move!(scene, points, pplot)\n add_remove_add!(scene, points, pplot)\n center!(scene)\n RecordEvents(scene, \"./docs/media/edit_polygon\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\edit_polygon.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-band.html#",
    "page": "band",
    "title": "band",
    "category": "page",
    "text": ""
},

{
    "location": "examples-band.html#band-1",
    "page": "band",
    "title": "band",
    "category": "section",
    "text": ""
},

{
    "location": "examples-band.html#Fill-between-1",
    "page": "band",
    "title": "Fill between",
    "category": "section",
    "text": "Tags: 2d, band, fill_between, lines.using Makie\n using AbstractPlotting: fill_between!\n\n x = -5:0.01:5\n y1 = -5 .* x .* x .+ x .+ 10\n y2 = 5 .* x .* x .+ x\n lines(x, y1)\n lines!(x, y2)\n fill_between!(x, y1, y2, where = y2 .> y1, color = :yellow)\n fill_between!(x, y1, y2, where = y2 .<= y1, color = :red)\n\n(Image: library lines 32:39)"
},

{
    "location": "examples-slider.html#",
    "page": "slider",
    "title": "slider",
    "category": "page",
    "text": ""
},

{
    "location": "examples-slider.html#slider-1",
    "page": "slider",
    "title": "slider",
    "category": "section",
    "text": ""
},

{
    "location": "examples-slider.html#sliders-1",
    "page": "slider",
    "title": "sliders",
    "category": "section",
    "text": "Tags: interaction, record_events, scatter, slider, vbox.using Makie\n\n s1 = slider(LinRange(0.01, 1, 100), raw = true, camera = campixel!, start = 0.3)\n s2 = slider(LinRange(-2pi, 2pi, 100), raw = true, camera = campixel!)\n data = lift(s2[end][:value]) do v\n     map(LinRange(0, 2pi, 100)) do x\n         4f0 .* Point2f0(sin(x) + (sin(x * v) .* 0.1), cos(x) + (cos(x * v) .* 0.1))\n     end\n end\n p = scatter(data, markersize = s1[end][:value])\n\n RecordEvents(\n     hbox(p, vbox(s1, s2), parent = Scene(resolution = (500, 500))),\n     \"./docs/media/sliders\"\n )\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\sliders.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-slider.html#GUI-for-exploring-Lorenz-equation-1",
    "page": "slider",
    "title": "GUI for exploring Lorenz equation",
    "category": "section",
    "text": "Tags: colorswatch, hbox, interaction, meshscatter, record_events, slider, textslider, vbox.using Makie\n using Colors, Makie\n using AbstractPlotting: textslider, colorswatch\n\n s1, a = textslider(0f0:50f0, \"a\", start = 13)\n s2, b = textslider(-20f0:20f0, \"b\", start = 10)\n s3, c = textslider(0f0:20f0, \"c\", start = 2)\n s4, d = textslider(range(0.0, stop = 0.02, length = 100), \"d\", start = 0.01)\n s5, scales = textslider(range(0.01, stop = 0.5, length = 100), \"scale\", start = 0.1)\n s6, colorsw, pop = colorswatch()\n\n function lorenz(t0, a, b, c, h)\n     Point3f0(\n         t0[1] + h * a * (t0[2] - t0[1]),\n         t0[2] + h * (t0[1] * (b - t0[3]) - t0[2]),\n         t0[3] + h * (t0[1] * t0[2] - c * t0[3]),\n     )\n end\n # step through the `time`\n function lorenz(array::Vector, a = 5.0 ,b = 2.0, c = 6.0, d = 0.01)\n     t0 = Point3f0(0.1, 0, 0)\n     for i = eachindex(array)\n         t0 = lorenz(t0, a,b,c,d)\n         array[i] = t0\n     end\n     array\n end\n n1, n2 = 18, 30\n N = n1*n2\n args_n = (a, b, c, d)\n v0 = lorenz(zeros(Point3f0, N), to_value.(args_n)...)\n positions = lift(lorenz, Node(v0), args_n...)\n rotations = lift(diff, positions)\n rotations = lift(x-> push!(x, x[end]), rotations)\n\n mesh_scene = meshscatter(\n     positions,\n     markersize = scales, rotation = rotations,\n     intensity = collect(range(0f0, stop = 1f0, length = length(positions[]))),\n     color = colorsw\n )\n parent = Scene(resolution = (1000, 800))\n vbox(\n     hbox(s1, s2, s3, s4, s5, s6),\n     mesh_scene, parent = parent\n )\n RecordEvents(parent, \"./docs/media/gui_for_exploring_lorenz_equation\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\gui_for_exploring_lorenz_equation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-vbox.html#",
    "page": "vbox",
    "title": "vbox",
    "category": "page",
    "text": ""
},

{
    "location": "examples-vbox.html#vbox-1",
    "page": "vbox",
    "title": "vbox",
    "category": "section",
    "text": ""
},

{
    "location": "examples-vbox.html#heatmap-interpolation-1",
    "page": "vbox",
    "title": "heatmap interpolation",
    "category": "section",
    "text": "Tags: 2d, hbox, heatmap, interpolate, subscene, theme, vbox.using Makie\n using AbstractPlotting: hbox, vbox\n\n data = rand(50, 100)\n p1 = heatmap(data, interpolate = true)\n p2 = heatmap(data, interpolate = false)\n t = Theme(align = (:left, :bottom), raw = true, camera = campixel!)\n title1 = text(t, \"Interpolate = true\")\n title2 = text(t, \"Interpolate = false\")\n s = vbox(\n     hbox(p1, title1),\n     hbox(p2, title2),\n )\n\n(Image: library lines 143:150)"
},

{
    "location": "examples-vbox.html#surface-contour3d-1",
    "page": "vbox",
    "title": "surface + contour3d",
    "category": "section",
    "text": "Tags: 3d, contour3d, subscene, surface, vbox.using Makie\n\n vx = -1:0.01:1\n vy = -1:0.01:1\n\n f(x, y) = (sin(x*10) + cos(y*10)) / 4\n\n p1 = surface(vx, vy, f)\n p2 = contour3d(vx, vy, (x, y) -> f(x,y), levels = 15, linewidth = 3)\n\n scene = vbox(p1, p2)\n text!(campixel(p1), \"surface\", position = widths(p1) .* Vec(0.5, 1), align = (:center, :top), raw = true)\n text!(campixel(p2), \"contour3d\", position = widths(p2) .* Vec(0.5, 1), align = (:center, :top), raw = true)\n scene\n\n(Image: library lines 260:271)"
},

{
    "location": "examples-vbox.html#sliders-1",
    "page": "vbox",
    "title": "sliders",
    "category": "section",
    "text": "Tags: interaction, record_events, scatter, slider, vbox.using Makie\n\n s1 = slider(LinRange(0.01, 1, 100), raw = true, camera = campixel!, start = 0.3)\n s2 = slider(LinRange(-2pi, 2pi, 100), raw = true, camera = campixel!)\n data = lift(s2[end][:value]) do v\n     map(LinRange(0, 2pi, 100)) do x\n         4f0 .* Point2f0(sin(x) + (sin(x * v) .* 0.1), cos(x) + (cos(x * v) .* 0.1))\n     end\n end\n p = scatter(data, markersize = s1[end][:value])\n\n RecordEvents(\n     hbox(p, vbox(s1, s2), parent = Scene(resolution = (500, 500))),\n     \"./docs/media/sliders\"\n )\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\sliders.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-vbox.html#GUI-for-exploring-Lorenz-equation-1",
    "page": "vbox",
    "title": "GUI for exploring Lorenz equation",
    "category": "section",
    "text": "Tags: colorswatch, hbox, interaction, meshscatter, record_events, slider, textslider, vbox.using Makie\n using Colors, Makie\n using AbstractPlotting: textslider, colorswatch\n\n s1, a = textslider(0f0:50f0, \"a\", start = 13)\n s2, b = textslider(-20f0:20f0, \"b\", start = 10)\n s3, c = textslider(0f0:20f0, \"c\", start = 2)\n s4, d = textslider(range(0.0, stop = 0.02, length = 100), \"d\", start = 0.01)\n s5, scales = textslider(range(0.01, stop = 0.5, length = 100), \"scale\", start = 0.1)\n s6, colorsw, pop = colorswatch()\n\n function lorenz(t0, a, b, c, h)\n     Point3f0(\n         t0[1] + h * a * (t0[2] - t0[1]),\n         t0[2] + h * (t0[1] * (b - t0[3]) - t0[2]),\n         t0[3] + h * (t0[1] * t0[2] - c * t0[3]),\n     )\n end\n # step through the `time`\n function lorenz(array::Vector, a = 5.0 ,b = 2.0, c = 6.0, d = 0.01)\n     t0 = Point3f0(0.1, 0, 0)\n     for i = eachindex(array)\n         t0 = lorenz(t0, a,b,c,d)\n         array[i] = t0\n     end\n     array\n end\n n1, n2 = 18, 30\n N = n1*n2\n args_n = (a, b, c, d)\n v0 = lorenz(zeros(Point3f0, N), to_value.(args_n)...)\n positions = lift(lorenz, Node(v0), args_n...)\n rotations = lift(diff, positions)\n rotations = lift(x-> push!(x, x[end]), rotations)\n\n mesh_scene = meshscatter(\n     positions,\n     markersize = scales, rotation = rotations,\n     intensity = collect(range(0f0, stop = 1f0, length = length(positions[]))),\n     color = colorsw\n )\n parent = Scene(resolution = (1000, 800))\n vbox(\n     hbox(s1, s2, s3, s4, s5, s6),\n     mesh_scene, parent = parent\n )\n RecordEvents(parent, \"./docs/media/gui_for_exploring_lorenz_equation\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\gui_for_exploring_lorenz_equation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-vbox.html#Layouting-1",
    "page": "vbox",
    "title": "Layouting",
    "category": "section",
    "text": "Tags: heatmap, layout, lines, scatter, surface, vbox.using Makie\n\n p1 = scatter(rand(10), markersize = 1)\n p2 = lines(rand(10), rand(10))\n p3 = surface(0..1, 0..1, rand(100, 100))\n p4 = heatmap(rand(100, 100))\n x = 0:0.1:10\n p5 = lines(0:0.1:10, sin.(x))\n pscene = vbox(\n     hbox(p1, p2),\n     p3,\n     hbox(p4, p5, sizes = [0.7, 0.3]),\n     sizes = [0.2, 0.6, 0.2]\n )\n\n(Image: library lines 4:10)"
},

{
    "location": "examples-vbox.html#Comparing-contours,-image,-surfaces-and-heatmaps-1",
    "page": "vbox",
    "title": "Comparing contours, image, surfaces and heatmaps",
    "category": "section",
    "text": "Tags: contour, heatmap, image, layout, surface, vbox.using Makie\n\n N = 20\n x = LinRange(-0.3, 1, N)\n y = LinRange(-1, 0.5, N)\n z = x .* y\'\n hbox(\n     vbox(\n         contour(x, y, z, levels = 20, linewidth =3),\n         contour(x, y, z, levels = 0, linewidth = 0, fillrange = true),\n         heatmap(x, y, z),\n     ),\n     vbox(\n         image(x, y, z, colormap = :viridis),\n         surface(x, y, fill(0f0, N, N), color = z, shading = false),\n         image(-0.3..1, -1..0.5, Makie.logo())\n     )\n )\n\n(Image: library lines 19:23)"
},

{
    "location": "examples-interaction.html#",
    "page": "interaction",
    "title": "interaction",
    "category": "page",
    "text": ""
},

{
    "location": "examples-interaction.html#interaction-1",
    "page": "interaction",
    "title": "interaction",
    "category": "section",
    "text": ""
},

{
    "location": "examples-interaction.html#Axis-Surface-1",
    "page": "interaction",
    "title": "Axis + Surface",
    "category": "section",
    "text": "Tags: 3d, axis, interaction, manipulation, surface.using Makie\n\n vx = -1:0.01:1\n vy = -1:0.01:1\n\n f(x, y) = (sin(x*10) + cos(y*10)) / 4\n scene = Scene(resolution = (500, 500))\n # One way to style the axis is to pass a nested dictionary / named tuple to it.\n surface!(scene, vx, vy, f, axis = (frame = (linewidth = 2.0,),))\n psurf = scene[end] # the surface we last plotted to scene\n # One can also directly get the axis object and manipulate it\n axis = scene[Axis] # get axis\n\n # You can access nested attributes likes this:\n axis[:names, :axisnames] = (\"\\\\bf{ℜ}[u]\", \"\\\\bf{𝕴}[u]\", \" OK\\n\\\\bf{δ}\\n γ\")\n tstyle = axis[:names] # or just get the nested attributes and work directly with them\n\n tstyle[:textsize] = 10\n tstyle[:textcolor] = (:red, :green, :black)\n tstyle[:font] = \"helvetica\"\n\n\n psurf[:colormap] = :RdYlBu\n wh = widths(scene)\n t = text!(\n     campixel(scene),\n     \"Multipole Representation of first resonances of U-238\",\n     position = (wh[1] / 2.0, wh[2] - 20.0),\n     align = (:center,  :center),\n     textsize = 20,\n     font = \"helvetica\",\n     raw = :true\n )\n c = lines!(scene, Circle(Point2f0(0.1, 0.5), 0.1f0), color = :red, offset = Vec3f0(0, 0, 1))\n scene\n #update surface\n # TODO explain and improve the situation here\n psurf.converted[3][] = f.(vx .+ 0.5, (vy .+ 0.5)\')\n scene\n\n(Image: library lines 289:325)"
},

{
    "location": "examples-interaction.html#Interaction-with-Mouse-1",
    "page": "interaction",
    "title": "Interaction with Mouse",
    "category": "section",
    "text": "Tags: interaction, interactive, lines, marker, record, record_events, scatter.using Makie\n using LinearAlgebra\n\n scene = Scene(raw = true, camera = cam2d!, resolution = (500, 500))\n r = range(0, stop = 3, length = 4)\n the_time = Node(time())\n last_open = false\n @async while true\n     global last_open\n     the_time[] = time()\n     # this is a bit awkward, since the isopen(scene) is false\n     # as long as the scene isn\'t displayed\n     last_open && !isopen(scene) && break\n     last_open = isopen(scene)\n     sleep(1/25)\n end\n pos = lift(scene.events.mouseposition, the_time) do mpos, t\n     map(LinRange(0, 2pi, 60)) do i\n         circle = Point2f0(sin(i), cos(i))\n         mouse = to_world(scene, Point2f0(mpos))\n         secondary = (sin((i * 10f0) + t) * 0.09) * normalize(circle)\n         (secondary .+ circle) .+ mouse\n     end\n end\n lines!(scene, pos)\n p1 = scene[end]\n p2 = scatter!(\n     scene,\n     pos, markersize = 0.1f0,\n     marker = :star5,\n     color = p1[:color],\n )[end]\n center!(scene)\n t = Theme(raw = true, camera = campixel!)\n b1 = button(t, \"color\")\n b2 = button(t, \"marker\")\n msize = slider(t, 0.1:0.01:0.5)\n on(b1[end][:clicks]) do c\n     p1[:color] = rand(RGBAf0)\n end\n markers = (\'π\', \'😹\', \'⚃\', \'◑\', \'▼\')\n on(b2[end][:clicks]) do c\n     p2[:marker] = markers[rand(1:5)]\n end\n on(msize[end][:value]) do val\n     p2[:markersize] = val\n end\n RecordEvents(hbox(\n     vbox(b1, b2, msize),\n     scene\n ), \"./docs/media/interaction_with_mouse\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\interaction_with_mouse.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#Mouse-Picking-1",
    "page": "interaction",
    "title": "Mouse Picking",
    "category": "section",
    "text": "Tags: heatmap, interaction, interactive, record_events, scatter.using Makie\n\n img = rand(100, 100)\n scene = Scene(resolution = (500, 500))\n heatmap!(scene, img, scale_plot = false)\n clicks = Node(Point2f0[(0,0)])\n on(scene.events.mousebuttons) do buttons\n    if ispressed(scene, Mouse.left)\n        pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n        push!(clicks, push!(clicks[], pos))\n    end\n    return\n end\n scatter!(scene, clicks, color = :red, marker = \'+\', markersize = 10)\n RecordEvents(scene, \"./docs/media/mouse_picking\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_picking.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#sliders-1",
    "page": "interaction",
    "title": "sliders",
    "category": "section",
    "text": "Tags: interaction, record_events, scatter, slider, vbox.using Makie\n\n s1 = slider(LinRange(0.01, 1, 100), raw = true, camera = campixel!, start = 0.3)\n s2 = slider(LinRange(-2pi, 2pi, 100), raw = true, camera = campixel!)\n data = lift(s2[end][:value]) do v\n     map(LinRange(0, 2pi, 100)) do x\n         4f0 .* Point2f0(sin(x) + (sin(x * v) .* 0.1), cos(x) + (cos(x * v) .* 0.1))\n     end\n end\n p = scatter(data, markersize = s1[end][:value])\n\n RecordEvents(\n     hbox(p, vbox(s1, s2), parent = Scene(resolution = (500, 500))),\n     \"./docs/media/sliders\"\n )\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\sliders.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#Mouse-Hover-1",
    "page": "interaction",
    "title": "Mouse Hover",
    "category": "section",
    "text": "Tags: hover, interaction, lift, lines, on, poly, popup, record_events, text, translate.using Makie\n using Colors, Observables\n\n r = range(0, stop=5pi, length=100)\n scene = Scene(resolution = (500, 500))\n lines!(scene, r, sin.(r), linewidth = 3)\n lineplot = scene[end]\n visible = node(:visible, false)\n poprect = lift(scene.events.mouseposition) do mp\n     FRect((mp .+ 5), 250, 40)\n end\n textpos = lift(scene.events.mouseposition) do mp\n     Vec3f0((mp .+ 5 .+ (250/2, 40 / 2))..., 120)\n end\n popup = poly!(campixel(scene), poprect, raw = true, color = :white, strokewidth = 2, strokecolor = :black, visible = visible)\n rect = popup[end]\n translate!(rect, Vec3f0(0, 0, 100))\n text!(popup, \"( 0.000,  0.000)\", textsize = 30, position = textpos, color = :darkred, align = (:center, :center), raw = true, visible = visible)\n text_field = popup[end]\n scene\n x = Node(false)\n on(scene.events.mouseposition) do event\n     plot, idx = Makie.mouse_selection(scene)\n     if plot == lineplot && idx > 0\n         visible[] = true\n         text_field[1] = sprint(io-> print(io, round.(Float64.(Tuple(lineplot[1][][idx])), digits = 3)))\n     else\n         visible[] = false\n     end\n     return\n end\n RecordEvents(scene, \"./docs/media/mouse_hover\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\mouse_hover.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#GUI-for-exploring-Lorenz-equation-1",
    "page": "interaction",
    "title": "GUI for exploring Lorenz equation",
    "category": "section",
    "text": "Tags: colorswatch, hbox, interaction, meshscatter, record_events, slider, textslider, vbox.using Makie\n using Colors, Makie\n using AbstractPlotting: textslider, colorswatch\n\n s1, a = textslider(0f0:50f0, \"a\", start = 13)\n s2, b = textslider(-20f0:20f0, \"b\", start = 10)\n s3, c = textslider(0f0:20f0, \"c\", start = 2)\n s4, d = textslider(range(0.0, stop = 0.02, length = 100), \"d\", start = 0.01)\n s5, scales = textslider(range(0.01, stop = 0.5, length = 100), \"scale\", start = 0.1)\n s6, colorsw, pop = colorswatch()\n\n function lorenz(t0, a, b, c, h)\n     Point3f0(\n         t0[1] + h * a * (t0[2] - t0[1]),\n         t0[2] + h * (t0[1] * (b - t0[3]) - t0[2]),\n         t0[3] + h * (t0[1] * t0[2] - c * t0[3]),\n     )\n end\n # step through the `time`\n function lorenz(array::Vector, a = 5.0 ,b = 2.0, c = 6.0, d = 0.01)\n     t0 = Point3f0(0.1, 0, 0)\n     for i = eachindex(array)\n         t0 = lorenz(t0, a,b,c,d)\n         array[i] = t0\n     end\n     array\n end\n n1, n2 = 18, 30\n N = n1*n2\n args_n = (a, b, c, d)\n v0 = lorenz(zeros(Point3f0, N), to_value.(args_n)...)\n positions = lift(lorenz, Node(v0), args_n...)\n rotations = lift(diff, positions)\n rotations = lift(x-> push!(x, x[end]), rotations)\n\n mesh_scene = meshscatter(\n     positions,\n     markersize = scales, rotation = rotations,\n     intensity = collect(range(0f0, stop = 1f0, length = length(positions[]))),\n     color = colorsw\n )\n parent = Scene(resolution = (1000, 800))\n vbox(\n     hbox(s1, s2, s3, s4, s5, s6),\n     mesh_scene, parent = parent\n )\n RecordEvents(parent, \"./docs/media/gui_for_exploring_lorenz_equation\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\gui_for_exploring_lorenz_equation.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#Edit-Polygon-1",
    "page": "interaction",
    "title": "Edit Polygon",
    "category": "section",
    "text": "Tags: events, interaction, node, on, poly, record_events.using Makie\n\n points = node(:poly, Point2f0[(0, 0), (0.5, 0.5), (1.0, 0.0)])\n scene = Scene(resolution = (500, 500))\n poly!(scene, points, strokewidth = 2, strokecolor = :black, color = :skyblue2, show_axis = false, scale_plot = false)\n scatter!(points, color = :white, strokewidth = 10, markersize = 0.05, strokecolor = :black, raw = true)\n pplot = scene[end]\n push!(points[], Point2f0(0.6, -0.3))\n points[] = points[]\n function add_move!(scene, points, pplot)\n     idx = Ref(0); dragstart = Ref(false); startpos = Base.RefValue(Point2f0(0))\n     on(events(scene).mousedrag) do drag\n         if ispressed(scene, Mouse.left)\n             if drag == Mouse.down\n                 plot, _idx = Makie.mouse_selection(scene)\n                 if plot == pplot\n                     idx[] = _idx; dragstart[] = true\n                     startpos[] = to_world(scene, Point2f0(scene.events.mouseposition[]))\n                 end\n             elseif drag == Mouse.pressed && dragstart[] && checkbounds(Bool, points[], idx[])\n                 pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n                 points[][idx[]] = pos\n                 points[] = points[]\n             end\n         else\n             dragstart[] = false\n         end\n         return\n     end\n end\n\n function add_remove_add!(scene, points, pplot)\n     on(events(scene).mousebuttons) do but\n         if ispressed(but, Mouse.left) && ispressed(scene, Keyboard.left_control)\n             pos = to_world(scene, Point2f0(events(scene).mouseposition[]))\n             push!(points[], pos)\n             points[] = points[]\n         elseif ispressed(but, Mouse.right)\n             plot, idx = Makie.mouse_selection(scene)\n             if plot == pplot && checkbounds(Bool, points[], idx)\n                 deleteat!(points[], idx)\n                 points[] = points[]\n             end\n         end\n         return\n     end\n end\n add_move!(scene, points, pplot)\n add_remove_add!(scene, points, pplot)\n center!(scene)\n RecordEvents(scene, \"./docs/media/edit_polygon\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\edit_polygon.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#Add-and-change-points-1",
    "page": "interaction",
    "title": "Add and change points",
    "category": "section",
    "text": "Tags: center, heatmap, interaction, ispressed, on, record_events, scatter, to_world.using Makie\n using LinearAlgebra\n\n img = rand(100, 100)\n scene = Scene(scale_plot = false, resolution = (500, 500))\n heatmap!(scene, img)\n clicks = Node(Point2f0[(0, 0)])\n blues = Node(Point2f0[])\n on(scene.events.mousebuttons) do buttons\n     if ispressed(scene, Mouse.left)\n         pos = to_world(scene, Point2f0(scene.events.mouseposition[]))\n         found = -1\n         c = clicks[]\n         for i in 1:length(c)\n            if norm(pos - c[i]) < 1\n                found = i\n            end\n         end\n         if found >= 1\n             blues[] = push!(blues[], pos)\n             deleteat!(clicks[], found)\n         else\n             push!(clicks[], pos)\n         end\n         clicks[] = clicks[]\n    end\n    return\n end\n t = Theme(markersize = 10, raw = true)\n scatter!(scene, t, clicks, color = :red, marker = \'+\')\n red_clicks = scene[end]\n scatter!(scene, t, blues, color = :blue, marker = \'o\')\n center!(scene)\n RecordEvents(scene, \"./docs/media/add_and_change_points\")\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\add_and_change_points.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "examples-interaction.html#Travelling-wave-1",
    "page": "interaction",
    "title": "Travelling wave",
    "category": "section",
    "text": "Tags: animated, documentation, interaction, lines, updating.using Makie\n\n scene = Scene()\n mytime = Node(0.0)\n f(v, t) = sin(v + t)\n scene = lines!(\n     scene,\n     lift(t -> f.(range(0, stop = 2pi, length = 50), t), mytime),\n     color = :blue)\n p1 = scene[end];\n N = 100\n record(scene, \"./docs/media/travelling_wave.mp4\", range(0, stop = 4pi, length = N)) do i\n     mytime[] = i\nend\n\n    <video controls autoplay loop muted>\n      <source src=\"media\\travelling_wave.mp4\" type=\"video/mp4\">\n      Your browser does not support mp4. Please use a modern browser like Chrome or Firefox.\n    </video>"
},

{
    "location": "why-makie.html#",
    "page": "Why Makie?",
    "title": "Why Makie?",
    "category": "page",
    "text": ""
},

{
    "location": "why-makie.html#Why-Makie?-1",
    "page": "Why Makie?",
    "title": "Why Makie?",
    "category": "section",
    "text": "Makie is a high level plotting interface for GLVisualize, with a focus on interactivity and speed.It can also be seen as a prototype for a new design of Plots.jl, since it will implement a very similar interface and incorporate a lot of the ideas.A fresh start instead of the already available GLVisualize backend for Plots.jl was needed for the following reasons:Plots.jl was written to create static plots without any interaction. This is deeply reflected in the internal design and makes it hard to integrate the high performance interaction possibilities from GLVisualize.\nPlots.jl has many high level plotting packages as a backend which lead to a very inconsistent design for the backends. For example, there is no straight interface a backend needs to implement. The backend abstraction happens at a very high level and the Plots.jl design relies on the high-level backends to fill in a lot of functionality - which lead to a lot of duplicated work for the lower level backends and a lot of inconsistent behavior since the code isn\'t shared between backends. It also means that it is a lot of work to maintain a backend.\nThe attributes a plot/series contains and where the default creation happens is opaque and not well documented. Sometimes it\'s the task of the backend to create defaults for missing attributes, sometimes Plots.jl creates the defaults. A missing attribute is signalled in too many different ways (e.g. false, nothing, \"\") which then needs to be checked and filled in by the backend. This leads to making it very challenging to e.g. find the color of a line for different plot types and creates buggy, inconsistent and messy backend code.\nAs mentioned in point 2, there is not a single consistent low level drawing API. This also influences recipes, since there is not a straight mapping to a low level drawing API and therefore it\'s not that easy to compose. There should be a finite set of \"atomic\" drawing operations (which can\'t be decomposed further) which a backend needs to implement and the rest should be implemented via recipes using those atomic operations. So once a backend implements those, it will support all of the plotting operations and only minor maintenance work needs to be done from that point on.\nBackend loading is done in Plots.jl via evaling the backend code. This has at 4 negative consequences:\nBackend code can\'t be precompiled leading to longer load times\nBackend dependencies are not in the Plots.jl REQUIRE file\nBackend dependencies get loaded via a function that gets evaled, so it\'s a bit awkward to use those dependencies in the function inside a backend\nWorld age issues because of the eval"
},

]}
