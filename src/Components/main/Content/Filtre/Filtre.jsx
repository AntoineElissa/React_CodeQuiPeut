import './Filtre.css'



function Filtre({frameworks, filtres}) {


    const [filter, setFilters] = filtres;
    console.log("filtres " + filter);
    

    /* FILTRE DATE */
    const handleFiltreDate = () => {
        const filterFrameworks = frameworks.filter((framework) => {
          return framework.date > 2015;
        });
        setFilters(filterFrameworks);
      };

    /* FILTRE POPULARITE */
    const handleFiltrePop = () => {
        const filterFrameworks = frameworks.filter((framework) => {
          return framework.popularite > 15;
        });
        setFilters(filterFrameworks);
    }


    /* FILTRE DEPENDANCE */
    const handleFiltreDep = () => {
        const filterFrameworks = frameworks.filter((framework) => {
            return framework.dependances > 10000;
          });
          setFilters(filterFrameworks);
    }

    /*      ==> RESET <===      */
    const handleResetfiltre = () => {
        setFilters(frameworks)
    }


    return (

        <div className="Filtre">

             {/* Boutons  */}
            <div className="btns-filtre">
                <button onClick={handleFiltreDate} name="btn-Age" className="btn-filtre">Date</button>
                <button onClick={handleFiltrePop} name="btn-Popularite" className="btn-filtre">Popularite</button>
                <button onClick={handleFiltreDep} name="btn-Dependances" className="btn-filtre">Dependances</button>
            </div>


            {/* Bouton reset */}
            <div className="btns-filtre">
                <button onClick={handleResetfiltre} name="btn-reset" className="btn-filtre">Reset</button>
            </div>
                  
      </div>
    )
}


export default Filtre
