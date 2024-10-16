/* Create a business name generator by combining list of adjectives and shop name and another word
// without using array
Adjectives List:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let rand = Math.random()
let first, second, third
// 0 0.33 0.6 1

// First word
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand >=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

// Second word
let rand2 = Math.random()
if(rand2<0.33){
    second = "Engine"
}
else if(rand2<0.66 && rand2 >=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}

// Third word
let rand3 = Math.random()
if(rand3<0.33){
    third = "Bros"
}
else if(rand3<0.66 && rand3 >=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(first, second, third) //sometime Fire Garments Limited