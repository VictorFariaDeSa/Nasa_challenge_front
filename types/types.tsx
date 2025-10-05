export interface TopicData {
  id: string;
  name: string;
  summary?: string;

  relatedArticles?: Article[];
  relatedTopics?: TopicData[];
  mentions?: Mentions[];

  totalMentions?: number;
  trend?: number;
}

export interface CategoryData {
  id: string;
  name?: string;
  summary?: string;
  topics?: TopicData[];
}

export interface Mentions {
  mention_date: number;
  mention_value: number;
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
