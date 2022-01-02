// Farm.jsx

import { useState, useEffect } from 'react'

const Farm = ({ farmParams }) => {
  const [farm, setFarm] = useState([])

  const generateFarm = () => {
    if (!farmParams) return
    let newFarm = new Array(farmParams.farmRows).fill(null).map(() =>
      Array(farmParams.farmCols)
        .fill(null)
        .map(() => 0)
    )
    console.table(newFarm)
    setFarm(newFarm)
  }

  useEffect(() => {
    generateFarm()
  }, [])

  return (
    <div>
      This farm is {farmParams.farmRows} wide and {farmParams.farmCols} deep. Press button to see how long it takes to
      water every plant with{' '}
      {farmParams.minimumRainfall > 1 ? farmParams.minimumRainfall + ' drops ' : farmParams.minimumRainfall + ' drop '}{' '}
      of rain.
      <button>GO!</button>
    </div>
  )
}

export default Farm
