import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms';


function App() {

  const [colaboradores,  setColaboradores]  = useState ([]);

  const aoNovoColaboradorAdc = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador
    ])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms h2="Preencha os dados para criar o card"  
        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdc(colaborador)}
      />    
      </div>
  );
}

export default App;
