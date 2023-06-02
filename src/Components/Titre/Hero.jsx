
import {useState} from React


function Hero(){

    /* Déclaration d'un hook text useState */
    const [textInput, setTextInput] = useState("");

    /* Fonction au changement de l'input */
    const handleTextInput = (e) => {

            setTextInput(e.target.value);
        

    }

    return(

        <div className="Hero">

                <span className="Hero-title"> 
                Hello, 
                {textInput}
                </span>

                <input
                type="text"
                name="hero-text"
                className="hero-text-class"
                placeholder="Lord of Chicken"
                onChange={handleTextInput}
                ></input>

        </div>



    )



}



export default Hero