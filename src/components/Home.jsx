//components
import Pizza from './Pizza';
import Combo from './Combo';
import Snacks from './Snacks';

export default function Home() {
    return (
        <div className="container">
            <Pizza/>
            <Combo/>
            <Snacks/>
        </div>        
    );
}