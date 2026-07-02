import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import About from '../components/About.jsx';
import QuoteDivider from '../components/QuoteDivider.jsx';
import Commission from '../components/Commission.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <QuoteDivider />
      <Commission />
      <Contact />
      <Footer />
    </>
  );
}
