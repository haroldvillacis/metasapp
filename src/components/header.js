import "./header.css";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Perfil } from "../img/perfil.svg";

function Header() {
  return (
    <div className="header">
        <div className="contenedor">
            <Logo className="logo"/>
            <a className="titulo" href="/">Metas App</a>
        </div>
                
        <nav>
            <a href="/perfil" className="vinculo">
               <Perfil className="icono"/> 
            </a>
        </nav>
    </div>
  );
}

export default Header;
