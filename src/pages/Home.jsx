import AIFeatures from "../components/home/AIFeatures";
import Benefits from "../components/home/Benefits";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import SkinToneShowcase from "../components/home/SkinToneShowcase";
import Statistics from "../components/home/Statistics";


const Home = () => {
  return (
    <>
     
      <Hero />
      <HowItWorks />
      <AIFeatures />
      <SkinToneShowcase />
      <Benefits />
      <Statistics />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;