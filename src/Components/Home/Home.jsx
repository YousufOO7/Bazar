import Carousel from "../Pages/Carousel/Carousel";
import Feature from "../Pages/Feature/Feature";
import FeaturedProduct from "../Pages/FeaturedProduct/FeaturedProduct";
import ReadyOrder from "../Pages/ReadyOrder/ReadyOrder";

const Home = () => {
    return (
        <div>
            <Carousel />
            <Feature />
            <ReadyOrder />
            <FeaturedProduct />
        </div>
    );
};

export default Home;