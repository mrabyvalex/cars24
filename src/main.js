import axios from 'axios';
import React, {useState, useEffect } from 'react';
import ImagesArray from './imageArray';


// button with id reset should be enabled only if selected obj has a valid entry
// button with id submit should be enabled only if selected obj has a valid entry
// apiState should always carry a valid string
const Main = () => {
    const [data, updateData] = useState([])
    const [selected, updateSelected] = useState({});
const [apiState, updateApiState] = useState('')
    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
        updateData(response.data)
    }

    const onSubmit = async () => {
        const body = Object.keys(selected).filter(key => key).map(id=> ({id}))
        const response = await axios.post('https://cz2021.free.beeceptor.com/save-preferences', body)
        updateApiState(response.data.status)
    }


    useEffect(() => {
        getData()
    },[])


    return <div className='main-container'>
        {apiState ? <div className='success-msg'>{apiState}</div>: null}
     <ImagesArray data={data} selected={selected} updateSelected={updateSelected} />
      <div className='info-container'>
          <div>Selected: {Object.keys(selected).filter(item=>item).length}</div>
          <div>Total: {data.length}</div>
      </div>
      <div className='buttons-container'>
          <button id='reset' onClick={() => {
              updateSelected({})
          }}>RESET</button>
          <button id='submit' onClick={onSubmit}> SUBMIT</button>
      </div>
    </div>
}

export default Main;