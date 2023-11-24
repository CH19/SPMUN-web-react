import { fechaModelo } from "../../types/Data";
export default function Inscripcciones() {
    function diferenceDays(){
        const today = new Date();
        const diference = fechaModelo.getTime() - today.getTime();
        const totalDays = Math.floor(diference / (1000 * 60 * 60 * 24));
        return totalDays.toString();
    }
    return (<>
        <div className="inscripcciones" id="inscripcciones">
        <h4>Faltan <strong className="days">{diferenceDays()}</strong> días para SPMUN VI</h4>
        <p>Si quieres inscribir a tu delegacion o delegar de forma independiente</p>
        <button><a href="">Inscribete Aqui</a></button>
        </div>
    </>)
}