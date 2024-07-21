import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import MainImage from './components/MainImage'
import SideBar from './components/SideBar'

function App() {
  type ApodData = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
  }
  

  const [data, setData] = useState<ApodData>()
  const [showModal, setShowModal] = useState(false)


  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {

    async function fetchData() {

      // get API key and api url
      const API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url: string = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

      const todayDate = (new Date()).toDateString()
      const localKey = `NASA-${todayDate}`

      // check if the APOD is already cached
      if(localStorage.getItem(localKey)) {
        const localData: string | null = localStorage.getItem(localKey)
        const apiData: ApodData = localData && JSON.parse(localData)
        setData(apiData)
        console.log("Fetched data from cache")
        return
      }
      
      // if not cached, call from api and cache result
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData)) // add to cache
        setData(apiData) // add to data state
        console.log("Fetched data from API")
        
      } catch (error) {
        error && console.log(error)
      }
    }

    fetchData()

  }, [])

  return (
    <>
      {data ? (<MainImage data={data} />) : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<SideBar handleToggleModal={handleToggleModal} data={data} />)}
      {data && (<Footer showModal={showModal} handleToggleModal={handleToggleModal} data={data} />)}
    </>
  )
}

export default App
