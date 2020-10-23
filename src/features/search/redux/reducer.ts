import { createReducer } from '@reduxjs/toolkit'
import { setQuery } from './actions'

const initialState = Object.freeze({
  query: '',
})

export default createReducer(initialState, (reducer) => {
  reducer.addCase(setQuery, (state, action) => {
    state.query = action.payload
  })
})
