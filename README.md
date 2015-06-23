## Welcome to jChartFX ##

- Official Website: [http://www.jChartFX.com](http://www.jChartFX.com "jChartFX Website")
- Official Download:[ http://www.jChartFX.com/download]( http://www.jChartFX.com/download "Download")
- Licensing: [http://www.jChartFX.com/eula/](http://www.jChartFX.com/eula/ "Licensing")
- Support: [http://support.softwarefx.com/jChartFX](http://support.softwarefx.com/jChartFX "Support")

## Installation ##
- Install with [Bower](http://bower.io "Bower"): `bower install jchartfx`
- Install with [npm](https://www.npmjs.com/~softwarefx "npm"): ` npm install jchartfx` *[Node.js support is coming soon]*
- Install with [NuGet](http://www.nuget.org/packages/jChartFX/ "NuGet"): `Install-Package jChartFX` 



### Reporting issues ###

For feature requests, tech support and general discussion, don't use Git Hub Issues. 

You can use our community forums help, a resource that gives you access to community generated content related to our products, as well as allows users to post common questions and answers to particular issues.

Please access our community driven forums here: 
[http://community.jchartfx.com/forums](http://community.jchartfx.com/forums "Community")

### Why jChartFX? ###


**jChartFX** was tailored specifically to enhance your data visualization capabilities and needs. The following features make **jChartFX** the most compelling charting tool for JavaScript/HTML5 developers:

### Free is Free ! ###

jChartFX is available to HTML5, jQuery and JavaScript developers absolutely FREE. You can integrate and deploy jChartFX even in your commercial web sites at no cost.

### Works Everywhere ###

Ensure your charts work in any browser and any device! jChartFX provides true client-side charts that have been fully tested with these popular HTML5 compliant browsers: Intent Explorer, Firefox, Safari, and Chrome.

### Cutting Edge Technology Meets Experience ###

Over 21 years of experience and 65,000+ customers confirm it!

jChartFX leverages the award-winning [Chart FX](http://softwarefx.com/products/chartfx/ "Chart FX") foundation to provide a fully featured data visualization tool you can trust for your mission critical business applications.

### Naturally Adaptive ###

We have leveraged the power of jQuery to allow jChartFX to accommodate to your preferred themes without a single line of code. jChartFX reads and interprets jQuery themes and CSS files to quickly adapt to your page layout and designs.

### Easy Programmability and Built for Speed ###

What makes jChartFX superior is that is easy to learn and has outstanding performance thanks to its lightweight framework that is easy to integrate to your existing HTML pages. With an outstanding and clearly laid out API, jChartFX lets you customize virtually any chart element.



## Getting Started with jChartFX ##



Using jChartFX is as easy as downloading the free libraries and referencing them from your html page like you would do with any other JavaScript framework. Simply add an html element (typically a div) where jChartFX will render the content. Then use JavaScript or jQuery to take advantage of the comprehensive and powerful API in order to configure and customize the chart.

This section provides detailed information to help you set up your first pages with jChartFX.

### The jChartFX Libraries ###

You can obtain current and past versions of jChartFX for free from: [jChartFX Download Site](http://softwarefx.com/products/chartfx/ "jChartFX Download Libraries") where you will obtain a zip file containing several .js script (along with a variety of css style sheet files) files.

You can also install the jChartFX package from: 

- Bower
- npm *[Node.js support is coming soon]*
- NuGet  

The jChartFX libraries have been split into several .js files to provide granular control over what you add as a reference in your html thus allowing you to limit what the browser downloads when the page is accessed.

In most cases, the name of the .js will be enough to discern the part of the jChartFX engine they contain. Some of those .js files are required for every page hosting a chart:

- *jchartfx.system.js*: Contains internal jChartFX classes. This library is always required.
- *jchartFX.coreBasic.js*: The lightweight version of the core jChartFX library. Use this library instead of coreVector when a lighter download is favored over more attractive visuals.
- *jchartFX.coreVector.js*: The visually enhanced version of the core jChartFX library. Use this library instead of coreBasic when more complex and attractive visuals are desired.

*CoreVector* and *CoreBasic* are mutually exclusive. Choose one of the two depending on your needs.

In addition to the core libraries there are .js files that provide additional functionality to the chart:

- *jchartfx.advanced.js*: Provides advanced chart features such as Axis Sections, Conditional Attributes and the DataGrid.
- *jchartfx.animation.js*: Provides animation features. Use this library when enabling animated effects.
- *jchartfx.annotation.js*: Provides access to the annotation extension. Use this library when you need to overlay drawing objects such as balloons, arrows, floating texts and images.
- *jchartfx.coreVector3d.js*: Adds 3D rendering capabilities to the coreVector library. Requires coreVector.
- *jchartfx.data.js*: Provides advanced data features such as the CrossTab data transform.
- *jchartfx.ui.js*: Provides compatibility with jQueryUI Syntax
- *jchartfx.userInterface.js*: Contains all the code required by the menu interface, as well as some other user interface elements.
*Note*: You also need to include the following files to your page to enable jChartFX Menu: *jchartfx.userinterface.css*
- *jchartfx.vector.js*: This includes the Vector drawing functionality. It is not necessary when using the CoreVector library. It can be used along with the CoreBasic library if you want to be able to use both Vector and non-Vector charts in the same page.

While the core .js files include basic galleries such as bars, lines and pie, jChartFX provides an additional collection of advanced galleries through a set of individual script files:

- *jchartfx.axistrend.js*: Provides access to the AxisTrend gallery add-on that allows to use the X axis as an easy visualizer of trends or changes displayed in another series.
- *jchartfx.bullet.js*: Contains the Bullet gallery
- *jchartfx.density.js*: Contains the Density gallery
- *jchartfx.equalizer.js*: Contains the Equalizer bars gallery
- *jchartfx.funnel.js*: Contains the Funnel gallery
- *jchartfx.gauge.js*: Provides access to the Gauge extension. Use this library when you need to display a single variable using gauges of different types: Radial Gauge, Horizontal Gauge, Vertical Gauge, Trends and Digital Panel. 
- *jchartfx.handdrawn.js*: Provides the HandDrawn extension that allows you to add hand drawn effects to the standard galleries
- *jchartfx.heatmap.js*: Contains the Heatmap gallery
- *jchartfx.highlow.js*: Contains the High-Low gallery
- *jchartfx.highlowclose.js*: Contains the High-Low-Close Financial gallery
- *jchartfx.maps.js*: Provides access to the Maps extension. Use this library when you need to integrate geographic maps with full support of latitude and longitude coordinates
- *jchartfx.overlaybubble.js*: Contains the OverlayBubble gallery
- *jchartfx.pareto.js*: Contains the Pareto Chart gallery
- *jchartfx.pictograph.js*: Contains the PictoGraph Control, the PictoGraph extension and the PictoBar extension
- *jchartfx.pyramid.js*: Contains the Pyramid gallery
- *jchartfx.radar.js*: Contains the Radar gallery
- *jchartfx.rose.js*: Contains the Rose gallery
- *jchartfx.statistical.js*: Contains the Statistical extension
- *jchartfx.sparkline.js*: Contains the Sparkline gallery
- *jchartfx.surface.js*: Contains the Surface gallery
- *jchartfx.treemap.js*: Contains the Treemap Gallery

For additional information on the available galleries, refer to the Gallery Types section of the [Programmer's Guide](http://support.softwarefx.com/jChartFX/pg "Programmer's Guide").

### Visual Studio IntelliSense ###

jChartFX provides JavaScript IntelliSense auto-completion support if you use Microsoft Visual Studio as your IDE. To enable this feature, include *jchartfx.visualstudio.js* library in your project and add a reference directive in your JavaScript code as an XML comment:


    /// <reference path="Scripts/jchartfx.visualstudio.js"/>
    // your JavaScript Code

### Tern code editor plugin ###

There is currently Tern support for different editors, like for example:

- Emacs
- Vim
- Sublime Text
- Light Table
- Eclipse

To enable Autocompletion, argument hints and other editing features, you need to download and install the Tern package (search for instructions on how to install the Tern plugin for your editor) and then include *jchartfx.tern.json* as an additional JSON type definition in your preferred editor.

For example, when using Sublime Text(2/3), make sure to copy jchartfx.tern.json file in the tern pakage defs folder: 


    \..\Sublime Text 2\Packages\tern_for_sublime\node_modules\tern\defs\jchartfx.tern.json

### TypeScript code-analysis ###

When working with TypeScript code, jChartFX provides auto-completion and error highlighting support around the TypeScript language. You can use the editor/IDE of your choice where TypeScript is supported.

To enable this feature, include *jchartfx.d.ts* file in your project and add a reference directive in your TypeScript code as an XML comment:

    /// <reference path="include/jchartfx.d.ts"/>
    // your TypeScript Code

### User Interface ###
If you want to use the jChartFX UI Menu, you must include the *jchartfx.userinterface.css* file along with *jchartfx.userinterface.js*. Please read the online documentation for any additional licensing restriction that may apply to the UI feature.


### jChartFX Maps ###

A complete set of hundreds of maps compatible with the jChartFX Maps extension is available for download at the Software FX Maps Marketplace: [http://maps.softwarefx.com](http://maps.softwarefx.com "Maps MarketPlace")

Most maps are available in high and low resolutions, so you can select the appropriate size and quality you need depending on your requirements.


## Setting up your page to use jChartFX##

Before using jChartFX you need to copy the necessary jChartFX libraries to a location that the browser will be able to access. For example, within a js folder on your web site, copy all the jChartFX libraries to that directory. Then you can reference any library by adding a `<script>` tag to the `<head>` section of your page:


**JavaScript**
<pre><code>&lt;head&gt;    
    &lt;link rel="stylesheet" type="text/css" href="styles/attributes/jchartfx.attributes.css"/&gt;
    &lt;link rel="stylesheet" type="text/css" href="styles/palettes/jchartfx.palette.css"/&gt;
    &lt;script type="text/javascript" src="js/jchartfx.system.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/jchartfx.coreVector.js"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>


Afterwards, you need to define a `DIV` html element to host the chart in your page’s body. Ultimately the `DIV` will provide the location and dimensions of the chart:



**JavaScript**


<pre><code>&lt;div id="ChartDiv" style="width:600px;height:400px;display:inline-block"&gt;&lt;/div&gt;</code></pre>



Since we want the chart to be generated when the page loads, we need to assign a function to handle the `onload` event. There are many ways of doing this. If you are not using a particular framework you can simply use the `onload` attribute of the page’s `Body` element:



**JavaScript**


<pre><code>&lt;body onload="loadChart()"&gt;</code></pre>



If you are working with the JQuery framework, you can use the `ready` event of the document instead:



**JavaScript**


<pre><code>
$(document).ready(function($){

        …
        
}
</code></pre>



Then we need to make sure we declare a chart variable outside the function we call on `load`. That way the chart object will be accessible after the initial rendering to allow for further interaction later in the page’s life . Inside the function, we create an instance of the Chart object and use the API to configure it.



**JavaScript**


<pre><code>
&lt;script type="text/javascript" language="javascript"&gt;
     var chart1;        
     function loadChart()
     {        
          chart1 = new cfx.Chart();
          chart1.setGallery(Gallery.Pie);
          var divHolder = document.getElementById('ChartDiv');
          chart1.create(divHolder);
     }
&lt;/script&gt;</code></pre>




The call to the chart’s `Create` method is very important since it triggers the chart rendering to the specified `DIV`. Alternatively, instead of passing a `DIV` object to the `create` method, you can simply pass the target div’s name, eliminating the need of the `getElementById` call:



**JavaScript**


<pre><code>
chart1 = new cfx.Chart();
chart1.setGallery(Gallery.Pie);
chart1.create('ChartDiv');</code></pre>




In the case of JQuery users, we simply call `chart()` on the target `div`:



**JavaScript**


<pre><code>
&lt;script language="javascript"&gt;
      $(document).ready(function ($) {
            $("div", ".ChartDiv1").chart({
                        gallery:cfx.Gallery.Pie
            });
      });
&lt;/script&gt;</code></pre>




### Configuring your chart ###

By default, jChartFX charts will show a basic chart that uses a default gallery type and look to display generic random data. Thanks to the extensive API, you will have a great degree of control over the chart and the way it displays your data. You can manipulate the different chart elements with the help of the get and set methods for the different chart properties.

At its most basic, the main elements of the chart are the following:

- *Gallery*: The type of chart you want to use (Pie, Bars, Lines, etc.). You can combine some of the galleries by assigning them individually to each series
- *Axes*: Allow you to define the behavior or both vertical and horizontal numerical scales for the chart. While Axes are calculated automatically by default based on the data, you may need to manipulate some of their properties to match your requirements.
- *Series and Points*: The data that the chart will display.

The following code snippet sets a different gallery type for each series and limits the range of the Y Axis’ scale:



**JavaScript**


<pre><code>
function loadChart()
{        
      chart1 = new cfx.Chart();
      chart1.getData().setSeries(2);
      chart1.getAxisY().setMin(500);
      chart1.getAxisY().setMax(2000);
      var series1 = chart1.getSeries().getItem(0);
      var series2 = chart1.getSeries().getItem(1);
      series1.setGallery(cfx.Gallery.Lines);
      series2.setGallery(cfx.Gallery.Bar);


      var divHolder = document.getElementById('ChartDiv');
      chart1.create(divHolder);            
}</code></pre>




Please consult the jChartFX API documentation for extensive details and samples on each of the charts elements.

### Passing Data to the Chart ###

While there are several ways to populate a chart with data, the most convenient may be to pass an array of JSON objects. The following code defines a JSON array and assigns it to the chart through the setDataSource method:



**JavaScript**


<pre><code>
var data = [
{ "Month": "Jan", "Bikes": 1800, "Parts": 1300 },
{ "Month": "Feb", "Bikes": 1760, "Parts": 900 },
{ "Month": "Mar", "Bikes": 1740, "Parts": 970 },
{ "Month": "Apr", "Bikes": 1750, "Parts": 1010},
{ "Month": "May", "Bikes": 1810, "Parts": 1070 },
{ "Month": "Jun", "Bikes": 1920, "Parts": 1180 }
];
chart1.setDataSource(data);</code></pre>




Refer to the "Passing Data" section of the programmer’s guide for additional information on populating your charts.

### Styling the Chart ###

While all visual elements of the chart (series colors, fonts, backgrounds, line properties, etc.) can be manipulated through the API, jChartFX allows you to use Style Sheets to define the look. The use of Style sheets is recommended since it separates the logic from the styling and is consistent with web development paradigms.

The jChartFX download includes a sample CSS file that provides guidance on how to configure your own CSS files to modify the base look of the chart.

**CSS**
<pre><code>
…
.jchartfx .AxisX_Minor {
      stroke: #DBDBD9;
}

.jchartfx .AxisX_Interlaced {
      fill: #ECEBE8;
}

.jchartfx .AxisX_Line {
      stroke: #DBDBD9;
      stroke-width: 2;
}

.jchartfx .PointLabel {
      fill: #666666;
}
…</code></pre>




Additionally, jChartFX has built-in support for [ThemeRoller](http://jqueryui.com/themeroller/ "ThemeRoller"), allowing you to seamlessly integrate a chart with any page using styled [JQuery UI](http://jqueryui.com/ "jQuery UI") controls.


### jChartFX Styles and Motifs ###

jChartFX includes a series of CSS files that allow you to easily customize any of the controls through style sheets. More than 60 different looks and color styles are available. There is a pair of files for each of the different looks and styles:

- *Palette*: the jchartfx.palette.<stylename>.js file contains all the color features available.

- *Attributes*: the jchartfx.attributes.<stylename>.js file contains the rest of the features used in configuration of jChartFX that are not color related, such as fonts, stroke-width, etc.

The reason for this separation is to allow combining any of the styles and motifs with any of the color palettes, which provides more than 600 possible combinations.

In addition to the attributes and palette CSS files, jChartFX includes a series of .js Motif files, available in the motif sub folder. 

A motif allows to provide a complete different look to a jChartFX dashboard without the need to code the aesthetics for any of the controls. 

To use a motif simply include it in your page, after you have included jchartfx.system.js. 

When you include a motif, you should also include its corresponding attributes and palette CSS files. 

For example, if you include **jchartfx.motif.hook.js**, you should also include **jchartfx.attributes.hook.css** and **jchartfx.palette.hook.css**. However, you can use any of the other palette files for a different color combination, although you you should still use the attribute css file that matches the motif you are using.

<pre><code>&lt;link rel="stylesheet" type="text/css" href="styles/attributes/jchartfx.attributes.hook.css"/&gt;
&lt;link rel="stylesheet" type="text/css" href="styles/palettes/jchartfx.palette.hook.css"/&gt;
&lt;script type="text/javascript" src="jchartfx.motif.hook.js"&gt;&lt;/script&gt;</code></pre>

The Motifs that are currently included with jChartFX are:

- jchartfx.motif.aurora.js
- jchartfx.motif.blinds.js
- jchartfx.motif.block.js
- jchartfx.motif.face.js
- jchartfx.motif.glow.js
- jchartfx.motif.handdrawn.js
- jchartfx.motif.healthy.js
- jchartfx.motif.hook.js
- jchartfx.motif.jchartfx.js
- jchartfx.motif.js
- jchartfx.motif.lizard.js
- jchartfx.motif.material.js
- jchartfx.motif.metal.js
- jchartfx.motif.metro.js
- jchartfx.motif.relief.js
- jchartfx.motif.semantic.js
- jchartfx.motif.topbar.js
- jchartfx.motif.tree.js
- jchartfx.motif.vibrant.js
- jchartfx.motif.whitespace.js
- jchartfx.motif.wireframe.js

You can see an interactive demo of these motifs at [www.jchartfx.com/motifs](http://www.jchartfx.com/motifs "Motifs").

### Full Chart Sample ###

The code below compiles the snippets provided in this section into a fully functional page with a chart:



**JavaScript**


<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" type="text/css" href="styles/attributes/jchartfx.attributes.css"/&gt;
    &lt;link rel="stylesheet" type="text/css" href="styles/palettes/jchartfx.palette.css"/&gt;
    &lt;link rel="stylesheet" type="text/css" href="styles/jchartfx.userInterface.css"/&gt;
    &lt;script type="text/javascript" src="js/jchartfx.system.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/jchartfx.coreVector.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/jchartfx.advanced.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/jchartfx.userInterface.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="js/motifs/jchartfx.motif.js"&gt;&lt;/script&gt;      
&lt;/head&gt;
&lt;body onload="loadChart()"&gt;
&lt;div id="ChartDiv" style="width:600px;height:400px"&gt;&lt;/div&gt;
&lt;script type="text/javascript" language="javascript"&gt;
    var chart1;

    function loadChart()
      {        
           chart1 = new cfx.Chart();
            chart1.getData().setSeries(2);
            chart1.getAxisY().setMin(500);
            chart1.getAxisY().setMax(2000);
            var series1 = chart1.getSeries().getItem(0);
            var series2 = chart1.getSeries().getItem(1);
            series1.setGallery(cfx.Gallery.Lines);
            series2.setGallery(cfx.Gallery.Bar);
            var data = [
            { "Month": "Jan", "Bikes": 1800, "Parts": 1300 },
            { "Month": "Feb", "Bikes": 1760, "Parts": 900 },
            { "Month": "Mar", "Bikes": 1740, "Parts": 970 },
            { "Month": "Apr", "Bikes": 1750, "Parts": 1010},
            { "Month": "May", "Bikes": 1810, "Parts": 1070 },
            { "Month": "Jun", "Bikes": 1920, "Parts": 1180 }
            ];
            chart1.setDataSource(data);
            var divHolder = document.getElementById('ChartDiv');
        chart1.create(divHolder);            
      }

&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
