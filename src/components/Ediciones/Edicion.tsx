import { Ediciones } from "../../types/Data"
interface PropsEdicones{
    data: Ediciones
    dataAos?: string,
    index?: number,
}
export default function Edicion(props: PropsEdicones){
    const {dataAos, data, index} = props
    const numberSlices = 20;
    if(data.description.length < 5){
      data.name = 'Haciendo historia',
      data.description = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis autem ex ducimus possimus debitis assumenda fugiat cupiditate ratione corrupti optio cumque, odit labore repudiandae hic sunt, ipsa consectetur? Officia'.split(' ', numberSlices).join(' ')
    }
    return (<>
        <div data-aos={`${dataAos ? dataAos : ''}`} className={`service ${index ? `service${index}` : ''}`}>
          <h3>{data.name}</h3>
        <p>{data.description}</p>
          <button>Get started</button>
        </div>    </>)
}