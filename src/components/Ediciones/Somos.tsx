import Edicion from "./Edicion"
import {DataQuienesSomos} from '../../types/comites';
import { Ediciones } from "../../types/Data";
export default function Somos(){
    const [...data] : Ediciones[] = DataQuienesSomos
    return (<>
               <div className="services" id="somos">
      <div className="services-container">
          {data.map(element => <Edicion data={element}  />)}
      </div>
    </div>


    
    </>)
}