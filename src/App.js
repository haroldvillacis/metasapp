
import './App.css';
import Footer from './components/shared/footer';
import Header from './components/shared/header';
import Main from './components/shared/main';
import Lista from './components/lista/lista';
import Detalles from './components/nueva/detalles';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Main>
        {/*<Lista></Lista>*/}
        <Detalles></Detalles>
      </Main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
