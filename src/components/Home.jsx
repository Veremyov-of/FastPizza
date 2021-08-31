//components
import Pizza from './Pizza';
import Combo from './Combo';
import Snacks from './Snacks';
import Desserts from './Desserts';
import Sauces from './Sauces';
import Beverages from './Beverages';
import Juices from './Juices';

import Slider from './Slider';


export default function Home() {
    return (
        <div className="container">
            <Slider/>
            <Pizza/>
            <Combo/>
            <Snacks/>
            <Desserts />
            <Sauces />
            <Beverages />
            <Juices />
        </div>        
    );
}