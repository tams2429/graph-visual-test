import React from 'react'
import { continentData } from '../data/ContinentData'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts'

const ContinentsPage = () => {

  console.log(continentData)

  return (
    <RadarChart
      width={800}
      height={700}
      innerRadius="10%"
      outerRadius="90%"
      data={continentData}
      margin={{ top: 100, right: 5, bottom: 5, left: 5 }}
    >
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="name"/>
      <PolarRadiusAxis angle={50} domain={[0, 320]} />
      <Radar dataKey="Count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
      <Legend />
      <Tooltip offset={10}/>
    </RadarChart>
  )
}

export default ContinentsPage
