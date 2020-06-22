(function(){
    "use strict";

    //jQuery
    let $ = (x) => document.querySelector(x);

    let $form = $(".charactersForm");
    let $selection = $(".selectionCharacters");




    $form.addEventListener("submit", (evt) => {
        
        evt.preventDefault();


        getChar($selection.value)
        .then((infos) => {
            putOnDom(infos)
        })
        .catch((erro) => {
            console.log(erro);
        })
    
    })


    async function getChar(id) {

        let url = `https://swapi.co/api/people/${id}/`

        let promise = await fetch(url);
        
        if (!promise.ok) {
            throw new Error(`Wasn't possible get information from API "https://swapi.co/"`)
        }

        let response = await promise.json()

        return response;

    }


    let putOnDom = (infos) => {
        let divInTheDOM = $(".container")
    
        divInTheDOM.innerHTML = `

        <ul>
            <li>Name:
                <span>${infos.name}</span>
            </li>
            <li>Mass: 
                <span>${infos.mass}</span>
            </li>
            <li>Height:
                <span>${infos.height}</span>
            </li>
            <li>
                Birth Year:
                <span>${infos.birth_year}</span>
            </li>

            <li>Gender:
                <span>${infos.gender}</span>
            </li>
    
        </ul>
        
        `

    }

  
    

})()