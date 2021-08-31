//components
import Pizza from './Pizza';
import Combo from './Combo';
import Snacks from './Snacks';
import Desserts from './Desserts';

export default function Home() {
    return (
        <div className="container">
            <Pizza/>
            <Combo/>
            <Snacks/>
            <Desserts />
        </div>        
    );
}