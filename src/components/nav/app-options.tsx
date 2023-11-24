// componente con las diversas opcciones a elegir en el nav etc 
import { Option } from "../../types/Data";
interface OptionsProps {
    optionsUl?: boolean,
    children?: string | JSX.Element
}
export default function AppOptions(props: OptionsProps){
    const options: Option[] = [
        {
          text: 'Nosotros',
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
    const { optionsUl, children} = props;
    const [...opciones] = options;
    const opccionesUl = optionsUl;
    return (
        <>
        <ul className={`${opccionesUl ? 'options-ul' : ''}`}>
            {opciones.map(option => {return (<>
                        <li>
                            <button>
                            <a href={option.link}>
                                {option.text}
                            </a>
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