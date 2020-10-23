import { createAsyncThunk } from '@reduxjs/toolkit'
import { SearchQuery } from '../../../api'
import { fetchSearch, fetchTrending } from '../../../api/gliphy-api'

export const fetchTrendingThunk = createAsyncThunk(
  'list/fetchTrending',
  async () => {
    const response = await fetchTrending()
    return response
  },
)

export const fetchSearchThunk = createAsyncThunk(
  'list/fetchSearch',
  async (query: SearchQuery) => {
    const response = await fetchSearch(query)
    return response
  },
)
