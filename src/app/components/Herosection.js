import Image from 'next/image'
import Link from 'next/link'

function Herosection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-items owl-carousel">
          <div className="single-hero-items set-bg" data-setbg="img/hero-1.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Link href="#" className="primary-btn">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="single-hero-items set-bg" data-setbg="img/hero-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Link href="/Shop" className="primary-btn">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      <div className="benefit-items">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-benefit">
              <div className="sb-icon">
                <Image
                  src="/img/icon-1.png"
                  alt="Picture Of the Delivery icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="sb-text">
                <h6>Free Shipping</h6>
                <p>For all order over 99$</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-benefit">
              <div className="sb-icon">
                <Image
                  src="/img/icon-2.png"
                  alt="Picture Of The Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="sb-text">
                <h6>Delivery On Time</h6>
                <p>If good have prolems</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-benefit">
              <div className="sb-icon">
                <Image
                  src="/img/icon-1.png"
                  alt="Picture Of Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="sb-text">
                <h6>Secure Payment</h6>
                <p>100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Herosection