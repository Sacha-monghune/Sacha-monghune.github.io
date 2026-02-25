import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Values } from '../components/Values';
import { Locations } from '../components/Locations';
import { HowItWorks } from '../components/HowItWorks';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Values />
      <Locations />
      <HowItWorks />
      <Contact />
    </>
  );
}