import React, { FC } from 'react'
import VideoList from '../../Components/VideoList/VideoList'
import style from './Collection.module.scss'

const Collection: FC = () => {
  return (
    <div className={style['collection']}>
      <VideoList />
    </div>
  )
}

export default Collection