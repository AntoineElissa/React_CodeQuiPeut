import './Filtre.css'



function Filtre() {


    const handleTriBp = () => {

        console.log("Fonction de tri");
    }


    const handleResetfiltre = () => {

        console.log("Reset des filtres");

    }

    return (

        <div className="Filtre">

             {/* Boutons  */}
            <div className="btns-filtre">
                <button onClick={handleTriBp} name="btn-Age" className="btn-filtre">Date</button>
                {/* <button onClick={TriBp} name="btn-Type" ClassName="btn-filtre">Type</button> */}
                <button onClick={handleTriBp} name="btn-Popularite" className="btn-filtre">Popularite</button>
                <button onClick={handleTriBp} name="btn-Dependances" className="btn-filtre">Dependances</button>
            </div>

            {/* Bouton reset */}
            <div className="btn-ResetFiltre">

                <button onClick={handleResetfiltre} name="btn-reset" className="btn-filtre">Reset</button>
        
            </div>
      
      </div>
    )
}


export default Filtre
