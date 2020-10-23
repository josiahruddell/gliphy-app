import { createAction } from '@reduxjs/toolkit'
import { ImageItem } from '../../../api'

const SET_CURRENT_IMAGE = 'details/SET_CURRENT_IMAGE'
export const setCurrentImage = createAction<
  ImageItem | null,
  typeof SET_CURRENT_IMAGE
>(SET_CURRENT_IMAGE)
