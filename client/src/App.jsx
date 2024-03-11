import Banner from "./components/Banner";
import PriceData from "./components/PriceData";
import RefreshOptions from "./components/RefreshOptions";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
    return <div>
        <RefreshOptions/>
        <Banner/>
        <SearchBar/>
        <PriceData/>
        <Footer/>
    </div>
}
export default App;