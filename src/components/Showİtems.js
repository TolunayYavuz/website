import React from 'react'

function Showİtems({Name,İmage,content,Price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${İmage})`}}></div>
     <h1>{Name}</h1>
     <h6>{content}</h6>
     <p>{Price}</p>
    </div>
  )
}

export default Showİtems
