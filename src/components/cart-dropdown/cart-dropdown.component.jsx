import Button from "../button/button.component"
import "./cart-dropdown.styles.scss"

export const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button>Go To Checkout</Button>
        </div>
    )
}