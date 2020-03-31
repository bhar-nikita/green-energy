const buttons = document.querySelectorAll('.btn');

const container = document.querySelector('.tab-box');

let ButtonsArray = [
    buttons[0],
    buttons[1],
    buttons[2]
];

// create array that will store the data
let containerValue = [
    {
        headingContent: "SOLAR POWER",
        bodyText: "Rooftop solar panels: It requires low maintenance with low electricity bills and is environment friendly. <br>Can be easily used during peak hours.",
        imgUrl: "./img/option_1.jpg",
	alt: "SOLAR POWER"
    },
    {
        headingContent: "GREEN BUILDINGS",
        bodyText: "Environmentally Responsible: They have low maintenance and operation cost. It is Energy efficient as it saves<br> electricity, hydro usage. Also, enhances indoor environmental quality.",
        imgUrl: "./img/option_2.jpg",
	imgAlt: "GREEN BUILDINGS"
    },
    {
        headingContent: "BIOMASS",
        imgUrl: "./img/option_3.jpg",
        bodyText: "Energy Efficient: It can be replenished after use and is abundant. It also reduces the<br> amount of carbon that is being released in the atmosphere. It is the most versatile form <br>of energy and can be converted into different fuel sources",
	imgAlt: "BIOMASS"
    }
];

function preloader() {
     const imagesPaths = [
        "./img/option_1.jpg",
        "./img/option_2.jpg",
        "./img/option_3.jpg"
     ];

     for (let arr = 0; arr < imagesPaths.length; arr++) {
        buttons[arr].style.backgroundImage = "url("+imagesPaths[arr]+")";
     }

     buttons[0].id="active";

     container.innerHTML = `
        <div class="head"><h2>${containerValue[0].headingContent}</h2></div>
        <div class="image">
            <img src="${containerValue[0].imgUrl}" alt="${containerValue[0].imgAlt}">
        </div>
        <div class="para">
            <p>${containerValue[0].bodyText}</p>
        </div>`;

     // Images ready to be used:
     console.log(`Preloaded images:\n\t${containerValue[0].imgUrl}\n\t${containerValue[1].imgUrl}\n\t${containerValue[2].imgUrl}`);
};
  
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
 function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = ButtonsArray.indexOf(clickedButton); 

        // remove currently present id="active"
        for (let arr = 0; arr<buttons.length; arr++){
            // claiming that current element in the loop containe attribute
            if(buttons[arr].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                buttons[arr].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    container.innerHTML = `
        <div class="head"><h2>${containerValue[index].headingContent}</h2></div>
        <div class="image">
            <img src="${containerValue[index].imgUrl}" alt="${containerValue[index].imgAlt}">
        </div>
        <div class="para">
            <p>${containerValue[index].bodyText}</p>
        </div>`;
}
// register your buttons for click event
for(let arr= 0; arr<buttons.length; arr++){ 
   buttons[arr].addEventListener('click', clickBtn);  
}

window.addEventListener("load", preloader);

