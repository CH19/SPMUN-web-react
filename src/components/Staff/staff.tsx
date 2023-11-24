import { StaffImages } from "../../types/comites"
export function Staff() {
    const [...vari]  = StaffImages

return (<>
        <div data-aos="flip-up" className="meetTeam">
        <div className="meetTeam-message">
          <h5>SPMUN staff V edición</h5>
          <h2>Conoce a nuestro Staff</h2>
          <p>Conoce el staff que hizo posible ediciones anteriores de SPMUN y disfrutalo</p>  
        </div>
        <div className="meetTeam-team">
          <figure className="person1">
    <img src={vari[2].link} alt="" />
          </figure>
          <figure className="person2">
            <img src={vari[1].link} alt="" />
          </figure>
          <figure className="person3">
            <img src={vari[0].link} alt="" />
          </figure>
        </div>
      </div>
    </>)  
} 