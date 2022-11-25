import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from "react-redux";
import store from './store';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsDetails from "./pages/NewsDetails";
import Page404 from "./pages/Page404";
import LatestNewsPage from "./pages/LatestNewsPage";
import SportsPage from "./pages/SportsPage";
import BusinessPage from "./pages/BusinessPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import LifeStylePage from "./pages/LifeStylePage";

function App() {
  return (
    <Provider store={store}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/news-details" exact element={<NewsDetails/>} />
            <Route path="/latest" exact element={<LatestNewsPage/>} />
            <Route path="/sports" exact element={<SportsPage/>} />
            <Route path="/business" exact element={<BusinessPage/>} />
            <Route path="/entertainment" exact element={<EntertainmentPage/>} />
            <Route path="/lifestyle" exact element={<LifeStylePage/>} />
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
        <Footer/>
    </Provider>
  );
}

export default App;
