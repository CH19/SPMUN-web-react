// componente con las diversas opcciones a elegir en el nav etc 
import { Option } from "../../types/Data";
interface OptionsProps {
    options: Option[],
    optionsUl?: boolean,
    children?: string | JSX.Element
}
export default function AppOptions(props: OptionsProps){
    const {options, optionsUl, children} = props;
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