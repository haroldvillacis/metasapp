function Main({children}) {
    return (
        // no es necesario poner este div, solo queda <>
      <> 
        <sidenav>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
        </sidenav>
        <main>
            {children}
        </main>
      </>
    );
  }
  
  export default Main;
  