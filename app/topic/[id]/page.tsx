"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { DetailChart } from "@/components/detail-chart"
import { RelatedArticles } from "@/components/related-articles"
import { RelatedTopics } from "@/components/related-topics"

export default async function TopicDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  // Mock data - in a real app, this would come from an API based on the id
  const topicData = {
    title: "Carrot",
    searchPlaceholder: "strawberry",
    chartData: [
      { year: "2022", series1: 700, series2: 150 },
      { year: "2023", series1: 850, series2: 250 },
      { year: "2023", series1: 250, series2: 500 },
      { year: "2024", series1: 350, series2: 750 },
      { year: "2024", series1: 300, series2: 650 },
      { year: "2025", series1: 650, series2: 800 },
      { year: "2025", series1: 500, series2: 750 },
      { year: "2026", series1: 450, series2: 650 },
      { year: "2026", series1: 750, series2: 750 },
      { year: "2026", series1: 150, series2: 150 },
      { year: "2026", series1: 900, series2: 900 },
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg">🌍</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">TrendingOrbit</h1>
          </Link>
        </div>

        {/* Title and Search */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold text-foreground">{topicData.title}</h2>
          <Input type="text" placeholder={topicData.searchPlaceholder} className="max-w-xs bg-muted border-border" />
        </div>

        {/* Main Chart */}
        <div className="mb-8">
          <DetailChart data={topicData.chartData} />
        </div>

        {/* Description and Conflicts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{topicData.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Conflicts</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center min-h-[200px]">
              <p className="text-muted-foreground">Comming soon...</p>
            </CardContent>
          </Card>
        </div>

        {/* Related Articles */}
        <div className="mb-8">
          <RelatedArticles />
        </div>

        {/* Related Topics */}
        <div>
          <RelatedTopics />
        </div>
      </div>
    </div>
  )
}
