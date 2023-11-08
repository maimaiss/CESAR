import * as React from "react";
import "./styles.css";
import CounterDisplay from "./components/CounterDisplay";

/**
  - Criar um componente CounterDisplay dentro da pasta components
  - O componente deve receber uma props "total"
  - O componente deve renderizar a div.counterDisplay e mostrar
  o valor do total recebido
  - Troque o a div.counterDisplay pela chamada do componente CounterDisplay

  Obs: Verifique a aba "Tests" e cheque se todos os testes 
  estão passando para validar sua atividade como concluída.
 */

export default function App() {
  const [total, setTotal] = React.useState(0);

  const handleAdd = () => setTotal((prevTotal) => prevTotal + 1);

  const handleRemove = () => setTotal((prevTotal) => prevTotal - 1);

  return (
    <div className="counter">
      <button
        disabled={total === 0}
        onClick={handleRemove}
        className="counter-button"
      >
        -
      </button>
      <CounterDisplay total={total} />
      <button onClick={handleAdd} className="counter-button">
        +
      </button>
    </div>
  );
}
