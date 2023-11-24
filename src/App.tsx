import AppNav from './components/nav/app-nav';
import Somos from './components/Ediciones/Somos';
import Comites from './components/comites/comites';
import Inscripcciones from './components/Inscripcciones/Inscripcciones';
import { Staff } from './components/Staff/staff';
export default function App() {
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
        <footer  data-aos="zoom-in" className="footer">
          <ul>
            <li><button><a href="">Home</a></button></li>
            <li><button><a href="">Services</a></button></li>
            <li><button><a href="">Our Works</a></button></li>
            <li><button><a href="">Clients</a></button></li>
            <li><button><a href="">Contact</a></button></li>
          </ul>
          <div className="social-media">
            <h4>Eddie</h4>
          <div className="icons">
            {/* {/* <ion-icon name="logo-instagram"></ion-icon> */}
            {/* {/* <ion-icon name="logo-linkedin"></ion-icon> */} 
            {/* {/* <ion-icon name="logo-twitter"></ion-icon> */} 
          </div>
          </div>
          <form action="" className="emotion-contact">
            <label htmlFor="emotion-input">Want us to contact you</label>
            <div>
              <input type="email" required id="emotion-input" placeholder="Email" />
              <input type="submit" value="Join" />

          </div>
          </form>
          <span className="creator">Created By <a href="https://github.com/CH19/">CH19</a> - <a href="devchallenges.io">devchallenges.io</a></span>
        </footer>
      </div>
    </>
  )
}

