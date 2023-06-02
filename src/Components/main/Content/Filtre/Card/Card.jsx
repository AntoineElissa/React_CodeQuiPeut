import './Card.css'

function Card({frameworks}) {

    console.log(frameworks);

    return(

        frameworks.map((item, index) => {

            const {name, picture, desc} = item;
            console.log(name);
            return(

            <figure className = "card"  key={index}>

                    <img alt= {name} src={picture}></img>
                    <h2 className="titre-card">{name}</h2>
                    <span className="desc-card">{desc}</span>

                </figure>

            );
        })

    );
    }                

    




export default Card

