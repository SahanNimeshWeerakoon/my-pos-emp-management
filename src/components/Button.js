const Button = ({ btnClasses, title, children, onClick }) => {
    return (
        <button className={`btn ${btnClasses}`} title={title} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;