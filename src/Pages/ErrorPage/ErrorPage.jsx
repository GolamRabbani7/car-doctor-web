import Error from '../../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
            <div className="max-w-lg text-center">
              
                   <img className='h-auto' src={Error} alt="" />
              
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we {`couldn't`} find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</a>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;