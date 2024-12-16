import Products from './Products';
import Equipment from '../components/Equipment';
// import Hero from '../components/Hero';
import Trainers from '../components/Trainers';
import Videos from '../components/Videos';
import Intro from './Intro';

export default function Home() {
  return (
    <div>
    {/* Hero Section */}

    {/* <Hero/> */}
        {/* Intro Section */}

    <Intro/>

    {/* Gym Equipment Showcase */}
 
    <Equipment/>

    {/* Gym Trainers */}
    
    <Trainers/>

    {/* Videos Section */}
    <Videos/>
    <Products/>
    </div>
  );
}