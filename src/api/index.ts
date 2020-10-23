import { Pagination } from './gliphy-types'

export type ImageItem = {
  url: string
  title: string
}

export type TrendingQuery = {
  limit: number
}

export type GliphyResponse = {
  pagination: Pagination
  images: ImageItem[]
}

export type SearchQuery = {
  q: string
  limit: number
  offset: number
}
