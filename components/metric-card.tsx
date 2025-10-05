"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { TopicData } from "@/types/types";
import Link from "next/link";

export function MetricCard({ topicData }: { topicData: TopicData }) {
  const isPositive = topicData.trend ?? 0 > 0;

  return (
    <Link
      href={`/topic/${topicData.id}`}
      className="block transition-transform hover:scale-[1.02]"
    >
      <Card className="bg-card overflow-hidden cursor-pointer">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {topicData.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">
              {topicData.totalMentions}
            </span>
            <span className="text-sm text-muted-foreground">Mentions</span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-primary" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={isPositive ? "text-primary" : "text-destructive"}>
              {topicData.trend ? Math.abs(topicData.trend) : <></>}%
            </span>
          </div>

          <div className="h-20 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={topicData.mentions}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <Line
                  key={topicData.id}
                  type="monotone"
                  dataKey="mention_value"
                  stroke="var(--chart-base)"
                  strokeWidth={3}
                  dot={{ fill: "var(--chart-base)", r: 4 }}
                  activeDot={{ r: 6 }}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
