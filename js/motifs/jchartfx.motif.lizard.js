(function(){var e=window.cfx,a=window.sfx;e.motif="lizard";var h=a["gauge.templates"];if(void 0!=h){h.lizardDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><C><B F="{B F}"/><g><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><B F="#33222222"><TextBlock M="8,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="9" FontWeight="Bold"/></B><B g.R="1" F="{B F}"><C N="targetChart" M="8,16,8,8"/></B></g></C></T>';
h.lizardRadialDashBorder="<T/>";h.lizardRadialIndicator="NeedleRegularDrop";h.lizardRadialCap='<T><E S="#F19024" ST="2" F="{N}"/></T>';h.lizardRadialGlare="<T/>";h.lizardLinearDashBorder="<T/>";h.lizardLinearGlare="<T/>";h.lizardFillerHorizontal="LinearFillerSimple";h.lizardFillerVertical=h.lizardFillerHorizontal;h.lizardRadialBar='<T><C M="0"><P D="{B G}" F="{B F}"/><P D="{B GeometryOutside}" S="#66000000"/><P D="{B GeometryInside}" S="#22FFFFFF"/><P D="{B GeometryStart}" S="#22FFFFFF"/><P D="{B GeometryEnd}" S="#22FFFFFF"/></C></T>';
h.lizardLinearBar='<T><C M="0"><B F="{B F}" S="{N}" CR="2"/><B F="{N}" ST="1" S="#66000000" StartCorner="3" Segments="2" CR="2"/><B F="{N}" ST="1" S="#22DDDDDD" StartCorner="1" Segments="2" CR="2"/></C></T>';h.lizardRepeaterRadial='<T><T.R><s K="ratio">0.125</s></T.R><B F="{B F}" S="{B FillS}"/></T>';h.lizardMarkerVertical="MarkerTriangle";h.lizardMarkerHorizontal="MarkerTriangleInverted";h.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">10</Th></T.R><C Padding="{B Padding}"><B S="{B S}" ST="2.5" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="6,6,6,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,2,0,6" V="{B TitleVisible}"/></DockPanel></B></C></T>';
h.lizardPictoGraph='<T><T.R><s K="ratio">0.40540</s><s K="vertSpacingHive">-0.6</s><s K="horzSpacingHive">0.4</s></T.R><V VW="15" VH="37"><g><P S="{B S}" F="{B F}" Reuse="true" D="M4.5,0.5B4.5,0.5,7,7,0,360M15.481,11.688C15.382,9.912,13.925,8.5,12.125,8.5H11.5H4.5H3.875C2.011,8.5,0.5,10.011,0.5,11.875v0.031V12.5v7.594C0.5,20.87,1.13,21.5,1.906,21.5h0.188C2.87,21.5,3.5,20.87,3.5,20.094V12.5h1v9.5V22.5v13.5C4.5,36.828,5.172,37.5,6,37.5S7.5,36.828,7.5,36V22.5h1v13.5C8.5,36.828,9.172,37.5,10,37.5s1.5-0.672,1.5-1.5V22.5v-0.5V12.5h1v7.719C12.5,20.927,13.073,21.5,13.781,21.5h0.438C14.927,21.5,15.5,20.927,15.5,20.219V12.5v-0.625v-0.094C15.5,11.748,15.483,11.721,15.481,11.688z" ></P></g></V></T>';
var n=new e.gauge.Palette;n.setColors(["#2A2A2A","#2A2A2A","#2A2A2A","#2A2A2A","#707275","#707275","#707275","#707275","#606060",null,"#D3D4D4","#1A1C1D","#101010",null,"#AF432D","#A1412D",null,"#B6722D","#A86A2C",null,"#76AB05","#6E9E08",null,"#D3D4D4","#D3D4D4","#D3D4D4","#D3D4D4","#808080","#D3D4D4","#AF432D","#B6722D","#76AB05","#333333","#FFFFFF","#333333","#444547","#707275","#535456","#258DC8","#4EB42E","#F15619","#80699B","#77AB14","#1C6A96","#3B8723","#B54113","#604F75","#5A810F"]);e.gauge.Palette.setDefaultPalette(n)}a=
a["vector.templates"];void 0!=a&&(a["DashboardTitle.fill"]="0,#8B8B8B",a["DashboardTitle.font-family"]="1,Helvetica, Arial, sans-serif",a["AxisY_Text.fill"]="0,#606060",a["Border.fill"]="0,#2A2A2A",a.lizardBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><Th K="uiMargin">4,4,0,0</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><C><B F="{B F}"/><g><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><B F="#33222222"><DockPanel Orientation="Horizontal"><r V="{B UIVisible}" W="{B UISize}" M="0,0,4,0" H="1" F="{N}" S="{N}"/><TextBlock M="8,0" Text="{B Title}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="9" FontWeight="Bold" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}"/></DockPanel></B><B g.R="1" F="{N}"><C N="targetChart" M="8"/></B></g></C></T>',
a.lizardBar="BarBasic",a.lizardGantt="GanttBasic",a.lizardEqualizer='<T><B F="{B F}"/></T>',a.lizardArea="AreaBasic",a.lizardCurveArea="CurveAreaBasic",a.lizardLine="LineBasic",a.lizardCurve="CurveBasic",a.lizardPie='<T><T.R><T K="cfxRay"><Line X1="{B X1}" Y1="{B Y1}" X2="{B X2}" Y2="{B Y2}" S="{Binding Class=Border.fill}" ST="2"/></T></T.R><P D="{B G}" F="{B F}" S="{B S}"/></T>',a.lizardDoughnut=a.lizardPie,a.lizardBubble="BubbleBasic",a.lizardTreeMap='<T><C M="1"><B F="{B F}" S="{B S}"/></C></T>',
a.lizardHeatMap='<T><B M="0.5" F="{B F}"  /></T>',a.lizardFunnel='<T><Po P="{B P}" F="{B F}" S="{B S}"/></T>',a.lizardPyramid=a.lizardFunnel,a.lizardSparklineLine=a.lizardLine,a.lizardSparklineBar=a.lizardBar,a.lizardSparklineArea=a.lizardArea,a.lizardHighLow='<T><T.R><T K="lineTemplate"><C><Pl P="{B P}" S="{B S}" ST="{B ST}"/></C></T></T.R><Po P="{B P}" F="{B F}"/></T>',a.lizardBullet='<T><T.R><T K="templateLine"><C><B C.Left="{B X1}" C.Top="{B Y1}" W="4" H="{B H}" S="{Binding Class=Border.fill}" ST="2" ><B.F><SolidBrush C="{B FC}"/></B.F></B></C></T></T.R><C><r F="{B F}" S="{B S}"/></C></T>',
a.lizardMarker1='<T><C><r F="{B F}"/><r S="{Binding Class=Border.fill}" ST="2"/></C></T>',a.lizardMarker2='<T><C><E F="{B F}"/><E S="{Binding Class=Border.fill}" ST="2"/></C></T>',a.lizardMarker3='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M12,1L24,22L0,22L12,1" F="{B F}"/><P D="M12,1L24,22L0,22L12,1" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',a.lizardMarker4='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,12L18,18L12,24L6,18L0,12L6,6L12,0L18,6L24,12" F="{B F}"/><P D="M24,12L18,18L12,24L6,18L0,12L6,6L12,0L18,6L24,12" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',
a.lizardMarker5='<T><C><E F="{B F}"/><E S="{Binding Class=Border.fill}" ST="2"/><E><E.F><R><G C="#55FFFFFF" O="0"/><G C="#55333333" O="1"/></R></E.F></E></C></T>',a.lizardMarker6='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,9L0,9L0,15L24,15L24,9" F="{B F}"/><P D="M24,9L0,9L0,15L24,15L24,9" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',a.lizardMarker7='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M15,24L15,0L9,0L9,24L15,24" F="{B F}"/><P D="M15,24L15,0L9,0L9,24L15,24" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',
a.lizardMarker8='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,9L15,9L15,0L9,0L9,9L0,9L0,15L9,15L9,24L15,24L15,15L24,15L24,9" F="{B F}"/><P D="M24,9L15,9L15,0L9,0L9,9L0,9L0,15L9,15L9,24L15,24L15,15L24,15L24,9" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',a.lizardMarker9='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M12,24L24,0L0,0L12,24" F="{B F}"/><P D="M12,24L24,0L0,0L12,24" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',a.lizardMarker10='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M20.485,17.657L14.828,12l5.657-5.657c0.781-0.781,0.781-2.047,0-2.829c-0.781-0.781-2.048-0.781-2.828,0L12,9.172L6.343,3.515c-0.78-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.048,0,2.829L9.172,12l-5.657,5.657c-0.781,0.78-0.781,2.047,0,2.828s2.048,0.781,2.828,0L12,14.828l5.656,5.657c0.781,0.781,2.048,0.781,2.829,0C21.266,19.704,21.267,18.438,20.485,17.657z" F="{B F}"/><P D="M20.485,17.657L14.828,12l5.657-5.657c0.781-0.781,0.781-2.047,0-2.829c-0.781-0.781-2.048-0.781-2.828,0L12,9.172L6.343,3.515c-0.78-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.048,0,2.829L9.172,12l-5.657,5.657c-0.781,0.78-0.781,2.047,0,2.828s2.048,0.781,2.828,0L12,14.828l5.656,5.657c0.781,0.781,2.048,0.781,2.829,0C21.266,19.704,21.267,18.438,20.485,17.657z" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',
a.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">10</Th></T.R><C Padding="{B Padding}"><B S="{Binding Class=Border.fill}" ST="2.5" F="{N}" A="1" CP="0.4" CR="12"><B S="{B ItemFillS}" ST="2.5" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="6,6,6,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,2,0,6" V="{B TitleVisible}"/></DockPanel></B></B></C></T>',
a.TipContentDefault='<T xmlns:x="a"><DockPanel Orientation="Horizontal" M="3,2,3,1"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}" M="0,0,12,0"/><S P="{B CurrSeries}"><TextBlock Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right" S.V="1"/><TextBlock Text="{B Value}" HorizontalAlignment="Right"/></S></DockPanel></T>',a.TipContentPercent='<T xmlns:x="a"><DockPanel Orientation="Vertical" M="3,0,3,3"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}"/><DockPanel Orientation="Horizontal"><TextBlock Text="{B Macro%v out of %t}"/><TextBlock M="6,0,0,0" Text="{B Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right"/></DockPanel></DockPanel></T>',
a.TipContentDefaultX='<T xmlns:x="a"><g M="3,0,3,3"><g.CD><CD W="Auto"/><CD W="Auto"/></g.CD><g.RD><RD H="Auto"/><RD H="Auto"/></g.RD><TextBlock g.R="0" g.C="0" Text="{B SeriesTX}" Foreground="{B ItemFill}" M="0,0,12,0"/><TextBlock g.R="0" g.C="1" Text="{B ValueX}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="0" Text="{B SeriesTY}" Foreground="{B ItemFill}" M="0,0,12,0"/><TextBlock g.R="1" g.C="1" Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right"/></g></T>',
a.lizardPictoGraph='<T><T.R><s K="ratio">0.40540</s><s K="vertSpacingHive">-0.6</s><s K="horzSpacingHive">0.4</s></T.R><V VW="15" VH="37"><g><P S="{B S}" F="{B F}" Reuse="true" D="M4.5,0.5B4.5,0.5,7,7,0,360M15.481,11.688C15.382,9.912,13.925,8.5,12.125,8.5H11.5H4.5H3.875C2.011,8.5,0.5,10.011,0.5,11.875v0.031V12.5v7.594C0.5,20.87,1.13,21.5,1.906,21.5h0.188C2.87,21.5,3.5,20.87,3.5,20.094V12.5h1v9.5V22.5v13.5C4.5,36.828,5.172,37.5,6,37.5S7.5,36.828,7.5,36V22.5h1v13.5C8.5,36.828,9.172,37.5,10,37.5s1.5-0.672,1.5-1.5V22.5v-0.5V12.5h1v7.719C12.5,20.927,13.073,21.5,13.781,21.5h0.438C14.927,21.5,15.5,20.927,15.5,20.219V12.5v-0.625v-0.094C15.5,11.748,15.483,11.721,15.481,11.688z" ></P></g></V></T>',
a=new e.Palette,a.setColors("#258DC8 #4EB42E #F15619 #80699B #77AB14 #B5712E #AE432E #B8B300 #0D233A #BD1700 #FF9800 #965994 #910000 #8BBC21 #2F7ED8 #BB7C00 #3DEBFF #82FF4C #5A2009 #30273A #C6FF21 #FFBC4C #FF6F4C #FFFF00 #276CB2 #FF2600 #603900 #FA94F6 #F10000 #E7FF37 #122F51 #FFCE00 #2A2A2A #F0F0F0 #00000000 #2A2A2A #C0C0C0 #1A1A1A #fc4b35 #ffffff #606060 #606060 #00000000 #6D869F #00000000 #5B5B5B #00000000 #2A2A2A #606060 #1A1A1A #606060 #272727 #8B8B8B #606060 #2A2A2A #333333 #FFFFFF #333333 #606060 #707275 #535456".split(" ")),
e.Chart.setDefaultPalette(a));var f=function(){};e.motifs.lizard=f;f.getStyleInfo=function(c){var a="";void 0!==c&&(c=c[0],void 0!==c&&(a=c[0]));c={isGroup:!1};c.name=a;c.isSingle=!1;c.isBullet=!1;c.sections=[];if(void 0!=a&&(a=a.toUpperCase(),0<=a.indexOf("SINGLE")&&(c.isSingle=!0,c.name=""),0<=a.indexOf("GROUP")&&(c.isGroup=!0,c.name="",c.name=""),0<=a.indexOf("BULLET")&&(c.isBullet=!0,c.name=""),0<=a.indexOf("SECTIONS"))){var b,d;b=a.indexOf("SECTIONS");d=a.indexOf(":",b);0<d&&(b=d,d=a.indexOf("-",
b),a=0<=d?a.substring(b+1,d):a.substring(b+1,a.length),c.sections=a.split(",",100));c.name=""}return c};f.global=function(c){c.setFont("8pt Arial")};f.radial=function(c,a){f.global(c);var b=f.getStyleInfo(a);null!=b.name&&c.setStyle(b.name);var d=c.getMainScale();if("progress"==b.name)d.setThickness(1),d.setPosition(0),d.setStartAngle(180),d.setSweepAngle(180);else{d.setThickness(1);d.setPosition(0);var g=d.getBar();g.setVisible(!0);g.setTemplate(h.lizardRadialBar);g.setThickness(.7);g.setPosition(.15);
d.getCap().setVisible(!1);d.setStartAngle(205);d.setSweepAngle(130);g=c.getMainIndicator();g.setSize(.8);g.setPosition(1);d=d.getTickmarks();d.getMajor().setVisible(!1);d.getMedium().setVisible(!1);d=c.getDefaultAttributes();d.setSectionThickness(.025);d.setSectionPosition(.05);d=new e.gauge.Title;d.setText("");c.getTitles().add(d);d=new e.gauge.Title;d.setDock(e.gauge.DockArea.Top);d.setText("%v");d.setFont("40pt Arial");d.setTag("GaugeTitleLarge");d.setResizeableFont(!1);c.getTitles().add(d)}"repeater"==
b.name&&(b=c.getMainScale(),b.getCap().setVisible(!1),b.getTickmarks().getMajor().setStyle(e.gauge.TickmarkStyle.None),b.getTickmarks().getMedium().setStyle(e.gauge.TickmarkStyle.None),b.setStartAngle(180),b.setSweepAngle(180),b=new e.gauge.Repeater,b.setSize(.4),b.setPosition(.425),b.setPaintOff(!0),c.setMainIndicator(b))};f.linear=function(c,a){f.global(c);var b=c.getMainScale(),d=b.getBar(),g=c.getMainIndicator();d.setVisible(!0);b.setThickness(.6);b.setAlignment(e.StringAlignment.Near);var k=
b.getTickmarks(),l=k.getMajor();l.setSize(.1);l.setStyle(e.gauge.TickmarkStyle.Line);l.setWidth(.025);l.setPosition(.875);k.getMedium().setVisible(!1);d.setTemplate(h.lizardLinearBar);b.setAllowHalves(!1);k=f.getStyleInfo(a);k.isGroup&&(c.getBorder().setTemplate("<T/>"),c.getDashboardBorder().setTemplate("<T/>"));k.isBullet?(b.setThickness(.8),b.setPosition(0),g.setSize(.25),g.setPosition(.475),g.setTitle("Current"),g=new e.gauge.Marker,g.setSize(.4),g.setPosition(.6),g.setTitle("Target"),g.setTemplate("MarkerThinRectangle"),
b.getIndicators().add(g),c.getDefaultAttributes().setSectionThickness(d.getThickness()),c.getDefaultAttributes().setSectionPosition(d.getPosition())):(b=new e.gauge.Marker,b.setSize(.5),c.setMainIndicator(b));if(0<k.sections.length){for(var d=0,m,g=0;g<k.sections.length;g++)m=k.sections[g],b=new e.gauge.ScaleSection,b.setFrom(d),b.setTo(m),c.getMainScale().getSections().add(b),d=m;c.getMainScale().setMax(m)}c.getDefaultAttributes().setRepeaterSize(.3)};f.vert=function(c,a){f.linear(c,a);var b=f.getStyleInfo(a);
b.isBullet||c.getMainIndicator().setTemplate("MarkerTriangle");"repeater"==b.name&&(b=new e.gauge.Repeater,b.setPaintOff(!0),c.setMainIndicator(b))};f.horz=function(c,a){f.linear(c,a);var b=f.getStyleInfo(a);b.isBullet||(c.getMainScale().setThickness(.5),c.getMainIndicator().setTemplate("MarkerTriangleInverted"));"repeater"==b.name&&(b=new e.gauge.Repeater,b.setPaintOff(!0),c.setMainIndicator(b))};f.chart=function(c,a){var b="";if(void 0!==a){var d=a[0];void 0!==d&&(b=d[0])}c.getAllSeries().setMarkerSize(4);
void 0!=b&&(b=b.toUpperCase(),"GROUP"==b&&c.getBorder().setTemplate("<T/>"));b=c.getAxisY().getGrids();b.getMajor().setTickMark(e.TickMark.None);b.getMinor().setTickMark(e.TickMark.None);b=c.getAxisY2().getGrids();b.getMajor().setTickMark(e.TickMark.None);b.getMinor().setTickMark(e.TickMark.None);b=c.getAxisX().getGrids();b.getMinor().setTickMark(e.TickMark.None);b.getMajor().setTickMark(e.TickMark.Outside);b.getMajor().setStyle(b.getMajor().getStyle()|e.AxisStyles.Centered);c.getAllSeries().setMarkerStyle(e.MarkerStyle.Filled);
c.getAllSeries().getLine().setWidth(2);c.getAxisY().getGrids().getMajor().setStyle(e.DashStyle.Dot);c.getAxisX().getGrids().getMajor().setStyle(e.DashStyle.Dot);c.getAllSeries().getStackedLabels().setFont("bold")};f.map=function(c,a){c.setShowAdditionalLayers(!1);var b=new e.maps.MapLayer;b.setPath("@main");b.setTemplate('<T xmlns:x="a" xmlns:sys="b"><C><P Reuse="true" F="{B F}" D="{B G}"/><P Reuse="true" D="{B G}" S="{Binding Class=Border.fill}" ST="{B ST}"/></C></T>');c.getLayers().add(b)};f.heatmap=
function(c,a){var b=c.getGradientStops();b.getItem(0).setColor("#258DC8");b.getItem(1).setColor("#4EB42E")};f.equalizer=function(a,f){var b=new e.equalizer.EqualizerItem;b.setColor("#4EB42E");b.setCount(2);a.getTopItems().add(b);b=new e.equalizer.EqualizerItem;b.setColor("#F15619");b.setCount(1);a.getTopItems().add(b);a.setOffColor("#33C0C0C0")};f.trend=function(a,f){a.getSecondaryValues().setAlphaForeground(1);a.getDelta().setVisible(!1);a.getSecondaryValues().setSeparatorWidth(0);var b=a.getIndicator();
b.setStyle(e.gauge.IndicatorStyle.TriangleVertical);b.setPosition(e.gauge.IndicatorPosition.Secondary);b="";if(void 0!==f){var d=f[0];void 0!==d&&(b=d[0])}void 0!=b&&(0<=b.toUpperCase().indexOf("SINGLE")&&(a.getDelta().setVisible(!1),a.getPercentChange().setVisible(!1),a.getIndicator().setVisible(!1),a.getIndicator().setPosition(e.gauge.IndicatorPosition.Primary)),0<=b.toUpperCase().indexOf("GROUP")&&a.getBorder().setTemplate("<T/>"))};f.border=function(a,e){}})();
cfx.ToolTipAttributes.prototype.setLineMode=function(){var e=new cfx.ToolTipLineAttributes;e.setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/><sc K="titleConverter"/><Th K="padding">2</Th></T.R><C Padding="{B Padding}"><B C.Left="-1" C.Top="0" F="{Binding Class=Border.fill}" A="0.85" S="{N}"><DockPanel N="container" Orientation="Vertical" M="0,4,0,0"><TextBlock Text="{B Title, Converter={S titleConverter},ConverterParameter=%u}}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Left" FontWeight="Bold" M="3,0,3,0" Foreground="{Binding Class=PointLabel.fill}"/><B H="1" S="{Binding Class=AxisY_Line.stroke}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>');
e.getLine().setWidth(1);e.getLine().setStyle(2);e.setContentTemplate('<T xmlns:x="a"><DockPanel Orientation="Horizontal" M="3,1,3,1"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}" M="0,0,10,0"/><S P="{B CurrSeries}"><TextBlock Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Class=PointLabel.fill}" S.V="1"/><TextBlock Text="{B Value}" HorizontalAlignment="Right" Foreground="{Binding Class=PointLabel.fill}"/></S></DockPanel></T>');0==this.getTriggerMode()&&
this.setTriggerMode(1);this.setMode(e)};
