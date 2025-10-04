"use client"

import { Line, LineChart, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

interface MetricCardProps {
  title: string
  value: string
  label: string
  trend: number
  data: Array<{ year: number; value: number }>
  id: string
}

export function MetricCard({ title, value, label, trend, data, id }: MetricCardProps) {
  const isPositive = trend > 0

  return (
    <Link href={`/topic/${id}`} className="block transition-transform hover:scale-[1.02]">
      <Card className="bg-card overflow-hidden cursor-pointer">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-primary" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={isPositive ? "text-primary" : "text-destructive"}>{Math.abs(trend)}%</span>
          </div>

          <div className="h-20 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                  activeDot={{ r: 6 }}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between text-xs text-muted-foreground pt-1">
            <span>{data[0].year}</span>
            <span>{data[1].year}</span>
            <span>{data[2].year}</span>
            <span>{data[3].year}</span>
            <span>{data[4].year}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
