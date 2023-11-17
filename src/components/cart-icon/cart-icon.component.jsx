import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { CartContext } from "../../contexts/cart.context"


export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const ToggleIsCartOpen = () => setIsCartOpen(!isCartOpen)



    return(
        <div className="cart-icon-container" onClick={ToggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}
