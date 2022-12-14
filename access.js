

import {colors, music} from "./map.js"

let skin = document.getElementById('pfp')
let refresh = document.getElementById('refreshBut')
let city = document.getElementById('city')
let name = document.getElementById('nameEl')
let age = document.getElementById('ageEl')
let color = document.getElementById("color")
let genre = document.getElementById('genre')

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET','http://www.filltext.com/?rows=1&name={firstName}~{lastName}&age={numberRange|10,60}&location={addressObject}&favoriteColor={number|9}&favoriteGenre={number|10}&skinColor={numberRange|1,20}&pretty=true')
ourRequest.onload = function(){
    renderPerson(ourRequest)
}

ourRequest.send();

function renderPerson(request){
    let ourData = JSON.parse(request.responseText)
    name.innerText += " " + ourData[0].name
    age.innerText += " " + ourData[0].age
    color.innerText += " " + colors.get(ourData[0].favoriteColor) 
    genre.innerText += " " + music.get(ourData[0].favoriteGenre)
    city.innerText += ` ${ourData[0].location.streetAddress}, ${ourData[0].location.city}, ${ourData[0].location.state}`
    skin.src = `Skintones/Skintones[${ourData[0].skinColor}].png`
}

refresh.addEventListener('click',function(){
    let tempReq = new XMLHttpRequest
    tempReq.open('GET','http://www.filltext.com/?rows=1&name={firstName}~{lastName}&age={numberRange|10,60}&location={addressObject}&favoriteColor={number|9}&favoriteGenre={number|10}&skinColor={numberRange|1,20}&pretty=true')
    tempReq.onload = function(){
        renderPerson(tempReq)
    }
    name.innerText = "Name:     "
    age.innerText = "Age:     "
    color.innerText = "Favorite Color:     " 
    genre.innerText = "Favorite Music Genre:     "
    city.innerText = "Location:     "
    tempReq.send();
})