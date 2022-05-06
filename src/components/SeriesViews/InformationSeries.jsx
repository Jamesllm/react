import React from 'react'
import './InformationSeries.css'


const ListButtons = ({titulo, image, description}) => {
    return (
            <div class="clearfix">
                <img width={200} src={image} class="col-md-6 float-md-end mb-3 ms-md-3 image" alt={titulo} />
                <p className='text'>{description}</p>
            </div>
    )
}

export default ListButtons
