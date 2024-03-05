import React from "react";
import Navigation from "./ui/header/Navigation";
import Demo from "./ui/demo/Demo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./ui/search/Search";
import Description from "./ui/description/Description";
import SearchSection from "./ui/search/SearchSection";
import Footer from "./ui/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Description />
            <SearchSection />
            <Demo />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
