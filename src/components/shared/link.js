import estilos from './link.module.css';

function Link({ Icono, text, href }) { //en lugar de pasar una propiedad children , pasa un componente Icono
    return (
        <a href={href} className={estilos.link}>
            <Icono className={estilos.icono}/>
            {text && <span className={estilos.texto}>{text}</span>}
        </a>
    );
}

export default Link;