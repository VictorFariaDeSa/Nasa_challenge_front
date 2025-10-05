import { TrendChart } from "@/components/trend-chart";
import { MetricCard } from "@/components/metric-card";
import { CategoryFilter } from "@/components/category-filter";
import { getCategories, getCategoryDetails, getTopics } from "@/lib/services";

export default async function DashboardPage() {
  var categories = await getCategories();
  var categoryDetail = await getCategoryDetails("plants");
  var topics = await getTopics();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
          <div className="space-y-6 min-w-0">
            <TrendChart categoryData={categoryDetail} />

            <div className="relative">
              <div className="max-h-[600px] overflow-y-auto scrollbar-hide pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topics.map((topic) => (
                    <MetricCard key={topic.id} topicData={topic} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start min-w-0">
            <CategoryFilter categories={categories} />
          </aside>
        </div>
      </main>
    </div>
  );
}
