/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer){
    switch(timer){
        case 0:
            return "Lasagna is done.";
        case undefined:
            return "You forgot to set the timer.";    
    }
    return "Not done, please wait.";
}


/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 * 
 * export function yourFunction(...) {
 *   ...
 * }
 * @param {any} layers
 * @param {number} time
 */

export function preparationTime(layers,time){
    let prepTime = time ?? 2;
    return layers?.length * prepTime;
}

/**
 * @param {any[]} layers
 */
export function quantities(layers){
    return {
        'noodles':layers?.filter(element => element == 'noodles').length * 50,
        'sauce':layers?.filter((element)=>element == 'sauce').length * 0.2,
    }
}

/**
 * @param {string | any[]} friendsList
 * @param {any[]} myList
 */
export function addSecretIngredient(friendsList,myList){
    let lastItem = friendsList[friendsList.length - 1];
    myList.push(lastItem);
}

/**
 * @param {any} recipe
 * @param {any} scale
 */
export function scaleRecipe(recipe,scale){
    let finalScale = (scale ?? 1) * 0.5;
    const newObject = {};
    for(let key in recipe){
        newObject[key] = recipe[key] * finalScale;
    }
    console.log(newObject);
    return newObject;
}