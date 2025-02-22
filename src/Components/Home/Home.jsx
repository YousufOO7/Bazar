import Carousel from "../Pages/Carousel/Carousel";
import Feature from "../Pages/Feature/Feature";
import FeaturedProduct from "../Pages/FeaturedProduct/FeaturedProduct";
import NewArrive from "../Pages/NewArrive/NewArrive";
import ReadyOrder from "../Pages/ReadyOrder/ReadyOrder";
import Texts from "../Pages/Texts/Texts";

const Home = () => {
    return (
        <div>
            <Carousel />
            <Feature />
            <ReadyOrder />
            <FeaturedProduct />
            <NewArrive />
            <Texts />
        </div>
    );
};

export default Home;