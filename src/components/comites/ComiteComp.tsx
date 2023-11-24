import { Comite } from "../../types/Data"
interface ComiteProps{
    dataComite: Comite
    index?: number
}
export default function ComiteComp(props: ComiteProps){
    const {dataComite} = props;
    const comitesOriginal = dataComite;
    console.log(comitesOriginal.img)
    return(<>
        <div data-aos="fade-up-right" className="proudct product1">
          <figure><img src={comitesOriginal.img.trim()} alt={`${comitesOriginal.name} image`} /></figure>
        <div className="produc-description">
        <h3>{comitesOriginal.name}</h3>
       <p onDoubleClick={(event)=> {
        // se coloca el as para que el event.target se comporte como un element html 
        const target = event.target as HTMLElement;
        if(target){
            target.classList.toggle('inactiveText');
        }

    }} className={window.innerWidth < 600 ? 'inactiveText' : '' }>{comitesOriginal.description.split('.').join('\n')}</p>
    <button>{`Ver Matrices ${comitesOriginal.name.split(' ', 2).join(' ').trim()}`}</button>
        </div>
        </div>
    
    </>)
}

