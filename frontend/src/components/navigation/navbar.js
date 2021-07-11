const Navbar = props => {
    const {style} = props
    return <nav role="navigation">
        <ul className={`nav ${style}`}>
            {children}
        </ul>
    </nav>
}


