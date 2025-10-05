export interface TopicData {
  id: string;
  name: string;
  summary: string;

  articles?: Article[];
  related_topics?: TopicData[];
  mentions?: Mentions[];
  categories?: CategoryData[];

  totalMentions?: number;
  trend?: number;
}

export interface CategoryData {
  id?: string;
  name?: string;
  summary?: string;
  topics?: TopicData[];
}

export interface Mentions {
  year: number;
  total_mentions: number;
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
