declare module cfx {
    export enum StringAlignment {
        Near,
        Center,
        Far
    }

    export enum AnimationDelay {
        Auto,
        None,
        PerPoint,
        PerSeries,
        PerPointInverse,
        PerSeriesInverse,
        PerPointRandom,
        PerSeriesRandom,
        PerPointSeries,
        PerPointSeriesRandom
    }

    export enum AnimationDirection {
        Auto,
        Upward,
        Downward,
        FromCenter
    }

    export enum AnimationTiming {
        Auto,
        Linear,
        EaseIn,
        EaseOut,
        EaseInEaseOut,
        EaseOutBounce
    }

    export enum AxesStyle {
        None,
        Frame3D,
        Math,
        FlatFrame,
        X,
        Y
    }

    export enum AxisFormat {
        None,
        Number,
        Currency,
        Scientific,
        Percentage,
        Date,
        LongDate,
        Time,
        DateTime
    }

    export enum AxisPosition {
        Near,
        Far
    }

    export enum AxisStyles {
        HideText,
        Notify,
        Show2Levels,
        SingleLine,
        AutoScaleUnit,
        BreakZero,
        Hide,
        NotClipped,
        ClientScroll,
        Centered,
        RotateText,
        LongTick,
        AutoScale,
        ForceZero,
        ShowEnds,
        RoundStep,
        IgnoreLabels,
        GridFront,
        Inverted,
        ShowIntermediateLogLabels,
        AutoMinorStep,
        AutoFirstLabel,
        AutoCenter,
        Inside,
        AutoLabelLayout,
        AllowHalf,
        LeftAligned,
        DoNotReset,
        AutoDecimals,
        Default
    }

    export enum BarAnimation {
        Value,
        Drop
    }

    export enum BarShape {
        Rectangle,
        Cylinder,
        Cone,
        Pyramid
    }

    export enum BorderEffect {
        None,
        Raised,
        Light,
        Dark,
        Opposite,
        Shadow
    }

    export enum BubbleAnimation {
        Position,
        Size,
        PositionAndSize
    }

    export enum ChartStyles {
        NoLegInvalidate,
        PaintMarker,
        OnlyChart,
        SideBySide,
        Monochrome,
        FastLegends,
        ForceDataDriven,
        PaintNoChart,
        HideZLabels,
        Default
    }

    export enum ConditionSpecialValue {
        None,
        First,
        Last,
        Min,
        Max
    }

    export enum ConditionUnit {
        Absolute,
        Percentage
    }

    export enum ContentLayout {
        Spread,
        Near,
        Center,
        Far
    }

    export enum CustomGridLineStyles {
        None,
        HideText,
        Hide,
        BackOnly,
        ColorText,
        HideLine,
        OutsideText,
        ShowValue
    }

    export enum DataSourceStyles {
        KeepScale,
        Transpose,
        KeepSeriesLegend,
        KeepLabels,
        ReadXValues,
        ReadYFromValues,
        DatesAsLabels,
        RewindBeforeReading,
        DataChange,
        None,
        Default
    }

    export enum DockArea {
        Left,
        Top,
        Right,
        Bottom
    }

    export enum DockBorder {
        None,
        External,
        Internal
    }

    export enum ExplodingMode {
        None,
        All,
        First,
        Last
    }

    export enum FieldUsage {
        Default,
        Label,
        Value,
        XValue,
        FromValue,
        KeyLabel,
        ColumnHeading,
        RowHeading,
        NotUsed
    }

    export enum FillMode {
        Solid,
        Monochrome,
        Pattern,
        Gradient
    }

    export enum Gallery {
        None,
        Lines,
        Bar,
        Area,
        Scatter,
        Pie,
        Step,
        HighLowClose,
        Radar,
        Polar,
        Cube,
        Bubble,
        OpenHighLowClose,
        Candlestick,
        Gantt,
        Curve,
        Pareto,
        Surface,
        Doughnut,
        Pyramid,
        Contour,
        CurveArea
    }

    export enum HitType {
        None,
        Background,
        InsideArea,
        Between,
        Point,
        Axis,
        Title,
        CustomGridLine,
        Drag,
        Crosshair,
        Scroll,
        LegendBox,
        DataGrid,
        Other,
        AxisSection,
        Gallery,
        Annotation,
        Link
    }

    export enum Interlaced {
        None,
        Horizontal,
        Vertical
    }

    export enum LegendBoxStyles {
        Wordbreak,
        ShowMenu,
        RightAlign,
        NoColor,
        HidePartial,
        Default
    }

    export enum LineAnimation {
        DrawX,
        YData,
        YProgress
    }

    export enum MarkerShape {
        None,
        Rect,
        Circle,
        Triangle,
        Diamond,
        Marble,
        HorizontalLine,
        VerticalLine,
        Cross,
        InvertedTriangle,
        X,
        Picture,
        Template,
        Many
    }

    export enum MarkerStyle {
        Filled,
        Hollow
    }

    export enum NumberComparison {
        Equals,
        GreaterThan,
        LessThan,
        Between
    }

    export enum PieAnimation {
        Radial,
        Angle,
        RadialAndAngle,
        AngleFromTop,
        RadialAngleFromTop
    }

    export enum RealTimeAction {
        Append,
        Insert
    }

    export enum RealTimeMode {
        Scroll,
        Loop
    }

    export enum Shadow {
        None,
        Fixed,
        Realistic
    }

    export enum Stacked {
        No,
        Normal,
        Stacked100
    }

    export enum StringsComparison {
        Equals,
        StartsWith,
        EndsWith,
        Contains
    }

    export enum TickMark {
        None,
        Outside,
        Inside,
        Cross
    }

    export enum TooltipTriggerMode {
        Marker,
        MarkerThenPlot,
        Plot
    }

    export enum GradientType {
        Horizontal,
        Vertical,
        BackwardDiagonal,
        ForwardDiagonal,
        Radial,
        Angled
    }

    export enum StepStyle {
        HorizontalVertical,
        VerticalHorizontal
    }

    export enum DataElement {
        a,
        b,
        c
    }

    export class IBackgroundAdornment {
        protected _internal_IBackgroundAdornment(): void;
    }

    export class IBorderAdornment {
        protected _internal_IBorderAdornment(): void;
    }

    export class ICondition {
        protected _internal_ICondition(): void;
    }

    export class IDataProvider {
        protected _internal_IDataProvider(): void;
    }

    export class IGalleryType {
        protected _internal_IGalleryType(): void;
    }

    export class VectorBorder extends IBorderAdornment {
        protected _internal_IBorderAdornment(): void;
        constructor();
        /** Description goes here */
        getTag(): string;
        /** Description goes here */
        setTag(value: string): void;
        /** Description goes here */
        getTemplate(): string;
        /** Description goes here */
        setTemplate(value: string): void;
    }

