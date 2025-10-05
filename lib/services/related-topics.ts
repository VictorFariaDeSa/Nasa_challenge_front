/**
 * Related Topics Service
 * Functions for fetching related topics
 */

import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { TopicData } from "@/types/types"

/**
 * Fetches related topics for a specific topic
 */
export async function getRelatedTopics(topicId: string): Promise<TopicData[]> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.topicRelated(topicId)) as { relatedTopics: TopicData[] }
    return data.relatedTopics
  } catch (error) {
    console.error("[v0] Error fetching related topics:", error)
    return getMockRelatedTopics()
  }
}

/**
 * Mock data for development/fallback
 */
function getMockRelatedTopics(): TopicData[] {
  return [
      {
        id: "potato-1",
        name: "Potato",
        trend: 5,
      },
      {
        id: "tomato-1",
        name: "Tomato",
        trend: -3,
      },
      {
        id: "lettuce-1",
        name: "Lettuce",
        trend: 8,
      },
    ]
}
