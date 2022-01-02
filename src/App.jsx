import { useState, useEffect } from 'react'

import Farm from './components/Farm'

import './App.css'

const initialState = {
  farmRows: 10,
  farmCols: 10,
  minimumRainfall: 1,
}

function App() {
  const [farmParams, setFarmParams] = useState(initialState)

  const updateFarmParams = (key, value) => {
    if (value < 1) value = 1
    const newFarmParams = {
      ...farmParams,
      [key]: value,
    }
    setFarmParams(newFarmParams)
  }

  return (
    <div className='App'>
      <h1>Rain Problem V2</h1>

      <h2>Farm Dimensions</h2>
      <div className='farmParameters'>
        <div className='farmDimBtn'>
          <div>Rows - {farmParams.farmRows}</div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('farmRows', farmParams.farmRows + 1)
            }}
          >
            More
          </div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('farmRows', farmParams.farmRows - 1)
            }}
          >
            Less
          </div>
        </div>
        <div className='farmDimBtn'>
          <div>Columns - {farmParams.farmCols}</div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('farmCols', farmParams.farmCols + 1)
            }}
          >
            More
          </div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('farmCols', farmParams.farmCols - 1)
            }}
          >
            Less
          </div>
        </div>
      </div>

      <h2>Minimum Rainfall Per Plant</h2>
      <div className='farmParameters'>
        <div className='farmDimBtn'>
          <div>Drops - {farmParams.minimumRainfall}</div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('minimumRainfall', farmParams.minimumRainfall + 1)
            }}
          >
            More
          </div>
          <div
            className='btn'
            onClick={() => {
              updateFarmParams('minimumRainfall', farmParams.minimumRainfall - 1)
            }}
          >
            Less
          </div>
        </div>
      </div>

      <Farm farmParams={farmParams} />
    </div>
  )
}

export default App
