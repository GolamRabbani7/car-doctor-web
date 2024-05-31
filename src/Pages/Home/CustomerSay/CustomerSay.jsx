import customer1 from '../../../../assets/images/Customer/customer1.png'
import customer2 from '../../../../assets/images/Customer/customer2.png'
import quote from '../../../../assets/icons/quote.svg'
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';

const CustomerSay = () => {
    return (
        <div>
            <div className="my-5 text-center mt-32 ">
                <h3 className="text-2xl text-center font-bold text-[#FF3811]" >Testimonial</h3>
                <h1 className="  lg:text-5xl text-4xl my-5  font-bold  ">What Customer Says</h1>
                <p className="text-[#737373] text-center font-medium ">The majority have suffered alteration in some form, by injected humour, or randomised words
                    <br /> which {`don't`} look even slightly believable. </p>
            </div>

            <section>
                <div className='my-14'>

                    <div className='flex justify-between items-center'>
                        <button className=" mr-9  btn btn-circle text-xl hover:bg-[#FF3811] btn-outline"> <FiArrowLeft /></button>
                        <div className='md:flex md:space-x-20'>
                            {/* customer1 */}
                            <div className=' md:mb-0 mb-28'>
                                <div className=' flex space-x-5'>
                                    <img src={customer1} alt="" />
                                    <div className='flex justify-between'>
                                        <div>
                                            <h4 className="text-[#444] font-bold text-2xl ">Awlad Hossain</h4>
                                            <p className="text-[#737373] font-semibold">Businessman</p>
                                        </div>
                                        <img className='w-12 ml-20 ' src={quote} alt="" />
                                    </div>

                                </div>
                                <p className='text-[#737373] mt-5 font-semibold'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which{` don't`} look even slightly believable. </p>
                                <div className="rating mt-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>


                            {/* customer2 */}
                            <div>
                                <div className=' flex space-x-5 '>
                                    <img src={customer2} alt="" />
                                    <div className='flex justify-between'>
                                        <div>
                                            <h4 className="text-[#444] font-bold text-2xl ">Hashib Hossain</h4>
                                            <p className="text-[#737373] font-semibold">Businessman</p>
                                        </div>
                                        <img className='w-12 ml-20 ' src={quote} alt="" />
                                    </div>

                                </div>
                                <p className='text-[#737373] mt-5 font-semibold'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which{` don't `}look even slightly believable. </p>
                                <div className="rating mt-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <button className=" ml-9 btn btn-circle text-xl hover:bg-[#FF3811] btn-outline"> <FiArrowRight /></button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default CustomerSay;