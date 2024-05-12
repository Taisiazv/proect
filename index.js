let topicNode = document.querySelector(`#topic`);
let bodyNode = document.querySelector(`#body`);
let upNode = document.querySelector(`#up`);
let footerNode = document.querySelector(`#footer`);
let hh2Node = document.querySelector(`#hh2`);

let isDark = false;


topicNode.addEventListener(`click`, function(){
    isDark = !isDark;
    if( isDark == false){
        hh2Node.innerHTML = `EXEED в наличии`;
    }else{
        hh2Node.innerHTML = `EXEED in stock`;
    }
    bodyNode.classList.toggle(`dark`);
    bodyNode.classList.add(`transition`);
    upNode.classList.add(`transition`);
    footerNode.classList.add(`transition`);
    hh2Node.classList.add(`transition`);
    upNode.classList.toggle(`together`);
    footerNode.classList.toggle(`together`);
    hh2Node.classList.toggle(`title`);
});




