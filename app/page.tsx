import { TrendChart } from "@/components/trend-chart";
import { MetricCard } from "@/components/metric-card";
import { CategoryFilter } from "@/components/category-filter";
import type { CategoryData, TopicData } from "@/types/types";

export default function DashboardPage() {
  let mockCategoryData: CategoryData = {
    name: "All Categories",
    topics: [
      {
        id: "carrot-1",
        name: "Carrot1",
        totalMentions: 235,
        trend: 12.5,
        summary: `Lorem ipsum dolor sit amet...`,
        metricPoints: [
          { year: 2022, value: 180 },
          { year: 2023, value: 210 },
          { year: 2024, value: 235 },
          { year: 2025, value: 250 },
          { year: 2026, value: 280 },
        ],
      },
      {
        id: "carrot-2",
        name: "Carrot2",
        totalMentions: 235,
        trend: 12.5,
        summary: `Lorem ipsum dolor sit amet...`,
        metricPoints: [
          { year: 2022, value: 180 },
          { year: 2023, value: 210 },
          { year: 2024, value: 235 },
          { year: 2025, value: 250 },
          { year: 2026, value: 280 },
        ],
      },
    ],
  };

  let mockTopicData: TopicData[] = [
    {
      id: "carrot-1",
      name: "Carrot1",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      metricPoints: [
        { year: 2022, value: 180 },
        { year: 2023, value: 210 },
        { year: 2024, value: 235 },
        { year: 2025, value: 250 },
        { year: 2026, value: 280 },
      ],
    },
    {
      id: "carrot-2",
      name: "Carrot2",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      metricPoints: [
        { year: 2022, value: 180 },
        { year: 2023, value: 210 },
        { year: 2024, value: 235 },
        { year: 2025, value: 250 },
        { year: 2026, value: 280 },
      ],
    },
    {
      id: "carrot-3",
      name: "Carrot3",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      metricPoints: [
        { year: 2022, value: 180 },
        { year: 2023, value: 210 },
        { year: 2024, value: 235 },
        { year: 2025, value: 250 },
        { year: 2026, value: 280 },
      ],
    },
    {
      id: "carrot-4",
      name: "Carrot4",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      metricPoints: [
        { year: 2022, value: 180 },
        { year: 2023, value: 210 },
        { year: 2024, value: 235 },
        { year: 2025, value: 250 },
        { year: 2026, value: 280 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
          <div className="space-y-6 min-w-0">
            <TrendChart categoryData={mockCategoryData} />

            <div className="relative">
              <div className="max-h-[600px] overflow-y-auto scrollbar-hide pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockTopicData.map((topic) => (
                    <MetricCard key={topic.id} topicData={topic} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start min-w-0">
            <CategoryFilter />
          </aside>
        </div>
      </main>
    </div>
  );
}
