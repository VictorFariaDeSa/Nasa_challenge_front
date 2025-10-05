"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/types/types";
import Link from "next/link";

export function RelatedArticles({
  relatedArticles,
}: {
  relatedArticles?: Article[];
}) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedArticles?.slice(0, 5).map((article, index) => (
            <Link
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-between py-4 border-b border-border last:border-0">
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground min-w-[100px]">
                    {article.publish_date}
                  </span>
                  <span className="text-sm text-foreground min-w-xl">
                    {article.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
                  Authors:{" "}
                  {article.authors?.map((author) => author.name).join(", ") ||
                    "N/A"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
