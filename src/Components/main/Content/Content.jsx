import { Component } from "react"
import Card from "./Filtre/Card/Card.jsx"
import './Content.css'
import Filtre from "./Filtre/Filtre.jsx"
import {useState} from 'react'

function Content(){


    const tabFrameWork = [
        {
            name: "React" ,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            date: 2013,
            type: "front-end",
            popularite: 42.62,
            dependances: 96930
       },

       {
            name: "Vue" ,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            date: 201,
            type: "front-end",
            popularite: 18.82,
            dependances: 62176
        },

        {
            name: "Angular2+" ,
            picture: "https://blog.engineering.publicissapient.fr/wp-content/uploads/2015/12/AngularJS_logo.svg_-650x4011.png",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            date: 2016,
            type: "front-end",
            popularite: 22.96,
            dependances: 13001
       },

       {
            name: "AngularJs" ,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png?20161015100937",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            date: 2010,
            type: "front-end",
            popularite: 8.99,
            dependances: 4120
        },

        {
            name: "Svelte" ,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            date: 2016,
            type: "front-end",
            popularite: 2.75,
            dependances: 1036
    }]


    const [filter, setFilters] = useState(tabFrameWork);


    return (

        <div className="content-wrap">

            {/* Liste des cartes */}
            <div className="Cards-wrap">

                <Card frameworks = {filter}/>

            </div>

            {/* Zone de filtres */}
            <div className="Filters-wrap">
                <Filtre  frameworks = {tabFrameWork} filtres = {[filter, setFilters]}/>
            </div>

        </div>

    )

    


}

export default Content