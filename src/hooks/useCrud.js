import { useState } from 'react'
import axios from 'axios'

const useCrud = (urlBase) => {
  const [apiData, setApiData] = useState()

  const getApi = (path) => {
    axios.get(`${urlBase}${path}/`)
    .then(res => setApiData(res.data))
    .catch(err => console.log(err))
  }

  const postApi = (path, data) =>{
    axios.post(`${urlBase}${path}/`, data)
    .then(res => {
      setApiData([...apiData, res.data])
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  const deleteApi = (path, id) => {
    axios.delete(`${urlBase}${path}/${id}/`)
    .then(res => {
      console.log(res.data)
      setApiData(apiData.filter(element => id !== element.id))
    })
    .catch(err => console.log(err))
  }

  const updateApi = (path, id, data) => {
    axios.patch(`${urlBase}${path}/${id}/`, data)
    .then(res => {
      setApiData(apiData.map(element => id === element.id ? res.data : element))
    })
    .catch(err => console.log(err))
  }
  return [apiData, getApi, postApi, deleteApi, updateApi]
}

export default useCrud
