
function numRandom(){
    num=Math.floor(Math.random()*100);
    return num;
}
const chooise=numRandom();
let hit=parseInt(prompt('Enter number bitwin 1-100:'));

let flag=true;
do{
    if(hit===chooise){
        flag=false;
        alert('win win')
    }
    if(hit>chooise) hit=parseInt(prompt('The your number TO BIG Ree enter number bitwin 1-100:'));
    if(hit<chooise) hit=parseInt(prompt('The your number TO SMAL Ree enter number bitwin 1-100:'));
}while (flag);