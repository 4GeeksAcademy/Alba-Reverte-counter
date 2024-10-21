import React, { useState, useEffect } from 'react';

export const SecondsCounter = ({ counter }) => {

  const [secondsValues, setSecondsValues] = useState([]);


  const showValues = (counter) => {
    const string = counter.toString()

    const values = string.split("").reverse()
    setSecondsValues(values)

  }

  useEffect(() => {
    showValues(counter)
  }, [counter]);

  return (
    <div className='container d-flex'>
      <div className='valueContainer'>
        {
          secondsValues[6] ? secondsValues[6] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[5] ? secondsValues[5] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[4] ? secondsValues[4] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[3] ? secondsValues[3] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[2] ? secondsValues[2] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[1] ? secondsValues[1] : 0
        }
      </div>
      <div className='valueContainer'>
        {
          secondsValues[0] ? secondsValues[0] : 0
        }
      </div>
    </div>
  )
} 