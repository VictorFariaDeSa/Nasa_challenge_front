export interface TopicData {
  id: string;
  name: string;

  summary?: string;
  relatedArticles?: Article[];
  relatedTopics?: TopicData[];
  metricPoints?: MetricDataPoint[];
  totalMentions?: number;
  trend?: number;
}

export interface CategoryData {
  name?: string;
  topics?: TopicData[];
}

export interface MetricDataPoint {
  year: number;
  value: number;
}

export interface Article {
  id: string;
  name: string;
  summary: string;
  link: string;
  publish_date: string;
  authors?: Author[];
}

export interface Author {
  id: string;
  name: string;
}
