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

  // Topics
  topics: "/topics",
  topicDetail: (id: string) => `/topic/${id}`,
} as const
