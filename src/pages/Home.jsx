import AIFeatures from "../components/home/AIFeatures";
import Benefits from "../components/home/Benefits";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import SkinToneShowcase from "../components/home/SkinToneShowcase";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
     
      <Hero />
      <HowItWorks />
      <AIFeatures />
      <SkinToneShowcase />
      <Benefits />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;