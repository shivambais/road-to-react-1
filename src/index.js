import {searchRecipeFun,appendData} from "../required/support.js"

import "../styles/index.css"

let findMeal = async ()=>{
    let reqFood = document.getElementById("searchInput").value;
 
    let url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${reqFood}`;
 
    let res= await searchRecipeFun(url);
 
    appendData(res,"appendRecipe");
 }
 


 document.getElementById("searchInput").addEventListener("input", findMeal);
