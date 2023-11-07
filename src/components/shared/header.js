import estilos from "./header.module.css";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import Link from './link';

function Header() {
  return (
    <header className={estilos.header}>
        <div className={estilos.contenedor}>
            <LogoSVG className={estilos.logo}/>
            <a className={estilos.titulo} href="/">Metas App</a>
        </div>
                
        <nav>
          
          <Link 
              href="/perfil" 
              Icono={PerfilSVG}>
              {/* <NuevaSVG className='icono'/> */} 
          </Link>
           
        </nav>
    </header>
  );
}

export default Header;
