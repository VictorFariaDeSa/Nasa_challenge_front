"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

const topics = [
  { name: "Strawberry", percentage: 31, trend: "down" },
  { name: "Pizza", percentage: 86, trend: "up" },
  { name: "Blueberry", percentage: 15, trend: "up" },
  { name: "Hamburger", percentage: 3, trend: "up" },
  { name: "Banana", percentage: 8, trend: "down" },
  { name: "Cherry", percentage: 10, trend: "down" },
]

export function RelatedTopics() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Related Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border"
            >
              <span className="text-foreground font-medium">{topic.name}</span>
              <div className="flex items-center gap-2">
                {topic.trend === "up" ? (
                  <ArrowUp className="h-5 w-5 text-primary" />
                ) : (
                  <ArrowDown className="h-5 w-5 text-warning" />
                )}
                <span className={`text-lg font-bold ${topic.trend === "up" ? "text-primary" : "text-warning"}`}>
                  {topic.percentage.toString().padStart(2, "0")}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
