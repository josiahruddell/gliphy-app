import React from 'react'
import { useDispatch } from 'react-redux'
import { ImageItem } from '../../api'
import { setCurrentImage } from '../details/redux/actions'
import styles from './ListItem.module.css'

export default (props: ImageItem) => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(setCurrentImage(props))
  }
  return (
    <img
      onClick={onClick}
      className={styles.component}
      src={props.url}
      alt={props.title}
    />
  )
}
