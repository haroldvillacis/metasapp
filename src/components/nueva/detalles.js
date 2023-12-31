import estilos from "./detalles.module.css";

function Detalles() {
    const opcionesDeFrecuencia = ["día", "semana", "mes", "año"];
    const iconos = ["🏃", "💻", "📚", "🏞️", "🎇"];

    return (  
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input 
                        className="input"
                        placeholder="ej. 52 caminatas">
                    </input>
                </label>
                <label className="label">
                    ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number" ></input>
                        <select className="input">
                            {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuántas veces deseas completar esta meta?
                    <input className="input" type="number"></input>
                </label>
                <label className="label">
                    ¿Tienes una fecha límite?
                    <input className="input" type="date"></input>
                </label>
                <label className="label">
                    ¿Cuántas veces has completado esta meta?
                    <input className="input" type="number"></input>
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select className="input">
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;