import parson from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>

            <div className=" hero min-h-screen bg-base-200">
                <div className="  hero-content space-y-10 md:gap-x-14 flex-col-reverse lg:flex-row">

                    <div className='relative '>
                        <img src={parson} className=" h-[400px] lg:w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className='absolute lg:w-1/2 h-[300px] top-36 left-48   border-2 bg-gray-400 p-2 rounded-xl ' />

                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-[#FF3811] md:text-2xl  font-bold '>About</h1>
                        <h1 className="lg:text-5xl md:text-4xl text-2xl my-7 font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn mt-8 btn-secondary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;