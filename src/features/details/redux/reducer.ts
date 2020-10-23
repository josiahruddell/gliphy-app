import { createReducer } from '@reduxjs/toolkit'
import { ImageItem } from '../../../api'
import { setCurrentImage } from './actions'

const initialState = Object.freeze({
  isLoading: false,
  image: null as ImageItem | null,
})

export default createReducer(initialState, (reducer) => {
  reducer.addCase(setCurrentImage, (state, action) => {
    state.image = action.payload
  })
})
