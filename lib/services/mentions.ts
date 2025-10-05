/**
 * Mentions Service
 * Functions for fetching related Mentions
 */

import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { Mentions } from "@/types/types"

/**
 * Fetches related Mentions for a topic
 */
export async function getRelatedMentions(topicId: string): Promise<Mentions[]> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.topicMentions(topicId)) as { mentions: Mentions[] }
    return data.mentions
  } catch (error) {
    console.error("[v0] Error fetching related mentions:", error)
    return getMockMentions()
  }
}

function getMockMentions(): Mentions[] {
    return [
      { mention_date: 2022, mention_value: 150 },
      { mention_date: 2023, mention_value: 250 },
      { mention_date: 2024, mention_value: 750 },
      { mention_date: 2025, mention_value: 800 },
      { mention_date: 2026, mention_value: 650 },
    ]
}