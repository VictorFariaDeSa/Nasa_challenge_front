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
    const data = await apiClient.get(API_ENDPOINTS.topics, { params }) as { topics: TopicData[] }
    return data.topics
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
      id: "carrot-1",
      name: "Carrot1",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      mentions: [
        { mention_date: 2022, mention_value: 180 },
        { mention_date: 2023, mention_value: 210 },
        { mention_date: 2024, mention_value: 235 },
        { mention_date: 2025, mention_value: 250 },
        { mention_date: 2026, mention_value: 280 },
      ],
    },
    {
      id: "carrot-2",
      name: "Carrot2",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      mentions: [
        { mention_date: 2022, mention_value: 180 },
        { mention_date: 2023, mention_value: 210 },
        { mention_date: 2024, mention_value: 235 },
        { mention_date: 2025, mention_value: 250 },
        { mention_date: 2026, mention_value: 280 },
      ],
    },
    {
      id: "carrot-3",
      name: "Carrot3",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      mentions: [
        { mention_date: 2022, mention_value: 180 },
        { mention_date: 2023, mention_value: 210 },
        { mention_date: 2024, mention_value: 235 },
        { mention_date: 2025, mention_value: 250 },
        { mention_date: 2026, mention_value: 280 },
      ],
    },
    {
      id: "carrot-4",
      name: "Carrot4",
      totalMentions: 235,
      trend: 12.5,
      summary: `Lorem ipsum dolor sit amet...`,
      mentions: [
        { mention_date: 2022, mention_value: 180 },
        { mention_date: 2023, mention_value: 210 },
        { mention_date: 2024, mention_value: 235 },
        { mention_date: 2025, mention_value: 250 },
        { mention_date: 2026, mention_value: 280 },
      ],
    },
  ];
}

function getMockTopicDetail(id: string): TopicData {
  return {
    id: id,
    name: "Carrot",
    summary: `Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...Lorem ipsum dolor sit ametgdhfhfhfghgfhfhrmyt...`,
  }
}
