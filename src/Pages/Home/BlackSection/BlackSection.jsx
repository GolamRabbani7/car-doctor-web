import timeTable from '../../../../assets/icons/black/timetable.svg'
import phone from '../../../../assets/icons/black/phone.svg'
import location from '../../../../assets/icons/black/location.svg'

const BlackSection = () => {
    return (
        <div className=" hover:scale-105 hover:rounded-2xl 
            transition-transform duration-1000
            bg-[#151515] md:flex  justify-around text-white rounded-md w-full px-20 py-28">
            <div className='flex gap-x-5 
                 hover:scale-95 hover:rounded-2xl 
                 transition-transform duration-300 '>
                <img src={timeTable} alt="" />
                <div>
                    <p className='font-medium'>We are open monday-friday</p>
                    <h2 className='text-xl font-extrabold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex gap-x-5 md:my-0 my-5
            hover:scale-95 hover:rounded-2xl 
            transition-transform duration-300 '>
                <img src={phone} alt="" />
                <div>
                    <p className='font-medium'>Have a question?</p>
                    <h2 className='text-xl font-extrabold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex gap-x-5 
            hover:scale-95 hover:rounded-2xl 
            transition-transform duration-300 '>
                <img src={location} alt="" />
                <div>
                    <p className='font-medium'>Need a repair? our address</p>
                    <h2 className='text-xl font-extrabold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default BlackSection;