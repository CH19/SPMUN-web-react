// componente con las diversas opcciones a elegir en el nav etc 
import { Option } from "../../types/Data";
import {Link} from 'react-scroll'
interface OptionsProps {
    optionsUl?: boolean,
    children?: string | JSX.Element
}
export default function AppOptions(props: OptionsProps){
    const options: Option[] = [
        {
          text: 'Nosotros',
          link: 'somos'
        },
        {
          text: 'VI edicion',
          link: 'comites'
        },
        {
          text: 'Inscripcciones',
          link: 'inscripcciones'
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
    const { optionsUl, children} = props;
    const [...opciones] = options;
    const opccionesUl = optionsUl;
    return (
        <>
        <ul className={`${opccionesUl ? 'options-ul' : ''}`}>
            {opciones.map(option => {return (<>
                        <li>
                            <button onClick={()=> {
                                window.innerWidth < 600 ? document.querySelector('.options')?.classList.toggle('active'): '';

}}>
                           <Link  
                        to={option.link} 
                        spy={true} 
                        smooth={true} 
                        offset={100} 
                        duration={1000}>{option.text}</Link>
                            </button>
                        </li>
                    </>)
                })
            }
        </ul>
        {children ? children : ''}
        </>
    )
}