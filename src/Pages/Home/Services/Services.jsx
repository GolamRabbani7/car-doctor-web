import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="my-5 text-center ">
                <h3 className="text-2xl text-center font-bold text-[#FF3811]" >Services: {services.length}</h3>
                <h1 className=" lg:text-5xl text-4xl my-5  font-bold  ">Our Service Area</h1>
                <p className="text-[#737373] text-center font-medium ">The majority have suffered alteration in some form, by injected humour, or randomised words
                    <br /> which {`don't`} look even slightly believable. </p>
            </div>

            <div className="grid mt-16 lg:grid-cols-3  md:grid-cols-2 gap-14">
                {
                    services.map(service =>
                        <div key={service._id}>
                            <div className="card w-96 bg-base-100 shadow-xl
                            hover:scale-105 hover:rounded-2xl 
                            transition-transform duration-500  hover:border-y-2 hover:border-red-700
                            ">
                                <figure><img className="rounded-md h-[210px]" src={service.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <div className="flex justify-between">
                                        <p className=" text-xl font-semibold text-[#FF3811]">Price: {service.price} $</p>
                                        <button className="text-[#FF3811] hover:text-red-800 text-2xl"><FiArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="text-center my-14">
                <button className="btn btn-outline btn-error ">More Services <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default Services;