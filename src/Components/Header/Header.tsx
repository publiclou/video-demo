import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/collection">Collection</Link>
      <Link to="/video">Video</Link>
    </div>
  )
}

export default Header