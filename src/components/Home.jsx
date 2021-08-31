//components
import Pizza from './Pizza';
import Combo from './Combo';
import Snacks from './Snacks';
import Desserts from './Desserts';
import Sauces from './Sauces';
import Beverages from './Beverages';

export default function Home() {
    return (
        <div className="container">
            <Pizza/>
            <Combo/>
            <Snacks/>
            <Desserts />
            <Sauces />
            <Beverages />
        </div>        
    );
}