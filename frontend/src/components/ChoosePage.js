import React from 'react'
import { useHistory } from 'react-router-dom'

const ChoosePage = () => {
  const history = useHistory()

  const handleClick = (e) => {
    history.push(`/${e.target.id}`)
  }

  return (
    <div className='btn-container'>
      <button id='cities' onClick={handleClick}>City Hotspots</button>
      <button id='continents' onClick={handleClick}>Continent Hotspots</button>
      <button id='sectors' onClick={handleClick}>Sector Hotspots</button>
    </div>
  )
}

export default ChoosePage
