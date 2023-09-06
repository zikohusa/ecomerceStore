import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import { ReactComponent as SVG } from "../../assets/crown.svg"

import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation ">
                <Link to='/'>
                    <SVG className="logo-container" />
                </Link>
                <Link to="shop" className="margin-left nav-link">
                    SHOP
                </Link>
                <Link to="signin" className="nav-link">
                    SIGN IN
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation