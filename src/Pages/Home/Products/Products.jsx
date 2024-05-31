import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('produces.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="my-32 text-center ">
                <h3 className="text-2xl text-center font-bold text-[#FF3811]" >Popular Products :{products.length} </h3>
                <h1 className=" lg:text-5xl text-4xl my-5  font-bold  ">Browse Our Products</h1>
                <p className="text-[#737373] text-center font-medium ">The majority have suffered alteration in some form, by injected humour, or randomised words
                    <br /> which {`don't`} look even slightly believable. </p>
            </div>

            <div className="grid mt-16 lg:grid-cols-3  md:grid-cols-2 gap-14">
                {
                    products.map(product => <div key={product.id}>
                        <div className="card w-96 bg-base-100  hover:scale-105 hover:rounded-2xl 
                         transition-transform duration-300  border-x-2 border-red-700 shadow-xl">
                            <figure className="px-5 pt-5">
                                <img  src={product.img} alt="products" className=" h-[210px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                            <div className="rating mt-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            <h2 className="card-title">{product.title}</h2>
                                    <div className="flex justify-between">
                                        <p className=" text-xl font-semibold text-[#FF3811] ">Price: {product.price} $</p>
                                    </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>


            <div className="text-center my-14">
                <button className="btn btn-outline btn-error ">More Products <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default Products;