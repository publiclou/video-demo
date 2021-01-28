import axios from "axios"
import { useEffect, useState } from "react"

interface ApiParams {
  method: String
  url: String
  params: Object
}

const useYoutubeApi = ({ method, url, params }: ApiParams) => {
  const [get, setGet] = useState()

  useEffect(() => {
    const getApi = axios.create({
      baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    })

    // setGet(getApi)
  })

  return get
}

export default useYoutubeApi