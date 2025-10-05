"use client"; // Componente interativo

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailChart } from "@/components/detail-chart";
import { RelatedArticles } from "@/components/related-articles";
import { RelatedTopics } from "@/components/related-topics";
import type { TopicData } from "@/types/types";
import { capitalizeFirstLetter } from "@/lib/utils";
import { TopicHeader } from "./topic-header";

// Recebe os dados via props, em vez de buscá-los aqui
export function TopicDetailPageContent({
  topicData,
}: {
  topicData: TopicData;
}) {
  return (
    <div className="min-h-screen bg-background">
      <TopicHeader />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Title */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold text-foreground">
            {capitalizeFirstLetter(topicData.name)}
          </h2>
          <div className="flex items-center gap-4">
            {/* Total Mentions */}
            <span className="text-sm text-muted-foreground">
              {topicData.totalMentions} Total Mentions
            </span>
            {/* Trend */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                (topicData.trend ?? 0) > 0
                  ? "bg-positive/10 text-positive"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {(topicData.trend ?? 0) > 0 ? "+" : ""}
              {topicData.trend ?? 0}%
            </span>
          </div>
        </div>

        {/* O resto do seu JSX continua aqui... */}
        <div className="mb-8">
          <DetailChart topicData={topicData} />
        </div>

        {/* Description and Conflicts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                {topicData.summary}
              </p>
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

        <div className="mb-8">
          <RelatedArticles relatedArticles={topicData.articles} />
        </div>

        <div>
          <RelatedTopics relatedTopics={topicData.related_topics} />
        </div>
      </div>
    </div>
  );
}
