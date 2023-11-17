import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase"

import { ReactComponent as SVG } from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { CartIcon } from "../../components/cart-icon/cart-icon.component"
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/'>
                    <SVG className="logo-container" />
                </Link>
                <Link to="shop" className="margin-left nav-link">
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link to="auth" className="nav-link">
                            SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation