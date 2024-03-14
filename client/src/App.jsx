import Banner from "./components/Banner";
import PriceData from "./components/PriceData";
import RefreshOptions from "./components/RefreshOptions";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import MonthlyCalls from "./components/MonthlyCalls";

const App = () => {
    return <div>
        <MonthlyCalls/>
        <RefreshOptions/>
        <Banner/>
        <SearchBar/>
        <PriceData/>
        <Footer/>
    </div>
}
export default App;