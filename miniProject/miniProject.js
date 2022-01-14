
function numRandom(){
    num=Math.floor(Math.random()*100);
    return num;
}
const chooise=numRandom();
let guess=parseInt(prompt('Enter number bitwin 1-100:'));

let flag=true;
do{
    if(guess===chooise){
        flag=false;
        alert(chooise+' win win')
    }
    if(guess>chooise) guess=parseInt(prompt('The your number TO BIG Ree enter number bitwin 1-100:'));
    if(guess<chooise) guess=parseInt(prompt('The your number TO SMAL Ree enter number bitwin 1-100:'));
}while (flag);