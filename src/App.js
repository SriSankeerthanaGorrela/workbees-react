import logo from './logo.svg';
import './App.css';
import Industries from './Industries'
import Circular from './Circular'
import Slogan from './components/Slogan';
import Header from './components/Header';
import Technology1 from './components/Technology1';
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
      <Technology1/>
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