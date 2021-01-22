import React from 'react'
import { sectorData } from '../data/SectorData'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'

const SectorsPage = () => {

  return (
    <FunnelChart
      width={700}
      height={700}
    >
      <Funnel
        data={sectorData}
        dataKey="Count"
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" offset={10}/>
      </Funnel>
      <Tooltip offset={10}/>
    </FunnelChart>
  )
}

export default SectorsPage
