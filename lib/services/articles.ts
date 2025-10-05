/**
 * Articles Service
 * Functions for fetching related articles
 */

import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { Article } from "@/types/types"

/**
 * Fetches related articles for a topic
 */
export async function getRelatedArticles(topicId: string): Promise<Article[]> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.topicArticles(topicId)) as { articles: Article[] }
    return data.articles
  } catch (error) {
    console.error("[v0] Error fetching related articles:", error)
    return getMockArticles()
  }
}

/**
 * Mock data for development/fallback
 */
function getMockArticles(): Article[] {
  return [
      {
        id: "1",
        link: "https://nasa.gov/article/how-to-create-orange-carrots-in-space",
        summary:
          "Learn how to cultivate vibrant orange carrots in the unique environment of space.",
        publish_date: "2025 09 04",
        name: "How to create orange carrots in space",
        authors: [
          {
            id: "1",
            name: "Victor sá",
          },
        ],
      },
      {
        id: "2",
        link: "https://nasa.gov/article/the-benefits-of-eating-carrots-in-space",
        summary:
          "Discover the numerous health benefits of incorporating carrots into your space diet.",
        publish_date: "2025 09 04",
        name: "The benefits of eating carrots in space",
        authors: [
          {
            id: "2",
            name: "João Pedro",
          },
        ],
      },
    ]
}
