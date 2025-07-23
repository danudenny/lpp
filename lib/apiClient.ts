import { getAuthToken } from './localStorage';

/**
 * API client for making authenticated requests
 */

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

/**
 * Make an authenticated API request
 */
export async function fetchApi(
  endpoint: string,
  options: FetchOptions = {}
): Promise<any> {
  const { params, headers = {}, ...restOptions } = options;
  
  // Build URL with query parameters
  let url = endpoint;
  if (params) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, value);
    });
    url = `${url}?${queryParams.toString()}`;
  }
  
  // Add authorization header if token exists
  const token = getAuthToken();
  const authHeaders: HeadersInit = token
    ? { Authorization: `Bearer ${token}`, ...headers }
    : headers;
  
  // Make the request
  const response = await fetch(url, {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders,
    },
  });
  
  // Parse the response
  const data = await response.json();
  
  // Handle error responses
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  
  return data;
}

/**
 * Convenience methods for common HTTP methods
 */

export function get(endpoint: string, options: FetchOptions = {}) {
  return fetchApi(endpoint, { ...options, method: 'GET' });
}

export function post(endpoint: string, data: any, options: FetchOptions = {}) {
  return fetchApi(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function put(endpoint: string, data: any, options: FetchOptions = {}) {
  return fetchApi(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function del(endpoint: string, options: FetchOptions = {}) {
  return fetchApi(endpoint, { ...options, method: 'DELETE' });
}

export default {
  get,
  post,
  put,
  delete: del,
};
