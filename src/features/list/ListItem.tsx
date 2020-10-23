import React from 'react'
import { ImageItem } from '../../api'

export default ({ url, title }: ImageItem) => {
  return <img src={url} alt={title} />
}
