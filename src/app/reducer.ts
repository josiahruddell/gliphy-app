import { combineReducers } from 'redux'
import searchReducer from '../features/search/redux/reducer'
import listReducer from '../features/list/redux/reducer'
import detailReducer from '../features/details/redux/reducer'

const rootReducer = combineReducers({
  search: searchReducer,
  list: listReducer,
  detail: detailReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
