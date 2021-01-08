import React from 'react'

export const GifGridItem = ( {title,url} ) => {

    // console.log(id,title,url);
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src= {url} alt={ title }></img>
            <p className='pipo'>{title}</p>
        </div>
    )
}