    export class Surface extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Gets a collection of colors to be used for the colors of the surface plot. */
        getColors(): any;
        /** Sets a collection of colors to be used for the colors of the surface plot. */
        setColors(value: any): void;
        /** Shows or hides the contour lines for Contour charts. */
        getShowContourLines(): boolean;
        /** Shows or hides the contour lines for Contour charts. */
        setShowContourLines(value: boolean): void;
        /** Shows or hides the Grid lines of surface charts in the chart area. */
        getShowGridLines(): boolean;
        /** Shows or hides the Grid lines of surface charts in the chart area. */
        setShowGridLines(value: boolean): void;
        /** Gets or set the Step for a Surface chart. The lower the Step, the smother the surface. */
        getStep(): number;
        /** Gets or set the Step for a Surface chart. The lower the Step, the smother the surface. */
        setStep(value: number): void;
    }

    export class Scatter extends IGalleryType {
        protected _internal_IGalleryType(): void;
    }

    export class Radar extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Gets a value specifying to draw the Radar chart in a round or polygonal shape. */
        getCircular(): boolean;
        /** Sets a value specifying to draw the Radar chart in a round or polygonal shape. */
        setCircular(value: boolean): void;
        /** Gets a value indicating to plot points in a clockwise or counter-clockwise direction. */
        getClockwise(): boolean;
        /** Sets a value indicating to plot points in a clockwise or counter-clockwise direction. */
        setClockwise(value: boolean): void;
        /** Gets a value indicating whether or not to connect the first and last points in a radar chart. */
        getClosed(): boolean;
        /** Sets a value indicating whether or not to connect the first and last points in a radar chart. */
        setClosed(value: boolean): void;
        /** Fills the inside area of a Radar chart. */
        getFillArea(): boolean;
        /** Fills the inside area of a Radar chart. */
        setFillArea(value: boolean): void;
        /** Gets a value indicating whether or not shadowing is applied for a 2D radar chart. */
        getShadows(): boolean;
        /** Sets a value indicating whether or not shadowing is applied for a 2D radar chart. */
        setShadows(value: boolean): void;
        /** Shows or Hides the lines connecting each point in the radar Chart. */
        getShowLines(): boolean;
        /** Shows or Hides the lines connecting each point in the radar Chart. */
        setShowLines(value: boolean): void;
    }

    export class Pyramid extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Determines whether or not the pyramid will be shown with a Conic effect. */
        getConic(): boolean;
        /** Determines whether or not the pyramid will be shown with a Conic effect. */
        setConic(value: boolean): void;
        getDistributeHeight(): boolean;
        setDistributeHeight(value: boolean): void;
        /** Determines how many Faces the pyramid has. */
        getFaces(): number;
        /** Determines how many Faces the pyramid has. */
        setFaces(value: number): void;
        /** Determines if the pyramid is displayed upside-down or right-side up. */
        getInverted(): boolean;
        /** Determines if the pyramid is displayed upside-down or right-side up. */
        setInverted(value: boolean): void;
        /** Determines how many pixels each segment of the pyramid is separated by. */
        getSeparation(): number;
        /** Determines how many pixels each segment of the pyramid is separated by. */
        setSeparation(value: number): void;
        /** Determines if the pyramid as a shadow that gives a 2D chart a 3D look. */
        getShadow2D(): boolean;
        /** Determines if the pyramid as a shadow that gives a 2D chart a 3D look. */
        setShadow2D(value: boolean): void;
    }

    export class Pareto extends IGalleryType {
        protected _internal_IGalleryType(): void;
    }

    export class GalleryLine extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Description goes here */
        getAnimationStyle(): LineAnimation;
        /** Description goes here */
        setAnimationStyle(value: LineAnimation): void;
        /** Gets the StepStyle property. */
        getStepStyle(): StepStyle;
        /** Sets the StepStyle property. */
        setStepStyle(value: StepStyle): void;
    }

    export class HighLow extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Provides means to convert a OpenHighLowClose chart to a HighLowClose chart (and the other way around) without having to re-order the series. */
        getHighLowClose4Series(): boolean;
        /** Provides means to convert a OpenHighLowClose chart to a HighLowClose chart (and the other way around) without having to re-order the series. */
        setHighLowClose4Series(value: boolean): void;
    }

    export class Curve extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Description goes here */
        getAnimationStyle(): LineAnimation;
        /** Description goes here */
        setAnimationStyle(value: LineAnimation): void;
    }

    export class Bar extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Description goes here */
        getAnimationStyle(): BarAnimation;
        /** Description goes here */
        setAnimationStyle(value: BarAnimation): void;
        /** Allows you to set the separation of the bars on a same point, on a multi-series chart. */
        getIntraSeriesGap(): number;
        /** Allows you to set the separation of the bars on a same point, on a multi-series chart. */
        setIntraSeriesGap(value: number): void;
        /** Instruct the chart to draw bars on the same point overlaping each other. */
        getOverlap(): boolean;
        /** Instruct the chart to draw bars on the same point overlaping each other. */
        setOverlap(value: boolean): void;
    }

    export class Area extends IGalleryType {
        protected _internal_IGalleryType(): void;
        /** Gets the AnimationStyle in the Area object. */
        getAnimationStyle(): LineAnimation;
        /** Sets the AnimationStyle in the Area object. */
        setAnimationStyle(value: LineAnimation): void;
    }

    export class ImageBackground extends IBackgroundAdornment {
        protected _internal_IBackgroundAdornment(): void;
    }

    export class GradientBackground extends IBackgroundAdornment {
        protected _internal_IBackgroundAdornment(): void;
        constructor();
        /** Sets the gradient angle when using the 'Angled' gradient background. */
        getAngle(): number;
        /** Sets the gradient angle when using the 'Angled' gradient background. */
        setAngle(value: number): void;
        /** Gets the beginning color of a gradient. */
        getColorFrom(): string;
        /** Sets the beginning color of a gradient. */
        setColorFrom(value: string): void;
        getColors(): GradientBackground_ColorCollection;
        /** Ending color of a gradient. */
        getColorTo(): string;
        /** Ending color of a gradient. */
        setColorTo(value: string): void;
        /** Gets a value indicating the percentage of chart area affected by a GradientBackground. */
        getEffectArea(): number;
        /** Sets a value indicating the percentage of chart area affected by a GradientBackground. */
        setEffectArea(value: number): void;
        getFactor(): GradientBackground_FloatCollection;
        getPosition(): GradientBackground_FloatCollection;
        /** Sets the style of the gradient for a selected gradient background. */
        getType(): GradientType;
        /** Sets the style of the gradient for a selected gradient background. */
        setType(value: GradientType): void;
    }
        export class GradientBackground_FloatCollection {
        getItem(n: number): number;
        setItem(n: number, value: number): void;
        add(f: number): void;
        clear(): void;
    }
        export class GradientBackground_ColorCollection {
        getItem(n: number): string;
        setItem(n: number, value: string): void;
        add(color: string): void;
        clear(): void;
    }

    export class StringFieldCondition extends ICondition {
        protected _internal_ICondition(): void;
        constructor();
        /** Gets the StringField comparison condition. */
        getComparison(): StringsComparison;
        /** Sets the StringField comparison condition. */
        setComparison(value: StringsComparison): void;
        /** Gets a value indicating whether or not the StringField condition comparison is inversed */
        getInverse(): boolean;
        /** Sets a value indicating whether or not the StringField condition comparison is inversed */
        setInverse(value: boolean): void;
        /** Gets the name of the Field to use in the comparison in a StringField condition */
        getName(): string;
        /** Sets the name of the Field to use in the comparison in a StringField condition */
        setName(value: string): void;
        /** Gets the value to compare with in a StringField condition */
        getValue(): string;
        /** Sets the value to compare with in a StringField condition */
        setValue(value: string): void;
    }

    export class NumberFieldCondition extends ICondition {
        protected _internal_ICondition(): void;
        constructor();
        /** Gets the NumberField comparison condition. */
        getComparison(): NumberComparison;
        /** Sets the NumberField comparison condition. */
        setComparison(value: NumberComparison): void;
        /** Gets the FromValue in a NumberField condition */
        getFromValue(): number;
        /** Sets the FromValue in a NumberField condition */
        setFromValue(value: number): void;
        /** Gets the name of the Field to use in the comparison in a NumberField condition */
        getName(): string;
        /** Sets the name of the Field to use in the comparison in a NumberField condition */
        setName(value: string): void;
        /** Gets the Unit in a NumberField condition */
        getUnit(): ConditionUnit;
        /** Sets the Unit in a NumberField condition */
        setUnit(value: ConditionUnit): void;
        /** Gets the value to compare with in a NumberField condition */
        getValue(): number;
        /** Sets the value to compare with in a NumberField condition */
        setValue(value: number): void;
    }

    export class LegendItemAttributes {
        constructor();
        /** Gets the font style for the legend box item. */
        getFontStyle(): any;
        /** Sets the font style for the legend box item. */
        setFontStyle(value: any): void;
        /** Gets a value allowing you to invert the order of the LegendBox Items. */
        getInverted(): boolean;
        /** Sets a value allowing you to invert the order of the LegendBox Items. */
        setInverted(value: boolean): void;
        /** Gets the shape of the marker for the Legend item. */
        getMarkerShape(): MarkerShape;
        /** Sets the shape of the marker for the Legend item. */
        setMarkerShape(value: MarkerShape): void;
        /** Gets a value controlling the size of the markers for the selected legend item. */
        getMarkerSize(): number;
        /** Sets a value controlling the size of the markers for the selected legend item. */
        setMarkerSize(value: number): void;
        /** Gets the index for ordering the legend box items. */
        getOrderIndex(): number;
        /** Sets the index for ordering the legend box items. */
        setOrderIndex(value: number): void;
        /** Description goes here */
        getTemplate(): string;
        /** Description goes here */
        setTemplate(value: string): void;
        /** Gets a value allowing you to set the text color for the legend item. */
        getTextColor(): string;
        /** Sets a value allowing you to set the text color for the legend item. */
        setTextColor(value: string): void;
        /** Gets a value allowing you hide or show the legend item. */
        getVisible(): boolean;
        /** Sets a value allowing you hide or show the legend item. */
        setVisible(value: boolean): void;
    }

    export class FieldMap {
        constructor();
        /** Gets the name of the field which will be displayed by the Chart. */
        getDisplayName(): string;
        /** Sets the name of the field which will be displayed by the Chart. */
        setDisplayName(value: string): void;
        /** Gets the name of the ResultSet's field related to the FieldMap. */
        getName(): string;
        /** Sets the name of the ResultSet's field related to the FieldMap. */
        setName(value: string): void;
        /** Gets the usage of the related column of the ResultSet. */
        getUsage(): FieldUsage;
        /** Sets the usage of the related column of the ResultSet. */
        setUsage(value: FieldUsage): void;
    }

    export class DataArray {
    }

    export class CustomLegendItem {
        constructor();
        /** Gets the background color of a custom legend item marker when a pattern is configured using the Pattern property. */
        getAlternateColor(): string;
        /** Sets the background color of a custom legend item marker when a pattern is configured using the Pattern property. */
        setAlternateColor(value: string): void;
        /** Gets the PointAttributes object for the custom legend item. */
        getAttributes(): PointAttributes;
        /** Sets the PointAttributes object for the custom legend item. */
        setAttributes(value: PointAttributes): void;
        /** Gets a BorderAttributes object allowing you to modify the border properties for this CustomLegendItem. */
        getBorder(): BorderAttributes;
        /** Gets the Color for the marker of the Custom Legend Item. */
        getColor(): string;
        /** Sets the Color for the marker of the Custom Legend Item. */
        setColor(value: string): void;
        /** Represents the shape of the marker. */
        getMarkerShape(): MarkerShape;
        /** Represents the shape of the marker. */
        setMarkerShape(value: MarkerShape): void;
        /** Gets a HatchStyle pattern for the marker of a CustomLegendItem. */
        getPattern(): any;
        /** Sets a HatchStyle pattern for the marker of a CustomLegendItem. */
        setPattern(value: any): void;
        /** Gets an image to be used as a marker for a CustomLegendItem. */
        getPicture(): any;
        /** Sets an image to be used as a marker for a CustomLegendItem. */
        setPicture(value: any): void;
        /** Gets a value used to display a line marker for a CustomLegendItem. */
        getShowLine(): boolean;
        /** Sets a value used to display a line marker for a CustomLegendItem. */
        setShowLine(value: boolean): void;
    }

    export class ConditionDataValue extends ICondition {
        protected _internal_ICondition(): void;
        constructor();
        /** A boolean property indicating whether the specified ConditionDataValue is enabled or disabled. */
        getActive(): boolean;
        /** A boolean property indicating whether the specified ConditionDataValue is enabled or disabled. */
        setActive(value: boolean): void;
        /** Gets the data value that the specified ConditionDataValue will evaluate. */
        getDataElement(): DataElement;
        /** Sets the data value that the specified ConditionDataValue will evaluate. */
        setDataElement(value: DataElement): void;
        /** Gets a value indicating the beginning value of the conditional range for a selected ConditionDataValue object. */
        getFrom(): number;
        /** Sets a value indicating the beginning value of the conditional range for a selected ConditionDataValue object. */
        setFrom(value: number): void;
        /** Gets a value indicating whether or not to include the configured From value in the range. */
        getFromOpen(): boolean;
        /** Sets a value indicating whether or not to include the configured From value in the range. */
        setFromOpen(value: boolean): void;
        /** Gets a value indicating whether to reverse the configured To and From attributes for a selected ConditionDataValue object. */
        getInverse(): boolean;
        /** Sets a value indicating whether to reverse the configured To and From attributes for a selected ConditionDataValue object. */
        setInverse(value: boolean): void;
        /** Gets the value that is used by the ConditionalDataValue to compare the result of an aggregation formula like first, last, max, min. */
        getSpecialValue(): ConditionSpecialValue;
        /** Sets the value that is used by the ConditionalDataValue to compare the result of an aggregation formula like first, last, max, min. */
        setSpecialValue(value: ConditionSpecialValue): void;
        /** Gets a value indicating the ending value of the conditional range for a selected ConditionDataValue object. */
        getTo(): number;
        /** Sets a value indicating the ending value of the conditional range for a selected ConditionDataValue object. */
        setTo(value: number): void;
        /** Gets a value indicating whether or not to include the configured To value in the range. */
        getToOpen(): boolean;
        /** Sets a value indicating whether or not to include the configured To value in the range. */
        setToOpen(value: boolean): void;
        /** {veb} a value indicating the unit of the conditional data value. */
        getUnit(): ConditionUnit;
        /** {veb} a value indicating the unit of the conditional data value. */
        setUnit(value: ConditionUnit): void;
    }

    export class CompactFormulas {
    }

    export class ColorBlender {
    }

    export class CellAttributes {
        constructor();
        /** Sets the background color for a particular Cell or entire Row in the DataGrid. */
        getBackColor(): string;
        /** Sets the background color for a particular Cell or entire Row in the DataGrid. */
        setBackColor(value: string): void;
        /** Allows you to set the color of the border for a particular Cell or entire Row in the DataGrid. */
        getBorderColor(): string;
        /** Allows you to set the color of the border for a particular Cell or entire Row in the DataGrid. */
        setBorderColor(value: string): void;
        /** Allows you to set the width of the Cell border in pixels for a particular Cell or entire Row in the DataGrid. */
        getBorderWidth(): number;
        /** Allows you to set the width of the Cell border in pixels for a particular Cell or entire Row in the DataGrid. */
        setBorderWidth(value: number): void;
        /** Allows you to set the style of the font for a particular Cell or entire Row in the DataGrid. */
        getFontStyle(): any;
        /** Allows you to set the style of the font for a particular Cell or entire Row in the DataGrid. */
        setFontStyle(value: any): void;
        /** Allows you to set the text color for a particular Cell or entire Row in the DataGrid. */
        getTextColor(): string;
        /** Allows you to set the text color for a particular Cell or entire Row in the DataGrid. */
        setTextColor(value: string): void;
    }

    export class CollectionCondition extends ICondition {
        protected _internal_ICondition(): void;
        constructor();
        add(condition: ICondition): void;
    }

    export class OrCondition extends CollectionCondition {
        constructor();
    }

    export class AndCondition extends CollectionCondition {
        constructor();
    }

    export class VectorPyramid extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
        getConic(): boolean;
        setConic(value: boolean): void;
        getDistributeHeight(): boolean;
        setDistributeHeight(value: boolean): void;
        getFaces(): number;
        setFaces(value: number): void;
        getInverted(): boolean;
        setInverted(value: boolean): void;
        getSeparation(): number;
        setSeparation(value: number): void;
    }

    export class VectorPie extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
        getAnimationStyle(): PieAnimation;
        setAnimationStyle(value: PieAnimation): void;
        getExplodingMode(): ExplodingMode;
        setExplodingMode(value: ExplodingMode): void;
        getLabelLineBreak(): number;
        setLabelLineBreak(value: number): void;
        getLabelsInside(): boolean;
        setLabelsInside(value: boolean): void;
        getMaximumLabelMargin(): number;
        setMaximumLabelMargin(value: number): void;
        getShadows(): boolean;
        setShadows(value: boolean): void;
        getShowLines(): boolean;
        setShowLines(value: boolean): void;
        getSliceSeparation(): number;
        setSliceSeparation(value: number): void;
        getSquare(): boolean;
        setSquare(value: boolean): void;
        getStacked(): boolean;
        setStacked(value: boolean): void;
        getStartAngle(): number;
        setStartAngle(value: number): void;
    }

    export class VectorDoughnut extends VectorPie {
        constructor();
        getDoughnutThickness(): number;
        setDoughnutThickness(value: number): void;
    }

    export class VectorBubble extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
        getAnimationStyle(): BubbleAnimation;
        setAnimationStyle(value: BubbleAnimation): void;
        getMaximumBubbleSize(): number;
        setMaximumBubbleSize(value: number): void;
    }

    export class VectorBar extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
        getAnimationStyle(): BarAnimation;
        setAnimationStyle(value: BarAnimation): void;
        getIntraSeriesGap(): number;
        setIntraSeriesGap(value: number): void;
        getOverlap(): boolean;
        setOverlap(value: boolean): void;
    }

    export class VectorGantt extends VectorBar {
        constructor();
    }

    export class VectorCube extends VectorBar {
        constructor();
    }

    export class VectorLine extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
    }

    export class VectorStepLine extends VectorLine {
        constructor();
        getStepStyle(): StepStyle;
        setStepStyle(value: StepStyle): void;
    }

    export class VectorCurve extends VectorLine {
        constructor();
    }

    export class VectorArea extends IGalleryType {
        protected _internal_IGalleryType(): void;
        constructor();
    }

    export class VectorCurveArea extends VectorArea {
        constructor();
    }

    export class LegendItemAttributesCollection {
        getItemList(list: any): LegendItemAttributes;
        setItemList(list: any, value: LegendItemAttributes): void;
        getItem(list: any, index: number): LegendItemAttributes;
        setItem(list: any, index: number, value: LegendItemAttributes): void;
        removeItemFromList(list: any, index: number): void;
    }

    export class CellAttributesCollection {
        getRow(row: number): CellAttributes;
        setRow(row: number, value: CellAttributes): void;
        getItem(row: number, column: number): CellAttributes;
        setItem(row: number, column: number, value: CellAttributes): void;
    }

    export class DockableBar {
        /** Allows jChartFX to calculate the best size according to the tool position. */
        getAutoSize(): boolean;
        /** Allows jChartFX to calculate the best size according to the tool position. */
        setAutoSize(value: boolean): void;
        /** Gets a value for the background color of a dockable bar. */
        getBackColor(): string;
        /** Sets a value for the background color of a dockable bar. */
        setBackColor(value: string): void;
        /** Provides access to the BorderObject. */
        getBorderObject(): IBorderAdornment;
        /** Provides access to the BorderObject. */
        setBorderObject(value: IBorderAdornment): void;
    }

    export class DataGrid extends DockableBar {
        /** Sets the background color of the cells on the data grid. */
        getBackColorData(): string;
        /** Sets the background color of the cells on the data grid. */
        setBackColorData(value: string): void;
        /** Assigns the alternate color for displaying the DataGrid rows or columns. */
        getBackColorDataAlternate(): string;
        /** Assigns the alternate color for displaying the DataGrid rows or columns. */
        setBackColorDataAlternate(value: string): void;
        /** Sets the background color of the header for the Data Editor. */
        getBackColorHeader(): string;
        /** Sets the background color of the header for the Data Editor. */
        setBackColorHeader(value: string): void;
        getCells(): CellAttributesCollection;
        /** Allows you to align the data editor in the bottom of the chart area. */
        getContentLayout(): ContentLayout;
        /** Allows you to align the data editor in the bottom of the chart area. */
        setContentLayout(value: ContentLayout): void;
        /** Allows you to set the font used throughout the data grid. */
        getFont(): string;
        /** Allows you to set the font used throughout the data grid. */
        setFont(value: string): void;
        /** Used to hide the XValues in the data editor of an XY plot chart. */
        getHideXValues(): boolean;
        /** Used to hide the XValues in the data editor of an XY plot chart. */
        setHideXValues(value: boolean): void;
        /** Allows you to set the Horizontal color for the gridlines displayed in the data grid. */
        getHorizontalGridColor(): string;
        /** Allows you to set the Horizontal color for the gridlines displayed in the data grid. */
        setHorizontalGridColor(value: string): void;
        /** Alternates the background color of on the data grid to improve readability. */
        getInterlaced(): Interlaced;
        /** Alternates the background color of on the data grid to improve readability. */
        setInterlaced(value: Interlaced): void;
        /** Allows you to specify the maximum percentage of the chart area the data grid may occupy. */
        getMaxSizePercentage(): number;
        /** Allows you to specify the maximum percentage of the chart area the data grid may occupy. */
        setMaxSizePercentage(value: number): void;
        /** Permits values to be changed through the data grid. */
        getReadOnly(): boolean;
        /** Permits values to be changed through the data grid. */
        setReadOnly(value: boolean): void;
        /** Scrolls the data horizontally to the specific column in the Grid. */
        getScrollPosition(): number;
        /** Scrolls the data horizontally to the specific column in the Grid. */
        setScrollPosition(value: number): void;
        /** Returns the number of scrolls in the DataEditor based on the scroll view configuration.(Read only) */
        getScrollSize(): number;
        /** Gets a value indicating the header of the columns should be visible or not. */
        getShowHeader(): boolean;
        /** Sets a value indicating the header of the columns should be visible or not. */
        setShowHeader(value: boolean): void;
        /** Gets a value indicating hidden series should be visible in data editor. */
        getShowHiddenSeries(): boolean;
        /** Sets a value indicating hidden series should be visible in data editor. */
        setShowHiddenSeries(value: boolean): void;
        /** Gets a value indicating whether series markers should be visible in the series headers. */
        getShowMarkers(): boolean;
        /** Sets a value indicating whether series markers should be visible in the series headers. */
        setShowMarkers(value: boolean): void;
        /** Sets the text color of the cells on the data grid. */
        getTextColorData(): string;
        /** Sets the text color of the cells on the data grid. */
        setTextColorData(value: string): void;
        /** Sets the alternate text color for text in the data grid cells. */
        getTextColorDataAlternate(): string;
        /** Sets the alternate text color for text in the data grid cells. */
        setTextColorDataAlternate(value: string): void;
        /** Gets the text color of the headers on the data editor. */
        getTextColorHeader(): string;
        /** Sets the text color of the headers on the data editor. */
        setTextColorHeader(value: string): void;
        getTransposed(): boolean;
        setTransposed(value: boolean): void;
        /** Gets a value indicating whether to use raw data or use calculated values in the DataEditor. */
        getUseRawData(): boolean;
        /** Sets a value indicating whether to use raw data or use calculated values in the DataEditor. */
        setUseRawData(value: boolean): void;
        /** Allows you to select the Vertical line color for the gridline displayed at the data editor box. */
        getVerticalGridColor(): string;
        /** Allows you to select the Vertical line color for the gridline displayed at the data editor box. */
        setVerticalGridColor(value: string): void;
        /** Gets a value instructing that XValues be used as the headers in the data editor. */
        getXValuesAsHeaders(): boolean;
        /** Sets a value instructing that XValues be used as the headers in the data editor. */
        setXValuesAsHeaders(value: boolean): void;
    }

    export class LegendBox extends DockableBar {
        constructor();
        /** Allows you to align the content for the legend box. */
        getContentLayout(): ContentLayout;
        /** Allows you to align the content for the legend box. */
        setContentLayout(value: ContentLayout): void;
        getCustomItems(): CustomLegendItemCollection;
        getFont(): string;
        setFont(value: string): void;
        getItemAttributes(): LegendItemAttributesCollection;
        /** This property specifies the LineSpacing for a legend that is docked to the left or right only, not at the top or bottom. */
        getLineSpacing(): number;
        /** This property specifies the LineSpacing for a legend that is docked to the left or right only, not at the top or bottom. */
        setLineSpacing(value: number): void;
        /** Gets a value specifying the margin width for a LegendBox. */
        getMarginX(): number;
        /** Sets a value specifying the margin width for a LegendBox. */
        setMarginX(value: number): void;
        /** Gets a value specifying the margin height for a LegendBox. */
        getMarginY(): number;
        /** Sets a value specifying the margin height for a LegendBox. */
        setMarginY(value: number): void;
        /** Allows the legend box margins to go outside of the chart's drawing area. */
        getPlotAreaOnly(): boolean;
        /** Allows the legend box margins to go outside of the chart's drawing area. */
        setPlotAreaOnly(value: boolean): void;
        /** Gets the style of the legend box. */
        getStyle(): LegendBoxStyles;
        /** Sets the style of the legend box. */
        setStyle(value: LegendBoxStyles): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        getTitles(): TitleCollection;
        sizeToFit(): void;
    }

    export class ExtensionCollection {
        getItem(n: number): any;
        add(obj: any): void;
        clear(): void;
        find(type: any): any;
        indexOf(extension: any): number;
        remove(obj: any): void;
    }

    export class ZoomAttributes {
        constructor();
        /** Description goes here */
        getUseSimpleScrollBars(): boolean;
        /** Description goes here */
        setUseSimpleScrollBars(value: boolean): void;
    }

    export class MenuAttributes {
        constructor();
        /** Description goes here */
        getVisible(): boolean;
        /** Description goes here */
        setVisible(value: boolean): void;
    }

    export class LineAttributes {
        getEndCap(): any;
        setEndCap(value: any): void;
        getStartCap(): any;
        setStartCap(value: any): void;
        getStyle(): any;
        setStyle(value: any): void;
        getWidth(): number;
        setWidth(value: number): void;
    }

    export class BorderAttributes {
        /** Gets a property which makes the border to be shown between segments. */
        getBetweenSegments(): boolean;
        /** Sets a property which makes the border to be shown between segments. */
        setBetweenSegments(value: boolean): void;
        /** Gets the color of the border of a point marker. */
        getColor(): string;
        /** Sets the color of the border of a point marker. */
        setColor(value: string): void;
        /** Gets the BorderEffect for the border of a point marker. */
        getEffect(): BorderEffect;
        /** Sets the BorderEffect for the border of a point marker. */
        setEffect(value: BorderEffect): void;
        /** Represents the style of the line for the border of a point marker. */
        getStyle(): any;
        /** Represents the style of the line for the border of a point marker. */
        setStyle(value: any): void;
        /** Gets a property which applies the Border Attributes to the lines of a Line Chart. */
        getUseForLines(): boolean;
        /** Sets a property which applies the Border Attributes to the lines of a Line Chart. */
        setUseForLines(value: boolean): void;
        /** Gets a value making the border visible or not. */
        getVisible(): boolean;
        /** Sets a value making the border visible or not. */
        setVisible(value: boolean): void;
        /** Gets a value in pixels. */
        getWidth(): number;
        /** Sets a value in pixels. */
        setWidth(value: number): void;
    }

    export class PointLabelAttributes {
        /** Gets the vertical alignment for the point label. */
        getAlignment(): StringAlignment;
        /** Sets the vertical alignment for the point label. */
        setAlignment(value: StringAlignment): void;
        /** Gets the angle of the point label. */
        getAngle(): number;
        /** Sets the angle of the point label. */
        setAngle(value: number): void;
        /** Gets the backgrond color of the point label. */
        getBackColor(): string;
        /** Sets the backgrond color of the point label. */
        setBackColor(value: string): void;
        /** Gets a value indicating if the background of the point labels should be displayed or not. */
        getBackgroundVisible(): boolean;
        /** Sets a value indicating if the background of the point labels should be displayed or not. */
        setBackgroundVisible(value: boolean): void;
        /** Gets the border color of the point label. */
        getBorderColor(): string;
        /** Sets the border color of the point label. */
        setBorderColor(value: string): void;
        /** Gets a value indicating the width of the border surrounding the point label. */
        getBorderWidth(): number;
        /** Sets a value indicating the width of the border surrounding the point label. */
        setBorderWidth(value: number): void;
        /** Gets a Font object to use as rendering font for the point label. */
        getFont(): string;
        /** Sets a Font object to use as rendering font for the point label. */
        setFont(value: string): void;
        /** Gets a string pattern mask used to format the label. */
        getFormat(): string;
        /** Sets a string pattern mask used to format the label. */
        setFormat(value: string): void;
        /** Gets the horizontal alignment for the point label. */
        getLineAlignment(): StringAlignment;
        /** Sets the horizontal alignment for the point label. */
        setLineAlignment(value: StringAlignment): void;
        /** Allows you to customize the point label position by configuring its coordinates. */
        getOffset(): any;
        /** Allows you to customize the point label position by configuring its coordinates. */
        setOffset(value: any): void;
        /** Gets a value indicating the Text will be treated as RichText. */
        getRichText(): boolean;
        /** Sets a value indicating the Text will be treated as RichText. */
        setRichText(value: boolean): void;
        /** Gets a value for the point label color. */
        getTextColor(): string;
        /** Sets a value for the point label color. */
        setTextColor(value: string): void;
        getTextInsideColor(): string;
        setTextInsideColor(value: string): void;
        /** Gets a value indicating if point label should be displayed or not. */
        getVisible(): boolean;
        /** Sets a value indicating if point label should be displayed or not. */
        setVisible(value: boolean): void;
    }

    export class PointAttributes {
        constructor();
        /** Gets the alternate color for a selected item when using gradient FillMode. */
        getAlternateColor(): string;
        /** Sets the alternate color for a selected item when using gradient FillMode. */
        setAlternateColor(value: string): void;
        /** Gets the Shape for the Bars. */
        getBarShape(): BarShape;
        /** Sets the Shape for the Bars. */
        setBarShape(value: BarShape): void;
        /** Provides access to the border attributes object. */
        getBorder(): BorderAttributes;
        /** Allows you to set a color for the selected item. */
        getColor(): string;
        /** Allows you to set a color for the selected item. */
        setColor(value: string): void;
        /** Gets a value indicating how jChartFX should fill the area representing the point. */
        getFillMode(): FillMode;
        /** Sets a value indicating how jChartFX should fill the area representing the point. */
        setFillMode(value: FillMode): void;
        /** Gets the LineAttributes object for the particular point. */
        getLine(): LineAttributes;
        /** Gets the the type used to paint markers for the selected item. */
        getMarkerShape(): MarkerShape;
        /** Sets the the type used to paint markers for the selected item. */
        setMarkerShape(value: MarkerShape): void;
        /** Gets a value controlling the size of the markers for the selected item. */
        getMarkerSize(): number;
        /** Sets a value controlling the size of the markers for the selected item. */
        setMarkerSize(value: number): void;
        /** Gets the markers style for the selected item. */
        getMarkerStyle(): MarkerStyle;
        /** Sets the markers style for the selected item. */
        setMarkerStyle(value: MarkerStyle): void;
        /** Gets the the template used to paint markers for the selected item. */
        getMarkerTemplate(): string;
        /** Sets the the template used to paint markers for the selected item. */
        setMarkerTemplate(value: string): void;
        getMarkerVisible(): boolean;
        setMarkerVisible(value: boolean): void;
        /** Gets the marker width for the selected item. */
        getMarkerWidth(): number;
        /** Sets the marker width for the selected item. */
        setMarkerWidth(value: number): void;
        /** Gets a value specifying the pattern for the selected item. */
        getPattern(): any;
        /** Sets a value specifying the pattern for the selected item. */
        setPattern(value: any): void;
        /** Gets a value specifying the picture associated to the selected item. */
        getPicture(): any;
        /** Sets a value specifying the picture associated to the selected item. */
        setPicture(value: any): void;
        /** Provides access to PointLabelAttributes allowing for the manipulation of attributes pertaining to the point label. */
        getPointLabels(): PointLabelAttributes;
        /** Gets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item. */
        getSeparateSlice(): number;
        /** Sets a value allowing you to separate a slice of a Pie or Doughnut chart for a selected item. */
        setSeparateSlice(value: number): void;
        /** Gets and object for the specific item. */
        getTag(): any;
        /** Sets and object for the specific item. */
        setTag(value: any): void;
        /** Gets a value for labeling the point or series attribute. */
        getText(): string;
        /** Sets a value for labeling the point or series attribute. */
        setText(value: string): void;
        /** Gets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items. */
        getVolume(): number;
        /** Sets a value indicating a volume for a data point markers in supported galleries. By adjusting the volume, you can modify the amount of space you want between the items. */
        setVolume(value: number): void;
    }

    export class ConditionalAttributes extends PointAttributes {
        constructor();
        getAlternateTag(): string;
        setAlternateTag(value: string): void;
        /** Returns a Condition object for the specified ConditionalAttributes object. */
        getCondition(): ICondition;
        /** Returns a Condition object for the specified ConditionalAttributes object. */
        setCondition(value: ICondition): void;
        getIndex(): number;
        /** Allows to enable or disable a color interpolation within a condition. */
        getInterpolateColor(): boolean;
        /** Allows to enable or disable a color interpolation within a condition. */
        setInterpolateColor(value: boolean): void;
        /** Gets a value indicating which series index the ConditionalAttribute will be applied to. */
        getSeries(): number;
        /** Sets a value indicating which series index the ConditionalAttribute will be applied to. */
        setSeries(value: number): void;
        /** Gets a value indicating the ConditionalAttributes object should be shown or not. */
        getVisible(): boolean;
        /** Sets a value indicating the ConditionalAttributes object should be shown or not. */
        setVisible(value: boolean): void;
    }

    export class SeriesAttributes extends PointAttributes {
        constructor();
        /** Gets a value indicating the AxisX the series is connected to. */
        getAxisX(): AxisX;
        /** Sets a value indicating the AxisX the series is connected to. */
        setAxisX(value: AxisX): void;
        /** Gets a value indicating where the AxisY the series is connected to. */
        getAxisY(): AxisY;
        /** Sets a value indicating where the AxisY the series is connected to. */
        setAxisY(value: AxisY): void;
        /** Gets a Color for the selected series. */
        getColor(): string;
        /** Sets a Color for the selected series. */
        setColor(value: string): void;
        /** Gets a gallery type for a particular series. All chart types are available in both 2D and 3D modes. */
        getGallery(): Gallery;
        /** Sets a gallery type for a particular series. All chart types are available in both 2D and 3D modes. */
        setGallery(value: Gallery): void;
        getGalleryAttributes(): IGalleryType;
        setGalleryAttributes(value: IGalleryType): void;
        /** Gets a wingding font for use as marker shapes. */
        getMarkerFont(): string;
        /** Sets a wingding font for use as marker shapes. */
        setMarkerFont(value: string): void;
        /** Controls how frequently point markers are shown in the selected series. */
        getMarkerStep(): number;
        /** Controls how frequently point markers are shown in the selected series. */
        setMarkerStep(value: number): void;
        /** Returns the original position of the item in the SeriesAttributes Collection. */
        getOriginalPosition(): number;
        /** Returns the original position of the item in the SeriesAttributes Collection. */
        setOriginalPosition(value: number): void;
        /** Gets the Pane which the series belongs to. */
        getPane(): Pane;
        /** Sets the Pane which the series belongs to. */
        setPane(value: Pane): void;
        /** Gets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts. */
        getStacked(): boolean;
        /** Sets a value allowing you to stack the selected series with the previous series to achieve multi-stacked charts. */
        setStacked(value: boolean): void;
        /** Gets a value allowing you to show or hide the series. */
        getVisible(): boolean;
        /** Sets a value allowing you to show or hide the series. */
        setVisible(value: boolean): void;
        bringToFront(): void;
        sendToBack(): void;
    }

    export class GlobalAttributes extends SeriesAttributes {
        /** Gets the chart type for all Series. */
        getGallery(): Gallery;
        /** Sets the chart type for all Series. */
        setGallery(value: Gallery): void;
        /** Gets a value specifying to transpose X and Y axes in a chart. */
        getHorizontal(): boolean;
        /** Sets a value specifying to transpose X and Y axes in a chart. */
        setHorizontal(value: boolean): void;
        /** Gets the Multiple colors to allow for independently colored data points. */
        getMultipleColors(): boolean;
        /** Sets the Multiple colors to allow for independently colored data points. */
        setMultipleColors(value: boolean): void;
        getStackedStyle(): Stacked;
        setStackedStyle(value: Stacked): void;
        getStackedLabels(): PointLabelAttributes;
    }

    export class AnimationSettings {
        getDelay(): AnimationDelay;
        setDelay(value: AnimationDelay): void;
        getDirection(): AnimationDirection;
        setDirection(value: AnimationDirection): void;
        /** Gets the value indicating the duration of the animation. */
        getDuration(): number;
        /** Sets the value indicating the duration of the animation. */
        setDuration(value: number): void;
        /** Allows you to enable or disable the animation in the chart area. */
        getEnabled(): boolean;
        /** Allows you to enable or disable the animation in the chart area. */
        setEnabled(value: boolean): void;
        /** Gets the value indicating the timing of the animation. */
        getTiming(): AnimationTiming;
        /** Sets the value indicating the timing of the animation. */
        setTiming(value: AnimationTiming): void;
    }

    export class AnimationAttributes {
        /** To get access to the multiple properties of this class, the getDataChange method is required. */
        getDataChange(): AnimationSettings;
        /** To get access to the multiple properties of this class, the getLoad method is required. */
        getLoad(): AnimationSettings;
        /** This method is used to debug the speed on how the animation is shown. */
        getShowSpeed(): boolean;
        /** This method is used to debug the speed on how the animation is shown. */
        setShowSpeed(value: boolean): void;
        reset(): void;
    }

    export class ToolTipMode {
        constructor();
        getAlignment(): StringAlignment;
        setAlignment(value: StringAlignment): void;
        getBorderTemplate(): string;
        setBorderTemplate(value: string): void;
        getContentTemplate(): string;
        setContentTemplate(value: string): void;
        getInteractive(): boolean;
        setInteractive(value: boolean): void;
        getPadding(): number;
        setPadding(value: number): void;
        getShowMarkers(): boolean;
        setShowMarkers(value: boolean): void;
        getShowStacked(): boolean;
        setShowStacked(value: boolean): void;
        getVerticalAlignment(): StringAlignment;
        setVerticalAlignment(value: StringAlignment): void;
        assignObject(obj: any): void;
    }

    export class ToolTipLineAttributes extends ToolTipMode {
        constructor();
        getLine(): Line;
        getX(): number;
        setX(value: number): void;
        getY(): number;
        setY(value: number): void;
    }

    export class ToolTipAttributes extends ToolTipMode {
        constructor();
        getAllSeries(): boolean;
        setAllSeries(value: boolean): void;
        getBackColor(): string;
        setBackColor(value: string): void;
        getBorder(): Line;
        getEnabled(): boolean;
        setEnabled(value: boolean): void;
        getFont(): string;
        setFont(value: string): void;
        getFormat(): string;
        setFormat(value: string): void;
        getMode(): ToolTipMode;
        setMode(value: ToolTipMode): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        getTriggerMode(): TooltipTriggerMode;
        setTriggerMode(value: TooltipTriggerMode): void;
    }

    export class Attributes3D {
        /** Gets the 3D rotation angle around the X-axis. */
        getAngleX(): number;
        /** Sets the 3D rotation angle around the X-axis. */
        setAngleX(value: number): void;
        /** Gets a 3D rotation angle around the Y-axis. */
        getAngleY(): number;
        /** Sets a 3D rotation angle around the Y-axis. */
        setAngleY(value: number): void;
        /** Gets the thickness for the box surrounding the chart. */
        getBoxThickness(): number;
        /** Sets the thickness for the box surrounding the chart. */
        setBoxThickness(value: number): void;
        /** Displays a z-clustered 3D chart. When set to true, the chart will be shown as clustered; when set to false, the chart displays the series side-by-side. */
        getCluster(): boolean;
        /** Displays a z-clustered 3D chart. When set to true, the chart will be shown as clustered; when set to false, the chart displays the series side-by-side. */
        setCluster(value: boolean): void;
        /** Gets the thickness along the Z-axis for the series. */
        getDepth(): number;
        /** Sets the thickness along the Z-axis for the series. */
        setDepth(value: number): void;
        /** Gets a value indicating whether 3D effects should be applied. */
        getEnabled(): boolean;
        /** Sets a value indicating whether 3D effects should be applied. */
        setEnabled(value: boolean): void;
        /** Allows you to set a 3D perspective to control the view of the chart depth. */
        getPerspective(): number;
        /** Allows you to set a 3D perspective to control the view of the chart depth. */
        setPerspective(value: number): void;
        /** Gets a value indicating if the chart is Rotated. */
        getRotated(): boolean;
        /** Sets a value indicating if the chart is Rotated. */
        setRotated(value: boolean): void;
        /** Gets a value indicating the type of shading to display when rotating the chart. */
        getShadow(): Shadow;
        /** Sets a value indicating the type of shading to display when rotating the chart. */
        setShadow(value: Shadow): void;
    }

    export class Palette {
        constructor();
    }

    export class Margins {
        /** Gets the distance in pixels between the bottom border of the bounding rectangle and the bottom border of the plot area of the chart. */
        getBottom(): number;
        /** Sets the distance in pixels between the bottom border of the bounding rectangle and the bottom border of the plot area of the chart. */
        setBottom(value: number): void;
        /** Gets the distance in pixels between the left border of the bounding rectangle and the left border of the plot area of the chart. */
        getLeft(): number;
        /** Sets the distance in pixels between the left border of the bounding rectangle and the left border of the plot area of the chart. */
        setLeft(value: number): void;
        /** Gets the distance in pixels between the right border of the bounding rectangle and the right border of the plot area of the chart. */
        getRight(): number;
        /** Sets the distance in pixels between the right border of the bounding rectangle and the right border of the plot area of the chart. */
        setRight(value: number): void;
        /** Gets the distance in pixels between the top border of the bounding rectangle and the top border of the plot area of the chart. */
        getTop(): number;
        /** Sets the distance in pixels between the top border of the bounding rectangle and the top border of the plot area of the chart. */
        setTop(value: number): void;
    }

    export class FieldMapCollection {
        getItem(n: number): FieldMap;
        setItem(n: number, value: FieldMap): void;
        add(item: FieldMap): void;
        clear(): void;
        contains(item: FieldMap): boolean;
        fillFromSchema(): void;
        indexOf(obj: FieldMap): number;
        insert(index: number, item: FieldMap): void;
        remove(item: FieldMap): void;
        removeAt(index: number): void;
    }

    export class DataSourceSettings {
        constructor();
        /** Gets the source containing the values used to populate the chart. */
        getDataSource(): any;
        /** Sets the source containing the values used to populate the chart. */
        setDataSource(value: any): void;
        getFields(): FieldMapCollection;
        /** Gets a value defining the label separator character used when concatenating labels. */
        getLabelSeparator(): string;
        /** Sets a value defining the label separator character used when concatenating labels. */
        setLabelSeparator(value: string): void;
        /** Controls how jChartFX plots the fields in the resultset. */
        getStyle(): DataSourceStyles;
        /** Controls how jChartFX plots the fields in the resultset. */
        setStyle(value: DataSourceStyles): void;
        reloadData(): void;
    }

    export class PointAttributesCollection {
        getItem1(point: number): PointAttributes;
        setItem1(point: number, value: PointAttributes): void;
        getItem(series: number, point: number): PointAttributes;
        setItem(series: number, point: number, value: PointAttributes): void;
    }

    export class Pane {
        constructor();
        getAxes(): AxisYCollection;
        /** Provides access to the members of the main Y Axis for the selected Pane. */
        getAxisY(): AxisY;
        /** Gets the inside color for the selected pane. */
        getBackColor(): string;
        /** Sets the inside color for the selected pane. */
        setBackColor(value: string): void;
        /** Gets an ImageBackground or GradientBackground object for a pane. */
        getBackground(): IBackgroundAdornment;
        /** Sets an ImageBackground or GradientBackground object for a pane. */
        setBackground(value: IBackgroundAdornment): void;
        /** Returns a rectangle object that contains attributes for the selected pane. */
        getBoundingRectangle(): any;
        /** Gets a value indicating the proportional size of the selected pane. */
        getProportion(): number;
        /** Sets a value indicating the proportional size of the selected pane. */
        setProportion(value: number): void;
        /** Gets a value indicating the space between panes. */
        getSeparation(): number;
        /** Sets a value indicating the space between panes. */
        setSeparation(value: number): void;
        /** Gets the Title object for a selected pane. */
        getTitle(): Title;
        /** Sets the Title object for a selected pane. */
        setTitle(value: Title): void;
        /** Gets a value indicating if the Pane object should be shown or not. */
        getVisible(): boolean;
        /** Sets a value indicating if the Pane object should be shown or not. */
        setVisible(value: boolean): void;
    }

    export class TitleCollection {
        getItem(index: number): TitleDockable;
        add(title: TitleDockable): void;
        insert(index: number, title: TitleDockable): void;
    }

    export class PaneCollection {
        getItem(index: number): Pane;
        add(pane: Pane): void;
        insert(index: number, pane: Pane): void;
        remove(pane: Pane): void;
    }

    export class AxisCollection {
    }

    export class AxisYCollection extends AxisCollection {
        getItem(index: number): AxisY;
        setItem(index: number, value: AxisY): void;
        add(item: AxisY): void;
        insert(index: number, item: AxisY): void;
        remove(item: AxisY): void;
    }

    export class AxisXCollection extends AxisCollection {
        getItem(index: number): AxisX;
        setItem(index: number, value: AxisX): void;
        add(item: AxisX): void;
        insert(index: number, item: AxisX): void;
        remove(item: AxisX): void;
    }

    export class SeriesAttributesCollection {
        getItem(index: number): SeriesAttributes;
        add(series: SeriesAttributes): void;
        clearText(): void;
        insert(index: number, item: SeriesAttributes): void;
        remove(item: SeriesAttributes): void;
        resetOrder(): void;
    }

    export class CustomLegendItemCollection {
        getItem(index: number): CustomLegendItem;
        add(item: CustomLegendItem): void;
        contains(item: CustomLegendItem): boolean;
        indexOf(item: CustomLegendItem): number;
        insert(index: number, item: CustomLegendItem): void;
        remove(item: CustomLegendItem): void;
    }

    export class ConditionalAttributesCollection {
        get_auto_ShowInLegend(): boolean;
        set_auto_ShowInLegend(value: boolean): void;
        getItem(index: number): ConditionalAttributes;
        add(item: ConditionalAttributes): void;
        clear(): void;
        conditionForElement(series: number, point: number): PointAttributes;
        insert(index: number, item: ConditionalAttributes): void;
        recalculate(): void;
        remove(item: ConditionalAttributes): void;
        resumeUpdate(): void;
        suspendUpdate(): void;
    }

    export class LabelCollection {
        getItem(index: number): string;
        setItem(index: number, value: string): void;
        add(item: string): void;
        insert(index: number, item: string): void;
    }

    export class CustomGridLineCollection {
        getAxis(): Axis;
        getItem(index: number): CustomGridLine;
        add(constLine: CustomGridLine): void;
        insert(index: number, item: string): void;
        remove(item: CustomGridLine): void;
    }

    export class AxisSectionCollection {
        getAxis(): Axis;
        getItem(index: number): AxisSection;
        add(axisSection: AxisSection): void;
        insert(index: number, axisSection: AxisSection): void;
        remove(item: AxisSection): void;
    }

    export class ValueFormat {
        /** Allows you to localize labels and data for a specific language and region. */
        getCulture(): any;
        /** Allows you to localize labels and data for a specific language and region. */
        setCulture(value: any): void;
        /** Gets a custom format to the selected label, mouseover tip or value. */
        getCustomFormat(): string;
        /** Sets a custom format to the selected label, mouseover tip or value. */
        setCustomFormat(value: string): void;
        /** Gets the number of decimals for the selected label, mouseover tip or value. */
        getDecimals(): number;
        /** Sets the number of decimals for the selected label, mouseover tip or value. */
        setDecimals(value: number): void;
        /** Used to format the selected label, mouseover tip or value to numbers, date, time, scientific or currency. */
        getFormat(): AxisFormat;
        /** Used to format the selected label, mouseover tip or value to numbers, date, time, scientific or currency. */
        setFormat(value: AxisFormat): void;
        /** Returns a value indicating whether or not a value is a Date. */
        getIsDate(): boolean;
        /** Returns a value indicating whether or not a value is a DateTime. */
        getIsDateTime(): boolean;
        /** Returns a value indicating whether or not a value is a Percentage. */
        getIsPercentage(): boolean;
        /** Returns a value indicating whether or not a value is a Time. */
        getIsTime(): boolean;
    }

    export class Title {
        constructor();
        /** Allows you to get or set the alignment of the specified title. */
        getAlignment(): StringAlignment;
        /** Allows you to get or set the alignment of the specified title. */
        setAlignment(value: StringAlignment): void;
        getBackColor(): string;
        setBackColor(value: string): void;
        /** Assigns a font to the specified title. */
        getFont(): string;
        /** Assigns a font to the specified title. */
        setFont(value: string): void;
        getIndentation(): number;
        setIndentation(value: number): void;
        getLineAlignment(): StringAlignment;
        setLineAlignment(value: StringAlignment): void;
        /** Gets the RichText property for the selected Title. */
        getRichText(): boolean;
        /** Sets the RichText property for the selected Title. */
        setRichText(value: boolean): void;
        getSeparation(): number;
        setSeparation(value: number): void;
        getTag(): string;
        setTag(value: string): void;
        /** Gets the text for the selected title. */
        getText(): string;
        /** Sets the text for the selected title. */
        setText(value: string): void;
        /** Gets the color of text for the specified title. */
        getTextColor(): string;
        /** Sets the color of text for the specified title. */
        setTextColor(value: string): void;
    }

    export class TitleDockable extends Title {
        constructor();
        /** Gets the Dock property, which sets the position where the title will be docked. */
        getDock(): DockArea;
        /** Sets the Dock property, which sets the position where the title will be docked. */
        setDock(value: DockArea): void;
        /** Gets a value indicating whether the title may use the entire length of the chart, or only above the plot area. */
        getPlotAreaOnly(): boolean;
        /** Sets a value indicating whether the title may use the entire length of the chart, or only above the plot area. */
        setPlotAreaOnly(value: boolean): void;
    }

    export class SimpleBorder {
        constructor();
    }

    export class Grids {
        constructor();
        /** Creates a grid of alternating colors for a selected axis to improve chart readability. */
        getInterlaced(): boolean;
        /** Creates a grid of alternating colors for a selected axis to improve chart readability. */
        setInterlaced(value: boolean): void;
        /** Gets the AlternateColor for a selected Grids object. */
        getInterlacedColor(): string;
        /** Sets the AlternateColor for a selected Grids object. */
        setInterlacedColor(value: string): void;
        /** Provides access to the GridLine class to customize the Major Grid. */
        getMajor(): GridLine;
        /** Provides access to the GridLine class to customize the Minor Grid. */
        getMinor(): GridLine;
    }

    export class AxisSection {
        constructor();
        getAxis(): Axis;
        /** Gets the AxisSection background color. */
        getBackColor(): string;
        /** Sets the AxisSection background color. */
        setBackColor(value: string): void;
        /** Gets additional font attributes to the axis section. */
        getFontStyle(): any;
        /** Sets additional font attributes to the axis section. */
        setFontStyle(value: any): void;
        /** Gets a value indicating the beginning value of the range for a selected AxisSection object. */
        getFrom(): number;
        /** Sets a value indicating the beginning value of the range for a selected AxisSection object. */
        setFrom(value: number): void;
        /** Description goes here */
        getTag(): string;
        /** Description goes here */
        setTag(value: string): void;
        /** Gets a value indicating the ending value of the range for a selected AxisSection object. */
        getTo(): number;
        /** Sets a value indicating the ending value of the range for a selected AxisSection object. */
        setTo(value: number): void;
        /** Shows or hides the selected axis section. */
        getVisible(): boolean;
        /** Shows or hides the selected axis section. */
        setVisible(value: boolean): void;
    }

    export class Axis {
        /** Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart. */
        getAutoScale(): boolean;
        /** Instructs jChartFX to always recalculate the specified Axis scale values (Min, Max) when new values are set to the chart. */
        setAutoScale(value: boolean): void;
        /** Enables or disables scrolling in an Axis. */
        getAutoScroll(): boolean;
        /** Enables or disables scrolling in an Axis. */
        setAutoScroll(value: boolean): void;
        /** Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability. */
        getClientScroll(): boolean;
        /** Although jChartFX provides a wealth of properties to control how labels are displayed on an axis, the number of data points and the chart size become important factors influencing how many labels you could fit within a chart or how much data is actually visible. In other words, some charts simply have too much data for the desired chart size and there's little you can do to improve the chart's readability. */
        setClientScroll(value: boolean): void;
        getCustomGridLines(): CustomGridLineCollection;
        /** Allows you to set a custom step for the selected axis. */
        getCustomSteps(): any;
        /** Allows you to set a custom step for the selected axis. */
        setCustomSteps(value: any): void;
        /** Used to format the data displayed in point labels, and tool tips shown at mouseover. */
        getDataFormat(): ValueFormat;
        getDrawingArea(): any;
        /** Gets a value used to customize the first label displayed on a selected axis. */
        getFirstLabel(): number;
        /** Sets a value used to customize the first label displayed on a selected axis. */
        setFirstLabel(value: number): void;
        /** Allows you to change the label Font attributes of the selected axis. */
        getFont(): string;
        /** Allows you to change the label Font attributes of the selected axis. */
        setFont(value: string): void;
        /** Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero. */
        getForceZero(): boolean;
        /** Used to set the minimum value of a numerical axis to zero even if the data minimum value does not start at zero. */
        setForceZero(value: boolean): void;
        /** Returns a boolean value specifying whether the selected axis is a horizontal or vertical axis. */
        getHorizontal(): boolean;
        /** Sets a selected numerical axis max value lesser than the min value. */
        getInverted(): boolean;
        /** Sets a selected numerical axis max value lesser than the min value. */
        setInverted(value: boolean): void;
        getKeyLabels(): LabelCollection;
        /** Gets the text rotation for the labels in the selected axis. */
        getLabelAngle(): number;
        /** Sets the text rotation for the labels in the selected axis. */
        setLabelAngle(value: number): void;
        getLabels(): LabelCollection;
        /** Used to format the labels displayed on the selected axis. */
        getLabelsFormat(): ValueFormat;
        /** Gets a StringTrimming value. */
        getLabelTrimming(): any;
        /** Sets a StringTrimming value. */
        setLabelTrimming(value: any): void;
        /** Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes. */
        getLabelValue(): number;
        /** Allows you to set and associate text labels to major tick marks in a numerical axis. This property can get or set the LabelValue assigned to any of the axes. */
        setLabelValue(value: number): void;
        /** Allows you to apply supported Line class members to a selected axis line. */
        getLine(): Line;
        /** Gets a value indicating the LineSpacing for an axis. */
        getLineSpacing(): number;
        /** Sets a value indicating the LineSpacing for an axis. */
        setLineSpacing(value: number): void;
        /** Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property. */
        getLogBase(): number;
        /** Used to set a logarithmic scale for a numerical axis and recalculate the values as powers equal to the setting of this property. */
        setLogBase(value: number): void;
        /** Gets the Max value assigned to the specified axis. */
        getMax(): number;
        /** Sets the Max value assigned to the specified axis. */
        setMax(value: number): void;
        /** Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy. */
        getMaxSizePercentage(): number;
        /** Allows you to specify the maximum percentage of the chart area the AxisX labels may occupy. */
        setMaxSizePercentage(value: number): void;
        /** Gets the Min value assigned to the specified axis. */
        getMin(): number;
        /** Sets the Min value assigned to the specified axis. */
        setMin(value: number): void;
        /** Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis. */
        getMinorStep(): number;
        /** Specifies the increment you want between minor tick marks and minor gridlines (if they are displayed) on the selected axis. */
        setMinorStep(value: number): void;
        /** Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis. */
        getNotify(): boolean;
        /** Used to enable or disable the GetAxisLabel event so you can customize labels on the specified axis. */
        setNotify(value: boolean): void;
        /** Gets in pixels, the distance from the respective axis to the data. */
        getPixelOffset(): number;
        /** Sets in pixels, the distance from the respective axis to the data. */
        setPixelOffset(value: number): void;
        /** Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis. */
        getPixelsPerUnit(): number;
        /** Gives you the ability to control how many pixels per unit are in the selected axis. This property is very useful if you want a scroll bar in the selected axis. */
        setPixelsPerUnit(value: number): void;
        /** Specifies the placement of the axis labels and tick marks relative to the chart. */
        getPosition(): AxisPosition;
        /** Specifies the placement of the axis labels and tick marks relative to the chart. */
        setPosition(value: AxisPosition): void;
        /** Gets the scale unit of a selected axis. */
        getScaleUnit(): number;
        /** Sets the scale unit of a selected axis. */
        setScaleUnit(value: number): void;
        /** Allows you to set the starting scroll position when a chart is scrollable. */
        getScrollPosition(): number;
        /** Allows you to set the starting scroll position when a chart is scrollable. */
        setScrollPosition(value: number): void;
        /** Returns the number of scrolls in a chart based on the scroll view configuration. */
        getScrollSize(): number;
        /** Returns a selected AxisSection object. */
        getSections(): AxisSectionCollection;
        /** Allows you to specify a gap in pixels between multiple axis. */
        getSeparation(): number;
        /** Allows you to specify a gap in pixels between multiple axis. */
        setSeparation(value: number): void;
        /** Alternates the level of the axis labels for the selected axis. */
        getStaggered(): boolean;
        /** Alternates the level of the axis labels for the selected axis. */
        setStaggered(value: boolean): void;
        /** Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis. */
        getStep(): number;
        /** Specifies the interval of major tick marks and gridlines on the selected axis. It also controls the gap or interval between labels in the selected axis. */
        setStep(value: number): void;
        getStepCore(): number;
        /** Allows you to add additional styles to the selected axis. */
        getStyle(): AxisStyles;
        /** Allows you to add additional styles to the selected axis. */
        setStyle(value: AxisStyles): void;
        /** Gets the title for a specific axis. */
        getTitle(): Title;
        /** Sets the title for a specific axis. */
        setTitle(value: Title): void;
        /** Shows or hides the lines, labels, tick marks and grids for the selected axis. */
        getVisible(): boolean;
        /** Shows or hides the lines, labels, tick marks and grids for the selected axis. */
        setVisible(value: boolean): void;
        adjustScale(): void;
        distanceToPixel(distance: number): number;
        pixelToValue(pixel: number): number;
        resetScale(): void;
        setScrollView(min: number, max: number): void;
        valueToPixel(value: number): number;
    }

    export class AxisY extends Axis {
        constructor();
        /** Gets an integer value specifying the Pane for a Y Axis object. */
        getPane(): Pane;
    }

    export class AxisX extends Axis {
        constructor();
    }

    export class Line {
        constructor();
        getColor(): string;
        setColor(value: string): void;
        getEndCap(): any;
        setEndCap(value: any): void;
        getStartCap(): any;
        setStartCap(value: any): void;
        getStyle(): any;
        setStyle(value: any): void;
        getWidth(): number;
        setWidth(value: number): void;
    }

    export class GridLine extends Line {
        constructor();
        /** Gets a value specifying the margin of the gridline. */
        getMargin(): number;
        /** Sets a value specifying the margin of the gridline. */
        setMargin(value: number): void;
        /** Gets the style for the tick marks of an GridLine object. */
        getTickMark(): TickMark;
        /** Sets the style for the tick marks of an GridLine object. */
        setTickMark(value: TickMark): void;
        /** Gets a value indicating whether the grid line for the selected Gridline will be visible. */
        getVisible(): boolean;
        /** Sets a value indicating whether the grid line for the selected Gridline will be visible. */
        setVisible(value: boolean): void;
    }

    export class CustomGridLine extends Line {
        constructor();
        /** Gets the Alignment for the Label in a CustomGridLine. */
        getAlignment(): StringAlignment;
        /** Sets the Alignment for the Label in a CustomGridLine. */
        setAlignment(value: StringAlignment): void;
        getAxis(): Axis;
        /** Allows you to set additional visual attributes in a custom grid line. */
        getExtraStyle(): CustomGridLineStyles;
        /** Allows you to set additional visual attributes in a custom grid line. */
        setExtraStyle(value: CustomGridLineStyles): void;
        /** Gets the Font utilized for the Label within the CustomGridLine. */
        getFont(): string;
        /** Sets the Font utilized for the Label within the CustomGridLine. */
        setFont(value: string): void;
        /** Gets the beginning value of the CustomGridLine. */
        getFrom(): number;
        /** Sets the beginning value of the CustomGridLine. */
        setFrom(value: number): void;
        /** Gets the alignment for the Text line relative to the CustomeGridLine. */
        getLineAlignment(): StringAlignment;
        /** Sets the alignment for the Text line relative to the CustomeGridLine. */
        setLineAlignment(value: StringAlignment): void;
        /** Defines the distance in pixels between the border of the bounding rectangle and the plot area of the chart. The Margin property of the CustomGridLine class gives access to the margins. */
        getMargin(): number;
        /** Defines the distance in pixels between the border of the bounding rectangle and the plot area of the chart. The Margin property of the CustomGridLine class gives access to the margins. */
        setMargin(value: number): void;
        /** Gets the OutsideText which controls the positioning of the CustomGridLine label outside the chart area. */
        getOutsideText(): boolean;
        /** Sets the OutsideText which controls the positioning of the CustomGridLine label outside the chart area. */
        setOutsideText(value: boolean): void;
        /** Gets the ShowLine, which shows or hides the CustomGridLine line. */
        getShowLine(): boolean;
        /** Sets the ShowLine, which shows or hides the CustomGridLine line. */
        setShowLine(value: boolean): void;
        /** Gets the Showtext, which shows or hides the CustomGridLine text. */
        getShowText(): boolean;
        /** Sets the Showtext, which shows or hides the CustomGridLine text. */
        setShowText(value: boolean): void;
        /** Description goes here */
        getTag(): string;
        /** Description goes here */
        setTag(value: string): void;
        /** Gets the Text Colot for a label in a CustomGridLine. */
        getTextColor(): string;
        /** Sets the Text Colot for a label in a CustomGridLine. */
        setTextColor(value: string): void;
        /** Gets the ending value of the CustomGridLine. */
        getTo(): number;
        /** Sets the ending value of the CustomGridLine. */
        setTo(value: number): void;
        /** Gets the Value for a CustomGridLine. */
        getValue(): number;
        /** Sets the Value for a CustomGridLine. */
        setValue(value: number): void;
    }

    export class RealTimeSettings {
        constructor();
        /** Gets the buffer size for real-time charts. When setting this property, the data array will be cleared. */
        getBufferSize(): number;
        /** Sets the buffer size for real-time charts. When setting this property, the data array will be cleared. */
        setBufferSize(value: number): void;
        /** Gets the Fast Scrolling feature. */
        getFastScroll(): boolean;
        /** Sets the Fast Scrolling feature. */
        setFastScroll(value: boolean): void;
        /** Gets the status of the Buffer to see if it is full. */
        getIsBufferFull(): boolean;
        /** Allows you to apply the supported Lineclass members to the real-time loop marker. */
        getLoopMarker(): Line;
        /** Sets or Gets the RealTime Mode. */
        getMode(): RealTimeMode;
        /** Sets or Gets the RealTime Mode. */
        setMode(value: RealTimeMode): void;
        beginAddData(points: number, action: RealTimeAction): void;
        endAddData(scrollLabels: boolean, scrollToEnd: boolean): void;
    }

    export class DataValues {
        /** Gets a value indicating ChartFX should agreesively allocate space for future values. This increases performance at the cost of additional memory usage. */
        getAggressiveAllocation(): boolean;
        /** Sets a value indicating ChartFX should agreesively allocate space for future values. This increases performance at the cost of additional memory usage. */
        setAggressiveAllocation(value: boolean): void;
        /** Sets a value indicating the interval of units to compress data. */
        setCompactedBy(value: number): void;
        /** Gets a value indicating to intialize all non-initialized values to hidden value. */
        getInitializeHidden(): boolean;
        /** Sets a value indicating to intialize all non-initialized values to hidden value. */
        setInitializeHidden(value: boolean): void;
        getLabels(): LabelCollection;
        /** Provides access to the Y value for the specific series and point. */
        getItem(series: number, point: number): number;
        /** Provides access to the Y value for the specific series and point. */
        setItem(series: number, point: number, value: number): void;
        clear(): void;
        compact(step: number): void;
        removeSeries(seriesIndex: number): void;
        undoCompact(): void;
        setSeries(series: number): void;
        setPoints(points: number): void;
    }

    export class Chart {
        constructor();
        /** Gets the global attributes which are shared across the series of the chart. */
        getAllSeries(): GlobalAttributes;
        /** The 'human touch' in the visuals encourages users to have a more personal connection with the data.jChartFX provides an attractive feature that allows you to render any chart using an animated style. */
        getAnimations(): AnimationAttributes;
        /** Used to change the style of the axes. */
        getAxesStyle(): AxesStyle;
        /** Used to change the style of the axes. */
        setAxesStyle(value: AxesStyle): void;
        getAxesX(): AxisXCollection;
        getAxesY(): AxisYCollection;
        /** Assigns properties specifically to the primary X axis. */
        getAxisX(): AxisX;
        /** Assigns properties specifically to the primary Y axis of the chart. */
        getAxisY(): AxisY;
        /** Assigns properties specifically to the secondary Y axis of the chart. */
        getAxisY2(): AxisY;
        /** Allows you to assign a gradient to the background of a chart. */
        getBackground(): IBackgroundAdornment;
        /** Allows you to assign a gradient to the background of a chart. */
        setBackground(value: IBackgroundAdornment): void;
        /** Gets a default or image border to the chart. */
        getBorder(): IBorderAdornment;
        /** Sets a default or image border to the chart. */
        setBorder(value: IBorderAdornment): void;
        getConditionalAttributes(): ConditionalAttributesCollection;
        getCulture(): any;
        setCulture(value: any): void;
        /** Allows you to set the Y values. Alternativelly, the Y values can be access through the Y property of the DataValues class. */
        getData(): DataValues;
        /** Gets the Data Grid of the chart. The Data Grid is a spreadsheet that shows the data points in tabular format. When shown, it allows the user to see both the chart and the grid at the same time. */
        getDataGrid(): DataGrid;
        /** Gets the source containing the values used to populate the chart. */
        getDataSource(): any;
        setDataSource(value: Array<any>): void;
        setDataSource(value: IDataProvider): void;
        /** Used to assign data related attributes to your chart applications. */
        getDataSourceSettings(): DataSourceSettings;
        getDefaultPalette(): Palette;
        setDefaultPalette(value: Palette): void;
        getExtensions(): ExtensionCollection;
        getExtraStyle(): ChartStyles;
        setExtraStyle(value: ChartStyles): void;
        /** Sets the gallery type for the whole chart. */
        getGallery(): Gallery;
        /** Sets the gallery type for the whole chart. */
        setGallery(value: Gallery): void;
        getGalleryAttributes(): IGalleryType;
        setGalleryAttributes(value: IGalleryType): void;
        /** Allows you to access the legend box of the chart. */
        getLegendBox(): LegendBox;
        /** Gets the default pane of the chart. */
        getMainPane(): Pane;
        /** Description goes here */
        getMenu(): MenuAttributes;
        getPanes(): PaneCollection;
        /** Allows you to assign a gradient to the inside area of a chart. */
        getPlotAreaBackground(): IBackgroundAdornment;
        /** Allows you to assign a gradient to the inside area of a chart. */
        setPlotAreaBackground(value: IBackgroundAdornment): void;
        getPlotAreaColor(): string;
        setPlotAreaColor(value: string): void;
        /** Gets the top, bottom, left and right gaps of the chart. */
        getPlotAreaMargin(): Margins;
        /** Description goes here */
        getPlotAreaTemplate(): string;
        /** Description goes here */
        setPlotAreaTemplate(value: string): void;
        getPoints(): PointAttributesCollection;
        /** Allows access to the RealTimeSettings class supported members used to create real-time charts. */
        getRealTime(): RealTimeSettings;
        getSeries(): SeriesAttributesCollection;
        getTitles(): TitleCollection;
        /** Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area only. */
        getToolTips(): ToolTipAttributes;
        /** Allows you to enable or disable 3D view of the chart. Also permits to customize the 3D view. */
        getView3D(): Attributes3D;
        getZoom(): ZoomAttributes;
        beginUpdate(): void;
        cancelUpdate(): void;
        endUpdate(): void;
        expandMacros(mask: string, series: number, point: number, inPoint: boolean): string;
        getMessageText(key: string): string;
        markerToPixel(series: number, point: number): any;
        recalculateScale(): void;
        setMessageText(key: string, message: string): void;
        updateSizeNow(): void;
        create(div: any): void;
    }

    export module treemap {
        export enum TreeMapLayout {
            Naive,
            Squarified
        }

        export class TreeMap extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Specifies the layout style used by the TreeMap gallery. */
            getLayout(): TreeMapLayout;
            /** Specifies the layout style used by the TreeMap gallery. */
            setLayout(value: TreeMapLayout): void;
            /** Controls whether the squares will be painted at random locations or sorted from bigger to smaller. */
            getRandomLocations(): boolean;
            /** Controls whether the squares will be painted at random locations or sorted from bigger to smaller. */
            setRandomLocations(value: boolean): void;
            /** Allows you to define a vector template to be used when displaying TreeMap graphs. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying TreeMap graphs. */
            setTemplate(value: string): void;
        }
    }

    export module annotation {
        export enum AnnImageMode {
            Original,
            Stretch,
            Tile
        }

        export enum BalloonTailCorner {
            TopLeft,
            TopRight,
            BottomRight,
            BottomLeft,
            Top,
            Right,
            Bottom,
            Left
        }

        export class AnnotationTooltip {
            constructor();
            getData(): any;
            setData(value: any): void;
            getTemplate(): string;
            setTemplate(value: string): void;
            getTitle(): string;
            setTitle(value: string): void;
        }

        export class AnnotationObject {
            /** Gets the Anchor style for the AnnotationObject. */
            getAnchor(): any;
            /** Sets the Anchor style for the AnnotationObject. */
            setAnchor(value: any): void;
            /** Allows you to apply border attributes to a selected annotation object. */
            getBorder(): Line;
            /** Allows you to apply border attributes to a selected annotation object. */
            setBorder(value: Line): void;
            /** Gets the inside fill color for annotation object. */
            getColor(): string;
            /** Sets the inside fill color for annotation object. */
            setColor(value: string): void;
            /** Gets the height in pixels for the selected annotation object. */
            getHeight(): number;
            /** Sets the height in pixels for the selected annotation object. */
            setHeight(value: number): void;
            /** Allows you to specify or read the left position of a selected annotation object. */
            getLeft(): number;
            /** Allows you to specify or read the left position of a selected annotation object. */
            setLeft(value: number): void;
            /** Allows you to specify the bounds for a selected annotation object. */
            getObjectBounds(): any;
            /** Allows you to specify the bounds for a selected annotation object. */
            setObjectBounds(value: any): void;
            /** Configures the selected annotation object to paint before the rest of the chart elements. */
            getPaintBefore(): boolean;
            /** Configures the selected annotation object to paint before the rest of the chart elements. */
            setPaintBefore(value: boolean): void;
            /** Allows you to set a pattern for the selected annotation object. */
            getPattern(): any;
            /** Allows you to set a pattern for the selected annotation object. */
            setPattern(value: any): void;
            /** Gets a value specifying if annotation objects will be drawn outside the plot area. */
            getPlotAreaOnly(): boolean;
            /** Sets a value specifying if annotation objects will be drawn outside the plot area. */
            setPlotAreaOnly(value: boolean): void;
            /** Allows you to get or set a unique identifier to the objects you have created in the chart area. */
            getTag(): any;
            /** Allows you to get or set a unique identifier to the objects you have created in the chart area. */
            setTag(value: any): void;
            getToolTip(): AnnotationTooltip;
            /** Allows you to specify or read the top position of a selected annotation object. */
            getTop(): number;
            /** Allows you to specify or read the top position of a selected annotation object. */
            setTop(value: number): void;
            /** Used to show or hide a selected annotation object in the chart area. */
            getVisible(): boolean;
            /** Used to show or hide a selected annotation object in the chart area. */
            setVisible(value: boolean): void;
            /** Gets the Width in pixels for the selected annotation object. */
            getWidth(): number;
            /** Sets the Width in pixels for the selected annotation object. */
            setWidth(value: number): void;
            attach(dx: number, dy: number): void;
            attachElastic(dxLeft: number, dyTop: number, dxRight: number, dyBottom: number): void;
            attachAlign(horizontalAlignment: StringAlignment, dx: number, verticalAlignment: StringAlignment, dy: number): void;
            detach(): void;
            flip(horizontal: boolean): void;
            refresh(): void;
            rotate(clockWise: boolean): void;
        }

        export class AnnotationVector extends AnnotationObject {
            constructor();
            getTemplate(): string;
            setTemplate(value: string): void;
        }

        export class AnnotationText extends AnnotationObject {
            constructor();
            /** Allows you to set the alignment for the selected annotation text object. */
            getAlign(): StringAlignment;
            /** Allows you to set the alignment for the selected annotation text object. */
            setAlign(value: StringAlignment): void;
            /** Gets a value indicating whether or not text will be clipped by the border of an AnnotationText. */
            getClip(): boolean;
            /** Sets a value indicating whether or not text will be clipped by the border of an AnnotationText. */
            setClip(value: boolean): void;
            getCornerRadius(): number;
            setCornerRadius(value: number): void;
            /** Allows you to change the font attributes for an annotation object. */
            getFont(): string;
            /** Allows you to change the font attributes for an annotation object. */
            setFont(value: string): void;
            /** Sets the vertical alignment for the lines of an annotation text object. */
            getLineAlignment(): StringAlignment;
            /** Sets the vertical alignment for the lines of an annotation text object. */
            setLineAlignment(value: StringAlignment): void;
            /** Used to set the text orientation for a annotation text object. */
            getOrientation(): number;
            /** Used to set the text orientation for a annotation text object. */
            setOrientation(value: number): void;
            /** Used to set the text for an annotation text object. */
            getText(): string;
            /** Used to set the text for an annotation text object. */
            setText(value: string): void;
            /** Sets the color of the text for an annotation object. */
            getTextColor(): string;
            /** Sets the color of the text for an annotation object. */
            setTextColor(value: string): void;
            /** Gets a value indicating whether the text of an annotation text object will be word wrapped. */
            getWordWrap(): boolean;
            /** Sets a value indicating whether the text of an annotation text object will be word wrapped. */
            setWordWrap(value: boolean): void;
            sizeToFit(): void;
        }

        export class AnnotationBalloon extends AnnotationText {
            constructor();
            /** Gets the corner of the balloon the tip or arrow. */
            getTailCorner(): BalloonTailCorner;
            /** Sets the corner of the balloon the tip or arrow. */
            setTailCorner(value: BalloonTailCorner): void;
            /** Gets the annotation balloon tip size. */
            getTailFactor(): number;
            /** Sets the annotation balloon tip size. */
            setTailFactor(value: number): void;
        }

        export class AnnotationRectangle extends AnnotationObject {
            constructor();
        }

        export class AnnotationPicture extends AnnotationObject {
            constructor();
            /** Sets the rendering style for the image used as the annotation picture. */
            getMode(): AnnImageMode;
            /** Sets the rendering style for the image used as the annotation picture. */
            setMode(value: AnnImageMode): void;
            /** Allows you to set the image for an annotation picture object. */
            getPicture(): any;
            /** Allows you to set the image for an annotation picture object. */
            setPicture(value: any): void;
            sizeToFit(): void;
        }

        export class AnnotationContainer extends AnnotationObject {
            constructor();
            /** Gets the element that will contain the Chart or Gauge object added as an annotation. */
            getElement(): any;
            /** Sets the element that will contain the Chart or Gauge object added as an annotation. */
            setElement(value: any): void;
        }

        export class AnnotationCircle extends AnnotationObject {
            constructor();
        }

        export class AnnotationArrow extends AnnotationObject {
            constructor();
            /** Allows you to control the ending arrow head height, width and style of a selected annotation arrow object. */
            getEndCap(): any;
            /** Allows you to control the ending arrow head height, width and style of a selected annotation arrow object. */
            setEndCap(value: any): void;
            /** Allows you to control the starting arrow head height, width and style of a selected annotation arrow object. */
            getStartCap(): any;
            /** Allows you to control the starting arrow head height, width and style of a selected annotation arrow object. */
            setStartCap(value: any): void;
        }

        export class AnnotationArc extends AnnotationObject {
            constructor();
        }

        export class AnnotationListBase {
            getItem(n: number): AnnotationObject;
            add(annObj: AnnotationObject): void;
            contains(annObj: AnnotationObject): boolean;
            copyTo(array: AnnotationObject[], index: number): void;
            indexOf(annObject: AnnotationObject): number;
            insert(index: number, annObj: AnnotationObject): void;
            remove(annObj: AnnotationObject): void;
        }

        export class AnnotationList extends AnnotationListBase {
            constructor();
        }

        export class Annotations {
            constructor();
            getList(): AnnotationList;
        }
    }

    export module density {
        export class Density extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Gets the size size of the density clusters. */
            getSize(): number;
            /** Sets the size size of the density clusters. */
            setSize(value: number): void;
            /** Allows you to define a vector template to be used when displaying  density clusters. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying  density clusters. */
            setTemplate(value: string): void;
        }
    }

    export module equalizer {
        export class EqualizerItem {
            constructor();
            /** Gets the border color of an EqualizerBar item. */
            getBorderColor(): string;
            /** Sets the border color of an EqualizerBar item. */
            setBorderColor(value: string): void;
            /** Gets the color of an EqualizerBar top item. */
            getColor(): string;
            /** Sets the color of an EqualizerBar top item. */
            setColor(value: string): void;
            /** Gets the number of elements of the same color for an EqualizerBar top item. */
            getCount(): number;
            /** Sets the number of elements of the same color for an EqualizerBar top item. */
            setCount(value: number): void;
        }

        export class EqualizerItemCollection {
            constructor();
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): EqualizerItem;
            add(item: EqualizerItem): void;
            clear(): void;
        }

        export class EqualizerBar extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Defines the ratio of separation between the Equalizer Bar rectangles. */
            getGapRatio(): number;
            /** Defines the ratio of separation between the Equalizer Bar rectangles. */
            setGapRatio(value: number): void;
            /** Allows you to set a color for the parts of the bar that do not have data. */
            getHeightRatio(): number;
            /** Allows you to set a color for the parts of the bar that do not have data. */
            setHeightRatio(value: number): void;
            /** Allows you to set a border color for the parts of the bar that do not have data. */
            getOffBorderColor(): string;
            /** Allows you to set a border color for the parts of the bar that do not have data. */
            setOffBorderColor(value: string): void;
            /** Allows you to set a color for the parts of the bar that do not have data. */
            getOffColor(): string;
            /** Allows you to set a color for the parts of the bar that do not have data. */
            setOffColor(value: string): void;
            /** Defines the ratio of roundness for the corners of the Equalizer Bar rectangles. */
            getRoundnessRatio(): number;
            /** Defines the ratio of roundness for the corners of the Equalizer Bar rectangles. */
            setRoundnessRatio(value: number): void;
            /** Allows you to show or hide the borders of the rectangles in the Equalizer Bar. */
            getShowBorders(): boolean;
            /** Allows you to show or hide the borders of the rectangles in the Equalizer Bar. */
            setShowBorders(value: boolean): void;
            /** Allows you to define a vector template to be used when displaying Equalizer Bar rectangles. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying Equalizer Bar rectangles. */
            setTemplate(value: string): void;
            getTopItems(): EqualizerItemCollection;
        }
    }

    export module heatmap {
        export class ColorGradientStop {
            constructor();
            /** This property is used to change the color of the ColorGradientStop added to the Heatmap Gallery. */
            getColor(): string;
            /** This property is used to change the color of the ColorGradientStop added to the Heatmap Gallery. */
            setColor(value: string): void;
            /** The gradient stop's Offset property specifies the position of the gradient stop's color on the HeatMaps. */
            getOffset(): number;
            /** The gradient stop's Offset property specifies the position of the gradient stop's color on the HeatMaps. */
            setOffset(value: number): void;
        }

        export class ColorGradientCollection {
            constructor();
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): ColorGradientStop;
            /** Description goes here */
            setItem(index: number, value: ColorGradientStop): void;
            add(stop: ColorGradientStop): void;
            clear(): void;
            insert(index: number, stop: ColorGradientStop): void;
        }

        export class HeatMap extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Description goes here */
            getGradientStops(): ColorGradientCollection;
            /** Gets the Legend Height of the Chart. */
            getLegendHeight(): number;
            /** Sets the Legend Height of the Chart. */
            setLegendHeight(value: number): void;
            /** Allows you to define a vector template to be used when displaying HeatMap graphs. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying HeatMap graphs. */
            setTemplate(value: string): void;
        }
    }

    export module data {
        export enum CrosstabAggregate {
            Sum,
            First,
            Last,
            Avg,
            Min,
            Max
        }

        export class CrosstabHeading {
            getHeading(): string;
            setHeading(value: string): void;
            getName(): string;
            setName(value: string): void;
            getSeparator(): string;
            setSeparator(value: string): void;
            getSort(): boolean;
            setSort(value: boolean): void;
            getSortID(): string;
            setSortID(value: string): void;
        }

        export class CrosstabDataProvider extends IDataProvider {
            protected _internal_IDataProvider(): void;
            constructor();
            getAggregate(): CrosstabAggregate;
            setAggregate(value: CrosstabAggregate): void;
            getColumns(): CrosstabHeading;
            /** Description goes here */
            getDataSource(): any;
            /** Description goes here */
            setDataSource(value: any): void;
            getRows(): CrosstabHeading;
            getValueName(): string;
            setValueName(value: string): void;
        }
    }

    export module overlaybubble {
        export class OverlayBubble extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Controls the horizontal alignment for the concentric bubbles. */
            getHorizontalAlignment(): StringAlignment;
            /** Controls the horizontal alignment for the concentric bubbles. */
            setHorizontalAlignment(value: StringAlignment): void;
            /** Allows you to define a vector template to be used when displaying  the OverlayBubble graphs. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying  the OverlayBubble graphs. */
            setTemplate(value: string): void;
            /** Controls the vertical alignment for the concentric bubbles. */
            getVerticalAlignment(): StringAlignment;
            /** Controls the vertical alignment for the concentric bubbles. */
            setVerticalAlignment(value: StringAlignment): void;
        }
    }

    export module highlow {
        export class HighLow extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getTemplate(): string;
            setTemplate(value: string): void;
        }
    }

    export module bullet {
        export class Bullet extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getActualVolume(): number;
            setActualVolume(value: number): void;
            getTargetVolume(): number;
            setTargetVolume(value: number): void;
            getTemplate(): string;
            setTemplate(value: string): void;
        }
    }

    export module rose {
        export class Rose extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Gets a value specifying to draw the Rose chart in a round or polygonal shape. */
            getCircular(): boolean;
            /** Sets a value specifying to draw the Rose chart in a round or polygonal shape. */
            setCircular(value: boolean): void;
            /** Gets a value indicating to plot points in a clockwise or counter-clockwise direction. */
            getClockwise(): boolean;
            /** Sets a value indicating to plot points in a clockwise or counter-clockwise direction. */
            setClockwise(value: boolean): void;
            /** Chart FX allows displaying series in the shape of a bar instead of a slice by leaving a hole at the center of the chart. */
            getInternalRadius(): number;
            /** Chart FX allows displaying series in the shape of a bar instead of a slice by leaving a hole at the center of the chart. */
            setInternalRadius(value: number): void;
            /** Gets the Galleries of the Rose chart side by side. */
            getSideBySide(): boolean;
            /** Sets the Galleries of the Rose chart side by side. */
            setSideBySide(value: boolean): void;
            /** Gets a value specifying the starting angle in degrees for a rose chart. */
            getStartAngle(): number;
            /** Sets a value specifying the starting angle in degrees for a rose chart. */
            setStartAngle(value: number): void;
            /** Allows you to define a vector template to be used when displaying Rose graphs. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying Rose graphs. */
            setTemplate(value: string): void;
        }
    }

    export module funnel {
        export class Funnel extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Determines whether or not the funnel will be shown with a Conic effect. */
            getConic(): boolean;
            /** Determines whether or not the funnel will be shown with a Conic effect. */
            setConic(value: boolean): void;
            /** Gets the number of faces of a 3D-enabled funnel chart. */
            getFaces(): number;
            /** Sets the number of faces of a 3D-enabled funnel chart. */
            setFaces(value: number): void;
            /** Instructs jChartFX to try to paint the point labels directly on the corresponding slice of a Funnel chart. */
            getLabelInside(): boolean;
            /** Instructs jChartFX to try to paint the point labels directly on the corresponding slice of a Funnel chart. */
            setLabelInside(value: boolean): void;
            /** Returns the Line object of the funnel gallery. */
            getLabelLine(): Line;
            /** Instructs jChartFX to try to paint the line of the labels on the corresponding slice of the Funnel chart. */
            getLabelLineAsSeries(): boolean;
            /** Instructs jChartFX to try to paint the line of the labels on the corresponding slice of the Funnel chart. */
            setLabelLineAsSeries(value: boolean): void;
            /** Gets the separation of the points in a funnel chart. */
            getSeparation(): number;
            /** Sets the separation of the points in a funnel chart. */
            setSeparation(value: number): void;
            /** Allows you to define a vector template to be used when displaying Funnel graphs. */
            getTemplate(): string;
            /** Allows you to define a vector template to be used when displaying Funnel graphs. */
            setTemplate(value: string): void;
            /** Gets the percentage of the total funnel height that will be used by the tip */
            getTipHeight(): number;
            /** Sets the percentage of the total funnel height that will be used by the tip */
            setTipHeight(value: number): void;
            /** Gets the percentage of the total funnel width that will be used by the tip. */
            getTipWidth(): number;
            /** Sets the percentage of the total funnel width that will be used by the tip. */
            setTipWidth(value: number): void;
        }
    }

    export module maps {
        export enum MapLabelMode {
            All,
            DataOnly
        }

        export enum MapLayerGallery {
            Bubble,
            Surface
        }

        export enum MapProjection {
            None,
            Mercator
        }

        export enum SurfaceExtendMethod {
            None,
            Proyect,
            Average
        }

        export class WinnerCondition extends ICondition {
            protected _internal_ICondition(): void;
            constructor();
            /** Gets a value indicating whether or not the winner condition is applied to the datafield with the greater value */
            getWinnerGreatest(): boolean;
            /** Sets a value indicating whether or not the winner condition is applied to the datafield with the greater value */
            setWinnerGreatest(value: boolean): void;
        }

        export class MapShape {
            /** Gets a string value with the shape Label */
            getLabel(): string;
            /** Gets a value with the shape Label Latitude position */
            getLabelLatitude(): number;
            /** Gets a value with the shape Label Longitude position */
            getLabelLongitude(): number;
            /** Gets the layer object containing the selected shape */
            getLayer(): MapLayer;
            /** Gets the shape max Latitude number value */
            getMaxLatitude(): number;
            /** Gets the shape max Longitude number value */
            getMaxLongitude(): number;
            /** Gets the shape min Latitude number value */
            getMinLatitude(): number;
            /** Gets the shape min Longitude number value */
            getMinLongitude(): number;
            /** Gets a string value with the shape name */
            getName(): string;
            /** Description goes here */
            getPaintAttributes(): PointAttributes;
            getFieldValue(name: string): string;
            hasLabelPosition(): boolean;
        }

        export class MapLayerFilter {
            /** Returns the collection of ConditionalAttributes objects of the filter object. */
            getContextAttributes(): ConditionalAttributes;
            /** Gets a value indicating whether or not the RestrictToData method is applied. */
            getRestrictToData(): boolean;
            /** Sets a value indicating whether or not the RestrictToData method is applied. */
            setRestrictToData(value: boolean): void;
            /** Gets a value indicating whether the sorrounding areas or neigbours are shown around the selected layer */
            getShowContext(): boolean;
            /** Sets a value indicating whether the sorrounding areas or neigbours are shown around the selected layer */
            setShowContext(value: boolean): void;
            addCondition(condition: ICondition): void;
            addLabel(label: string): void;
        }

        export class MapLayerShadowAttributes {
            /** Gets the Map Shadow blur value */
            getBlur(): number;
            /** Sets the Map Shadow blur value */
            setBlur(value: number): void;
            /** Description goes here */
            getColor(): string;
            /** Description goes here */
            setColor(value: string): void;
            /** Description goes here */
            getDataOnly(): boolean;
            /** Description goes here */
            setDataOnly(value: boolean): void;
            /** Description goes here */
            getTag(): string;
            /** Description goes here */
            setTag(value: string): void;
            /** Description goes here */
            getXOffset(): number;
            /** Description goes here */
            setXOffset(value: number): void;
            /** Description goes here */
            getYOffset(): number;
            /** Description goes here */
            setYOffset(value: number): void;
        }

        export class MapLayer {
            constructor();
            getConditions(): ConditionalAttributesCollection;
            /** Gets a XAML ContentTemplate for the MapLayer. */
            getContentTemplate(): string;
            /** Sets a XAML ContentTemplate for the MapLayer. */
            setContentTemplate(value: string): void;
            /** Gets the DefaultAttributes object for the Map Layer object. */
            getDefaultAttributes(): ConditionalAttributes;
            /** Gets the FieldLabel value for the Layer */
            getFieldLabel(): string;
            /** Sets the FieldLabel value for the Layer */
            setFieldLabel(value: string): void;
            /** Gets the FieldName for the Layer */
            getFieldName(): string;
            /** Sets the FieldName for the Layer */
            setFieldName(value: string): void;
            /** Gets the Filter object for the Layer */
            getFilter(): MapLayerFilter;
            /** Description goes here */
            getGallery(): MapLayerGallery;
            /** Description goes here */
            setGallery(value: MapLayerGallery): void;
            /** Description goes here */
            getGalleryAttributes(): any;
            /** Description goes here */
            setGalleryAttributes(value: any): void;
            /** Used to allow or prevent from automatically handling triggered eventsIn order for developers to custom handling events programmatically, you must set the HandleEvents property for the layer object to False. */
            getHandleEvents(): boolean;
            /** Used to allow or prevent from automatically handling triggered eventsIn order for developers to custom handling events programmatically, you must set the HandleEvents property for the layer object to False. */
            setHandleEvents(value: boolean): void;
            /** Description goes here */
            getIndex(): number;
            getLabelMode(): MapLabelMode;
            setLabelMode(value: MapLabelMode): void;
            /** Gets the Layer Max Latitude Coordinates */
            getMaxLatitude(): number;
            /** Gets the Layer Max Longitude Coordinates */
            getMaxLongitude(): number;
            /** Gets the Layer Min Latitude Coordinates */
            getMinLatitude(): number;
            /** Gets the Layer Min Longitude Coordinates */
            getMinLongitude(): number;
            /** Gets the location from where to import a map layer. */
            getPath(): string;
            /** Sets the location from where to import a map layer. */
            setPath(value: string): void;
            getProcessLabels(): boolean;
            setProcessLabels(value: boolean): void;
            /** Gets the layer shadow attributes object. */
            getShadow(): MapLayerShadowAttributes;
            getShapes(): MapShapeCollection;
            /** Description goes here */
            getShowWithoutLabels(): boolean;
            /** Description goes here */
            setShowWithoutLabels(value: boolean): void;
            getSpacing(): number;
            setSpacing(value: number): void;
            getTemplate(): string;
            setTemplate(value: string): void;
            /** Gets a value indicating whether or not shadowing is applied for layer labels. */
            getTextShadow(): boolean;
            /** Sets a value indicating whether or not shadowing is applied for layer labels. */
            setTextShadow(value: boolean): void;
            /** Gets a value indicating whether or not the chart object conditions are applied */
            getUsesData(): boolean;
            /** Sets a value indicating whether or not the chart object conditions are applied */
            setUsesData(value: boolean): void;
            /** Description goes here */
            getVisible(): boolean;
            /** Description goes here */
            setVisible(value: boolean): void;
        }

        export class MapShapeCollection {
            constructor();
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): MapShape;
        }

        export class MapBubbleGallery {
            getMaxPercent(): number;
            setMaxPercent(value: number): void;
            getMaxSize(): number;
            setMaxSize(value: number): void;
            getMinPercent(): number;
            setMinPercent(value: number): void;
            getMinSize(): number;
            setMinSize(value: number): void;
        }

        export class ColorGradientCollection {
            constructor();
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): ColorGradient;
            add(colorGradient: ColorGradient): void;
            clear(): void;
        }

        export class ColorGradient {
            constructor();
            /** Gets the color for the ColorGradient object. */
            getColor(): string;
            /** Sets the color for the ColorGradient object. */
            setColor(value: string): void;
            /** Gets the Offset property for the ColorGradient object. */
            getOffset(): number;
            /** Sets the Offset property for the ColorGradient object. */
            setOffset(value: number): void;
        }

        export class MapTranslationAttributes {
            /** Description goes here */
            getBackColor(): string;
            /** Description goes here */
            setBackColor(value: string): void;
            /** Description goes here */
            getBorder(): Line;
            /** Description goes here */
            getMargin(): number;
            /** Description goes here */
            setMargin(value: number): void;
            /** Description goes here */
            getTemplate(): string;
            /** Description goes here */
            setTemplate(value: string): void;
        }

        export class MapLayerCollection {
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): MapLayer;
            add(layer: MapLayer): void;
            clear(): void;
            find(name: string): MapLayer;
            insert(index: number, layer: MapLayer): void;
            removeAt(index: number): void;
        }

        export class Map extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Gets the background color of the Map */
            getBackColor(): string;
            /** Sets the background color of the Map */
            setBackColor(value: string): void;
            /** Gets a value indicating whether or not the chart back color covers the plot area */
            getBackCoversPlotArea(): boolean;
            /** Sets a value indicating whether or not the chart back color covers the plot area */
            setBackCoversPlotArea(value: boolean): void;
            getChart(): any;
            getLayers(): MapLayerCollection;
            /** Gets the margins object of the Map */
            getMargin(): Margins;
            /** Gets the Map Max Latitude Coordinates */
            getMaxLatitude(): number;
            /** Sets the Map Max Latitude Coordinates */
            setMaxLatitude(value: number): void;
            /** Gets the Map Max Longitude Coordinates */
            getMaxLongitude(): number;
            /** Sets the Map Max Longitude Coordinates */
            setMaxLongitude(value: number): void;
            /** Gets the Map Min Latitude Coordinates */
            getMinLatitude(): number;
            /** Sets the Map Min Latitude Coordinates */
            setMinLatitude(value: number): void;
            /** Gets the Map Min Longitude Coordinates */
            getMinLongitude(): number;
            /** Sets the Map Min Longitude Coordinates */
            setMinLongitude(value: number): void;
            /** Gets the location from where to import a map file. */
            getPath(): string;
            /** Sets the location from where to import a map file. */
            setPath(value: string): void;
            /** Gets the Map Projection */
            getProjection(): MapProjection;
            /** Sets the Map Projection */
            setProjection(value: MapProjection): void;
            /** Gets a value indicating whether or not to show additional layers besides the main layer. */
            getShowAdditionalLayers(): boolean;
            /** Sets a value indicating whether or not to show additional layers besides the main layer. */
            setShowAdditionalLayers(value: boolean): void;
            /** Description goes here */
            getTranslationAttributes(): MapTranslationAttributes;
            locationToPixel(p: any): any;
            pixelToLocation(p: any): any;
        }
    }

    export module sparkline {
        export enum SparkGallery {
            Line,
            Bar,
            Area,
            Curve,
            CurveArea
        }

        export class SparkLine extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            /** Description goes here */
            getGallery(): SparkGallery;
            /** Description goes here */
            setGallery(value: SparkGallery): void;
            /** Description goes here */
            getGalleryAttributes(): any;
            /** Description goes here */
            getGalleryVolume(): number;
            /** Description goes here */
            setGalleryVolume(value: number): void;
            /** Description goes here */
            getLabelGap(): number;
            /** Description goes here */
            setLabelGap(value: number): void;
            /** Description goes here */
            getLabelTemplate(): string;
            /** Description goes here */
            setLabelTemplate(value: string): void;
        }
    }

    export module axistrend {
        export class AxisTrend extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getColorEqualTo(): string;
            setColorEqualTo(value: string): void;
            getColorGreatherThan(): string;
            setColorGreatherThan(value: string): void;
            getColorLessThan(): string;
            setColorLessThan(value: string): void;
            /** Description goes here */
            getWidth(): number;
            /** Description goes here */
            setWidth(value: number): void;
        }
    }

    export module pictograph {
        export enum FractionDisplay {
            None,
            Horizontal,
            Vertical
        }

        export enum MatrixDirection {
            Horizontal,
            Vertical
        }

        export enum MeasurePosition {
            Start,
            End
        }

        export enum RoundMethod {
            None,
            Quarter,
            Halves
        }

        export class PictoBarRoundSettings {
            constructor();
            getEnabled(): boolean;
            setEnabled(value: boolean): void;
            getMethod(): RoundMethod;
            setMethod(value: RoundMethod): void;
        }

        export class PictoBar extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getEmptyColor(): string;
            setEmptyColor(value: string): void;
            getEmptyColorBorder(): string;
            setEmptyColorBorder(value: string): void;
            getIntraSeriesGap(): number;
            setIntraSeriesGap(value: number): void;
            getRound(): PictoBarRoundSettings;
            getShowEmpty(): boolean;
            setShowEmpty(value: boolean): void;
            getSpacing(): number;
            setSpacing(value: number): void;
            getTemplate(): string;
            setTemplate(value: string): void;
        }

        export class PictoMeasureCollection {
            getCount(): number;
            getItem(index: number): PictoMeasure;
            setItem(index: number, value: PictoMeasure): void;
            add(measure: PictoMeasure): void;
            clear(): void;
            removeAt(index: number): void;
        }

        export class PictoLayout {
            constructor();
            getHorizontalSpacing(): number;
            setHorizontalSpacing(value: number): void;
            getVerticalSpacing(): number;
            setVerticalSpacing(value: number): void;
        }

        export class PictoMatrixLayout extends PictoLayout {
            constructor();
            getColumns(): number;
            setColumns(value: number): void;
            getDirection(): MatrixDirection;
            setDirection(value: MatrixDirection): void;
            getRows(): number;
            setRows(value: number): void;
        }

        export class PictoHiveLayout extends PictoLayout {
            constructor();
        }

        export class PictoMeasure {
            constructor();
            getBorderColor(): string;
            setBorderColor(value: string): void;
            getColor(): string;
            setColor(value: string): void;
            getDecimals(): number;
            setDecimals(value: number): void;
            getScaleUnit(): number;
            setScaleUnit(value: number): void;
            getTitle(): string;
            setTitle(value: string): void;
            getValue(): number;
            setValue(value: number): void;
        }

        export class PictoGraph extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getCount(): number;
            setCount(value: number): void;
            getForceBorder(): boolean;
            setForceBorder(value: boolean): void;
            getFractionDisplay(): FractionDisplay;
            setFractionDisplay(value: FractionDisplay): void;
            getLayout(): PictoLayout;
            setLayout(value: PictoLayout): void;
            getMeasurePosition(): MeasurePosition;
            setMeasurePosition(value: MeasurePosition): void;
            getTemplate(): string;
            setTemplate(value: string): void;
        }
    }

    export module eventtimeline {
        export class EventTimeline extends IGalleryType {
            protected _internal_IGalleryType(): void;
            constructor();
            getColorField(): string;
            setColorField(value: string): void;
            getShapeField(): string;
            setShapeField(value: string): void;
        }
    }

    export module gauge {
        export enum Anchor {
            Border,
            Value
        }

        export enum AnimationTiming {
            Auto,
            Linear,
            EaseIn,
            EaseOut,
            EaseInEaseOut,
            EaseOutBounce
        }

        export enum ConditionalApplies {
            None,
            Indicator,
            PrimaryValue,
            IndicatorPrimaryBack,
            SecondaryValues
        }

        export enum DockArea {
            Left,
            Top,
            Right,
            Bottom,
            None
        }

        export enum FractionDisplay {
            None,
            Horizontal,
            Vertical
        }

        export enum IndicatorBackground {
            None,
            Circle,
            Rectangle,
            RoundRectangle
        }

        export enum IndicatorPosition {
            Auto,
            Current,
            Reference,
            Delta,
            PercentChange,
            Primary,
            Secondary
        }

        export enum IndicatorStyle {
            ArrowDiagonal,
            ArrowVertical,
            ArrowVerticalPointer,
            TriangleVertical,
            PlusMinus,
            ThickDiagonal
        }

        export enum MatrixDirection {
            Horizontal,
            Vertical
        }

        export enum MeasurePosition {
            Start,
            End
        }

        export enum PaletteColor {
            DashboardBack,
            DashboardInside,
            BorderBack,
            BorderInside,
            Indicator,
            IndicatorBorder,
            Filler,
            FillerBorder,
            Cap,
            CapBorder,
            ScaleText,
            BarBack,
            BarBorder,
            BarAlternate,
            Section0Back,
            Section0Border,
            Section0Alternate,
            Section1Back,
            Section1Border,
            Section1Alternate,
            Section2Back,
            Section2Border,
            Section2Alternate,
            Tickmark,
            TickmarkInside,
            Title,
            TitleDocked,
            Caption,
            TrendText,
            ConditionalLess,
            ConditionalEquals,
            ConditionalGreater,
            TipAttrText,
            TipAttrBack,
            TipAttrBorder,
            OffBack,
            EmptyFill,
            EmptyBorder,
            Fill0,
            Fill1,
            Fill2,
            Fill3,
            Fill4,
            Border0,
            Border1,
            Border2,
            Border3,
            Border4
        }

        export enum ResizeFont {
            Never,
            Always,
            Auto
        }

        export enum ScaleFormat {
            None,
            Number,
            Currency,
            Percent
        }

        export enum SecondaryValuesShadow {
            None,
            Normal,
            Inverted
        }

        export enum SectionFill {
            Solid,
            GradientData
        }

        export enum TickmarkStyle {
            Line,
            RoundLine,
            Rectangle,
            Circle,
            Triangle,
            None
        }

        export enum TrendFormat {
            None,
            Number,
            Currency,
            Percent
        }

        export enum TrendLayout {
            Auto,
            Horizontal,
            Vertical,
            Square
        }

        export enum TrendValues {
            Current,
            Reference,
            Delta,
            PercentChange
        }

        export enum ZOrder {
            Above,
            Behind
        }

        export class InteractionAttributes {
            constructor();
            /** Description goes here */
            getEnabled(): boolean;
            /** Description goes here */
            setEnabled(value: boolean): void;
        }

        export class GaugeDefaultAttributes {
            getMarkerPosition(): number;
            setMarkerPosition(value: number): void;
            getMarkerSize(): number;
            setMarkerSize(value: number): void;
            getRepeaterPosition(): number;
            setRepeaterPosition(value: number): void;
            getRepeaterSize(): number;
            setRepeaterSize(value: number): void;
            /** Defines the default position for any new section added to the gauge. */
            getSectionPosition(): number;
            /** Defines the default position for any new section added to the gauge. */
            setSectionPosition(value: number): void;
            /** Defines the default thickness for any new section added to the gauge. */
            getSectionThickness(): number;
            /** Defines the default thickness for any new section added to the gauge. */
            setSectionThickness(value: number): void;
        }

        export class AnimationSettings {
            /** Allows you customize to animation duration, in seconds. */
            getDuration(): number;
            /** Allows you customize to animation duration, in seconds. */
            setDuration(value: number): void;
            /** Used to enable or disable animations. */
            getEnabled(): boolean;
            /** Used to enable or disable animations. */
            setEnabled(value: boolean): void;
            /** Gets whether the animation's time depends on the scale max value or not. */
            getFactorScale(): boolean;
            /** Sets whether the animation's time depends on the scale max value or not. */
            setFactorScale(value: boolean): void;
            /** Used to specify the transition effect used by the animation. */
            getTiming(): AnimationTiming;
            /** Used to specify the transition effect used by the animation. */
            setTiming(value: AnimationTiming): void;
        }

        export class AnimationAttributes {
            /** Provides access to the AnimationSettings object used when the data in the gauge changes. This allows for customized animation effects when the value displayed by the gauge changes over time. If enabled, the indicators will be animated from their current value to their new value. */
            getDataChange(): AnimationSettings;
            /** Provides access to the AnimationSettings object used when the gauge is loaded for the first time. This allows for customized animation effects when the gauge is being initially displayed. If enabled, the indicators will be animated from 0 to their initial value. */
            getLoad(): AnimationSettings;
            getShowSpeed(): boolean;
            setShowSpeed(value: boolean): void;
            endManual(): void;
            reset(): void;
            startManual(): void;
        }

        export class PictoMeasureCollection {
            getCount(): number;
            getItem(index: number): PictoMeasure;
            setItem(index: number, value: PictoMeasure): void;
            add(measure: PictoMeasure): void;
            clear(): void;
            removeAt(index: number): void;
        }

        export class PictoLayout {
            constructor();
            getHorizontalSpacing(): number;
            setHorizontalSpacing(value: number): void;
            getVerticalSpacing(): number;
            setVerticalSpacing(value: number): void;
        }

        export class PictoMatrixLayout extends PictoLayout {
            constructor();
            getColumns(): number;
            setColumns(value: number): void;
            getDirection(): MatrixDirection;
            setDirection(value: MatrixDirection): void;
            getRows(): number;
            setRows(value: number): void;
        }

        export class PictoHiveLayout extends PictoLayout {
            constructor();
        }

        export class PictoMeasure {
            constructor();
            getBorderColor(): string;
            setBorderColor(value: string): void;
            getColor(): string;
            setColor(value: string): void;
            getDecimals(): number;
            setDecimals(value: number): void;
            getFormat(): ScaleFormat;
            setFormat(value: ScaleFormat): void;
            getScaleUnit(): number;
            setScaleUnit(value: number): void;
            getTitle(): string;
            setTitle(value: string): void;
            getValue(): number;
            setValue(value: number): void;
        }

        export class ConditionalSettings {
            /** Gets the element the ConditionalSettings will be applied to. */
            getAppliesTo(): ConditionalApplies;
            /** Sets the element the ConditionalSettings will be applied to. */
            setAppliesTo(value: ConditionalApplies): void;
            /** Gets the color used when the Current value is equal to the Reference value. */
            getColorEqualToReference(): string;
            /** Sets the color used when the Current value is equal to the Reference value. */
            setColorEqualToReference(value: string): void;
            /** Gets the color used when the Current value is greater than the Reference value. */
            getColorGreaterThanReference(): string;
            /** Sets the color used when the Current value is greater than the Reference value. */
            setColorGreaterThanReference(value: string): void;
            /** Gets the color used when the Current value is lesser than the Reference value. */
            getColorLessThanReference(): string;
            /** Sets the color used when the Current value is lesser than the Reference value. */
            setColorLessThanReference(value: string): void;
        }

        export class IndicatorSettings {
            /** Gets the alignment of the Indicator. */
            getAlignment(): StringAlignment;
            /** Sets the alignment of the Indicator. */
            setAlignment(value: StringAlignment): void;
            /** Gets the background style for the indicator. */
            getBackground(): IndicatorBackground;
            /** Sets the background style for the indicator. */
            setBackground(value: IndicatorBackground): void;
            /** Gets the height ratio of the indicator. */
            getHeightRatio(): number;
            /** Sets the height ratio of the indicator. */
            setHeightRatio(value: number): void;
            /** Gets the Indicator position. */
            getPosition(): IndicatorPosition;
            /** Sets the Indicator position. */
            setPosition(value: IndicatorPosition): void;
            /** Gets whether the edges of the indicator are rounded or not. */
            getRoundPen(): boolean;
            /** Sets whether the edges of the indicator are rounded or not. */
            setRoundPen(value: boolean): void;
            /** Gets the style used by the indicator. */
            getStyle(): IndicatorStyle;
            /** Sets the style used by the indicator. */
            setStyle(value: IndicatorStyle): void;
            getTemplate(): string;
            setTemplate(value: string): void;
            /** Gets the indicator visibility. */
            getVisible(): boolean;
            /** Sets the indicator visibility. */
            setVisible(value: boolean): void;
        }

        export class ElementSettings {
            /** Description goes here */
            getLabelMax(): number;
            /** Description goes here */
            setLabelMax(value: number): void;
            /** Description goes here */
            getLabelSpacing(): number;
            /** Description goes here */
            setLabelSpacing(value: number): void;
        }

        export class SecondarySettings extends ElementSettings {
            /** Gets the alpha transparency used by the values in the secondary area. */
            getAlphaForeground(): number;
            /** Sets the alpha transparency used by the values in the secondary area. */
            setAlphaForeground(value: number): void;
            /** Gets whether the secondary values are shown in multiple columns or a single column. */
            getMultiColumn(): boolean;
            /** Sets whether the secondary values are shown in multiple columns or a single column. */
            setMultiColumn(value: boolean): void;
            /** Gets the color used for the separator between the main area and the secondary area. */
            getSeparatorColor(): string;
            /** Sets the color used for the separator between the main area and the secondary area. */
            setSeparatorColor(value: string): void;
            /** Gets the line style used for the separator between the main area and the secondary area. */
            getSeparatorStyle(): any;
            /** Sets the line style used for the separator between the main area and the secondary area. */
            setSeparatorStyle(value: any): void;
            /** Gets the line width used for the separator between the main area and the secondary area. */
            getSeparatorWidth(): number;
            /** Sets the line width used for the separator between the main area and the secondary area. */
            setSeparatorWidth(value: number): void;
            /** Gets the shadow style used by the SecondarySettings. */
            getShadows(): SecondaryValuesShadow;
            /** Sets the shadow style used by the SecondarySettings. */
            setShadows(value: SecondaryValuesShadow): void;
            /** Gets whether all the secondary values are shown in the same size or not. */
            getSharedValueSize(): boolean;
            /** Sets whether all the secondary values are shown in the same size or not. */
            setSharedValueSize(value: boolean): void;
            /** Gets the spacing between the secondary values. */
            getValueSpacing(): number;
            /** Sets the spacing between the secondary values. */
            setValueSpacing(value: number): void;
        }

        export class PrimarySettings extends ElementSettings {
            /** Description goes here */
            getLabelMaxWidth(): number;
            /** Description goes here */
            setLabelMaxWidth(value: number): void;
            /** Gets the PrimarySettings shadow color. */
            getShadowColor(): string;
            /** Sets the PrimarySettings shadow color. */
            setShadowColor(value: string): void;
            /** Gets the PrimarySettings shadow offset. */
            getShadowOffset(): any;
            /** Sets the PrimarySettings shadow offset. */
            setShadowOffset(value: any): void;
            /** Gets the value that will be displayed in the main area, from the values exposed by the Trend object. */
            getValue(): TrendValues;
            /** Sets the value that will be displayed in the main area, from the values exposed by the Trend object. */
            setValue(value: TrendValues): void;
        }

        export class TrendBaseValue {
            /** Gets the number of decimals to display in a TrendBaseValue object. */
            getDecimals(): number;
            /** Sets the number of decimals to display in a TrendBaseValue object. */
            setDecimals(value: number): void;
            /** Gets the font style to display a TrendBaseValue object. */
            getFontStyle(): any;
            /** Sets the font style to display a TrendBaseValue object. */
            setFontStyle(value: any): void;
            /** Gets the format for the value. */
            getFormat(): TrendFormat;
            /** Sets the format for the value. */
            setFormat(value: TrendFormat): void;
            /** Gets the value label. */
            getLabel(): string;
            /** Sets the value label. */
            setLabel(value: string): void;
            /** Gets the value label style. */
            getLabelStyle(): any;
            /** Sets the value label style. */
            setLabelStyle(value: any): void;
            /** Gets the priority given to a Trend value, used by the control to decide whether or not the value is displayed. */
            getPriority(): number;
            /** Sets the priority given to a Trend value, used by the control to decide whether or not the value is displayed. */
            setPriority(value: number): void;
            /** Gets the scale unit of a selected value. */
            getScaleUnit(): number;
            /** Sets the scale unit of a selected value. */
            setScaleUnit(value: number): void;
            /** Gets a symbol for a selected value. */
            getSymbol(): string;
            /** Sets a symbol for a selected value. */
            setSymbol(value: string): void;
            /** Gets whether the symbol for a selected value is a preffix or suffix. */
            getSymbolBeforeValue(): boolean;
            /** Sets whether the symbol for a selected value is a preffix or suffix. */
            setSymbolBeforeValue(value: boolean): void;
            /** Gets whether the symbol is displayed as superscript or normal. */
            getUseSuperscript(): boolean;
            /** Sets whether the symbol is displayed as superscript or normal. */
            setUseSuperscript(value: boolean): void;
            /** Gets the visibility of a value. */
            getVisible(): boolean;
            /** Sets the visibility of a value. */
            setVisible(value: boolean): void;
        }

        export class TrendPercentChangeValue extends TrendBaseValue {
            getScaleUnit(): number;
            setScaleUnit(value: number): void;
        }

        export class TrendDeltaValue extends TrendBaseValue {
            /** Gets the visibilty of the plus sign when the Delta displays a positive number. */
            getShowPlus(): boolean;
            /** Sets the visibilty of the plus sign when the Delta displays a positive number. */
            setShowPlus(value: boolean): void;
            /** Gets the visibilty of the sign when the Delta is displayed. */
            getShowSign(): boolean;
            /** Sets the visibilty of the sign when the Delta is displayed. */
            setShowSign(value: boolean): void;
        }

        export class TrendUserValue extends TrendBaseValue {
            /** Gets the numeric value for a TrendUserValue object. */
            getValue(): number;
            /** Sets the numeric value for a TrendUserValue object. */
            setValue(value: number): void;
        }

        export class ExtensionCollection {
            getItem(n: number): any;
            add(obj: any): void;
            clear(): void;
            find(type: any): any;
            indexOf(extension: any): number;
            remove(obj: any): void;
        }

        export class LineAttributes {
            /** Gets the color for a PointAttribute's Line. */
            getColor(): string;
            /** Sets the color for a PointAttribute's Line. */
            setColor(value: string): void;
            /** Gets a marker shape at the end of a PointAttribute's Line. */
            getEndCap(): any;
            /** Sets a marker shape at the end of a PointAttribute's Line. */
            setEndCap(value: any): void;
            /** Gets a marker shape at the start of a PointAttribute's Line. */
            getStartCap(): any;
            /** Sets a marker shape at the start of a PointAttribute's Line. */
            setStartCap(value: any): void;
            /** Gets the style for a PointAttribute's Line. */
            getStyle(): any;
            /** Sets the style for a PointAttribute's Line. */
            setStyle(value: any): void;
            /** Gets the width for a PointAttribute's Line. */
            getWidth(): number;
            /** Sets the width for a PointAttribute's Line. */
            setWidth(value: number): void;
        }

        export class ToolTipAttributes {
            /** Gets the alignment of the chart tooltips. */
            getAlignment(): StringAlignment;
            /** Sets the alignment of the chart tooltips. */
            setAlignment(value: StringAlignment): void;
            /** Gets the background color of the tooltip object. */
            getBackColor(): string;
            /** Sets the background color of the tooltip object. */
            setBackColor(value: string): void;
            /** Gets the Border property for the tooltip object. */
            getBorder(): LineAttributes;
            /** Specifies the vector template used to describe the Border. */
            getBorderTemplate(): string;
            /** Specifies the vector template used to describe the Border. */
            setBorderTemplate(value: string): void;
            /** Specifies the vector template used to describe the ToolTips Content. */
            getContentTemplate(): string;
            /** Specifies the vector template used to describe the ToolTips Content. */
            setContentTemplate(value: string): void;
            /** Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area. */
            getEnabled(): boolean;
            /** Allows you to enable or disable tooltips when the user positions the mouse over a particular element in the chart area. */
            setEnabled(value: boolean): void;
            /** Gets the font for the tooltip object. */
            getFont(): string;
            /** Sets the font for the tooltip object. */
            setFont(value: string): void;
            /** Gets a string pattern mask used to format the Tooltip. */
            getFormat(): string;
            /** Sets a string pattern mask used to format the Tooltip. */
            setFormat(value: string): void;
            getInteractive(): boolean;
            setInteractive(value: boolean): void;
            /** Gets the padding value in the TooltipAttribute. */
            getPadding(): number;
            /** Sets the padding value in the TooltipAttribute. */
            setPadding(value: number): void;
            /** Gets the color for text of the tooltip object. */
            getTextColor(): string;
            /** Sets the color for text of the tooltip object. */
            setTextColor(value: string): void;
            /** Gets the title of the tooltip object. */
            getTitle(): string;
            /** Sets the title of the tooltip object. */
            setTitle(value: string): void;
            /** Allows to specify the Vertical Alignment of the TooltipAttributes in the chart. */
            getVerticalAlignment(): StringAlignment;
            /** Allows to specify the Vertical Alignment of the TooltipAttributes in the chart. */
            setVerticalAlignment(value: StringAlignment): void;
        }

        export class Palette {
            constructor();
            getDefaultPalette(): Palette;
            setDefaultPalette(value: Palette): void;
            getColor(palColor: PaletteColor): string;
            getDataColor(index: number, border: boolean): string;
            setColor(palColor: PaletteColor, value: string): void;
        }

        export class ShadowAttributes {
            /** {vreb} the shadow color. */
            getColor(): string;
            /** {vreb} the shadow color. */
            setColor(value: string): void;
            /** Gets the X offset for a shadow. */
            getOffsetX(): number;
            /** Sets the X offset for a shadow. */
            setOffsetX(value: number): void;
            /** Gets the Y offset for a shadow. */
            getOffsetY(): number;
            /** Sets the Y offset for a shadow. */
            setOffsetY(value: number): void;
            /** Specfies the vector template used to describe the shadow. */
            getTemplate(): string;
            /** Specfies the vector template used to describe the shadow. */
            setTemplate(value: string): void;
            /** Gets the visibility of the ShadowAttributes. */
            getVisible(): boolean;
            /** Sets the visibility of the ShadowAttributes. */
            setVisible(value: boolean): void;
        }

        export class GlareAttributes {
            /** Specfies the vector template used to describe the glare. */
            getTemplate(): string;
            /** Specfies the vector template used to describe the glare. */
            setTemplate(value: string): void;
            /** Gets the visibility of the GlareAttributes. */
            getVisible(): boolean;
            /** Sets the visibility of the GlareAttributes. */
            setVisible(value: boolean): void;
        }

        export class GaugeElement {
            constructor();
        }

        export class TitleCollection extends GaugeElement {
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): Title;
            /** Description goes here */
            setItem(index: number, value: Title): void;
            add(title: Title): void;
            clear(): void;
            removeAt(index: number): void;
        }

        export class Title extends GaugeElement {
            constructor();
            /** Gets the alignment of a gauge title. */
            getAlignment(): StringAlignment;
            /** Sets the alignment of a gauge title. */
            setAlignment(value: StringAlignment): void;
            getAnchor(): Anchor;
            setAnchor(value: Anchor): void;
            /** Gets the text rotation for the title. */
            getAngle(): number;
            /** Sets the text rotation for the title. */
            setAngle(value: number): void;
            /** Gets the dock area for a title. */
            getDock(): DockArea;
            /** Sets the dock area for a title. */
            setDock(value: DockArea): void;
            /** Gets the Font object for a gauge title. */
            getFont(): string;
            /** Sets the Font object for a gauge title. */
            setFont(value: string): void;
            /** Gets the image for a title. */
            getImage(): any;
            /** Sets the image for a title. */
            setImage(value: any): void;
            getResizeableFont(): ResizeFont;
            setResizeableFont(value: ResizeFont): void;
            getTag(): string;
            setTag(value: string): void;
            /** Gets the text for the selected title. */
            getText(): string;
            /** Sets the text for the selected title. */
            setText(value: string): void;
            /** Gets the text color for a title. */
            getTextColor(): string;
            /** Sets the text color for a title. */
            setTextColor(value: string): void;
            getX(): number;
            setX(value: number): void;
            getY(): number;
            setY(value: number): void;
            /** Gets the Title's Z order. */
            getZOrder(): ZOrder;
            /** Sets the Title's Z order. */
            setZOrder(value: ZOrder): void;
        }

        export class TickmarkSet extends GaugeElement {
            /** Allows you to configure the Major tickmarks. */
            getMajor(): Tickmark;
            /** Allows you to configure the Medium tickmarks. */
            getMedium(): Tickmark;
        }

        export class Tickmark extends GaugeElement {
            /** Gets the color of a Tickmark object. */
            getColor(): string;
            /** Sets the color of a Tickmark object. */
            setColor(value: string): void;
            /** Gets the internal color of tickmarks. */
            getInsideColor(): string;
            /** Sets the internal color of tickmarks. */
            setInsideColor(value: string): void;
            /** Used to define the gap between the tickmarks and its corresponding labels. */
            getLabelGap(): number;
            /** Used to define the gap between the tickmarks and its corresponding labels. */
            setLabelGap(value: number): void;
            /** Gets the position for tickmarks in a scale. */
            getPosition(): number;
            /** Sets the position for tickmarks in a scale. */
            setPosition(value: number): void;
            /** Gets the size of tickmarks. */
            getSize(): number;
            /** Sets the size of tickmarks. */
            setSize(value: number): void;
            /** Gets the visibility of the tickmarks at both ends of the Scale. */
            getSkipEnds(): boolean;
            /** Sets the visibility of the tickmarks at both ends of the Scale. */
            setSkipEnds(value: boolean): void;
            /** Gets a value indicating the interval for tickmark display. */
            getStep(): number;
            /** Sets a value indicating the interval for tickmark display. */
            setStep(value: number): void;
            /** Gets the tickmark style. */
            getStyle(): TickmarkStyle;
            /** Sets the tickmark style. */
            setStyle(value: TickmarkStyle): void;
            /** Gets whether the tickmarks color should be taken automatically from the ScaleSection or not. */
            getUseSectionColor(): boolean;
            /** Sets whether the tickmarks color should be taken automatically from the ScaleSection or not. */
            setUseSectionColor(value: boolean): void;
            /** Gets the visibility of tickmarks. */
            getVisible(): boolean;
            /** Sets the visibility of tickmarks. */
            setVisible(value: boolean): void;
            /** Gets the wdith of tickmarks. */
            getWidth(): number;
            /** Sets the wdith of tickmarks. */
            setWidth(value: number): void;
        }

        export class ScaleSectionCollection extends GaugeElement {
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): ScaleSection;
            /** Description goes here */
            setItem(index: number, value: ScaleSection): void;
            add(section: ScaleSection): void;
            clear(): void;
            removeAt(index: number): void;
        }

        export class ScaleCap extends GaugeElement {
            /** Gets the ScaleCap color. */
            getColor(): string;
            /** Sets the ScaleCap color. */
            setColor(value: string): void;
            /** Gets the ScaleCap size. */
            getSize(): number;
            /** Sets the ScaleCap size. */
            setSize(value: number): void;
            /** Specifies the vector template used to describe the ScaleCap. */
            getTemplate(): string;
            /** Specifies the vector template used to describe the ScaleCap. */
            setTemplate(value: string): void;
            /** Gets the ScaleCap visibility. */
            getVisible(): boolean;
            /** Sets the ScaleCap visibility. */
            setVisible(value: boolean): void;
            /** Gets the ScaleCap's Z order. */
            getZOrder(): ZOrder;
            /** Sets the ScaleCap's Z order. */
            setZOrder(value: ZOrder): void;
        }

        export class ScaleBar extends GaugeElement {
            /** Gets the alternate color of a ScaleBar. */
            getAlternateColor(): string;
            /** Sets the alternate color of a ScaleBar. */
            setAlternateColor(value: string): void;
            /** Gets the border color for the ScaleBar object. */
            getBorderColor(): string;
            /** Sets the border color for the ScaleBar object. */
            setBorderColor(value: string): void;
            /** Gets the color of the ScaleBar object. */
            getColor(): string;
            /** Sets the color of the ScaleBar object. */
            setColor(value: string): void;
            /** Gets the type of fill used by the ScaleBar object. */
            getFillType(): SectionFill;
            /** Sets the type of fill used by the ScaleBar object. */
            setFillType(value: SectionFill): void;
            /** Gets the IgnoreLabel of ScaleBar object. */
            getIgnoreLabel(): boolean;
            /** Sets the IgnoreLabel of ScaleBar object. */
            setIgnoreLabel(value: boolean): void;
            /** Gets the ScaleBar position. */
            getPosition(): number;
            /** Sets the ScaleBar position. */
            setPosition(value: number): void;
            /** Gets the border thickness of the ScaleBar. */
            getStrokeThickness(): number;
            /** Sets the border thickness of the ScaleBar. */
            setStrokeThickness(value: number): void;
            /** Specifies the vector template used to describe the ScaleBar. */
            getTemplate(): string;
            /** Specifies the vector template used to describe the ScaleBar. */
            setTemplate(value: string): void;
            /** Gets the ScaleBar thickness. */
            getThickness(): number;
            /** Sets the ScaleBar thickness. */
            setThickness(value: number): void;
            /** Gets the visibility of the ScaleBar. */
            getVisible(): boolean;
            /** Sets the visibility of the ScaleBar. */
            setVisible(value: boolean): void;
        }

        export class ScaleSection extends ScaleBar {
            constructor();
            /** Gets the initial value of a ScaleSection range. */
            getFrom(): number;
            /** Sets the initial value of a ScaleSection range. */
            setFrom(value: number): void;
            /** Gets the Tag value of a ScaleSection object. */
            getTag(): string;
            /** Sets the Tag value of a ScaleSection object. */
            setTag(value: string): void;
            /** Gets the final value of a ScaleSection range. */
            getTo(): number;
            /** Sets the final value of a ScaleSection range. */
            setTo(value: number): void;
        }

        export class Scale extends GaugeElement {
            /** Gets the scale alignment with respect to its labels. */
            getAlignment(): StringAlignment;
            /** Sets the scale alignment with respect to its labels. */
            setAlignment(value: StringAlignment): void;
            /** Gets whether the Scale supports half numbers. */
            getAllowHalves(): boolean;
            /** Sets whether the Scale supports half numbers. */
            setAllowHalves(value: boolean): void;
            /** Returns the ScaleBar object for a Scale or a Section. */
            getBar(): ScaleBar;
            /** Gets the number of decimals that appear in the scale labels. */
            getDecimals(): number;
            /** Sets the number of decimals that appear in the scale labels. */
            setDecimals(value: number): void;
            /** Gets the visibility of the labels on the Scale. */
            getDrawLabels(): boolean;
            /** Sets the visibility of the labels on the Scale. */
            setDrawLabels(value: boolean): void;
            /** Gets the font used by the Scale. */
            getFont(): string;
            /** Sets the font used by the Scale. */
            setFont(value: string): void;
            /** Description goes here */
            getFormat(): ScaleFormat;
            /** Description goes here */
            setFormat(value: ScaleFormat): void;
            /** The collection of Indicators currently associated with the scale. */
            getIndicators(): IndicatorCollection;
            getInverted(): boolean;
            setInverted(value: boolean): void;
            /** {vert} the space between the labels in a Scale. */
            getLabelSpacing(): number;
            /** {vert} the space between the labels in a Scale. */
            setLabelSpacing(value: number): void;
            /** Gets the main indicator of a Scale. */
            getMainIndicator(): Indicator;
            /** Sets the main indicator of a Scale. */
            setMainIndicator(value: Indicator): void;
            /** Gets the Maximum value of the Scale object. */
            getMax(): number;
            /** Sets the Maximum value of the Scale object. */
            setMax(value: number): void;
            /** Gets the Minimum value of the Scale object. */
            getMin(): number;
            /** Sets the Minimum value of the Scale object. */
            setMin(value: number): void;
            /** Description goes here */
            getMinimumChange(): number;
            /** Description goes here */
            setMinimumChange(value: number): void;
            /** Gets the position of the Scale object. */
            getPosition(): number;
            /** Sets the position of the Scale object. */
            setPosition(value: number): void;
            /** Gets the scale unit of a Scale. */
            getScaleUnit(): number;
            /** Sets the scale unit of a Scale. */
            setScaleUnit(value: number): void;
            getSections(): ScaleSectionCollection;
            /** Gets the text color of the scale's labels. */
            getTextColor(): string;
            /** Sets the text color of the scale's labels. */
            setTextColor(value: string): void;
            /** Gets the width for a scale. */
            getThickness(): number;
            /** Sets the width for a scale. */
            setThickness(value: number): void;
            /** Gets the TickmarkSet of a scale. */
            getTickmarks(): TickmarkSet;
            /** Gets the visibility of a scale. */
            getVisible(): boolean;
            /** Sets the visibility of a scale. */
            setVisible(value: boolean): void;
            pixelToValue(x: number, y: number): number;
            valueToPixel(value: number): any;
        }

        export class RadialScale extends Scale {
            /** Returns the ScaleCap object for a selected RadialScale. */
            getCap(): ScaleCap;
            /** Gets the starting angle in degrees for a RadialScale. */
            getStartAngle(): number;
            /** Sets the starting angle in degrees for a RadialScale. */
            setStartAngle(value: number): void;
            /** Gets the size of the angle in degrees for a RadialScale. */
            getSweepAngle(): number;
            /** Sets the size of the angle in degrees for a RadialScale. */
            setSweepAngle(value: number): void;
        }

        export class LinearScale extends Scale {
            constructor();
        }

        export class IndicatorCollection extends GaugeElement {
            /** Description goes here */
            getCount(): number;
            /** Description goes here */
            getItem(index: number): Indicator;
            /** Description goes here */
            setItem(index: number, value: Indicator): void;
            add(indicator: Indicator): void;
            clear(): void;
            removeAt(index: number): void;
        }

        export class Indicator extends GaugeElement {
            /** Gets the border color of an indicator. */
            getBorderColor(): string;
            /** Sets the border color of an indicator. */
            setBorderColor(value: string): void;
            /** Gets the color of an indicator. */
            getColor(): string;
            /** Sets the color of an indicator. */
            setColor(value: string): void;
            /** Description goes here */
            getInteractive(): boolean;
            /** Description goes here */
            setInteractive(value: boolean): void;
            /** Gets the indicator position. */
            getPosition(): number;
            /** Sets the indicator position. */
            setPosition(value: number): void;
            /** Gets the size of the indicator. */
            getSize(): number;
            /** Sets the size of the indicator. */
            setSize(value: number): void;
            /** Description goes here */
            getTag(): string;
            /** Description goes here */
            setTag(value: string): void;
            /** Specifies the vector template used to describe the indicator. */
            getTemplate(): string;
            /** Specifies the vector template used to describe the indicator. */
            setTemplate(value: string): void;
            /** Gets the Title for the indicator. */
            getTitle(): string;
            /** Sets the Title for the indicator. */
            setTitle(value: string): void;
            /** Gets whether the indicator color should be taken automatically from the scale section or not. */
            getUseSectionColor(): boolean;
            /** Sets whether the indicator color should be taken automatically from the scale section or not. */
            setUseSectionColor(value: boolean): void;
            /** Gets the value for an indicator. */
            getValue(): number;
            /** Sets the value for an indicator. */
            setValue(value: number): void;
            /** Gets whether an indicator is visible or not. */
            getVisible(): boolean;
            /** Sets whether an indicator is visible or not. */
            setVisible(value: boolean): void;
            /** Gets the indicator's Z order. */
            getZOrder(): ZOrder;
            /** Sets the indicator's Z order. */
            setZOrder(value: ZOrder): void;
        }

        export class Needle extends Indicator {
            constructor();
        }

        export class Marker extends Indicator {
            constructor();
            /** Gets the Marker ratio. */
            getRatio(): number;
            /** Sets the Marker ratio. */
            setRatio(value: number): void;
        }

        export class Repeater extends Marker {
            constructor();
            /** Description goes here */
            getOffBorderColor(): string;
            /** Description goes here */
            setOffBorderColor(value: string): void;
            /** Description goes here */
            getOffColor(): string;
            /** Description goes here */
            setOffColor(value: string): void;
            /** Description goes here */
            getPaintOff(): boolean;
            /** Description goes here */
            setPaintOff(value: boolean): void;
            /** Description goes here */
            getSpacing(): number;
            /** Description goes here */
            setSpacing(value: number): void;
        }

        export class Filler extends Indicator {
            constructor();
        }

        export class BorderGauge extends GaugeElement {
            /** Gets the outside color for a gauge border. */
            getColor(): string;
            /** Sets the outside color for a gauge border. */
            setColor(value: string): void;
            /** Gets the GlareAttributes object for the BorderGauge. */
            getGlare(): GlareAttributes;
            /** Gets the internal color for a gauge border. */
            getInsideColor(): string;
            /** Sets the internal color for a gauge border. */
            setInsideColor(value: string): void;
            /** Specifies the size of the gap between the border's internal edge and the scale and indicators. */
            getInsideGap(): number;
            /** Specifies the size of the gap between the border's internal edge and the scale and indicators. */
            setInsideGap(value: number): void;
            /** Gets the ShadowAttributes object for the BorderGauge. */
            getShadow(): ShadowAttributes;
            /** Description goes here */
            getTag(): string;
            /** Description goes here */
            setTag(value: string): void;
            /** Specfies the vector template used to describe the border. */
            getTemplate(): string;
            /** Specfies the vector template used to describe the border. */
            setTemplate(value: string): void;
            /** Gets the border width. */
            getWidth(): number;
            /** Sets the border width. */
            setWidth(value: number): void;
        }

        export class BorderedControl {
            constructor();
            /** Description goes here */
            getExtensions(): ExtensionCollection;
            /** Description goes here */
            getTitles(): TitleCollection;
            /** Description goes here */
            getToolTips(): ToolTipAttributes;
            addExtension(obj: any): void;
        }

        export class Trend extends BorderedControl {
            constructor();
            /** Gets the BorderGauge object. */
            getBorder(): BorderGauge;
            /** Gets the ConditionalSettings object. */
            getConditional(): ConditionalSettings;
            /** Description goes here */
            getCulture(): any;
            /** Description goes here */
            setCulture(value: any): void;
            /** Gets the TrendUserValue for the Current period. */
            getCurrent(): TrendUserValue;
            /** Gets the TrendDeltaValue object for the trend. */
            getDelta(): TrendDeltaValue;
            /** Gets the font name for all Trend elements. */
            getFontName(): string;
            /** Sets the font name for all Trend elements. */
            setFontName(value: string): void;
            /** Gets the font style for all Trend elements. */
            getFontStyle(): any;
            /** Sets the font style for all Trend elements. */
            setFontStyle(value: any): void;
            /** Gets the IndicatorSettings for the trend. */
            getIndicator(): IndicatorSettings;
            /** Gets the Layout for the trend object. */
            getLayout(): TrendLayout;
            /** Sets the Layout for the trend object. */
            setLayout(value: TrendLayout): void;
            /** Gets the TrendPercentChangeValue object for the trend. */
            getPercentChange(): TrendPercentChangeValue;
            /** Gets the PrimarySettings for the trend's PrimaryValue. */
            getPrimaryValue(): PrimarySettings;
            /** Gets the TrendUserValue for the Reference value. */
            getReference(): TrendUserValue;
            /** Gets the SecondarySettings for the trend's Secondary Values. */
            getSecondaryValues(): SecondarySettings;
            getShowGuides(): boolean;
            setShowGuides(value: boolean): void;
            /** Gets the color of the text used by all Trend elements. */
            getTextColor(): string;
            /** Sets the color of the text used by all Trend elements. */
            setTextColor(value: string): void;
            create(div: any): void;
        }

        export class PictoGraph extends BorderedControl {
            constructor();
            getBorder(): BorderGauge;
            getCount(): number;
            setCount(value: number): void;
            getForceBorder(): boolean;
            setForceBorder(value: boolean): void;
            getFractionDisplay(): FractionDisplay;
            setFractionDisplay(value: FractionDisplay): void;
            getLayout(): PictoLayout;
            setLayout(value: PictoLayout): void;
            getMainMeasure(): PictoMeasure;
            getMeasurePosition(): MeasurePosition;
            setMeasurePosition(value: MeasurePosition): void;
            getMeasures(): PictoMeasureCollection;
            getTemplate(): string;
            setTemplate(value: string): void;
            getTotal(): PictoMeasure;
            create(div: any): void;
        }

        export class Border extends BorderedControl {
            constructor();
            /** Gets the outside color for a border. */
            getColor(): string;
            /** Sets the outside color for a border. */
            setColor(value: string): void;
            /** Gets the internal color for a border. */
            getInsideColor(): string;
            /** Sets the internal color for a border. */
            setInsideColor(value: string): void;
            /** Gets the stroke width of a Border. */
            getStrokeWidth(): number;
            /** Sets the stroke width of a Border. */
            setStrokeWidth(value: number): void;
            /** Gets the Tag property. */
            getTag(): string;
            /** Sets the Tag property. */
            setTag(value: string): void;
            /** Specifies the vector template used to describe the border. */
            getTemplate(): string;
            /** Specifies the vector template used to describe the border. */
            setTemplate(value: string): void;
            create(div: any): void;
        }

        export class Gauge extends BorderedControl {
            constructor();
            /** Provides access to the collection of AnimationAttributes objects. */
            getAnimations(): AnimationAttributes;
            /** Gets the BorderGauge object. */
            getBorder(): BorderGauge;
            /** Gets the Border object used in dashboards. */
            getDashboardBorder(): BorderGauge;
            /** Provides access to the GaugeDefaultAttributes object. */
            getDefaultAttributes(): GaugeDefaultAttributes;
            /** Gets the default font for all Gauge elements. */
            getFont(): string;
            /** Sets the default font for all Gauge elements. */
            setFont(value: string): void;
            /** Description goes here */
            getInteraction(): InteractionAttributes;
            /** Gets the main indicator of a gauge. */
            getMainIndicator(): Indicator;
            /** Sets the main indicator of a gauge. */
            setMainIndicator(value: Indicator): void;
            /** Gets the main value of a gauge. */
            getMainValue(): number;
            /** Sets the main value of a gauge. */
            setMainValue(value: number): void;
            /** Gets whether the gauge font is resized when the gauge changes its size. */
            getResizeableFont(): ResizeFont;
            /** Sets whether the gauge font is resized when the gauge changes its size. */
            setResizeableFont(value: ResizeFont): void;
            /** Gets the ShowGuides value of a gauge. */
            getShowGuides(): boolean;
            /** Sets the ShowGuides value of a gauge. */
            setShowGuides(value: boolean): void;
            /** Gets the color used by the gauge's text. */
            getTextColor(): string;
            /** Sets the color used by the gauge's text. */
            setTextColor(value: string): void;
            create(div: any): void;
        }

        export class LinearGauge extends Gauge {
            constructor();
            /** Returns the main scale of a linear gauge. */
            getMainScale(): LinearScale;
        }

        export class VerticalGauge extends LinearGauge {
            constructor();
        }

        export class HorizontalGauge extends LinearGauge {
            constructor();
        }

        export class RadialGauge extends Gauge {
            constructor();
            /** Returns the main scale of a radial gauge. */
            getMainScale(): RadialScale;
        }
    }
}
