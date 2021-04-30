import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';



function Product({id, title, image,price,rating }) {
     
    const [{ basket }, dispatch]= useStateValue();
 
    const addToBasket= () =>{
        //dispatch the item into data layer
        // dispatch=push data ta datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
        return (
        <div className="product">
            <div className="product__info">
             <p>{title}</p>
             <p className="product__price"></p>
                   <small>$</small>
                <strong>{price}</strong>
           

        <div className="product__rating">
             {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
        </div>

        <img src={image}></img>

        <button onClick={addToBasket} className="product__button">Add to Basket</button>


        </div>

    )
}

export default Product
