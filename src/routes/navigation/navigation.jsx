import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase"

import { ReactComponent as SVG } from "../../assets/crown.svg"
import "./navigation.styles.scss"

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser)
    
    return (
        <Fragment>
            <div className="navigation ">
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
                
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation