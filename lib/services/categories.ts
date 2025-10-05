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
    const data = await apiClient.get(API_ENDPOINTS.categories) as CategoryData[]
    return data
  } catch (error) {
    console.error("[v0] Error fetching categories:", error)
    // Return mock data as fallback
    return getMockCategories()
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
