import React, { FC, useState } from 'react'
import VideoList from '../../Components/VideoList/VideoList'
import style from './Collection.module.scss'

const Collection: FC = () => {
  const [collections, setCollections] = useState<object[]>([])
  return (
    <div className={style['collection']}>
      <VideoList list={collections} title="收藏影片" />
    </div>
  )
}

export default Collection