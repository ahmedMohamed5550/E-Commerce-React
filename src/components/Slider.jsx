import ImageOne from './Images/imagesOne.jpg';
import ImageTwo from './Images/imagesTwo.jpg';
import ImageThree from './Images/imagesThree.jpg';
import './Slider.css';

function Slider() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-autoplay="true">
            <div className="carousel-inner rounded-5">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={ImageOne} className="d-block w-100 height-500" alt="Slide 1" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src={ImageTwo} className="d-block w-100 height-500" alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="6000">
                    <img src={ImageThree} className="d-block w-100 height-500" alt="Slide 3" />
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <button
                    className="btn-icon btn-sm carousel-control-play-pause"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    aria-label="Pause"
                    data-bs-pause-label="Pause"
                    data-bs-play-label="Play"
                >
                    <span className="carousel-icon-pause" aria-hidden="true"></span>
                    <span className="carousel-icon-play" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
}

export default Slider;