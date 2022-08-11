import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Header from './components/Header';
import Footer from './components/Footer';
import Alert from './components/Alert';
import img1 from './img/bella.jpg';
import img2 from './img/yuta.jpg'
import img3 from './img/winnie.jpg'

function App(){
  return(
    <div>
      <Header />  
      <Alert />
      <div className='container d-flex'>
          <Card title='Bella' description='Le gustan: Las ensaladas, los lentes de sol y salir de compras.' imagen={img1}/>
          <Card title='Yuta' description='Le gusta: Beber cerveza, los descuentos y cocinar.' imagen={img2}/>
          <Card title='Winnie' description='Le gustan: Los días lluviosos, el café americano y la cafetería de la esquina.' imagen={img3}/>
      </div>

      <Footer />

    </div>
);
  }





export default App;
