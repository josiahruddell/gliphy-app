import { createReducer } from '@reduxjs/toolkit'
import { ImageItem } from '../../../api'
import { fetchSearchThunk, fetchTrendingThunk } from './actions'

const initialState = Object.freeze({
  results: [] as ImageItem[],
  isSearching: false,
  error: undefined as string | undefined,
})

export default createReducer(initialState, (reducer) => {
  reducer.addCase(fetchSearchThunk.pending, (state, action) => {
    state.isSearching = true
  })

  reducer.addCase(fetchSearchThunk.rejected, (state, action) => {
    state.isSearching = false
    state.error = action.error.message
  })

  reducer.addCase(fetchSearchThunk.fulfilled, (state, action) => {
    state.isSearching = false
    // TODO: append for scroll
    state.results = action.payload.images
  })

  // THESE THREE CASES ARE DUPLICATED
  // TODO: use matchers see https://redux-toolkit.js.org/api/createReducer
  reducer.addCase(fetchTrendingThunk.pending, (state, action) => {
    state.isSearching = true
  })

  reducer.addCase(fetchTrendingThunk.rejected, (state, action) => {
    state.isSearching = false
    state.error = action.error.message
  })

  reducer.addCase(fetchTrendingThunk.fulfilled, (state, action) => {
    state.isSearching = false
    state.results = action.payload.images
  })
})
