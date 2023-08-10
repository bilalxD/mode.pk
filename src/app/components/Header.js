import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav"


function header() {
    return (
        <>
            {/* Header Section Begin */}
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="ht-left">
                            <div className="mail-service">
                                <i className=" fa fa-envelope" />
                                Modepk@gmail.com
                            </div>
                            <div className="phone-service">
                                <i className=" fa fa-phone" />
                                +92-331-2604004
                            </div>
                        </div>
                        <div className="ht-right">
                            <Link href="Register" className="login-panel">
                                <i className="fa fa-user" />
                                Register
                            </Link>
                            <Link href="Login" className="login-panel mr-3">
                                <i className="fa fa-user" />
                                Login
                            </Link>
                            <div className="top-social">
                                <Link href="#">
                                    <i className="ti-facebook" />
                                </Link>
                                <Link href="#">
                                    <i className="ti-twitter-alt" />
                                </Link>
                                <Link href="#">
                                    <i className="ti-linkedin" />
                                </Link>
                                <Link href="#">
                                    <i className="ti-pinterest" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <Link href="/">
                                        <h4>Mode.pk</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-lg-7">
                                <div className="advanced-search">
                                    <button type="button" className="category-btn">
                                        All Categories
                                    </button>
                                    <form action="#" className="input-group">
                                        <input type="text" placeholder="What do you need?" />
                                        <button type="button">
                                            <i className="ti-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right col-lg-3">
                                <ul className="nav-right">
                                    <li className="heart-icon">
                                        <Link href="#">
                                            <i className="icon_heart_alt" />
                                            <span>1</span>
                                        </Link>
                                    </li>
                                    <li className="cart-icon">
                                        <Link href="#">
                                            <i className="icon_bag_alt" />
                                            <span>3</span>
                                        </Link>
                                        <div className="cart-hover">
                                            <div className="select-items">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="si-pic">
                                                                <Image
                                                                    src="/img/select-product-1.jpg"
                                                                    alt="Picture Of Cart Image"
                                                                    height={80}
                                                                    width={80}
                                                                />
                                                            </td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="si-pic">
                                                                <Image
                                                                    src="/img/select-product-2.jpg"
                                                                    alt="Picture Of Second Cart"
                                                                    width={80}
                                                                    height={80}
                                                                />
                                                            </td>
                                                            <td className="si-text">
                                                                <div className="product-selected">
                                                                    <p>$60.00 x 1</p>
                                                                    <h6>Kabino Bedside Table</h6>
                                                                </div>
                                                            </td>
                                                            <td className="si-close">
                                                                <i className="ti-close" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>$120.00</h5>
                                            </div>
                                            <div className="select-button">
                                                <a href="#" className="primary-btn view-card">
                                                    VIEW CARD
                                                </a>
                                                <a href="#" className="primary-btn checkout-btn">
                                                    CHECK OUT
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cart-price">$150.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav />
            </header>
            {/* Header End */}
        </>

    )
}

export default header