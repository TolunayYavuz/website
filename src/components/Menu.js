import React from 'react'
import {Data} from '../Helper/data.js';
import Showİtems from './Showİtems.js';
import '../style/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burglerimiz</h1>
      <div className='menuList'>
        {
        Data.map((MenuItems,key) => {
          return <Showİtems 
          
          Name={MenuItems.Name}
          İmage={MenuItems.İmage}
          content={MenuItems.content}
          Price={MenuItems.Price}
          
          key={key}/>
        })
      }
      </div>
    </div>
  )
}

export default Menu
