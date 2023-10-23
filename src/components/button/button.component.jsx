import "./button.styles.scss"

const Button_type_classe = {
    google: "google-sign-in",
    inverted: "inverted"
} 

const Button = ({ children, buttonType, ...otherProps }) => {
    return(
        <button 
        className={`button-container ${Button_type_classe[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button