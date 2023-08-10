import Image from "next/image"

function Banners() {
    return (
        <div className="banner-section spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <Image
                                src="/img/banner-1.jpg"
                                alt="Pic Of Banner"
                                width={500}
                                height={500}
                            />
                            <div className="inner-text">
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <Image
                                src="/img/banner-2.jpg"
                                alt="Pic Of Banner 2"
                                height={500}
                                width={500}
                            />
                            <div className="inner-text">
                                <h4>Women’s</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-banner">
                            <Image
                                src="/img/banner-3.jpg"
                                alt="Pic Of Banner 3"
                                width={500}
                                height={500}
                            />
                            <div className="inner-text">
                                <h4>Kid’s</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banners