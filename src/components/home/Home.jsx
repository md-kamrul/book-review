import { useState } from "react";
import Books from "../books/Books";
import Hero from "../hero/Hero";

const Home = () => {

    const [showBookDetails, setShowBookDetails] = useState([]);
    const bookDetails = books => { 
        console.log("ok");
    }

    return (
        <div>
            <Hero></Hero>
            <Books bookDetails={bookDetails}></Books>
        </div>
    );
};

export default Home;