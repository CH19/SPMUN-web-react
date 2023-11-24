import AppNav from './components/nav/app-nav';
import Somos from './components/Ediciones/Somos';
import Comites from './components/comites/comites';
import Inscripcciones from './components/Inscripcciones/Inscripcciones';
import { Staff } from './components/Staff/staff';
import Footer from './components/Footer/footer';
import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
export default function App() {
  useEffect(()=>{
    AOS.init({
      delay: 300,
      duration: 1000,
      easing: 'ease-in-out-quart',
    })
  }, [])
  return (
    <>
    <AppNav />
    {/* Aqui debe de ir el componente del carrousel  */}
    <Somos />
    <Comites />
    <Inscripcciones />
    <Staff></Staff>
  
      <div data-aos="flip-down" className="message">
        <h3>"Fast and  outsanding results. Edie understands their customer's needs. They have a young and talented team."</h3>
        <div className="message-porfile">
          <figure><img src="./src/assets/edie-homepage-master/person4.png" alt="" /></figure>
          <div>
            <h2>Carlos Tran</h2>
            <p>The decorate Gatsby</p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <Footer />
    </>
  )
}

