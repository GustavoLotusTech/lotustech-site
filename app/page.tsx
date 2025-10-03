import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OfferModal from "@/components/OfferModal";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
   <main>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Testimonials />
    <FAQ/>
    <ContactForm />
    <Footer />
    <OfferModal />
   </main>
  );
}
