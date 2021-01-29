import React, { FC, useState } from 'react'
import Player from '../../Components/VideoPlayer/VideoPlayer'
import style from './Video.module.scss'
import Ad from '../../Components/Ad/Ad'

const Video: FC = () => {
  const [isAd, setIsAd] = useState<boolean>(false)
  const video: string = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'

  function onPlayPauseVideo(data: boolean) {
    setIsAd(!data)
  }

  const AdElement = isAd ? <Ad text="~~~~Hellooo~~~" /> : null

  return (
    <div className={style['video']}>
      <div className={style['ad-area']}>
        {AdElement}
      </div>

      <Player src={video}
        onPlayPauseVideo={(data: boolean) => onPlayPauseVideo(data)} />
    </div>
  )
}

export default Video