import { ChartType } from '../types/chart';

export const chartTypes: ChartType[] = [
  // Animation & Transitions
  {
    id: 'animated-treemap',
    name: 'Animated Treemap',
    category: 'Animation & Transitions',
    description: 'Smooth transitions between treemap layouts',
    observableUrl: '@d3/animated-treemap'
  },
  {
    id: 'temporal-force-directed-graph',
    name: 'Temporal Force-Directed Graph',
    category: 'Animation & Transitions',
    description: 'Force-directed graph that evolves over time',
    observableUrl: '@d3/temporal-force-directed-graph'
  },
  {
    id: 'connected-scatterplot',
    name: 'Connected Scatterplot',
    category: 'Animation & Transitions',
    description: 'Animated scatterplot showing temporal connections',
    observableUrl: '@d3/connected-scatterplot/2'
  },
  {
    id: 'wealth-health-nations',
    name: 'The Wealth & Health of Nations',
    category: 'Animation & Transitions',
    description: 'Famous animated bubble chart by Hans Rosling',
    observableUrl: '@mbostock/the-wealth-health-of-nations'
  },
  {
    id: 'scatterplot-tour',
    name: 'Scatterplot Tour',
    category: 'Animation & Transitions',
    description: 'Guided tour through different data projections',
    observableUrl: '@d3/scatterplot-tour'
  },
  {
    id: 'bar-chart-race',
    name: 'Bar Chart Race',
    category: 'Animation & Transitions',
    description: 'Animated racing bar chart',
    observableUrl: '@d3/bar-chart-race'
  },
  {
    id: 'stacked-to-grouped-bars',
    name: 'Stacked to Grouped Bars',
    category: 'Animation & Transitions',
    description: 'Smooth transition between bar chart layouts',
    observableUrl: '@d3/stacked-to-grouped-bars'
  },
  {
    id: 'streamgraph-transitions',
    name: 'Streamgraph Transitions',
    category: 'Animation & Transitions',
    description: 'Animated streamgraph with smooth transitions',
    observableUrl: '@d3/streamgraph-transitions'
  },

  // Zoom & Pan
  {
    id: 'smooth-zooming',
    name: 'Smooth Zooming',
    category: 'Zoom & Pan',
    description: 'Smooth zoom transitions on scatterplot',
    observableUrl: '@d3/smooth-zooming'
  },
  {
    id: 'zoom-to-bounding-box',
    name: 'Zoom to Bounding Box',
    category: 'Zoom & Pan',
    description: 'Smart zooming to specific regions',
    observableUrl: '@d3/zoom-to-bounding-box'
  },
  {
    id: 'orthographic-to-equirectangular',
    name: 'Orthographic to Equirectangular',
    category: 'Zoom & Pan',
    description: 'Map projection transitions',
    observableUrl: '@d3/orthographic-to-equirectangular'
  },
  {
    id: 'world-tour',
    name: 'World Tour',
    category: 'Zoom & Pan',
    description: 'Animated world map tour',
    observableUrl: '@d3/world-tour'
  },
  {
    id: 'walmarts-growth',
    name: "Walmart's Growth",
    category: 'Zoom & Pan',
    description: 'Animated expansion of Walmart stores',
    observableUrl: '@d3/walmarts-growth'
  },

  // Hierarchical
  {
    id: 'hierarchical-bar-chart',
    name: 'Hierarchical Bar Chart',
    category: 'Hierarchical',
    description: 'Zoomable hierarchical bar chart',
    observableUrl: '@d3/hierarchical-bar-chart'
  },
  {
    id: 'zoomable-treemap',
    name: 'Zoomable Treemap',
    category: 'Hierarchical',
    description: 'Interactive zoomable treemap',
    observableUrl: '@d3/zoomable-treemap'
  },
  {
    id: 'zoomable-circle-packing',
    name: 'Zoomable Circle Packing',
    category: 'Hierarchical',
    description: 'Interactive circle packing diagram',
    observableUrl: '@d3/zoomable-circle-packing'
  },
  {
    id: 'collapsible-tree',
    name: 'Collapsible Tree',
    category: 'Hierarchical',
    description: 'Interactive collapsible tree diagram',
    observableUrl: '@d3/collapsible-tree'
  },
  {
    id: 'zoomable-icicle',
    name: 'Zoomable Icicle',
    category: 'Hierarchical',
    description: 'Interactive icicle diagram',
    observableUrl: '@d3/zoomable-icicle'
  },
  {
    id: 'zoomable-sunburst',
    name: 'Zoomable Sunburst',
    category: 'Hierarchical',
    description: 'Interactive sunburst diagram',
    observableUrl: '@d3/zoomable-sunburst'
  },

  // Bar Charts
  {
    id: 'bar-chart',
    name: 'Bar Chart',
    category: 'Bar Charts',
    description: 'Simple vertical bar chart',
    observableUrl: '@d3/bar-chart/2'
  },
  {
    id: 'horizontal-bar-chart',
    name: 'Horizontal Bar Chart',
    category: 'Bar Charts',
    description: 'Simple horizontal bar chart',
    observableUrl: '@d3/horizontal-bar-chart/2'
  },
  {
    id: 'diverging-bar-chart',
    name: 'Diverging Bar Chart',
    category: 'Bar Charts',
    description: 'Bar chart with positive and negative values',
    observableUrl: '@d3/diverging-bar-chart/2'
  },
  {
    id: 'stacked-bar-chart',
    name: 'Stacked Bar Chart',
    category: 'Bar Charts',
    description: 'Vertical stacked bar chart',
    observableUrl: '@d3/stacked-bar-chart/2'
  },
  {
    id: 'stacked-horizontal-bar-chart',
    name: 'Stacked Horizontal Bar Chart',
    category: 'Bar Charts',
    description: 'Horizontal stacked bar chart',
    observableUrl: '@d3/stacked-horizontal-bar-chart/2'
  },
  {
    id: 'grouped-bar-chart',
    name: 'Grouped Bar Chart',
    category: 'Bar Charts',
    description: 'Grouped bar chart for comparing categories',
    observableUrl: '@d3/grouped-bar-chart/2'
  },

  // Line Charts
  {
    id: 'line-chart',
    name: 'Line Chart',
    category: 'Line Charts',
    description: 'Simple line chart',
    observableUrl: '@d3/line-chart/2'
  },
  {
    id: 'multi-line-chart',
    name: 'Multi-line Chart',
    category: 'Line Charts',
    description: 'Multiple lines on one chart',
    observableUrl: '@d3/multi-line-chart/2'
  },
  {
    id: 'line-chart-missing-data',
    name: 'Line Chart with Missing Data',
    category: 'Line Charts',
    description: 'Handling gaps in time series data',
    observableUrl: '@d3/line-chart-missing-data/2'
  },

  // Area Charts
  {
    id: 'area-chart',
    name: 'Area Chart',
    category: 'Area Charts',
    description: 'Simple area chart',
    observableUrl: '@d3/area-chart/2'
  },
  {
    id: 'stacked-area-chart',
    name: 'Stacked Area Chart',
    category: 'Area Charts',
    description: 'Multiple stacked areas',
    observableUrl: '@d3/stacked-area-chart/2'
  },
  {
    id: 'streamgraph',
    name: 'Streamgraph',
    category: 'Area Charts',
    description: 'Flowing stream-like area chart',
    observableUrl: '@d3/streamgraph/2'
  },

  // Scatterplots
  {
    id: 'scatterplot',
    name: 'Scatterplot',
    category: 'Scatterplots',
    description: 'Simple scatterplot',
    observableUrl: '@d3/scatterplot/2'
  },
  {
    id: 'bubble-chart',
    name: 'Bubble Chart',
    category: 'Scatterplots',
    description: 'Scatterplot with sized bubbles',
    observableUrl: '@d3/bubble-chart/2'
  },

  // Pie Charts
  {
    id: 'pie-chart',
    name: 'Pie Chart',
    category: 'Pie Charts',
    description: 'Simple pie chart',
    observableUrl: '@d3/pie-chart/2'
  },
  {
    id: 'donut-chart',
    name: 'Donut Chart',
    category: 'Pie Charts',
    description: 'Pie chart with center hole',
    observableUrl: '@d3/donut-chart/2'
  },

  // Maps
  {
    id: 'choropleth',
    name: 'Choropleth Map',
    category: 'Maps',
    description: 'Color-coded geographic regions',
    observableUrl: '@d3/choropleth/2'
  },
  {
    id: 'world-map',
    name: 'World Map',
    category: 'Maps',
    description: 'Simple world map',
    observableUrl: '@d3/world-map'
  },

  // Networks
  {
    id: 'force-directed-graph',
    name: 'Force-Directed Graph',
    category: 'Networks',
    description: 'Interactive force-directed network',
    observableUrl: '@d3/force-directed-graph/2'
  },
  {
    id: 'sankey',
    name: 'Sankey Diagram',
    category: 'Networks',
    description: 'Flow diagram showing connections',
    observableUrl: '@d3/sankey/2'
  }
];

export const categories = Array.from(new Set(chartTypes.map(chart => chart.category)));