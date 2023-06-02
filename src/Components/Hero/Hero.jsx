
import {useState} from 'react'
import './Hero.css'

function Hero(){

    /* Déclaration d'un hook text useState */
    const [textInput, setTextInput] = useState("");

    /* Fonction au changement de l'input */
    const handleTextInput = (e) => {

            setTextInput(e.target.value);
        
    }

    return(

        <div className="Hero">

                <span className="hero-title"> 
                Hello, &nbsp;
                {textInput}
                </span>

                <input
                type="text"
                name="hero-text"
                className="hero-text-class"
                placeholder="Your name"
                onChange={handleTextInput}
                ></input>

        </div>



    )



}



export default Hero