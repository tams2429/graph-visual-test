import React from 'react'
import { countryData } from '../data/CountryData'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'

const CitiesPage = () => {

  console.log(countryData)

  return (
    <RadialBarChart
      width={700}
      height={500}
      innerRadius="10%"
      outerRadius="90%"
      data={countryData}
    >
      <RadialBar
        dataKey='Count'
        background

      />
      <Legend width={80} height={490} layout='vertical' verticalAlign='middle' align="right" />
      <Tooltip offset={10}/>
    </RadialBarChart>
  )
}

export default CitiesPage
