import team from '../../../../assets/icons/group.svg'
import check from '../../../../assets/icons/check.svg'
import support from '../../../../assets/icons/support.svg'
import Equipment from '../../../../assets/icons/Equipment.svg'
import deliveryt from '../../../../assets/icons/deliveryt.svg'
import clock from '../../../../assets/icons/clock.svg'
const ChooseUs = () => {
    return (
        <div>
            <div className="my-5 text-center ">
                <h3 className="text-2xl text-center font-bold text-[#FF3811]" >Core Features</h3>
                <h1 className="  lg:text-5xl text-4xl my-5  font-bold  ">Why Choose Us</h1>
                <p className="text-[#737373] text-center font-medium ">The majority have suffered alteration in some form, by injected humour, or randomised words
                    <br /> which {`don't`} look even slightly believable. </p>
            </div>


            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2'>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 ' src={team} alt="team" />
                    <p className='font-medium ml-3 '>Expert Team</p>
                </div>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 ' src={check} alt="team" />
                    <p className='font-medium '>100% Guranty</p>
                </div>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 text-red-600 rounded-full bg-red-400' src={clock} alt="team" />
                    <p className='font-medium '>Timely {` Clock's`}</p>
                </div>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 ' src={support} alt="team" />
                    <p className='font-medium '>24/7 Support</p>
                </div>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 ' src={Equipment} alt="team" />
                    <p className='font-medium '>Best Equipment</p>
                </div>
                <div className='px-12 py-10   rounded-xl hover:scale-95 transform transition-transform duration-500 '>
                    <img className='mx-5 ' src={deliveryt} alt="team" />
                    <p className='font-medium '>Timely Delivery</p>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;