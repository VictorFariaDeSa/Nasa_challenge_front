"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { year: 2022, carrot: 450, topic2: 320, topic3: 280 },
  { year: 2023, carrot: 580, topic2: 420, topic3: 380 },
  { year: 2024, carrot: 720, topic2: 550, topic3: 480 },
  { year: 2025, carrot: 850, topic2: 680, topic3: 620 },
  { year: 2026, carrot: 950, topic2: 780, topic3: 720 },
]

export function TrendChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Trend Analysis</CardTitle>
      </CardHeader>
      <CardContent className="pr-2">
        <ChartContainer
          config={{
            carrot: {
              label: "Carrot",
              color: "hsl(var(--chart-1))",
            },
            topic2: {
              label: "Topico de nome 2",
              color: "hsl(var(--chart-2))",
            },
            topic3: {
              label: "Topico de nome 3",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="year" className="text-muted-foreground" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-muted-foreground" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
              <Line
                type="monotone"
                dataKey="carrot"
                stroke="var(--color-carrot)"
                strokeWidth={3}
                dot={{ fill: "var(--color-carrot)", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="topic2"
                stroke="var(--color-topic2)"
                strokeWidth={3}
                dot={{ fill: "var(--color-topic2)", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="topic3"
                stroke="var(--color-topic3)"
                strokeWidth={3}
                dot={{ fill: "var(--color-topic3)", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
