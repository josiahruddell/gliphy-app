import React, { useState } from 'react'
import debounce from 'debounce'
import { useDispatch } from 'react-redux'
import { setQuery } from './redux/actions'
import { Dispatch } from '@reduxjs/toolkit'
import styles from './Search.module.css'

/**
 * Update the store query after some debounce so every character is not searched
 */
const dispatchLatestQueryDebounced = debounce(
  (dispatch: Dispatch, value: string) => dispatch(setQuery(value)),
  300,
)

export default () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    dispatchLatestQueryDebounced(dispatch, event.target.value)
  }
  return (
    <input
      placeholder="Search GLIPHY"
      className={styles.component}
      value={value}
      onChange={onChange}
    />
  )
}
