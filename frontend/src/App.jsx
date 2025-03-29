import { useEffect, useState } from "react";
import API from "./api";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WearTheTrend from "./components/WearTheTrend";
import OffersSection from "./components/OffersSection";
import SharkTankBanner from "./components/SharkTankBanner";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MegaDropdown from "./components/MegaDropdown";

function App() {
    // const [products, setProducts] = useState([]); // State to store products

    // useEffect(() => {
    //     API.get("/products") // Make sure this endpoint exists in your backend
    //         .then((res) => setProducts(res.data)) // Store data in state
    //         .catch((err) => console.error(err));
    // }, []);

    return (
        <div>
            <Header />
            <MegaDropdown/>
            <Carousel/>
            <WearTheTrend/>
            <OffersSection/>
            <SharkTankBanner/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default App;
