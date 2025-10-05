"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { CategoryData } from "@/types/types";

export function TrendChart({ categoryData }: { categoryData?: CategoryData }) {
  const data = processChartData(categoryData || {});
  const chartConfig = processConfig(categoryData || {});

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">{categoryData?.name}</CardTitle>
      </CardHeader>
      <CardContent className="pr-2">
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="year"
                className="text-muted-foreground"
                tick={{ fill: "var(--muted-foreground)" }}
              />
              <YAxis
                className="text-muted-foreground"
                tick={{ fill: "var(--muted-foreground)" }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
              {!categoryData?.topics || categoryData.topics.length === 0 ? (
                <></>
              ) : (
                categoryData.topics.map((topic, index) => (
                  <Line
                    key={topic.id}
                    dataKey={topic.name.toLowerCase().replace(/\s+/g, "")} // Assuming data keys are formatted this way
                    stroke={`var(--chart-${(index % 5) + 1})`}
                    strokeWidth={3}
                    activeDot={{ r: 7 }}
                    dot={{ r: 4 }}
                    connectNulls={true} // Recomendo manter por segurança
                  />
                ))
              )}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const processChartData = (categoryData: CategoryData) => {
  if (!categoryData?.topics || categoryData.topics.length === 0) {
    return [];
  }

  const dataMap = new Map<number, { year: number; [key: string]: number }>();

  for (const topic of categoryData.topics) {
    const dataKey = topic.name.toLowerCase().replace(/\s+/g, "");
    for (const point of topic.mentions ?? []) {
      if (!dataMap.has(point.mention_date)) {
        dataMap.set(point.mention_date, { year: point.mention_date });
      }
      const yearEntry = dataMap.get(point.mention_date)!;
      yearEntry[dataKey] = point.mention_value;
    }
  }

  // Converter o mapa para um array e ordenar por ano
  const finalData = Array.from(dataMap.values()).sort(
    (a, b) => a.year - b.year
  );
  return finalData;
};

const processConfig = (categoryData: CategoryData) => {
  if (!categoryData?.topics || categoryData.topics.length === 0) {
    return {};
  }
  return Object.fromEntries(
    categoryData.topics.map((topic, index) => [
      topic.name.toLowerCase().replace(/\s+/g, ""),
      {
        label: topic.name,
        color: `var(--chart-${(index % 5) + 1})`,
      },
    ])
  );
};
