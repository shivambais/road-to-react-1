let searchRecipeFun= async (url) =>{
    
    try{
 
     let res= await fetch(url);
 
     let data= await res.json();
 
     let reqData= data.meals;
 
    //  console.log(data.meals[0])
    //  console.log(data.meals)
     return reqData;
    }
 
    catch(err){
     console.log("error: ",err);
    }
 }


 let appendData= (reqData,id) =>{


    document.getElementById(id).innerHTML= null;
    reqData.forEach((data)=>{
        // console.log(data)
       

    let box= document.createElement("div");
    box.setAttribute("class","searchBoxClass")

    let image= document.createElement("img");
    image.src= data.strMealThumb;
    image.setAttribute("class","searchImageClass")

    let name= document.createElement("p");
    name.innerHTML =`<span id="heading">Meal: </span>` + data.strMeal;

    let category= document.createElement("p");
    category.innerHTML =`<span id="heading">Category: </span>` + data.strCategory;


    let cuisine= document.createElement("p");
    cuisine.innerHTML =`<span id="heading">Cuisine: </span>` + data.strArea;

    let tag= document.createElement("p");
    tag.innerHTML =`<span id="heading">Tag: </span>` + data.strTags;

    let ingredients = document.createElement("p");
    ingredients.innerHTML =`<span id="heading">Ingredients: </span>` + data.strIngredient1 + ", " + data.strIngredient2 + ", " + data.strIngredient3;
    

    let desc= document.createElement("p");
    desc.innerHTML= `<span id="heading">Instructions: </span>` +  data.strInstructions;

    box.append(image,name,cuisine,category,tag,ingredients,desc)
    document.getElementById(id).append(box);
    })
}


export {searchRecipeFun,appendData}