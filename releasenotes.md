## jChartFX Release Notes ##


**Bug Fixes**

- Tooltip mismatch after Series reordering
- Tooltip offset when html body tag has a style position:relative
- Maps Tooltips data values not changing when hovering from shape to shape
- Interpolation issue when min = max 
- Support CSS class .GaugeMarker
- Crosstab Axes Date Format
- Crosstab RowHeading Datafield sorting
- Crosstab ColumnHeading Partial Dates
- Motifs coloring issues when using different palettes

**New Features v7.4**

- Annotation Tooltips
- PictoGraph control. Available as a standalone gauges control and also as a chart extension (PictoGraph and PictoBar)
- Improved Crosstab API and new sort feature (by columns/rows).
- Customizable Color For Inside Labels: Customize (if using CSS styles, check InsideLabel class) the text color for an inside label in non-connected gallery types (e.g.: Bar, Pyramid, Pie, Funnel and Bubble) 
  e.g.: Data point labels text color can be customized to show a lighter/darker color to improve readability.
- Auto-Computed Total value as a Point Label in stacked series. 
- Auto-Computed Total value on Tooltips for stacked series.
- Auto Marker Size: Point marker size is automatically adjusted to avoid collisions. 
- Default Line Alignment to Center, for Stacked Bars and Visible Total value.
- AlternateTag setting in Conditional Attributes, to allow CSS interpolation.
- Fast Line/Curve/Area for when the number of data points exceeds the available pixels on the plot area.
- Tern support: Auto completion and Intelligent JavaScript editing. (http://ternjs.net) 
- TypeScript support: Autocompletion and error highlighting when coding in TypeScript.

*Enhanced Tooltip Features*

- 	3 different Tooltip Trigger modes:
 	1. Marker
	2. MarkerThenPlot
	3. MarkerThenPlot
- 	Highlighting Markers: Show markers with border for non-visible markers (non-connected gallery types) 
- 			      Show markers with larger size (connected gallery types) 
- 	ToolTips with vertical line
- 	Customizable Tooltips with vertical line settings: width, length, color, X, Y, HorzAlign, VertAlign
- 	2 different customizable templates: Border Template and Content Template + Smart Defaults 	
- 	Bar charts shows tooltips on top for both Marker and MarkerThenPlot trigger modes

*Maps Fetaures*

- X/Y to Lat/Long: LocationToPixel and PixelToLocation events
- 	Annotation ToolTips
- 	Click Annotation vs Shape event handler
- 	Bubble Gallery Map Sizing new API: Min/Max/MinPercent

*New Motifs*

- Blinds
- 	Block	
- 	Face
- 	Material
- 	Metal
- 	Relief
- 	Semantic
- 	Tree	
- 	Wireframe

*Disclaimer*: information contained in this document is subject to change