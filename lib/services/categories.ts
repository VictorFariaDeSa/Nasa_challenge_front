/**
 * Categories Service
 * Functions for fetching category data
 */

import { CategoryData } from "@/types/types"
import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
/**
 * Fetches all available categories
 */
export async function getCategories(): Promise<CategoryData[]> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.categories) as { categories: CategoryData[] }
    return data.categories
  } catch (error) {
    console.error("[v0] Error fetching categories:", error)
    // Return mock data as fallback
    return getMockCategories()
  }
}

export async function getCategoryDetails(id: string): Promise<CategoryData> {
  try {
    const data = await apiClient.get(API_ENDPOINTS.categoryDetail(id)) as CategoryData
    return data
  } catch (error) {
    console.error("[v0] Error fetching topic detail:", error)
    return getMockDetails()
  }
}

/**
 * Mock data for development/fallback
 */
function getMockCategories(): CategoryData[] {
  return [
    { id: "plants", name: "Plants" },
    { id: "food", name: "Food" },
    { id: "planets", name: "Planets" },
    { id: "engineering", name: "Engineering" },
    { id: "meteors", name: "Meteors" },
    { id: "biology", name: "Biology" },
  ]
}

function getMockDetails(): CategoryData {
  return {
      id: "1",
      name: "All Categories",
      topics: [
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
      ],
    };
}
