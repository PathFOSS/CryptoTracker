import Banner from "./components/Banner";
import PriceData from "./components/PriceData";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import MonthlyCalls from "./components/MonthlyCalls";

const App = () => {
    return <div>
        <MonthlyCalls/>
        <Banner/>
        <SearchBar/>
        <PriceData/>
        <Footer/>
    </div>
}
export default App;