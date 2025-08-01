export interface ChartType {
  id: string;
  name: string;
  category: string;
  description: string;
  observableUrl: string;
}

export interface ChartConfig {
  width?: number;
  height?: number;
  data?: any[];
  [key: string]: any;
}