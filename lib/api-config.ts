/**
 * API Configuration
 * Centralized configuration for external API connection
 */

export const API_CONFIG = {
  // Base URL for the external backend API
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.trendingorbit.com",

  // API version
  version: "v1",

  // Request timeout in milliseconds
  timeout: 10000,

  // Default headers
  headers: {
    "Content-Type": "application/json",
  },
} as const

// API endpoints
export const API_ENDPOINTS = {
  // Categories
  categories: "/categories",
  categoryDetail: (id: string) => `/categories/${id}`,

  // Topics
  topics: "/topics",
  topicDetail: (id: string) => `/topics/${id}`,
  topicChart: (id: string) => `/topics/${id}/chart`,
  topicArticles: (id: string) => `/topics/${id}/articles`,
  topicRelated: (id: string) => `/topics/${id}/related`,
  topicMentions: (id: string) => `/topics/${id}/mentions`,

  // Search
  search: "/search",
} as const
