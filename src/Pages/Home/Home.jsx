import About from "./About/About";
import Banner from "./Banner/Banner";
import BlackSection from "./BlackSection/BlackSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import CustomerSay from "./CustomerSay/CustomerSay";
import Products from "./Products/Products";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <BlackSection></BlackSection>
            <Products></Products>
            <ChooseUs></ChooseUs>
            <CustomerSay></CustomerSay>
        </div>
    );
};

export default Home;