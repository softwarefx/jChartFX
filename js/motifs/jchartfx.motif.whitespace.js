(function(){var e=window.cfx,a=window.sfx;e.motif="whitespace";var d=a["gauge.templates"];void 0!=d&&(d["Separator.stroke"]="0,#EEEEEE",d.whitespaceDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><g M="0"><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><TextBlock M="8,0" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontWeight="Bold" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}"/><C g.R="1" N="targetChart" M="4"/></g></T>',
d.whitespaceRadialDashBorder='<T><T.R><Th K="borderFactor">0.02</Th></T.R><E S="{Binding Class=Separator.stroke}" ST="2"/></T>',d.whitespaceRadialIndicator="RadialIndicatorRounded",d.whitespaceRadialCap="RadialCapPlain",d.whitespaceRadialGlare="<T/>",d.whitespaceLinearDashBorder="<T/>",d.whitespaceLinearGlare="<T/>",d.whitespaceFillerHorizontal="LinearFillerSimple",d.whitespaceFillerVertical="LinearFillerSimple",d.whitespaceLinearBar='<T><C M="-6"><B F="{B Back}" S="{N}" CR="2"/><B F="{N}" ST="2" S="#131616" StartCorner="3" Segments="2" CR="2"/><B F="{N}" ST="3" S="#282A2B" StartCorner="1" Segments="2" CR="2"/></C></T>',
d.whitespaceMarkerHorizontal="MarkerSquareTriangleInverted",d.whitespaceTrendIndicator='<T xmlns:x="a" xmlns:sys="b"><T.R><cc K="clrConverter"/><T K="fillTemplate"><T.R><cc K="clrConverter"/></T.R><C><P D="{B G}" S="{B S}" ST="1"/></C></T><T K="backTemplate"><T.R><cc K="clrConverter"/></T.R><C><P D="{B G}" F="{B F}" S="{B S}" ST="1"/></C></T><T K="strokeBackTemplate"><C><P D="{B G}" S="{B S}" ST="1"/></C></T><T K="fillBackTemplate"><C><P D="{B G}" F="{B F}" S="{B S}" ST="1"/></C></T></T.R><C><P D="{B G}" S="{B S}" ST="1"/></C></T>',
d.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><Th K="padding">3</Th></T.R><C Padding="{B Padding}"><B S="{B S}" ST="1" F="{B F}" A="1" CP="0.4" CR="0" Segments="{B Segments}" StartCorner="{B Corner}"  Padding="8,8,8,8"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.25}" V="{B TitleVisible}" HorizontalAlignment="Center" M="3,0,3,0"/></DockPanel></B></C></T>',d.whitespacePictoGraph=
'<T><T.R><s K="ratio">0.42870</s><s K="vertSpacingHive">-0.5</s><s K="horzSpacingHive">0.2</s></T.R><V VW="10.289" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M8.219,3.07c0,1.423-1.151,2.574-2.574,2.574c-1.419,0-2.57-1.151-2.57-2.574C3.075,1.651,4.226,0.5,5.645,0.5C7.067,0.5,8.219,1.651,8.219,3.07L8.219,3.07z M8.219,3.07Z" ></P><P S="{B S}" F="{B F}" Reuse="true" D="M10.789,7.214c0,0,0-1.712-1.716-1.712H2.217c0,0-1.717,0-1.717,1.712v6.002c0,1.712,1.717,1.712,1.717,1.712l1,9.572h4.855l1-9.572c0,0,1.716,0,1.716-1.712V7.214z M10.789,7.214Z" ></P></g></V></T>',
d=new e.gauge.Palette,d.setColors(["#EEEEEE","#FFFFFF","#EEEEEE","#FFFFFF","#5D7C9B","#465D75","#5D7C9B","#465D75","#989898",null,"#989898","#EEEEEE","#DDDDDD",null,"#BF7381","#905761",null,"#F0B35F","#B48748",null,"#73BFA1","#579079",null,"#808080","#808080","#555555","#555555","#808080","#989898","#BF7381","#F0B35F","#73BFA1","#666666","#FFFFFF","#666666","#344454","#808080","#4C4C4C","#5D7C9B","#F0B35F","#5F5474","#4CB7C3","#E5BDE4","#465D75","#B48748","#483F57","#398A93","#AC8EAB"]),e.gauge.Palette.setDefaultPalette(d));
a=a["vector.templates"];void 0!=a&&(a["DashboardTitle.fill"]="0,#555555",a["DashboardTitle.font-family"]="1,'Open Sans', sans-serif",a["DashboardTitle.font-size"]="2,11",a["AxisY_Text.fill"]="0,#989898",a["Separator.stroke"]="0,#EEEEEE",a.whitespaceBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="uiMargin">8,5,0,0</Th></T.R><g M="0"><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><DockPanel Orientation="Horizontal"><r V="{B UIVisible}" W="{B UISize}" M="0,0,8,0" H="1" F="{N}" S="{N}"/><TextBlock M="8,0" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontWeight="Bold" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}"/></DockPanel><C g.R="1" N="targetChart" M="4,0"/></g></T>',
a.whitespaceBar="BarBasic",a.whitespaceGantt="GanttBasic",a.whitespaceEqualizer=a.whitespaceBar,a.whitespaceLine="LineBasic",a.whitespaceCurve="CurveBasic",a.whitespaceArea='<T><T.R><D K="cfxDefStrokeThickness">3</D></T.R><Po P="{B P}" F="{B F}"/></T>',a.whitespaceCurveArea='<T><T.R><D K="cfxDefStrokeThickness">3</D></T.R><P D="{B G}" F="{B F}"/></T>',a.whitespacePie="PieBasic",a.whitespaceBubble="BubbleBasic",a.whitespaceDoughnut="DoughnutBasic",a.whitespaceFunnel="FunnelBasic",a.whitespacePyramid=
"PyramidBasic",a.whitespaceSparklineLine=a.whitespaceLine,a.whitespaceSparklineBar=a.whitespaceBar,a.whitespaceSparklineArea=a.whitespaceArea,a.whitespaceHighLow='<T><T.R><T K="lineTemplate"><C><Pl P="{B P}" S="{B S}" ST="{B ST}"/></C></T></T.R><Po P="{B P}" F="{B F}"/></T>',a.whitespaceBullet='<T><T.R><T K="templateLine"><Line X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}" S="{B S}" ST="1"/></T></T.R><C><r F="{B F}" S="{B S}"/></C></T>',a.TipBorderDefault='<T xmlns:x="a"><T.R><mc K="multConverter"/><Th K="padding">3</Th></T.R><C Padding="{B Padding}"><B S="{B ItemFillS}" ST="1" F="{B F}" A="1" CP="0.4" CR="0" Segments="{B Segments}" StartCorner="{B Corner}"  Padding="8,8,8,8"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.25}" V="{B TitleVisible}" HorizontalAlignment="Center" M="3,0,3,0"/></DockPanel></B></C></T>',
a.TipContentDefault='<T xmlns:x="a"><g><g.CD><CD W="8"/><CD W="4"/><CD W="Auto"/><CD W="12"/><CD W="Auto"/></g.CD><g.RD><RD H="20"/></g.RD><S P="{B CurrSeries}" g.C="0" VerticalAlignment="Center" HorizontalAlignment="Center"><E S="{B ItemFillS}" ST="2" W="8" H="8" S.V="1"/><S P="{B SeriesIndex}"><C S.V="-2"/><E S="{B ItemFillS}" ST="1" W="8" H="8"/></S></S><TextBlock g.C="2" Text="{B SeriesT}" VerticalAlignment="Center"/><S P="{B CurrSeries}" g.C="4" HorizontalAlignment="Right" ><TextBlock Text="{B Value}" FontWeight="Bold" VerticalAlignment="Center" S.V="1"/><TextBlock Text="{B Value}" VerticalAlignment="Center"/></S></g></T>',
a.TipContentPercent='<T xmlns:x="a"><DockPanel Orientation="Vertical" M="3,0,3,0"><S P="{B CurrSeries}"><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}" FontWeight="Bold" S.V="1"/><TextBlock Text="{B SeriesT}" Foreground="{B ItemFill}"/></S><DockPanel Orientation="Horizontal"><TextBlock Text="{B Macro%v out of %t}"/><TextBlock M="6,0,0,0" Text="{B Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right"/></DockPanel></DockPanel></T>',a.TipContentDefaultX='<T xmlns:x="a"><g M="3,0,3,0"><g.CD><CD W="Auto"/><CD W="Auto"/></g.CD><g.RD><RD H="Auto"/><RD H="Auto"/></g.RD><TextBlock g.R="0" g.C="0" Text="{B SeriesTX}" Foreground="{B ItemFill}" VerticalAlignment="Center" M="0,0,10,0"/><TextBlock g.R="0" g.C="1" Text="{B ValueX}" FontWeight="Bold" HorizontalAlignment="Right" VerticalAlignment="Center"/><TextBlock g.R="1" g.C="0" Text="{B SeriesTY}" Foreground="{B ItemFill}" VerticalAlignment="Center" M="0,0,10,0"/><TextBlock g.R="1" g.C="1" Text="{B Value}" FontWeight="Bold" HorizontalAlignment="Right" VerticalAlignment="Center"/></g></T>',
a.whitespacePictoGraph='<T><T.R><s K="ratio">0.42870</s><s K="vertSpacingHive">-0.5</s><s K="horzSpacingHive">0.2</s></T.R><V VW="10.289" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M8.219,3.07c0,1.423-1.151,2.574-2.574,2.574c-1.419,0-2.57-1.151-2.57-2.574C3.075,1.651,4.226,0.5,5.645,0.5C7.067,0.5,8.219,1.651,8.219,3.07L8.219,3.07z M8.219,3.07Z" ></P><P S="{B S}" F="{B F}" Reuse="true" D="M10.789,7.214c0,0,0-1.712-1.716-1.712H2.217c0,0-1.717,0-1.717,1.712v6.002c0,1.712,1.717,1.712,1.717,1.712l1,9.572h4.855l1-9.572c0,0,1.716,0,1.716-1.712V7.214z M10.789,7.214Z" ></P></g></V></T>',
a=new e.Palette,a.setColors("#5D7C9B #F0B35F #5F5474 #4CB7C3 #E5BDE4 #BF7381 #73BFA1 #FFBC35 #554C8E #34BCD9 #5192C1 #52C999 #EDA1EB #D15770 #F9F9F9 #F5D34A #9BCEFF #5A4324 #9E8CC1 #1C4549 #564755 #482B30 #2B483C #604614 #8D7EEC #134651 #1E3748 #1F4B39 #593C58 #4E212A #5D5D5D #5C4F1C #00000000 #00000000 #00000000 #EEEEEE #EEEEEE #F1F6F9 #666666 #F6F6F6 #989898 #989898 #00000000 #555555 #00000000 #666666 #00000000 #ffffff #666666 #F1F6F9 #666666 #F6F6F6 #666666 #dbdbd9 #ffffff #666666 #FFFFFF #666666 #989898 #808080 #4C4C4C".split(" ")),
e.Chart.setDefaultPalette(a));var g=function(){};e.motifs.whitespace=g;g.getStyleInfo=function(b){var a="";void 0!==b&&(b=b[0],void 0!==b&&(a=b[0]));b={isGroup:!1};b.name=a;b.isSingle=!1;b.isBullet=!1;b.sections=[];if(void 0!=a&&(a=a.toUpperCase(),0<=a.indexOf("SINGLE")&&(b.isSingle=!0,b.name=""),0<=a.indexOf("GROUP")&&(b.isGroup=!0,b.name="",b.name=""),0<=a.indexOf("BULLET")&&(b.isBullet=!0,b.name=""),0<=a.indexOf("SECTIONS"))){var c,f;c=a.indexOf("SECTIONS");f=a.indexOf(":",c);0<f&&(c=f,f=a.indexOf("-",
c),a=0<=f?a.substring(c+1,f):a.substring(c+1,a.length),b.sections=a.split(",",100));b.name=""}return b};g.getChartGallery=function(b){var a="";void 0!==b&&(b=b[0],void 0!==b&&(a=b[0]));return a};g.global=function(b){b.setFont("8pt Arial");var a=b.getMainScale();a.getTickmarks();a.setAllowHalves(!1);b=b.getDefaultAttributes();b.setSectionThickness(.1);b.setSectionPosition(0)};g.radial=function(b,a){g.global(b);var c=g.getStyleInfo(a);null!=c.name&&b.setStyle(c.name);var f=b.getMainScale(),f=f.getTickmarks();
f.getMajor().setStyle(e.gauge.TickmarkStyle.Rectangle);f.getMajor().setWidth(.05);"repeater"==c.name&&(f=b.getMainScale(),f.getCap().setVisible(!1),f.getTickmarks().getMajor().setStyle(e.gauge.TickmarkStyle.None),f.getTickmarks().getMedium().setStyle(e.gauge.TickmarkStyle.None),f.getTickmarks().getMajor().setPosition(1),c=f.getBar(),c.setThickness(1.1),c.setPosition(.4),b.getDefaultAttributes().setRepeaterSize(1),b.getDefaultAttributes().setRepeaterPosition(.9),c=new e.gauge.Repeater,c.setPaintOff(!0),
b.setMainIndicator(c))};g.linear=function(b,a){g.global(b);var c=b.getMainScale(),f=c.getTickmarks(),d=c.getBar(),h=c.getMainIndicator();f.getMajor().setStyle(e.gauge.TickmarkStyle.None);f.getMedium().setVisible(!1);h.setSize(.25);h.setPosition(.375);d.setThickness(.05);d.setPosition(.475);f=g.getStyleInfo(a);f.isGroup&&(b.getBorder().setTemplate("<T/>"),b.getDashboardBorder().setTemplate("<T/>"));if("repeater"==f.name){var l=new e.gauge.Repeater;l.setPaintOff(!0);d.setVisible(!1);b.setMainIndicator(l)}f.isBullet&&
(c.setThickness(.9),c.setPosition(0),h.setTitle("Current"),d=new e.gauge.Marker,d.setSize(.4),d.setPosition(.5),d.setTitle("Target"),d.setTemplate("MarkerThinRectangle"),c.getIndicators().add(d),b.getDefaultAttributes().setSectionThickness(.5),b.getDefaultAttributes().setSectionPosition(.25));if(0<f.sections.length){for(var d=0,k,h=0;h<f.sections.length;h++)k=f.sections[h],c=new e.gauge.ScaleSection,c.setFrom(d),c.setTo(k),b.getMainScale().getSections().add(c),d=k;b.getMainScale().setMax(k)}};g.vert=
function(b,a){g.linear(b,a)};g.horz=function(b,a){g.linear(b,a);g.getStyleInfo(a).isBullet||(b.getBorder().setInsideGap(0),b.getMainScale().setThickness(.3),b.getMainScale().setAlignment(e.StringAlignment.Near))};g.chart=function(b,a){var c="";if(void 0!==a){var d=a[0];void 0!==d&&(c=d[0])}void 0!=c&&(c=c.toUpperCase(),"GROUP"==c&&b.getBorder().setTemplate("<T/>"));c=b.getAxisY().getGrids();c.getMajor().setTickMark(e.TickMark.None);c.getMinor().setTickMark(e.TickMark.None);b.getAllSeries().getBorder().setUseForLines(!1);
b.getAllSeries().getLine().setWidth(1)};g.map=function(a,d){a.setShowAdditionalLayers(!1)};g.heatmap=function(a,d){var c=a.getGradientStops();c.getItem(0).setColor("#5D7C9B");c.getItem(1).setColor("#F0B35F")};g.equalizer=function(a,d){var c=new e.equalizer.EqualizerItem;c.setColor("#F0B35F");c.setCount(2);a.getTopItems().add(c);c=new e.equalizer.EqualizerItem;c.setColor("#5F5474");c.setCount(1);a.getTopItems().add(c);a.setOffColor("#33CCCCCC")};g.trend=function(a,d){var c=a.getIndicator();c.setStyle(e.gauge.IndicatorStyle.ThickDiagonal);
c.setHeightRatio(.25);c="";if(void 0!==d){var f=d[0];void 0!==f&&(c=f[0])}void 0!=c&&(0<=c.toUpperCase().indexOf("SINGLE")&&(a.getDelta().setVisible(!1),a.getPercentChange().setVisible(!1),a.getIndicator().setVisible(!1)),0<=c.toUpperCase().indexOf("GROUP")&&a.getBorder().setTemplate("<T/>"));a.getSecondaryValues().setAlphaForeground(1)}})();
cfx.ToolTipAttributes.prototype.setLineMode=function(){var e=new cfx.ToolTipLineAttributes;e.getLine().setStyle(0);e.getLine().setWidth(1);e.setY(1);e.setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/><Th K="padding">2</Th></T.R><C Padding="{B Padding}"><B C.Left="-1" C.Top="0" F="{Binding Class=Border.fill}" A="0.85" S="{N}"><DockPanel N="container" Orientation="Vertical" M="4,4,0,0"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=1.25}" V="{B TitleVisible}" HorizontalAlignment="Left" FontWeight="Normal" M="0,0,3,0"/></DockPanel></B></C></T>');e.setContentTemplate('<T xmlns:x="a"><g><g.CD><CD W="8"/><CD W="4"/><CD W="Auto"/><CD W="12"/><CD W="Auto"/></g.CD><g.RD><RD H="20"/></g.RD><S P="{B CurrSeries}" g.C="0" VerticalAlignment="Center" HorizontalAlignment="Center"><E S="{B ItemFillS}" ST="2" W="8" H="8" S.V="1"/><E S="{B ItemFillS}" ST="1" W="8" H="8"/></S><TextBlock g.C="2" Text="{B SeriesT}" VerticalAlignment="Center"/><S P="{B CurrSeries}" g.C="4" HorizontalAlignment="Right" ><TextBlock Text="{B Value}" FontWeight="Bold" VerticalAlignment="Center" S.V="1"/><TextBlock Text="{B Value}" VerticalAlignment="Center"/></S></g></T>');
0==this.getTriggerMode()&&this.setTriggerMode(1);this.setMode(e)};function loadjscssfile(e,a){if("js"==a){var d=document.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",e)}else"css"==a&&(d=document.createElement("link"),d.setAttribute("rel","stylesheet"),d.setAttribute("type","text/css"),d.setAttribute("href",e));"undefined"!=typeof d&&document.getElementsByTagName("head")[0].appendChild(d)};
