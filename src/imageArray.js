import React from 'react';


// data should be an array of valid objs or empty array
//updateSelected should be a function
// selected should be an obj
const ImagesArray = ({ data, updateSelected, selected}) => {
    const imageClass = (id) => selected[id]? `is-selected`:'';

    return  <div className='image-container'>
    {data.map(image=> <img onClick={() => {
          updateSelected(cur => ({...cur, [image.id]:!cur[image.id]}))
      }} className={`select-image ${imageClass(image.id)}`} src={image.download_url} />)}
    </div>
}


export default ImagesArray;