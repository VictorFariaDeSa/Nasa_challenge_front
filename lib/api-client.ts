/**
 * API Client
 * HTTP client for making requests to the external backend
 */

import { API_CONFIG } from "./api-config"

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any,
  ) {
    super(message)
    this.name = "APIError"
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>
}

/**
 * Makes an HTTP request to the API
 */
async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, ...fetchOptions } = options

  // Build URL with query parameters
  const url = new URL(`${API_CONFIG.baseURL}${endpoint}`)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
  }

  try {
    const response = await fetch(url.toString(), {
      ...fetchOptions,
      headers: {
        ...API_CONFIG.headers,
        ...headers,
      },
    })

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new APIError(
        errorData.message || `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        errorData,
      )
    }

    // Parse JSON response
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof APIError) {
      throw error
    }

    // Network or other errors
    throw new APIError(error instanceof Error ? error.message : "An unknown error occurred", 0)
  }
}

/**
 * API Client methods
 */
export const apiClient = {
  get: (endpoint: string, options?: RequestOptions) => request(endpoint, { ...options, method: "GET" }),

  post: (endpoint: string, data?: any, options?: RequestOptions) =>
    request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: (endpoint: string, data?: any, options?: RequestOptions) =>
    request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (endpoint: string, options?: RequestOptions) => request(endpoint, { ...options, method: "DELETE" }),
}
