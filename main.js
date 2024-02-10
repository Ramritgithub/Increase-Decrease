var score=0;
function increase(){
    score=score+100;
    document.getElementById("box").textContent=score;
    
}
function decrease(){
    score=score-100;
    document.getElementById("box").textContent=score;
}