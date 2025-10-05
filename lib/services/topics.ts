/**
 * Topics Service
 * Functions for fetching topic and metric data
 */

import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { TopicData } from "@/types/types"

/**
 * Fetches all topics with their metrics
 */
export async function getTopics(params?: {
  category?: string
  timeFrame?: string
}): Promise<TopicData[]> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.topics, { params }) as TopicData[]
    return data
  } catch (error) {
    console.error("[v0] Error fetching topics:", error)
    return getMockTopics()
  }
}

/**
 * Fetches detailed information for a specific topic
 */
export async function getTopicDetail(id: string): Promise<TopicData> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.topicDetail(id)) as TopicData
    console.log("DATA TOPICS: ", data);
    return data
  } catch (error) {
    console.error("[v0] Error fetching topic detail:", error)
    return getMockTopicDetail(id)
  }
}

/**
 * Mock data for development/fallback
 */
function getMockTopics(): TopicData[] {
  return [
    {
      id: "1",
      name: "Carrot1",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      mentions: [
        { year: 2022, total_mentions: 180 },
        { year: 2023, total_mentions: 210 },
        { year: 2024, total_mentions: 235 },
        { year: 2025, total_mentions: 250 },
        { year: 2026, total_mentions: 280 },
      ],
    },
  ];
}

function getMockTopicDetail(id: string): TopicData {
  return {
    id,
    name: "Carrot",
    summary: `Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...`,
  }
}
