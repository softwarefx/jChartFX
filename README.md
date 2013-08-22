## Welcome to jChartFX ##

- *Official website*: http://www.jChartFX.com
- *Official download*: http://www.jChartFX.com/download
- *Licensing*: http://www.jChartFX.com/eula/
- *Support*: http://support.softwarefx.com/jChartFX


### Reporting issues ###

For feature requests, tech support and general discussion, don't use GitHub Issues. 

You can use our community forums help, a resource that gives you access to community generated content related to our products, as well as allows users to post common questions and answers to particular issues.

Please access our community driven forums here: 
[http://community.jchartfx.com/forums](http://community.jchartfx.com/forums "Community")

### Why jChartFX? ###


**jChartFX** was tailored specifically to enhance your data visualization capabilities and needs. The following features make **jChartFX** the most compelling charting tool for Javascript/HTML5 developers:

### Free is Free !###

jChartFX is available to HTML5, jQuery and javascript developers absolutely FREE. You can integrate and deploy jChartFX even in your commercial web sites at no cost.

### Works Everywhere ###

Ensure your charts work in any browser and any device! jChartFX provides true client-side charts that have been fully tested with these popular HTML5 compliant browsers: Intent Explorer, Firefox, Safari, and Chrome.

### Cutting Edge Technology Meets Experience ###

Over 21 years of experience and 65,000+ customers confirm it!

jChartFX leverages the award-winning jChartFX foundation to provide a fully featured data visualization tool you can trust for your mission critical business applications.

### Naturally Adaptive ###

We have leveraged the power of jQuery to allow jChartFX to accommodate to your preferred themes without a single line of code. jChartFX reads and interprets jQuery themes and CSS files to quickly adapt to your page layout and designs.

### Easy Programmability and Built for Speed ###

What makes jChartFX superior is that is easy to learn and has outstanding performance thanks to its lightweight framework that is easy to integrate to your existing HTML pages. With an outstanding and clearly laid out API, jChartFX lets you customize virtually any chart element.



## Getting Started with jChartFX ##



Using jChartFX is as easy as downloading the free libraries and referencing them from your html page like you would do with any other Javascript framework. Simply add an html element (typically a div) where jChartFX will render the content. Then use JavaScript or jQuery to take advantage of the comprehensive and powerful API in order to configure and customize the chart.

This section provides detailed information to help you set up your first pages with jChartFX.

### The jChartFX Libraries ###

You can obtain current and past versions of jChartFX for free from: [jChartFX Libraries](http://jchartfx.com/download)

You will obtain a zip file containing several .js script files. The jChartFX libraries have been split into several .js files to provide granular control over what you add as a reference in your html thus allowing you to limit what the browser downloads when the page is accessed.

In most cases, the name of the .js will be enough to discern the part of the jChartFX engine they contain. Some of those .js files are required for every page hosting a chart:

- *jchartfx.system.js*: Contains internal jChartFX classes. This library is always required.
- *jchartFX.coreBasic.js*: The lightweight version of the core jChartFX library. Use this library instead of coreVector when a lighter download is favored over more attractive visuals.
- *jchartFX.coreVector.js*: The visually enhanced version of the core jChartFX library. Use this library instead of coreBasic when more complex and attractive visuals are desired.

*CoreVector* and *CoreBasic* are mutually exclusive. Choose one of the two depending on your needs.

In addition to the core libraries there are .js files that provide additional functionality to the chart:

- *jchartfx.advanced.js*: Provides advanced chart features such as Axis Sections, Conditional Attributes and the DataGrid.
- *jchartfx.annotation.js*: Provides access to the annotation extension. Use this library when you need to overlay drawing objects such as balloons, arrows, floating texts and images.
- *jchartfx.coreVector3d.js*: Adds 3D rendering capabilities to the coreVector library. Requires coreVector.
- *jchartfx.data.js*: Provides advanced data features such as the CrossTab data transform.
- *jchartfx.ui.js*: Provides compatibility with jQuery UI Syntax
- *jchartfx.vector.js*: This includes the Vector drawing functionality. It is not necessary when using the CoreVector library. It can be used along with the CoreBasic library if you want to be able to use both Vector and non-Vector charts in the same page.

While the core .js files include basic galleries such as bars, lines and pie, jChartFX provides an additional collection of advanced galleries through a set of individual script files:

- *jchartfx.density.js*: Contains the Density gallery
- *jchartfx.equalizer.js*: Contains the Equalizer bars gallery
- *jchartfx.handdrawn.js*: Provides the HandDrawn extension that allows you to add hand drawn effects to the standard galleries
- *jchartfx.heatmap.js*: Contains the Heatmap gallery
- *jchartfx.highlow.js*: Contains the High-Low gallery
- *jchartfx.highlowclose.js*: Contains the High-Low-Close gallery
- *jchartfx.overlaybubble.js*: Contains the OverlayBubble gallery
- *jchartfx.pareto.js*: Contains the Pareto Chart gallery
- *jchartfx.pyramid.js*: Contains the Pyramid gallery
- *jchartfx.radar.js*: Contains the Radar gallery
- *jchartfx.surface.js*: Contains the Surface gallery
- *jchartfx.treemap.js*: Contains the Treemap Gallery

For additional information on the available galleries, refer to the Gallery Types section of the Programmer's Guide.

### Setting up your page to use jChartFX###

Before using jChartFX you need to copy the necessary jChartFX libraries to a location that the browser will be able to access. For example, you could create a folder on your web site named jChartFX and simply copy all the jChartFX libraries to that directory. Then you can reference any library by adding a `<script>` tag to the `<head>` section of your page:


**JavaScript**
<pre><code>&lt;head&gt;
    &lt;link rel="stylesheet" type="text/css" href="chartfx.css" /&gt;
    &lt;script type="text/javascript" src="jChartFX/jchartfx.system.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="jChartFX/jchartfx.coreVector.js"&gt;&lt;/script&gt;
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




###Configuring your chart###

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




Additionally, jChartFX has built-in support for ThemeRoller, allowing you to seamlessly integrate a chart with any page using styled JQueryUI controls.

More information can be found in the Styling section of this guide.

###Full Chart Sample###

The code below compiles the snippets provided in this section into a fully functional page with a chart:



**JavaScript**


<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
   &lt;link rel="stylesheet" type="text/css" href="chartfx.css" /&gt;
   &lt;script type="text/javascript" src="jchartfx.system.js"&gt;&lt;/script&gt;
   &lt;script type="text/javascript" src="jchartfx.coreBasic.js"&gt;&lt;/script&gt;      
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
