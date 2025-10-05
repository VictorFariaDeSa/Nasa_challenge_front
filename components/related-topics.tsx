"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TopicData } from "@/types/types";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/lib/utils";

export function RelatedTopics({
  relatedTopics,
}: {
  relatedTopics?: TopicData[];
}) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Related Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedTopics?.map((topic, index) => (
            <Link
              key={index}
              href={`/topic/${topic.id}`}
              className="hover:opacity-80 transition-opacity w-full"
            >
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
                <span className="text-foreground font-medium">
                  {capitalizeFirstLetter(topic.name)}
                </span>
                <div className="flex items-center gap-2">
                  {(topic?.trend ?? 0) > 0 ? (
                    <ArrowUp className="h-5 w-5 text-positive" />
                  ) : (
                    <ArrowDown className="h-5 w-5 text-warning" />
                  )}
                  <span
                    className={`text-lg font-bold ${
                      (topic?.trend ?? 0) > 0 ? "text-positive" : "text-warning"
                    }`}
                  >
                    {topic.trend?.toString().padStart(2, "0")}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
