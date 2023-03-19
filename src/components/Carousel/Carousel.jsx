import React from 'react';
import MediaQuery from "react-responsive";


const Carousel = () => {
    return (
        <>
            <MediaQuery minWidth={500}>
                <div style={{ marginBottom: 80 }} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div style={{ maxHeight: 800 }} className="carousel-item active" data-bs-interval="3000">
                            <img src="https://sun9-53.userapi.com/impg/DPPDxwYh8NDgL4utkxRkp8hk4j3SCOTqL66jDg/WdoUD1usHTY.jpg?size=1890x804&quality=96&sign=94b2a9977bb5f25b8951c24851cdb1a5&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div style={{ maxHeight: 800 }} className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-west.userapi.com/sun9-70/s/v1/ig2/4_P7RvSoNnabHjesJ5och5c4bLin_yW1ReFGvJeKiXryvFfQejhr-aelSpPZCqBtTrRuC7cdM0fDZudBMta5HwJv.jpg?size=1830x780&quality=95&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div style={{ maxHeight: 800 }} className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-west.userapi.com/sun9-15/s/v1/ig2/yZaSsWYy4GlDC5OIScJWSMWOR-1SPn9-LR5RB46GOJM5MhM8QyyFeKEpoZ_9UXTaH_lzgSKgG_eQMP_fY8HHCV5T.jpg?size=1858x792&quality=95&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div style={{ maxHeight: 800 }} className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-23.userapi.com/impg/lEQSHSWxNugWfnV40wXcL-4WI4Gx2SME6Lwhcg/sUfaGUzww_M.jpg?size=1863x794&quality=96&sign=6aad7b14449a2f7b464e078f6474adf3&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={500}>
                <div style={{ marginBottom: 80 }} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="https://sun9-8.userapi.com/impg/2fApQ1vPsflOwz8r9ytFI9vQQ37Taiec70g3JA/aQXQ3-VZzUs.jpg?size=695x1080&quality=95&sign=175358fc327214f524b29b9aebdd5f59&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-56.userapi.com/impg/64xxTjCJV820wIgmUuhw9Rh_hITpb7E6xtgdeg/08nAXWLB7mM.jpg?size=624x964&quality=96&sign=f4fec51a133eaf1613a229c1b5509c55&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-74.userapi.com/impg/5hMYfGCK4elOhrzc_scfG1pd4XhELWk2gvBfiA/01aoPI18-Y8.jpg?size=626x962&quality=96&sign=998948f058f80f1a329f211fad8c1715&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://sun9-24.userapi.com/impg/TBMGeqC9X89QKrArYZKtRaMtaVewR9Gk18B2Ig/Y7keqnGqRkU.jpg?size=625x965&quality=96&sign=3ca525c9a4e94a609cae820f67c213c8&type=album" className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </MediaQuery>
        </>
    );
}

export default Carousel;
