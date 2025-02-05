
import './App.css';
import Industries from './Industries'
import Circular from './Circular'
import Slogan from './components/Slogan';
import Header from './components/Header';
import Technology1 from './components/Technology1';
import Appointment from './Appointment';
import Workbees from './Workbees';
import Faq from './Faq'
function App() {
  return (
    <div>
      <Header/>
      <Slogan/>
      <Technology1/>
    <Industries/>
    <Circular/>
    <Workbees/>
    <Faq/>
    <Appointment/>
    
    </div>
  );
}

export default App;