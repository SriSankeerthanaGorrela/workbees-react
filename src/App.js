import logo from './logo.svg';
import './App.css';
import Industries from './Industries'
import Circular from './Circular'
import Slogan from './components/Slogan';
import Header from './components/Header';
import Services from './components/Services';
import Appointment from './Appointment';
import ProductsSection from './ProductsSection1';
import Technology from './Technology';
import Certifications from './Certifications';
import Faq from './Faq';
import Workbees from './Workbees';

function App() {
  return (
    <div>
      <Header/>
      <Slogan/>
      <Services/>
    <Industries/>
    <Circular/>
    <ProductsSection/>
    <Technology/>
    <Certifications/>
    <Workbees/> 
    <Faq/>
    <Appointment/>
  
    
    </div>
  );
}

export default App;