import { logoSp } from '../../types/Data'
export default function AppLogo(){
    return (
        <>
        <figure className="AppLogo">
        <a href={String(location)}>
            <img src={logoSp} alt="Logo de SPMUN" />
        </a>
        </figure>
        </>
    )
}