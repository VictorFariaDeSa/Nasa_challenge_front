"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const articles = [
  {
    date: "2025 09 04",
    title: "How to create orange carrots in space",
    author: "Victor sá",
  },
  {
    date: "2025 09 04",
    title: "How to create orange carrots in space and try it eat",
    author: "Victor sá",
  },
  {
    date: "2025 09 04",
    title: "How to create orange carrots in space",
    author: "Victor sá",
  },
]

export function RelatedArticles() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="flex items-center justify-between py-4 border-b border-border last:border-0">
              <div className="flex items-center gap-8">
                <span className="text-sm text-muted-foreground min-w-[100px]">{article.date}</span>
                <span className="text-sm text-foreground">{article.title}</span>
              </div>
              <span className="text-sm text-muted-foreground">Author: {article.author}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
