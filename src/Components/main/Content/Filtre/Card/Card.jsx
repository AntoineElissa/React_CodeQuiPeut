import './Card.css'

function Card({frameworks}) {

  

    return(

        frameworks.map((item, index) => {

            const {name, picture, desc, date, popularite, dependances} = item;
            console.log(name);

            return(

            <figure className = "card"  key={index}>

                    <img alt= {name} src={picture}></img>
                    <h2 className="titre-card">{name}</h2>
                    <span className="desc-card">{desc}</span>

                    <div class="props-card">
                        <div class="date"> date
                        <span class="date-card"> {date} </span>
                        </div>
                        <div class="popularite"> popularite
                        <span class="popularite-card"> {popularite} % </span>
                        </div>
                        <div class="dependances"> dependances
                        <span class="dependances-card"> {dependances} </span>
                        </div>
                    </div>

                </figure>

            );
        })

    );
    }                

    




export default Card

