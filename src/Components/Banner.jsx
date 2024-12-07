import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/banner.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co.com/rm7LGRj/ai-generated-8648017-1280.jpg"
                        alt="Inception"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                        <h3 className="text-white text-2xl font-bold">Inception</h3>
                        <p className="text-white mt-2">
                            A mind-bending thriller by Christopher Nolan, where dreams collide with reality.
                        </p>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co.com/vYktctg/ai-generated-8967107-1280.jpg"
                        alt="Interstellar"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                        <h3 className="text-white text-2xl font-bold">Interstellar</h3>
                        <p className="text-white mt-2">
                            A gripping sci-fi epic that explores space, time, and the human spirit.
                        </p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative">
                    <img
                        src="https://i.ibb.co.com/XVXQXXP/ai-generated-8928259-1280.jpg"
                        alt="The Dark Knight"
                        className="w-full h-[450px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                        <h3 className="text-white text-2xl font-bold">The Dark Knight</h3>
                        <p className="text-white mt-2">
                            Witness the rise of Batman and his epic battle against the Joker in Gotham City.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
