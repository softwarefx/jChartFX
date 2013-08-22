##jChartFX Libraries##


The jChartFX libraries have been split into several .js files to provide 
granular control over what you add as a reference in your html thus allowing 
you to limit what the browser downloads when the page is accessed.

The only two files required in any scenario are:

- *jchartfx.coreVector.js* or *jchartfx.coreBasic.js* (depending on whether you want to use Vector based rendering or not) 
- *jchartfx.system.js* 
	

Beyond those two, you can add or remove references as needed based on the 
functionality you want to make available on the chart.

Below you will find a complete list of libraries and their description
to help you decide whether to reference them or not.


***jchartfx.advanced.js***
-----------------------
Provides advanced chart features such as Axis Sections, Conditional Attributes and the DataGrid.


***jchartfx.annotation.js*** 
-----------------------
Provides access to the annotation extension. Use this library when you need to overlay drawing objects such as balloons, arrows, floating texts and images.


***jchartFX.coreBasic.js***
-----------------------
The lightweight version of the core jChartFX library. Use this library instead of coreVector when a lighter download is favored over more attractive visuals.


***jchartFX.coreVector.js***
-----------------------
The visually enhanced version of the core jChartFX library. Use this library instead of coreBasic when more complex and attractive visuals are desired.


***jchartfx.coreVector3d.js***
-----------------------
Adds 3D rendering capabilities to the coreVector library. Requires coreVector.


***jchartfx.data.js***
-----------------------
Provides advanced data features such as the CrossTab data transform.


***jchartfx.density.js***
-----------------------
Contains the Density gallery


***jchartfx.equalizer.js***
-----------------------
Contains the Equalizer bars gallery


***jchartfx.handdrawn.js***
-----------------------
Provides the HandDrawn extension that allows you to add hand drawn effects to the standard galleries


***jchartfx.heatmap.js***
-----------------------
Contains the Heatmap gallery


***jchartfx.highlow.js***
-----------------------
Contains the High-Low gallery


***jchartfx.highlowclose.js***
-----------------------
Contains the High-Low-Close gallery


***jchartfx.overlaybubble.js***
-----------------------
Contains the OverlayBubble gallery


***jchartfx.pareto.js***
-----------------------
Contains the Pareto Chart gallery


***jchartfx.pyramid.js***
-----------------------
Contains the Pyramid gallery


***jchartfx.radar.js***
-----------------------
Contains the Radar gallery


***jchartfx.surface.js***
-----------------------
Contains the Surface gallery


***jchartfx.system.js (Required)***
-----------------------
Contains internal jChartFX classes. This libray is always required.


***jchartfx.treemap.js***
-----------------------
Contains the Treemap Gallery


***jchartfx.ui.js***
-----------------------
Provides compatibility with jQuery UI Syntax


***jchartfx.vector.js***
-----------------------
This includes the Vector drawing functionality. It is not necessary when using the CoreVector library. It can be used along with the CoreBasic library if you need to use both Vector and non-Vector charts in the same page.
