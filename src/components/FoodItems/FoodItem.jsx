import React, { useContext} from 'react'
import './foodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

function FoodItem({id, name, price, description, image}) {
    const {cartItems, addToCart, removeCart}  = useContext(StoreContext);
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {
                !cartItems[id] ? <img className='add' onClick={() => addToCart(id) } src={assets.add_icon_white} />
                : <div className='food-item-counter'>
                    <img onClick={() => removeCart(id)} src={assets.remove_icon_red} />
                    <p>{cartItems[id]}</p>
                    <img onClick={() =>addToCart(id)} src={assets.add_icon_green} />
                </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} />
            </div>
            <div className="food-item-des">{description}</div>
            <div className="food-item-price">$ {price}</div>
        </div>
    </div>
  )
}

export default FoodItem