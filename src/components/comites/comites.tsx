import { Comite } from "../../types/Data"
import { comites } from "../../types/comites"
import ComiteComp from "./ComiteComp"
export default function Comites(){
    const [...newComites]: Comite[] = comites
    return (<>
     <div className="desing" id="comites">
      <div className="desing-content">
        <h3>Comites</h3>
      </div>
      <div className="proudct-container">
        {newComites && newComites.map(e => <ComiteComp dataComite={e} />)}
      </div>
      {/* {/* {/* <button qui><a href="">see more <ion-icon name="arrow-forward-outline"></ion-icon></a></ion-icon></button> */}
      </div>
    
    </>)
}