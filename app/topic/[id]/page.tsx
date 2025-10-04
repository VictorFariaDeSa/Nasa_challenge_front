import type { TopicData } from "@/types/types";
import { TopicDetailPageContent } from "@/components/topic-detail-page";

export default async function TopicDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // const topicData = await fetch(`https://api.example.com/topics/${id}`).then(res => res.json())

  // Mock data por enquanto
  const topicData: TopicData = {
    id: id,
    name: "Carrot",
    summary: `Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...`,
    metricPoints: [
      { year: 2022, value: 150 },
      { year: 2023, value: 250 },
      { year: 2024, value: 750 },
      { year: 2025, value: 800 },
      { year: 2026, value: 650 },
    ],
    relatedArticles: [
      {
        id: "1",
        link: "https://nasa.gov/article/how-to-create-orange-carrots-in-space",
        summary:
          "Learn how to cultivate vibrant orange carrots in the unique environment of space.",
        publish_date: "2025 09 04",
        name: "How to create orange carrots in space",
        authors: [
          {
            id: "1",
            name: "Victor sá",
          },
        ],
      },
      {
        id: "2",
        link: "https://nasa.gov/article/the-benefits-of-eating-carrots-in-space",
        summary:
          "Discover the numerous health benefits of incorporating carrots into your space diet.",
        publish_date: "2025 09 04",
        name: "The benefits of eating carrots in space",
        authors: [
          {
            id: "2",
            name: "João Pedro",
          },
        ],
      },
    ],
    relatedTopics: [
      {
        id: "potato-1",
        name: "Potato",
        trend: 5,
      },
      {
        id: "tomato-1",
        name: "Tomato",
        trend: -3,
      },
      {
        id: "lettuce-1",
        name: "Lettuce",
        trend: 8,
      },
    ],
  };

  // Renderiza o Client Component e passa os dados para ele
  return <TopicDetailPageContent topicData={topicData} />;
}
