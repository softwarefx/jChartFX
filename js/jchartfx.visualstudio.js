(function(){

    var filteredCfxItems = {};

    function processItems(items)
    {
        var filteredItems = items.filter(function (item) {
            var name = item.name;

            // Remove obfuscated classes as they are not meant to be created by name
            if (name.length <= 2)
                return false;

            // Remove functions from object
            if ((item.value == null) || !item.value._isCFXNamespace) {
                var c = name.charAt(0);
                if (c != c.toUpperCase())
                    return false;
            }

            return true;
        });

        filteredItems.forEach(function (item) {
            if (item.value) {
                if (item.value._isCFXEnum)
                    item.glyph = 'vs:GlyphGroupEnum';
                else if (item.value._isCFXNamespace)
                    item.glyph = 'vs:GlyphGroupNamespace';
            }
        });

        return filteredItems;
    }

    intellisense.addEventListener('statementcompletion', function (event) {
        var targetName = event.targetName;
        if ((targetName == "cfx") || ((event.target != null) && (event.target._isCFXNamespace))) {
            var filteredItems = filteredCfxItems[targetName];
            if (!filteredItems) {
                filteredItems = processItems(event.items);
                filteredCfxItems[targetName] = filteredItems;
            }

            event.items = filteredItems;
        } else {
            if ((event.target != null) && (event.target._isCFXEnum)) {
                event.items = event.items.filter(function (item) {
                    var c = item.name.charAt(0);
                    return c == c.toUpperCase();
                });
            }
        }
    });
var cfx = { };
window.cfx = cfx;
cfx._isCFXNamespace = true;

var AnimationDelay = {
    Auto: 0,
    None: 4096,
    PerPoint: 1,
    PerSeries: 2,
    PerPointInverse: 17,
    PerSeriesInverse: 18,
    PerPointRandom: 33,
    PerSeriesRandom: 34,
    PerPointSeries: 3,
    PerPointSeriesRandom: 35
};
AnimationDelay._isCFXEnum = true;
cfx.AnimationDelay = AnimationDelay;

var AnimationDirection = {
    Auto: 0,
    Upward: 1,
    Downward: 2,
    FromCenter: 3
};
AnimationDirection._isCFXEnum = true;
cfx.AnimationDirection = AnimationDirection;

var AnimationTiming = {
    Auto: 0,
    Linear: 1,
    EaseIn: 2,
    EaseOut: 3,
    EaseInEaseOut: 4,
    EaseOutBounce: 5
};
AnimationTiming._isCFXEnum = true;
cfx.AnimationTiming = AnimationTiming;

var AxesStyle = {
    None: 0,
    Frame3D: 1,
    Math: 2,
    FlatFrame: 3,
    X: 4,
    Y: 5
};
AxesStyle._isCFXEnum = true;
cfx.AxesStyle = AxesStyle;

var AxisFormat = {
    None: 0,
    Number: 1,
    Currency: 2,
    Scientific: 3,
    Percentage: 4,
    Date: 5,
    LongDate: 6,
    Time: 7,
    DateTime: 8
};
AxisFormat._isCFXEnum = true;
cfx.AxisFormat = AxisFormat;

var AxisPosition = {
    Near: 0,
    Far: 2
};
AxisPosition._isCFXEnum = true;
cfx.AxisPosition = AxisPosition;

var AxisStyles = {
    HideText: 1,
    Notify: 2,
    Show2Levels: 4,
    SingleLine: 8,
    AutoScaleUnit: 16,
    BreakZero: 32,
    Hide: 64,
    NotClipped: 128,
    ClientScroll: 256,
    Centered: 512,
    RotateText: 1024,
    LongTick: 2048,
    AutoScale: 4096,
    ForceZero: 8192,
    ShowEnds: 16384,
    RoundStep: 32768,
    IgnoreLabels: 65536,
    GridFront: 131072,
    Inverted: 262144,
    ShowIntermediateLogLabels: 1048576,
    AutoMinorStep: 2097152,
    AutoFirstLabel: 4194304,
    AutoCenter: 8388608,
    Inside: 16777216,
    AutoLabelLayout: 33554432,
    AllowHalf: 67108864,
    LeftAligned: 268435456,
    DoNotReset: 536870912,
    AutoDecimals: 1073741824,
    Default: 250132520
};
AxisStyles._isCFXEnum = true;
cfx.AxisStyles = AxisStyles;

var BarAnimation = {
    Value: 0,
    Drop: 1
};
BarAnimation._isCFXEnum = true;
cfx.BarAnimation = BarAnimation;

var BarShape = {
    Rectangle: 0,
    Cylinder: 1,
    Cone: 2,
    Pyramid: 3
};
BarShape._isCFXEnum = true;
cfx.BarShape = BarShape;

var BorderEffect = {
    None: 0,
    Raised: 1,
    Light: 2,
    Dark: 3,
    Opposite: 4,
    Shadow: 5
};
BorderEffect._isCFXEnum = true;
cfx.BorderEffect = BorderEffect;

var BubbleAnimation = {
    Position: 0,
    Size: 1,
    PositionAndSize: 2
};
BubbleAnimation._isCFXEnum = true;
cfx.BubbleAnimation = BubbleAnimation;

var ChartStyles = {
    PaintMarker: 32,
    OnlyChart: 64,
    SideBySide: 256,
    Monochrome: 512,
    FastLegends: 32768,
    ForceDataDriven: 2097152,
    PaintNoChart: 536870912,
    HideZLabels: 1073741824,
    Default: 1852418
};
ChartStyles._isCFXEnum = true;
cfx.ChartStyles = ChartStyles;

var ConditionSpecialValue = {
    None: 0,
    First: 1,
    Last: 2,
    Min: 3,
    Max: 4
};
ConditionSpecialValue._isCFXEnum = true;
cfx.ConditionSpecialValue = ConditionSpecialValue;

var ConditionUnit = {
    Absolute: 0,
    Percentage: 1
};
ConditionUnit._isCFXEnum = true;
cfx.ConditionUnit = ConditionUnit;

var ContentLayout = {
    Spread: 0,
    Near: 1,
    Center: 2,
    Far: 3
};
ContentLayout._isCFXEnum = true;
cfx.ContentLayout = ContentLayout;

var CustomGridLineStyles = {
    None: 0,
    HideText: 1,
    Hide: 2,
    BackOnly: 8,
    ColorText: 16,
    HideLine: 32,
    OutsideText: 64,
    ShowValue: 128
};
CustomGridLineStyles._isCFXEnum = true;
cfx.CustomGridLineStyles = CustomGridLineStyles;

var DataSourceStyles = {
    KeepScale: 8,
    Transpose: 16,
    KeepSeriesLegend: 64,
    KeepLabels: 128,
    ReadXValues: 512,
    ReadYFromValues: 1024,
    DatesAsLabels: 2048,
    RewindBeforeReading: 4096,
    DataChange: 8192,
    None: 0,
    Default: 4096
};
DataSourceStyles._isCFXEnum = true;
cfx.DataSourceStyles = DataSourceStyles;

var DockArea = {
    Left: 0,
    Top: 1,
    Right: 2,
    Bottom: 3
};
DockArea._isCFXEnum = true;
cfx.DockArea = DockArea;

var DockBorder = {
    None: 0,
    External: 1,
    Internal: 2
};
DockBorder._isCFXEnum = true;
cfx.DockBorder = DockBorder;

var ExplodingMode = {
    None: 0,
    All: 1,
    First: 2,
    Last: 3
};
ExplodingMode._isCFXEnum = true;
cfx.ExplodingMode = ExplodingMode;

var FieldUsage = {
    Default: 0,
    Label: 1,
    Value: 2,
    XValue: 3,
    FromValue: 5,
    KeyLabel: 4,
    ColumnHeading: 6,
    RowHeading: 7,
    NotUsed: 8
};
FieldUsage._isCFXEnum = true;
cfx.FieldUsage = FieldUsage;

var FillMode = {
    Solid: 0,
    Monochrome: 1,
    Pattern: 2,
    Gradient: 3
};
FillMode._isCFXEnum = true;
cfx.FillMode = FillMode;

var Gallery = {
    None: 0,
    Lines: 1,
    Bar: 2,
    Area: 3,
    Scatter: 4,
    Pie: 5,
    Step: 8,
    HighLowClose: 9,
    Radar: 11,
    Polar: 11,
    Cube: 12,
    Bubble: 15,
    OpenHighLowClose: 16,
    Candlestick: 17,
    Gantt: 20,
    Curve: 6,
    Pareto: 7,
    Surface: 10,
    Doughnut: 13,
    Pyramid: 14,
    Contour: 18,
    CurveArea: 19
};
Gallery._isCFXEnum = true;
cfx.Gallery = Gallery;

var HitType = {
    None: 0,
    Background: 1,
    InsideArea: 2,
    Between: 3,
    Point: 4,
    Axis: 5,
    Title: 6,
    CustomGridLine: 7,
    Drag: 8,
    Crosshair: 9,
    Scroll: 11,
    LegendBox: 12,
    DataGrid: 13,
    Other: 14,
    AxisSection: 15,
    Gallery: 16,
    Annotation: 17,
    Link: 18
};
HitType._isCFXEnum = true;
cfx.HitType = HitType;

var Interlaced = {
    None: 0,
    Horizontal: 1,
    Vertical: 2
};
Interlaced._isCFXEnum = true;
cfx.Interlaced = Interlaced;

var LegendBoxStyles = {
    Wordbreak: 1,
    ShowMenu: 4,
    RightAlign: 16,
    NoColor: 32,
    HidePartial: 64,
    Default: 4
};
LegendBoxStyles._isCFXEnum = true;
cfx.LegendBoxStyles = LegendBoxStyles;

var LineAnimation = {
    DrawX: 0,
    YData: 1,
    YProgress: 2
};
LineAnimation._isCFXEnum = true;
cfx.LineAnimation = LineAnimation;

var MarkerShape = {
    None: 0,
    Rect: 1,
    Circle: 2,
    Triangle: 3,
    Diamond: 4,
    Marble: 5,
    HorizontalLine: 6,
    VerticalLine: 7,
    Cross: 8,
    InvertedTriangle: 9,
    X: 10,
    Picture: 11,
    Template: 12,
    Many: 13
};
MarkerShape._isCFXEnum = true;
cfx.MarkerShape = MarkerShape;

var MarkerStyle = {
    Filled: 0,
    Hollow: 1
};
MarkerStyle._isCFXEnum = true;
cfx.MarkerStyle = MarkerStyle;

var NumberComparison = {
    Equals: 0,
    GreaterThan: 1,
    LessThan: 2,
    Between: 3
};
NumberComparison._isCFXEnum = true;
cfx.NumberComparison = NumberComparison;

var PieAnimation = {
    Radial: 1,
    Angle: 2,
    RadialAndAngle: 3,
    AngleFromTop: 258,
    RadialAngleFromTop: 259
};
PieAnimation._isCFXEnum = true;
cfx.PieAnimation = PieAnimation;

var RealTimeAction = {
    Append: 0,
    Insert: 1
};
RealTimeAction._isCFXEnum = true;
cfx.RealTimeAction = RealTimeAction;

var RealTimeMode = {
    Scroll: 0,
    Loop: 1
};
RealTimeMode._isCFXEnum = true;
cfx.RealTimeMode = RealTimeMode;

var Shadow = {
    None: 0,
    Fixed: 1,
    Realistic: 2
};
Shadow._isCFXEnum = true;
cfx.Shadow = Shadow;

var Stacked = {
    No: 0,
    Normal: 1,
    Stacked100: 2
};
Stacked._isCFXEnum = true;
cfx.Stacked = Stacked;

var StringsComparison = {
    Equals: 0,
    StartsWith: 1,
    EndsWith: 2,
    Contains: 3
};
StringsComparison._isCFXEnum = true;
cfx.StringsComparison = StringsComparison;

var TickMark = {
    None: 0,
    Outside: 1,
    Inside: 2,
    Cross: 3
};
TickMark._isCFXEnum = true;
cfx.TickMark = TickMark;

var TooltipTriggerMode = {
    Marker: 0,
    MarkerThenPlot: 1,
    Plot: 2
};
TooltipTriggerMode._isCFXEnum = true;
cfx.TooltipTriggerMode = TooltipTriggerMode;

var GradientType = {
    Horizontal: 0,
    Vertical: 1,
    BackwardDiagonal: 2,
    ForwardDiagonal: 3,
    Radial: 4,
    Angled: 5
};
GradientType._isCFXEnum = true;
cfx.GradientType = GradientType;

var StepStyle = {
    HorizontalVertical: 0,
    VerticalHorizontal: 1
};
StepStyle._isCFXEnum = true;
cfx.StepStyle = StepStyle;

var VectorBorder = function() {
}
cfx.VectorBorder = VectorBorder;
VectorBorder.prototype = {
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    }
};

var bs = function() {
}
cfx.bs = bs;
bs.prototype = {
    getColors: function () {
        /// <summary>Gets a collection of colors to be used for the colors of the surface plot.</summary>
        /// <returns type="Color[]"/>
        return new Color[]();
    },
    setColors: function (value) {
        /// <summary>Sets a collection of colors to be used for the colors of the surface plot.</summary>
        /// <param name="value" type="Color[]"/>>
    },
    getShowContourLines: function () {
        /// <summary>Shows or hides the contour lines for Contour charts.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowContourLines: function (value) {
        /// <summary>Shows or hides the contour lines for Contour charts.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowGridLines: function () {
        /// <summary>Shows or hides the Grid lines of surface charts in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGridLines: function (value) {
        /// <summary>Shows or hides the Grid lines of surface charts in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStep: function () {
        /// <summary>Gets or set the Step for a Surface chart. The lower the Step, the smother the surface.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStep: function (value) {
        /// <summary>Gets or set the Step for a Surface chart. The lower the Step, the smother the surface.</summary>
        /// <param name="value" type="number"/>>
    }
};

var bt = function() {
}
cfx.bt = bt;
bt.prototype = {

};

var bu = function() {
}
cfx.bu = bu;
bu.prototype = {
    getCircular: function () {
        /// <summary>Gets a value specifying to draw the Radar chart in a round or polygonal shape.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setCircular: function (value) {
        /// <summary>Sets a value specifying to draw the Radar chart in a round or polygonal shape.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClockwise: function () {
        /// <summary>Gets a value indicating to plot points in a clockwise or counter-clockwise direction.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClockwise: function (value) {
        /// <summary>Sets a value indicating to plot points in a clockwise or counter-clockwise direction.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClosed: function () {
        /// <summary>Gets a value indicating whether or not to connect the first and last points in a radar chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClosed: function (value) {
        /// <summary>Sets a value indicating whether or not to connect the first and last points in a radar chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFillArea: function () {
        /// <summary>Fills the inside area of a Radar chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setFillArea: function (value) {
        /// <summary>Fills the inside area of a Radar chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShadows: function () {
        /// <summary>Gets a value indicating whether or not shadowing is applied for a 2D radar chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShadows: function (value) {
        /// <summary>Sets a value indicating whether or not shadowing is applied for a 2D radar chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowLines: function () {
        /// <summary>Shows or Hides the lines connecting each point in the radar Chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowLines: function (value) {
        /// <summary>Shows or Hides the lines connecting each point in the radar Chart.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var bv = function() {
}
cfx.bv = bv;
bv.prototype = {
    getConic: function () {
        /// <summary>Determines whether or not the pyramid will be shown with a Conic effect.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setConic: function (value) {
        /// <summary>Determines whether or not the pyramid will be shown with a Conic effect.</summary>
        /// <param name="value" type="bool"/>>
    },
    getDistributeHeight: function () {
        /// <returns type="bool"/>
        return true;
    },
    setDistributeHeight: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getFaces: function () {
        /// <summary>Determines how many Faces the pyramid has.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFaces: function (value) {
        /// <summary>Determines how many Faces the pyramid has.</summary>
        /// <param name="value" type="number"/>>
    },
    getInverted: function () {
        /// <summary>Determines if the pyramid is displayed upside-down or right-side up.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <summary>Determines if the pyramid is displayed upside-down or right-side up.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeparation: function () {
        /// <summary>Determines how many pixels each segment of the pyramid is separated by.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Determines how many pixels each segment of the pyramid is separated by.</summary>
        /// <param name="value" type="number"/>>
    },
    getShadow2D: function () {
        /// <summary>Determines if the pyramid as a shadow that gives a 2D chart a 3D look.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShadow2D: function (value) {
        /// <summary>Determines if the pyramid as a shadow that gives a 2D chart a 3D look.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var by = function() {
}
cfx.by = by;
by.prototype = {

};

var bz = function() {
}
cfx.bz = bz;
bz.prototype = {
    getAnimationStyle: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getStepStyle: function () {
        /// <summary>Gets the StepStyle property.</summary>
        /// <returns type="cfx.StepStyle"/>
        return new StepStyle();
    },
    setStepStyle: function (value) {
        /// <summary>Sets the StepStyle property.</summary>
        /// <param name="value" type="cfx.StepStyle"/>>
    }
};

var bA = function() {
}
cfx.bA = bA;
bA.prototype = {
    getHighLowClose4Series: function () {
        /// <summary>Provides means to convert a OpenHighLowClose chart to a HighLowClose chart (and the other way around) without having to re-order the series.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setHighLowClose4Series: function (value) {
        /// <summary>Provides means to convert a OpenHighLowClose chart to a HighLowClose chart (and the other way around) without having to re-order the series.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var bB = function() {
}
cfx.bB = bB;
bB.prototype = {
    getAnimationStyle: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.LineAnimation"/>>
    }
};

var bD = function() {
}
cfx.bD = bD;
bD.prototype = {
    getAnimationStyle: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.BarAnimation"/>
        return new BarAnimation();
    },
    setAnimationStyle: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.BarAnimation"/>>
    },
    getIntraSeriesGap: function () {
        /// <summary>Allows you to set the separation of the bars on a same point, on a multi-series chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setIntraSeriesGap: function (value) {
        /// <summary>Allows you to set the separation of the bars on a same point, on a multi-series chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getOverlap: function () {
        /// <summary>Instruct the chart to draw bars on the same point overlaping each other.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setOverlap: function (value) {
        /// <summary>Instruct the chart to draw bars on the same point overlaping each other.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var bE = function() {
}
cfx.bE = bE;
bE.prototype = {
    getAnimationStyle: function () {
        /// <summary>Gets the AnimationStyle in the Area object.</summary>
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <summary>Sets the AnimationStyle in the Area object.</summary>
        /// <param name="value" type="cfx.LineAnimation"/>>
    }
};

var ImageBackground = function() {
}
cfx.ImageBackground = ImageBackground;
ImageBackground.prototype = {

};

var GradientBackground = function() {
}
cfx.GradientBackground = GradientBackground;
GradientBackground.prototype = {
    getAngle: function () {
        /// <summary>Sets the gradient angle when using the 'Angled' gradient background.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAngle: function (value) {
        /// <summary>Sets the gradient angle when using the 'Angled' gradient background.</summary>
        /// <param name="value" type="number"/>>
    },
    getColorFrom: function () {
        /// <summary>Gets the beginning color of a gradient.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColorFrom: function (value) {
        /// <summary>Sets the beginning color of a gradient.</summary>
        /// <param name="value" type="String"/>>
    },
    getColors: function () {
        /// <returns type="cfx.bK"/>
        return new bK();
    },
    getColorTo: function () {
        /// <summary>Ending color of a gradient.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColorTo: function (value) {
        /// <summary>Ending color of a gradient.</summary>
        /// <param name="value" type="String"/>>
    },
    getEffectArea: function () {
        /// <summary>Gets a value indicating the percentage of chart area affected by a GradientBackground.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setEffectArea: function (value) {
        /// <summary>Sets a value indicating the percentage of chart area affected by a GradientBackground.</summary>
        /// <param name="value" type="number"/>>
    },
    getFactor: function () {
        /// <returns type="cfx.bJ"/>
        return new bJ();
    },
    getPosition: function () {
        /// <returns type="cfx.bJ"/>
        return new bJ();
    },
    getType: function () {
        /// <summary>Sets the style of the gradient for a selected gradient background.</summary>
        /// <returns type="cfx.GradientType"/>
        return new GradientType();
    },
    setType: function (value) {
        /// <summary>Sets the style of the gradient for a selected gradient background.</summary>
        /// <param name="value" type="cfx.GradientType"/>>
    }
};

var StringFieldCondition = function() {
}
cfx.StringFieldCondition = StringFieldCondition;
StringFieldCondition.prototype = {
    getComparison: function () {
        /// <summary>Gets the StringField comparison condition.</summary>
        /// <returns type="cfx.StringsComparison"/>
        return new StringsComparison();
    },
    setComparison: function (value) {
        /// <summary>Sets the StringField comparison condition.</summary>
        /// <param name="value" type="cfx.StringsComparison"/>>
    },
    getInverse: function () {
        /// <summary>Gets a value indicating whether or not the StringField condition comparison is inversed</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverse: function (value) {
        /// <summary>Sets a value indicating whether or not the StringField condition comparison is inversed</summary>
        /// <param name="value" type="bool"/>>
    },
    getName: function () {
        /// <summary>Gets the name of the Field to use in the comparison in a StringField condition</summary>
        /// <returns type="string"/>
        return "";
    },
    setName: function (value) {
        /// <summary>Sets the name of the Field to use in the comparison in a StringField condition</summary>
        /// <param name="value" type="string"/>>
    },
    getValue: function () {
        /// <summary>Gets the value to compare with in a StringField condition</summary>
        /// <returns type="string"/>
        return "";
    },
    setValue: function (value) {
        /// <summary>Sets the value to compare with in a StringField condition</summary>
        /// <param name="value" type="string"/>>
    }
};

var NumberFieldCondition = function() {
}
cfx.NumberFieldCondition = NumberFieldCondition;
NumberFieldCondition.prototype = {
    getComparison: function () {
        /// <summary>Gets the NumberField comparison condition.</summary>
        /// <returns type="cfx.NumberComparison"/>
        return new NumberComparison();
    },
    setComparison: function (value) {
        /// <summary>Sets the NumberField comparison condition.</summary>
        /// <param name="value" type="cfx.NumberComparison"/>>
    },
    getFromValue: function () {
        /// <summary>Gets the FromValue in a NumberField condition</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFromValue: function (value) {
        /// <summary>Sets the FromValue in a NumberField condition</summary>
        /// <param name="value" type="number"/>>
    },
    getName: function () {
        /// <summary>Gets the name of the Field to use in the comparison in a NumberField condition</summary>
        /// <returns type="string"/>
        return "";
    },
    setName: function (value) {
        /// <summary>Sets the name of the Field to use in the comparison in a NumberField condition</summary>
        /// <param name="value" type="string"/>>
    },
    getUnit: function () {
        /// <summary>Gets the Unit in a NumberField condition</summary>
        /// <returns type="cfx.ConditionUnit"/>
        return new ConditionUnit();
    },
    setUnit: function (value) {
        /// <summary>Sets the Unit in a NumberField condition</summary>
        /// <param name="value" type="cfx.ConditionUnit"/>>
    },
    getValue: function () {
        /// <summary>Gets the value to compare with in a NumberField condition</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value to compare with in a NumberField condition</summary>
        /// <param name="value" type="number"/>>
    }
};

var LegendItemAttributes = function() {
}
cfx.LegendItemAttributes = LegendItemAttributes;
LegendItemAttributes.prototype = {
    getFontStyle: function () {
        /// <summary>Gets the font style for the legend box item.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style for the legend box item.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getInverted: function () {
        /// <summary>Gets a value allowing you to invert the order of the LegendBox Items.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <summary>Sets a value allowing you to invert the order of the LegendBox Items.</summary>
        /// <param name="value" type="bool"/>>
    },
    getMarkerShape: function () {
        /// <summary>Gets the shape of the marker for the Legend item.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Sets the shape of the marker for the Legend item.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getMarkerSize: function () {
        /// <summary>Gets a value controlling the size of the markers for the selected legend item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerSize: function (value) {
        /// <summary>Sets a value controlling the size of the markers for the selected legend item.</summary>
        /// <param name="value" type="number"/>>
    },
    getOrderIndex: function () {
        /// <summary>Gets the index for ordering the legend box items.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOrderIndex: function (value) {
        /// <summary>Sets the index for ordering the legend box items.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Gets a value allowing you to set the text color for the legend item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets a value allowing you to set the text color for the legend item.</summary>
        /// <param name="value" type="String"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value allowing you hide or show the legend item.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value allowing you hide or show the legend item.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var FieldMap = function() {
}
cfx.FieldMap = FieldMap;
FieldMap.prototype = {
    getDisplayName: function () {
        /// <summary>Gets the name of the field which will be displayed by the Chart.</summary>
        /// <returns type="string"/>
        return "";
    },
    setDisplayName: function (value) {
        /// <summary>Sets the name of the field which will be displayed by the Chart.</summary>
        /// <param name="value" type="string"/>>
    },
    getName: function () {
        /// <summary>Gets the name of the ResultSet's field related to the FieldMap.</summary>
        /// <returns type="string"/>
        return "";
    },
    setName: function (value) {
        /// <summary>Sets the name of the ResultSet's field related to the FieldMap.</summary>
        /// <param name="value" type="string"/>>
    },
    getUsage: function () {
        /// <summary>Gets the usage of the related column of the ResultSet.</summary>
        /// <returns type="cfx.FieldUsage"/>
        return new FieldUsage();
    },
    setUsage: function (value) {
        /// <summary>Sets the usage of the related column of the ResultSet.</summary>
        /// <param name="value" type="cfx.FieldUsage"/>>
    }
};

var bS = function() {
}
cfx.bS = bS;
bS.prototype = {

};

var CustomLegendItem = function() {
}
cfx.CustomLegendItem = CustomLegendItem;
CustomLegendItem.prototype = {
    getAlternateColor: function () {
        /// <summary>Gets the background color of a custom legend item marker when a pattern is configured using the Pattern property.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the background color of a custom legend item marker when a pattern is configured using the Pattern property.</summary>
        /// <param name="value" type="String"/>>
    },
    getAttributes: function () {
        /// <summary>Gets the PointAttributes object for the custom legend item.</summary>
        /// <returns type="cfx.PointAttributes"/>
        return new PointAttributes();
    },
    setAttributes: function (value) {
        /// <summary>Sets the PointAttributes object for the custom legend item.</summary>
        /// <param name="value" type="cfx.PointAttributes"/>>
    },
    getBorder: function () {
        /// <summary>Gets a BorderAttributes object allowing you to modify the border properties for this CustomLegendItem.</summary>
        /// <returns type="cfx.cj"/>
        return new cj();
    },
    getColor: function () {
        /// <summary>Gets the Color for the marker of the Custom Legend Item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the Color for the marker of the Custom Legend Item.</summary>
        /// <param name="value" type="String"/>>
    },
    getMarkerShape: function () {
        /// <summary>Represents the shape of the marker.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Represents the shape of the marker.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getPattern: function () {
        /// <summary>Gets a HatchStyle pattern for the marker of a CustomLegendItem.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Sets a HatchStyle pattern for the marker of a CustomLegendItem.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPicture: function () {
        /// <summary>Gets an image to be used as a marker for a CustomLegendItem.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Sets an image to be used as a marker for a CustomLegendItem.</summary>
        /// <param name="value" type="Image"/>>
    },
    getShowLine: function () {
        /// <summary>Gets a value used to display a line marker for a CustomLegendItem.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowLine: function (value) {
        /// <summary>Sets a value used to display a line marker for a CustomLegendItem.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ConditionDataValue = function() {
}
cfx.ConditionDataValue = ConditionDataValue;
ConditionDataValue.prototype = {
    getActive: function () {
        /// <summary>A boolean property indicating whether the specified ConditionDataValue is enabled or disabled.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setActive: function (value) {
        /// <summary>A boolean property indicating whether the specified ConditionDataValue is enabled or disabled.</summary>
        /// <param name="value" type="bool"/>>
    },
    getDataElement: function () {
        /// <summary>Gets the data value that the specified ConditionDataValue will evaluate.</summary>
        /// <returns type="cfx.DataElement"/>
        return new DataElement();
    },
    setDataElement: function (value) {
        /// <summary>Sets the data value that the specified ConditionDataValue will evaluate.</summary>
        /// <param name="value" type="cfx.DataElement"/>>
    },
    getFrom: function () {
        /// <summary>Gets a value indicating the beginning value of the conditional range for a selected ConditionDataValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFrom: function (value) {
        /// <summary>Sets a value indicating the beginning value of the conditional range for a selected ConditionDataValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getFromOpen: function () {
        /// <summary>Gets a value indicating whether or not to include the configured From value in the range.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setFromOpen: function (value) {
        /// <summary>Sets a value indicating whether or not to include the configured From value in the range.</summary>
        /// <param name="value" type="bool"/>>
    },
    getInverse: function () {
        /// <summary>Gets a value indicating whether to reverse the configured To and From attributes for a selected ConditionDataValue object.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverse: function (value) {
        /// <summary>Sets a value indicating whether to reverse the configured To and From attributes for a selected ConditionDataValue object.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSpecialValue: function () {
        /// <summary>Gets the value that is used by the ConditionalDataValue to compare the result of an aggregation formula like first, last, max, min.</summary>
        /// <returns type="cfx.ConditionSpecialValue"/>
        return new ConditionSpecialValue();
    },
    setSpecialValue: function (value) {
        /// <summary>Sets the value that is used by the ConditionalDataValue to compare the result of an aggregation formula like first, last, max, min.</summary>
        /// <param name="value" type="cfx.ConditionSpecialValue"/>>
    },
    getTo: function () {
        /// <summary>Gets a value indicating the ending value of the conditional range for a selected ConditionDataValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTo: function (value) {
        /// <summary>Sets a value indicating the ending value of the conditional range for a selected ConditionDataValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getToOpen: function () {
        /// <summary>Gets a value indicating whether or not to include the configured To value in the range.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setToOpen: function (value) {
        /// <summary>Sets a value indicating whether or not to include the configured To value in the range.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUnit: function () {
        /// <summary>{veb} a value indicating the unit of the conditional data value.</summary>
        /// <returns type="cfx.ConditionUnit"/>
        return new ConditionUnit();
    },
    setUnit: function (value) {
        /// <summary>{veb} a value indicating the unit of the conditional data value.</summary>
        /// <param name="value" type="cfx.ConditionUnit"/>>
    }
};

var bZ = function() {
}
cfx.bZ = bZ;
bZ.prototype = {
    getAverage: function () {
        /// <summary>Returns the average points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getFirst: function () {
        /// <summary>Returns the first points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getHiLowClose: function () {
        /// <summary>Returns the high, low, and close points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getLast: function () {
        /// <summary>Returns the last points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getMax: function () {
        /// <summary>Returns the max points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getMin: function () {
        /// <summary>Returns the min points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    },
    getOpenHiLowClose: function () {
        /// <summary>Returns the open, high, low, and close points set by the CompactedBy property.</summary>
        /// <returns type="cfx.CompactFormulaHandler"/>
        return new CompactFormulaHandler();
    }
};

var b0 = function() {
}
cfx.b0 = b0;
b0.prototype = {

};

var CellAttributes = function() {
}
cfx.CellAttributes = CellAttributes;
CellAttributes.prototype = {
    getBackColor: function () {
        /// <summary>Sets the background color for a particular Cell or entire Row in the DataGrid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the background color for a particular Cell or entire Row in the DataGrid.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderColor: function () {
        /// <summary>Allows you to set the color of the border for a particular Cell or entire Row in the DataGrid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Allows you to set the color of the border for a particular Cell or entire Row in the DataGrid.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderWidth: function () {
        /// <summary>Allows you to set the width of the Cell border in pixels for a particular Cell or entire Row in the DataGrid.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBorderWidth: function (value) {
        /// <summary>Allows you to set the width of the Cell border in pixels for a particular Cell or entire Row in the DataGrid.</summary>
        /// <param name="value" type="number"/>>
    },
    getFontStyle: function () {
        /// <summary>Allows you to set the style of the font for a particular Cell or entire Row in the DataGrid.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Allows you to set the style of the font for a particular Cell or entire Row in the DataGrid.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getTextColor: function () {
        /// <summary>Allows you to set the text color for a particular Cell or entire Row in the DataGrid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Allows you to set the text color for a particular Cell or entire Row in the DataGrid.</summary>
        /// <param name="value" type="String"/>>
    }
};

var CollectionCondition = function() {
}
cfx.CollectionCondition = CollectionCondition;
CollectionCondition.prototype = {
    add: function (condition) {
        /// <param name="condition" type="cfx.object"/>>
    }
};

var OrCondition = function() {
}
cfx.OrCondition = OrCondition;
OrCondition.prototype = {
    add: function (condition) {
        /// <param name="condition" type="cfx.object"/>>
    }
};

var AndCondition = function() {
}
cfx.AndCondition = AndCondition;
AndCondition.prototype = {
    add: function (condition) {
        /// <param name="condition" type="cfx.object"/>>
    }
};

var VectorPyramid = function() {
}
cfx.VectorPyramid = VectorPyramid;
VectorPyramid.prototype = {
    getConic: function () {
        /// <returns type="bool"/>
        return true;
    },
    setConic: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getDistributeHeight: function () {
        /// <returns type="bool"/>
        return true;
    },
    setDistributeHeight: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getFaces: function () {
        /// <returns type="number"/>
        return 0;
    },
    setFaces: function (value) {
        /// <param name="value" type="number"/>>
    },
    getInverted: function () {
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getSeparation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorPie = function() {
}
cfx.VectorPie = VectorPie;
VectorPie.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.PieAnimation"/>
        return new PieAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.PieAnimation"/>>
    },
    getExplodingMode: function () {
        /// <returns type="cfx.ExplodingMode"/>
        return new ExplodingMode();
    },
    setExplodingMode: function (value) {
        /// <param name="value" type="cfx.ExplodingMode"/>>
    },
    getLabelLineBreak: function () {
        /// <returns type="number"/>
        return 0;
    },
    setLabelLineBreak: function (value) {
        /// <param name="value" type="number"/>>
    },
    getLabelsInside: function () {
        /// <returns type="bool"/>
        return true;
    },
    setLabelsInside: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMaximumLabelMargin: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMaximumLabelMargin: function (value) {
        /// <param name="value" type="number"/>>
    },
    getShadows: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShadows: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShowLines: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowLines: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getSliceSeparation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setSliceSeparation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getSquare: function () {
        /// <returns type="bool"/>
        return true;
    },
    setSquare: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getStacked: function () {
        /// <returns type="bool"/>
        return true;
    },
    setStacked: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getStartAngle: function () {
        /// <returns type="number"/>
        return 0;
    },
    setStartAngle: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorDoughnut = function() {
}
cfx.VectorDoughnut = VectorDoughnut;
VectorDoughnut.prototype = {
    getDoughnutThickness: function () {
        /// <returns type="number"/>
        return 0;
    },
    setDoughnutThickness: function (value) {
        /// <param name="value" type="number"/>>
    },
    getAnimationStyle: function () {
        /// <returns type="cfx.PieAnimation"/>
        return new PieAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.PieAnimation"/>>
    },
    getExplodingMode: function () {
        /// <returns type="cfx.ExplodingMode"/>
        return new ExplodingMode();
    },
    setExplodingMode: function (value) {
        /// <param name="value" type="cfx.ExplodingMode"/>>
    },
    getLabelLineBreak: function () {
        /// <returns type="number"/>
        return 0;
    },
    setLabelLineBreak: function (value) {
        /// <param name="value" type="number"/>>
    },
    getLabelsInside: function () {
        /// <returns type="bool"/>
        return true;
    },
    setLabelsInside: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMaximumLabelMargin: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMaximumLabelMargin: function (value) {
        /// <param name="value" type="number"/>>
    },
    getShadows: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShadows: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShowLines: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowLines: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getSliceSeparation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setSliceSeparation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getSquare: function () {
        /// <returns type="bool"/>
        return true;
    },
    setSquare: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getStacked: function () {
        /// <returns type="bool"/>
        return true;
    },
    setStacked: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getStartAngle: function () {
        /// <returns type="number"/>
        return 0;
    },
    setStartAngle: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorBubble = function() {
}
cfx.VectorBubble = VectorBubble;
VectorBubble.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.BubbleAnimation"/>
        return new BubbleAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.BubbleAnimation"/>>
    },
    getMaximumBubbleSize: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMaximumBubbleSize: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorBar = function() {
}
cfx.VectorBar = VectorBar;
VectorBar.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.BarAnimation"/>
        return new BarAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.BarAnimation"/>>
    },
    getIntraSeriesGap: function () {
        /// <returns type="number"/>
        return 0;
    },
    setIntraSeriesGap: function (value) {
        /// <param name="value" type="number"/>>
    },
    getOverlap: function () {
        /// <returns type="bool"/>
        return true;
    },
    setOverlap: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorGantt = function() {
}
cfx.VectorGantt = VectorGantt;
VectorGantt.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.BarAnimation"/>
        return new BarAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.BarAnimation"/>>
    },
    getIntraSeriesGap: function () {
        /// <returns type="number"/>
        return 0;
    },
    setIntraSeriesGap: function (value) {
        /// <param name="value" type="number"/>>
    },
    getOverlap: function () {
        /// <returns type="bool"/>
        return true;
    },
    setOverlap: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorCube = function() {
}
cfx.VectorCube = VectorCube;
VectorCube.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.BarAnimation"/>
        return new BarAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.BarAnimation"/>>
    },
    getIntraSeriesGap: function () {
        /// <returns type="number"/>
        return 0;
    },
    setIntraSeriesGap: function (value) {
        /// <param name="value" type="number"/>>
    },
    getOverlap: function () {
        /// <returns type="bool"/>
        return true;
    },
    setOverlap: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorLine = function() {
}
cfx.VectorLine = VectorLine;
VectorLine.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getCollapseDistance: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCollapseDistance: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorStepLine = function() {
}
cfx.VectorStepLine = VectorStepLine;
VectorStepLine.prototype = {
    getStepStyle: function () {
        /// <returns type="cfx.StepStyle"/>
        return new StepStyle();
    },
    setStepStyle: function (value) {
        /// <param name="value" type="cfx.StepStyle"/>>
    },
    getAnimationStyle: function () {
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getCollapseDistance: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCollapseDistance: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorCurve = function() {
}
cfx.VectorCurve = VectorCurve;
VectorCurve.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getCollapseDistance: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCollapseDistance: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorArea = function() {
}
cfx.VectorArea = VectorArea;
VectorArea.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getCollapseDistance: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCollapseDistance: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var VectorCurveArea = function() {
}
cfx.VectorCurveArea = VectorCurveArea;
VectorCurveArea.prototype = {
    getAnimationStyle: function () {
        /// <returns type="cfx.LineAnimation"/>
        return new LineAnimation();
    },
    setAnimationStyle: function (value) {
        /// <param name="value" type="cfx.LineAnimation"/>>
    },
    getCollapseDistance: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCollapseDistance: function (value) {
        /// <param name="value" type="number"/>>
    },
    getCacheResources: function () {
        /// <returns type="bool"/>
        return true;
    },
    setCacheResources: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var b6 = function() {
}
cfx.b6 = b6;
b6.prototype = {
    getItemList: function (list) {
        /// <param name="list" type="cfx.object"/>>
        /// <returns type="cfx.LegendItemAttributes"/>
        return new LegendItemAttributes();
    },
    setItemList: function (list, value) {
        /// <param name="list" type="cfx.object"/>>
        /// <param name="value" type="cfx.LegendItemAttributes"/>>
    },
    getItem: function (list, index) {
        /// <param name="list" type="cfx.object"/>>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.LegendItemAttributes"/>
        return new LegendItemAttributes();
    },
    setItem: function (list, index, value) {
        /// <param name="list" type="cfx.object"/>>
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.LegendItemAttributes"/>>
    },
    removeItemFromList: function (list, index) {
        /// <param name="list" type="cfx.object"/>>
        /// <param name="index" type="number"/>>
    }
};

var b$ = function() {
}
cfx.b$ = b$;
b$.prototype = {
    getRow: function (row) {
        /// <param name="row" type="number"/>>
        /// <returns type="cfx.CellAttributes"/>
        return new CellAttributes();
    },
    setRow: function (row, value) {
        /// <param name="row" type="number"/>>
        /// <param name="value" type="cfx.CellAttributes"/>>
    },
    getItem: function (row, column) {
        /// <param name="row" type="number"/>>
        /// <param name="column" type="number"/>>
        /// <returns type="cfx.CellAttributes"/>
        return new CellAttributes();
    },
    setItem: function (row, column, value) {
        /// <param name="row" type="number"/>>
        /// <param name="column" type="number"/>>
        /// <param name="value" type="cfx.CellAttributes"/>>
    }
};

var ca = function() {
}
cfx.ca = ca;
ca.prototype = {
    getAutoSize: function () {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoSize: function (value) {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBackColor: function () {
        /// <summary>Gets a value for the background color of a dockable bar.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets a value for the background color of a dockable bar.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderObject: function () {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBorderObject: function (value) {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <param name="value" type="cfx.object"/>>
    }
};

var cb = function() {
}
cfx.cb = cb;
cb.prototype = {
    getBackColorData: function () {
        /// <summary>Sets the background color of the cells on the data grid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColorData: function (value) {
        /// <summary>Sets the background color of the cells on the data grid.</summary>
        /// <param name="value" type="String"/>>
    },
    getBackColorDataAlternate: function () {
        /// <summary>Assigns the alternate color for displaying the DataGrid rows or columns.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColorDataAlternate: function (value) {
        /// <summary>Assigns the alternate color for displaying the DataGrid rows or columns.</summary>
        /// <param name="value" type="String"/>>
    },
    getBackColorHeader: function () {
        /// <summary>Sets the background color of the header for the Data Editor.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColorHeader: function (value) {
        /// <summary>Sets the background color of the header for the Data Editor.</summary>
        /// <param name="value" type="String"/>>
    },
    getCells: function () {
        /// <returns type="cfx.b$"/>
        return new b$();
    },
    getContentLayout: function () {
        /// <summary>Allows you to align the data editor in the bottom of the chart area.</summary>
        /// <returns type="cfx.ContentLayout"/>
        return new ContentLayout();
    },
    setContentLayout: function (value) {
        /// <summary>Allows you to align the data editor in the bottom of the chart area.</summary>
        /// <param name="value" type="cfx.ContentLayout"/>>
    },
    getFont: function () {
        /// <summary>Allows you to set the font used throughout the data grid.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to set the font used throughout the data grid.</summary>
        /// <param name="value" type="Font"/>>
    },
    getHideXValues: function () {
        /// <summary>Used to hide the XValues in the data editor of an XY plot chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setHideXValues: function (value) {
        /// <summary>Used to hide the XValues in the data editor of an XY plot chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getHorizontalGridColor: function () {
        /// <summary>Allows you to set the Horizontal color for the gridlines displayed in the data grid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setHorizontalGridColor: function (value) {
        /// <summary>Allows you to set the Horizontal color for the gridlines displayed in the data grid.</summary>
        /// <param name="value" type="String"/>>
    },
    getInterlaced: function () {
        /// <summary>Alternates the background color of on the data grid to improve readability.</summary>
        /// <returns type="cfx.Interlaced"/>
        return new Interlaced();
    },
    setInterlaced: function (value) {
        /// <summary>Alternates the background color of on the data grid to improve readability.</summary>
        /// <param name="value" type="cfx.Interlaced"/>>
    },
    getMaxSizePercentage: function () {
        /// <summary>Allows you to specify the maximum percentage of the chart area the data grid may occupy.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxSizePercentage: function (value) {
        /// <summary>Allows you to specify the maximum percentage of the chart area the data grid may occupy.</summary>
        /// <param name="value" type="number"/>>
    },
    getReadOnly: function () {
        /// <summary>Permits values to be changed through the data grid.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setReadOnly: function (value) {
        /// <summary>Permits values to be changed through the data grid.</summary>
        /// <param name="value" type="bool"/>>
    },
    getScrollPosition: function () {
        /// <summary>Scrolls the data horizontally to the specific column in the Grid.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScrollPosition: function (value) {
        /// <summary>Scrolls the data horizontally to the specific column in the Grid.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollSize: function () {
        /// <summary>Returns the number of scrolls in the DataEditor based on the scroll view configuration.(Read only)</summary>
        /// <returns type="number"/>
        return 0;
    },
    getShowHeader: function () {
        /// <summary>Gets a value indicating the header of the columns should be visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowHeader: function (value) {
        /// <summary>Sets a value indicating the header of the columns should be visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowHiddenSeries: function () {
        /// <summary>Gets a value indicating hidden series should be visible in data editor.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowHiddenSeries: function (value) {
        /// <summary>Sets a value indicating hidden series should be visible in data editor.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowMarkers: function () {
        /// <summary>Gets a value indicating whether series markers should be visible in the series headers.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowMarkers: function (value) {
        /// <summary>Sets a value indicating whether series markers should be visible in the series headers.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColorData: function () {
        /// <summary>Sets the text color of the cells on the data grid.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColorData: function (value) {
        /// <summary>Sets the text color of the cells on the data grid.</summary>
        /// <param name="value" type="String"/>>
    },
    getTextColorDataAlternate: function () {
        /// <summary>Sets the alternate text color for text in the data grid cells.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColorDataAlternate: function (value) {
        /// <summary>Sets the alternate text color for text in the data grid cells.</summary>
        /// <param name="value" type="String"/>>
    },
    getTextColorHeader: function () {
        /// <summary>Gets the text color of the headers on the data editor.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColorHeader: function (value) {
        /// <summary>Sets the text color of the headers on the data editor.</summary>
        /// <param name="value" type="String"/>>
    },
    getUseRawData: function () {
        /// <summary>Gets a value indicating whether to use raw data or use calculated values in the DataEditor.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseRawData: function (value) {
        /// <summary>Sets a value indicating whether to use raw data or use calculated values in the DataEditor.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVerticalGridColor: function () {
        /// <summary>Allows you to select the Vertical line color for the gridline displayed at the data editor box.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setVerticalGridColor: function (value) {
        /// <summary>Allows you to select the Vertical line color for the gridline displayed at the data editor box.</summary>
        /// <param name="value" type="String"/>>
    },
    getXValuesAsHeaders: function () {
        /// <summary>Gets a value instructing that XValues be used as the headers in the data editor.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setXValuesAsHeaders: function (value) {
        /// <summary>Sets a value instructing that XValues be used as the headers in the data editor.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAutoSize: function () {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoSize: function (value) {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBackColor: function () {
        /// <summary>Gets a value for the background color of a dockable bar.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets a value for the background color of a dockable bar.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderObject: function () {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBorderObject: function (value) {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <param name="value" type="cfx.object"/>>
    }
};

var LegendBox = function() {
}
cfx.LegendBox = LegendBox;
LegendBox.prototype = {
    getContentLayout: function () {
        /// <summary>Allows you to align the content for the legend box.</summary>
        /// <returns type="cfx.ContentLayout"/>
        return new ContentLayout();
    },
    setContentLayout: function (value) {
        /// <summary>Allows you to align the content for the legend box.</summary>
        /// <param name="value" type="cfx.ContentLayout"/>>
    },
    getCustomItems: function () {
        /// <returns type="cfx.cV"/>
        return new cV();
    },
    getFont: function () {
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <param name="value" type="Font"/>>
    },
    getItemAttributes: function () {
        /// <returns type="cfx.b6"/>
        return new b6();
    },
    getLineSpacing: function () {
        /// <summary>This property specifies the LineSpacing for a legend that is docked to the left or right only, not at the top or bottom.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLineSpacing: function (value) {
        /// <summary>This property specifies the LineSpacing for a legend that is docked to the left or right only, not at the top or bottom.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarginX: function () {
        /// <summary>Gets a value specifying the margin width for a LegendBox.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarginX: function (value) {
        /// <summary>Sets a value specifying the margin width for a LegendBox.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarginY: function () {
        /// <summary>Gets a value specifying the margin height for a LegendBox.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarginY: function (value) {
        /// <summary>Sets a value specifying the margin height for a LegendBox.</summary>
        /// <param name="value" type="number"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Allows the legend box margins to go outside of the chart's drawing area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Allows the legend box margins to go outside of the chart's drawing area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStyle: function () {
        /// <summary>Gets the style of the legend box.</summary>
        /// <returns type="cfx.LegendBoxStyles"/>
        return new LegendBoxStyles();
    },
    setStyle: function (value) {
        /// <summary>Sets the style of the legend box.</summary>
        /// <param name="value" type="cfx.LegendBoxStyles"/>>
    },
    getTextColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getTitles: function () {
        /// <returns type="cfx.cM"/>
        return new cM();
    },
    sizeToFit: function () {
    },
    getAutoSize: function () {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoSize: function (value) {
        /// <summary>Allows jChartFX to calculate the best size according to the tool position.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBackColor: function () {
        /// <summary>Gets a value for the background color of a dockable bar.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets a value for the background color of a dockable bar.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderObject: function () {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBorderObject: function (value) {
        /// <summary>Provides access to the BorderObject.</summary>
        /// <param name="value" type="cfx.object"/>>
    }
};

var cg = function() {
}
cfx.cg = cg;
cg.prototype = {
    getItem: function (n) {
        /// <param name="n" type="number"/>>
        /// <returns type="?"/>
        return new ?();
    },
    add: function (obj) {
        /// <param name="obj" type="?"/>>
    },
    clear: function () {
    },
    find: function (type) {
        /// <param name="type" type="Type"/>>
        /// <returns type="?"/>
        return new ?();
    },
    indexOf: function (extension) {
        /// <param name="extension" type="?"/>>
        /// <returns type="number"/>
        return 0;
    },
    remove: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var ZoomAttributes = function() {
}
cfx.ZoomAttributes = ZoomAttributes;
ZoomAttributes.prototype = {
    getUseSimpleScrollBars: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSimpleScrollBars: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    }
};

var MenuAttributes = function() {
}
cfx.MenuAttributes = MenuAttributes;
MenuAttributes.prototype = {
    getVisible: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ci = function() {
}
cfx.ci = ci;
ci.prototype = {
    getEndCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setEndCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStartCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setStartCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStyle: function () {
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <param name="value" type="DashStyle"/>>
    },
    getWidth: function () {
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var cj = function() {
}
cfx.cj = cj;
cj.prototype = {
    getBetweenSegments: function () {
        /// <summary>Gets a property which makes the border to be shown between segments.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setBetweenSegments: function (value) {
        /// <summary>Sets a property which makes the border to be shown between segments.</summary>
        /// <param name="value" type="bool"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of the border of a point marker.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of the border of a point marker.</summary>
        /// <param name="value" type="String"/>>
    },
    getEffect: function () {
        /// <summary>Gets the BorderEffect for the border of a point marker.</summary>
        /// <returns type="cfx.BorderEffect"/>
        return new BorderEffect();
    },
    setEffect: function (value) {
        /// <summary>Sets the BorderEffect for the border of a point marker.</summary>
        /// <param name="value" type="cfx.BorderEffect"/>>
    },
    getStyle: function () {
        /// <summary>Represents the style of the line for the border of a point marker.</summary>
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <summary>Represents the style of the line for the border of a point marker.</summary>
        /// <param name="value" type="DashStyle"/>>
    },
    getUseForLines: function () {
        /// <summary>Gets a property which applies the Border Attributes to the lines of a Line Chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseForLines: function (value) {
        /// <summary>Sets a property which applies the Border Attributes to the lines of a Line Chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value making the border visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value making the border visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets a value in pixels.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets a value in pixels.</summary>
        /// <param name="value" type="number"/>>
    }
};

var ck = function() {
}
cfx.ck = ck;
ck.prototype = {
    getAlignment: function () {
        /// <summary>Gets the vertical alignment for the point label.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the vertical alignment for the point label.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAngle: function () {
        /// <summary>Gets the angle of the point label.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAngle: function (value) {
        /// <summary>Sets the angle of the point label.</summary>
        /// <param name="value" type="number"/>>
    },
    getBackColor: function () {
        /// <summary>Gets the backgrond color of the point label.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the backgrond color of the point label.</summary>
        /// <param name="value" type="String"/>>
    },
    getBackgroundVisible: function () {
        /// <summary>Gets a value indicating if the background of the point labels should be displayed or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setBackgroundVisible: function (value) {
        /// <summary>Sets a value indicating if the background of the point labels should be displayed or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBorderColor: function () {
        /// <summary>Gets the border color of the point label.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of the point label.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderWidth: function () {
        /// <summary>Gets a value indicating the width of the border surrounding the point label.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBorderWidth: function (value) {
        /// <summary>Sets a value indicating the width of the border surrounding the point label.</summary>
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Gets a Font object to use as rendering font for the point label.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets a Font object to use as rendering font for the point label.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <summary>Gets a string pattern mask used to format the label.</summary>
        /// <returns type="string"/>
        return "";
    },
    setFormat: function (value) {
        /// <summary>Sets a string pattern mask used to format the label.</summary>
        /// <param name="value" type="string"/>>
    },
    getLineAlignment: function () {
        /// <summary>Gets the horizontal alignment for the point label.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <summary>Sets the horizontal alignment for the point label.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getOffset: function () {
        /// <summary>Allows you to customize the point label position by configuring its coordinates.</summary>
        /// <returns type="Point"/>
        return new Point();
    },
    setOffset: function (value) {
        /// <summary>Allows you to customize the point label position by configuring its coordinates.</summary>
        /// <param name="value" type="Point"/>>
    },
    getRichText: function () {
        /// <summary>Gets a value indicating the Text will be treated as RichText.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRichText: function (value) {
        /// <summary>Sets a value indicating the Text will be treated as RichText.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets a value for the point label color.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets a value for the point label color.</summary>
        /// <param name="value" type="String"/>>
    },
    getTextInsideColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setTextInsideColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value indicating if point label should be displayed or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value indicating if point label should be displayed or not.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var PointAttributes = function() {
}
cfx.PointAttributes = PointAttributes;
PointAttributes.prototype = {
    getAlternateColor: function () {
        /// <summary>Gets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <param name="value" type="String"/>>
    },
    getBarShape: function () {
        /// <summary>Gets the Shape for the Bars.</summary>
        /// <returns type="cfx.BarShape"/>
        return new BarShape();
    },
    setBarShape: function (value) {
        /// <summary>Sets the Shape for the Bars.</summary>
        /// <param name="value" type="cfx.BarShape"/>>
    },
    getBorder: function () {
        /// <summary>Provides access to the border attributes object.</summary>
        /// <returns type="cfx.cj"/>
        return new cj();
    },
    getColor: function () {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillMode: function () {
        /// <summary>Gets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <returns type="cfx.FillMode"/>
        return new FillMode();
    },
    setFillMode: function (value) {
        /// <summary>Sets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <param name="value" type="cfx.FillMode"/>>
    },
    getLine: function () {
        /// <summary>Gets the LineAttributes object for the particular point.</summary>
        /// <returns type="cfx.ci"/>
        return new ci();
    },
    getMarkerShape: function () {
        /// <summary>Gets the the type used to paint markers for the selected item.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Sets the the type used to paint markers for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getMarkerSize: function () {
        /// <summary>Gets a value controlling the size of the markers for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerSize: function (value) {
        /// <summary>Sets a value controlling the size of the markers for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarkerStyle: function () {
        /// <summary>Gets the markers style for the selected item.</summary>
        /// <returns type="cfx.MarkerStyle"/>
        return new MarkerStyle();
    },
    setMarkerStyle: function (value) {
        /// <summary>Sets the markers style for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerStyle"/>>
    },
    getMarkerTemplate: function () {
        /// <summary>Gets the the template used to paint markers for the selected item.</summary>
        /// <returns type="string"/>
        return "";
    },
    setMarkerTemplate: function (value) {
        /// <summary>Sets the the template used to paint markers for the selected item.</summary>
        /// <param name="value" type="string"/>>
    },
    getMarkerVisible: function () {
        /// <returns type="bool"/>
        return true;
    },
    setMarkerVisible: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMarkerWidth: function () {
        /// <summary>Gets the marker width for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerWidth: function (value) {
        /// <summary>Sets the marker width for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getPattern: function () {
        /// <summary>Gets a value specifying the pattern for the selected item.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Sets a value specifying the pattern for the selected item.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPicture: function () {
        /// <summary>Gets a value specifying the picture associated to the selected item.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Sets a value specifying the picture associated to the selected item.</summary>
        /// <param name="value" type="Image"/>>
    },
    getPointLabels: function () {
        /// <summary>Provides access to PointLabelAttributes allowing for the manipulation of attributes pertaining to the point label.</summary>
        /// <returns type="cfx.ck"/>
        return new ck();
    },
    getSeparateSlice: function () {
        /// <summary>Gets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparateSlice: function (value) {
        /// <summary>Sets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets and object for the specific item.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Sets and object for the specific item.</summary>
        /// <param name="value" type="?"/>>
    },
    getText: function () {
        /// <summary>Gets a value for labeling the point or series attribute.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets a value for labeling the point or series attribute.</summary>
        /// <param name="value" type="string"/>>
    },
    getVolume: function () {
        /// <summary>Gets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setVolume: function (value) {
        /// <summary>Sets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <param name="value" type="number"/>>
    }
};

var ConditionalAttributes = function() {
}
cfx.ConditionalAttributes = ConditionalAttributes;
ConditionalAttributes.prototype = {
    getAlternateTag: function () {
        /// <returns type="string"/>
        return "";
    },
    setAlternateTag: function (value) {
        /// <param name="value" type="string"/>>
    },
    getCondition: function () {
        /// <summary>Returns a Condition object for the specified ConditionalAttributes object.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setCondition: function (value) {
        /// <summary>Returns a Condition object for the specified ConditionalAttributes object.</summary>
        /// <param name="value" type="cfx.object"/>>
    },
    getIndex: function () {
        /// <returns type="number"/>
        return 0;
    },
    getInterpolateColor: function () {
        /// <summary>Allows to enable or disable a color interpolation within a condition.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInterpolateColor: function (value) {
        /// <summary>Allows to enable or disable a color interpolation within a condition.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeries: function () {
        /// <summary>Gets a value indicating which series index the ConditionalAttribute will be applied to.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeries: function (value) {
        /// <summary>Sets a value indicating which series index the ConditionalAttribute will be applied to.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value indicating the ConditionalAttributes object should be shown or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value indicating the ConditionalAttributes object should be shown or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAlternateColor: function () {
        /// <summary>Gets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <param name="value" type="String"/>>
    },
    getBarShape: function () {
        /// <summary>Gets the Shape for the Bars.</summary>
        /// <returns type="cfx.BarShape"/>
        return new BarShape();
    },
    setBarShape: function (value) {
        /// <summary>Sets the Shape for the Bars.</summary>
        /// <param name="value" type="cfx.BarShape"/>>
    },
    getBorder: function () {
        /// <summary>Provides access to the border attributes object.</summary>
        /// <returns type="cfx.cj"/>
        return new cj();
    },
    getColor: function () {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillMode: function () {
        /// <summary>Gets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <returns type="cfx.FillMode"/>
        return new FillMode();
    },
    setFillMode: function (value) {
        /// <summary>Sets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <param name="value" type="cfx.FillMode"/>>
    },
    getLine: function () {
        /// <summary>Gets the LineAttributes object for the particular point.</summary>
        /// <returns type="cfx.ci"/>
        return new ci();
    },
    getMarkerShape: function () {
        /// <summary>Gets the the type used to paint markers for the selected item.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Sets the the type used to paint markers for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getMarkerSize: function () {
        /// <summary>Gets a value controlling the size of the markers for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerSize: function (value) {
        /// <summary>Sets a value controlling the size of the markers for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarkerStyle: function () {
        /// <summary>Gets the markers style for the selected item.</summary>
        /// <returns type="cfx.MarkerStyle"/>
        return new MarkerStyle();
    },
    setMarkerStyle: function (value) {
        /// <summary>Sets the markers style for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerStyle"/>>
    },
    getMarkerTemplate: function () {
        /// <summary>Gets the the template used to paint markers for the selected item.</summary>
        /// <returns type="string"/>
        return "";
    },
    setMarkerTemplate: function (value) {
        /// <summary>Sets the the template used to paint markers for the selected item.</summary>
        /// <param name="value" type="string"/>>
    },
    getMarkerVisible: function () {
        /// <returns type="bool"/>
        return true;
    },
    setMarkerVisible: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMarkerWidth: function () {
        /// <summary>Gets the marker width for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerWidth: function (value) {
        /// <summary>Sets the marker width for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getPattern: function () {
        /// <summary>Gets a value specifying the pattern for the selected item.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Sets a value specifying the pattern for the selected item.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPicture: function () {
        /// <summary>Gets a value specifying the picture associated to the selected item.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Sets a value specifying the picture associated to the selected item.</summary>
        /// <param name="value" type="Image"/>>
    },
    getPointLabels: function () {
        /// <summary>Provides access to PointLabelAttributes allowing for the manipulation of attributes pertaining to the point label.</summary>
        /// <returns type="cfx.ck"/>
        return new ck();
    },
    getSeparateSlice: function () {
        /// <summary>Gets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparateSlice: function (value) {
        /// <summary>Sets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets and object for the specific item.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Sets and object for the specific item.</summary>
        /// <param name="value" type="?"/>>
    },
    getText: function () {
        /// <summary>Gets a value for labeling the point or series attribute.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets a value for labeling the point or series attribute.</summary>
        /// <param name="value" type="string"/>>
    },
    getVolume: function () {
        /// <summary>Gets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setVolume: function (value) {
        /// <summary>Sets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <param name="value" type="number"/>>
    }
};

var SeriesAttributes = function() {
}
cfx.SeriesAttributes = SeriesAttributes;
SeriesAttributes.prototype = {
    getAxisX: function () {
        /// <summary>Gets a value indicating the AxisX the series is connected to.</summary>
        /// <returns type="cfx.AxisX"/>
        return new AxisX();
    },
    setAxisX: function (value) {
        /// <summary>Sets a value indicating the AxisX the series is connected to.</summary>
        /// <param name="value" type="cfx.AxisX"/>>
    },
    getAxisY: function () {
        /// <summary>Gets a value indicating where the AxisY the series is connected to.</summary>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    setAxisY: function (value) {
        /// <summary>Sets a value indicating where the AxisY the series is connected to.</summary>
        /// <param name="value" type="cfx.AxisY"/>>
    },
    getColor: function () {
        /// <summary>Gets a Color for the selected series.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets a Color for the selected series.</summary>
        /// <param name="value" type="String"/>>
    },
    getGallery: function () {
        /// <summary>Gets a gallery type for a particular series. All chart types are available in both 2D and 3D modes.</summary>
        /// <returns type="cfx.Gallery"/>
        return new Gallery();
    },
    setGallery: function (value) {
        /// <summary>Sets a gallery type for a particular series. All chart types are available in both 2D and 3D modes.</summary>
        /// <param name="value" type="cfx.Gallery"/>>
    },
    getGalleryAttributes: function () {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setGalleryAttributes: function (value) {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart.</summary>
        /// <param name="value" type="?"/>>
    },
    getMarkerFont: function () {
        /// <summary>Gets a wingding font for use as marker shapes.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setMarkerFont: function (value) {
        /// <summary>Sets a wingding font for use as marker shapes.</summary>
        /// <param name="value" type="Font"/>>
    },
    getMarkerStep: function () {
        /// <summary>Controls how frequently point markers are shown in the selected series.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerStep: function (value) {
        /// <summary>Controls how frequently point markers are shown in the selected series.</summary>
        /// <param name="value" type="number"/>>
    },
    getOriginalPosition: function () {
        /// <summary>Returns the original position of the item in the SeriesAttributes Collection.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOriginalPosition: function (value) {
        /// <summary>Returns the original position of the item in the SeriesAttributes Collection.</summary>
        /// <param name="value" type="number"/>>
    },
    getPane: function () {
        /// <summary>Gets the Pane which the series belongs to.</summary>
        /// <returns type="cfx.Pane"/>
        return new Pane();
    },
    setPane: function (value) {
        /// <summary>Sets the Pane which the series belongs to.</summary>
        /// <param name="value" type="cfx.Pane"/>>
    },
    getStacked: function () {
        /// <summary>Gets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setStacked: function (value) {
        /// <summary>Sets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value allowing you to show or hide the series.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value allowing you to show or hide the series.</summary>
        /// <param name="value" type="bool"/>>
    },
    bringToFront: function () {
    },
    sendToBack: function () {
    },
    getAlternateColor: function () {
        /// <summary>Gets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <param name="value" type="String"/>>
    },
    getBarShape: function () {
        /// <summary>Gets the Shape for the Bars.</summary>
        /// <returns type="cfx.BarShape"/>
        return new BarShape();
    },
    setBarShape: function (value) {
        /// <summary>Sets the Shape for the Bars.</summary>
        /// <param name="value" type="cfx.BarShape"/>>
    },
    getBorder: function () {
        /// <summary>Provides access to the border attributes object.</summary>
        /// <returns type="cfx.cj"/>
        return new cj();
    },
    getColor: function () {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillMode: function () {
        /// <summary>Gets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <returns type="cfx.FillMode"/>
        return new FillMode();
    },
    setFillMode: function (value) {
        /// <summary>Sets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <param name="value" type="cfx.FillMode"/>>
    },
    getLine: function () {
        /// <summary>Gets the LineAttributes object for the particular point.</summary>
        /// <returns type="cfx.ci"/>
        return new ci();
    },
    getMarkerShape: function () {
        /// <summary>Gets the the type used to paint markers for the selected item.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Sets the the type used to paint markers for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getMarkerSize: function () {
        /// <summary>Gets a value controlling the size of the markers for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerSize: function (value) {
        /// <summary>Sets a value controlling the size of the markers for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarkerStyle: function () {
        /// <summary>Gets the markers style for the selected item.</summary>
        /// <returns type="cfx.MarkerStyle"/>
        return new MarkerStyle();
    },
    setMarkerStyle: function (value) {
        /// <summary>Sets the markers style for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerStyle"/>>
    },
    getMarkerTemplate: function () {
        /// <summary>Gets the the template used to paint markers for the selected item.</summary>
        /// <returns type="string"/>
        return "";
    },
    setMarkerTemplate: function (value) {
        /// <summary>Sets the the template used to paint markers for the selected item.</summary>
        /// <param name="value" type="string"/>>
    },
    getMarkerVisible: function () {
        /// <returns type="bool"/>
        return true;
    },
    setMarkerVisible: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMarkerWidth: function () {
        /// <summary>Gets the marker width for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerWidth: function (value) {
        /// <summary>Sets the marker width for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getPattern: function () {
        /// <summary>Gets a value specifying the pattern for the selected item.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Sets a value specifying the pattern for the selected item.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPicture: function () {
        /// <summary>Gets a value specifying the picture associated to the selected item.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Sets a value specifying the picture associated to the selected item.</summary>
        /// <param name="value" type="Image"/>>
    },
    getPointLabels: function () {
        /// <summary>Provides access to PointLabelAttributes allowing for the manipulation of attributes pertaining to the point label.</summary>
        /// <returns type="cfx.ck"/>
        return new ck();
    },
    getSeparateSlice: function () {
        /// <summary>Gets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparateSlice: function (value) {
        /// <summary>Sets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets and object for the specific item.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Sets and object for the specific item.</summary>
        /// <param name="value" type="?"/>>
    },
    getText: function () {
        /// <summary>Gets a value for labeling the point or series attribute.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets a value for labeling the point or series attribute.</summary>
        /// <param name="value" type="string"/>>
    },
    getVolume: function () {
        /// <summary>Gets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setVolume: function (value) {
        /// <summary>Sets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <param name="value" type="number"/>>
    }
};

var cn = function() {
}
cfx.cn = cn;
cn.prototype = {
    getGallery: function () {
        /// <summary>Gets the chart type for all Series.</summary>
        /// <returns type="cfx.Gallery"/>
        return new Gallery();
    },
    setGallery: function (value) {
        /// <summary>Sets the chart type for all Series.</summary>
        /// <param name="value" type="cfx.Gallery"/>>
    },
    getHorizontal: function () {
        /// <summary>Gets a value specifying to transpose X and Y axes in a chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setHorizontal: function (value) {
        /// <summary>Sets a value specifying to transpose X and Y axes in a chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getMultipleColors: function () {
        /// <summary>Gets the Multiple colors to allow for independently colored data points.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setMultipleColors: function (value) {
        /// <summary>Sets the Multiple colors to allow for independently colored data points.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStackedStyle: function () {
        /// <returns type="cfx.Stacked"/>
        return new Stacked();
    },
    setStackedStyle: function (value) {
        /// <param name="value" type="cfx.Stacked"/>>
    },
    getStackedLabels: function () {
        /// <returns type="cfx.ck"/>
        return new ck();
    },
    getAxisX: function () {
        /// <summary>Gets a value indicating the AxisX the series is connected to.</summary>
        /// <returns type="cfx.AxisX"/>
        return new AxisX();
    },
    setAxisX: function (value) {
        /// <summary>Sets a value indicating the AxisX the series is connected to.</summary>
        /// <param name="value" type="cfx.AxisX"/>>
    },
    getAxisY: function () {
        /// <summary>Gets a value indicating where the AxisY the series is connected to.</summary>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    setAxisY: function (value) {
        /// <summary>Sets a value indicating where the AxisY the series is connected to.</summary>
        /// <param name="value" type="cfx.AxisY"/>>
    },
    getColor: function () {
        /// <summary>Gets a Color for the selected series.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets a Color for the selected series.</summary>
        /// <param name="value" type="String"/>>
    },
    getGallery: function () {
        /// <summary>Gets a gallery type for a particular series. All chart types are available in both 2D and 3D modes.</summary>
        /// <returns type="cfx.Gallery"/>
        return new Gallery();
    },
    setGallery: function (value) {
        /// <summary>Sets a gallery type for a particular series. All chart types are available in both 2D and 3D modes.</summary>
        /// <param name="value" type="cfx.Gallery"/>>
    },
    getGalleryAttributes: function () {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setGalleryAttributes: function (value) {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart.</summary>
        /// <param name="value" type="?"/>>
    },
    getMarkerFont: function () {
        /// <summary>Gets a wingding font for use as marker shapes.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setMarkerFont: function (value) {
        /// <summary>Sets a wingding font for use as marker shapes.</summary>
        /// <param name="value" type="Font"/>>
    },
    getMarkerStep: function () {
        /// <summary>Controls how frequently point markers are shown in the selected series.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerStep: function (value) {
        /// <summary>Controls how frequently point markers are shown in the selected series.</summary>
        /// <param name="value" type="number"/>>
    },
    getOriginalPosition: function () {
        /// <summary>Returns the original position of the item in the SeriesAttributes Collection.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOriginalPosition: function (value) {
        /// <summary>Returns the original position of the item in the SeriesAttributes Collection.</summary>
        /// <param name="value" type="number"/>>
    },
    getPane: function () {
        /// <summary>Gets the Pane which the series belongs to.</summary>
        /// <returns type="cfx.Pane"/>
        return new Pane();
    },
    setPane: function (value) {
        /// <summary>Sets the Pane which the series belongs to.</summary>
        /// <param name="value" type="cfx.Pane"/>>
    },
    getStacked: function () {
        /// <summary>Gets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setStacked: function (value) {
        /// <summary>Sets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value allowing you to show or hide the series.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value allowing you to show or hide the series.</summary>
        /// <param name="value" type="bool"/>>
    },
    bringToFront: function () {
    },
    sendToBack: function () {
    },
    getAlternateColor: function () {
        /// <summary>Gets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color for a selected item when using gradient FillMode.</summary>
        /// <param name="value" type="String"/>>
    },
    getBarShape: function () {
        /// <summary>Gets the Shape for the Bars.</summary>
        /// <returns type="cfx.BarShape"/>
        return new BarShape();
    },
    setBarShape: function (value) {
        /// <summary>Sets the Shape for the Bars.</summary>
        /// <param name="value" type="cfx.BarShape"/>>
    },
    getBorder: function () {
        /// <summary>Provides access to the border attributes object.</summary>
        /// <returns type="cfx.cj"/>
        return new cj();
    },
    getColor: function () {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Allows you to set a color for the selected item.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillMode: function () {
        /// <summary>Gets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <returns type="cfx.FillMode"/>
        return new FillMode();
    },
    setFillMode: function (value) {
        /// <summary>Sets a value indicating how jChartFX should fill the area representing the point.</summary>
        /// <param name="value" type="cfx.FillMode"/>>
    },
    getLine: function () {
        /// <summary>Gets the LineAttributes object for the particular point.</summary>
        /// <returns type="cfx.ci"/>
        return new ci();
    },
    getMarkerShape: function () {
        /// <summary>Gets the the type used to paint markers for the selected item.</summary>
        /// <returns type="cfx.MarkerShape"/>
        return new MarkerShape();
    },
    setMarkerShape: function (value) {
        /// <summary>Sets the the type used to paint markers for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerShape"/>>
    },
    getMarkerSize: function () {
        /// <summary>Gets a value controlling the size of the markers for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerSize: function (value) {
        /// <summary>Sets a value controlling the size of the markers for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getMarkerStyle: function () {
        /// <summary>Gets the markers style for the selected item.</summary>
        /// <returns type="cfx.MarkerStyle"/>
        return new MarkerStyle();
    },
    setMarkerStyle: function (value) {
        /// <summary>Sets the markers style for the selected item.</summary>
        /// <param name="value" type="cfx.MarkerStyle"/>>
    },
    getMarkerTemplate: function () {
        /// <summary>Gets the the template used to paint markers for the selected item.</summary>
        /// <returns type="string"/>
        return "";
    },
    setMarkerTemplate: function (value) {
        /// <summary>Sets the the template used to paint markers for the selected item.</summary>
        /// <param name="value" type="string"/>>
    },
    getMarkerVisible: function () {
        /// <returns type="bool"/>
        return true;
    },
    setMarkerVisible: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getMarkerWidth: function () {
        /// <summary>Gets the marker width for the selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMarkerWidth: function (value) {
        /// <summary>Sets the marker width for the selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getPattern: function () {
        /// <summary>Gets a value specifying the pattern for the selected item.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Sets a value specifying the pattern for the selected item.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPicture: function () {
        /// <summary>Gets a value specifying the picture associated to the selected item.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Sets a value specifying the picture associated to the selected item.</summary>
        /// <param name="value" type="Image"/>>
    },
    getPointLabels: function () {
        /// <summary>Provides access to PointLabelAttributes allowing for the manipulation of attributes pertaining to the point label.</summary>
        /// <returns type="cfx.ck"/>
        return new ck();
    },
    getSeparateSlice: function () {
        /// <summary>Gets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparateSlice: function (value) {
        /// <summary>Sets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets and object for the specific item.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Sets and object for the specific item.</summary>
        /// <param name="value" type="?"/>>
    },
    getText: function () {
        /// <summary>Gets a value for labeling the point or series attribute.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets a value for labeling the point or series attribute.</summary>
        /// <param name="value" type="string"/>>
    },
    getVolume: function () {
        /// <summary>Gets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setVolume: function (value) {
        /// <summary>Sets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items.</summary>
        /// <param name="value" type="number"/>>
    }
};

var co = function() {
}
cfx.co = co;
co.prototype = {
    getDelay: function () {
        /// <returns type="cfx.AnimationDelay"/>
        return new AnimationDelay();
    },
    setDelay: function (value) {
        /// <param name="value" type="cfx.AnimationDelay"/>>
    },
    getDirection: function () {
        /// <returns type="cfx.AnimationDirection"/>
        return new AnimationDirection();
    },
    setDirection: function (value) {
        /// <param name="value" type="cfx.AnimationDirection"/>>
    },
    getDuration: function () {
        /// <summary>Gets the value indicating the duration of the animation.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDuration: function (value) {
        /// <summary>Sets the value indicating the duration of the animation.</summary>
        /// <param name="value" type="number"/>>
    },
    getEnabled: function () {
        /// <summary>Allows you to enable or disable the animation in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <summary>Allows you to enable or disable the animation in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTiming: function () {
        /// <summary>Gets the value indicating the timing of the animation.</summary>
        /// <returns type="cfx.AnimationTiming"/>
        return new AnimationTiming();
    },
    setTiming: function (value) {
        /// <summary>Sets the value indicating the timing of the animation.</summary>
        /// <param name="value" type="cfx.AnimationTiming"/>>
    }
};

var cp = function() {
}
cfx.cp = cp;
cp.prototype = {
    getDataChange: function () {
        /// <summary>To get access to the multiple properties of this class, the getDataChange method is required.</summary>
        /// <returns type="cfx.co"/>
        return new co();
    },
    getLoad: function () {
        /// <summary>To get access to the multiple properties of this class, the getLoad method is required.</summary>
        /// <returns type="cfx.co"/>
        return new co();
    },
    getShowSpeed: function () {
        /// <summary>This method is used to debug the speed on how the animation is shown.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowSpeed: function (value) {
        /// <summary>This method is used to debug the speed on how the animation is shown.</summary>
        /// <param name="value" type="bool"/>>
    },
    reset: function () {
    }
};

var ToolTipMode = function() {
}
cfx.ToolTipMode = ToolTipMode;
ToolTipMode.prototype = {
    getAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    getBorderTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setBorderTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getContentTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setContentTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getInteractive: function () {
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getPadding: function () {
        /// <returns type="number"/>
        return 0;
    },
    setPadding: function (value) {
        /// <param name="value" type="number"/>>
    },
    getShowMarkers: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowMarkers: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShowStacked: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowStacked: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getVerticalAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setVerticalAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    assignObject: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var ToolTipLineAttributes = function() {
}
cfx.ToolTipLineAttributes = ToolTipLineAttributes;
ToolTipLineAttributes.prototype = {
    getLine: function () {
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getX: function () {
        /// <returns type="number"/>
        return 0;
    },
    setX: function (value) {
        /// <param name="value" type="number"/>>
    },
    getY: function () {
        /// <returns type="number"/>
        return 0;
    },
    setY: function (value) {
        /// <param name="value" type="number"/>>
    },
    getAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    getBorderTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setBorderTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getContentTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setContentTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getInteractive: function () {
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getPadding: function () {
        /// <returns type="number"/>
        return 0;
    },
    setPadding: function (value) {
        /// <param name="value" type="number"/>>
    },
    getShowMarkers: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowMarkers: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShowStacked: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowStacked: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getVerticalAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setVerticalAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    assignObject: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var ToolTipAttributes = function() {
}
cfx.ToolTipAttributes = ToolTipAttributes;
ToolTipAttributes.prototype = {
    getAllSeries: function () {
        /// <returns type="bool"/>
        return true;
    },
    setAllSeries: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getBackColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getBorder: function () {
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getEnabled: function () {
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getFont: function () {
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <returns type="string"/>
        return "";
    },
    setFormat: function (value) {
        /// <param name="value" type="string"/>>
    },
    getMode: function () {
        /// <returns type="cfx.ToolTipMode"/>
        return new ToolTipMode();
    },
    setMode: function (value) {
        /// <param name="value" type="cfx.ToolTipMode"/>>
    },
    getTextColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getTriggerMode: function () {
        /// <returns type="cfx.TooltipTriggerMode"/>
        return new TooltipTriggerMode();
    },
    setTriggerMode: function (value) {
        /// <param name="value" type="cfx.TooltipTriggerMode"/>>
    },
    getAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    getBorderTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setBorderTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getContentTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setContentTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getInteractive: function () {
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getPadding: function () {
        /// <returns type="number"/>
        return 0;
    },
    setPadding: function (value) {
        /// <param name="value" type="number"/>>
    },
    getShowMarkers: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowMarkers: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShowStacked: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowStacked: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getVerticalAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setVerticalAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    assignObject: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var cB = function() {
}
cfx.cB = cB;
cB.prototype = {
    getAngleX: function () {
        /// <summary>Gets the 3D rotation angle around the X-axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAngleX: function (value) {
        /// <summary>Sets the 3D rotation angle around the X-axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getAngleY: function () {
        /// <summary>Gets a 3D rotation angle around the Y-axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAngleY: function (value) {
        /// <summary>Sets a 3D rotation angle around the Y-axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getBoxThickness: function () {
        /// <summary>Gets the thickness for the box surrounding the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBoxThickness: function (value) {
        /// <summary>Sets the thickness for the box surrounding the chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getCluster: function () {
        /// <summary>Displays a z-clustered 3D chart. When set to true, the chart will be shown as clustered; when set to false, the chart displays the series side-by-side.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setCluster: function (value) {
        /// <summary>Displays a z-clustered 3D chart. When set to true, the chart will be shown as clustered; when set to false, the chart displays the series side-by-side.</summary>
        /// <param name="value" type="bool"/>>
    },
    getDepth: function () {
        /// <summary>Gets the thickness along the Z-axis for the series.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDepth: function (value) {
        /// <summary>Sets the thickness along the Z-axis for the series.</summary>
        /// <param name="value" type="number"/>>
    },
    getEnabled: function () {
        /// <summary>Gets a value indicating whether 3D effects should be applied.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <summary>Sets a value indicating whether 3D effects should be applied.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPerspective: function () {
        /// <summary>Allows you to set a 3D perspective to control the view of the chart depth.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPerspective: function (value) {
        /// <summary>Allows you to set a 3D perspective to control the view of the chart depth.</summary>
        /// <param name="value" type="number"/>>
    },
    getRotated: function () {
        /// <summary>Gets a value indicating if the chart is Rotated.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRotated: function (value) {
        /// <summary>Sets a value indicating if the chart is Rotated.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShadow: function () {
        /// <summary>Gets a value indicating the type of shading to display when rotating the chart.</summary>
        /// <returns type="cfx.Shadow"/>
        return new Shadow();
    },
    setShadow: function (value) {
        /// <summary>Sets a value indicating the type of shading to display when rotating the chart.</summary>
        /// <param name="value" type="cfx.Shadow"/>>
    }
};

var Palette = function() {
}
cfx.Palette = Palette;
Palette.prototype = {

};

var cC = function() {
}
cfx.cC = cC;
cC.prototype = {
    getBottom: function () {
        /// <summary>Gets the distance in pixels between the bottom border of the bounding rectangle and the bottom border of the plot area of the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBottom: function (value) {
        /// <summary>Sets the distance in pixels between the bottom border of the bounding rectangle and the bottom border of the plot area of the chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Gets the distance in pixels between the left border of the bounding rectangle and the left border of the plot area of the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Sets the distance in pixels between the left border of the bounding rectangle and the left border of the plot area of the chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getRight: function () {
        /// <summary>Gets the distance in pixels between the right border of the bounding rectangle and the right border of the plot area of the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setRight: function (value) {
        /// <summary>Sets the distance in pixels between the right border of the bounding rectangle and the right border of the plot area of the chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getTop: function () {
        /// <summary>Gets the distance in pixels between the top border of the bounding rectangle and the top border of the plot area of the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Sets the distance in pixels between the top border of the bounding rectangle and the top border of the plot area of the chart.</summary>
        /// <param name="value" type="number"/>>
    }
};

var cD = function() {
}
cfx.cD = cD;
cD.prototype = {
    getItem: function (n) {
        /// <param name="n" type="number"/>>
        /// <returns type="cfx.FieldMap"/>
        return new FieldMap();
    },
    setItem: function (n, value) {
        /// <param name="n" type="number"/>>
        /// <param name="value" type="cfx.FieldMap"/>>
    },
    add: function (item) {
        /// <param name="item" type="cfx.FieldMap"/>>
    },
    clear: function () {
    },
    contains: function (item) {
        /// <param name="item" type="cfx.FieldMap"/>>
        /// <returns type="bool"/>
        return true;
    },
    fillFromSchema: function () {
    },
    indexOf: function (obj) {
        /// <param name="obj" type="cfx.FieldMap"/>>
        /// <returns type="number"/>
        return 0;
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.FieldMap"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.FieldMap"/>>
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var DataSourceSettings = function() {
}
cfx.DataSourceSettings = DataSourceSettings;
DataSourceSettings.prototype = {
    getDataSource: function () {
        /// <summary>Gets the source containing the values used to populate the chart.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setDataSource: function (value) {
        /// <summary>Sets the source containing the values used to populate the chart.</summary>
        /// <param name="value" type="?"/>>
    },
    getFields: function () {
        /// <returns type="cfx.cD"/>
        return new cD();
    },
    getLabelSeparator: function () {
        /// <summary>Gets a value defining the label separator character used when concatenating labels.</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabelSeparator: function (value) {
        /// <summary>Sets a value defining the label separator character used when concatenating labels.</summary>
        /// <param name="value" type="string"/>>
    },
    getStyle: function () {
        /// <summary>Controls how jChartFX plots the fields in the resultset.</summary>
        /// <returns type="cfx.DataSourceStyles"/>
        return new DataSourceStyles();
    },
    setStyle: function (value) {
        /// <summary>Controls how jChartFX plots the fields in the resultset.</summary>
        /// <param name="value" type="cfx.DataSourceStyles"/>>
    },
    reloadData: function () {
    }
};

var cK = function() {
}
cfx.cK = cK;
cK.prototype = {
    getItem1: function (point) {
        /// <param name="point" type="number"/>>
        /// <returns type="cfx.PointAttributes"/>
        return new PointAttributes();
    },
    setItem1: function (point, value) {
        /// <param name="point" type="number"/>>
        /// <param name="value" type="cfx.PointAttributes"/>>
    },
    getItem: function (series, point) {
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <returns type="cfx.PointAttributes"/>
        return new PointAttributes();
    },
    setItem: function (series, point, value) {
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <param name="value" type="cfx.PointAttributes"/>>
    }
};

var Pane = function() {
}
cfx.Pane = Pane;
Pane.prototype = {
    getAxes: function () {
        /// <returns type="cfx.cP"/>
        return new cP();
    },
    getAxisY: function () {
        /// <summary>Provides access to the members of the main Y Axis for the selected Pane.</summary>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    getBackColor: function () {
        /// <summary>Gets the inside color for the selected pane.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the inside color for the selected pane.</summary>
        /// <param name="value" type="String"/>>
    },
    getBackground: function () {
        /// <summary>Gets an ImageBackground or GradientBackground object for a pane.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBackground: function (value) {
        /// <summary>Sets an ImageBackground or GradientBackground object for a pane.</summary>
        /// <param name="value" type="cfx.object"/>>
    },
    getBoundingRectangle: function () {
        /// <summary>Returns a rectangle object that contains attributes for the selected pane.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    getProportion: function () {
        /// <summary>Gets a value indicating the proportional size of the selected pane.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setProportion: function (value) {
        /// <summary>Sets a value indicating the proportional size of the selected pane.</summary>
        /// <param name="value" type="number"/>>
    },
    getSeparation: function () {
        /// <summary>Gets a value indicating the space between panes.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Sets a value indicating the space between panes.</summary>
        /// <param name="value" type="number"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title object for a selected pane.</summary>
        /// <returns type="cfx.Title"/>
        return new Title();
    },
    setTitle: function (value) {
        /// <summary>Sets the Title object for a selected pane.</summary>
        /// <param name="value" type="cfx.Title"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value indicating if the Pane object should be shown or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value indicating if the Pane object should be shown or not.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var cM = function() {
}
cfx.cM = cM;
cM.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.TitleDockable"/>
        return new TitleDockable();
    },
    add: function (title) {
        /// <param name="title" type="cfx.TitleDockable"/>>
    },
    insert: function (index, title) {
        /// <param name="index" type="number"/>>
        /// <param name="title" type="cfx.TitleDockable"/>>
    },
    clear: function () {
    }
};

var cN = function() {
}
cfx.cN = cN;
cN.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.Pane"/>
        return new Pane();
    },
    add: function (pane) {
        /// <param name="pane" type="cfx.Pane"/>>
    },
    insert: function (index, pane) {
        /// <param name="index" type="number"/>>
        /// <param name="pane" type="cfx.Pane"/>>
    },
    remove: function (pane) {
        /// <param name="pane" type="cfx.Pane"/>>
    },
    clear: function () {
    }
};

var cO = function() {
}
cfx.cO = cO;
cO.prototype = {
    clear: function () {
    }
};

var cP = function() {
}
cfx.cP = cP;
cP.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    setItem: function (index, value) {
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.AxisY"/>>
    },
    add: function (item) {
        /// <param name="item" type="cfx.AxisY"/>>
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.AxisY"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.AxisY"/>>
    },
    clear: function () {
    }
};

var cQ = function() {
}
cfx.cQ = cQ;
cQ.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.AxisX"/>
        return new AxisX();
    },
    setItem: function (index, value) {
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.AxisX"/>>
    },
    add: function (item) {
        /// <param name="item" type="cfx.AxisX"/>>
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.AxisX"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.AxisX"/>>
    },
    clear: function () {
    }
};

var cS = function() {
}
cfx.cS = cS;
cS.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.SeriesAttributes"/>
        return new SeriesAttributes();
    },
    add: function (series) {
        /// <param name="series" type="cfx.SeriesAttributes"/>>
    },
    clearText: function () {
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.SeriesAttributes"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.SeriesAttributes"/>>
    },
    resetOrder: function () {
    },
    clear: function () {
    },
    clear: function () {
    }
};

var cV = function() {
}
cfx.cV = cV;
cV.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.CustomLegendItem"/>
        return new CustomLegendItem();
    },
    add: function (item) {
        /// <param name="item" type="cfx.CustomLegendItem"/>>
    },
    contains: function (item) {
        /// <param name="item" type="cfx.CustomLegendItem"/>>
        /// <returns type="bool"/>
        return true;
    },
    indexOf: function (item) {
        /// <param name="item" type="cfx.CustomLegendItem"/>>
        /// <returns type="number"/>
        return 0;
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.CustomLegendItem"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.CustomLegendItem"/>>
    },
    clear: function () {
    },
    clear: function () {
    }
};

var cW = function() {
}
cfx.cW = cW;
cW.prototype = {
    get_auto_ShowInLegend: function () {
        /// <returns type="bool"/>
        return true;
    },
    set_auto_ShowInLegend: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.ConditionalAttributes"/>
        return new ConditionalAttributes();
    },
    add: function (item) {
        /// <param name="item" type="cfx.ConditionalAttributes"/>>
    },
    clear: function () {
    },
    conditionForElement: function (series, point) {
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <returns type="cfx.PointAttributes"/>
        return new PointAttributes();
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="cfx.ConditionalAttributes"/>>
    },
    recalculate: function () {
    },
    remove: function (item) {
        /// <param name="item" type="cfx.ConditionalAttributes"/>>
    },
    resumeUpdate: function () {
    },
    suspendUpdate: function () {
    },
    clear: function () {
    },
    clear: function () {
    }
};

var cX = function() {
}
cfx.cX = cX;
cX.prototype = {
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="string"/>
        return "";
    },
    setItem: function (index, value) {
        /// <param name="index" type="number"/>>
        /// <param name="value" type="string"/>>
    },
    add: function (item) {
        /// <param name="item" type="string"/>>
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="string"/>>
    },
    clear: function () {
    },
    clear: function () {
    }
};

var cY = function() {
}
cfx.cY = cY;
cY.prototype = {
    getAxis: function () {
        /// <returns type="cfx.c9"/>
        return new c9();
    },
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.CustomGridLine"/>
        return new CustomGridLine();
    },
    add: function (constLine) {
        /// <param name="constLine" type="cfx.CustomGridLine"/>>
    },
    insert: function (index, item) {
        /// <param name="index" type="number"/>>
        /// <param name="item" type="string"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.CustomGridLine"/>>
    },
    clear: function () {
    },
    clear: function () {
    }
};

var cZ = function() {
}
cfx.cZ = cZ;
cZ.prototype = {
    getAxis: function () {
        /// <returns type="cfx.c9"/>
        return new c9();
    },
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.AxisSection"/>
        return new AxisSection();
    },
    add: function (axisSection) {
        /// <param name="axisSection" type="cfx.AxisSection"/>>
    },
    insert: function (index, axisSection) {
        /// <param name="index" type="number"/>>
        /// <param name="axisSection" type="cfx.AxisSection"/>>
    },
    remove: function (item) {
        /// <param name="item" type="cfx.AxisSection"/>>
    },
    clear: function () {
    },
    clear: function () {
    }
};

var c0 = function() {
}
cfx.c0 = c0;
c0.prototype = {
    getCulture: function () {
        /// <summary>Allows you to localize labels and data for a specific language and region.</summary>
        /// <returns type="CultureInfo"/>
        return new CultureInfo();
    },
    setCulture: function (value) {
        /// <summary>Allows you to localize labels and data for a specific language and region.</summary>
        /// <param name="value" type="CultureInfo"/>>
    },
    getCustomFormat: function () {
        /// <summary>Gets a custom format to the selected label, mouseover tip or value.</summary>
        /// <returns type="string"/>
        return "";
    },
    setCustomFormat: function (value) {
        /// <summary>Sets a custom format to the selected label, mouseover tip or value.</summary>
        /// <param name="value" type="string"/>>
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals for the selected label, mouseover tip or value.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals for the selected label, mouseover tip or value.</summary>
        /// <param name="value" type="number"/>>
    },
    getFormat: function () {
        /// <summary>Used to format the selected label, mouseover tip or value to numbers, date, time, scientific or currency.</summary>
        /// <returns type="cfx.AxisFormat"/>
        return new AxisFormat();
    },
    setFormat: function (value) {
        /// <summary>Used to format the selected label, mouseover tip or value to numbers, date, time, scientific or currency.</summary>
        /// <param name="value" type="cfx.AxisFormat"/>>
    },
    getIsDate: function () {
        /// <summary>Returns a value indicating whether or not a value is a Date.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getIsDateTime: function () {
        /// <summary>Returns a value indicating whether or not a value is a DateTime.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getIsPercentage: function () {
        /// <summary>Returns a value indicating whether or not a value is a Percentage.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getIsTime: function () {
        /// <summary>Returns a value indicating whether or not a value is a Time.</summary>
        /// <returns type="bool"/>
        return true;
    }
};

var Title = function() {
}
cfx.Title = Title;
Title.prototype = {
    getAlignment: function () {
        /// <summary>Allows you to get or set the alignment of the specified title.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Allows you to get or set the alignment of the specified title.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getBackColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getFont: function () {
        /// <summary>Assigns a font to the specified title.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Assigns a font to the specified title.</summary>
        /// <param name="value" type="Font"/>>
    },
    getIndentation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setIndentation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getLineAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    getRichText: function () {
        /// <summary>Gets the RichText property for the selected Title.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRichText: function (value) {
        /// <summary>Sets the RichText property for the selected Title.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeparation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getText: function () {
        /// <summary>Gets the text for the selected title.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets the text for the selected title.</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color of text for the specified title.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color of text for the specified title.</summary>
        /// <param name="value" type="String"/>>
    }
};

var TitleDockable = function() {
}
cfx.TitleDockable = TitleDockable;
TitleDockable.prototype = {
    getDock: function () {
        /// <summary>Gets the Dock property, which sets the position where the title will be docked.</summary>
        /// <returns type="cfx.DockArea"/>
        return new DockArea();
    },
    setDock: function (value) {
        /// <summary>Sets the Dock property, which sets the position where the title will be docked.</summary>
        /// <param name="value" type="cfx.DockArea"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value indicating whether the title may use the entire length of the chart, or only above the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value indicating whether the title may use the entire length of the chart, or only above the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAlignment: function () {
        /// <summary>Allows you to get or set the alignment of the specified title.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Allows you to get or set the alignment of the specified title.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getBackColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getFont: function () {
        /// <summary>Assigns a font to the specified title.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Assigns a font to the specified title.</summary>
        /// <param name="value" type="Font"/>>
    },
    getIndentation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setIndentation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getLineAlignment: function () {
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <param name="value" type="StringAlignment"/>>
    },
    getRichText: function () {
        /// <summary>Gets the RichText property for the selected Title.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRichText: function (value) {
        /// <summary>Sets the RichText property for the selected Title.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeparation: function () {
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <param name="value" type="number"/>>
    },
    getText: function () {
        /// <summary>Gets the text for the selected title.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets the text for the selected title.</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color of text for the specified title.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color of text for the specified title.</summary>
        /// <param name="value" type="String"/>>
    }
};

var SimpleBorder = function() {
}
cfx.SimpleBorder = SimpleBorder;
SimpleBorder.prototype = {

};

var Grids = function() {
}
cfx.Grids = Grids;
Grids.prototype = {
    getInterlaced: function () {
        /// <summary>Creates a grid of alternating colors for a selected axis to improve chart readability.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInterlaced: function (value) {
        /// <summary>Creates a grid of alternating colors for a selected axis to improve chart readability.</summary>
        /// <param name="value" type="bool"/>>
    },
    getInterlacedColor: function () {
        /// <summary>Gets the AlternateColor for a selected Grids object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setInterlacedColor: function (value) {
        /// <summary>Sets the AlternateColor for a selected Grids object.</summary>
        /// <param name="value" type="String"/>>
    },
    getMajor: function () {
        /// <summary>Provides access to the GridLine class to customize the Major Grid.</summary>
        /// <returns type="cfx.GridLine"/>
        return new GridLine();
    },
    getMinor: function () {
        /// <summary>Provides access to the GridLine class to customize the Minor Grid.</summary>
        /// <returns type="cfx.GridLine"/>
        return new GridLine();
    }
};

var AxisSection = function() {
}
cfx.AxisSection = AxisSection;
AxisSection.prototype = {
    getAxis: function () {
        /// <returns type="cfx.c9"/>
        return new c9();
    },
    getBackColor: function () {
        /// <summary>Gets the AxisSection background color.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the AxisSection background color.</summary>
        /// <param name="value" type="String"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets additional font attributes to the axis section.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets additional font attributes to the axis section.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getFrom: function () {
        /// <summary>Gets a value indicating the beginning value of the range for a selected AxisSection object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFrom: function (value) {
        /// <summary>Sets a value indicating the beginning value of the range for a selected AxisSection object.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTo: function () {
        /// <summary>Gets a value indicating the ending value of the range for a selected AxisSection object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTo: function (value) {
        /// <summary>Sets a value indicating the ending value of the range for a selected AxisSection object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Shows or hides the selected axis section.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Shows or hides the selected axis section.</summary>
        /// <param name="value" type="bool"/>>
    },
    getGrids: function () {
        /// <summary>Allows customization of grid lines by providing access to the supported members of the Grids class.</summary>
        /// <returns type="cfx.Grids"/>
        return new Grids();
    },
    getTextColor: function () {
        /// <summary>Gets the color for text of a selected BaseAxisSection object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color for text of a selected BaseAxisSection object.</summary>
        /// <param name="value" type="String"/>>
    }
};

var c9 = function() {
}
cfx.c9 = c9;
c9.prototype = {
    getAutoScale: function () {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScale: function (value) {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAutoScroll: function () {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScroll: function (value) {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClientScroll: function () {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClientScroll: function (value) {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <param name="value" type="bool"/>>
    },
    getCustomGridLines: function () {
        /// <returns type="cfx.cY"/>
        return new cY();
    },
    getCustomSteps: function () {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <returns type="Double[]"/>
        return new Double[]();
    },
    setCustomSteps: function (value) {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <param name="value" type="Double[]"/>>
    },
    getDataFormat: function () {
        /// <summary>Used to format the data displayed in point labels, and tool tips shown at mouseover.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getDrawingArea: function () {
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    getFirstLabel: function () {
        /// <summary>Gets a value used to customize the first label displayed on a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFirstLabel: function (value) {
        /// <summary>Sets a value used to customize the first label displayed on a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <param name="value" type="Font"/>>
    },
    getForceZero: function () {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setForceZero: function (value) {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <param name="value" type="bool"/>>
    },
    getHorizontal: function () {
        /// <summary>Returns a boolean value specifying whether the selected axis is a horizontal or vertical axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getInverted: function () {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <param name="value" type="bool"/>>
    },
    getKeyLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelAngle: function () {
        /// <summary>Gets the text rotation for the labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelAngle: function (value) {
        /// <summary>Sets the text rotation for the labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelsFormat: function () {
        /// <summary>Used to format the labels displayed on the selected axis.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getLabelTrimming: function () {
        /// <summary>Gets a StringTrimming value.</summary>
        /// <returns type="StringTrimming"/>
        return new StringTrimming();
    },
    setLabelTrimming: function (value) {
        /// <summary>Sets a StringTrimming value.</summary>
        /// <param name="value" type="StringTrimming"/>>
    },
    getLabelValue: function () {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelValue: function (value) {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <param name="value" type="number"/>>
    },
    getLine: function () {
        /// <summary>Allows you to apply supported Line class members to a selected axis line.</summary>
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getLineSpacing: function () {
        /// <summary>Gets a value indicating the LineSpacing for an axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLineSpacing: function (value) {
        /// <summary>Sets a value indicating the LineSpacing for an axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLogBase: function () {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLogBase: function (value) {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <param name="value" type="number"/>>
    },
    getMax: function () {
        /// <summary>Gets the Max value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Max value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMaxSizePercentage: function () {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxSizePercentage: function (value) {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Min value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Min value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinorStep: function () {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinorStep: function (value) {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getNotify: function () {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setNotify: function (value) {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPixelOffset: function () {
        /// <summary>Gets in pixels, the distance from the respective axis to the data.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelOffset: function (value) {
        /// <summary>Sets in pixels, the distance from the respective axis to the data.</summary>
        /// <param name="value" type="number"/>>
    },
    getPixelsPerUnit: function () {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelsPerUnit: function (value) {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <returns type="cfx.AxisPosition"/>
        return new AxisPosition();
    },
    setPosition: function (value) {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <param name="value" type="cfx.AxisPosition"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollPosition: function () {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScrollPosition: function (value) {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollSize: function () {
        /// <summary>Returns the number of scrolls in a chart based on the scroll view configuration.</summary>
        /// <returns type="number"/>
        return 0;
    },
    getSections: function () {
        /// <summary>Returns a selected AxisSection object.</summary>
        /// <returns type="cfx.cZ"/>
        return new cZ();
    },
    getSeparation: function () {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStaggered: function () {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setStaggered: function (value) {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStep: function () {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStep: function (value) {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStepCore: function () {
        /// <returns type="number"/>
        return 0;
    },
    getStyle: function () {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <returns type="cfx.AxisStyles"/>
        return new AxisStyles();
    },
    setStyle: function (value) {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <param name="value" type="cfx.AxisStyles"/>>
    },
    getTitle: function () {
        /// <summary>Gets the title for a specific axis.</summary>
        /// <returns type="cfx.Title"/>
        return new Title();
    },
    setTitle: function (value) {
        /// <summary>Sets the title for a specific axis.</summary>
        /// <param name="value" type="cfx.Title"/>>
    },
    getVisible: function () {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    adjustScale: function () {
    },
    calculateStep: function (scaleInfo, gx, availableSpace, processPane) {
        /// <param name="scaleInfo" type="cfx.cz"/>>
        /// <param name="gx" type="cfx.object"/>>
        /// <param name="availableSpace" type="number"/>>
        /// <param name="processPane" type="bool"/>>
    },
    distanceToPixel: function (distance) {
        /// <param name="distance" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getLabelsCore: function () {
        /// <returns type="cfx.object"/>
        return new object();
    },
    getScrollView: function (_p_) {
        /// <param name="_p_" type="cfx.GetScrollView_Double_r_Double_r"/>>
    },
    pixelToValue: function (pixel) {
        /// <param name="pixel" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    resetScale: function () {
    },
    setScrollView: function (min, max) {
        /// <param name="min" type="number"/>>
        /// <param name="max" type="number"/>>
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getGrids: function () {
        /// <summary>Allows customization of grid lines by providing access to the supported members of the Grids class.</summary>
        /// <returns type="cfx.Grids"/>
        return new Grids();
    },
    getTextColor: function () {
        /// <summary>Gets the color for text of a selected BaseAxisSection object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color for text of a selected BaseAxisSection object.</summary>
        /// <param name="value" type="String"/>>
    }
};

var AxisY = function() {
}
cfx.AxisY = AxisY;
AxisY.prototype = {
    getPane: function () {
        /// <summary>Gets an integer value specifying the Pane for a Y Axis object.</summary>
        /// <returns type="cfx.Pane"/>
        return new Pane();
    },
    getAutoScale: function () {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScale: function (value) {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAutoScroll: function () {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScroll: function (value) {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClientScroll: function () {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClientScroll: function (value) {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <param name="value" type="bool"/>>
    },
    getCustomGridLines: function () {
        /// <returns type="cfx.cY"/>
        return new cY();
    },
    getCustomSteps: function () {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <returns type="Double[]"/>
        return new Double[]();
    },
    setCustomSteps: function (value) {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <param name="value" type="Double[]"/>>
    },
    getDataFormat: function () {
        /// <summary>Used to format the data displayed in point labels, and tool tips shown at mouseover.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getDrawingArea: function () {
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    getFirstLabel: function () {
        /// <summary>Gets a value used to customize the first label displayed on a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFirstLabel: function (value) {
        /// <summary>Sets a value used to customize the first label displayed on a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <param name="value" type="Font"/>>
    },
    getForceZero: function () {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setForceZero: function (value) {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <param name="value" type="bool"/>>
    },
    getHorizontal: function () {
        /// <summary>Returns a boolean value specifying whether the selected axis is a horizontal or vertical axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getInverted: function () {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <param name="value" type="bool"/>>
    },
    getKeyLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelAngle: function () {
        /// <summary>Gets the text rotation for the labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelAngle: function (value) {
        /// <summary>Sets the text rotation for the labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelsFormat: function () {
        /// <summary>Used to format the labels displayed on the selected axis.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getLabelTrimming: function () {
        /// <summary>Gets a StringTrimming value.</summary>
        /// <returns type="StringTrimming"/>
        return new StringTrimming();
    },
    setLabelTrimming: function (value) {
        /// <summary>Sets a StringTrimming value.</summary>
        /// <param name="value" type="StringTrimming"/>>
    },
    getLabelValue: function () {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelValue: function (value) {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <param name="value" type="number"/>>
    },
    getLine: function () {
        /// <summary>Allows you to apply supported Line class members to a selected axis line.</summary>
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getLineSpacing: function () {
        /// <summary>Gets a value indicating the LineSpacing for an axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLineSpacing: function (value) {
        /// <summary>Sets a value indicating the LineSpacing for an axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLogBase: function () {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLogBase: function (value) {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <param name="value" type="number"/>>
    },
    getMax: function () {
        /// <summary>Gets the Max value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Max value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMaxSizePercentage: function () {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxSizePercentage: function (value) {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Min value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Min value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinorStep: function () {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinorStep: function (value) {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getNotify: function () {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setNotify: function (value) {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPixelOffset: function () {
        /// <summary>Gets in pixels, the distance from the respective axis to the data.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelOffset: function (value) {
        /// <summary>Sets in pixels, the distance from the respective axis to the data.</summary>
        /// <param name="value" type="number"/>>
    },
    getPixelsPerUnit: function () {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelsPerUnit: function (value) {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <returns type="cfx.AxisPosition"/>
        return new AxisPosition();
    },
    setPosition: function (value) {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <param name="value" type="cfx.AxisPosition"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollPosition: function () {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScrollPosition: function (value) {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollSize: function () {
        /// <summary>Returns the number of scrolls in a chart based on the scroll view configuration.</summary>
        /// <returns type="number"/>
        return 0;
    },
    getSections: function () {
        /// <summary>Returns a selected AxisSection object.</summary>
        /// <returns type="cfx.cZ"/>
        return new cZ();
    },
    getSeparation: function () {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStaggered: function () {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setStaggered: function (value) {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStep: function () {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStep: function (value) {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStepCore: function () {
        /// <returns type="number"/>
        return 0;
    },
    getStyle: function () {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <returns type="cfx.AxisStyles"/>
        return new AxisStyles();
    },
    setStyle: function (value) {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <param name="value" type="cfx.AxisStyles"/>>
    },
    getTitle: function () {
        /// <summary>Gets the title for a specific axis.</summary>
        /// <returns type="cfx.Title"/>
        return new Title();
    },
    setTitle: function (value) {
        /// <summary>Sets the title for a specific axis.</summary>
        /// <param name="value" type="cfx.Title"/>>
    },
    getVisible: function () {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    adjustScale: function () {
    },
    calculateStep: function (scaleInfo, gx, availableSpace, processPane) {
        /// <param name="scaleInfo" type="cfx.cz"/>>
        /// <param name="gx" type="cfx.object"/>>
        /// <param name="availableSpace" type="number"/>>
        /// <param name="processPane" type="bool"/>>
    },
    distanceToPixel: function (distance) {
        /// <param name="distance" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getLabelsCore: function () {
        /// <returns type="cfx.object"/>
        return new object();
    },
    getScrollView: function (_p_) {
        /// <param name="_p_" type="cfx.GetScrollView_Double_r_Double_r"/>>
    },
    pixelToValue: function (pixel) {
        /// <param name="pixel" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    resetScale: function () {
    },
    setScrollView: function (min, max) {
        /// <param name="min" type="number"/>>
        /// <param name="max" type="number"/>>
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getGrids: function () {
        /// <summary>Allows customization of grid lines by providing access to the supported members of the Grids class.</summary>
        /// <returns type="cfx.Grids"/>
        return new Grids();
    },
    getTextColor: function () {
        /// <summary>Gets the color for text of a selected BaseAxisSection object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color for text of a selected BaseAxisSection object.</summary>
        /// <param name="value" type="String"/>>
    }
};

var AxisX = function() {
}
cfx.AxisX = AxisX;
AxisX.prototype = {
    getAutoScale: function () {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScale: function (value) {
        /// <summary>Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getAutoScroll: function () {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAutoScroll: function (value) {
        /// <summary>Enables or disables scrolling in an Axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClientScroll: function () {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClientScroll: function (value) {
        /// <summary>Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability.</summary>
        /// <param name="value" type="bool"/>>
    },
    getCustomGridLines: function () {
        /// <returns type="cfx.cY"/>
        return new cY();
    },
    getCustomSteps: function () {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <returns type="Double[]"/>
        return new Double[]();
    },
    setCustomSteps: function (value) {
        /// <summary>Allows you to set a custom step for the selected axis.</summary>
        /// <param name="value" type="Double[]"/>>
    },
    getDataFormat: function () {
        /// <summary>Used to format the data displayed in point labels, and tool tips shown at mouseover.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getDrawingArea: function () {
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    getFirstLabel: function () {
        /// <summary>Gets a value used to customize the first label displayed on a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFirstLabel: function (value) {
        /// <summary>Sets a value used to customize the first label displayed on a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to change the label Font attributes of the selected axis.</summary>
        /// <param name="value" type="Font"/>>
    },
    getForceZero: function () {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setForceZero: function (value) {
        /// <summary>Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero.</summary>
        /// <param name="value" type="bool"/>>
    },
    getHorizontal: function () {
        /// <summary>Returns a boolean value specifying whether the selected axis is a horizontal or vertical axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getInverted: function () {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInverted: function (value) {
        /// <summary>Sets a selected numerical axis max value lesser than the min value.</summary>
        /// <param name="value" type="bool"/>>
    },
    getKeyLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelAngle: function () {
        /// <summary>Gets the text rotation for the labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelAngle: function (value) {
        /// <summary>Sets the text rotation for the labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getLabelsFormat: function () {
        /// <summary>Used to format the labels displayed on the selected axis.</summary>
        /// <returns type="cfx.c0"/>
        return new c0();
    },
    getLabelTrimming: function () {
        /// <summary>Gets a StringTrimming value.</summary>
        /// <returns type="StringTrimming"/>
        return new StringTrimming();
    },
    setLabelTrimming: function (value) {
        /// <summary>Sets a StringTrimming value.</summary>
        /// <param name="value" type="StringTrimming"/>>
    },
    getLabelValue: function () {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelValue: function (value) {
        /// <summary>Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes.</summary>
        /// <param name="value" type="number"/>>
    },
    getLine: function () {
        /// <summary>Allows you to apply supported Line class members to a selected axis line.</summary>
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getLineSpacing: function () {
        /// <summary>Gets a value indicating the LineSpacing for an axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLineSpacing: function (value) {
        /// <summary>Sets a value indicating the LineSpacing for an axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getLogBase: function () {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLogBase: function (value) {
        /// <summary>Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property.</summary>
        /// <param name="value" type="number"/>>
    },
    getMax: function () {
        /// <summary>Gets the Max value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Max value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMaxSizePercentage: function () {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxSizePercentage: function (value) {
        /// <summary>Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Min value assigned to the specified axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Min value assigned to the specified axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinorStep: function () {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinorStep: function (value) {
        /// <summary>Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getNotify: function () {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setNotify: function (value) {
        /// <summary>Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPixelOffset: function () {
        /// <summary>Gets in pixels, the distance from the respective axis to the data.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelOffset: function (value) {
        /// <summary>Sets in pixels, the distance from the respective axis to the data.</summary>
        /// <param name="value" type="number"/>>
    },
    getPixelsPerUnit: function () {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPixelsPerUnit: function (value) {
        /// <summary>Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <returns type="cfx.AxisPosition"/>
        return new AxisPosition();
    },
    setPosition: function (value) {
        /// <summary>Specifies the placement of the axis labels and tick marks relative to the chart.</summary>
        /// <param name="value" type="cfx.AxisPosition"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollPosition: function () {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScrollPosition: function (value) {
        /// <summary>Allows you to set the starting scroll position when a chart is scrollable.</summary>
        /// <param name="value" type="number"/>>
    },
    getScrollSize: function () {
        /// <summary>Returns the number of scrolls in a chart based on the scroll view configuration.</summary>
        /// <returns type="number"/>
        return 0;
    },
    getSections: function () {
        /// <summary>Returns a selected AxisSection object.</summary>
        /// <returns type="cfx.cZ"/>
        return new cZ();
    },
    getSeparation: function () {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Allows you to specify a gap in pixels between multiple axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStaggered: function () {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setStaggered: function (value) {
        /// <summary>Alternates the level of the axis labels for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStep: function () {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStep: function (value) {
        /// <summary>Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis.</summary>
        /// <param name="value" type="number"/>>
    },
    getStepCore: function () {
        /// <returns type="number"/>
        return 0;
    },
    getStyle: function () {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <returns type="cfx.AxisStyles"/>
        return new AxisStyles();
    },
    setStyle: function (value) {
        /// <summary>Allows you to add additional styles to the selected axis.</summary>
        /// <param name="value" type="cfx.AxisStyles"/>>
    },
    getTitle: function () {
        /// <summary>Gets the title for a specific axis.</summary>
        /// <returns type="cfx.Title"/>
        return new Title();
    },
    setTitle: function (value) {
        /// <summary>Sets the title for a specific axis.</summary>
        /// <param name="value" type="cfx.Title"/>>
    },
    getVisible: function () {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Shows or hides the lines, labels, tick marks and grids for the selected axis.</summary>
        /// <param name="value" type="bool"/>>
    },
    adjustScale: function () {
    },
    calculateStep: function (scaleInfo, gx, availableSpace, processPane) {
        /// <param name="scaleInfo" type="cfx.cz"/>>
        /// <param name="gx" type="cfx.object"/>>
        /// <param name="availableSpace" type="number"/>>
        /// <param name="processPane" type="bool"/>>
    },
    distanceToPixel: function (distance) {
        /// <param name="distance" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getLabelsCore: function () {
        /// <returns type="cfx.object"/>
        return new object();
    },
    getScrollView: function (_p_) {
        /// <param name="_p_" type="cfx.GetScrollView_Double_r_Double_r"/>>
    },
    pixelToValue: function (pixel) {
        /// <param name="pixel" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    resetScale: function () {
    },
    setScrollView: function (min, max) {
        /// <param name="min" type="number"/>>
        /// <param name="max" type="number"/>>
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    getGrids: function () {
        /// <summary>Allows customization of grid lines by providing access to the supported members of the Grids class.</summary>
        /// <returns type="cfx.Grids"/>
        return new Grids();
    },
    getTextColor: function () {
        /// <summary>Gets the color for text of a selected BaseAxisSection object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color for text of a selected BaseAxisSection object.</summary>
        /// <param name="value" type="String"/>>
    }
};

var Line = function() {
}
cfx.Line = Line;
Line.prototype = {
    getColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getEndCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setEndCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStartCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setStartCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStyle: function () {
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <param name="value" type="DashStyle"/>>
    },
    getWidth: function () {
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var GridLine = function() {
}
cfx.GridLine = GridLine;
GridLine.prototype = {
    getMargin: function () {
        /// <summary>Gets a value specifying the margin of the gridline.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMargin: function (value) {
        /// <summary>Sets a value specifying the margin of the gridline.</summary>
        /// <param name="value" type="number"/>>
    },
    getTickMark: function () {
        /// <summary>Gets the style for the tick marks of an GridLine object.</summary>
        /// <returns type="cfx.TickMark"/>
        return new TickMark();
    },
    setTickMark: function (value) {
        /// <summary>Sets the style for the tick marks of an GridLine object.</summary>
        /// <param name="value" type="cfx.TickMark"/>>
    },
    getVisible: function () {
        /// <summary>Gets a value indicating whether the grid line for the selected Gridline will be visible.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets a value indicating whether the grid line for the selected Gridline will be visible.</summary>
        /// <param name="value" type="bool"/>>
    },
    getColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getEndCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setEndCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStartCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setStartCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStyle: function () {
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <param name="value" type="DashStyle"/>>
    },
    getWidth: function () {
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var CustomGridLine = function() {
}
cfx.CustomGridLine = CustomGridLine;
CustomGridLine.prototype = {
    getAlignment: function () {
        /// <summary>Gets the Alignment for the Label in a CustomGridLine.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the Alignment for the Label in a CustomGridLine.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAxis: function () {
        /// <returns type="cfx.c9"/>
        return new c9();
    },
    getExtraStyle: function () {
        /// <summary>Allows you to set additional visual attributes in a custom grid line.</summary>
        /// <returns type="cfx.CustomGridLineStyles"/>
        return new CustomGridLineStyles();
    },
    setExtraStyle: function (value) {
        /// <summary>Allows you to set additional visual attributes in a custom grid line.</summary>
        /// <param name="value" type="cfx.CustomGridLineStyles"/>>
    },
    getFont: function () {
        /// <summary>Gets the Font utilized for the Label within the CustomGridLine.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the Font utilized for the Label within the CustomGridLine.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFrom: function () {
        /// <summary>Gets the beginning value of the CustomGridLine.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFrom: function (value) {
        /// <summary>Sets the beginning value of the CustomGridLine.</summary>
        /// <param name="value" type="number"/>>
    },
    getLineAlignment: function () {
        /// <summary>Gets the alignment for the Text line relative to the CustomeGridLine.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <summary>Sets the alignment for the Text line relative to the CustomeGridLine.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getMargin: function () {
        /// <summary>Defines the distance in pixels between the border of the bounding rectangle and the plot area of the chart. The Margin property of the CustomGridLine class gives access to the margins.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMargin: function (value) {
        /// <summary>Defines the distance in pixels between the border of the bounding rectangle and the plot area of the chart. The Margin property of the CustomGridLine class gives access to the margins.</summary>
        /// <param name="value" type="number"/>>
    },
    getOutsideText: function () {
        /// <summary>Gets the OutsideText which controls the positioning of the CustomGridLine label outside the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setOutsideText: function (value) {
        /// <summary>Sets the OutsideText which controls the positioning of the CustomGridLine label outside the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowLine: function () {
        /// <summary>Gets the ShowLine, which shows or hides the CustomGridLine line.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowLine: function (value) {
        /// <summary>Sets the ShowLine, which shows or hides the CustomGridLine line.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowText: function () {
        /// <summary>Gets the Showtext, which shows or hides the CustomGridLine text.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowText: function (value) {
        /// <summary>Sets the Showtext, which shows or hides the CustomGridLine text.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the Text Colot for a label in a CustomGridLine.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the Text Colot for a label in a CustomGridLine.</summary>
        /// <param name="value" type="String"/>>
    },
    getTo: function () {
        /// <summary>Gets the ending value of the CustomGridLine.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTo: function (value) {
        /// <summary>Sets the ending value of the CustomGridLine.</summary>
        /// <param name="value" type="number"/>>
    },
    getValue: function () {
        /// <summary>Gets the Value for a CustomGridLine.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the Value for a CustomGridLine.</summary>
        /// <param name="value" type="number"/>>
    },
    getColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getEndCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setEndCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStartCap: function () {
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setStartCap: function (value) {
        /// <param name="value" type="LineCap"/>>
    },
    getStyle: function () {
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <param name="value" type="DashStyle"/>>
    },
    getWidth: function () {
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var RealTimeSettings = function() {
}
cfx.RealTimeSettings = RealTimeSettings;
RealTimeSettings.prototype = {
    getBufferSize: function () {
        /// <summary>Gets the buffer size for real-time charts. When setting this property, the data array will be cleared.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBufferSize: function (value) {
        /// <summary>Sets the buffer size for real-time charts. When setting this property, the data array will be cleared.</summary>
        /// <param name="value" type="number"/>>
    },
    getFastScroll: function () {
        /// <summary>Gets the Fast Scrolling feature.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setFastScroll: function (value) {
        /// <summary>Sets the Fast Scrolling feature.</summary>
        /// <param name="value" type="bool"/>>
    },
    getIsBufferFull: function () {
        /// <summary>Gets the status of the Buffer to see if it is full.</summary>
        /// <returns type="bool"/>
        return true;
    },
    getLoopMarker: function () {
        /// <summary>Allows you to apply the supported Lineclass members to the real-time loop marker.</summary>
        /// <returns type="cfx.Line"/>
        return new Line();
    },
    getMode: function () {
        /// <summary>Sets or Gets the RealTime Mode.</summary>
        /// <returns type="cfx.RealTimeMode"/>
        return new RealTimeMode();
    },
    setMode: function (value) {
        /// <summary>Sets or Gets the RealTime Mode.</summary>
        /// <param name="value" type="cfx.RealTimeMode"/>>
    },
    beginAddData: function (points, action) {
        /// <param name="points" type="number"/>>
        /// <param name="action" type="cfx.RealTimeAction"/>>
    },
    endAddData: function (scrollLabels, scrollToEnd) {
        /// <param name="scrollLabels" type="bool"/>>
        /// <param name="scrollToEnd" type="bool"/>>
    }
};

var c_ = function() {
}
cfx.c_ = c_;
c_.prototype = {
    getAggressiveAllocation: function () {
        /// <summary>Gets a value indicating ChartFX should agreesively allocate space for future values. This increases performance at the cost of additional memory usage.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAggressiveAllocation: function (value) {
        /// <summary>Sets a value indicating ChartFX should agreesively allocate space for future values. This increases performance at the cost of additional memory usage.</summary>
        /// <param name="value" type="bool"/>>
    },
    setCompactedBy: function (value) {
        /// <summary>Sets a value indicating the interval of units to compress data.</summary>
        /// <param name="value" type="number"/>>
    },
    getInitializeHidden: function () {
        /// <summary>Gets a value indicating to intialize all non-initialized values to hidden value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInitializeHidden: function (value) {
        /// <summary>Sets a value indicating to intialize all non-initialized values to hidden value.</summary>
        /// <param name="value" type="bool"/>>
    },
    getLabels: function () {
        /// <returns type="cfx.cX"/>
        return new cX();
    },
    getItem: function (series, point) {
        /// <summary>Provides access to the Y value for the specific series and point.</summary>
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    setItem: function (series, point, value) {
        /// <summary>Provides access to the Y value for the specific series and point.</summary>
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <param name="value" type="number"/>>
    },
    clear: function () {
    },
    compact: function (step) {
        /// <param name="step" type="number"/>>
    },
    removeSeries: function (seriesIndex) {
        /// <param name="seriesIndex" type="number"/>>
    },
    undoCompact: function () {
    }
};

var Chart = function() {
}
cfx.Chart = Chart;
Chart.prototype = {
    getAllSeries: function () {
        /// <summary>Gets the global attributes which are shared across the series of the chart.</summary>
        /// <returns type="cfx.cn"/>
        return new cn();
    },
    getAnimations: function () {
        /// <summary>The 'human touch' in the visuals encourages users to have a more personal connection with the data.
jChartFX provides an attractive feature that allows you to render any chart using an animated style.</summary>
        /// <returns type="cfx.cp"/>
        return new cp();
    },
    getAxesStyle: function () {
        /// <summary>Used to change the style of the axes.</summary>
        /// <returns type="cfx.AxesStyle"/>
        return new AxesStyle();
    },
    setAxesStyle: function (value) {
        /// <summary>Used to change the style of the axes.</summary>
        /// <param name="value" type="cfx.AxesStyle"/>>
    },
    getAxesX: function () {
        /// <returns type="cfx.cQ"/>
        return new cQ();
    },
    getAxesY: function () {
        /// <returns type="cfx.cP"/>
        return new cP();
    },
    getAxisX: function () {
        /// <summary>Assigns properties specifically to the primary X axis.</summary>
        /// <returns type="cfx.AxisX"/>
        return new AxisX();
    },
    getAxisY: function () {
        /// <summary>Assigns properties specifically to the primary Y axis of the chart.</summary>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    getAxisY2: function () {
        /// <summary>Assigns properties specifically to the secondary Y axis of the chart.</summary>
        /// <returns type="cfx.AxisY"/>
        return new AxisY();
    },
    getBackground: function () {
        /// <summary>Allows you to assign a gradient to the background of a chart.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBackground: function (value) {
        /// <summary>Allows you to assign a gradient to the background of a chart.</summary>
        /// <param name="value" type="cfx.object"/>>
    },
    getBorder: function () {
        /// <summary>Gets a default or image border to the chart.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setBorder: function (value) {
        /// <summary>Sets a default or image border to the chart.</summary>
        /// <param name="value" type="cfx.object"/>>
    },
    getConditionalAttributes: function () {
        /// <returns type="cfx.cW"/>
        return new cW();
    },
    getCulture: function () {
        /// <returns type="CultureInfo"/>
        return new CultureInfo();
    },
    setCulture: function (value) {
        /// <param name="value" type="CultureInfo"/>>
    },
    getData: function () {
        /// <summary>Allows you to set the Y values. Alternativelly, the Y values can be access through the Y property of the DataValues class.</summary>
        /// <returns type="cfx.c_"/>
        return new c_();
    },
    getDataGrid: function () {
        /// <summary>Gets the Data Grid of the chart. The Data Grid is a spreadsheet that shows the data points in tabular format. When shown, it allows the user to see both the chart and the grid at the same time.</summary>
        /// <returns type="cfx.cb"/>
        return new cb();
    },
    getDataSource: function () {
        /// <summary>Gets the source containing the values used to populate the chart.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setDataSource: function (value) {
        /// <summary>Sets the source containing the values used to populate the chart.</summary>
        /// <param name="value" type="?"/>>
    },
    getDataSourceSettings: function () {
        /// <summary>Used to assign data related attributes to your chart applications.</summary>
        /// <returns type="cfx.DataSourceSettings"/>
        return new DataSourceSettings();
    },
    getDefaultPalette: function () {
        /// <returns type="cfx.Palette"/>
        return new Palette();
    },
    setDefaultPalette: function (value) {
        /// <param name="value" type="cfx.Palette"/>>
    },
    getExtensions: function () {
        /// <returns type="cfx.cg"/>
        return new cg();
    },
    getExtraStyle: function () {
        /// <returns type="cfx.ChartStyles"/>
        return new ChartStyles();
    },
    setExtraStyle: function (value) {
        /// <param name="value" type="cfx.ChartStyles"/>>
    },
    getGallery: function () {
        /// <summary>Sets the gallery type for the whole chart.</summary>
        /// <returns type="cfx.Gallery"/>
        return new Gallery();
    },
    setGallery: function (value) {
        /// <summary>Sets the gallery type for the whole chart.</summary>
        /// <param name="value" type="cfx.Gallery"/>>
    },
    getGalleryAttributes: function () {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart. The gallery attribute can also be accessed through the AllSeries property.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setGalleryAttributes: function (value) {
        /// <summary>Used to create a gallery object to assign additional attributes to the selected gallery type of the chart. The gallery attribute can also be accessed through the AllSeries property.</summary>
        /// <param name="value" type="?"/>>
    },
    getLegendBox: function () {
        /// <summary>Allows you to access the legend box of the chart.</summary>
        /// <returns type="cfx.LegendBox"/>
        return new LegendBox();
    },
    getMainPane: function () {
        /// <summary>Gets the default pane of the chart.</summary>
        /// <returns type="cfx.Pane"/>
        return new Pane();
    },
    getMenu: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.MenuAttributes"/>
        return new MenuAttributes();
    },
    getPanes: function () {
        /// <returns type="cfx.cN"/>
        return new cN();
    },
    getPlotAreaBackground: function () {
        /// <summary>Allows you to assign a gradient to the inside area of a chart.</summary>
        /// <returns type="cfx.object"/>
        return new object();
    },
    setPlotAreaBackground: function (value) {
        /// <summary>Allows you to assign a gradient to the inside area of a chart.</summary>
        /// <param name="value" type="cfx.object"/>>
    },
    getPlotAreaColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setPlotAreaColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getPlotAreaMargin: function () {
        /// <summary>Gets the top, bottom, left and right gaps of the chart.</summary>
        /// <returns type="cfx.cC"/>
        return new cC();
    },
    getPlotAreaTemplate: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setPlotAreaTemplate: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getPoints: function () {
        /// <returns type="cfx.cK"/>
        return new cK();
    },
    getRealTime: function () {
        /// <summary>Allows access to the RealTimeSettings class supported members used to create real-time charts.</summary>
        /// <returns type="cfx.RealTimeSettings"/>
        return new RealTimeSettings();
    },
    getSeries: function () {
        /// <returns type="cfx.cS"/>
        return new cS();
    },
    getTitles: function () {
        /// <returns type="cfx.cM"/>
        return new cM();
    },
    getToolTips: function () {
        /// <summary>Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area only.</summary>
        /// <returns type="cfx.ToolTipAttributes"/>
        return new ToolTipAttributes();
    },
    getView3D: function () {
        /// <summary>Allows you to enable or disable 3D view of the chart. Also permits to customize the 3D view.</summary>
        /// <returns type="cfx.cB"/>
        return new cB();
    },
    getZoom: function () {
        /// <returns type="cfx.ZoomAttributes"/>
        return new ZoomAttributes();
    },
    beginUpdate: function () {
    },
    cancelUpdate: function () {
    },
    endUpdate: function () {
    },
    expandMacros: function (mask, series, point, inPoint) {
        /// <param name="mask" type="string"/>>
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <param name="inPoint" type="bool"/>>
        /// <returns type="string"/>
        return "";
    },
    getMessageText: function (key) {
        /// <param name="key" type="string"/>>
        /// <returns type="string"/>
        return "";
    },
    markerToPixel: function (series, point) {
        /// <param name="series" type="number"/>>
        /// <param name="point" type="number"/>>
        /// <returns type="Point"/>
        return new Point();
    },
    recalculateScale: function () {
    },
    setMessageText: function (key, message) {
        /// <param name="key" type="string"/>>
        /// <param name="message" type="string"/>>
    },
    updateSizeNow: function () {
    }
};

cfx.treemap = { };
cfx.treemap._isCFXNamespace = true;

var TreeMapLayout = {
    Naive: 0,
    Squarified: 1
};
TreeMapLayout._isCFXEnum = true;
cfx.treemap.TreeMapLayout = TreeMapLayout;

var TreeMap = function() {
}
cfx.treemap.TreeMap = TreeMap;
TreeMap.prototype = {
    getLayout: function () {
        /// <summary>Specifies the layout style used by the TreeMap gallery.</summary>
        /// <returns type="cfx.treemap.TreeMapLayout"/>
        return new TreeMapLayout();
    },
    setLayout: function (value) {
        /// <summary>Specifies the layout style used by the TreeMap gallery.</summary>
        /// <param name="value" type="cfx.treemap.TreeMapLayout"/>>
    },
    getRandomLocations: function () {
        /// <summary>Controls whether the squares will be painted at random locations or sorted from bigger to smaller.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRandomLocations: function (value) {
        /// <summary>Controls whether the squares will be painted at random locations or sorted from bigger to smaller.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying TreeMap graphs.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying TreeMap graphs.</summary>
        /// <param name="value" type="string"/>>
    }
};

cfx.annotation = { };
cfx.annotation._isCFXNamespace = true;

var AnnImageMode = {
    Original: 0,
    Stretch: 1,
    Tile: 2
};
AnnImageMode._isCFXEnum = true;
cfx.annotation.AnnImageMode = AnnImageMode;

var AttachMode = {
    None: 0,
    Point: 1,
    Elastic: 2
};
AttachMode._isCFXEnum = true;
cfx.annotation.AttachMode = AttachMode;

var BalloonTailCorner = {
    TopLeft: 0,
    TopRight: 1,
    BottomRight: 2,
    BottomLeft: 3,
    Top: 4,
    Right: 5,
    Bottom: 6,
    Left: 7
};
BalloonTailCorner._isCFXEnum = true;
cfx.annotation.BalloonTailCorner = BalloonTailCorner;

var AnnotationTooltip = function() {
}
cfx.annotation.AnnotationTooltip = AnnotationTooltip;
AnnotationTooltip.prototype = {
    getData: function () {
        /// <returns type="?"/>
        return new ?();
    },
    setData: function (value) {
        /// <param name="value" type="?"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var AnnotationVector = function() {
}
cfx.annotation.AnnotationVector = AnnotationVector;
AnnotationVector.prototype = {
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationText = function() {
}
cfx.annotation.AnnotationText = AnnotationText;
AnnotationText.prototype = {
    getAlign: function () {
        /// <summary>Allows you to set the alignment for the selected annotation text object.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlign: function (value) {
        /// <summary>Allows you to set the alignment for the selected annotation text object.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getClip: function () {
        /// <summary>Gets a value indicating whether or not text will be clipped by the border of an AnnotationText.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClip: function (value) {
        /// <summary>Sets a value indicating whether or not text will be clipped by the border of an AnnotationText.</summary>
        /// <param name="value" type="bool"/>>
    },
    getCornerRadius: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCornerRadius: function (value) {
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Allows you to change the font attributes for an annotation object.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to change the font attributes for an annotation object.</summary>
        /// <param name="value" type="Font"/>>
    },
    getLineAlignment: function () {
        /// <summary>Sets the vertical alignment for the lines of an annotation text object.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <summary>Sets the vertical alignment for the lines of an annotation text object.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getOrientation: function () {
        /// <summary>Used to set the text orientation for a annotation text object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOrientation: function (value) {
        /// <summary>Used to set the text orientation for a annotation text object.</summary>
        /// <param name="value" type="number"/>>
    },
    getText: function () {
        /// <summary>Used to set the text for an annotation text object.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Used to set the text for an annotation text object.</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Sets the color of the text for an annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color of the text for an annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getWordWrap: function () {
        /// <summary>Gets a value indicating whether the text of an annotation text object will be word wrapped.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setWordWrap: function (value) {
        /// <summary>Sets a value indicating whether the text of an annotation text object will be word wrapped.</summary>
        /// <param name="value" type="bool"/>>
    },
    sizeToFit: function () {
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationBalloon = function() {
}
cfx.annotation.AnnotationBalloon = AnnotationBalloon;
AnnotationBalloon.prototype = {
    getTailCorner: function () {
        /// <summary>Gets the corner of the balloon the tip or arrow.</summary>
        /// <returns type="cfx.annotation.BalloonTailCorner"/>
        return new BalloonTailCorner();
    },
    setTailCorner: function (value) {
        /// <summary>Sets the corner of the balloon the tip or arrow.</summary>
        /// <param name="value" type="cfx.annotation.BalloonTailCorner"/>>
    },
    getTailFactor: function () {
        /// <summary>Gets the annotation balloon tip size.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTailFactor: function (value) {
        /// <summary>Sets the annotation balloon tip size.</summary>
        /// <param name="value" type="number"/>>
    },
    getAlign: function () {
        /// <summary>Allows you to set the alignment for the selected annotation text object.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlign: function (value) {
        /// <summary>Allows you to set the alignment for the selected annotation text object.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getClip: function () {
        /// <summary>Gets a value indicating whether or not text will be clipped by the border of an AnnotationText.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClip: function (value) {
        /// <summary>Sets a value indicating whether or not text will be clipped by the border of an AnnotationText.</summary>
        /// <param name="value" type="bool"/>>
    },
    getCornerRadius: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCornerRadius: function (value) {
        /// <param name="value" type="number"/>>
    },
    getFont: function () {
        /// <summary>Allows you to change the font attributes for an annotation object.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Allows you to change the font attributes for an annotation object.</summary>
        /// <param name="value" type="Font"/>>
    },
    getLineAlignment: function () {
        /// <summary>Sets the vertical alignment for the lines of an annotation text object.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setLineAlignment: function (value) {
        /// <summary>Sets the vertical alignment for the lines of an annotation text object.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getOrientation: function () {
        /// <summary>Used to set the text orientation for a annotation text object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOrientation: function (value) {
        /// <summary>Used to set the text orientation for a annotation text object.</summary>
        /// <param name="value" type="number"/>>
    },
    getText: function () {
        /// <summary>Used to set the text for an annotation text object.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Used to set the text for an annotation text object.</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Sets the color of the text for an annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color of the text for an annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getWordWrap: function () {
        /// <summary>Gets a value indicating whether the text of an annotation text object will be word wrapped.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setWordWrap: function (value) {
        /// <summary>Sets a value indicating whether the text of an annotation text object will be word wrapped.</summary>
        /// <param name="value" type="bool"/>>
    },
    sizeToFit: function () {
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationRectangle = function() {
}
cfx.annotation.AnnotationRectangle = AnnotationRectangle;
AnnotationRectangle.prototype = {
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationPicture = function() {
}
cfx.annotation.AnnotationPicture = AnnotationPicture;
AnnotationPicture.prototype = {
    getMode: function () {
        /// <summary>Sets the rendering style for the image used as the annotation picture.</summary>
        /// <returns type="cfx.annotation.AnnImageMode"/>
        return new AnnImageMode();
    },
    setMode: function (value) {
        /// <summary>Sets the rendering style for the image used as the annotation picture.</summary>
        /// <param name="value" type="cfx.annotation.AnnImageMode"/>>
    },
    getPicture: function () {
        /// <summary>Allows you to set the image for an annotation picture object.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setPicture: function (value) {
        /// <summary>Allows you to set the image for an annotation picture object.</summary>
        /// <param name="value" type="Image"/>>
    },
    sizeToFit: function () {
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationContainer = function() {
}
cfx.annotation.AnnotationContainer = AnnotationContainer;
AnnotationContainer.prototype = {
    getElement: function () {
        /// <summary>Gets the element that will contain the Chart or Gauge object added as an annotation.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setElement: function (value) {
        /// <summary>Sets the element that will contain the Chart or Gauge object added as an annotation.</summary>
        /// <param name="value" type="?"/>>
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationCircle = function() {
}
cfx.annotation.AnnotationCircle = AnnotationCircle;
AnnotationCircle.prototype = {
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationArrow = function() {
}
cfx.annotation.AnnotationArrow = AnnotationArrow;
AnnotationArrow.prototype = {
    getEndCap: function () {
        /// <summary>Allows you to control the ending arrow head height, width and style of a selected annotation arrow object.</summary>
        /// <returns type="AdjustableArrowCap"/>
        return new AdjustableArrowCap();
    },
    setEndCap: function (value) {
        /// <summary>Allows you to control the ending arrow head height, width and style of a selected annotation arrow object.</summary>
        /// <param name="value" type="AdjustableArrowCap"/>>
    },
    getStartCap: function () {
        /// <summary>Allows you to control the starting arrow head height, width and style of a selected annotation arrow object.</summary>
        /// <returns type="AdjustableArrowCap"/>
        return new AdjustableArrowCap();
    },
    setStartCap: function (value) {
        /// <summary>Allows you to control the starting arrow head height, width and style of a selected annotation arrow object.</summary>
        /// <param name="value" type="AdjustableArrowCap"/>>
    },
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var AnnotationArc = function() {
}
cfx.annotation.AnnotationArc = AnnotationArc;
AnnotationArc.prototype = {
    getAnchor: function () {
        /// <summary>Gets the Anchor style for the AnnotationObject.</summary>
        /// <returns type="AnchorStyles"/>
        return new AnchorStyles();
    },
    setAnchor: function (value) {
        /// <summary>Sets the Anchor style for the AnnotationObject.</summary>
        /// <param name="value" type="AnchorStyles"/>>
    },
    getBorder: function () {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <returns type="cfx.annotation.Line"/>
        return new Line();
    },
    setBorder: function (value) {
        /// <summary>Allows you to apply border attributes to a selected annotation object.</summary>
        /// <param name="value" type="cfx.annotation.Line"/>>
    },
    getColor: function () {
        /// <summary>Gets the inside fill color for annotation object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the inside fill color for annotation object.</summary>
        /// <param name="value" type="String"/>>
    },
    getHeight: function () {
        /// <summary>Gets the height in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeight: function (value) {
        /// <summary>Sets the height in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getLeft: function () {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLeft: function (value) {
        /// <summary>Allows you to specify or read the left position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getObjectBounds: function () {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <returns type="Rectangle"/>
        return new Rectangle();
    },
    setObjectBounds: function (value) {
        /// <summary>Allows you to specify the bounds for a selected annotation object.</summary>
        /// <param name="value" type="Rectangle"/>>
    },
    getPaintBefore: function () {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintBefore: function (value) {
        /// <summary>Configures the selected annotation object to paint before the rest of the chart elements.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPattern: function () {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <returns type="HatchStyle"/>
        return new HatchStyle();
    },
    setPattern: function (value) {
        /// <summary>Allows you to set a pattern for the selected annotation object.</summary>
        /// <param name="value" type="HatchStyle"/>>
    },
    getPlotAreaOnly: function () {
        /// <summary>Gets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPlotAreaOnly: function (value) {
        /// <summary>Sets a value specifying if annotation objects will be drawn outside the plot area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setTag: function (value) {
        /// <summary>Allows you to get or set a unique identifier to the objects you have created in the chart area.</summary>
        /// <param name="value" type="?"/>>
    },
    getToolTip: function () {
        /// <returns type="cfx.annotation.AnnotationTooltip"/>
        return new AnnotationTooltip();
    },
    getTop: function () {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTop: function (value) {
        /// <summary>Allows you to specify or read the top position of a selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Used to show or hide a selected annotation object in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the Width in pixels for the selected annotation object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the Width in pixels for the selected annotation object.</summary>
        /// <param name="value" type="number"/>>
    },
    attach: function (dx, dy) {
        /// <param name="dx" type="number"/>>
        /// <param name="dy" type="number"/>>
    },
    attachElastic: function (dxLeft, dyTop, dxRight, dyBottom) {
        /// <param name="dxLeft" type="number"/>>
        /// <param name="dyTop" type="number"/>>
        /// <param name="dxRight" type="number"/>>
        /// <param name="dyBottom" type="number"/>>
    },
    attachAlign: function (horizontalAlignment, dx, verticalAlignment, dy) {
        /// <param name="horizontalAlignment" type="StringAlignment"/>>
        /// <param name="dx" type="number"/>>
        /// <param name="verticalAlignment" type="StringAlignment"/>>
        /// <param name="dy" type="number"/>>
    },
    detach: function () {
    },
    flip: function (horizontal) {
        /// <param name="horizontal" type="bool"/>>
    },
    refresh: function () {
    },
    rotate: function (clockWise) {
        /// <param name="clockWise" type="bool"/>>
    }
};

var dQ = function() {
}
cfx.annotation.dQ = dQ;
dQ.prototype = {
    getItem: function (n) {
        /// <param name="n" type="number"/>>
        /// <returns type="cfx.annotation.dO"/>
        return new dO();
    },
    add: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    },
    contains: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
        /// <returns type="bool"/>
        return true;
    },
    copyTo: function (array, index) {
        /// <param name="array" type="cfx.annotation.AnnotationObject[]"/>>
        /// <param name="index" type="number"/>>
    },
    indexOf: function (annObject) {
        /// <param name="annObject" type="cfx.annotation.dO"/>>
        /// <returns type="number"/>
        return 0;
    },
    insert: function (index, annObj) {
        /// <param name="index" type="number"/>>
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    },
    remove: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    }
};

var AnnotationList = function() {
}
cfx.annotation.AnnotationList = AnnotationList;
AnnotationList.prototype = {
    getItem: function (n) {
        /// <param name="n" type="number"/>>
        /// <returns type="cfx.annotation.dO"/>
        return new dO();
    },
    add: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    },
    contains: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
        /// <returns type="bool"/>
        return true;
    },
    copyTo: function (array, index) {
        /// <param name="array" type="cfx.annotation.AnnotationObject[]"/>>
        /// <param name="index" type="number"/>>
    },
    indexOf: function (annObject) {
        /// <param name="annObject" type="cfx.annotation.dO"/>>
        /// <returns type="number"/>
        return 0;
    },
    insert: function (index, annObj) {
        /// <param name="index" type="number"/>>
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    },
    remove: function (annObj) {
        /// <param name="annObj" type="cfx.annotation.dO"/>>
    }
};

var Annotations = function() {
}
cfx.annotation.Annotations = Annotations;
Annotations.prototype = {
    getList: function () {
        /// <returns type="cfx.annotation.AnnotationList"/>
        return new AnnotationList();
    }
};

cfx.density = { };
cfx.density._isCFXNamespace = true;

var DensityColor = function() {
}
cfx.density.DensityColor = DensityColor;
DensityColor.prototype = {
    getColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getPosition: function () {
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var Density = function() {
}
cfx.density.Density = Density;
Density.prototype = {
    getSize: function () {
        /// <summary>Gets the size size of the density clusters.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size size of the density clusters.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying  density clusters.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying  density clusters.</summary>
        /// <param name="value" type="string"/>>
    }
};

cfx.equalizer = { };
cfx.equalizer._isCFXNamespace = true;

var EqualizerItem = function() {
}
cfx.equalizer.EqualizerItem = EqualizerItem;
EqualizerItem.prototype = {
    getBorderColor: function () {
        /// <summary>Gets the border color of an EqualizerBar item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an EqualizerBar item.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an EqualizerBar top item.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an EqualizerBar top item.</summary>
        /// <param name="value" type="String"/>>
    },
    getCount: function () {
        /// <summary>Gets the number of elements of the same color for an EqualizerBar top item.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setCount: function (value) {
        /// <summary>Sets the number of elements of the same color for an EqualizerBar top item.</summary>
        /// <param name="value" type="number"/>>
    }
};

var EqualizerItemCollection = function() {
}
cfx.equalizer.EqualizerItemCollection = EqualizerItemCollection;
EqualizerItemCollection.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.equalizer.EqualizerItem"/>
        return new EqualizerItem();
    },
    add: function (item) {
        /// <param name="item" type="cfx.equalizer.EqualizerItem"/>>
    },
    clear: function () {
    }
};

var EqualizerBar = function() {
}
cfx.equalizer.EqualizerBar = EqualizerBar;
EqualizerBar.prototype = {
    getGapRatio: function () {
        /// <summary>Defines the ratio of separation between the Equalizer Bar rectangles.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setGapRatio: function (value) {
        /// <summary>Defines the ratio of separation between the Equalizer Bar rectangles.</summary>
        /// <param name="value" type="number"/>>
    },
    getHeightRatio: function () {
        /// <summary>Allows you to set a color for the parts of the bar that do not have data.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeightRatio: function (value) {
        /// <summary>Allows you to set a color for the parts of the bar that do not have data.</summary>
        /// <param name="value" type="number"/>>
    },
    getOffBorderColor: function () {
        /// <summary>Allows you to set a border color for the parts of the bar that do not have data.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setOffBorderColor: function (value) {
        /// <summary>Allows you to set a border color for the parts of the bar that do not have data.</summary>
        /// <param name="value" type="String"/>>
    },
    getOffColor: function () {
        /// <summary>Allows you to set a color for the parts of the bar that do not have data.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setOffColor: function (value) {
        /// <summary>Allows you to set a color for the parts of the bar that do not have data.</summary>
        /// <param name="value" type="String"/>>
    },
    getRoundnessRatio: function () {
        /// <summary>Defines the ratio of roundness for the corners of the Equalizer Bar rectangles.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setRoundnessRatio: function (value) {
        /// <summary>Defines the ratio of roundness for the corners of the Equalizer Bar rectangles.</summary>
        /// <param name="value" type="number"/>>
    },
    getShowBorders: function () {
        /// <summary>Allows you to show or hide the borders of the rectangles in the Equalizer Bar.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowBorders: function (value) {
        /// <summary>Allows you to show or hide the borders of the rectangles in the Equalizer Bar.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying Equalizer Bar rectangles.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying Equalizer Bar rectangles.</summary>
        /// <param name="value" type="string"/>>
    },
    getTopItems: function () {
        /// <returns type="cfx.equalizer.EqualizerItemCollection"/>
        return new EqualizerItemCollection();
    }
};

cfx.heatmap = { };
cfx.heatmap._isCFXNamespace = true;

var ColorGradientStop = function() {
}
cfx.heatmap.ColorGradientStop = ColorGradientStop;
ColorGradientStop.prototype = {
    getColor: function () {
        /// <summary>This property is used to change the color of the ColorGradientStop added to the Heatmap Gallery.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>This property is used to change the color of the ColorGradientStop added to the Heatmap Gallery.</summary>
        /// <param name="value" type="String"/>>
    },
    getOffset: function () {
        /// <summary>The gradient stop's Offset property specifies the position of the gradient stop's color on the HeatMaps.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOffset: function (value) {
        /// <summary>The gradient stop's Offset property specifies the position of the gradient stop's color on the HeatMaps.</summary>
        /// <param name="value" type="number"/>>
    }
};

var ColorGradientCollection = function() {
}
cfx.heatmap.ColorGradientCollection = ColorGradientCollection;
ColorGradientCollection.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.heatmap.ColorGradientStop"/>
        return new ColorGradientStop();
    },
    setItem: function (index, value) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.heatmap.ColorGradientStop"/>>
    },
    add: function (stop) {
        /// <param name="stop" type="cfx.heatmap.ColorGradientStop"/>>
    },
    clear: function () {
    },
    insert: function (index, stop) {
        /// <param name="index" type="number"/>>
        /// <param name="stop" type="cfx.heatmap.ColorGradientStop"/>>
    }
};

var HeatMap = function() {
}
cfx.heatmap.HeatMap = HeatMap;
HeatMap.prototype = {
    getGradientStops: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.heatmap.ColorGradientCollection"/>
        return new ColorGradientCollection();
    },
    getLegendHeight: function () {
        /// <summary>Gets the Legend Height of the Chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLegendHeight: function (value) {
        /// <summary>Sets the Legend Height of the Chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying HeatMap graphs.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying HeatMap graphs.</summary>
        /// <param name="value" type="string"/>>
    }
};

cfx.data = { };
cfx.data._isCFXNamespace = true;

var CrosstabAggregate = {
    Sum: 0,
    First: 1,
    Last: 2,
    Avg: 3,
    Min: 4,
    Max: 5
};
CrosstabAggregate._isCFXEnum = true;
cfx.data.CrosstabAggregate = CrosstabAggregate;

var dU = function() {
}
cfx.data.dU = dU;
dU.prototype = {
    getHeading: function () {
        /// <returns type="string"/>
        return "";
    },
    setHeading: function (value) {
        /// <param name="value" type="string"/>>
    },
    getName: function () {
        /// <returns type="string"/>
        return "";
    },
    setName: function (value) {
        /// <param name="value" type="string"/>>
    },
    getSeparator: function () {
        /// <returns type="string"/>
        return "";
    },
    setSeparator: function (value) {
        /// <param name="value" type="string"/>>
    },
    getSort: function () {
        /// <returns type="bool"/>
        return true;
    },
    setSort: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getSortID: function () {
        /// <returns type="string"/>
        return "";
    },
    setSortID: function (value) {
        /// <param name="value" type="string"/>>
    }
};

var CrosstabDataProvider = function() {
}
cfx.data.CrosstabDataProvider = CrosstabDataProvider;
CrosstabDataProvider.prototype = {
    getColumns: function () {
        /// <returns type="cfx.data.dU"/>
        return new dU();
    },
    getDataSource: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setDataSource: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="?"/>>
    },
    getRows: function () {
        /// <returns type="cfx.data.dU"/>
        return new dU();
    },
    getValueName: function () {
        /// <returns type="string"/>
        return "";
    },
    setValueName: function (value) {
        /// <param name="value" type="string"/>>
    }
};

cfx.overlaybubble = { };
cfx.overlaybubble._isCFXNamespace = true;

var OverlayBubble = function() {
}
cfx.overlaybubble.OverlayBubble = OverlayBubble;
OverlayBubble.prototype = {
    getHorizontalAlignment: function () {
        /// <summary>Controls the horizontal alignment for the concentric bubbles.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setHorizontalAlignment: function (value) {
        /// <summary>Controls the horizontal alignment for the concentric bubbles.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying  the OverlayBubble graphs.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying  the OverlayBubble graphs.</summary>
        /// <param name="value" type="string"/>>
    },
    getVerticalAlignment: function () {
        /// <summary>Controls the vertical alignment for the concentric bubbles.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setVerticalAlignment: function (value) {
        /// <summary>Controls the vertical alignment for the concentric bubbles.</summary>
        /// <param name="value" type="StringAlignment"/>>
    }
};

cfx.highlow = { };
cfx.highlow._isCFXNamespace = true;

var HighLow = function() {
}
cfx.highlow.HighLow = HighLow;
HighLow.prototype = {

};

cfx.bullet = { };
cfx.bullet._isCFXNamespace = true;

var Bullet = function() {
}
cfx.bullet.Bullet = Bullet;
Bullet.prototype = {
    getActualVolume: function () {
        /// <returns type="number"/>
        return 0;
    },
    setActualVolume: function (value) {
        /// <param name="value" type="number"/>>
    },
    getTargetVolume: function () {
        /// <returns type="number"/>
        return 0;
    },
    setTargetVolume: function (value) {
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    }
};

cfx.rose = { };
cfx.rose._isCFXNamespace = true;

var Rose = function() {
}
cfx.rose.Rose = Rose;
Rose.prototype = {
    getCircular: function () {
        /// <summary>Gets a value specifying to draw the Rose chart in a round or polygonal shape.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setCircular: function (value) {
        /// <summary>Sets a value specifying to draw the Rose chart in a round or polygonal shape.</summary>
        /// <param name="value" type="bool"/>>
    },
    getClockwise: function () {
        /// <summary>Gets a value indicating to plot points in a clockwise or counter-clockwise direction.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setClockwise: function (value) {
        /// <summary>Sets a value indicating to plot points in a clockwise or counter-clockwise direction.</summary>
        /// <param name="value" type="bool"/>>
    },
    getInternalRadius: function () {
        /// <summary>Chart FX allows displaying series in the shape of a bar instead of a slice by leaving a hole at the center of the chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setInternalRadius: function (value) {
        /// <summary>Chart FX allows displaying series in the shape of a bar instead of a slice by leaving a hole at the center of the chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getSideBySide: function () {
        /// <summary>Gets the Galleries of the Rose chart side by side.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSideBySide: function (value) {
        /// <summary>Sets the Galleries of the Rose chart side by side.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStartAngle: function () {
        /// <summary>Gets a value specifying the starting angle in degrees for a rose chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStartAngle: function (value) {
        /// <summary>Sets a value specifying the starting angle in degrees for a rose chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying Rose graphs.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying Rose graphs.</summary>
        /// <param name="value" type="string"/>>
    }
};

cfx.funnel = { };
cfx.funnel._isCFXNamespace = true;

var Funnel = function() {
}
cfx.funnel.Funnel = Funnel;
Funnel.prototype = {
    getConic: function () {
        /// <summary>Determines whether or not the funnel will be shown with a Conic effect.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setConic: function (value) {
        /// <summary>Determines whether or not the funnel will be shown with a Conic effect.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFaces: function () {
        /// <summary>Gets the number of faces of a 3D-enabled funnel chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFaces: function (value) {
        /// <summary>Sets the number of faces of a 3D-enabled funnel chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelInside: function () {
        /// <summary>Instructs jChartFX to try to paint the point labels directly on the corresponding slice of a Funnel chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setLabelInside: function (value) {
        /// <summary>Instructs jChartFX to try to paint the point labels directly on the corresponding slice of a Funnel chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getLabelLine: function () {
        /// <summary>Returns the Line object of the funnel gallery.</summary>
        /// <returns type="cfx.funnel.Line"/>
        return new Line();
    },
    getLabelLineAsSeries: function () {
        /// <summary>Instructs jChartFX to try to paint the line of the labels on the corresponding slice of the Funnel chart.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setLabelLineAsSeries: function (value) {
        /// <summary>Instructs jChartFX to try to paint the line of the labels on the corresponding slice of the Funnel chart.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeparation: function () {
        /// <summary>Gets the separation of the points in a funnel chart.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparation: function (value) {
        /// <summary>Sets the separation of the points in a funnel chart.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Allows you to define a vector template to be used when displaying Funnel graphs.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Allows you to define a vector template to be used when displaying Funnel graphs.</summary>
        /// <param name="value" type="string"/>>
    },
    getTipHeight: function () {
        /// <summary>Gets the percentage of the total funnel height that will be used by the tip</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTipHeight: function (value) {
        /// <summary>Sets the percentage of the total funnel height that will be used by the tip</summary>
        /// <param name="value" type="number"/>>
    },
    getTipWidth: function () {
        /// <summary>Gets the percentage of the total funnel width that will be used by the tip.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTipWidth: function (value) {
        /// <summary>Sets the percentage of the total funnel width that will be used by the tip.</summary>
        /// <param name="value" type="number"/>>
    }
};

cfx.maps = { };
cfx.maps._isCFXNamespace = true;

var MapLabelMode = {
    All: 1,
    DataOnly: 2
};
MapLabelMode._isCFXEnum = true;
cfx.maps.MapLabelMode = MapLabelMode;

var MapLayerGallery = {
    Bubble: 0,
    Surface: 1
};
MapLayerGallery._isCFXEnum = true;
cfx.maps.MapLayerGallery = MapLayerGallery;

var MapProjection = {
    None: 0,
    Mercator: 1
};
MapProjection._isCFXEnum = true;
cfx.maps.MapProjection = MapProjection;

var SurfaceExtendMethod = {
    None: 0,
    Proyect: 1,
    Average: 2
};
SurfaceExtendMethod._isCFXEnum = true;
cfx.maps.SurfaceExtendMethod = SurfaceExtendMethod;

var WinnerCondition = function() {
}
cfx.maps.WinnerCondition = WinnerCondition;
WinnerCondition.prototype = {
    getWinnerGreatest: function () {
        /// <summary>Gets a value indicating whether or not the winner condition is applied to the datafield with the greater value</summary>
        /// <returns type="bool"/>
        return true;
    },
    setWinnerGreatest: function (value) {
        /// <summary>Sets a value indicating whether or not the winner condition is applied to the datafield with the greater value</summary>
        /// <param name="value" type="bool"/>>
    }
};

var d4 = function() {
}
cfx.maps.d4 = d4;
d4.prototype = {
    getLabel: function () {
        /// <summary>Gets a string value with the shape Label</summary>
        /// <returns type="string"/>
        return "";
    },
    getLabelLatitude: function () {
        /// <summary>Gets a value with the shape Label Latitude position</summary>
        /// <returns type="number"/>
        return 0;
    },
    getLabelLongitude: function () {
        /// <summary>Gets a value with the shape Label Longitude position</summary>
        /// <returns type="number"/>
        return 0;
    },
    getLayer: function () {
        /// <summary>Gets the layer object containing the selected shape</summary>
        /// <returns type="cfx.maps.MapLayer"/>
        return new MapLayer();
    },
    getMaxLatitude: function () {
        /// <summary>Gets the shape max Latitude number value</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMaxLongitude: function () {
        /// <summary>Gets the shape max Longitude number value</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMinLatitude: function () {
        /// <summary>Gets the shape min Latitude number value</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMinLongitude: function () {
        /// <summary>Gets the shape min Longitude number value</summary>
        /// <returns type="number"/>
        return 0;
    },
    getName: function () {
        /// <summary>Gets a string value with the shape name</summary>
        /// <returns type="string"/>
        return "";
    },
    getPaintAttributes: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.maps.PointAttributes"/>
        return new PointAttributes();
    },
    getFieldValue: function (name) {
        /// <param name="name" type="string"/>>
        /// <returns type="string"/>
        return "";
    },
    hasLabelPosition: function () {
        /// <returns type="bool"/>
        return true;
    }
};

var ec = function() {
}
cfx.maps.ec = ec;
ec.prototype = {
    getContextAttributes: function () {
        /// <summary>Returns the collection of ConditionalAttributes objects of the filter object.</summary>
        /// <returns type="cfx.maps.ConditionalAttributes"/>
        return new ConditionalAttributes();
    },
    getRestrictToData: function () {
        /// <summary>Gets a value indicating whether or not the RestrictToData method is applied.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRestrictToData: function (value) {
        /// <summary>Sets a value indicating whether or not the RestrictToData method is applied.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowContext: function () {
        /// <summary>Gets a value indicating whether the sorrounding areas or neigbours are shown around the selected layer</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowContext: function (value) {
        /// <summary>Sets a value indicating whether the sorrounding areas or neigbours are shown around the selected layer</summary>
        /// <param name="value" type="bool"/>>
    },
    addCondition: function (condition) {
        /// <param name="condition" type="cfx.maps.object"/>>
    },
    addLabel: function (label) {
        /// <param name="label" type="string"/>>
    }
};

var ed = function() {
}
cfx.maps.ed = ed;
ed.prototype = {
    getBlur: function () {
        /// <summary>Gets the Map Shadow blur value</summary>
        /// <returns type="number"/>
        return 0;
    },
    setBlur: function (value) {
        /// <summary>Sets the Map Shadow blur value</summary>
        /// <param name="value" type="number"/>>
    },
    getColor: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="String"/>>
    },
    getDataOnly: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setDataOnly: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getXOffset: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setXOffset: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getYOffset: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setYOffset: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    }
};

var MapLayer = function() {
}
cfx.maps.MapLayer = MapLayer;
MapLayer.prototype = {
    getConditions: function () {
        /// <returns type="cfx.maps.cW"/>
        return new cW();
    },
    getContentTemplate: function () {
        /// <summary>Gets a XAML ContentTemplate for the MapLayer.</summary>
        /// <returns type="string"/>
        return "";
    },
    setContentTemplate: function (value) {
        /// <summary>Sets a XAML ContentTemplate for the MapLayer.</summary>
        /// <param name="value" type="string"/>>
    },
    getDefaultAttributes: function () {
        /// <summary>Gets the DefaultAttributes object for the Map Layer object.</summary>
        /// <returns type="cfx.maps.ConditionalAttributes"/>
        return new ConditionalAttributes();
    },
    getFieldLabel: function () {
        /// <summary>Gets the FieldLabel value for the Layer</summary>
        /// <returns type="string"/>
        return "";
    },
    setFieldLabel: function (value) {
        /// <summary>Sets the FieldLabel value for the Layer</summary>
        /// <param name="value" type="string"/>>
    },
    getFieldName: function () {
        /// <summary>Gets the FieldName for the Layer</summary>
        /// <returns type="string"/>
        return "";
    },
    setFieldName: function (value) {
        /// <summary>Sets the FieldName for the Layer</summary>
        /// <param name="value" type="string"/>>
    },
    getFilter: function () {
        /// <summary>Gets the Filter object for the Layer</summary>
        /// <returns type="cfx.maps.ec"/>
        return new ec();
    },
    getGallery: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.maps.MapLayerGallery"/>
        return new MapLayerGallery();
    },
    setGallery: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.maps.MapLayerGallery"/>>
    },
    getGalleryAttributes: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="?"/>
        return new ?();
    },
    setGalleryAttributes: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="?"/>>
    },
    getHandleEvents: function () {
        /// <summary>Used to allow or prevent from automatically handling triggered events
In order for developers to custom handling events programmatically, you must set the HandleEvents property for the layer object to False.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setHandleEvents: function (value) {
        /// <summary>Used to allow or prevent from automatically handling triggered events
In order for developers to custom handling events programmatically, you must set the HandleEvents property for the layer object to False.</summary>
        /// <param name="value" type="bool"/>>
    },
    getIndex: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getLabelMode: function () {
        /// <returns type="cfx.maps.MapLabelMode"/>
        return new MapLabelMode();
    },
    setLabelMode: function (value) {
        /// <param name="value" type="cfx.maps.MapLabelMode"/>>
    },
    getMaxLatitude: function () {
        /// <summary>Gets the Layer Max Latitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMaxLongitude: function () {
        /// <summary>Gets the Layer Max Longitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMinLatitude: function () {
        /// <summary>Gets the Layer Min Latitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    getMinLongitude: function () {
        /// <summary>Gets the Layer Min Longitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    getPath: function () {
        /// <summary>Gets the location from where to import a map layer.</summary>
        /// <returns type="string"/>
        return "";
    },
    setPath: function (value) {
        /// <summary>Sets the location from where to import a map layer.</summary>
        /// <param name="value" type="string"/>>
    },
    getProcessLabels: function () {
        /// <returns type="bool"/>
        return true;
    },
    setProcessLabels: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getShadow: function () {
        /// <summary>Gets the layer shadow attributes object.</summary>
        /// <returns type="cfx.maps.ed"/>
        return new ed();
    },
    getShapes: function () {
        /// <returns type="cfx.maps.MapShapeCollection"/>
        return new MapShapeCollection();
    },
    getShowWithoutLabels: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowWithoutLabels: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextShadow: function () {
        /// <summary>Gets a value indicating whether or not shadowing is applied for layer labels.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setTextShadow: function (value) {
        /// <summary>Sets a value indicating whether or not shadowing is applied for layer labels.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUsesData: function () {
        /// <summary>Gets a value indicating whether or not the chart object conditions are applied</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUsesData: function (value) {
        /// <summary>Sets a value indicating whether or not the chart object conditions are applied</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    }
};

var MapShapeCollection = function() {
}
cfx.maps.MapShapeCollection = MapShapeCollection;
MapShapeCollection.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.maps.d4"/>
        return new d4();
    }
};

var ef = function() {
}
cfx.maps.ef = ef;
ef.prototype = {
    getMaxPercent: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMaxPercent: function (value) {
        /// <param name="value" type="number"/>>
    },
    getMaxSize: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMaxSize: function (value) {
        /// <param name="value" type="number"/>>
    },
    getMinPercent: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMinPercent: function (value) {
        /// <param name="value" type="number"/>>
    },
    getMinSize: function () {
        /// <returns type="number"/>
        return 0;
    },
    setMinSize: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var ColorGradientCollection = function() {
}
cfx.maps.ColorGradientCollection = ColorGradientCollection;
ColorGradientCollection.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.maps.ColorGradient"/>
        return new ColorGradient();
    },
    add: function (colorGradient) {
        /// <param name="colorGradient" type="cfx.maps.ColorGradient"/>>
    },
    clear: function () {
    }
};

var ColorGradient = function() {
}
cfx.maps.ColorGradient = ColorGradient;
ColorGradient.prototype = {
    getColor: function () {
        /// <summary>Gets the color for the ColorGradient object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color for the ColorGradient object.</summary>
        /// <param name="value" type="String"/>>
    },
    getOffset: function () {
        /// <summary>Gets the Offset property for the ColorGradient object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOffset: function (value) {
        /// <summary>Sets the Offset property for the ColorGradient object.</summary>
        /// <param name="value" type="number"/>>
    }
};

var el = function() {
}
cfx.maps.el = el;
el.prototype = {
    getBackColor: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="String"/>>
    },
    getBorder: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.maps.Line"/>
        return new Line();
    },
    getMargin: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMargin: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    }
};

var ep = function() {
}
cfx.maps.ep = ep;
ep.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.maps.MapLayer"/>
        return new MapLayer();
    },
    add: function (layer) {
        /// <param name="layer" type="cfx.maps.MapLayer"/>>
    },
    clear: function () {
    },
    find: function (name) {
        /// <param name="name" type="string"/>>
        /// <returns type="cfx.maps.MapLayer"/>
        return new MapLayer();
    },
    insert: function (index, layer) {
        /// <param name="index" type="number"/>>
        /// <param name="layer" type="cfx.maps.MapLayer"/>>
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var Map = function() {
}
cfx.maps.Map = Map;
Map.prototype = {
    getBackColor: function () {
        /// <summary>Gets the background color of the Map</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the background color of the Map</summary>
        /// <param name="value" type="String"/>>
    },
    getBackCoversPlotArea: function () {
        /// <summary>Gets a value indicating whether or not the chart back color covers the plot area</summary>
        /// <returns type="bool"/>
        return true;
    },
    setBackCoversPlotArea: function (value) {
        /// <summary>Sets a value indicating whether or not the chart back color covers the plot area</summary>
        /// <param name="value" type="bool"/>>
    },
    getChart: function () {
        /// <returns type="?"/>
        return new ?();
    },
    getLayers: function () {
        /// <returns type="cfx.maps.ep"/>
        return new ep();
    },
    getMargin: function () {
        /// <summary>Gets the margins object of the Map</summary>
        /// <returns type="cfx.maps.cC"/>
        return new cC();
    },
    getMaxLatitude: function () {
        /// <summary>Gets the Map Max Latitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxLatitude: function (value) {
        /// <summary>Sets the Map Max Latitude Coordinates</summary>
        /// <param name="value" type="number"/>>
    },
    getMaxLongitude: function () {
        /// <summary>Gets the Map Max Longitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMaxLongitude: function (value) {
        /// <summary>Sets the Map Max Longitude Coordinates</summary>
        /// <param name="value" type="number"/>>
    },
    getMinLatitude: function () {
        /// <summary>Gets the Map Min Latitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinLatitude: function (value) {
        /// <summary>Sets the Map Min Latitude Coordinates</summary>
        /// <param name="value" type="number"/>>
    },
    getMinLongitude: function () {
        /// <summary>Gets the Map Min Longitude Coordinates</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinLongitude: function (value) {
        /// <summary>Sets the Map Min Longitude Coordinates</summary>
        /// <param name="value" type="number"/>>
    },
    getPath: function () {
        /// <summary>Gets the location from where to import a map file.</summary>
        /// <returns type="string"/>
        return "";
    },
    setPath: function (value) {
        /// <summary>Sets the location from where to import a map file.</summary>
        /// <param name="value" type="string"/>>
    },
    getProjection: function () {
        /// <summary>Gets the Map Projection</summary>
        /// <returns type="cfx.maps.MapProjection"/>
        return new MapProjection();
    },
    setProjection: function (value) {
        /// <summary>Sets the Map Projection</summary>
        /// <param name="value" type="cfx.maps.MapProjection"/>>
    },
    getShowAdditionalLayers: function () {
        /// <summary>Gets a value indicating whether or not to show additional layers besides the main layer.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowAdditionalLayers: function (value) {
        /// <summary>Sets a value indicating whether or not to show additional layers besides the main layer.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTranslationAttributes: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.maps.el"/>
        return new el();
    },
    locationToPixel: function (p) {
        /// <param name="p" type="PointF"/>>
        /// <returns type="PointF"/>
        return new PointF();
    },
    pixelToLocation: function (p) {
        /// <param name="p" type="PointF"/>>
        /// <returns type="PointF"/>
        return new PointF();
    }
};

cfx.sparkline = { };
cfx.sparkline._isCFXNamespace = true;

var SparkGallery = {
    Line: 0,
    Bar: 1,
    Area: 2,
    Curve: 3,
    CurveArea: 4
};
SparkGallery._isCFXEnum = true;
cfx.sparkline.SparkGallery = SparkGallery;

var SparkLine = function() {
}
cfx.sparkline.SparkLine = SparkLine;
SparkLine.prototype = {
    getGallery: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.sparkline.SparkGallery"/>
        return new SparkGallery();
    },
    setGallery: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.sparkline.SparkGallery"/>>
    },
    getGalleryAttributes: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="?"/>
        return new ?();
    },
    getGalleryVolume: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setGalleryVolume: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelGap: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelGap: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelTemplate: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabelTemplate: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    }
};

cfx.axistrend = { };
cfx.axistrend._isCFXNamespace = true;

var AxisTrend = function() {
}
cfx.axistrend.AxisTrend = AxisTrend;
AxisTrend.prototype = {
    getColorEqualTo: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColorEqualTo: function (value) {
        /// <param name="value" type="String"/>>
    },
    getColorGreatherThan: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColorGreatherThan: function (value) {
        /// <param name="value" type="String"/>>
    },
    getColorLessThan: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColorLessThan: function (value) {
        /// <param name="value" type="String"/>>
    },
    getWidth: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    }
};

cfx.gauge = { };
cfx.gauge._isCFXNamespace = true;

var Anchor = {
    Border: 0,
    Value: 1
};
Anchor._isCFXEnum = true;
cfx.gauge.Anchor = Anchor;

var AnimationTiming = {
    Auto: 0,
    Linear: 1,
    EaseIn: 2,
    EaseOut: 3,
    EaseInEaseOut: 4,
    EaseOutBounce: 5
};
AnimationTiming._isCFXEnum = true;
cfx.gauge.AnimationTiming = AnimationTiming;

var ConditionalApplies = {
    None: 0,
    Indicator: 1,
    PrimaryValue: 2,
    IndicatorPrimaryBack: 4
};
ConditionalApplies._isCFXEnum = true;
cfx.gauge.ConditionalApplies = ConditionalApplies;

var DockArea = {
    Left: 0,
    Top: 1,
    Right: 2,
    Bottom: 3,
    None: 4
};
DockArea._isCFXEnum = true;
cfx.gauge.DockArea = DockArea;

var FractionDisplay = {
    None: 0,
    Horizontal: 1,
    Vertical: 2
};
FractionDisplay._isCFXEnum = true;
cfx.gauge.FractionDisplay = FractionDisplay;

var IndicatorBackground = {
    None: 0,
    Circle: 1,
    Rectangle: 2,
    RoundRectangle: 3
};
IndicatorBackground._isCFXEnum = true;
cfx.gauge.IndicatorBackground = IndicatorBackground;

var IndicatorPosition = {
    Auto: 0,
    Current: 1,
    Reference: 2,
    Delta: 3,
    PercentChange: 4,
    Primary: 5,
    Secondary: 6
};
IndicatorPosition._isCFXEnum = true;
cfx.gauge.IndicatorPosition = IndicatorPosition;

var IndicatorStyle = {
    ArrowDiagonal: 0,
    ArrowVertical: 1,
    ArrowVerticalPointer: 2,
    TriangleVertical: 3,
    PlusMinus: 4,
    ThickDiagonal: 5
};
IndicatorStyle._isCFXEnum = true;
cfx.gauge.IndicatorStyle = IndicatorStyle;

var MatrixDirection = {
    Horizontal: 0,
    Vertical: 1
};
MatrixDirection._isCFXEnum = true;
cfx.gauge.MatrixDirection = MatrixDirection;

var MeasurePosition = {
    Start: 0,
    End: 1
};
MeasurePosition._isCFXEnum = true;
cfx.gauge.MeasurePosition = MeasurePosition;

var PaletteColor = {
    DashboardBack: 0,
    DashboardInside: 1,
    BorderBack: 2,
    BorderInside: 3,
    Indicator: 4,
    IndicatorBorder: 5,
    Filler: 6,
    FillerBorder: 7,
    Cap: 8,
    CapBorder: 9,
    ScaleText: 10,
    BarBack: 11,
    BarBorder: 12,
    BarAlternate: 13,
    Section0Back: 14,
    Section0Border: 15,
    Section0Alternate: 16,
    Section1Back: 17,
    Section1Border: 18,
    Section1Alternate: 19,
    Section2Back: 20,
    Section2Border: 21,
    Section2Alternate: 22,
    Tickmark: 23,
    TickmarkInside: 24,
    Title: 25,
    TitleDocked: 26,
    Caption: 27,
    TrendText: 28,
    ConditionalLess: 29,
    ConditionalEquals: 30,
    ConditionalGreater: 31,
    TipAttrText: 32,
    TipAttrBack: 33,
    TipAttrBorder: 34,
    OffBack: 35
};
PaletteColor._isCFXEnum = true;
cfx.gauge.PaletteColor = PaletteColor;

var ResizeFont = {
    Never: 0,
    Always: 1,
    Auto: 2
};
ResizeFont._isCFXEnum = true;
cfx.gauge.ResizeFont = ResizeFont;

var ScaleFormat = {
    None: 0,
    Number: 1,
    Currency: 2,
    Percent: 3
};
ScaleFormat._isCFXEnum = true;
cfx.gauge.ScaleFormat = ScaleFormat;

var SecondaryValuesShadow = {
    None: 0,
    Normal: 1,
    Inverted: 2
};
SecondaryValuesShadow._isCFXEnum = true;
cfx.gauge.SecondaryValuesShadow = SecondaryValuesShadow;

var SectionFill = {
    Solid: 0,
    GradientData: 1
};
SectionFill._isCFXEnum = true;
cfx.gauge.SectionFill = SectionFill;

var TickmarkStyle = {
    Line: 0,
    RoundLine: 1,
    Rectangle: 2,
    Circle: 3,
    Triangle: 4,
    None: 5
};
TickmarkStyle._isCFXEnum = true;
cfx.gauge.TickmarkStyle = TickmarkStyle;

var TrendFormat = {
    None: 0,
    Number: 1,
    Currency: 2,
    Percent: 3
};
TrendFormat._isCFXEnum = true;
cfx.gauge.TrendFormat = TrendFormat;

var TrendLayout = {
    Auto: 0,
    Horizontal: 1,
    Vertical: 2,
    Square: 3
};
TrendLayout._isCFXEnum = true;
cfx.gauge.TrendLayout = TrendLayout;

var TrendValues = {
    Current: 1,
    Reference: 2,
    Delta: 3,
    PercentChange: 4
};
TrendValues._isCFXEnum = true;
cfx.gauge.TrendValues = TrendValues;

var ZOrder = {
    Above: 0,
    Behind: 1
};
ZOrder._isCFXEnum = true;
cfx.gauge.ZOrder = ZOrder;

var InteractionAttributes = function() {
}
cfx.gauge.InteractionAttributes = InteractionAttributes;
InteractionAttributes.prototype = {
    getEnabled: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    }
};

var d4 = function() {
}
cfx.gauge.d4 = d4;
d4.prototype = {
    getSectionPosition: function () {
        /// <summary>Defines the default position for any new section added to the gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSectionPosition: function (value) {
        /// <summary>Defines the default position for any new section added to the gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getSectionThickness: function () {
        /// <summary>Defines the default thickness for any new section added to the gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSectionThickness: function (value) {
        /// <summary>Defines the default thickness for any new section added to the gauge.</summary>
        /// <param name="value" type="number"/>>
    }
};

var d6 = function() {
}
cfx.gauge.d6 = d6;
d6.prototype = {
    getDuration: function () {
        /// <summary>Allows you customize to animation duration, in seconds.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDuration: function (value) {
        /// <summary>Allows you customize to animation duration, in seconds.</summary>
        /// <param name="value" type="number"/>>
    },
    getEnabled: function () {
        /// <summary>Used to enable or disable animations.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <summary>Used to enable or disable animations.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFactorScale: function () {
        /// <summary>Gets whether the animation's time depends on the scale max value or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setFactorScale: function (value) {
        /// <summary>Sets whether the animation's time depends on the scale max value or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTiming: function () {
        /// <summary>Used to specify the transition effect used by the animation.</summary>
        /// <returns type="cfx.gauge.AnimationTiming"/>
        return new AnimationTiming();
    },
    setTiming: function (value) {
        /// <summary>Used to specify the transition effect used by the animation.</summary>
        /// <param name="value" type="cfx.gauge.AnimationTiming"/>>
    }
};

var d7 = function() {
}
cfx.gauge.d7 = d7;
d7.prototype = {
    getDataChange: function () {
        /// <summary>Provides access to the AnimationSettings object used when the data in the gauge changes. This allows for customized animation effects when the value displayed by the gauge changes over time. If enabled, the indicators will be animated from their current value to their new value.</summary>
        /// <returns type="cfx.gauge.d6"/>
        return new d6();
    },
    getLoad: function () {
        /// <summary>Provides access to the AnimationSettings object used when the gauge is loaded for the first time. This allows for customized animation effects when the gauge is being initially displayed. If enabled, the indicators will be animated from 0 to their initial value.</summary>
        /// <returns type="cfx.gauge.d6"/>
        return new d6();
    },
    getShowSpeed: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowSpeed: function (value) {
        /// <param name="value" type="bool"/>>
    },
    endManual: function () {
    },
    reset: function () {
    },
    startManual: function () {
    }
};

var d8 = function() {
}
cfx.gauge.d8 = d8;
d8.prototype = {
    getCount: function () {
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.gauge.PictoMeasure"/>
        return new PictoMeasure();
    },
    setItem: function (index, value) {
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.gauge.PictoMeasure"/>>
    },
    add: function (measure) {
        /// <param name="measure" type="cfx.gauge.PictoMeasure"/>>
    },
    clear: function () {
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var d$ = function() {
}
cfx.gauge.d$ = d$;
d$.prototype = {
    getHorizontalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setHorizontalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    },
    getVerticalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setVerticalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var PictoMatrixLayout = function() {
}
cfx.gauge.PictoMatrixLayout = PictoMatrixLayout;
PictoMatrixLayout.prototype = {
    getColumns: function () {
        /// <returns type="number"/>
        return 0;
    },
    setColumns: function (value) {
        /// <param name="value" type="number"/>>
    },
    getDirection: function () {
        /// <returns type="cfx.gauge.MatrixDirection"/>
        return new MatrixDirection();
    },
    setDirection: function (value) {
        /// <param name="value" type="cfx.gauge.MatrixDirection"/>>
    },
    getRows: function () {
        /// <returns type="number"/>
        return 0;
    },
    setRows: function (value) {
        /// <param name="value" type="number"/>>
    },
    getHorizontalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setHorizontalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    },
    getVerticalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setVerticalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var PictoHiveLayout = function() {
}
cfx.gauge.PictoHiveLayout = PictoHiveLayout;
PictoHiveLayout.prototype = {
    getHorizontalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setHorizontalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    },
    getVerticalSpacing: function () {
        /// <returns type="number"/>
        return 0;
    },
    setVerticalSpacing: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var PictoMeasure = function() {
}
cfx.gauge.PictoMeasure = PictoMeasure;
PictoMeasure.prototype = {
    getBorderColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <param name="value" type="String"/>>
    },
    getDecimals: function () {
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <param name="value" type="number"/>>
    },
    getFormat: function () {
        /// <returns type="cfx.gauge.ScaleFormat"/>
        return new ScaleFormat();
    },
    setFormat: function (value) {
        /// <param name="value" type="cfx.gauge.ScaleFormat"/>>
    },
    getScaleUnit: function () {
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <param name="value" type="number"/>>
    },
    getValue: function () {
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <param name="value" type="number"/>>
    }
};

var d_ = function() {
}
cfx.gauge.d_ = d_;
d_.prototype = {
    getAppliesTo: function () {
        /// <summary>Gets the element the ConditionalSettings will be applied to.</summary>
        /// <returns type="cfx.gauge.ConditionalApplies"/>
        return new ConditionalApplies();
    },
    setAppliesTo: function (value) {
        /// <summary>Sets the element the ConditionalSettings will be applied to.</summary>
        /// <param name="value" type="cfx.gauge.ConditionalApplies"/>>
    },
    getColorEqualToReference: function () {
        /// <summary>Gets the color used when the Current value is equal to the Reference value.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColorEqualToReference: function (value) {
        /// <summary>Sets the color used when the Current value is equal to the Reference value.</summary>
        /// <param name="value" type="String"/>>
    },
    getColorGreaterThanReference: function () {
        /// <summary>Gets the color used when the Current value is greater than the Reference value.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColorGreaterThanReference: function (value) {
        /// <summary>Sets the color used when the Current value is greater than the Reference value.</summary>
        /// <param name="value" type="String"/>>
    },
    getColorLessThanReference: function () {
        /// <summary>Gets the color used when the Current value is lesser than the Reference value.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColorLessThanReference: function (value) {
        /// <summary>Sets the color used when the Current value is lesser than the Reference value.</summary>
        /// <param name="value" type="String"/>>
    }
};

var ea = function() {
}
cfx.gauge.ea = ea;
ea.prototype = {
    getAlignment: function () {
        /// <summary>Gets the alignment of the Indicator.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the alignment of the Indicator.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getBackground: function () {
        /// <summary>Gets the background style for the indicator.</summary>
        /// <returns type="cfx.gauge.IndicatorBackground"/>
        return new IndicatorBackground();
    },
    setBackground: function (value) {
        /// <summary>Sets the background style for the indicator.</summary>
        /// <param name="value" type="cfx.gauge.IndicatorBackground"/>>
    },
    getHeightRatio: function () {
        /// <summary>Gets the height ratio of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setHeightRatio: function (value) {
        /// <summary>Sets the height ratio of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Gets the Indicator position.</summary>
        /// <returns type="cfx.gauge.IndicatorPosition"/>
        return new IndicatorPosition();
    },
    setPosition: function (value) {
        /// <summary>Sets the Indicator position.</summary>
        /// <param name="value" type="cfx.gauge.IndicatorPosition"/>>
    },
    getRoundPen: function () {
        /// <summary>Gets whether the edges of the indicator are rounded or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setRoundPen: function (value) {
        /// <summary>Sets whether the edges of the indicator are rounded or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStyle: function () {
        /// <summary>Gets the style used by the indicator.</summary>
        /// <returns type="cfx.gauge.IndicatorStyle"/>
        return new IndicatorStyle();
    },
    setStyle: function (value) {
        /// <summary>Sets the style used by the indicator.</summary>
        /// <param name="value" type="cfx.gauge.IndicatorStyle"/>>
    },
    getVisible: function () {
        /// <summary>Gets the indicator visibility.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the indicator visibility.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var eb = function() {
}
cfx.gauge.eb = eb;
eb.prototype = {
    getLabelMax: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelMax: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelSpacing: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    }
};

var ec = function() {
}
cfx.gauge.ec = ec;
ec.prototype = {
    getAlphaForeground: function () {
        /// <summary>Gets the alpha transparency used by the values in the secondary area.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAlphaForeground: function (value) {
        /// <summary>Sets the alpha transparency used by the values in the secondary area.</summary>
        /// <param name="value" type="number"/>>
    },
    getMultiColumn: function () {
        /// <summary>Gets whether the secondary values are shown in multiple columns or a single column.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setMultiColumn: function (value) {
        /// <summary>Sets whether the secondary values are shown in multiple columns or a single column.</summary>
        /// <param name="value" type="bool"/>>
    },
    getSeparatorColor: function () {
        /// <summary>Gets the color used for the separator between the main area and the secondary area.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setSeparatorColor: function (value) {
        /// <summary>Sets the color used for the separator between the main area and the secondary area.</summary>
        /// <param name="value" type="String"/>>
    },
    getSeparatorStyle: function () {
        /// <summary>Gets the line style used for the separator between the main area and the secondary area.</summary>
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setSeparatorStyle: function (value) {
        /// <summary>Sets the line style used for the separator between the main area and the secondary area.</summary>
        /// <param name="value" type="DashStyle"/>>
    },
    getSeparatorWidth: function () {
        /// <summary>Gets the line width used for the separator between the main area and the secondary area.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSeparatorWidth: function (value) {
        /// <summary>Sets the line width used for the separator between the main area and the secondary area.</summary>
        /// <param name="value" type="number"/>>
    },
    getShadows: function () {
        /// <summary>Gets the shadow style used by the SecondarySettings.</summary>
        /// <returns type="cfx.gauge.SecondaryValuesShadow"/>
        return new SecondaryValuesShadow();
    },
    setShadows: function (value) {
        /// <summary>Sets the shadow style used by the SecondarySettings.</summary>
        /// <param name="value" type="cfx.gauge.SecondaryValuesShadow"/>>
    },
    getSharedValueSize: function () {
        /// <summary>Gets whether all the secondary values are shown in the same size or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSharedValueSize: function (value) {
        /// <summary>Sets whether all the secondary values are shown in the same size or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValueSpacing: function () {
        /// <summary>Gets the spacing between the secondary values.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValueSpacing: function (value) {
        /// <summary>Sets the spacing between the secondary values.</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelMax: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelMax: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelSpacing: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    }
};

var ed = function() {
}
cfx.gauge.ed = ed;
ed.prototype = {
    getLabelMaxWidth: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelMaxWidth: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getShadowColor: function () {
        /// <summary>Gets the PrimarySettings shadow color.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setShadowColor: function (value) {
        /// <summary>Sets the PrimarySettings shadow color.</summary>
        /// <param name="value" type="String"/>>
    },
    getShadowOffset: function () {
        /// <summary>Gets the PrimarySettings shadow offset.</summary>
        /// <returns type="Point"/>
        return new Point();
    },
    setShadowOffset: function (value) {
        /// <summary>Sets the PrimarySettings shadow offset.</summary>
        /// <param name="value" type="Point"/>>
    },
    getValue: function () {
        /// <summary>Gets the value that will be displayed in the main area, from the values exposed by the Trend object.</summary>
        /// <returns type="cfx.gauge.TrendValues"/>
        return new TrendValues();
    },
    setValue: function (value) {
        /// <summary>Sets the value that will be displayed in the main area, from the values exposed by the Trend object.</summary>
        /// <param name="value" type="cfx.gauge.TrendValues"/>>
    },
    getLabelMax: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelMax: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getLabelSpacing: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    }
};

var ee = function() {
}
cfx.gauge.ee = ee;
ee.prototype = {
    getDecimals: function () {
        /// <summary>Gets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets the font style to display a TrendBaseValue object.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style to display a TrendBaseValue object.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getFormat: function () {
        /// <summary>Gets the format for the value.</summary>
        /// <returns type="cfx.gauge.TrendFormat"/>
        return new TrendFormat();
    },
    setFormat: function (value) {
        /// <summary>Sets the format for the value.</summary>
        /// <param name="value" type="cfx.gauge.TrendFormat"/>>
    },
    getLabel: function () {
        /// <summary>Gets the value label.</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabel: function (value) {
        /// <summary>Sets the value label.</summary>
        /// <param name="value" type="string"/>>
    },
    getLabelStyle: function () {
        /// <summary>Gets the value label style.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setLabelStyle: function (value) {
        /// <summary>Sets the value label style.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getPriority: function () {
        /// <summary>Gets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPriority: function (value) {
        /// <summary>Sets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected value.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected value.</summary>
        /// <param name="value" type="number"/>>
    },
    getSymbol: function () {
        /// <summary>Gets a symbol for a selected value.</summary>
        /// <returns type="string"/>
        return "";
    },
    setSymbol: function (value) {
        /// <summary>Sets a symbol for a selected value.</summary>
        /// <param name="value" type="string"/>>
    },
    getSymbolBeforeValue: function () {
        /// <summary>Gets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSymbolBeforeValue: function (value) {
        /// <summary>Sets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUseSuperscript: function () {
        /// <summary>Gets whether the symbol is displayed as superscript or normal.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSuperscript: function (value) {
        /// <summary>Sets whether the symbol is displayed as superscript or normal.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a value.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ef = function() {
}
cfx.gauge.ef = ef;
ef.prototype = {
    getScaleUnit: function () {
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <param name="value" type="number"/>>
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets the font style to display a TrendBaseValue object.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style to display a TrendBaseValue object.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getFormat: function () {
        /// <summary>Gets the format for the value.</summary>
        /// <returns type="cfx.gauge.TrendFormat"/>
        return new TrendFormat();
    },
    setFormat: function (value) {
        /// <summary>Sets the format for the value.</summary>
        /// <param name="value" type="cfx.gauge.TrendFormat"/>>
    },
    getLabel: function () {
        /// <summary>Gets the value label.</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabel: function (value) {
        /// <summary>Sets the value label.</summary>
        /// <param name="value" type="string"/>>
    },
    getLabelStyle: function () {
        /// <summary>Gets the value label style.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setLabelStyle: function (value) {
        /// <summary>Sets the value label style.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getPriority: function () {
        /// <summary>Gets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPriority: function (value) {
        /// <summary>Sets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected value.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected value.</summary>
        /// <param name="value" type="number"/>>
    },
    getSymbol: function () {
        /// <summary>Gets a symbol for a selected value.</summary>
        /// <returns type="string"/>
        return "";
    },
    setSymbol: function (value) {
        /// <summary>Sets a symbol for a selected value.</summary>
        /// <param name="value" type="string"/>>
    },
    getSymbolBeforeValue: function () {
        /// <summary>Gets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSymbolBeforeValue: function (value) {
        /// <summary>Sets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUseSuperscript: function () {
        /// <summary>Gets whether the symbol is displayed as superscript or normal.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSuperscript: function (value) {
        /// <summary>Sets whether the symbol is displayed as superscript or normal.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a value.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var eg = function() {
}
cfx.gauge.eg = eg;
eg.prototype = {
    getShowPlus: function () {
        /// <summary>Gets the visibilty of the plus sign when the Delta displays a positive number.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowPlus: function (value) {
        /// <summary>Sets the visibilty of the plus sign when the Delta displays a positive number.</summary>
        /// <param name="value" type="bool"/>>
    },
    getShowSign: function () {
        /// <summary>Gets the visibilty of the sign when the Delta is displayed.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowSign: function (value) {
        /// <summary>Sets the visibilty of the sign when the Delta is displayed.</summary>
        /// <param name="value" type="bool"/>>
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets the font style to display a TrendBaseValue object.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style to display a TrendBaseValue object.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getFormat: function () {
        /// <summary>Gets the format for the value.</summary>
        /// <returns type="cfx.gauge.TrendFormat"/>
        return new TrendFormat();
    },
    setFormat: function (value) {
        /// <summary>Sets the format for the value.</summary>
        /// <param name="value" type="cfx.gauge.TrendFormat"/>>
    },
    getLabel: function () {
        /// <summary>Gets the value label.</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabel: function (value) {
        /// <summary>Sets the value label.</summary>
        /// <param name="value" type="string"/>>
    },
    getLabelStyle: function () {
        /// <summary>Gets the value label style.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setLabelStyle: function (value) {
        /// <summary>Sets the value label style.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getPriority: function () {
        /// <summary>Gets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPriority: function (value) {
        /// <summary>Sets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected value.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected value.</summary>
        /// <param name="value" type="number"/>>
    },
    getSymbol: function () {
        /// <summary>Gets a symbol for a selected value.</summary>
        /// <returns type="string"/>
        return "";
    },
    setSymbol: function (value) {
        /// <summary>Sets a symbol for a selected value.</summary>
        /// <param name="value" type="string"/>>
    },
    getSymbolBeforeValue: function () {
        /// <summary>Gets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSymbolBeforeValue: function (value) {
        /// <summary>Sets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUseSuperscript: function () {
        /// <summary>Gets whether the symbol is displayed as superscript or normal.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSuperscript: function (value) {
        /// <summary>Sets whether the symbol is displayed as superscript or normal.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a value.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var eh = function() {
}
cfx.gauge.eh = eh;
eh.prototype = {
    getValue: function () {
        /// <summary>Gets the numeric value for a TrendUserValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the numeric value for a TrendUserValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals to display in a TrendBaseValue object.</summary>
        /// <param name="value" type="number"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets the font style to display a TrendBaseValue object.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style to display a TrendBaseValue object.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getFormat: function () {
        /// <summary>Gets the format for the value.</summary>
        /// <returns type="cfx.gauge.TrendFormat"/>
        return new TrendFormat();
    },
    setFormat: function (value) {
        /// <summary>Sets the format for the value.</summary>
        /// <param name="value" type="cfx.gauge.TrendFormat"/>>
    },
    getLabel: function () {
        /// <summary>Gets the value label.</summary>
        /// <returns type="string"/>
        return "";
    },
    setLabel: function (value) {
        /// <summary>Sets the value label.</summary>
        /// <param name="value" type="string"/>>
    },
    getLabelStyle: function () {
        /// <summary>Gets the value label style.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setLabelStyle: function (value) {
        /// <summary>Sets the value label style.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getPriority: function () {
        /// <summary>Gets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPriority: function (value) {
        /// <summary>Sets the priority given to a Trend value, used by the control to decide whether or not the value is displayed.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a selected value.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a selected value.</summary>
        /// <param name="value" type="number"/>>
    },
    getSymbol: function () {
        /// <summary>Gets a symbol for a selected value.</summary>
        /// <returns type="string"/>
        return "";
    },
    setSymbol: function (value) {
        /// <summary>Sets a symbol for a selected value.</summary>
        /// <param name="value" type="string"/>>
    },
    getSymbolBeforeValue: function () {
        /// <summary>Gets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSymbolBeforeValue: function (value) {
        /// <summary>Sets whether the symbol for a selected value is a preffix or suffix.</summary>
        /// <param name="value" type="bool"/>>
    },
    getUseSuperscript: function () {
        /// <summary>Gets whether the symbol is displayed as superscript or normal.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSuperscript: function (value) {
        /// <summary>Sets whether the symbol is displayed as superscript or normal.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a value.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a value.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var el = function() {
}
cfx.gauge.el = el;
el.prototype = {
    getItem: function (n) {
        /// <param name="n" type="number"/>>
        /// <returns type="?"/>
        return new ?();
    },
    add: function (obj) {
        /// <param name="obj" type="?"/>>
    },
    clear: function () {
    },
    find: function (type) {
        /// <param name="type" type="Type"/>>
        /// <returns type="?"/>
        return new ?();
    },
    indexOf: function (extension) {
        /// <param name="extension" type="?"/>>
        /// <returns type="number"/>
        return 0;
    },
    remove: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var em = function() {
}
cfx.gauge.em = em;
em.prototype = {
    getColor: function () {
        /// <summary>Gets the color for a PointAttribute's Line.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color for a PointAttribute's Line.</summary>
        /// <param name="value" type="String"/>>
    },
    getEndCap: function () {
        /// <summary>Gets a marker shape at the end of a PointAttribute's Line.</summary>
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setEndCap: function (value) {
        /// <summary>Sets a marker shape at the end of a PointAttribute's Line.</summary>
        /// <param name="value" type="LineCap"/>>
    },
    getStartCap: function () {
        /// <summary>Gets a marker shape at the start of a PointAttribute's Line.</summary>
        /// <returns type="LineCap"/>
        return new LineCap();
    },
    setStartCap: function (value) {
        /// <summary>Sets a marker shape at the start of a PointAttribute's Line.</summary>
        /// <param name="value" type="LineCap"/>>
    },
    getStyle: function () {
        /// <summary>Gets the style for a PointAttribute's Line.</summary>
        /// <returns type="DashStyle"/>
        return new DashStyle();
    },
    setStyle: function (value) {
        /// <summary>Sets the style for a PointAttribute's Line.</summary>
        /// <param name="value" type="DashStyle"/>>
    },
    getWidth: function () {
        /// <summary>Gets the width for a PointAttribute's Line.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the width for a PointAttribute's Line.</summary>
        /// <param name="value" type="number"/>>
    }
};

var en = function() {
}
cfx.gauge.en = en;
en.prototype = {
    getAlignment: function () {
        /// <summary>Gets the alignment of the chart tooltips.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the alignment of the chart tooltips.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getBackColor: function () {
        /// <summary>Gets the background color of the tooltip object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBackColor: function (value) {
        /// <summary>Sets the background color of the tooltip object.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorder: function () {
        /// <summary>Gets the Border property for the tooltip object.</summary>
        /// <returns type="cfx.gauge.em"/>
        return new em();
    },
    getBorderTemplate: function () {
        /// <summary>Specifies the vector template used to describe the Border.</summary>
        /// <returns type="string"/>
        return "";
    },
    setBorderTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the Border.</summary>
        /// <param name="value" type="string"/>>
    },
    getContentTemplate: function () {
        /// <summary>Specifies the vector template used to describe the ToolTips Content.</summary>
        /// <returns type="string"/>
        return "";
    },
    setContentTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the ToolTips Content.</summary>
        /// <param name="value" type="string"/>>
    },
    getEnabled: function () {
        /// <summary>Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setEnabled: function (value) {
        /// <summary>Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFont: function () {
        /// <summary>Gets the font for the tooltip object.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the font for the tooltip object.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <summary>Gets a string pattern mask used to format the Tooltip.</summary>
        /// <returns type="string"/>
        return "";
    },
    setFormat: function (value) {
        /// <summary>Sets a string pattern mask used to format the Tooltip.</summary>
        /// <param name="value" type="string"/>>
    },
    getInteractive: function () {
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getPadding: function () {
        /// <summary>Gets the padding value in the TooltipAttribute.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPadding: function (value) {
        /// <summary>Sets the padding value in the TooltipAttribute.</summary>
        /// <param name="value" type="number"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color for text of the tooltip object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color for text of the tooltip object.</summary>
        /// <param name="value" type="String"/>>
    },
    getTitle: function () {
        /// <summary>Gets the title of the tooltip object.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the title of the tooltip object.</summary>
        /// <param name="value" type="string"/>>
    },
    getVerticalAlignment: function () {
        /// <summary>Allows to specify the Vertical Alignment of the TooltipAttributes in the chart.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setVerticalAlignment: function (value) {
        /// <summary>Allows to specify the Vertical Alignment of the TooltipAttributes in the chart.</summary>
        /// <param name="value" type="StringAlignment"/>>
    }
};

var Palette = function() {
}
cfx.gauge.Palette = Palette;
Palette.prototype = {
    getDefaultPalette: function () {
        /// <returns type="cfx.gauge.Palette"/>
        return new Palette();
    },
    setDefaultPalette: function (value) {
        /// <param name="value" type="cfx.gauge.Palette"/>>
    },
    getColor: function (palColor) {
        /// <param name="palColor" type="cfx.gauge.PaletteColor"/>>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (palColor, value) {
        /// <param name="palColor" type="cfx.gauge.PaletteColor"/>>
        /// <param name="value" type="String"/>>
    }
};

var eo = function() {
}
cfx.gauge.eo = eo;
eo.prototype = {
    getColor: function () {
        /// <summary>{vreb} the shadow color.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>{vreb} the shadow color.</summary>
        /// <param name="value" type="String"/>>
    },
    getOffsetX: function () {
        /// <summary>Gets the X offset for a shadow.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOffsetX: function (value) {
        /// <summary>Sets the X offset for a shadow.</summary>
        /// <param name="value" type="number"/>>
    },
    getOffsetY: function () {
        /// <summary>Gets the Y offset for a shadow.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setOffsetY: function (value) {
        /// <summary>Sets the Y offset for a shadow.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Specfies the vector template used to describe the shadow.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specfies the vector template used to describe the shadow.</summary>
        /// <param name="value" type="string"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of the ShadowAttributes.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of the ShadowAttributes.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ep = function() {
}
cfx.gauge.ep = ep;
ep.prototype = {
    getTemplate: function () {
        /// <summary>Specfies the vector template used to describe the glare.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specfies the vector template used to describe the glare.</summary>
        /// <param name="value" type="string"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of the GlareAttributes.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of the GlareAttributes.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var GaugeElement = function() {
}
cfx.gauge.GaugeElement = GaugeElement;
GaugeElement.prototype = {

};

var er = function() {
}
cfx.gauge.er = er;
er.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.gauge.Title"/>
        return new Title();
    },
    setItem: function (index, value) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.gauge.Title"/>>
    },
    add: function (title) {
        /// <param name="title" type="cfx.gauge.Title"/>>
    },
    clear: function () {
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var Title = function() {
}
cfx.gauge.Title = Title;
Title.prototype = {
    getAlignment: function () {
        /// <summary>Gets the alignment of a gauge title.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the alignment of a gauge title.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAnchor: function () {
        /// <returns type="cfx.gauge.Anchor"/>
        return new Anchor();
    },
    setAnchor: function (value) {
        /// <param name="value" type="cfx.gauge.Anchor"/>>
    },
    getAngle: function () {
        /// <summary>Gets the text rotation for the title.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setAngle: function (value) {
        /// <summary>Sets the text rotation for the title.</summary>
        /// <param name="value" type="number"/>>
    },
    getDock: function () {
        /// <summary>Gets the dock area for a title.</summary>
        /// <returns type="cfx.gauge.DockArea"/>
        return new DockArea();
    },
    setDock: function (value) {
        /// <summary>Sets the dock area for a title.</summary>
        /// <param name="value" type="cfx.gauge.DockArea"/>>
    },
    getFont: function () {
        /// <summary>Gets the Font object for a gauge title.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the Font object for a gauge title.</summary>
        /// <param name="value" type="Font"/>>
    },
    getImage: function () {
        /// <summary>Gets the image for a title.</summary>
        /// <returns type="Image"/>
        return new Image();
    },
    setImage: function (value) {
        /// <summary>Sets the image for a title.</summary>
        /// <param name="value" type="Image"/>>
    },
    getResizeableFont: function () {
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getTag: function () {
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <param name="value" type="string"/>>
    },
    getText: function () {
        /// <summary>Gets the text for the selected title.</summary>
        /// <returns type="string"/>
        return "";
    },
    setText: function (value) {
        /// <summary>Sets the text for the selected title.</summary>
        /// <param name="value" type="string"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the text color for a title.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the text color for a title.</summary>
        /// <param name="value" type="String"/>>
    },
    getX: function () {
        /// <returns type="number"/>
        return 0;
    },
    setX: function (value) {
        /// <param name="value" type="number"/>>
    },
    getY: function () {
        /// <returns type="number"/>
        return 0;
    },
    setY: function (value) {
        /// <param name="value" type="number"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the Title's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the Title's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var es = function() {
}
cfx.gauge.es = es;
es.prototype = {
    getMajor: function () {
        /// <summary>Allows you to configure the Major tickmarks.</summary>
        /// <returns type="cfx.gauge.et"/>
        return new et();
    },
    getMedium: function () {
        /// <summary>Allows you to configure the Medium tickmarks.</summary>
        /// <returns type="cfx.gauge.et"/>
        return new et();
    }
};

var et = function() {
}
cfx.gauge.et = et;
et.prototype = {
    getColor: function () {
        /// <summary>Gets the color of a Tickmark object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of a Tickmark object.</summary>
        /// <param name="value" type="String"/>>
    },
    getInsideColor: function () {
        /// <summary>Gets the internal color of tickmarks.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setInsideColor: function (value) {
        /// <summary>Sets the internal color of tickmarks.</summary>
        /// <param name="value" type="String"/>>
    },
    getLabelGap: function () {
        /// <summary>Used to define the gap between the tickmarks and its corresponding labels.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelGap: function (value) {
        /// <summary>Used to define the gap between the tickmarks and its corresponding labels.</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Gets the position for tickmarks in a scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the position for tickmarks in a scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of tickmarks.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of tickmarks.</summary>
        /// <param name="value" type="number"/>>
    },
    getSkipEnds: function () {
        /// <summary>Gets the visibility of the tickmarks at both ends of the Scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setSkipEnds: function (value) {
        /// <summary>Sets the visibility of the tickmarks at both ends of the Scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    getStep: function () {
        /// <summary>Gets a value indicating the interval for tickmark display.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStep: function (value) {
        /// <summary>Sets a value indicating the interval for tickmark display.</summary>
        /// <param name="value" type="number"/>>
    },
    getStyle: function () {
        /// <summary>Gets the tickmark style.</summary>
        /// <returns type="cfx.gauge.TickmarkStyle"/>
        return new TickmarkStyle();
    },
    setStyle: function (value) {
        /// <summary>Sets the tickmark style.</summary>
        /// <param name="value" type="cfx.gauge.TickmarkStyle"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the tickmarks color should be taken automatically from the ScaleSection or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the tickmarks color should be taken automatically from the ScaleSection or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of tickmarks.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of tickmarks.</summary>
        /// <param name="value" type="bool"/>>
    },
    getWidth: function () {
        /// <summary>Gets the wdith of tickmarks.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the wdith of tickmarks.</summary>
        /// <param name="value" type="number"/>>
    }
};

var eu = function() {
}
cfx.gauge.eu = eu;
eu.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.gauge.ScaleSection"/>
        return new ScaleSection();
    },
    setItem: function (index, value) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.gauge.ScaleSection"/>>
    },
    add: function (section) {
        /// <param name="section" type="cfx.gauge.ScaleSection"/>>
    },
    clear: function () {
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var ev = function() {
}
cfx.gauge.ev = ev;
ev.prototype = {
    getColor: function () {
        /// <summary>Gets the ScaleCap color.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the ScaleCap color.</summary>
        /// <param name="value" type="String"/>>
    },
    getSize: function () {
        /// <summary>Gets the ScaleCap size.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the ScaleCap size.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the ScaleCap.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the ScaleCap.</summary>
        /// <param name="value" type="string"/>>
    },
    getVisible: function () {
        /// <summary>Gets the ScaleCap visibility.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the ScaleCap visibility.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the ScaleCap's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the ScaleCap's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var ew = function() {
}
cfx.gauge.ew = ew;
ew.prototype = {
    getAlternateColor: function () {
        /// <summary>Gets the alternate color of a ScaleBar.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color of a ScaleBar.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderColor: function () {
        /// <summary>Gets the border color for the ScaleBar object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color for the ScaleBar object.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of the ScaleBar object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of the ScaleBar object.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillType: function () {
        /// <summary>Gets the type of fill used by the ScaleBar object.</summary>
        /// <returns type="cfx.gauge.SectionFill"/>
        return new SectionFill();
    },
    setFillType: function (value) {
        /// <summary>Sets the type of fill used by the ScaleBar object.</summary>
        /// <param name="value" type="cfx.gauge.SectionFill"/>>
    },
    getIgnoreLabel: function () {
        /// <summary>Gets the IgnoreLabel of ScaleBar object.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setIgnoreLabel: function (value) {
        /// <summary>Sets the IgnoreLabel of ScaleBar object.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the ScaleBar position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the ScaleBar position.</summary>
        /// <param name="value" type="number"/>>
    },
    getStrokeThickness: function () {
        /// <summary>Gets the border thickness of the ScaleBar.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStrokeThickness: function (value) {
        /// <summary>Sets the border thickness of the ScaleBar.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the ScaleBar.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the ScaleBar.</summary>
        /// <param name="value" type="string"/>>
    },
    getThickness: function () {
        /// <summary>Gets the ScaleBar thickness.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setThickness: function (value) {
        /// <summary>Sets the ScaleBar thickness.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of the ScaleBar.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of the ScaleBar.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ScaleSection = function() {
}
cfx.gauge.ScaleSection = ScaleSection;
ScaleSection.prototype = {
    getFrom: function () {
        /// <summary>Gets the initial value of a ScaleSection range.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setFrom: function (value) {
        /// <summary>Sets the initial value of a ScaleSection range.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets the Tag value of a ScaleSection object.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Sets the Tag value of a ScaleSection object.</summary>
        /// <param name="value" type="string"/>>
    },
    getTo: function () {
        /// <summary>Gets the final value of a ScaleSection range.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setTo: function (value) {
        /// <summary>Sets the final value of a ScaleSection range.</summary>
        /// <param name="value" type="number"/>>
    },
    getAlternateColor: function () {
        /// <summary>Gets the alternate color of a ScaleBar.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setAlternateColor: function (value) {
        /// <summary>Sets the alternate color of a ScaleBar.</summary>
        /// <param name="value" type="String"/>>
    },
    getBorderColor: function () {
        /// <summary>Gets the border color for the ScaleBar object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color for the ScaleBar object.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of the ScaleBar object.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of the ScaleBar object.</summary>
        /// <param name="value" type="String"/>>
    },
    getFillType: function () {
        /// <summary>Gets the type of fill used by the ScaleBar object.</summary>
        /// <returns type="cfx.gauge.SectionFill"/>
        return new SectionFill();
    },
    setFillType: function (value) {
        /// <summary>Sets the type of fill used by the ScaleBar object.</summary>
        /// <param name="value" type="cfx.gauge.SectionFill"/>>
    },
    getIgnoreLabel: function () {
        /// <summary>Gets the IgnoreLabel of ScaleBar object.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setIgnoreLabel: function (value) {
        /// <summary>Sets the IgnoreLabel of ScaleBar object.</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the ScaleBar position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the ScaleBar position.</summary>
        /// <param name="value" type="number"/>>
    },
    getStrokeThickness: function () {
        /// <summary>Gets the border thickness of the ScaleBar.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStrokeThickness: function (value) {
        /// <summary>Sets the border thickness of the ScaleBar.</summary>
        /// <param name="value" type="number"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the ScaleBar.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the ScaleBar.</summary>
        /// <param name="value" type="string"/>>
    },
    getThickness: function () {
        /// <summary>Gets the ScaleBar thickness.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setThickness: function (value) {
        /// <summary>Sets the ScaleBar thickness.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets the visibility of the ScaleBar.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of the ScaleBar.</summary>
        /// <param name="value" type="bool"/>>
    }
};

var ex = function() {
}
cfx.gauge.ex = ex;
ex.prototype = {
    getAlignment: function () {
        /// <summary>Gets the scale alignment with respect to its labels.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the scale alignment with respect to its labels.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAllowHalves: function () {
        /// <summary>Gets whether the Scale supports half numbers.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAllowHalves: function (value) {
        /// <summary>Sets whether the Scale supports half numbers.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBar: function () {
        /// <summary>Returns the ScaleBar object for a Scale or a Section.</summary>
        /// <returns type="cfx.gauge.ew"/>
        return new ew();
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals that appear in the scale labels.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals that appear in the scale labels.</summary>
        /// <param name="value" type="number"/>>
    },
    getDrawLabels: function () {
        /// <summary>Gets the visibility of the labels on the Scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setDrawLabels: function (value) {
        /// <summary>Sets the visibility of the labels on the Scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFont: function () {
        /// <summary>Gets the font used by the Scale.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the font used by the Scale.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.ScaleFormat"/>
        return new ScaleFormat();
    },
    setFormat: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.gauge.ScaleFormat"/>>
    },
    getIndicators: function () {
        /// <summary>The collection of Indicators currently associated with the scale.</summary>
        /// <returns type="cfx.gauge.ez"/>
        return new ez();
    },
    getLabelSpacing: function () {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a Scale.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a Scale.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMax: function () {
        /// <summary>Gets the Maximum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Maximum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Minimum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Minimum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinimumChange: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinimumChange: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Gets the position of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the position of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getSections: function () {
        /// <returns type="cfx.gauge.eu"/>
        return new eu();
    },
    getTextColor: function () {
        /// <summary>Gets the text color of the scale's labels.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the text color of the scale's labels.</summary>
        /// <param name="value" type="String"/>>
    },
    getThickness: function () {
        /// <summary>Gets the width for a scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setThickness: function (value) {
        /// <summary>Sets the width for a scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getTickmarks: function () {
        /// <summary>Gets the TickmarkSet of a scale.</summary>
        /// <returns type="cfx.gauge.es"/>
        return new es();
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    pixelToValue: function (x, y) {
        /// <param name="x" type="number"/>>
        /// <param name="y" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="PointF"/>
        return new PointF();
    }
};

var ey = function() {
}
cfx.gauge.ey = ey;
ey.prototype = {
    getCap: function () {
        /// <summary>Returns the ScaleCap object for a selected RadialScale.</summary>
        /// <returns type="cfx.gauge.ev"/>
        return new ev();
    },
    getStartAngle: function () {
        /// <summary>Gets the starting angle in degrees for a RadialScale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStartAngle: function (value) {
        /// <summary>Sets the starting angle in degrees for a RadialScale.</summary>
        /// <param name="value" type="number"/>>
    },
    getSweepAngle: function () {
        /// <summary>Gets the size of the angle in degrees for a RadialScale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSweepAngle: function (value) {
        /// <summary>Sets the size of the angle in degrees for a RadialScale.</summary>
        /// <param name="value" type="number"/>>
    },
    getAlignment: function () {
        /// <summary>Gets the scale alignment with respect to its labels.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the scale alignment with respect to its labels.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAllowHalves: function () {
        /// <summary>Gets whether the Scale supports half numbers.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAllowHalves: function (value) {
        /// <summary>Sets whether the Scale supports half numbers.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBar: function () {
        /// <summary>Returns the ScaleBar object for a Scale or a Section.</summary>
        /// <returns type="cfx.gauge.ew"/>
        return new ew();
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals that appear in the scale labels.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals that appear in the scale labels.</summary>
        /// <param name="value" type="number"/>>
    },
    getDrawLabels: function () {
        /// <summary>Gets the visibility of the labels on the Scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setDrawLabels: function (value) {
        /// <summary>Sets the visibility of the labels on the Scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFont: function () {
        /// <summary>Gets the font used by the Scale.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the font used by the Scale.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.ScaleFormat"/>
        return new ScaleFormat();
    },
    setFormat: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.gauge.ScaleFormat"/>>
    },
    getIndicators: function () {
        /// <summary>The collection of Indicators currently associated with the scale.</summary>
        /// <returns type="cfx.gauge.ez"/>
        return new ez();
    },
    getLabelSpacing: function () {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a Scale.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a Scale.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMax: function () {
        /// <summary>Gets the Maximum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Maximum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Minimum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Minimum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinimumChange: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinimumChange: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Gets the position of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the position of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getSections: function () {
        /// <returns type="cfx.gauge.eu"/>
        return new eu();
    },
    getTextColor: function () {
        /// <summary>Gets the text color of the scale's labels.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the text color of the scale's labels.</summary>
        /// <param name="value" type="String"/>>
    },
    getThickness: function () {
        /// <summary>Gets the width for a scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setThickness: function (value) {
        /// <summary>Sets the width for a scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getTickmarks: function () {
        /// <summary>Gets the TickmarkSet of a scale.</summary>
        /// <returns type="cfx.gauge.es"/>
        return new es();
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    pixelToValue: function (x, y) {
        /// <param name="x" type="number"/>>
        /// <param name="y" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="PointF"/>
        return new PointF();
    }
};

var LinearScale = function() {
}
cfx.gauge.LinearScale = LinearScale;
LinearScale.prototype = {
    getAlignment: function () {
        /// <summary>Gets the scale alignment with respect to its labels.</summary>
        /// <returns type="StringAlignment"/>
        return new StringAlignment();
    },
    setAlignment: function (value) {
        /// <summary>Sets the scale alignment with respect to its labels.</summary>
        /// <param name="value" type="StringAlignment"/>>
    },
    getAllowHalves: function () {
        /// <summary>Gets whether the Scale supports half numbers.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setAllowHalves: function (value) {
        /// <summary>Sets whether the Scale supports half numbers.</summary>
        /// <param name="value" type="bool"/>>
    },
    getBar: function () {
        /// <summary>Returns the ScaleBar object for a Scale or a Section.</summary>
        /// <returns type="cfx.gauge.ew"/>
        return new ew();
    },
    getDecimals: function () {
        /// <summary>Gets the number of decimals that appear in the scale labels.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setDecimals: function (value) {
        /// <summary>Sets the number of decimals that appear in the scale labels.</summary>
        /// <param name="value" type="number"/>>
    },
    getDrawLabels: function () {
        /// <summary>Gets the visibility of the labels on the Scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setDrawLabels: function (value) {
        /// <summary>Sets the visibility of the labels on the Scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    getFont: function () {
        /// <summary>Gets the font used by the Scale.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the font used by the Scale.</summary>
        /// <param name="value" type="Font"/>>
    },
    getFormat: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.ScaleFormat"/>
        return new ScaleFormat();
    },
    setFormat: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="cfx.gauge.ScaleFormat"/>>
    },
    getIndicators: function () {
        /// <summary>The collection of Indicators currently associated with the scale.</summary>
        /// <returns type="cfx.gauge.ez"/>
        return new ez();
    },
    getLabelSpacing: function () {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setLabelSpacing: function (value) {
        /// <summary>{vert} the space between the labels in a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a Scale.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a Scale.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMax: function () {
        /// <summary>Gets the Maximum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMax: function (value) {
        /// <summary>Sets the Maximum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMin: function () {
        /// <summary>Gets the Minimum value of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMin: function (value) {
        /// <summary>Sets the Minimum value of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getMinimumChange: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMinimumChange: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getPosition: function () {
        /// <summary>Gets the position of the Scale object.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the position of the Scale object.</summary>
        /// <param name="value" type="number"/>>
    },
    getScaleUnit: function () {
        /// <summary>Gets the scale unit of a Scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setScaleUnit: function (value) {
        /// <summary>Sets the scale unit of a Scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getSections: function () {
        /// <returns type="cfx.gauge.eu"/>
        return new eu();
    },
    getTextColor: function () {
        /// <summary>Gets the text color of the scale's labels.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the text color of the scale's labels.</summary>
        /// <param name="value" type="String"/>>
    },
    getThickness: function () {
        /// <summary>Gets the width for a scale.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setThickness: function (value) {
        /// <summary>Sets the width for a scale.</summary>
        /// <param name="value" type="number"/>>
    },
    getTickmarks: function () {
        /// <summary>Gets the TickmarkSet of a scale.</summary>
        /// <returns type="cfx.gauge.es"/>
        return new es();
    },
    getVisible: function () {
        /// <summary>Gets the visibility of a scale.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets the visibility of a scale.</summary>
        /// <param name="value" type="bool"/>>
    },
    pixelToValue: function (x, y) {
        /// <param name="x" type="number"/>>
        /// <param name="y" type="number"/>>
        /// <returns type="number"/>
        return 0;
    },
    valueToPixel: function (value) {
        /// <param name="value" type="number"/>>
        /// <returns type="PointF"/>
        return new PointF();
    }
};

var ez = function() {
}
cfx.gauge.ez = ez;
ez.prototype = {
    getCount: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    getItem: function (index) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setItem: function (index, value) {
        /// <summary>Description goes here</summary>
        /// <param name="index" type="number"/>>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    add: function (indicator) {
        /// <param name="indicator" type="cfx.gauge.eA"/>>
    },
    clear: function () {
    },
    removeAt: function (index) {
        /// <param name="index" type="number"/>>
    }
};

var eA = function() {
}
cfx.gauge.eA = eA;
eA.prototype = {
    getBorderColor: function () {
        /// <summary>Gets the border color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getInteractive: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the indicator position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the indicator position.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title for the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the Title for the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValue: function () {
        /// <summary>Gets the value for an indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value for an indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets whether an indicator is visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets whether an indicator is visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the indicator's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the indicator's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var Needle = function() {
}
cfx.gauge.Needle = Needle;
Needle.prototype = {
    getBorderColor: function () {
        /// <summary>Gets the border color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getInteractive: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the indicator position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the indicator position.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title for the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the Title for the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValue: function () {
        /// <summary>Gets the value for an indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value for an indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets whether an indicator is visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets whether an indicator is visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the indicator's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the indicator's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var Marker = function() {
}
cfx.gauge.Marker = Marker;
Marker.prototype = {
    getRatio: function () {
        /// <summary>Gets the Marker ratio.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setRatio: function (value) {
        /// <summary>Sets the Marker ratio.</summary>
        /// <param name="value" type="number"/>>
    },
    getBorderColor: function () {
        /// <summary>Gets the border color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getInteractive: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the indicator position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the indicator position.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title for the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the Title for the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValue: function () {
        /// <summary>Gets the value for an indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value for an indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets whether an indicator is visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets whether an indicator is visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the indicator's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the indicator's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var Repeater = function() {
}
cfx.gauge.Repeater = Repeater;
Repeater.prototype = {
    getOffBorderColor: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setOffBorderColor: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="String"/>>
    },
    getOffColor: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setOffColor: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="String"/>>
    },
    getPaintOff: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setPaintOff: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getSpacing: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSpacing: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="number"/>>
    },
    getRatio: function () {
        /// <summary>Gets the Marker ratio.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setRatio: function (value) {
        /// <summary>Sets the Marker ratio.</summary>
        /// <param name="value" type="number"/>>
    },
    getBorderColor: function () {
        /// <summary>Gets the border color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getInteractive: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the indicator position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the indicator position.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title for the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the Title for the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValue: function () {
        /// <summary>Gets the value for an indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value for an indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets whether an indicator is visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets whether an indicator is visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the indicator's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the indicator's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var Filler = function() {
}
cfx.gauge.Filler = Filler;
Filler.prototype = {
    getBorderColor: function () {
        /// <summary>Gets the border color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setBorderColor: function (value) {
        /// <summary>Sets the border color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getColor: function () {
        /// <summary>Gets the color of an indicator.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the color of an indicator.</summary>
        /// <param name="value" type="String"/>>
    },
    getInteractive: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="bool"/>
        return true;
    },
    setInteractive: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="bool"/>>
    },
    getPosition: function () {
        /// <summary>Gets the indicator position.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setPosition: function (value) {
        /// <summary>Sets the indicator position.</summary>
        /// <param name="value" type="number"/>>
    },
    getSize: function () {
        /// <summary>Gets the size of the indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setSize: function (value) {
        /// <summary>Sets the size of the indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getTitle: function () {
        /// <summary>Gets the Title for the indicator.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTitle: function (value) {
        /// <summary>Sets the Title for the indicator.</summary>
        /// <param name="value" type="string"/>>
    },
    getUseSectionColor: function () {
        /// <summary>Gets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setUseSectionColor: function (value) {
        /// <summary>Sets whether the indicator color should be taken automatically from the scale section or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getValue: function () {
        /// <summary>Gets the value for an indicator.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setValue: function (value) {
        /// <summary>Sets the value for an indicator.</summary>
        /// <param name="value" type="number"/>>
    },
    getVisible: function () {
        /// <summary>Gets whether an indicator is visible or not.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setVisible: function (value) {
        /// <summary>Sets whether an indicator is visible or not.</summary>
        /// <param name="value" type="bool"/>>
    },
    getZOrder: function () {
        /// <summary>Gets the indicator's Z order.</summary>
        /// <returns type="cfx.gauge.ZOrder"/>
        return new ZOrder();
    },
    setZOrder: function (value) {
        /// <summary>Sets the indicator's Z order.</summary>
        /// <param name="value" type="cfx.gauge.ZOrder"/>>
    }
};

var eC = function() {
}
cfx.gauge.eC = eC;
eC.prototype = {
    getColor: function () {
        /// <summary>Gets the outside color for a gauge border.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the outside color for a gauge border.</summary>
        /// <param name="value" type="String"/>>
    },
    getGlare: function () {
        /// <summary>Gets the GlareAttributes object for the BorderGauge.</summary>
        /// <returns type="cfx.gauge.ep"/>
        return new ep();
    },
    getInsideColor: function () {
        /// <summary>Gets the internal color for a gauge border.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setInsideColor: function (value) {
        /// <summary>Sets the internal color for a gauge border.</summary>
        /// <param name="value" type="String"/>>
    },
    getInsideGap: function () {
        /// <summary>Specifies the size of the gap between the border's internal edge and the scale and indicators.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setInsideGap: function (value) {
        /// <summary>Specifies the size of the gap between the border's internal edge and the scale and indicators.</summary>
        /// <param name="value" type="number"/>>
    },
    getShadow: function () {
        /// <summary>Gets the ShadowAttributes object for the BorderGauge.</summary>
        /// <returns type="cfx.gauge.eo"/>
        return new eo();
    },
    getTag: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specfies the vector template used to describe the border.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specfies the vector template used to describe the border.</summary>
        /// <param name="value" type="string"/>>
    },
    getWidth: function () {
        /// <summary>Gets the border width.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setWidth: function (value) {
        /// <summary>Sets the border width.</summary>
        /// <param name="value" type="number"/>>
    }
};

var BorderedControl = function() {
}
cfx.gauge.BorderedControl = BorderedControl;
BorderedControl.prototype = {
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var Trend = function() {
}
cfx.gauge.Trend = Trend;
Trend.prototype = {
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getConditional: function () {
        /// <summary>Gets the ConditionalSettings object.</summary>
        /// <returns type="cfx.gauge.d_"/>
        return new d_();
    },
    getCulture: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="CultureInfo"/>
        return new CultureInfo();
    },
    setCulture: function (value) {
        /// <summary>Description goes here</summary>
        /// <param name="value" type="CultureInfo"/>>
    },
    getCurrent: function () {
        /// <summary>Gets the TrendUserValue for the Current period.</summary>
        /// <returns type="cfx.gauge.eh"/>
        return new eh();
    },
    getDelta: function () {
        /// <summary>Gets the TrendDeltaValue object for the trend.</summary>
        /// <returns type="cfx.gauge.eg"/>
        return new eg();
    },
    getFontName: function () {
        /// <summary>Gets the font name for all Trend elements.</summary>
        /// <returns type="string"/>
        return "";
    },
    setFontName: function (value) {
        /// <summary>Sets the font name for all Trend elements.</summary>
        /// <param name="value" type="string"/>>
    },
    getFontStyle: function () {
        /// <summary>Gets the font style for all Trend elements.</summary>
        /// <returns type="FontStyle"/>
        return new FontStyle();
    },
    setFontStyle: function (value) {
        /// <summary>Sets the font style for all Trend elements.</summary>
        /// <param name="value" type="FontStyle"/>>
    },
    getIndicator: function () {
        /// <summary>Gets the IndicatorSettings for the trend.</summary>
        /// <returns type="cfx.gauge.ea"/>
        return new ea();
    },
    getLayout: function () {
        /// <summary>Gets the Layout for the trend object.</summary>
        /// <returns type="cfx.gauge.TrendLayout"/>
        return new TrendLayout();
    },
    setLayout: function (value) {
        /// <summary>Sets the Layout for the trend object.</summary>
        /// <param name="value" type="cfx.gauge.TrendLayout"/>>
    },
    getPercentChange: function () {
        /// <summary>Gets the TrendPercentChangeValue object for the trend.</summary>
        /// <returns type="cfx.gauge.ef"/>
        return new ef();
    },
    getPrimaryValue: function () {
        /// <summary>Gets the PrimarySettings for the trend's PrimaryValue.</summary>
        /// <returns type="cfx.gauge.ed"/>
        return new ed();
    },
    getReference: function () {
        /// <summary>Gets the TrendUserValue for the Reference value.</summary>
        /// <returns type="cfx.gauge.eh"/>
        return new eh();
    },
    getSecondaryValues: function () {
        /// <summary>Gets the SecondarySettings for the trend's Secondary Values.</summary>
        /// <returns type="cfx.gauge.ec"/>
        return new ec();
    },
    getShowGuides: function () {
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color of the text used by all Trend elements.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color of the text used by all Trend elements.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var PictoGraph = function() {
}
cfx.gauge.PictoGraph = PictoGraph;
PictoGraph.prototype = {
    getCount: function () {
        /// <returns type="number"/>
        return 0;
    },
    setCount: function (value) {
        /// <param name="value" type="number"/>>
    },
    getFractionDisplay: function () {
        /// <returns type="cfx.gauge.FractionDisplay"/>
        return new FractionDisplay();
    },
    setFractionDisplay: function (value) {
        /// <param name="value" type="cfx.gauge.FractionDisplay"/>>
    },
    getLayout: function () {
        /// <returns type="cfx.gauge.d$"/>
        return new d$();
    },
    setLayout: function (value) {
        /// <param name="value" type="cfx.gauge.d$"/>>
    },
    getMainMeasure: function () {
        /// <returns type="cfx.gauge.PictoMeasure"/>
        return new PictoMeasure();
    },
    getMeasurePosition: function () {
        /// <returns type="cfx.gauge.MeasurePosition"/>
        return new MeasurePosition();
    },
    setMeasurePosition: function (value) {
        /// <param name="value" type="cfx.gauge.MeasurePosition"/>>
    },
    getMeasures: function () {
        /// <returns type="cfx.gauge.d8"/>
        return new d8();
    },
    getTemplate: function () {
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <param name="value" type="string"/>>
    },
    getTotal: function () {
        /// <returns type="cfx.gauge.PictoMeasure"/>
        return new PictoMeasure();
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var Border = function() {
}
cfx.gauge.Border = Border;
Border.prototype = {
    getColor: function () {
        /// <summary>Gets the outside color for a border.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setColor: function (value) {
        /// <summary>Sets the outside color for a border.</summary>
        /// <param name="value" type="String"/>>
    },
    getInsideColor: function () {
        /// <summary>Gets the internal color for a border.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setInsideColor: function (value) {
        /// <summary>Sets the internal color for a border.</summary>
        /// <param name="value" type="String"/>>
    },
    getStrokeWidth: function () {
        /// <summary>Gets the stroke width of a Border.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setStrokeWidth: function (value) {
        /// <summary>Sets the stroke width of a Border.</summary>
        /// <param name="value" type="number"/>>
    },
    getTag: function () {
        /// <summary>Gets the Tag property.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTag: function (value) {
        /// <summary>Sets the Tag property.</summary>
        /// <param name="value" type="string"/>>
    },
    getTemplate: function () {
        /// <summary>Specifies the vector template used to describe the border.</summary>
        /// <returns type="string"/>
        return "";
    },
    setTemplate: function (value) {
        /// <summary>Specifies the vector template used to describe the border.</summary>
        /// <param name="value" type="string"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var Gauge = function() {
}
cfx.gauge.Gauge = Gauge;
Gauge.prototype = {
    getAnimations: function () {
        /// <summary>Provides access to the collection of AnimationAttributes objects.</summary>
        /// <returns type="cfx.gauge.d7"/>
        return new d7();
    },
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDashboardBorder: function () {
        /// <summary>Gets the Border object used in dashboards.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDefaultAttributes: function () {
        /// <summary>Provides access to the GaugeDefaultAttributes object.</summary>
        /// <returns type="cfx.gauge.d4"/>
        return new d4();
    },
    getFont: function () {
        /// <summary>Gets the default font for all Gauge elements.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the default font for all Gauge elements.</summary>
        /// <param name="value" type="Font"/>>
    },
    getInteraction: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.InteractionAttributes"/>
        return new InteractionAttributes();
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a gauge.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a gauge.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMainValue: function () {
        /// <summary>Gets the main value of a gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMainValue: function (value) {
        /// <summary>Sets the main value of a gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getResizeableFont: function () {
        /// <summary>Gets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <summary>Sets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getShowGuides: function () {
        /// <summary>Gets the ShowGuides value of a gauge.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <summary>Sets the ShowGuides value of a gauge.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color used by the gauge's text.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color used by the gauge's text.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var LinearGauge = function() {
}
cfx.gauge.LinearGauge = LinearGauge;
LinearGauge.prototype = {
    getMainScale: function () {
        /// <summary>Returns the main scale of a linear gauge.</summary>
        /// <returns type="cfx.gauge.LinearScale"/>
        return new LinearScale();
    },
    getAnimations: function () {
        /// <summary>Provides access to the collection of AnimationAttributes objects.</summary>
        /// <returns type="cfx.gauge.d7"/>
        return new d7();
    },
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDashboardBorder: function () {
        /// <summary>Gets the Border object used in dashboards.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDefaultAttributes: function () {
        /// <summary>Provides access to the GaugeDefaultAttributes object.</summary>
        /// <returns type="cfx.gauge.d4"/>
        return new d4();
    },
    getFont: function () {
        /// <summary>Gets the default font for all Gauge elements.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the default font for all Gauge elements.</summary>
        /// <param name="value" type="Font"/>>
    },
    getInteraction: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.InteractionAttributes"/>
        return new InteractionAttributes();
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a gauge.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a gauge.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMainValue: function () {
        /// <summary>Gets the main value of a gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMainValue: function (value) {
        /// <summary>Sets the main value of a gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getResizeableFont: function () {
        /// <summary>Gets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <summary>Sets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getShowGuides: function () {
        /// <summary>Gets the ShowGuides value of a gauge.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <summary>Sets the ShowGuides value of a gauge.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color used by the gauge's text.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color used by the gauge's text.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var VerticalGauge = function() {
}
cfx.gauge.VerticalGauge = VerticalGauge;
VerticalGauge.prototype = {
    getMainScale: function () {
        /// <summary>Returns the main scale of a linear gauge.</summary>
        /// <returns type="cfx.gauge.LinearScale"/>
        return new LinearScale();
    },
    getAnimations: function () {
        /// <summary>Provides access to the collection of AnimationAttributes objects.</summary>
        /// <returns type="cfx.gauge.d7"/>
        return new d7();
    },
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDashboardBorder: function () {
        /// <summary>Gets the Border object used in dashboards.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDefaultAttributes: function () {
        /// <summary>Provides access to the GaugeDefaultAttributes object.</summary>
        /// <returns type="cfx.gauge.d4"/>
        return new d4();
    },
    getFont: function () {
        /// <summary>Gets the default font for all Gauge elements.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the default font for all Gauge elements.</summary>
        /// <param name="value" type="Font"/>>
    },
    getInteraction: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.InteractionAttributes"/>
        return new InteractionAttributes();
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a gauge.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a gauge.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMainValue: function () {
        /// <summary>Gets the main value of a gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMainValue: function (value) {
        /// <summary>Sets the main value of a gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getResizeableFont: function () {
        /// <summary>Gets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <summary>Sets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getShowGuides: function () {
        /// <summary>Gets the ShowGuides value of a gauge.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <summary>Sets the ShowGuides value of a gauge.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color used by the gauge's text.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color used by the gauge's text.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var HorizontalGauge = function() {
}
cfx.gauge.HorizontalGauge = HorizontalGauge;
HorizontalGauge.prototype = {
    getMainScale: function () {
        /// <summary>Returns the main scale of a linear gauge.</summary>
        /// <returns type="cfx.gauge.LinearScale"/>
        return new LinearScale();
    },
    getAnimations: function () {
        /// <summary>Provides access to the collection of AnimationAttributes objects.</summary>
        /// <returns type="cfx.gauge.d7"/>
        return new d7();
    },
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDashboardBorder: function () {
        /// <summary>Gets the Border object used in dashboards.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDefaultAttributes: function () {
        /// <summary>Provides access to the GaugeDefaultAttributes object.</summary>
        /// <returns type="cfx.gauge.d4"/>
        return new d4();
    },
    getFont: function () {
        /// <summary>Gets the default font for all Gauge elements.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the default font for all Gauge elements.</summary>
        /// <param name="value" type="Font"/>>
    },
    getInteraction: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.InteractionAttributes"/>
        return new InteractionAttributes();
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a gauge.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a gauge.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMainValue: function () {
        /// <summary>Gets the main value of a gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMainValue: function (value) {
        /// <summary>Sets the main value of a gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getResizeableFont: function () {
        /// <summary>Gets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <summary>Sets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getShowGuides: function () {
        /// <summary>Gets the ShowGuides value of a gauge.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <summary>Sets the ShowGuides value of a gauge.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color used by the gauge's text.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color used by the gauge's text.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};

var RadialGauge = function() {
}
cfx.gauge.RadialGauge = RadialGauge;
RadialGauge.prototype = {
    getMainScale: function () {
        /// <summary>Returns the main scale of a radial gauge.</summary>
        /// <returns type="cfx.gauge.ey"/>
        return new ey();
    },
    getAnimations: function () {
        /// <summary>Provides access to the collection of AnimationAttributes objects.</summary>
        /// <returns type="cfx.gauge.d7"/>
        return new d7();
    },
    getBorder: function () {
        /// <summary>Gets the BorderGauge object.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDashboardBorder: function () {
        /// <summary>Gets the Border object used in dashboards.</summary>
        /// <returns type="cfx.gauge.eC"/>
        return new eC();
    },
    getDefaultAttributes: function () {
        /// <summary>Provides access to the GaugeDefaultAttributes object.</summary>
        /// <returns type="cfx.gauge.d4"/>
        return new d4();
    },
    getFont: function () {
        /// <summary>Gets the default font for all Gauge elements.</summary>
        /// <returns type="Font"/>
        return new Font();
    },
    setFont: function (value) {
        /// <summary>Sets the default font for all Gauge elements.</summary>
        /// <param name="value" type="Font"/>>
    },
    getInteraction: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.InteractionAttributes"/>
        return new InteractionAttributes();
    },
    getMainIndicator: function () {
        /// <summary>Gets the main indicator of a gauge.</summary>
        /// <returns type="cfx.gauge.eA"/>
        return new eA();
    },
    setMainIndicator: function (value) {
        /// <summary>Sets the main indicator of a gauge.</summary>
        /// <param name="value" type="cfx.gauge.eA"/>>
    },
    getMainValue: function () {
        /// <summary>Gets the main value of a gauge.</summary>
        /// <returns type="number"/>
        return 0;
    },
    setMainValue: function (value) {
        /// <summary>Sets the main value of a gauge.</summary>
        /// <param name="value" type="number"/>>
    },
    getResizeableFont: function () {
        /// <summary>Gets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <returns type="cfx.gauge.ResizeFont"/>
        return new ResizeFont();
    },
    setResizeableFont: function (value) {
        /// <summary>Sets whether the gauge font is resized when the gauge changes its size.</summary>
        /// <param name="value" type="cfx.gauge.ResizeFont"/>>
    },
    getShowGuides: function () {
        /// <summary>Gets the ShowGuides value of a gauge.</summary>
        /// <returns type="bool"/>
        return true;
    },
    setShowGuides: function (value) {
        /// <summary>Sets the ShowGuides value of a gauge.</summary>
        /// <param name="value" type="bool"/>>
    },
    getTextColor: function () {
        /// <summary>Gets the color used by the gauge's text.</summary>
        /// <returns type="Object"/>
        return new ();
    },
    setTextColor: function (value) {
        /// <summary>Sets the color used by the gauge's text.</summary>
        /// <param name="value" type="String"/>>
    },
    getExtensions: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.el"/>
        return new el();
    },
    getTitles: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.er"/>
        return new er();
    },
    getToolTips: function () {
        /// <summary>Description goes here</summary>
        /// <returns type="cfx.gauge.en"/>
        return new en();
    },
    addExtension: function (obj) {
        /// <param name="obj" type="?"/>>
    }
};
})();
