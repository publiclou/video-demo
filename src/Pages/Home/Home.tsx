import React, { FC } from 'react'

interface typeProps {
  text: string
}

const Home: FC<typeProps> = (props: typeProps) => {
  return (
    <div>{props.text}</div>
  )
}

export default Home