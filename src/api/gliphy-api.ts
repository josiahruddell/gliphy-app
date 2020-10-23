import { TrendingQuery, SearchQuery, GliphyResponse } from '.'
import { Datum, RootObject } from './gliphy-types'

// TODO: replace with environment variable using DefinePlugin with webpack from ./config using node-config
const GLIPHY_API_KEY = 'vj4l4euTJcUxj4oj3qJtxPaYiq0f3If4'

async function fetchJson<TReturn>(url: string): Promise<TReturn> {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Unable to fetch: ${response.statusText}`)
    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Map the payload to only what is needed for the application
 * @param payload root object from API query
 */
export const responseMapper = (payload: RootObject): GliphyResponse => {
  return {
    ...payload,
    images: payload.data.map(({ images: { original }, title }: Datum) => ({
      url: original.url,
      title,
    })),
  }
}

export async function fetchTrending(
  { limit }: TrendingQuery = { limit: 20 },
): Promise<GliphyResponse> {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GLIPHY_API_KEY}&limit=${limit}&rating=g`
  const payload = await fetchJson<RootObject>(url)

  return responseMapper(payload)
}

export async function fetchSearch({
  q,
  limit,
  offset,
}: SearchQuery): Promise<GliphyResponse> {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GLIPHY_API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g&lang=en`
  const payload = await fetchJson<RootObject>(url)
  return responseMapper(payload)
}
