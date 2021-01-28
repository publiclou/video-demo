import React, { FC, useEffect, useRef } from 'react'
import videojs from "video.js"
import style from './VideoPlayer.module.scss'
import 'video.js/dist/video-js.css';

const VideoPlayer: FC = () => {
  const player = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videojs(player.current, { autoplay: true, muted: true, controls: true, }, () => {
      video.src('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8');
    });

    return () => {
      video.dispose();
    };
  }, [])

  return (
    <div className={style['player']}>
      <video ref={player}></video>
    </div>
  )
}

export default VideoPlayer