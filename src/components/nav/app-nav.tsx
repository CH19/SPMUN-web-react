import { FiAlignJustify, FiX } from "react-icons/fi";
import AppOptions from "./app-options";
import AppLogo from "./appLogo";
import Carrousel from "./carrousel";
import { Option } from "../../types/Data";
export default function AppNav(){
  const toogleClass = ()=> {
    document.querySelector('.options')?.classList.toggle('active');
  }
  const serives: Option[] = [
        {
          text: 'Quienes Somos',
          link: '#'
        },
        {
          text: 'VI edicion',
          link: '#'
        },
        {
          text: 'Inscripcciones',
          link: '#'
        },
        {
          text: 'Guias',
          link: '#'
        },
        {
          text: 'Bilioteca',
          link: '#'
        },
    
      ]
    return (
        <>
        <div className="nav">
      <nav className="nav-mobile">
        <AppLogo />
        <article style={{cursor: 'pointer'}} onClick={()=> toogleClass()}>
        <FiAlignJustify />
        </article>
        <div className="options">
        <AppOptions options={serives} optionsUl>
        <article style={{cursor: 'pointer'}} onClick={()=> toogleClass()}>
          <FiX />
        </article>
        </AppOptions>
        </div>
      </nav>
      <nav className="nav-web">
        <AppLogo />
        <AppOptions options={serives} optionsUl ></AppOptions>
      </nav>
    </div>
    <Carrousel />
        </>
    )
}