import { FiAlignJustify, FiX } from "react-icons/fi";
import AppOptions from "./app-options";
import AppLogo from "./appLogo";
import Carrousel from "./carrousel";
export default function AppNav(){
  const toogleClass = ()=> {
    document.querySelector('.options')?.classList.toggle('active');
  }
    return (
        <>
        <div className="nav">
      <nav className="nav-mobile">
        <AppLogo />
        <article style={{cursor: 'pointer'}} onClick={()=> toogleClass()}>
        <FiAlignJustify />
        </article>
        <div className="options">
        <AppOptions optionsUl>
        <article style={{cursor: 'pointer'}} onClick={()=> toogleClass()}>
          <FiX />
        </article>
        </AppOptions>
        </div>
      </nav>
      <nav className="nav-web">
        <AppLogo />
        <AppOptions optionsUl ></AppOptions>
      </nav>
    </div>
    <Carrousel />
        </>
    )
}