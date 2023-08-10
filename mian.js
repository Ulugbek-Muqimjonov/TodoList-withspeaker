const elBtn = document.querySelector(".site-header__btn");
const elList = document.querySelector(".hero__list");
const my_Array2 = [
    {
        title: "Ertalab turish",
        time:"6:00",
    }, 
]
function render(arr) {
    
    arr.forEach(function (item) {
        
        let elItem = document.createElement("li");
        elItem.classList.add("hero__item");
        elItem.textContent = item.title;
        
        let elTime = document.createElement("span");
        elTime.classList.add("hero__span");
        elTime.textContent = item.time;
        
        elItem.appendChild(elTime);
        elList.appendChild(elItem);
    });
    
}

render(my_Array2);

const record = new webkitSpeechRecognition();
record.lang = `en-GB`;
record.onstart = function() {
    console.log(`gapiring...`);
    elBtn.classList.add(`recording`);
}
record.onerror = function() {
    console.log(`xato boldiyu`);
}
record.onend = function() {
    console.log(`tuagdi`); 
    elBtn.classList.remove(`recording`);
}
elBtn.addEventListener(`click`, function() {
    record.start();
});

record.onresult = function (evt) {
    let myplan = evt.results[0][0].transcript;
    
    const new_date = new Date();
    const new_time = new_date.getHours();
    const new_minutes = new_date.getMinutes();
    const my_Array2 =  [   
        {
            title:myplan,
            time:`${new_time} : ${new_minutes}`,
        },
    ] 
    render(my_Array2)
}

