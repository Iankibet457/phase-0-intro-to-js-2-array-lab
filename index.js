// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)

}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)

}
function appendCat(name){
 let cats2=[...cats,name]
 return cats2
    
}
function prependCat(name){
    let cats3 = [name,...cats]
    
    return cats3
}
function removeLastCat(ct =[...cats]){
    
    [ct.pop()];
    return ct;
    
    
}
function removeFirstCat(){
    let cats4 = [...cats]
    
    cats4.shift()
    return cats4
}