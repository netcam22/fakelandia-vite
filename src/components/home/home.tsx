import logo from './../../assets/images/logo.png';
import { MISDEMEANOUR_VIEWS, MisdemeanourCountType } from '../../types/misdemeanour_client_types';
import FlipCard from './flip-card';
import { useContext } from 'react';
import { MisdemeanourContext } from '../misdemeanours/misdemeanour-data-wrapper';
import useCountMisdemeanours from '../../hooks/use_count_misdemeanours';

const Home:React.FC = () => { 

const [misdemeanourData] =  useContext(MisdemeanourContext);

const misdemeanourTotals: MisdemeanourCountType = useCountMisdemeanours(misdemeanourData);

const date = new Date();
const dateString = date.toDateString();
return (
    <>
    <h1 className = "page__title">Home</h1>
    <p className = "page__text">Welcome to the home of the Justice Department of Fakelandia.</p>
    <p className = "page__text">Here you can browse a list of recent misdemeanours committed
        by our citizens, or you can confess to your own misdemeanour.
    </p>
    <h2 className = "page__sub-title">Misdemeanours reported on {dateString}</h2>
    <section className = "grid-container">

        {misdemeanourTotals && Object.entries(MISDEMEANOUR_VIEWS).map(([key, value], index) => 
        <FlipCard title={value.desc} alt={`Picture of ${value.desc} misdemeanour`} 
        icon ={value.icon} image={logo} key={index.toString()} misdemeanourType ={key} 
        count={misdemeanourTotals[key]} />
        )}

    </section>
    </>
)
}
export default Home;