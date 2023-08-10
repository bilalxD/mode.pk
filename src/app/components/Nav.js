

const Nav = () => {
    return (
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu" />
                        <span>All departments</span>
                        <ul className="depart-hover">
                            <li className="active">
                                <a href="#">Women’s Clothing</a>
                            </li>
                            <li>
                                <a href="#">Men’s Clothing</a>
                            </li>
                            <li>
                                <a href="#">Underwear</a>
                            </li>
                            <li>
                                <a href="#">Kid's Clothing</a>
                            </li>
                            <li>
                                <a href="#">Brand Fashion</a>
                            </li>
                            <li>
                                <a href="#">Accessories/Shoes</a>
                            </li>
                            <li>
                                <a href="#">Luxury Brands</a>
                            </li>
                            <li>
                                <a href="#">Brand Outdoor Apparel</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Shop">Shop</a>
                        </li>
                        <li>
                            <a href="/NewArrivals">New Arrivals</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="#">Men's</a>
                                </li>
                                <li>
                                    <a href="#">Women's</a>
                                </li>
                                <li>
                                    <a href="#">Kid's</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
            </div>
        </div>
    )
}

export default Nav