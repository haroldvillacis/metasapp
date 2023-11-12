import estilos from './main.module.css';
import Link from './link';
import { ReactComponent as ListaSVG } from '../../img/lista.svg'
import { ReactComponent as NuevaSVG } from '../../img/nueva.svg'


function Main({children}) {
    return (
        // no es necesario poner este div, solo queda <>
      <div className={estilos.main}> 
        <aside className={estilos.aside}>
          
          <Link 
            href="/lista" 
            text="Lista de Metas" 
            Icono={ListaSVG}> 
            {/* En lugar de pasar como un hijo, lo paso como propiedad
            <ListaSVG className='icono'/>  */}
          </Link>

          <Link 
            href="/crear" 
            text="Nueva Meta"
            Icono={NuevaSVG}>
            {/* <NuevaSVG className='icono'/> */} 
          </Link>

        </aside>
        <main className={estilos.main_content}>
            {children}
        </main>
      </div>
    );
  }
  
  export default Main;
  