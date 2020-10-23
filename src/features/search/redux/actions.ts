import { createAction } from '@reduxjs/toolkit'

const SET_QUERY = 'search/SET_QUERY'
export const setQuery = createAction<string, typeof SET_QUERY>(SET_QUERY)
