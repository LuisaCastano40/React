import { useState } from "react";
import img from './assets/counter.png'

export const Counter = () => {

    //siempre se pone setVariable a cambiar
    const [counter,setCounter] = useState(0);

    function increment() {
        setCounter(counter+1);
      }
    function decrement() {

        if(counter>0){
            setCounter (counter-1);
        } else {
            reset();
            alert("Este contador no sirve con números negativos");
        }
        
      }
    function reset() {
        setCounter (0);
      }

    return(
        <>
        <section className= "contenedor">
        <img src={img} className="image" alt="logo"/>
            <h1>Hooola, este es mi primer contador</h1>
            <h2>{counter}</h2>

            <article className="btns">
                <button className="btn" onClick={increment}>Aumentar +1</button>
                <button className="btn" onClick={decrement}>Disminuir -1</button>
                <button className="btn" onClick={reset}>Reestablecer</button> 
            </article>
        </section>
        </>
    );
};

export default Counter;