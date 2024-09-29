import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-meu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">We have large verity of menus please explore here and find the best food for yourself. There a lot of different kind of foods availabe from all over the world. </p>
        <div className="explore-menu-list">
            {
                menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=>setCategory(prev => prev === item.menu_name ? prev : item.menu_name)} key={index} className="explore-menul-list-item">
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu