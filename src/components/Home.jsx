//components
import Navbar from './Navbar';

import Pizza from './Pizza';
import Combo from './Combo';
import Snacks from './Snacks';
import Desserts from './Desserts';
import Sauces from './Sauces';
import Beverages from './Beverages';
import Juices from './Juices';
import About from "./About";

import Slider from './Slider';
export default function Home() {
    return (
        <div>
            <Navbar /> 
            <Slider/>
            <div className="container">
                <Pizza/>
                <Combo/>
                <Snacks/>
                <Desserts />
                <Sauces />
                <Beverages />
                <Juices />
                <About />
            </div>  
        </div>      
    );
}