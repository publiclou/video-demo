import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={style['header']}>
      <div className={style['title']}>
        Video Demo
      </div>

      <div className={style['menu']}>
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/video">Video</Link>
      </div>

    </div>
  )
}

export default Header