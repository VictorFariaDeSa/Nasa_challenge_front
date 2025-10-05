"use client";

import { useState, useMemo } from "react";
import { TrendChart } from "@/components/trend-chart";
import { MetricCard } from "@/components/metric-card";
import { CategoryFilter } from "@/components/category-filter";
import { DashboardHeader } from "@/components/dashboard-header";
import type { CategoryData, TopicData } from "@/types/types";

interface DashboardContentProps {
  topics: TopicData[];
  categories: CategoryData[];
}

export function DashboardContent({
  topics,
  categories,
}: DashboardContentProps) {
  //   const [timeframe, setTimeframe] = useState("2year");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  const filteredTopics = useMemo(() => {
    return topics?.filter((topic) => {
      // Filter by search term
      const matchesSearch = topic.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Filter by categories (if any selected)
      const matchesCategory = selectedCategory
        ? topic.categories?.some((cat) => cat.name === selectedCategory)
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [topics, searchTerm, selectedCategory]);

  //   const   = useMemo(() => {
  //     const now = new Date();
  //     const cutoffDate = new Date();

  //     switch (timeframe) {
  //       case "1year":
  //         cutoffDate.setFullYear(now.getFullYear() - 1);
  //         break;
  //       case "2year":
  //         cutoffDate.setFullYear(now.getFullYear() - 2);
  //         break;
  //       case "5year":
  //         cutoffDate.setFullYear(now.getFullYear() - 5);
  //         break;
  //       case "all":
  //         cutoffDate.setFullYear(2000); // Arbitrary early date
  //         break;
  //       default:
  //         cutoffDate.setFullYear(now.getFullYear() - 2);
  //     }

  const categoryDetail: CategoryData = {
    name: selectedCategory,
    topics: filteredTopics.slice(0, 3),
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DashboardHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_430px]">
          <div className="space-y-6 min-w-0">
            <TrendChart categoryData={categoryDetail} />

            <div className="relative">
              <div className="max-h-[600px] overflow-y-auto scrollbar-hide pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTopics?.map((topic, index) => (
                    <MetricCard key={index} topicData={topic} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start min-w-0">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
