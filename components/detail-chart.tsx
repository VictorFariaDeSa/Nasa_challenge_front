"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import type { TopicData } from "@/types/types";

export function DetailChart({ topicData }: { topicData: TopicData }) {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={topicData.mentions}
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
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Line
                name="Total Mentions"
                key={topicData.id}
                type="monotone"
                dataKey="total_mentions"
                stroke="var(--chart-base)"
                strokeWidth={3}
                dot={{ fill: "var(--chart-base)" }}
                animationDuration={1000}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
