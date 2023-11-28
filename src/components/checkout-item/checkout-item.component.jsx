import { useContext } from "react";
import "./checkout-item.styles.scss"
import { CartContext } from "../../contexts/cart.context";

export const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, quantity, price} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name"> {name} </span>
            <div className="quantity-container quantity">
                <button className="arrow" onClick={removeItemHandler}>&#10094;</button>
                <span className="value">{quantity}</span>
                <button className="arrow" onClick={addItemHandler}>&#10095;</button>
            </div>
            <span className="price"> {price} </span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}