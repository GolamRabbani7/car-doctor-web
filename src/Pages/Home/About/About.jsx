import parson from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>

            <div className=" hero min-h-screen bg-base-200">
                <div className="  hero-content  gap-x-14 flex-col lg:flex-row">

                    <div className='relative '>
                        <img src={parson} className=" h-[450px] w-[460px] rounded-lg shadow-2xl" />
                        <img src={parts} className='absolute  h-[310px] top-44 left-40   border-2 bg-gray-400 p-2 rounded-xl w-[327px]' />

                    </div>
                    <div className='w-1/2 '>
                        <h1 className='text-[#FF3811] font-bold '>About</h1>
                        <h1 className="text-5xl my-7 font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn mt-8 btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;