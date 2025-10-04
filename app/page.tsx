import { DashboardHeader } from "@/components/dashboard-header"
import { TrendChart } from "@/components/trend-chart"
import { MetricCard } from "@/components/metric-card"
import { CategoryFilter } from "@/components/category-filter"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DashboardHeader />

      <main className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
          <div className="space-y-6 min-w-0">
            <TrendChart />

            <div className="relative">
              <div className="max-h-[600px] overflow-y-auto scrollbar-hide pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <MetricCard
                    id="carrot-1"
                    title="Carrot"
                    value="235"
                    label="Mentions"
                    trend={12.5}
                    data={[
                      { year: 2022, value: 180 },
                      { year: 2023, value: 210 },
                      { year: 2024, value: 235 },
                      { year: 2025, value: 250 },
                      { year: 2026, value: 280 },
                    ]}
                  />
                  <MetricCard
                    id="carrot-2"
                    title="Carrot"
                    value="189"
                    label="Mentions"
                    trend={8.3}
                    data={[
                      { year: 2022, value: 150 },
                      { year: 2023, value: 170 },
                      { year: 2024, value: 189 },
                      { year: 2025, value: 200 },
                      { year: 2026, value: 220 },
                    ]}
                  />
                  <MetricCard
                    id="carrot-3"
                    title="Carrot"
                    value="312"
                    label="Mentions"
                    trend={15.7}
                    data={[
                      { year: 2022, value: 220 },
                      { year: 2023, value: 280 },
                      { year: 2024, value: 312 },
                      { year: 2025, value: 340 },
                      { year: 2026, value: 380 },
                    ]}
                  />
                  <MetricCard
                    id="topico-2"
                    title="Topico 2"
                    value="428"
                    label="Mentions"
                    trend={22.1}
                    data={[
                      { year: 2022, value: 280 },
                      { year: 2023, value: 350 },
                      { year: 2024, value: 428 },
                      { year: 2025, value: 480 },
                      { year: 2026, value: 520 },
                    ]}
                  />
                  <MetricCard
                    id="topico-3"
                    title="Topico 3"
                    value="156"
                    label="Mentions"
                    trend={-5.2}
                    data={[
                      { year: 2022, value: 200 },
                      { year: 2023, value: 180 },
                      { year: 2024, value: 156 },
                      { year: 2025, value: 140 },
                      { year: 2026, value: 130 },
                    ]}
                  />
                  <MetricCard
                    id="plants"
                    title="Plants"
                    value="567"
                    label="Mentions"
                    trend={18.9}
                    data={[
                      { year: 2022, value: 400 },
                      { year: 2023, value: 480 },
                      { year: 2024, value: 567 },
                      { year: 2025, value: 620 },
                      { year: 2026, value: 680 },
                    ]}
                  />
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
  )
}
