import React from 'react'

export const TonikakuContenido = ({iframe, titulo}) => {
    return (
        <>
                <div className="ratio ratio-16x9">
                <iframe id='cam' src={iframe} frameborder="0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen=""></iframe>
                </div>
                <p className='h3 text-center mt-1 text-uppercase'>{titulo}</p>
        </>
    )
}

export default TonikakuContenido