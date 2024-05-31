import { useState, useEffect } from 'react';
import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
import img5 from '../../../../assets/images/banner/5.jpg'
import img6 from '../../../../assets/images/banner/6.jpg'
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment current slide number cyclically
            setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []); // Run only once on component mount

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className={`carousel-item transform translate-x-10 relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                    <img src={img1} className="w-full h-[600px] rounded-md bg-opacity-5" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide6" className="btn btn-circle" onClick={() => goToSlide(4)}>❮</a>
                        <a href="#slide2" className="btn btn-circle" onClick={() => goToSlide(2)}>❯</a>
                    </div>

                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40 '>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                    <img src={img2} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide1" className="btn btn-circle" onClick={() => goToSlide(1)}>❮</a>
                        <a href="#slide3" className="btn btn-circle" onClick={() => goToSlide(3)}>❯</a>
                    </div>
                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40 '>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                    <img src={img3} className="w-full h-[600px] rounded-md " />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide2" className="btn btn-circle" onClick={() => goToSlide(2)}>❮</a>
                        <a href="#slide4" className="btn btn-circle" onClick={() => goToSlide(4)}>❯</a>
                    </div>
                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40'>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <img src={img4} className="w-full h-[600px] rounded-md " />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide3" className="btn btn-circle" onClick={() => goToSlide(3)}>❮</a>
                        <a href="#slide5" className="btn btn-circle" onClick={() => goToSlide(1)}>❯</a>
                    </div>
                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40'>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide5" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <img src={img5} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide4" className="btn btn-circle" onClick={() => goToSlide(4)}>❮</a>
                        <a href="#slide6" className="btn btn-circle" onClick={() => goToSlide(2)}>❯</a>
                    </div>
                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40'>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide6" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <img src={img6} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 gap-x-5 right-5 bottom-10">
                        <a href="#slide5" className="btn btn-circle" onClick={() => goToSlide(5)}>❮</a>
                        <a href="#slide1" className="btn btn-circle" onClick={() => goToSlide(3)}>❯</a>
                    </div>
                    <div className="absolute rounded-md h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                       bottom-0   ">
                        <div className='text-white w-1/2 ml-16  mt-40'>
                            <h2 className='text-7xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p className='my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-x-10 font-bold'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-success ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
