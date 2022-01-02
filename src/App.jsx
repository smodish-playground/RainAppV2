import { useState } from 'react'
import './App.css'

const initialState = {
  farmRows: 10,
  farmCols: 10,
  minimumRainfall: 1,
}

function App() {
  const [farmState, setFarmState] = useState(initialState)

  const updateFarmState = (key, value) => {
    const newFarmState = {
      ...farmState,
      [key]: value,
    }
    setFarmState(newFarmState)
  }

  return (
    <div className='App'>
      <h1>Rain Problem V2</h1>
      <div>Farm Dimensions</div>
      <div className='farmDimensions'>
        <div className='farmDimBtn'>
          <div>Rows - {farmState.farmRows}</div>
          <div
            className='btn'
            onClick={() => {
              updateFarmState('farmRows', farmState.farmRows + 1)
            }}
          >
            More
          </div>
          <div
            className='btn'
            onClick={() => {
              updateFarmState('farmRows', farmState.farmRows - 1)
            }}
          >
            Less
          </div>
        </div>
        <div className='farmDimBtn'>
          <div>Columns - {farmState.farmCols}</div>
          <div
            className='btn'
            onClick={() => {
              updateFarmState('farmCols', farmState.farmCols + 1)
            }}
          >
            More
          </div>
          <div
            className='btn'
            onClick={() => {
              updateFarmState('farmCols', farmState.farmCols - 1)
            }}
          >
            Less
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
