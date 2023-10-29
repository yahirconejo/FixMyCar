var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var largeLogo = document.getElementById("largeLogo");
var listNav = document.getElementById("listNav");
var searchNav = document.getElementsByClassName("searchNav");
var scopeNav = document.getElementsByClassName("scopeNav");
var handleNav = document.getElementsByClassName("handleNav");
var handleNav2 = document.getElementsByClassName("handleNav2");
var searchOverlay = document.getElementsByClassName("searchOverlay");
var searchbar = document.getElementsByClassName('searchbar');
var innerWheelSB1 = document.getElementsByClassName("innerWheelSB1");
var innerWheelSB2 = document.getElementsByClassName("innerWheelSB2");
var innerWheelSB3 = document.getElementsByClassName("innerWheelSB3");
var innerWheelSB4 = document.getElementsByClassName("innerWheelSB4");
var innerWheelSB5 = document.getElementsByClassName("innerWheelSB5");
var innerWheelSB6 = document.getElementsByClassName("innerWheelSB6");
var innerWheelSB7 = document.getElementsByClassName("innerWheelSB7");
var searchInput = document.getElementsByClassName("searchInput");
var smallLogo = document.getElementById("smallLogo");
var burgerNav = document.getElementById("burgerNav");
var burgerOverlay = document.getElementById("burgerOverlay");
var burgerListOverlay = document.getElementById("burgerListOverlay");
var searchBarOptions = document.getElementById("searchBarOptions");


// Nav bar -------------------------------------------------------------

let menuOpen = false;

searchNav[0].addEventListener('click', searchBarMenuOpen);

function searchBarMenuOpen(){
  if(!menuOpen){
    handleNav[0].classList.add('open');
    handleNav2[0].classList.add('open');
    scopeNav[0].classList.add("open")
    handleNav[0].style.transform= "rotate(45deg)";
    handleNav2[0].style.transform= "rotate(135deg)";
    searchOverlay[0].style.width= "100vw";
    searchOverlay[0].style.transition = "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)";
    setTimeout(() => {
      searchOverlay[0].style.transition = "none";
    }, 500);
    listNav.style.pointerEvents="none";
    listNav.style.opacity = "0";
    searchNav[0].style.right= "20px";
    burgerNav.style.pointerEvents = "none";
    burgerNav.style.opacity = "0";
    searchbar[0].classList.add('open');
    innerWheelSB1[0].classList.add('open');
    innerWheelSB2[0].classList.add('open');
    innerWheelSB3[0].classList.add('open');
    innerWheelSB4[0].classList.add('open');
    innerWheelSB5[0].classList.add('open');
    innerWheelSB6[0].classList.add('open');
    innerWheelSB7[0].classList.add('open');
    searchInput[0].classList.add('open');
    burgerNav.classList.add('open');

    // The search output box

    searchBarOptions.style.width = "63vw";
    searchBarOptions.style.padding = "0px 20px 20px 20px";
    searchBarOptions.style.transition = "margin .5s cubic-bezier(0.77,0.2,0.05,1.0), width .5s cubic-bezier(0.77,0.2,0.05,1.0), opacity .5s linear .2s";
    searchBarOptions.style.opacity = "1";

    menuOpen = true;
  } else {
    handleNav[0].classList.remove('open');
    handleNav2[0].classList.remove('open');
    scopeNav[0].classList.remove("open")
    handleNav[0].style.transform= "rotate(45deg)";
    handleNav2[0].style.transform= "rotate(45deg)";
    searchOverlay[0].style.width= "0vw";
    searchOverlay[0].style.transition = "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)";
    listNav.style.pointerEvents="auto";
    listNav.style.opacity = "1";
    burgerNav.style.pointerEvents = "auto";
    burgerNav.style.opacity = "1";
    searchbar[0].classList.remove('open');
    innerWheelSB1[0].classList.remove('open');
    innerWheelSB2[0].classList.remove('open');
    innerWheelSB3[0].classList.remove('open');
    innerWheelSB4[0].classList.remove('open');
    innerWheelSB5[0].classList.remove('open');
    innerWheelSB6[0].classList.remove('open');
    innerWheelSB7[0].classList.remove('open');
    searchInput[0].classList.remove("open");
    searchbar[0].classList.add('close');
    searchNav[0].style.pointerEvents= "none";
    setTimeout(function(){
      searchbar[0].classList.remove('close');
      searchNav[0].style.pointerEvents= "auto";
    }, 500);
    burgerNav.classList.remove("open")
    // The search Output box
    searchBarOptions.style.width = "0px";
    searchBarOptions.style.padding = "0px";
    searchBarOptions.style.transition = "margin .5s cubic-bezier(0.77,0.2,0.05,1.0), width .5s cubic-bezier(0.77,0.2,0.05,1.0), opacity .5s linear";
    searchBarOptions.style.opacity = "0";

    menuOpen = false;
    fitscreen();
  }
}
 
 
let menuOpen2 = false;
function menuOpen2Cheack(){
    if(!menuOpen2){
      burgerNav.classList.add("BNopen");
      burgerNav.style.right = "20px";
      searchNav[0].style.pointerEvents= "none";
      searchNav[0].style.opacity= "0";
      burgerOverlay.classList.add("BNopen");
      setTimeout(()=>{
        burgerOverlay.style.transition = "none";
      },500);
      burgerOverlay.style.transition = "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)";
      burgerListOverlay.classList.add("BNopen");
      menuOpen2 = true;
    }else{
      burgerNav.classList.remove('BNopen');
      searchNav[0].style.pointerEvents= "auto";
      searchNav[0].style.opacity= "1";
      burgerOverlay.classList.remove("BNopen");
      burgerOverlay.style.transition = "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)";
      burgerListOverlay.classList.remove("BNopen");
      menuOpen2 = false;
      fitscreen();
    }

}

 
  burgerNav.addEventListener("click", menuOpen2Cheack );



  function fitscreen(){
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    // window width checking thing
    if(windowWidth < 382){
        smallLogo.style.opacity = "0";
        largeLogo.style.display ="none";
        listNav.style.opacity= "0";
        listNav.style.pointerEvents= "none";
        if(menuOpen2 == true){
            burgerNav.style.right = "20px";
        }else{
            burgerNav.style.right = "calc(39% - 18px)";
        }
        if(menuOpen == false){
            searchNav[0].style.right = "calc(60% - 16px)";
            burgerNav.style.opacity = "1";
            burgerNav.style.pointerEvents = "auto";
        }
    }else if(windowWidth < 670){
        smallLogo.style.opacity = "1";
        largeLogo.style.display ="none";
        smallLogo.style.display = "";
        listNav.style.opacity= "0";
        listNav.style.pointerEvents= "none";
        if(menuOpen2 == true){
            burgerNav.style.right = "20px";
        }else{
            burgerNav.style.right = "";
        }
        if(menuOpen == false){
            searchNav[0].style.right = "100px";
            burgerNav.style.opacity = "1";
            burgerNav.style.pointerEvents = "auto";
        }
    }else{
        if(menuOpen == false){
            if(menuOpen2 == true){
                menuOpen2Cheack();
            }
            smallLogo.style.opacity = "1";
            largeLogo.style.display = "";
            smallLogo.style.display = "none";
            listNav.style.opacity= "1";
            listNav.style.pointerEvents= "auto";
            burgerNav.style.right = "";
            searchNav[0].style.right = "300px";
            burgerNav.style.opacity = "0";
            burgerNav.style.pointerEvents = "none";
        }else{
            largeLogo.style.display = "";
            smallLogo.style.display = "none";
        }
    }

    if(windowHeight < 400){
      burgerListOverlay.classList.add("smallopen");
      searchbar[0].style.marginTop = " 60px";
      searchBarOptions.style.marginTop = "180px";
      searchBarOptions.style.height = "calc(100vh - 180px - 60px)";
    }else{
      burgerListOverlay.classList.remove("smallopen");
      searchbar[0].style.marginTop = " 100px";
      searchBarOptions.style.marginTop = "220px";
      searchBarOptions.style.height = "calc(100vh - 220px - 60px)";
    }


}
  
  window.addEventListener('resize', fitscreen);
  fitscreen();


// Default Home Screen -------------------------------------------------------
  
  // gallery boxes -------------------------------------------------------------

  var galleryBoxes = document.getElementsByClassName("galleryBoxes");

  for(var eventLisGalBox = 0; eventLisGalBox < galleryBoxes.length; eventLisGalBox++){

    galleryBoxes[eventLisGalBox].addEventListener("mouseenter", function(galIn){
      for(var galleryCheackHeight = 0; galleryCheackHeight < galleryBoxes.length; galleryCheackHeight++){
        galleryBoxes[galleryCheackHeight].style.transition = " width .2s ease-in";
      }
      increaseGal(galIn.target);
    });

    galleryBoxes[eventLisGalBox].addEventListener("mouseleave", function(galOut){
      decreaseGal(galOut.target);
    });

  }

  function increaseGal(boxIncrease){

    var currentBox = boxIncrease;
    var currentBoxHeight = currentBox.getBoundingClientRect().height;
    
    
      currentBox.style.width = `calc( 100px + ${currentBoxHeight}px)`;
    


      var numOfNextToBoxes = boxNextToBox(currentBox).length;
      var divLengthOfNextToBoxes = 100 / numOfNextToBoxes;

      for(var o = 0; o < boxNextToBox(currentBox).length; o++){
        var loopBoxNextToBoxHeight = boxNextToBox(currentBox)[o].getBoundingClientRect().height;

        boxNextToBox(currentBox)[o].style.width = `calc( ${loopBoxNextToBoxHeight}px - ${divLengthOfNextToBoxes}px )`;
        
        boxNextToBox(currentBox)[o].getElementsByTagName("h2")[0].style.transition = "transform .1s linear";
        boxNextToBox(currentBox)[o].getElementsByClassName("galleryLogos")[0].style.transition = "opacity .1s linear";

        boxNextToBox(currentBox)[o].getElementsByTagName("h2")[0].style.transform = "rotate(90deg) translateY(-95%)";

        boxNextToBox(currentBox)[o].getElementsByClassName("galleryLogos")[0].style.opacity = "0";
      }
    
  }

  function decreaseGal(boxDecrease){

    var currentBox = boxDecrease;
    var currentBoxWidth = currentBox.getBoundingClientRect().width;
    var currentBoxHeight = currentBox.getBoundingClientRect().height;

    

    if(currentBoxWidth != currentBoxHeight){
      currentBox.style.width = "";

    


      for(var o = 0; o < galleryBoxes.length; o++){

        if(galleryBoxes[o].getBoundingClientRect().width != galleryBoxes[o].getBoundingClientRect().height){

          galleryBoxes[o].style.width = "";

        
          galleryBoxes[o].getElementsByTagName("h2")[0].style.transition = "transform .1s linear .2s";
          galleryBoxes[o].getElementsByClassName("galleryLogos")[0].style.transition = "opacity .1s linear .2s";

          galleryBoxes[o].getElementsByTagName("h2")[0].style.transform = "rotate(0deg) translateY(0px)";
          galleryBoxes[o].getElementsByClassName("galleryLogos")[0].style.opacity = "1";
        }
        
      }
    } 
  }


  function boxNextToBox(refrenceBox){

    boxesNextToRefrence = [];

    for(var l = 0; l < galleryBoxes.length; l++){
      var loopBoxY = galleryBoxes[l].getBoundingClientRect().y;
      var refrenceBoxY = refrenceBox.getBoundingClientRect().y;

      if(loopBoxY == refrenceBoxY && refrenceBox != galleryBoxes[l]){
        boxesNextToRefrence.push(galleryBoxes[l]);
      }
      
    }

    return boxesNextToRefrence;

  }



  window.addEventListener("resize", ()=>{
      for(var galleryCheackHeight = 0; galleryCheackHeight < galleryBoxes.length; galleryCheackHeight++){
        galleryBoxes[galleryCheackHeight].style.transition = "none";
      }
  });


  // Nagging arrow ------------------------------------------------------------



  var naggingArrow = document.getElementById("naggingArrow");
  var naggingArrowGone = false;
  window.addEventListener("scroll", ()=>{
    naggingArrowDisappearance();
    
  });

  naggingArrowDisappearance();


  function naggingArrowDisappearance(){

    var discribeGal = document.getElementById("discribeGallery");

    var naggingArrowY = naggingArrow.getBoundingClientRect().y;
    var discribeGalY = discribeGal.getBoundingClientRect().y - 80;

    if(naggingArrowY < discribeGalY && !naggingArrowGone){
      naggingArrow.style.transition = "opacity 0.5s ease-in";
      naggingArrow.style.opacity  = "1"
      
    }

    if(naggingArrowY >= discribeGalY){
      naggingArrow.style.opacity = "0";
      setTimeout(()=>{
        naggingArrow.style.display = "none";
      }, 500)
      naggingArrowGone = true;
    }
    
  }



// page screen --------------------

var barTitle = document.getElementById("barTitle");

let backButton = document.getElementById("backButton");

backButton.addEventListener("click", ()=>{

    location.reload();

    
})



// check weather a radio button has been selected

var whatsWrongContainer = document.getElementById("whatsWrongContainer");
var submitButton = document.getElementById("submitButton");
var radiobuttons = document.getElementsByName("radio");

whatsWrongContainer.addEventListener("click", whatsWrongContainerEventLis);

function whatsWrongContainerEventLis(){
  for( var radio of radiobuttons){
    if(radio.checked){
      submitButton.style.cursor = "pointer";
      submitButton.disabled = false;
      whatsWrongContainer.removeEventListener("click", whatsWrongContainerEventLis)
    }
  }
}


// After Next button pressed

submitButton.addEventListener("click", clickAnswers);



function clickAnswers(){
  
  // TitleBar word change animation ---------------------------------------
    

  document.getElementById("transpar").style.backgroundColor = "#403e3e";
  barTitle.children[0].children[1].classList.remove("writeCursorBlink");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      barTitle.children[0].children[1].classList.add("writeCursorBlink");
    });
  });

  setTimeout(()=>{
      hackWordDel(barTitle.children[0].children[0]);

      barTitle.children[0].children[0].addEventListener("custom:hackWordDel-EventFinished", clickAnswersFunction1);

      barTitle.children[0].children[0].addEventListener("custom:hackWordAdd-EventFinished", clickAnswersFunction2);
  }, 1000);

  // radio butons --------------------------------------------------------

  let radiobox = document.getElementsByClassName("checkWords");

  for(let i = 0; i < radiobox.length; i++){

    if (!radiobox[i].parentElement.children[0].checked){

        hackWordDel(radiobox[i]);
        radiobox[i].addEventListener("custom:hackWordDel-EventFinished", (e)=>{
              e.target.parentElement.remove();
        });

    }
  }

  // backButton -----------------------------------------------------------


  hackWordAdd(shuffleArray(backButton.children[0].innerHTML.split("")).join(""), backButton.children[0]);
  hackWordAdd(shuffleArray(backButton.children[0].innerHTML.split("")).join(""), backButton.children[1]);

  backButton.children[1].addEventListener("custom:hackWordAdd-EventFinished", clickAnswersFunction3);

  // submit Button ---------------------------------------------------------


  hackWordAdd( shuffleArray(submitButton.children[0].innerHTML.split("")).join(""), submitButton.children[0])
  submitButton.style.backgroundColor = "#03a5fc";
  submitButton.style.cursor = "wait";
  submitButton.disabled = true;


  // map Button ------------------------------------------------------------
  
  document.getElementById("mapButton").style.display = "flex";
  setTimeout(()=>{
    document.getElementById("mapButton").style.opacity = "1";
  }, 100);
  
  // answers -------------------------------------------------

    changePageScreenAnswers();
  

}

var WhatMightBeWrong = ["What might be wrong with your Brakes:", "What might be causeing your Oil problums:", "What might be wrong with your Coolant System:", "What might be wrong with your Tires:", "What might be causeing problems with your Ignition System:", "What might be wrong with your Electical System:", "What might be wrong with your Fuel System:", "What might be causing your Transmission issues:", "What might be wrong with your Exhaust System:", "What might be wrong with your Conditioning System:", "What might be wrong:", "What might be wrong:", "What might be wrong:", "What might be wrong:", "What might be wrong:"];

function clickAnswersFunction1(){
  hackWordAdd(WhatMightBeWrong[chosenBox],barTitle.children[0].children[0]);
}

function clickAnswersFunction2(){
  document.getElementById("transpar").style.backgroundColor = "transparent";

        // outputted Answers
        setTimeout(()=>{
          document.getElementById("whatsWrongOutputs").style.maxHeight = "10000px";
          setTimeout(()=>{
            for(let qw = 0; qw < document.getElementsByClassName("anAnswer").length; qw++){
              document.getElementsByClassName("anAnswer")[qw].style.opacity ="1";
              }

              // fix button
              hackWordAdd("back", submitButton.children[0]);
              submitButton.style.backgroundColor = "#03a5fc";
              submitButton.style.cursor = "pointer";
              submitButton.disabled = false;

              submitButton.removeEventListener("click", clickAnswers);

              submitButton.addEventListener("click", backQuestions);

          },500)
        }, 500);
}

function clickAnswersFunction3(){
  setTimeout(()=>{
    hackWordAdd("Home", backButton.children[0]);
    hackWordAdd("Home", backButton.children[1]);
  }, 200);
}

// back to the questions ---------------------------------------------

function backQuestions(){
  
              // remove unassesary things 

              barTitle.children[0].children[0].removeEventListener("custom:hackWordDel-EventFinished", clickAnswersFunction1);

              barTitle.children[0].children[0].removeEventListener("custom:hackWordAdd-EventFinished", clickAnswersFunction2);

              backButton.children[1].removeEventListener("custom:hackWordAdd-EventFinished", clickAnswersFunction3);


  // home buttons ------------------------------------------

  hackWordAdd("Back Home", backButton.children[0]);
  hackWordAdd("Back Home", backButton.children[1]);



  // Title bar word change -----------------------------------
  barTitle.children[0].children[1].classList.remove("writeCursorBlink");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      barTitle.children[0].children[1].classList.add("writeCursorBlink");
    });
  });
  document.getElementById("transpar").style.backgroundColor = "#403e3e";
  setTimeout(()=>{
    hackWordDel(barTitle.children[0].children[0]);
    barTitle.children[0].children[0].addEventListener("custom:hackWordDel-EventFinished", backQuestionsfunction1);
    barTitle.children[0].children[0].addEventListener("custom:hackWordAdd-EventFinished", backQuestionsfunction3);
  }, 1000);

  // button 

  submitButton.style.backgroundColor = "rgb(192, 37, 37)";
  submitButton.style.cursor = "wait";
  submitButton.disabled = true;
  
  hackWordAdd(shuffleArray(submitButton.children[0].innerHTML.split("")).join(""), submitButton.children[0]);


  // whats wrong inputs
    let WRInputs = document.getElementsByClassName("radioButton");

    hackWordDel(WRInputs[0].children[2]);

    WRInputs[0].children[2].addEventListener("custom:hackWordDel-EventFinished", backQuestionsfunction2);


  // whats wrong outputs
  let WROutputs = document.getElementsByClassName("anAnswer");

    for(let t = 0; t < WROutputs.length; t++){
      WROutputs[t].style.opacity = "0";
    }

        document.getElementById("whatsWrongOutputs").style.maxHeight = "18px";
        document.getElementById("whatsWrongOutputs").style.transition =  "max-height 2s ease-in";
        document.getElementById("whatsWrongOutputs").innerHTML = "<br>";
        

    // set everything back to default

    setTimeout(()=>{

      barTitle.children[0].children[0].removeEventListener("custom:hackWordDel-EventFinished", backQuestionsfunction1);
      WRInputs[0].children[2].removeEventListener("custom:hackWordDel-EventFinished", backQuestionsfunction2);

      whatsWrongContainer.addEventListener("click", whatsWrongContainerEventLis);

    }, 4000);

  // map button

  document.getElementById("mapButton").style.opacity = "0";
  setTimeout(()=>{
    document.getElementById("mapButton").style.display = "none";
  }, 500);



}

function backQuestionsfunction1(){
  hackWordAdd(allGalleryPages[chosenBox].header,barTitle.children[0].children[0]);
}

function backQuestionsfunction3(){
  document.getElementById("transpar").style.backgroundColor = "transparent";
}

function backQuestionsfunction2(){

  let WRInputs = document.getElementsByClassName("radioButton");

  WRInputs[0].remove();
  document.getElementById("whatsWrongInputs").style.opacity = "0";

  setTimeout(()=>{
    changePageScreenWordsWhenHome(chosenBox);
    document.getElementById("whatsWrongInputs").style.opacity = "1";

    hackWordAdd("Next Step", submitButton.children[0] )

    submitButton.addEventListener("click", clickAnswers);

    submitButton.removeEventListener("click", backQuestions);
  }, 1500);
}


// hack word funtions ------------------------------------------------

function hackWordDel(targ){

  const eventFin = new Event("custom:hackWordDel-EventFinished");

  var text = targ.innerHTML;

  var letters = text.split("");

  var sent = "";

  var wl = letters.length;

    var int = setInterval(()=>{
      wl = wl - 1;

      
      if(wl >= 0){
        letters[wl] = "";
        sent = letters.join("");
        targ.innerHTML = sent;
      }else{
        targ.dispatchEvent(eventFin);
        clearInterval(int);
      }

    }, 50);

}

function hackWordAdd(words, targ){

  const eventFin = new Event("custom:hackWordAdd-EventFinished");

  var startingLetters = targ.innerHTML.split("");
  var startLetLength = startingLetters.length;


  var goalLetters = words.split("");
  var goalLetLenght = goalLetters.length;

  var currentLetters = startingLetters;
  var currentWords = "";
  var endlength;

  if(startLetLength > goalLetLenght){
    endlength = startLetLength;
  }else{
    endlength = goalLetLenght;
  }
  
  var loop = 0;


  var int = setInterval(()=>{
    

    if(loop < endlength ){
      currentLetters[loop] = goalLetters[loop];
      currentWords = currentLetters.join("");
      targ.innerHTML = currentWords;
    }else{
      targ.dispatchEvent(eventFin);
      clearInterval(int);
    }

    loop++


  }, 50)


}

function shuffleArray(ary){

    for (let i = ary.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = ary[i];
      ary[i] = ary[j];
      ary[j] = temp;
    }

  return ary;

}



// create more radio boxes

function createRadioBoxs(textIn){
    var whatsWrongInputs = document.getElementById("whatsWrongInputs");

    let radioBoxText = document.createElement("lable"); 
    radioBoxText.classList.add("radioButton");

    let input = document.createElement("input");
    input.setAttribute( "type", "radio");
    input.setAttribute("name", "radio");

    let checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    let words = document.createElement("span");
    words.classList.add("checkWords");
    words.appendChild(document.createTextNode(textIn));

    radioBoxText.appendChild(input);
    radioBoxText.appendChild(checkmark);
    radioBoxText.appendChild(words);

    radioBoxText.addEventListener("click", ()=>{
      input.click();
    })

    whatsWrongInputs.appendChild(radioBoxText);

}



const galleryBox1Ans1 = {
  header: ["Worn Brake Pads","Rust or Corrosion","Stones or Debris Stuck","Worn-out Brake Rotors","Caliper Issues","Improperly Lubricated Brake Hardware"],
  fix: ["Replace the brake pads and resurface or replace the brake rotors if they are damaged.","If the issue is mild, it may be resolved by driving the vehicle, allowing the friction to remove surface rust. However, severe corrosion may require rotor or pad replacement.","Remove the wheel and visually inspect the brake components. Remove any foreign objects and check for any damage.","Resurface or replace the brake rotors, and replace the brake pads.","Replace the caliper and associated components as necessary, along with new brake pads and possibly rotors.","Remove, clean, and lubricate the brake hardware components." ],
  description: ["When brake pads become excessively worn, the metal backing plate can come into contact with the brake rotor, causing a grinding noise.","Moisture and exposure to the elements can lead to rust or corrosion on the brake rotors or pads, resulting in a grinding noise."," Small stones, debris, or road salt can sometimes get lodged between the brake components, leading to a grinding noise.","Over time, brake rotors can wear down and develop uneven surfaces, causing a grinding noise during braking.","A malfunctioning caliper can cause uneven brake pad wear, leading to grinding sounds."," Lack of lubrication on brake hardware, such as caliper slides and pad shims, can lead to friction and grinding."],
  price: ["$100 - $300 per axle","Cost greatly varys per mild to severe corrosion", "None to minimal cost if no damage is found","$200 - $600 per axle", "$200 - $600","Minimal cost"]
}

const galleryBox1Ans2 = {
  header: ["Worn Brake Pads","Glazed Brake Pads and Rotors","Stones or Debris Stuck","Worn-out Brake Rotors","Caliper Issues","Improperly Lubricated Brake Hardware"],
  fix: ["Replace the brake pads and potentially resurface or replace the brake rotors if they are damaged.","Resurface or replace the rotors and replace the brake pads. Properly follow the manufacturer's recommendations for bedding in new brake pads.", "Remove the wheel and visually inspect the brake components. Remove any foreign objects and check for any damage.","Resurface or replace the brake rotors, and replace the brake pads.","Replace the caliper and associated components as necessary, along with new brake pads and possibly rotors.","Remove, clean, and lubricate the brake hardware components."],
  description: ["Squealing can occur when brake pads have worn down to the point where a wear indicator (a small metal tab) is making contact with the rotor.", "Brake pads and rotors can become glazed due to excessive heat buildup or improper bedding of new brake pads, leading to squealing.", "Small stones, debris, or road salt can sometimes get lodged between the brake components, leading to a grinding noise.","Over time, brake rotors can wear down and develop uneven surfaces, causing a grinding noise during braking.","A malfunctioning caliper can cause uneven brake pad wear, leading to grinding sounds.", "Lack of lubrication on brake hardware, such as caliper slides and pad shims, can lead to friction and grinding."],
  price: ["$100 - $300 per axle", "$100 - $300 per axle", "Minimal cost if no damage is found","$200 - $600+ per axle", "$200 - $600+ per axle","Minimal cost"]
}

const galleryBox1Ans3 = {
  header: ["Uneven Brake Pad Wear","Brake Caliper Issues","Brake Hose or Line Restriction","Uneven Tire Pressure or Wear","Wheel Alignment Issues","Suspension Problems","Brake Master Cylinder Issues","Rotor Thickness Variation"],
  fix: ["Replace the brake pads and ensure that the caliper slides and hardware are functioning correctly. You may also need to resurface or replace the rotors.","Inspect and, if necessary, replace the problematic caliper and associated components. Ensure proper lubrication and function of caliper slides.","Inspect the brake lines and hoses for kinks, blockages, or damage. Replace any compromised components.","Check and adjust tire pressure to manufacturer-recommended levels. Rotate, balance, or replace tires as needed.","Perform a wheel alignment to ensure all wheels are properly aligned according to manufacturer specifications.","Have a professional inspect and repair any damaged or worn suspension components.","Inspect and, if necessary, replace the master cylinder and bleed the brake system.","Resurface or replace the rotors, and replace the brake pads."],
  description: ["Uneven wear on brake pads can cause uneven braking force, leading to the vehicle pulling to one side when braking.","A sticking or malfunctioning brake caliper can apply uneven pressure to the brake pads, causing pulling.","A brake hose or line restriction can prevent the brake fluid from flowing evenly to all calipers, leading to one side pulling.","Uneven tire pressure or uneven tire wear can cause the vehicle to pull to one side during braking.","Improper wheel alignment can lead to uneven braking performance and cause the vehicle to pull to one side.","Suspension components, such as control arms or bushings, can affect brake performance and lead to pulling.","A malfunctioning master cylinder can lead to uneven brake fluid distribution and pulling.","Uneven rotor thickness due to wear or warping can cause inconsistent braking force and pulling."],
  price: ["$100 - $300+ per axle","$150 - $300+ per axle","$50 - $150 per affected line or hose","Minimal cost for maintenance or varies per replacement","$50 - $100+","Varies depending on the specific suspension repairs needed","$150 - $300+","$100 - $300+ per axle"]
}

const galleryBox1Ans4 = {
  header: ["Brake Booster Failure", "Vacuum Leak", "Faulty Master Cylinder", "Brake Fluid Contamination or Air in the Lines", "Brake Line Blockage", "Frozen Brake Caliper or Wheel Cylinder", "Brake Pad or Shoe Glazing", "Brake Pedal Linkage Issues"],

  fix: ["Replace the brake booster and, if necessary, the vacuum hose.", "Inspect the vacuum hose and lines for leaks, and replace any damaged components. This may include the hose, check valve, or vacuum pump.", "Replace the master cylinder, and bleed the brake system to remove air bubbles.", "Flush and replace the brake fluid, and bleed the brake system to remove air bubbles.", "Inspect the brake lines and replace any damaged or blocked sections.", "Replace the frozen caliper or wheel cylinder and the associated brake components.", "Resurface or replace the glazed brake pads or shoes and ensure the brake rotor or drum is in good condition.", "Inspect and adjust or replace any damaged or misaligned brake pedal linkage components."],

  description: ["The brake booster amplifies the force applied to the brake pedal, making it easier to brake. If the brake booster fails, it can result in a hard pedal that requires more effort to brake effectively.", "A vacuum leak in the brake booster hose or the vacuum line can reduce the vacuum pressure, causing a hard brake pedal.", "A malfunctioning master cylinder can lead to insufficient hydraulic pressure in the brake system, resulting in a hard pedal.", "Contaminated brake fluid or air bubbles in the brake lines can hinder the flow of hydraulic pressure, causing a hard brake pedal.", "A blockage or restriction in the brake lines can impede the flow of brake fluid, leading to a hard pedal.", "A frozen brake caliper or wheel cylinder can prevent proper brake actuation, causing a hard pedal.", "Glazed brake pads or shoes can reduce friction and result in a hard pedal.", "Damaged or misadjusted brake pedal linkage can affect brake pedal feel and lead to a hard pedal."],

  price: ["$300 - $700 or more for parts and labor.", "$50 - $150 or more.", "$100 - $300 or more for parts and labor.", "$50 - $100 or more.", "$50 - $200 or more.", "$100 - $300 or more per affected wheel.", "$50 - $150 or more per axle.", "Costs are typically minimal, involving replacement parts and labor as needed."]
}

const galleryBox1Ans5 = {
  header: ["Air in Brake Lines", "Brake Fluid Leak", "Worn Brake Pads or Shoes", "Faulty Master Cylinder", "Brake Caliper Problems", "Brake Hose or Line Issues", "Brake Bleeding Required", "Brake Pedal Linkage Issues"],

  fix: ["Bleed the brake system to remove air bubbles.", "Identify and repair the source of the brake fluid leak, and then bleed the brake system.", "Replace the worn brake pads or shoes, and resurface or replace the brake rotors or drums if needed.", "Replace the faulty master cylinder, and bleed the brake system.", "Inspect and replace the faulty brake caliper(s) as needed.", "Inspect and replace any damaged brake hoses or lines, and then bleed the brake system.", "Perform a brake bleeding procedure to remove air from the brake lines.", "Inspect and adjust or replace any damaged or misaligned brake pedal linkage components."],

  description: ["Air in the brake lines can lead to a spongy pedal feel and reduced braking performance.", "A brake fluid leak can result in a low brake pedal due to a loss of hydraulic pressure.", "Worn brake pads or shoes can lead to a low pedal as they have less material to create friction.", "A faulty master cylinder can result in a spongy or low brake pedal due to a loss of hydraulic pressure.", "Brake caliper problems, such as a sticking piston, can affect brake pedal feel.", "Issues with brake hoses or lines, such as blockages or leaks, can lead to reduced brake pedal effectiveness.", "Brake bleeding may be necessary to remove air bubbles and restore pedal firmness.", "Damaged or misadjusted brake pedal linkage can affect pedal feel and pedal height, resulting in a low pedal."],

  price: ["$50 - $100 or more for brake bleeding.", "Costs vary depending on the source and extent of the leak, typically ranging from $100 to $300 or more for parts and labor.", "$100 - $300 or more per axle for brake pad and rotor or drum replacement.", "$100 - $300 or more for parts and labor.", "$100 - $300 or more per affected brake caliper.", "$50 - $150 or more for brake hose or line replacement, plus brake bleeding costs.", "$50 - $100 or more for brake bleeding.", "Costs are typically minimal, involving replacement parts and labor as needed."]

}

const galleryBox1Ans6 = {
  header: ["Warped Brake Rotors", "Brake Pad Deposits", "Uneven Rotor Thickness", "Loose or Worn Wheel Bearings", "Faulty Brake Calipers"],

  fix: ["Resurface or replace the brake rotors.", "Replace brake pads and clean or replace rotors.", "Resurface or replace the rotors.", "Replace loose or worn wheel bearings.", "Replace faulty brake calipers."],

  description: ["Warped brake rotors cause a pulsating pedal due to uneven contact with the brake pads.", "Brake pad deposits on the rotors lead to uneven braking and pedal pulsation.", "Uneven rotor thickness can result in pulsation when the brakes are applied.", "Loose or worn wheel bearings cause rotor wobbling and pedal pulsation.", "Faulty brake calipers can apply uneven pressure to the rotors, causing pedal pulsation."],

  price: ["$100 - $300 or more per axle for rotor resurfacing or replacement.", "$50 - $150 or more for brake pad replacement.", "$100 - $300 or more for rotor resurfacing or replacement.", "$100 - $300 or more for wheel bearing replacement.", "$100 - $300 or more per affected brake caliper."]

}

const galleryBox1Ans7 = {
  header: ["Low Brake Fluid", "Worn Brake Pads or Shoes", "Brake Fluid Leak", "Faulty Master Cylinder", "Brake Caliper Problems", "Brake Line or Hose Issues", "Brake Pad Sensor Malfunction"],

  fix: ["Top up the brake fluid to the recommended level and inspect for leaks.", "Replace the worn brake pads or shoes and inspect the associated components.", "Identify and repair the source of the brake fluid leak, then refill and bleed the brake system.", "Replace the faulty master cylinder and bleed the brake system.", "Inspect and replace the faulty brake caliper(s) as needed.", "Inspect and replace damaged brake lines or hoses, then bleed the brake system.", "Replace the malfunctioning brake pad sensor or reset it if it's a false warning."],

  description: ["A low brake fluid level can trigger the warning light due to reduced hydraulic pressure.", "Worn brake pads or shoes can trigger the warning light when they are too thin.", "A brake fluid leak can result in low fluid levels and activate the warning light.", "A faulty master cylinder can lead to low brake fluid and trigger the warning light.", "Brake caliper problems, such as a sticking piston, can trigger the warning light.", "Issues with brake lines or hoses, such as blockages or leaks, can trigger the warning light.", "A malfunctioning brake pad sensor can trigger the warning light, indicating worn brake pads."],

  price: ["Minimal cost for topping up brake fluid.", "$100 - $300 or more per axle for brake pad or shoe replacement.", "$100 - $300 or more for parts and labor to repair the brake fluid leak and bleed the brake system.", "$100 - $300 or more for parts and labor to replace the master cylinder and bleed the brake system.", "$100 - $300 or more per affected brake caliper.", "$50 - $150 or more for brake line or hose replacement, plus brake bleeding costs.", "Minimal cost for resetting or replacing the sensor, if necessary."]

}

const galleryBox1Ans8 = {
  header: ["Faulty ABS Sensor", "ABS Control Module Malfunction", "Damaged ABS Wiring or Connectors", "Low Brake Fluid", "Faulty Wheel Speed Sensors", "ABS Pump Motor Failure"],

  fix: ["Replace the faulty ABS sensor(s).", "Repair or replace the malfunctioning ABS control module.", "Repair or replace damaged ABS wiring or connectors.", "Top up the brake fluid to the recommended level and inspect for leaks.", "Replace the faulty wheel speed sensor(s).", "Replace the failed ABS pump motor."],

  description: ["A faulty ABS sensor can trigger the ABS light due to inaccurate wheel speed readings.", "A malfunctioning ABS control module can lead to ABS light activation.", "Damage to ABS wiring or connectors can result in an ABS warning light.", "Low brake fluid levels can lead to the ABS light coming on, indicating potential braking issues.", "Faulty wheel speed sensors can cause erratic ABS performance and trigger the ABS light.", "ABS pump motor failure can result in an ABS warning light due to reduced system functionality."],

  price: ["$100 - $200 or more per ABS sensor replacement.", "$200 - $600 or more for ABS control module repair or replacement.", "$50 - $150 or more for ABS wiring or connector repairs.", "Minimal cost for topping up brake fluid, plus costs for fixing any leaks.", "$50 - $100 or more per wheel speed sensor replacement.", "$200 - $500 or more for ABS pump motor replacement."]

}

const galleryBox1 = {
  header: "Whats wrong with your Brake?",
  checkOptions: ["My brakes are makeing a grinding sound", "My brakes are squealing", "My brakes pull", "I have a hard brake pedal", "I have a spongy or low brake pedal", "I have a pulsating brake pedal", "My brake warning light is on", "My ABS light is on"],
  Answers: [galleryBox1Ans1, galleryBox1Ans2,galleryBox1Ans3,galleryBox1Ans4,galleryBox1Ans5,galleryBox1Ans6,galleryBox1Ans7,galleryBox1Ans8]

};


const galleryBox2Ans1 = {
  header: ["Engine Oil Leak", "Transmission Fluid Leak", "Differential Fluid Leak", "Power Steering Fluid Leak", "Brake Fluid Leak", "Coolant Leak", "AC Refrigerant Leak"],

  fix: ["Repair or replace the damaged gaskets, seals, or components causing the oil leak.", "Identify and repair the source of the transmission fluid leak, which may involve replacing gaskets or seals.", "Repair or replace the damaged differential gaskets or seals causing the leak.", "Identify and repair the source of the power steering fluid leak, typically involving seal or hose replacement.", "Repair or replace damaged brake lines, hoses, or components causing the brake fluid leak.", "Repair or replace damaged hoses, radiator, water pump, or other cooling system components causing the coolant leak.", "Identify and repair the source of the AC refrigerant leak, often requiring refrigerant system service."],

  description: ["Engine oil leaks can occur due to deteriorated gaskets, seals, or damaged engine components, resulting in oil puddles under the vehicle.", "Transmission fluid leaks can result from damaged gaskets or seals, causing puddles of red or brown fluid under the vehicle.", "Leaking differential fluid can create puddles of thick, viscous fluid under the vehicle, often near the rear axle.", "Power steering fluid leaks can lead to puddles of red or amber fluid beneath the vehicle, affecting steering performance.", "Brake fluid leaks can result in puddles of clear or slightly yellow fluid under the vehicle and compromise braking performance.", "Coolant leaks can produce puddles of colorful (typically green, orange, or pink) fluid beneath the vehicle, posing a risk of engine overheating.", "AC refrigerant leaks can lead to puddles of clear, cold, and sometimes oily fluid under the vehicle, affecting air conditioning performance."],

  price: ["$100 - $500+ for parts and labor.", "$100 - $400+ for parts and labor.", "$100 - $400+ for parts and labor.", "$100 - $300+ for parts and labor.", "$100 - $300+ for parts and labor.", "$100 - $500+ for parts and labor.", "$100 - $300+ for parts and labor."]

}

const galleryBox2Ans2 = {
  header: ["Stripped or Damaged Drain Plug Threads", "Overtightened Drain Plug", "Cross-Threaded Drain Plug", "Debris or Sludge Buildup", "Corroded or Rusted Drain Plug", "Improperly Installed Drain Plug Washer or Gasket"],

  fix: ["Repair or replace damaged parts, or rethread the oil pan if needed.", "Remove and replace the overtightened plug, following torque specs.", "Repair or replace the damaged plug or oil pan if threads are ruined.", "Clean the plug and oil pan of debris or sludge.", "Replace the corroded or rusted plug with a new one.", "Replace the washer or gasket correctly during an oil change."],

  description: ["Challenging to remove or reinstall the plug, risking oil leaks.", "Difficult to remove, risking oil pan or plug damage.", "Tough to reinstall, risking leaks.", "Affects oil flow and engine performance.", "Challenging to remove, risking leaks.", "May cause leaks if not installed correctly."],

  price: ["$50 - $150+ for parts and labor, depending on damage and repairs.", "$50 - $150+ for parts and labor, includes a new plug.", "$50 - $150+ for parts and labor, depending on damage and repairs.", "Minimal cost for cleaning, usually during an oil change.", "$20 - $50+ for parts and labor, includes a new plug.", "Minimal cost for the correct washer or gasket, typically part of an oil change."]

}

const galleryBox2Ans3 = {
  header: ["Engine Oil Level Low", "Faulty Oil Pressure Sensor", "Oil Pump Failure", "Oil Filter Blockage", "Engine Oil Contamination", "Engine Mechanical Issues", "Wiring or Connector Problems", "False Warning Lights"],

  fix: ["Add more engine oil or fix oil leaks.", "Replace the faulty oil pressure sensor.", "Replace the faulty oil pump.", "Replace the clogged oil filter.", "Identify and repair the source of contamination.", "Diagnose and repair internal engine problems.", "Repair or replace damaged wiring or connectors.", "Use diagnostic tools to address the cause of false warnings."],

  description: ["Low engine oil can trigger warning lights and potentially lead to engine damage.", "A malfunctioning sensor can cause false warnings or overlook low oil pressure.", "A failed oil pump can result in inadequate oil circulation and pressure.", "A blocked oil filter can restrict oil flow and cause pressure warnings.", "Oil contamination can affect oil properties and trigger warnings.", "Engine issues, like worn bearings or a damaged oil pump, can lead to pressure warnings.", "Faulty wiring or connectors can lead to false warning lights.", "False warning lights may occur due to sensor malfunctions or other factors."],

  price: ["Minimal cost for adding oil, variable for repairing leaks.", "$50 - $100 or more for parts and labor.", "$200 - $500 or more for parts and labor.", "$10 - $20 for the filter and minimal labor costs.", "Variable depending on the source of contamination and necessary repairs.", "Variable, depending on the extent of engine damage and required repairs.", "$50 - $100 or more for parts and labor.", "Variable, depending on the cause of false warnings and necessary repairs."]

}

const galleryBox2Ans4 = {
  header: ["Engine Oil Contamination", "Coolant Contamination", "Fuel Contamination", "Foreign Particle Ingress", "Worn Engine Components", "Insufficient Oil Changes", "Insufficient Oil Filter Changes"],

  fix: ["Identify and repair the source, change oil and filter.", "Repair coolant source, change oil and filter.", "Fix fuel source, change oil and filter.", "Address foreign particles, change oil and filter.", "Replace worn components, change oil and filter.", "Change oil regularly.", "Replace oil filter regularly."],

  description: ["Gritty oil on dipstick or filter indicates contamination, affects performance.", "Coolant contamination due to gasket damage, may harm engine.", "Fuel contamination dilutes oil, damages components.", "Gritty oil from foreign particles, risks engine damage.", "Worn components lead to gritty oil, need replacement.", "Extended oil change intervals reduce protection.", "Neglecting filter changes leads to gritty oil, use new filters."],

  price: ["Variable based on contamination source and repairs.", "Variable based on extent of coolant contamination and repairs.", "Variable based on extent of fuel contamination and repairs.", "Variable based on source of foreign particles and repairs.", "Variable based on component wear and repairs.", "Minimal cost for regular oil changes.", "Minimal cost for regular filter changes."]

}

const galleryBox2 = {
  header: "What are the problems your haveing with Oil Changes?",
  checkOptions: ["Puddles or spots of oil under the vehicle when parked.", " Difficulty removing or reinstalling the drain plug","Check engine or oil pressure warning lights illuminate.","Discolored or gritty oil on the dipstick or in the oil filter."],
  Answers: [galleryBox2Ans1, galleryBox2Ans2, galleryBox2Ans3, galleryBox2Ans4]
};

const galleryBox3Ans1 = {

  header: ["Low Coolant Level", "Cooling System Leaks", "Faulty Thermostat", "Water Pump Failure", "Cooling Fan Problems", "Clogged Radiator", "Engine Oil Overheating", "Blown Head Gasket", "Cooling System Blockage"],

  fix: ["Top up coolant and check for leaks. Repair any leaks.", "Identify and repair coolant leaks. Replace damaged components if needed.", "Replace the faulty thermostat.", "Replace the failed water pump.", "Repair or replace faulty cooling fans, relays, or sensors.", "Clean or replace the clogged radiator.", "Ensure proper engine oil levels and change old oil.", "Replace the blown head gasket.", "Identify and clear blockages in the cooling system."],

  description: ["Low coolant can cause engine overheating, indicated by rising temperature gauge or warning light.", "Cooling system leaks can lead to low coolant levels and engine overheating.", "A malfunctioning thermostat can cause the engine to overheat or run too cool.", "A failed water pump can lead to inadequate coolant flow and engine overheating.", "Inadequate cooling fan operation can cause overheating, especially at low speeds.", "A clogged radiator can hinder heat dissipation and lead to engine overheating.", "Overheated engine oil can contribute to overall engine overheating.", "A blown head gasket can lead to coolant and oil mixing, resulting in overheating.", "Blockages in the cooling system can impede coolant circulation and contribute to engine overheating."],

  price: ["Minimal cost for topping up coolant, variable for leak repairs.", "Variable, depending on the extent of leakage and necessary repairs.", "$100 - $200 or more for parts and labor.", "$150 - $400 or more for parts and labor.", "$100 - $300 or more for parts and labor.", "$100 - $250 or more for parts and labor.", "Minimal cost for topping up or changing engine oil.", "$500 - $1,500 or more for parts and labor, depending on the vehicle.", "$100 - $300 or more for parts and labor."]

}

const galleryBox3Ans2 = {

  header: ["Low Coolant Level", "Air Pocket in the Cooling System", "Faulty Thermostat", "Heater Core Blockage", "Malfunctioning Blower Motor", "Defective Temperature Control Valve", "Electrical or Wiring Issues"],

  fix: ["Check and top up the coolant, inspect for leaks and repair them.", "Bleed the cooling system to remove air pockets.", "Replace the faulty thermostat.", "Flush the heater core or replace it if necessary.", "Replace the malfunctioning blower motor.", "Replace the defective temperature control valve.", "Diagnose and repair electrical or wiring problems affecting the heater system."],

  description: ["Low coolant can prevent the heater core from getting hot coolant, leading to a lack of heat inside the vehicle.", "Air pockets can hinder proper coolant flow to the heater core, resulting in no heat.", "A malfunctioning thermostat disrupts the flow of hot coolant to the heater core.", "Blockages in the heater core impede the flow of hot coolant, causing a lack of heat.", "A malfunctioning blower motor prevents warm air from reaching the vehicle's interior.", "A faulty temperature control valve hinders the flow of hot coolant to the heater core.", "Electrical issues can disrupt the operation of the heater, resulting in a lack of heat inside the vehicle."],

  price: ["Minimal cost for topping up coolant, variable for leak repairs.", "Minimal cost for bleeding the cooling system.", "$100 - $200 or more for parts and labor.", "$100 - $300 or more for parts and labor.", "$100 - $300 or more for parts and labor.", "$50 - $150 or more for parts and labor.", "Variable, depending on the specific electrical issue and necessary repairs."]
}

const galleryBox3Ans3 = {

  header: ["Coolant Leak", "Heater Core Leak", "Faulty Heater Core O-Rings", "Coolant Overflow", "Overheating Engine", "Cabin Air Filter Replacement"],

  fix: ["Identify and repair the source of the coolant leak. Replace damaged components if necessary.", "Replace the faulty heater core to prevent coolant from entering the vehicle's interior.", "Replace the damaged O-rings in the heater core to stop coolant vapor from entering the cabin.", "Ensure the coolant reservoir is at the correct level and secure any loose caps.", "Address the cause of engine overheating, such as a malfunctioning thermostat or cooling system issue.", "Replace the cabin air filter, which may be causing the sweet smell by filtering coolant vapor."],

  description: ["A sweet, syrupy smell inside the vehicle is often a sign of a coolant leak, leading to potential engine overheating.", "A leaking heater core can emit coolant vapor into the cabin, causing a sweet odor and heating system issues.", "Leaking O-rings in the heater core can cause a sweet odor inside the vehicle.", "Coolant overflow can lead to spills and a sweet smell inside the vehicle.", "Engine overheating can release excess coolant vapor and cause a sweet smell inside the vehicle.", "A clogged or contaminated cabin air filter can result in coolant odors inside the vehicle."],

  price: ["Variable, depending on the extent of the leak and necessary repairs.", "$300 - $800 or more for parts and labor, depending on the vehicle.", "$50 - $150 or more for parts and labor.", "Minimal cost for topping up coolant and securing caps.", "Variable, depending on the cause of overheating and necessary repairs.", "$20 - $50 or more for the filter and minimal labor costs."]


}

const galleryBox3Ans4 = {

  header: ["Coolant Leak", "Overheating Engine", "Cracked Radiator", "Faulty Radiator Cap", "Leaking Heater Core", "Engine Overheating Due to Low Oil", "Engine Overheating Due to Blown Head Gasket"],

  fix: ["Identify and repair the source of the coolant leak. Replace damaged components if necessary.", "Address the cause of engine overheating, such as a malfunctioning thermostat or cooling system issue.", "Replace the cracked radiator with a new one.", "Replace the faulty radiator cap.", "Replace the leaking heater core.", "Check and maintain proper engine oil levels to prevent overheating.", "Replace the damaged head gasket to prevent coolant and oil mixing and overheating."],

  description: ["Visible steam or vapor coming from under the hood can be a sign of a coolant leak, leading to potential engine overheating.", "An overheating engine can release steam or vapor from under the hood, indicating a cooling system problem.", "A cracked radiator can allow steam or vapor to escape from under the hood.", "A malfunctioning radiator cap can lead to steam escaping from under the hood.", "A leaking heater core can release coolant vapor and steam from under the hood.", "Low engine oil levels can lead to engine overheating and visible steam under the hood.", "A blown head gasket can cause coolant and oil to mix, leading to overheating and visible steam."],

  price: ["Variable, depending on the extent of the leak and necessary repairs.", "Variable, depending on the cause of overheating and necessary repairs.", "$200 - $500 or more for parts and labor.", "$10 - $30 for the cap.", "$300 - $800 or more for parts and labor, depending on the vehicle.", "Minimal cost for adding oil and regular oil changes.", "$500 - $1,500 or more for parts and labor, depending on the vehicle."]


}

const galleryBox3Ans5 = {

  header: ["Radiator Leak", "Hose Leak", "Water Pump Leak", "Heater Core Leak", "Gasket Leak (e.g., Head Gasket)", "Rust or Corrosion"],

  fix: ["Replace the radiator or repair the leak using sealant, depending on the extent of the damage.", "Identify and replace the leaking hose, ensuring a proper coolant connection.", "Replace the leaking water pump to maintain proper coolant circulation.", "Replace the leaking heater core to prevent coolant from entering the passenger compartment.", "Replace the faulty gasket, such as the head gasket, to prevent coolant from mixing with oil and causing leaks.", "Repair or replace the corroded components, such as a rusted radiator or heater core."],

  description: ["Coolant leaks around your car can be due to a damaged radiator, leading to potential engine overheating.", "Leaking hoses can result in coolant leaks and a puddle under your car, potentially leading to engine overheating.", "A leaking water pump can lead to coolant leaks around your car, risking engine overheating.", "A leaking heater core can lead to coolant leaks and a sweet odor inside the car.", "A gasket leak can lead to oil and coolant mixing and external coolant leaks around the car.", "Rust or corrosion can cause coolant leaks, leading to puddles around your car."],

  price: ["$200 - $600 or more for parts and labor, depending on the radiator's replacement or repair.", "$50 - $100 or more for parts and labor.", "$100 - $300 or more for parts and labor.", "$300 - $800 or more for parts and labor, depending on the vehicle.", "Variable, depending on the specific gasket and necessary repairs.", "Variable, depending on the extent of rust or corrosion and necessary repairs."]


}

const galleryBox3Ans6 = {
  header: ["Coolant Level Warning", "Faulty Coolant Sensor", "Cooling System Leaks", "Malfunctioning Thermostat", "Water Pump Failure", "Electrical or Wiring Issues"],

  fix: ["Check and top up the coolant, inspect for leaks and repair them.", "Replace the malfunctioning coolant sensor.", "Identify and repair the source of coolant leaks and replace damaged components if necessary.", "Replace the malfunctioning thermostat.", "Replace the failed water pump.", "Diagnose and repair electrical or wiring problems affecting the coolant sensor or warning system."],

  description: ["Frequent or unexplained cooling system warning lights can be triggered by low coolant levels, which can lead to engine overheating.", "A faulty coolant sensor can trigger warning lights even when the cooling system is functioning correctly.", "Cooling system leaks can lead to low coolant levels and unexplained warning lights.", "A malfunctioning thermostat can cause cooling system warning lights due to incorrect temperature readings.", "A failed water pump can lead to cooling system warning lights and inadequate coolant flow.", "Electrical issues can trigger unexplained cooling system warning lights."],

  price: ["Minimal cost for topping up coolant, variable for leak repairs.", "$50 - $150 or more for parts and labor.", "Variable, depending on the extent of leakage and necessary repairs.", "$100 - $200 or more for parts and labor.", "$150 - $400 or more for parts and labor.", "Variable, depending on the specific electrical issue and necessary repairs."]


}


const galleryBox3 = {
  header: "What's wrong with your Coolant system?",
  checkOptions: ["Engine Overheating, temperature gauge rose into the red zone or dashboard warning light is illuminated", "Heater not working inside vehicle", "Coolant odor inside the vehicle, detect a sweet, syrupy smell inside your car", "Visible steam or vapor coming from under the hood","Coolant leaks, around your car","Frequent or unexplained cooling system warning lights"],
  Answers: [galleryBox3Ans1, galleryBox3Ans2, galleryBox3Ans3, galleryBox3Ans4, galleryBox3Ans5, galleryBox3Ans6]
};


const galleryBox4Ans1 = {

  header: ["Improper Tire Inflation", "Misalignment", "Suspension Issues", "Unbalanced Wheels", "Worn or Damaged Suspension Components", "Tire Rotation Neglect", "Camber or Caster Issues"],

  fix: ["Maintain proper tire pressure according to the manufacturer's recommendations, checking and adjusting regularly.", "Get a professional wheel alignment to correct misalignment issues.", "Inspect and repair suspension components, such as struts, shocks, or bushings.", "Have the wheels balanced by a professional to ensure even weight distribution.", "Replace worn or damaged suspension parts, like control arms, ball joints, or tie rods.", "Regularly rotate your tires according to the manufacturer's recommended schedule.", "Address camber or caster problems with a professional alignment service."],

  description: ["Uneven tread wear can result from over-inflated or under-inflated tires.", "Wheel misalignment can lead to uneven tire tread wear, causing the tires to wear out prematurely.", "Suspension problems can lead to uneven tire tread wear due to improper weight distribution or tire movement.", "Unbalanced wheels can cause uneven tread wear, typically felt as vibrations while driving.", "Worn or damaged suspension components can lead to uneven tire wear.", "Neglecting tire rotations can cause uneven tread wear, as some tires wear faster than others.", "Camber or caster misalignment can result in uneven tire tread wear."],

  price: ["Minimal cost for a tire pressure gauge and air, if necessary.", "$50 - $150 or more for a wheel alignment service.", "Variable, depending on the specific suspension issue and necessary repairs.", "$20 - $50 or more for wheel balancing.", "Variable, depending on the specific component and necessary repairs.", "Minimal cost for a tire rotation service or DIY if you have the necessary tools.", "$50 - $150 or more for an alignment service to correct camber or caster issues."]

} 

const galleryBox4Ans2 = {

  header: ["Worn Tires", "Underinflated Tires", "Poor Tire Quality", "Uneven Tread Wear", "Weather-Related Tread Wear", "Tire Age"],

  fix: ["Replace the worn tires with new ones to restore traction.", "Check and adjust tire pressure to the manufacturer's recommended levels.", "Replace low-quality or subpar tires with better-quality ones to improve traction.", "Address the underlying issues causing uneven tread wear, such as misalignment or suspension problems. Rotate and balance the tires as needed.", "Install tires designed for specific weather conditions (e.g., winter tires for snow) to improve traction in adverse conditions.", "Replace old and aged tires to ensure optimal traction and safety."],

  description: ["Reduced traction is often caused by worn tire treads, which can result in decreased grip on the road.", "Underinflated tires can reduce traction and handling, increasing the risk of accidents.", "Cheap or low-quality tires may have limited traction and performance.", "Uneven tread wear can lead to reduced traction and handling due to irregular contact with the road.", "Tires not suited for particular weather conditions can result in reduced traction during inclement weather.", "Tires degrade with age, and old tires can have reduced traction and become a safety risk."],

  price: ["Variable, depending on the type and brand of tires chosen.", "Minimal cost for a tire pressure gauge and air, if necessary.", "Variable, depending on the type and brand of tires chosen.", "Variable, depending on the specific issue and necessary repairs.", "Variable, depending on the type and brand of weather-specific tires chosen.", "Variable, depending on the type and brand of tires chosen."]

  
} 

const galleryBox4Ans3 = {
  
  header: ["Unbalanced Wheels", "Tire Issues", "Wheel Misalignment", "Suspension Problems", "Brake Problems", "Driveshaft or CV Joint Issues", "Engine Problems"],

  fix: ["Have the wheels balanced by a professional to ensure even weight distribution.", "Inspect and address tire-related problems, such as uneven wear, bulges, or flat spots. Replace damaged tires.", "Get a professional wheel alignment to correct misalignment issues.", "Inspect and repair suspension components, such as struts, shocks, or bushings.", "Inspect and repair the brake system, including rotors and calipers, to eliminate brake-related vibrations.", "Inspect and repair the driveshaft or CV joints to resolve drivetrain-related vibrations.", "Diagnose and address engine-related issues, such as misfires or worn engine mounts."],

  description: ["Vibrations while driving are often caused by unbalanced wheels, leading to an uneven ride.", "Irregularities in tires, such as uneven wear patterns or tire damage, can result in vibrations while driving.", "Wheel misalignment can lead to vibrations and uneven tire wear, affecting the vehicle's handling.", "Suspension issues, such as worn or damaged components, can lead to vibrations while driving due to improper weight distribution or tire movement.", "Brake issues, such as warped rotors or stuck calipers, can cause vibrations when braking.", "Problems in the driveshaft or CV joints can lead to vibrations, particularly during acceleration or at specific speeds.", "Engine problems can lead to vibrations while driving, especially if the engine is not running smoothly."],

  price: ["$20 - $50 or more for wheel balancing.", "Variable, depending on the specific tire issue and necessary repairs or replacements.", "$50 - $150 or more for a wheel alignment service.", "Variable, depending on the specific suspension issue and necessary repairs.", "Variable, depending on the specific brake issue and necessary repairs.", "Variable, depending on the specific issue and necessary repairs.", "Variable, depending on the specific engine issue and necessary repairs."]


} 

const galleryBox4Ans4 = {

  header: ["Punctures or Tire Damage", "Sidewall Damage", "Tread Wear Indicators", "Dry Rot or Cracking", "Impact Damage", "Run-Flat Tire Damage", "Overloading or Underinflation"],

  fix: ["Repair minor punctures with a patch or plug. Replace severely damaged tires to ensure safety.", "Replace the tire if the sidewall is damaged, as repairs are often unsafe and ineffective.", "Replace tires that have reached the tread wear indicator bars to maintain traction and safety.", "Replace tires showing signs of dry rot or cracking to prevent tire failure.", "Inspect the tire and rim for damage after impacts and replace the tire if necessary.", "Replace damaged run-flat tires, as they cannot be repaired or driven on after significant damage.", "Maintain proper tire pressure and avoid overloading to prevent tire damage."],

  description: ["Visible tire damage, such as punctures, cuts, or bulges, can affect tire integrity and safety.", "Sidewall damage can weaken the tire structure and compromise safety.", "Tread wear indicators show when tires have worn down, indicating the need for replacement.", "Dry rot or cracking can occur due to aging, exposure to the elements, and lack of tire maintenance.", "Impact damage from hitting potholes or road debris can lead to visible tire damage.", "Run-flat tires may show visible damage when they've been driven on after a puncture or flat.", "Overloading or underinflation can lead to visible tire damage, such as flat spots or bulging."],

  price: ["Repair costs vary but are generally affordable. Tire replacement costs depend on the type and brand of tires chosen.", "Variable, depending on the type and brand of replacement tires.", "Variable, depending on the type and brand of replacement tires.", "Variable, depending on the type and brand of replacement tires.", "Variable, depending on the extent of damage and replacement tire costs.", "Variable, depending on the type and brand of replacement run-flat tires.", "Minimal cost for a tire pressure gauge and air, if necessary, and varies for tire replacement if damage is severe."]

} 

const galleryBox4Ans5 = {

  header: ["Tire Issues", "Wheel Alignment Problems", "Suspension Issues", "Brake Problems", "Power Steering Problems", "Drivetrain Issues"],

  fix: ["Inspect and address tire-related problems, such as uneven wear, damage, or low tire pressure. Rotate, balance, or replace tires as needed.", "Get a professional wheel alignment to correct misalignment issues, ensuring all wheels are properly aligned.", "Inspect and repair suspension components, such as struts, shocks, or bushings, to address drifting or pulling due to suspension problems.", "Inspect and repair the brake system, including rotors, calipers, and pads, to eliminate issues causing pulling while braking.", "Diagnose and repair power steering issues, such as leaks or malfunctions, to prevent steering-related pulling or drifting.", "Inspect and repair drivetrain components, such as CV joints or axles, to address pulling due to drivetrain-related problems."],

  description: ["Pulling or drifting can result from tire issues that affect the vehicle's stability and handling.", "Pulling or drifting often occurs when the wheels are misaligned, causing the vehicle to veer to one side.", "Pulling or drifting may result from worn or damaged suspension components, affecting the vehicle's stability.", "Brake problems, such as uneven brake wear or sticking calipers, can lead to pulling or drifting when braking.", "Power steering problems can lead to difficulty controlling the vehicle's direction, resulting in pulling or drifting.", "Drivetrain issues can lead to pulling or drifting during acceleration or at specific speeds."],

  price: ["Variable, depending on the specific tire issue and necessary repairs or replacements.", "$50 - $150 or more for a wheel alignment service.", "Variable, depending on the specific suspension issue and necessary repairs.", "Variable, depending on the specific brake issue and necessary repairs.", "Variable, depending on the specific power steering issue and necessary repairs.", "Variable, depending on the specific drivetrain issue and necessary repairs."]

  
} 

const galleryBox4Ans6 = {

  header: ["Tire Puncture or Damage", "Valve Stem Leaks", "Corroded or Damaged Wheel Rims", "Bead Seal Leaks", "Faulty Tire Valve", "Age-Related Tire Degradation"],

  fix: ["Repair punctures or replace damaged tires. If the damage is severe or in the sidewall, replacement is usually necessary.", "Replace the valve stems and reseal the tire to prevent air leakage.", "Repair or replace corroded or damaged wheel rims to prevent air leaks.", "Reseal the tire bead to the rim to eliminate air leaks.", "Replace the tire valve if it's damaged or no longer seals properly.", "Replace aging tires that have become brittle and prone to air loss."],

  description: ["Frequent loss of tire pressure is often caused by punctures or tire damage that results in slow leaks.", "Valve stem leaks can cause gradual loss of tire pressure over time.", "Wheel rim damage can lead to air leaks, resulting in frequent loss of tire pressure.", "Bead seal leaks occur when the tire bead does not create an airtight seal with the rim.", "Faulty tire valves can allow air to escape, causing recurrent tire pressure loss.", "Over time, tires can degrade, leading to air loss due to cracked rubber and deteriorated components."],

  price: ["Repair costs vary but are generally affordable. Tire replacement costs depend on the type and brand of tires chosen.", "Minimal cost for valve stem replacement and resealing.", "Variable, depending on the extent of rim damage and repair or replacement costs.", "Minimal cost for bead sealing.", "Minimal cost for valve replacement.", "Variable, depending on the type and brand of replacement tires."]

} 

const galleryBox4Ans7 = {
  
  header: ["Tire Wear", "Overinflated Tires", "Wheel Misalignment", "Unbalanced Wheels", "Brake Issues", "Suspension Problems"],

  fix: ["Replace worn tires with new ones to eliminate squealing. Ensure proper tire rotation and maintenance.", "Adjust tire pressure to the manufacturer's recommended levels to prevent overinflation-related noise.", "Get a professional wheel alignment to correct misalignment issues, reducing tire noise and wear.", "Have the wheels balanced by a professional to ensure even weight distribution and reduce noise.", "Inspect and repair the brake system, including rotors and calipers, to eliminate brake-related noise.", "Inspect and repair suspension components, such as struts, shocks, or bushings, to reduce noise caused by worn or damaged parts."],

  description: ["Squealing or noisy tires can occur when the tire treads are worn, affecting traction and road noise.", "Overinflated tires can lead to reduced contact with the road, causing tire noise and reduced traction.", "Wheel misalignment can lead to uneven tire wear and noisy tires due to irregular contact with the road.", "Squealing or noisy tires can result from unbalanced wheels, leading to an uneven ride.", "Brake problems, such as uneven brake wear or sticking calipers, can lead to tire noise when braking.", "Suspension issues, such as worn or damaged components, can lead to noisy tires due to improper weight distribution or tire movement."],

  price: ["Variable, depending on the type and brand of replacement tires.", "Minimal cost for a tire pressure gauge and air, if necessary.", "$50 - $150 or more for a wheel alignment service.", "$20 - $50 or more for wheel balancing.", "Variable, depending on the specific brake issue and necessary repairs.", "Variable, depending on the specific suspension issue and necessary repairs."]


} 

const galleryBox4Ans8 = {

  header: ["TPMS Sensor Issues", "Low Tire Pressure", "TPMS Calibration", "Faulty TPMS Module or Wiring", "Interference or Signal Loss"],

  fix: ["Replace malfunctioning TPMS sensors to resolve the TPMS warning light.", "Inflate the tires to the recommended pressure levels specified in the vehicle's manual or on the driver's door jamb.", "Recalibrate the TPMS system following the vehicle manufacturer's guidelines to address calibration-related issues.", "Diagnose and replace the TPMS module or repair damaged wiring if the TPMS warning light is related to system failures.", "Address interference sources or signal loss affecting the TPMS sensors and module."],

  description: ["The TPMS warning light can illuminate when TPMS sensors malfunction, fail, or have dead batteries.", "The TPMS warning light can come on when one or more tires have low pressure, indicating the need for inflation.", "TPMS calibration may be required when changing tires or adjusting tire pressure, and the light can indicate the need for recalibration.", "A malfunctioning TPMS module or damaged wiring can lead to inaccurate readings and trigger the warning light.", "External factors like electronic interference or signal loss can disrupt TPMS function and trigger the warning light."],

  price: ["Variable, depending on the number of sensors to be replaced and the vehicle model.", "Minimal cost for a tire pressure gauge and air, if necessary.", "Typically no cost if done manually by the vehicle owner.", "Variable, depending on the specific issue and necessary repairs.", "Variable, depending on the source of interference and necessary solutions."]

  
} 



const galleryBox4 = {
  header: "What happened to your Tires?",
  checkOptions: ["Uneven Tread Wear", "Tires have reduced traction","Vibrations while driving","Visible tire damage","Pulling or drifting while driving","Frequent loss of tire pressure","Squealing or noisy tires","TPMS warning light"],
  Answers: [galleryBox4Ans1, galleryBox4Ans2, galleryBox4Ans3, galleryBox4Ans4, galleryBox4Ans5, galleryBox4Ans6, galleryBox4Ans7, galleryBox4Ans8]
};


const galleryBox5Ans1 = {
  header: ["Dead or Weak Battery", "Faulty Starter Motor", "Fuel Delivery Issues", "Ignition System Problems", "Faulty Alternator"],

  fix: ["Recharge or replace the battery as needed to ensure sufficient electrical power for starting.", "Replace the starter motor if it's malfunctioning and not effectively turning the engine.", "Inspect and repair the fuel system, including the fuel pump, filter, or injectors, to address fuel delivery problems.", "Diagnose and repair the ignition system components, such as the spark plugs, coils, or ignition module, to resolve ignition-related issues.", "Replace the alternator if it's not effectively charging the battery, leading to difficulty starting the engine."],

  description: ["Difficulty starting the engine can be caused by a dead or weak battery, resulting in slow cranking or no cranking at all.", "A faulty starter motor can lead to difficulty starting the engine, often accompanied by a clicking sound.", "Difficulty starting may occur if there are issues with fuel delivery, leading to insufficient fuel reaching the engine.", "Engine starting issues can result from problems within the ignition system, causing misfires or no ignition.", "A failing alternator can result in a drained battery, making engine starting problematic."],

  price: ["$50 - $200 for a new battery.", "$100 - $400 or more for a new starter motor.", "$100 - $500 or more for fuel system repairs.", "$50 - $300 or more for ignition system repairs.", "$200 - $600 or more for a new alternator."]


}

const galleryBox5Ans2 = {
  header: ["Fuel Delivery Issues", "Ignition System Problems", "Faulty Mass Airflow Sensor (MAF)", "Vacuum Leaks", "Electrical Issues"],

  fix: ["Inspect and repair the fuel system, including the fuel pump, filter, or injectors, to address fuel delivery problems.", "Diagnose and repair the ignition system components, such as the spark plugs, coils, or ignition module, to resolve ignition-related issues.", "Replace the MAF sensor if it's malfunctioning, affecting air-fuel mixture and engine performance.", "Locate and repair vacuum leaks, which can affect air intake and fuel mixture, leading to engine stalling.", "Diagnose and repair electrical problems, such as a failing alternator or battery, to ensure consistent power supply."],

  description: ["Engine stalling can occur when there are issues with fuel delivery, leading to insufficient fuel reaching the engine.", "Engine stalling or shutting off unexpectedly can result from problems within the ignition system, causing misfires or no ignition.", "A faulty MAF sensor can lead to engine stalling due to incorrect measurements of incoming air.", "Vacuum leaks can disrupt the proper functioning of the engine by allowing unwanted air to enter the system.", "Engine stalling may occur due to electrical issues that disrupt the power supply to essential components."],

  price: ["$100 - $500 or more for fuel system repairs.", "$50 - $300 or more for ignition system repairs.", "$100 - $300 or more for a new MAF sensor.", "Variable, depending on the extent of the leak and necessary repairs.", "Variable, depending on the specific electrical issue and necessary repairs."]

  
}

const galleryBox5Ans3 = {
  header: ["Faulty Spark Plugs", "Ignition System Problems", "Fuel Delivery Issues", "Vacuum Leaks", "Cylinder Compression Problems"],

  fix: ["Replace the spark plugs to ensure proper ignition and prevent misfires.", "Diagnose and repair the ignition system components, such as the spark plug wires, coils, or ignition module, to address misfire issues.", "Inspect and repair the fuel system, including the fuel injectors, to address fuel delivery problems that may lead to misfires.", "Locate and repair vacuum leaks, which can disrupt the air-fuel mixture and lead to engine misfires.", "Diagnose and repair issues related to low or uneven cylinder compression to prevent misfires."],

  description: ["Engine misfires can occur when the spark plugs are worn or malfunctioning, leading to incomplete combustion.", "Engine misfires can result from problems within the ignition system, leading to poor spark and miscombustion.", "Engine misfires can occur when there are issues with fuel delivery, such as clogged injectors or insufficient fuel supply.", "Vacuum leaks can result in incorrect air intake and affect the engine's combustion process, causing misfires.", "Engine misfires can occur when there are problems with cylinder compression, leading to uneven power in cylinders."],

  price: ["$30 - $100 or more for a set of spark plugs.", "$50 - $300 or more for ignition system repairs.", "$100 - $500 or more for fuel system repairs.", "Variable, depending on the extent of the leak and necessary repairs.", "Variable, depending on the specific issue and necessary repairs."]

  
}

const galleryBox5Ans4 = {

  header: ["Faulty Oxygen Sensor", "Loose Gas Cap", "Malfunctioning Mass Airflow Sensor (MAF)", "Emission System Issues", "Ignition System Problems"],

  fix: ["Replace the malfunctioning oxygen sensor to ensure proper air-fuel mixture and emissions control.", "Tighten or replace the gas cap to prevent a loose cap from triggering the Check Engine light.", "Replace the MAF sensor if it's malfunctioning, affecting air-fuel mixture and engine performance.", "Diagnose and repair the emission control system components, such as the catalytic converter or EGR valve, to address emission-related problems.", "Diagnose and repair the ignition system components, such as the spark plugs, coils, or ignition module, to resolve ignition-related issues."],

  description: ["The Check Engine light can illuminate due to a faulty oxygen sensor, impacting engine performance and emissions.", "A loose or damaged gas cap can cause a vacuum leak in the fuel system, leading to the illumination of the Check Engine light.", "A faulty MAF sensor can lead to incorrect measurements of incoming air, causing the Check Engine light to come on.", "The Check Engine light can be triggered by emission system issues, impacting emissions and overall vehicle performance.", "Engine misfires or ignition problems can lead to the illumination of the Check Engine light."],

  price: ["$100 - $200 or more for a new oxygen sensor.", "Minimal cost for a replacement gas cap.", "$100 - $300 or more for a new MAF sensor.", "Variable, depending on the specific emission system issue and necessary repairs.", "$50 - $300 or more for ignition system repairs."]
  
}

const galleryBox5Ans5 = {
  header: ["Dirty Air Filter", "Faulty Oxygen Sensor", "Underinflated Tires", "Worn Spark Plugs", "Fuel System Issues"],

  fix: ["Replace the dirty air filter to ensure proper air intake and fuel efficiency.", "Replace the malfunctioning oxygen sensor to maintain the correct air-fuel mixture and optimize fuel efficiency.", "Inflate the tires to the recommended pressure levels to improve fuel efficiency.", "Replace worn spark plugs to ensure proper combustion and maintain fuel efficiency.", "Inspect and repair the fuel system, including the fuel pump, injectors, or filters, to optimize fuel delivery."],

  description: ["Reduced fuel efficiency can occur when the air filter is clogged, restricting airflow to the engine.", "A faulty oxygen sensor can lead to incorrect fuel mixture and reduced fuel efficiency.", "Fuel efficiency can suffer when tires are underinflated, leading to increased rolling resistance.", "Fuel efficiency may decline due to worn spark plugs, leading to incomplete combustion.", "Fuel system issues can lead to improper fuel delivery, impacting fuel efficiency."],

  price: ["$10 - $20 for a new air filter.", "$100 - $200 or more for a new oxygen sensor.", "Minimal cost for a tire pressure gauge and air.", "$30 - $100 or more for a set of spark plugs.", "Variable, depending on the specific fuel system issue and necessary repairs."]

}

const galleryBox5Ans6 = {
  header: ["Clogged Fuel Injectors", "Faulty Mass Airflow Sensor (MAF)", "Vacuum Leaks", "Worn Spark Plugs or Ignition System", "Clogged Air Filter"],

  fix: ["Clean or replace clogged fuel injectors to ensure proper fuel delivery and prevent hesitation or surging.", "Replace the malfunctioning MAF sensor, which affects air-fuel mixture and engine performance.", "Locate and repair vacuum leaks, which can disrupt the air-fuel mixture and lead to engine hesitation.", "Replace worn spark plugs or diagnose and repair ignition system components to ensure proper combustion.", "Replace the clogged air filter to ensure proper airflow to the engine and prevent hesitation or surging."],

  description: ["Hesitation or surging can occur when fuel injectors are clogged, disrupting the fuel flow to the engine.", "A faulty MAF sensor can lead to incorrect measurements of incoming air, causing hesitation or surging.", "Vacuum leaks can result in incorrect air intake and affect the engine's combustion process, causing hesitation or surging.", "Hesitation or surging can result from problems within the ignition system, leading to misfires or delayed ignition.", "Reduced airflow due to a clogged air filter can lead to hesitation or surging during acceleration."],

  price: ["$50 - $100 for cleaning or $100 - $500 for replacement.", "$100 - $300 or more for a new MAF sensor.", "Variable, depending on the extent of the leak and necessary repairs.", "$30 - $100 or more for a set of spark plugs. Ignition system repair costs may vary.", "$10 - $20 for a new air filter."]

  
}

const galleryBox5Ans7 = {
  header: ["Low-Quality Fuel", "Incorrect Ignition Timing", "Carbon Deposits", "Faulty Knock Sensor", "Overheating"],

  fix: ["Use higher-octane or top-tier gasoline to prevent knocking and pinging.", "Adjust the ignition timing to the manufacturer's specifications to prevent knocking.", "Clean carbon deposits from the combustion chamber or valves to prevent knocking.", "Replace the malfunctioning knock sensor to ensure it detects knocking and adjusts timing.", "Address cooling system issues, such as a malfunctioning thermostat or low coolant, to prevent engine overheating and knocking."],

  description: ["Engine knocking or pinging can result from low-quality or low-octane fuel that ignites prematurely.", "Engine knocking can occur when the ignition timing is too advanced or retarded, leading to improper combustion.", "Engine knocking may result from carbon buildup that leads to hot spots and pre-ignition.", "A malfunctioning knock sensor can prevent the engine from responding to knocking, leading to continued knocking.", "Engine knocking can be caused by overheating, which results in pre-ignition."],

  price: ["Slightly more expensive for higher-octane fuel.", "DIY adjustment or professional service, cost varies.", "DIY cleaning or professional service, cost varies.", "$50 - $150 or more for a new knock sensor.", "Cost varies depending on the specific cooling system issue and necessary repairs."]

  
}

const galleryBox5Ans8 = {
  header: ["Worn Serpentine Belt", "Engine Knocking", "Engine Ticking or Clicking", "Whining or Grinding Sounds", "Hissing or Whistling Noises"],

  fix: ["Replace the worn serpentine belt to eliminate squealing or chirping noises.", "Address the underlying issue causing the knocking, which may include issues like low-quality fuel, carbon buildup, or incorrect ignition timing.", "Identify the source of ticking or clicking sounds, which can vary from valvetrain noise to low oil levels, and address the root cause.", "Diagnose and repair the source of whining or grinding noises, which can be due to issues like worn bearings or damaged components.", "Identify and address the source of hissing or whistling noises, which can be related to air or fluid leaks."],

  description: ["Strange engine noises, such as squealing or chirping, can result from a worn serpentine belt.", "Engine knocking is characterized by metallic, repetitive noises and may indicate various issues that need diagnosis and repair.", "Ticking or clicking noises can signal valvetrain issues, low oil levels, or other engine-related problems that require attention.", "Whining or grinding noises often stem from issues with rotating components, such as bearings or pulleys, that may require replacement.", "Hissing or whistling noises may be associated with leaks in the intake system, vacuum lines, or other components requiring repair."],

  price: ["$50 - $150 for a new serpentine belt and installation.", "Variable, depending on the specific issue causing the knocking and necessary repairs.", "Variable, depending on the source of the noise and the extent of repairs needed.", "Variable, depending on the specific component causing the noise and necessary repairs.", "Variable, depending on the location and severity of the leak and necessary repairs."]

}

const galleryBox5Ans9 = {

  header: ["Malfunctioning Emissions Control System", "Engine Misfires", "Faulty Oxygen Sensor", "Clogged Catalytic Converter", "Incorrect Fuel Mixture"],

  fix: ["Diagnose and repair the emissions control system, which may involve replacing components like the catalytic converter or oxygen sensors.", "Address engine misfires by replacing spark plugs, ignition coils, or addressing other factors affecting combustion.", "Replace the malfunctioning oxygen sensor to ensure proper air-fuel mixture and reduce emissions.", "Replace a clogged catalytic converter to restore proper exhaust flow and reduce emissions.", "Adjust the air-fuel mixture or diagnose and repair issues causing incorrect fuel mixture to reduce emissions."],

  description: ["Excessive exhaust emissions can occur when the emissions control system, including the catalytic converter and oxygen sensors, is not functioning correctly.", "Engine misfires can lead to unburned fuel in the exhaust, contributing to excessive emissions.", "A malfunctioning oxygen sensor can lead to incorrect fuel mixture, resulting in increased emissions.", "A clogged catalytic converter can restrict exhaust flow, increasing emissions and reducing engine performance.", "An incorrect fuel mixture, either too lean or too rich, can lead to increased emissions."],

  price: ["Variable, depending on the specific component needing replacement and necessary repairs.", "Variable, depending on the components to be replaced and necessary repairs.", "$100 - $200 or more for a new oxygen sensor.", "$100 - $600 or more for a new catalytic converter, plus installation.", "Variable, depending on the specific issue causing the incorrect fuel mixture and necessary repairs."]

  
}


const galleryBox5Ans10 = {

  header: ["Faulty Engine Coolant Temperature Sensor", "Weak Fuel Pump", "Vacuum Leaks", "Dirty or Clogged Fuel Injectors", "Weak Battery or Faulty Alternator", "Ignition Timing Issues", "Dirty Air Filter"],

  fix: ["Replace the malfunctioning coolant temperature sensor to ensure accurate temperature readings for better hot starts.", "Replace the weak or failing fuel pump to ensure adequate fuel pressure for hot starts.", "Diagnose and repair vacuum leaks, which can affect the air-fuel mixture and make hot starting difficult.", "Clean or replace dirty or clogged fuel injectors to ensure proper fuel atomization for hot starts.", "Replace a weak battery or malfunctioning alternator, which can impact electrical power for hot starting.", "Adjust the ignition timing to the manufacturer's specifications to ensure proper hot starting.", "Replace a dirty air filter to ensure proper air intake for hot starts."],

  description: ["A malfunctioning coolant temperature sensor can lead to incorrect temperature readings, affecting hot starting.", "A weak fuel pump may struggle to maintain the required fuel pressure during hot starts.", "Vacuum leaks can disrupt the air-fuel mixture and cause issues with hot starting.", "Dirty or clogged fuel injectors can result in poor fuel atomization and difficulties in hot starting.", "A weak battery or faulty alternator may struggle to provide adequate electrical power for hot starts.", "Incorrect ignition timing can result in poor hot starting due to improper combustion.", "A dirty air filter can restrict air intake and affect hot starting."],

  price: ["$20 - $50 for a new sensor, plus installation.", "$50 - $200 for a new fuel pump, plus installation.", "Variable, depending on the source of the vacuum leaks and necessary repairs.", "$50 - $100 for a professional cleaning or $100 - $300 for new injectors, plus installation.", "Variable, depending on whether you need a new battery, alternator, or both, plus installation.", "DIY adjustment or professional service, cost varies.", "$10 - $20 for a new air filter."]

  
}

const galleryBox5Ans11 = {

  header: ["Faulty Alternator", "Loose or Corroded Battery Connections", "Failing Battery", "Damaged Wiring or Connectors", "Malfunctioning Voltage Regulator"],

  fix: ["Replace the faulty alternator, which is responsible for charging the battery and supplying power to the vehicle's electrical system.", "Inspect and tighten loose or corroded battery connections to ensure a reliable electrical connection.", "Replace the failing battery with a new one to maintain a consistent power supply.", "Inspect and repair any damaged wiring or connectors that may be causing intermittent electrical issues.", "Replace the malfunctioning voltage regulator, which controls the alternator's output voltage and ensures a steady supply of electrical power."],

  description: ["Flickering dashboard lights can occur when the alternator is not providing a consistent electrical supply to the vehicle's electrical system.", "Loose or corroded battery connections can disrupt the flow of electrical current, resulting in intermittent electrical issues.", "A failing battery may not hold a charge consistently, leading to electrical problems, including flickering lights.", "Intermittent electrical issues can be caused by damaged wiring or connectors within the vehicle's electrical system.", "The voltage regulator is essential for maintaining a steady electrical supply, and a malfunction can result in intermittent electrical problems, including flickering lights."],

  price: ["$100 - $400 or more for a new alternator, plus installation.", "DIY tightening or minimal cost for cleaning and repairing battery connections.", "$100 - $200 or more for a new battery.", "Variable, depending on the extent of damage and necessary repairs to the wiring or connectors.", "$50 - $150 for a new voltage regulator, plus installation."]

  
}

const galleryBox5Ans12 = {

  header: ["Worn or Damaged Key", "Steering Wheel Lock", "Faulty Ignition Lock Cylinder", "Shifter Interlock Issues"],

  fix: ["Replace a worn or damaged key with a new one to ensure it fits and turns smoothly in the ignition.", "Turn the steering wheel gently to release it from the lock position while attempting to turn the key.", "Replace the faulty ignition lock cylinder, which may be damaged or worn, preventing the key from turning.", "Diagnose and repair any shifter interlock issues that may be preventing the key from turning."],

  description: ["A worn or damaged key may not fit or turn smoothly in the ignition, leading to key sticking.", "The steering wheel may lock in position, preventing the key from turning. Gently turning the wheel while trying to turn the key can release it.", "A faulty ignition lock cylinder may be damaged or worn, causing the key to get stuck in the ignition.", "Issues with the shifter interlock system can prevent the key from turning, especially if the vehicle is not in the correct gear position."],

  price: ["Variable, depending on the cost of key replacement or rekeying.", "No cost if resolved by turning the steering wheel. If not, potential costs may be involved in diagnosing and repairing the issue.", "$100 - $250 or more for a new ignition lock cylinder, plus installation.", "Variable, depending on the diagnosis and necessary repairs to the shifter interlock system."]
  
}



const galleryBox5 = {
  header: "What's wrong with your Ignition System?",
  checkOptions: ["Difficulty starting the engine", "Engine stalling or shutting off unexpectedly", "Engine Misfires","Check Engine or Service Engine Soon light illuminated","Reduced fuel efficiency","Hesitation or surging when accelerating", "Engine knocking or pinging", "Strange Engine Noises", "Excessive exhaust emission", "Engine difficulty starting when hot", "Intermitten Electrical Issues, such as flickering dashboard lights","Ignition key gets stuck"],
  Answers: [galleryBox5Ans1, galleryBox5Ans2, galleryBox5Ans3, galleryBox5Ans4, galleryBox5Ans5,galleryBox5Ans6, galleryBox5Ans7, galleryBox5Ans8, galleryBox5Ans9,galleryBox5Ans10,galleryBox5Ans11,galleryBox5Ans12]
};

const galleryBox6Ans1 = {
  header: ["Weak or Failing Battery", "Faulty Alternator", "Loose or Corroded Battery Connections", "Aging Headlight Bulbs", "Damaged Wiring or Connectors"],

  fix: ["Replace a weak or failing battery to ensure a consistent power supply to the electrical system, including the headlights.", "Replace the faulty alternator, which is responsible for charging the battery and supplying power to the vehicle's electrical system.", "Inspect and tighten loose or corroded battery connections to ensure a reliable electrical connection for the headlights.", "Replace aging headlight bulbs with new ones to improve brightness.", "Inspect and repair any damaged wiring or connectors that may be causing headlight dimming."],

  description: ["Dimming headlights can be caused by a weak or failing battery that struggles to provide sufficient power.", "A faulty alternator can result in insufficient charging of the battery, leading to dimming headlights.", "Loose or corroded battery connections can disrupt the flow of electrical current, causing dimming of the headlights.", "Aging headlight bulbs may not emit as much light, resulting in dimming over time.", "Dimming headlights can also be caused by damaged wiring or connectors within the vehicle's electrical system."],

  price: ["$100 - $200 or more for a new battery, plus installation.", "$100 - $400 or more for a new alternator, plus installation.", "DIY tightening or minimal cost for cleaning and repairing battery connections.", "$20 - $50 for a new set of headlight bulbs.", "Variable, depending on the extent of damage and necessary repairs to the wiring or connectors."]

}

const galleryBox6Ans2 = {

  header: ["Weak or Failing Battery", "Faulty Alternator", "Loose or Corroded Battery Connections", "Dim Interior Light Bulbs", "Damaged Wiring or Connectors"]
,
  fix: ["Replace a weak or failing battery to ensure a consistent power supply to the electrical system, including interior lights.", "Replace the faulty alternator, which is responsible for charging the battery and supplying power to the vehicle's electrical system.", "Inspect and tighten loose or corroded battery connections to ensure a reliable electrical connection for interior lights.", "Replace dim interior light bulbs with new ones to improve brightness.", "Inspect and repair any damaged wiring or connectors that may be causing dim interior lights."]
,
  description: ["Dim interior lights can be caused by a weak or failing battery that struggles to provide sufficient power for lighting.", "A faulty alternator can result in insufficient charging of the battery, leading to dim interior lights.", "Loose or corroded battery connections can disrupt the flow of electrical current, causing dim interior lighting.", "Dim interior light bulbs may not emit as much light, resulting in dimming over time.", "Dim interior lights can also be caused by damaged wiring or connectors within the vehicle's electrical system."]
,
  price: ["$100 - $200 or more for a new battery, plus installation.", "$100 - $400 or more for a new alternator, plus installation.", "DIY tightening or minimal cost for cleaning and repairing battery connections.", "$10 - $20 for a new set of interior light bulbs.", "Variable, depending on the extent of damage and necessary repairs to the wiring or connectors."]


}

const galleryBox6Ans3 = {

  header: ["Faulty Alternator", "Loose or Corroded Battery Connections", "Weak or Failing Battery", "Damaged Wiring or Connectors", "Voltage Regulator Issues", "Failing Light Bulbs"]
,
fix: ["Replace the faulty alternator, which is responsible for charging the battery and supplying power to the vehicle's electrical system, including lights.", "Inspect and tighten loose or corroded battery connections to ensure a reliable electrical connection for lights.", "Replace a weak or failing battery to ensure a consistent power supply to the electrical system.", "Inspect and repair any damaged wiring or connectors that may be causing flickering lights.", "Replace the malfunctioning voltage regulator, which controls the alternator's output voltage and ensures a steady supply of electrical power.", "Replace failing light bulbs, both interior and exterior, to eliminate flickering."]
,
description: ["Flickering interior or exterior lights can be caused by a faulty alternator that leads to inconsistent electrical power supply.", "Loose or corroded battery connections can disrupt the flow of electrical current, causing lights to flicker.", "A weak or failing battery may not provide a consistent power source, resulting in flickering lights.", "Flickering lights can also be attributed to damaged wiring or connectors within the vehicle's electrical system.", "Issues with the voltage regulator can lead to fluctuations in electrical power, causing flickering lights.", "Flickering can occur when light bulbs, both interior and exterior, are failing or near the end of their lifespan."]
,
price: ["$100 - $400 or more for a new alternator, plus installation.", "DIY tightening or minimal cost for cleaning and repairing battery connections.", "$100 - $200 or more for a new battery, plus installation.", "Variable, depending on the extent of damage and necessary repairs to the wiring or connectors.", "$50 - $150 for a new voltage regulator, plus installation.", "Variable, depending on the type and number of light bulbs that need replacement."]


}

const galleryBox6Ans4 = {

  header: ["Blown Fuses", "Faulty Relays", "Battery Issues", "Wiring Problems", "Faulty Switches or Controls"]
,
fix: ["Replace blown fuses with new ones that match the specified amperage to restore functionality to electrical accessories.", "Replace faulty relays, which are responsible for controlling electrical circuits, to ensure proper accessory operation.", "Check and address any battery issues, such as a weak or failing battery, to ensure sufficient power for electrical accessories.", "Inspect and repair wiring problems that may be interrupting the electrical circuits of accessories.", "Replace faulty switches or controls that may be causing issues with accessory operation."]
,
description: ["Electrical accessories may malfunction due to blown fuses, which can disrupt power supply to the accessories.", "Faulty relays can lead to the improper functioning or complete failure of electrical accessories.", "Battery issues, such as a weak or failing battery, can result in insufficient power for accessories.", "Wiring problems, including damage or loose connections, can cause electrical accessories to malfunction.", "Malfunctioning switches or controls can result in accessory operation issues, including failures or erratic behavior."]
,
price: ["$2 - $10 for a pack of fuses.", "$10 - $30 for a new relay.", "$100 - $200 or more for a new battery, plus installation.", "Variable, depending on the extent of damage and necessary repairs to the wiring.", "$10 - $50 for a new switch or control."]


}

const galleryBox6Ans5 = {

  header: ["Faulty Starter Motor", "Weak or Failing Battery", "Bad Starter Solenoid", "Ignition Switch Problems", "Wiring Issues"]
,
fix: ["Replace the faulty starter motor with a new one to restore proper engine starting functionality.", "Check and address any battery issues, such as a weak or failing battery, to ensure sufficient power for the starter motor.", "Replace a bad starter solenoid, which is responsible for engaging the starter motor with the flywheel.", "Diagnose and repair ignition switch problems that may be preventing the starter motor from receiving the necessary signal.", "Inspect and repair any wiring issues that may be disrupting the electrical connections to the starter motor."]
,
description: ["An inoperative starter motor is often the result of a faulty starter motor itself, preventing it from cranking the engine.", "A weak or failing battery may not provide the necessary electrical power for the starter motor to engage.", "A bad starter solenoid can prevent the starter motor from engaging with the flywheel.", "Ignition switch problems can lead to a lack of signal to the starter motor, causing it to be inoperative.", "Wiring issues, including damage or loose connections, can disrupt the electrical connections to the starter motor, rendering it inoperative."]
,
price: ["$100 - $300 or more for a new starter motor, plus installation.", "$100 - $200 or more for a new battery, plus installation.", "$20 - $50 for a new starter solenoid, plus installation.", "$20 - $50 for a new ignition switch, plus installation.", "Variable, depending on the extent of damage and necessary repairs to the wiring."]


}

const galleryBox6Ans6 = {
  header: ["Diagnostic Scan and Code Reading", "Sensor Replacement", "Software Updates", "Electrical Checks", "Component Replacement"]
,
fix: ["Perform a diagnostic scan and code reading to identify the specific issue triggering the warning lights and error messages.", "Replace faulty sensors that are causing the warnings. This may include oxygen sensors, ABS sensors, etc.", "Apply software updates to the vehicle's control modules to address software-related issues triggering warning lights.", "Conduct electrical checks to ensure wiring and connectors are functioning properly and not causing the warnings.", "Replace faulty components, such as the catalytic converter, if they are triggering warning lights and error messages."]
,
description: ["Warning lights and error messages may appear due to a variety of issues. A diagnostic scan is needed to pinpoint the specific problem.", "Faulty sensors, such as oxygen sensors or ABS sensors, can trigger warning lights related to engine or brake systems.", "Software-related issues may trigger warning lights, and software updates can resolve these problems.", "Electrical checks ensure that wiring and connectors are not causing false warning lights.", "In some cases, faulty components, like the catalytic converter, may need replacement to eliminate warning lights and error messages."]
,
price: ["$50 - $150 or more for a diagnostic scan and code reading.", "$50 - $100 or more per sensor replacement, plus labor.", "Variable, depending on the complexity of the software updates.", "Variable, depending on the electrical checks and any necessary repairs.", "Variable, depending on the specific faulty component and the cost of replacement."]


}


const galleryBox6 = {
  header: "What's wrong with your Electrical System?",
  checkOptions: ["Dimming Headlights", "dim interior lights", "Flickering interior or exterior lights", "Electrical Accessories Malfunctioning", "Inoperative Starter Motor", "Warning Lights and Error Messages"],
  Answers: [galleryBox6Ans1,galleryBox6Ans2,galleryBox6Ans3,galleryBox6Ans4,galleryBox6Ans5,galleryBox6Ans6 ]
};

const galleryBox7Ans1 = {

  header: ["Rich Fuel Mixture", "Clogged Air Filter", "Malfunctioning Fuel Injectors", "Faulty Oxygen Sensors", "Worn Spark Plugs"]
,
fix: ["Adjust the air-fuel mixture to correct a rich fuel mixture that's causing black smoke.", "Replace a clogged air filter to ensure proper airflow and prevent rich fuel mixture.", "Clean or replace malfunctioning fuel injectors that may be delivering excess fuel.", "Replace faulty oxygen sensors to provide accurate feedback for fuel management.", "Install new spark plugs to improve combustion efficiency and reduce black smoke."]
,
description: ["Black smoke from the exhaust is often due to a rich fuel mixture, where there is too much fuel relative to air.", "A clogged air filter can restrict airflow, leading to improper combustion and rich fuel mixture.", "Malfunctioning fuel injectors may deliver excessive fuel into the combustion chambers.", "Faulty oxygen sensors can lead to inaccurate feedback for fuel management, causing a rich mixture.", "Worn spark plugs may not ignite fuel properly, leading to inefficient combustion and black smoke."]
,
price: ["Variable, depending on the specific adjustments needed to the air-fuel mixture.", "$10 - $20 for a new air filter.", "$50 - $100 or more per fuel injector cleaning or replacement, plus labor.", "$50 - $100 or more for each oxygen sensor replacement, plus labor.", "$20 - $40 for a set of new spark plugs."]


}

const galleryBox7Ans2 = {

  header: ["Maintenance Tune-Up", "Tire Pressure Checks", "Air Filter Replacement", "Fuel System Cleaning", "Oxygen Sensor Replacement"]
,
fix: ["Perform a maintenance tune-up, including checking and replacing spark plugs, fuel filters, and ignition components.", "Regularly check and maintain proper tire pressure to reduce rolling resistance and improve fuel efficiency.", "Replace a clogged or dirty air filter to ensure proper airflow for combustion.", "Clean the fuel system to remove carbon deposits and maintain efficient fuel delivery.", "Replace faulty oxygen sensors to ensure accurate feedback for fuel management."]
,
description: ["Poor fuel efficiency may be due to the need for a maintenance tune-up, which includes spark plug and filter replacement.", "Low tire pressure can increase rolling resistance, leading to decreased fuel efficiency.", "A clogged or dirty air filter restricts airflow, affecting combustion efficiency and fuel efficiency.", "Carbon deposits in the fuel system can hinder fuel delivery and reduce efficiency.", "Faulty oxygen sensors can lead to inaccurate feedback for fuel management, resulting in poor fuel efficiency."]
,
price: ["$50 - $100 or more for a maintenance tune-up, including parts and labor.", "Minimal cost for tire pressure checks and maintenance.", "$10 - $20 for a new air filter.", "$50 - $100 or more for a fuel system cleaning, plus labor.", "$50 - $100 or more for each oxygen sensor replacement, plus labor."]


}


const galleryBox7Ans3 = {

  header: ["Clogged Air Filter", "Weak or Failing Battery", "Faulty Spark Plugs", "Fuel System Issues", "Transmission Problems"]
,
fix: ["Replace a clogged air filter to ensure proper airflow and improve engine performance.", "Check and address any battery issues, such as a weak or failing battery, to ensure sufficient power for the vehicle.", "Replace faulty spark plugs to improve combustion efficiency and engine power.", "Inspect and address fuel system issues that may be affecting fuel delivery and engine performance.", "Diagnose and resolve transmission problems that can hinder power transfer to the wheels."]
,
description: ["A clogged air filter can restrict airflow, leading to decreased engine performance and a lack of power.", "A weak or failing battery may not provide the necessary electrical power for engine systems, resulting in power loss.", "Faulty spark plugs can hinder combustion efficiency, leading to reduced power output.", "Fuel system issues can disrupt fuel delivery, affecting engine performance and power.", "Transmission problems can result in power loss as the transmission struggles to transfer power to the wheels."]
,
price: ["$10 - $20 for a new air filter.", "$100 - $200 or more for a new battery, plus installation.", "$20 - $40 for a set of new spark plugs.", "Variable, depending on the extent of fuel system issues and necessary repairs.", "Variable, depending on the specific transmission issues and required repairs."]


}


const galleryBox7 = {
  header: "What's wrong with your Fuel System?",
  checkOptions: ["Black Smoke from the Exhaust", "Poor Fuel Efficiency", "lack of car power"],
  Answers: [galleryBox7Ans1, galleryBox7Ans2, galleryBox7Ans3]
};

const galleryBox8Ans1 = {

  header: ["Low or Contaminated Transmission Fluid", "Clutch Issues", "Shift Linkage Problems", "Worn Synchronizers", "Transmission Problems"]
,
fix: ["Check and replace low or contaminated transmission fluid to ensure smooth gear shifting.", "Diagnose and address clutch issues, such as a worn clutch plate or a malfunctioning clutch master cylinder.", "Inspect and repair shift linkage problems that may be causing difficulty in selecting gears.", "Replace worn synchronizers in the transmission to improve gear engagement.", "Diagnose and resolve transmission problems, which may involve internal repairs or replacement."]
,
description: ["Difficulty shifting gears can be caused by low or contaminated transmission fluid, affecting lubrication and gear engagement.", "Clutch issues, such as a worn clutch plate or a malfunctioning clutch master cylinder, can result in difficulty engaging and disengaging the clutch.", "Shift linkage problems, including damaged cables or bushings, can hinder the smooth selection of gears.", "Worn synchronizers can lead to grinding and difficulty engaging gears, particularly during gear changes.", "Internal transmission problems, such as damaged gears or bearings, can cause difficulty in shifting gears."]
,
price: ["$50 - $100 or more for a transmission fluid change, including parts and labor.", "$100 - $500 or more for clutch repairs or replacement, plus labor.", "$50 - $100 or more for shift linkage repairs, plus labor.", "$100 - $300 or more for synchronizer replacement, plus labor.", "Variable, depending on the specific transmission problems and required repairs."]


}

const galleryBox8Ans2 = {

  header: ["Low or Contaminated Transmission Fluid", "Worn Clutch", "Clutch Cable or Hydraulic Issues", "Solenoid Problems", "Transmission Issues"]
,
fix: ["Check and replace low or contaminated transmission fluid to ensure proper lubrication and prevent gear slipping.", "Replace a worn clutch to ensure effective engagement of gears.", "Inspect and address clutch cable or hydraulic issues, which can affect clutch actuation and gear engagement.", "Diagnose and resolve solenoid problems that may disrupt gear changes in automatic transmissions.", "Diagnose and address transmission issues, which may involve internal repairs or replacement."]
,
description: ["Slipping gears can result from low or contaminated transmission fluid, reducing the friction required for gear engagement.", "A worn clutch may not effectively engage gears, leading to slipping or difficulty staying in gear.", "Clutch cable or hydraulic issues can affect the smooth actuation of the clutch, causing gear slipping.", "Solenoid problems in automatic transmissions can disrupt gear changes, causing slipping.", "Internal transmission issues, such as damaged gears or bearings, can lead to gear slipping or difficulty staying in gear."]
,
price: ["$50 - $100 or more for a transmission fluid change, including parts and labor.", "$100 - $500 or more for clutch replacement, plus labor.", "$50 - $100 or more for clutch cable or hydraulic repairs, plus labor.", "$50 - $150 or more for solenoid replacement, plus labor.", "Variable, depending on the specific transmission problems and required repairs."]

  
}

const galleryBox8Ans3 = {

  header: ["Low or Contaminated Transmission Fluid", "Clutch Issues", "Worn Clutch Disc", "Solenoid Problems", "Transmission Issues"]
,
fix: ["Check and replace low or contaminated transmission fluid to ensure proper lubrication and prevent delayed gear engagement.", "Diagnose and address clutch issues, such as a worn clutch plate or a malfunctioning clutch master cylinder, which can cause delays in clutch engagement.", "Replace a worn clutch disc to improve the smooth operation of the clutch and reduce gear engagement delays.", "Diagnose and resolve solenoid problems that may disrupt gear changes in automatic transmissions.", "Diagnose and address transmission issues, which may involve internal repairs or replacement."]
,
description: ["Delayed gear engagement can result from low or contaminated transmission fluid, reducing the friction required for gear engagement.", "Clutch issues, such as a worn clutch plate or a malfunctioning clutch master cylinder, can cause delays in clutch engagement and gear selection.", "A worn clutch disc can hinder the smooth operation of the clutch, leading to delays in gear engagement.", "Solenoid problems in automatic transmissions can disrupt gear changes, causing delays in gear engagement.", "Internal transmission issues, such as damaged gears or bearings, can lead to gear engagement delays."]
,
price: ["$50 - $100 or more for a transmission fluid change, including parts and labor.", "$100 - $500 or more for clutch repairs or replacement, plus labor.", "$100 - $300 or more for a new clutch disc, plus labor.", "$50 - $150 or more for solenoid replacement, plus labor.", "Variable, depending on the specific transmission problems and required repairs."]

  
}

const galleryBox8Ans4 = {

  header: ["Replace Gasket or Seal", "Tighten Loose Bolts", "Replace Transmission Pan", "Repair Transmission Lines", "Fix Transmission Cooler"]
,
fix: ["Replace the gasket or seal that is causing the transmission fluid leak.", "Tighten any loose bolts or fasteners around the transmission or transmission pan.", "Replace the transmission pan if it's damaged or the source of the leak.", "Repair damaged or corroded transmission lines that may be leaking fluid.", "Fix issues with the transmission cooler, which may be leaking and causing the fluid loss."]
,
description: ["Leaking transmission fluid is often caused by a faulty gasket or seal that needs replacement.", "Loose bolts or fasteners can lead to leaks around the transmission or transmission pan.", "A damaged or corroded transmission pan may need replacement to stop the fluid leak.", "Leaking transmission lines can result from damage or corrosion and require repair.", "Issues with the transmission cooler can cause leaks in the cooling system, resulting in fluid loss."]
,
price: ["$50 - $150 or more for gasket or seal replacement, plus labor.", "Variable, depending on the number of loose bolts or fasteners and any required parts.", "$100 - $300 or more for a new transmission pan, plus labor.", "Variable, depending on the extent of damage to transmission lines and necessary repairs.", "Variable, depending on the issues with the transmission cooler and required repairs."]

  
}

const galleryBox8Ans5 = {
  header: ["Diagnostic Scan", "Transmission Fluid Check", "Transmission Solenoid Replacement", "Torque Converter Repair", "Transmission Overhaul"]
,
fix: ["Perform a diagnostic scan to retrieve error codes and pinpoint the issue triggering the transmission warning light.", "Check the transmission fluid level and quality to ensure it's at the correct level and not contaminated.", "Replace malfunctioning transmission solenoids that may be causing transmission problems.", "Repair or replace the torque converter if it's damaged or not functioning properly.", "Consider a transmission overhaul if there are severe internal issues that need extensive repairs."]
,
description: ["A transmission warning light illuminates to indicate a problem in the transmission system, which requires diagnosis and repair.", "Low or contaminated transmission fluid can lead to transmission problems and trigger the warning light.", "Malfunctioning transmission solenoids can disrupt gear changes and trigger the warning light.", "Issues with the torque converter can affect power transfer and trigger the warning light.", "A transmission overhaul may be necessary if there are significant internal issues that cannot be resolved with minor repairs."]
,
price: ["$50 - $100 or more for a diagnostic scan to retrieve error codes and identify the issue.", "Variable, depending on the need for transmission fluid change, replacement, or other maintenance.", "$50 - $150 or more for each transmission solenoid replacement, plus labor.", "$150 - $500 or more for torque converter repair or replacement, plus labor.", "Variable, depending on the extent of internal transmission issues and the need for a complete overhaul."]

  
}

const galleryBox8Ans6 = {

  header: ["Transmission Fluid Change", "Transmission Filter Replacement", "Adjusting Shift Points", "Transmission Control Module Reprogramming", "Transmission Repair or Replacement"]
,
fix: ["Change the transmission fluid to the correct type and level to ensure smoother shifting.", "Replace the transmission filter to maintain proper fluid flow and improve shifting.", "Adjust the shift points in the transmission to provide smoother gear changes.", "Reprogram the transmission control module (TCM) to optimize shifting patterns.", "Consider transmission repair or replacement if there are significant internal issues causing harsh shifting."]
,
description: ["Harsh or jolting shifting can result from old or low transmission fluid, hindering smooth gear changes.", "A clogged or worn transmission filter can restrict fluid flow and result in abrupt shifting.", "Adjusting the shift points in the transmission can lead to smoother gear changes and improved shifting.", "Reprogramming the TCM can optimize shifting patterns for a better driving experience.", "Severe internal issues in the transmission may necessitate repair or replacement to resolve harsh shifting."]
,
price: ["$50 - $100 or more for a transmission fluid change, including parts and labor.", "$20 - $50 or more for a transmission filter replacement, plus labor.", "Variable, depending on the complexity of shift point adjustments and any necessary parts or labor.", "$100 - $300 or more for TCM reprogramming, plus labor.", "Variable, depending on the extent of internal transmission issues and the need for repair or replacement."]

  
}

const galleryBox8Ans7 = {

  header: ["Transmission Fluid Check", "Transmission Linkage Inspection", "Clutch or Torque Converter Issues", "Internal Transmission Problems", "Transmission Replacement"]
,
fix: ["Check the transmission fluid level and quality to ensure it's at the correct level and not contaminated.", "Inspect the transmission linkage for loose or damaged components that may cause neutral sensations.", "Address clutch or torque converter issues that could affect gear engagement.", "Diagnose and resolve internal transmission problems that result in neutral sensations.", "Consider transmission replacement if there are severe internal issues that cannot be repaired."]
,
description: ["A neutral or freewheeling sensation occurs when the transmission disengages from the engine, often due to a malfunction or mechanical issue.", "Loose or damaged transmission linkage components can disrupt gear selection and create a neutral feeling.", "Clutch or torque converter issues may cause disengagement from the engine and result in a neutral sensation.", "Internal transmission problems can lead to gear disengagement and a neutral feeling.", "Transmission replacement may be necessary if there are significant internal issues that cannot be resolved with minor repairs."]
,
price: ["Variable, depending on the need for transmission fluid change, replacement, or other maintenance.", "$50 - $100 or more for transmission linkage inspection and any required repairs, plus labor.", "$100 - $500 or more for clutch or torque converter repairs, plus labor.", "Variable, depending on the extent of internal transmission issues and the need for repair.", "Variable, depending on the severity of internal problems and the need for transmission replacement."]

  
}

const galleryBox8Ans8 = {

  header: ["Transmission Fluid Check", "Transmission Mount Inspection", "Clutch or Torque Converter Issues", "Internal Transmission Problems", "Transmission Replacement"]
,
fix: ["Check the transmission fluid level and quality to ensure it's at the correct level and not contaminated.", "Inspect the transmission mounts for wear, damage, or misalignment that may cause whining in neutral.", "Address clutch or torque converter issues that could lead to whining noises.", "Diagnose and resolve internal transmission problems that may result in whining noises.", "Consider transmission replacement if there are severe internal issues that cannot be repaired."]
,
description: ["A whining noise in neutral can be caused by various transmission-related issues, often indicating a mechanical problem.", "Worn, damaged, or misaligned transmission mounts may cause vibrations and whining sounds in neutral.", "Clutch or torque converter problems can lead to noise issues when the transmission is in neutral.", "Internal transmission issues, such as worn bearings or gears, may produce whining noises.", "Transmission replacement may be necessary if there are significant internal issues that cannot be resolved with minor repairs."]
,
price: ["Variable, depending on the need for transmission fluid change, replacement, or other maintenance.", "$50 - $100 or more for transmission mount inspection and any required repairs, plus labor.", "$100 - $500 or more for clutch or torque converter repairs, plus labor.", "Variable, depending on the extent of internal transmission issues and the need for repair.", "Variable, depending on the severity of internal problems and the need for transmission replacement."]

  
}

const galleryBox8Ans9 = {
  header: ["Transmission Fluid Check", "Transmission Control Module Reprogramming", "Transmission Sensor Inspection", "Internal Transmission Problems", "Transmission Replacement"]
,
fix: ["Check the transmission fluid level and quality to ensure it's at the correct level and not contaminated.", "Reprogram the transmission control module (TCM) to optimize shifting patterns and prevent overshooting or hunting for gears.", "Inspect transmission sensors for malfunctions that may disrupt gear selection.", "Diagnose and resolve internal transmission problems that result in overshooting or hunting for gears.", "Consider transmission replacement if there are severe internal issues that cannot be repaired."]
,
description: ["Overshooting or hunting for gears occurs when the transmission has difficulty finding and engaging the correct gear.", "Reprogramming the TCM can optimize shifting patterns and prevent overshooting or hunting for gears.", "Malfunctioning transmission sensors can lead to incorrect gear selection and shifting issues.", "Internal transmission problems can disrupt gear changes and lead to gear hunting or overshooting.", "Transmission replacement may be necessary if there are significant internal issues that cannot be resolved with minor repairs."]
,
price: ["Variable, depending on the need for transmission fluid change, replacement, or other maintenance.", "$100 - $300 or more for TCM reprogramming, plus labor.", "$50 - $100 or more for transmission sensor inspection and any required repairs, plus labor.", "Variable, depending on the extent of internal transmission issues and the need for repair.", "Variable, depending on the severity of internal problems and the need for transmission replacement."]

}

const galleryBox8 = {
  header: "What's wrong with your Transmission?",
  checkOptions: ["Difficulty Shifting Gears", "Slipping Gears", "Delayed Gear Engagement", "Leaking Transmission Fluid (red or brown fluid)", "Transmission Warning Light illiuminated", "Harsh or Jolting Shifting", "Neutral or Freewheeling Sensation", "Whining Noise in Neutral", "Overshooting or Hunting for Gears"],
  Answers: [galleryBox8Ans1, galleryBox8Ans2, galleryBox8Ans3, galleryBox8Ans4, galleryBox8Ans5, galleryBox8Ans6, galleryBox8Ans7, galleryBox8Ans8, galleryBox8Ans9 ]
};

const galleryBox9Ans1 = {

  header: ["Air Filter Replacement", "Fuel System Inspection", "Spark Plug Check and Replacement", "Catalytic Converter Examination", "Engine Repairs or Replacements"]
,
fix: ["Replace the air filter to ensure proper airflow and prevent excessive fuel combustion.", "Inspect the fuel system for issues such as a clogged fuel injector or a malfunctioning fuel pressure regulator.", "Check and replace spark plugs if they are fouled or not functioning properly.", "Examine the catalytic converter for damage or clogging, which can lead to black smoke.", "Consider engine repairs or replacements if there are internal issues causing the black exhaust smoke."]
,
description: ["Black exhaust smoke is often a result of excessive fuel combustion, indicating an issue within the vehicle's systems.", "A clogged or dirty air filter can disrupt the air-to-fuel ratio and lead to black exhaust smoke.", "Issues with the fuel system, like a clogged fuel injector, can result in excessive fuel burning and black smoke.", "Fouled or malfunctioning spark plugs may not ignite fuel properly, causing black smoke.", "A damaged or clogged catalytic converter can lead to black exhaust smoke due to improper emissions control.", "Severe internal engine issues can also result in black exhaust smoke, requiring major repairs or engine replacement."]
,
price: ["$10 - $20 or more for an air filter replacement, plus labor.", "Variable, depending on the fuel system issues found and the need for repairs, plus labor.", "$2 - $10 or more for each spark plug, plus labor.", "Variable, depending on the condition of the catalytic converter and the need for repair or replacement, plus labor.", "Variable, depending on the extent of internal engine problems and the need for repairs or engine replacement."]


}

const galleryBox9Ans2 = {

  header: ["Coolant Leak Check", "Head Gasket Inspection", "Engine Overheating Repair", "Exhaust System Examination", "Engine Repairs or Replacements"]
,
fix: ["Check for coolant leaks and address any issues to prevent white exhaust smoke from coolant entering the combustion chamber.", "Inspect the head gasket for damage or failure, which may allow coolant to mix with exhaust gases and produce white smoke.", "Repair the engine's cooling system and address overheating issues to prevent white smoke.", "Examine the exhaust system for blockages or damage that could affect exhaust flow.", "Consider engine repairs or replacements if there are internal issues causing white exhaust smoke."]
,
description: ["White exhaust smoke often indicates coolant entering the exhaust system, signaling a potential problem.", "Coolant leaks can lead to white exhaust smoke as coolant is burned in the engine.", "A damaged or failed head gasket may allow coolant to mix with exhaust gases, resulting in white smoke.", "Engine overheating can cause white exhaust smoke due to excessive coolant evaporation.", "Blockages or damage in the exhaust system may affect exhaust flow and lead to white smoke.", "Severe internal engine issues can also result in white exhaust smoke, requiring major repairs or engine replacement."]
,
price: ["Variable, depending on the need to repair coolant leaks and address cooling system issues.", "Variable, depending on the extent of head gasket damage and the need for repairs, plus labor.", "Variable, depending on the engine overheating issues and the need for repairs, plus labor.", "Variable, depending on the condition of the exhaust system and the need for repair or replacement, plus labor.", "Variable, depending on the extent of internal engine problems and the need for repairs or engine replacement."]


}

const galleryBox9Ans3 = {

  header: ["Exhaust Pipe Replacement", "Exhaust System Inspection", "Surface Rust Removal", "Regular Maintenance"]
,
fix: ["Replace the corroded or rusted exhaust pipes with new ones to ensure proper exhaust flow.", "Inspect the entire exhaust system for any additional corrosion or damage that needs attention.", "Remove surface rust from the affected areas using appropriate methods or treatments.", "Prevent corrosion by performing regular maintenance and addressing minor issues before they become severe."]
,
description: ["Visible corrosion or rust in exhaust pipes can affect the integrity of the exhaust system, potentially leading to leaks and performance issues.", "An inspection of the entire exhaust system is necessary to identify the extent of corrosion and potential damage.", "Surface rust can be removed to prevent further deterioration, but severe corrosion may require replacement.", "Regular maintenance and prompt addressing of minor issues can prevent extensive corrosion and costly repairs."]
,
price: ["$100 - $500 or more for exhaust pipe replacement, depending on the vehicle and labor costs.", "Variable, depending on the extent of corrosion or damage found during the inspection and the necessary repairs, plus labor.", "Variable, depending on the severity of surface rust and the method used for removal.", "Variable, depending on the specific maintenance tasks performed and the prevention measures taken to avoid corrosion."]


}

const galleryBox9Ans4 = {
  header: ["Exhaust System Inspection", "Muffler Replacement", "Backpressure Adjustment", "Regular Maintenance"]
,
fix: ["Inspect the entire exhaust system to identify any issues affecting backpressure.", "Replace the muffler with a new one if it's damaged, rusted, or has internal components that restrict backpressure.", "Adjust the exhaust system to achieve the appropriate level of backpressure if needed.", "Prevent issues with backpressure by performing regular maintenance and addressing minor problems early."]
,
description: ["A lack of backpressure can affect engine performance and emissions, often resulting from issues in the exhaust system.", "An inspection of the exhaust system is essential to identify the source of backpressure problems.", "Muffler replacement or adjustments can help achieve the correct level of backpressure.", "Regular maintenance and timely problem resolution can prevent backpressure issues and maintain exhaust system efficiency."]
,
price: ["Variable, depending on the extent of exhaust system issues and the necessary repairs identified during the inspection, plus labor.", "$50 - $200 or more for muffler replacement, depending on the vehicle and labor costs.", "Variable, depending on the adjustments needed to achieve the appropriate backpressure.", "Variable, depending on the specific maintenance tasks performed to prevent backpressure issues."]


}

const galleryBox9 = {
  header: "What's wrong with your Exhaust System?",
  checkOptions: ["black exhaust smoke", "white exhaust smoke", "Visible Corrosion or Rust in exhaust pipes", "Lack of Backpressure"],
  Answers: [galleryBox9Ans1, galleryBox9Ans2, galleryBox9Ans3, galleryBox9Ans4]
};

const galleryBox10Ans1 = {

  header: ["Coolant System Inspection", "Thermostat Replacement", "Radiator Flush and Clean", "Cooling Fan Repair or Replacement", "Regular Cooling System Maintenance"]
,
fix: ["Inspect the coolant system to identify any issues affecting cooling performance.", "Replace the thermostat if it's malfunctioning and not regulating the engine temperature properly.", "Perform a radiator flush and clean to remove buildup that may hinder heat dissipation.", "Repair or replace the cooling fan if it's not functioning correctly and affecting cooling.", "Prevent cooling issues by performing regular maintenance, including coolant changes and system checks."]
,
description: ["Reduced cooling can lead to engine overheating and other related problems, often stemming from issues in the cooling system.", "A comprehensive inspection of the coolant system is crucial to identify the cause of reduced cooling.", "Thermostat replacement can help maintain proper engine temperature by regulating coolant flow.", "A radiator flush and clean can remove buildup that obstructs efficient heat dissipation.", "Cooling fan repair or replacement may be necessary if it's not working properly and affecting cooling.", "Regular maintenance, including coolant changes and system checks, can prevent reduced cooling and overheating."]
,
price: ["Variable, depending on the extent of cooling system issues and the necessary repairs identified during the inspection, plus labor.", "$20 - $50 or more for thermostat replacement, plus labor.", "$50 - $100 or more for radiator flush and clean, plus labor.", "$100 - $300 or more for cooling fan repair or replacement, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent cooling issues."]


}

const galleryBox10Ans2 = {

  header: ["Cabin Air Filter Replacement", "Blower Motor Inspection and Repair", "Air Duct Cleaning", "A/C or Heater System Check", "Regular HVAC System Maintenance"]
,
fix: ["Replace the cabin air filter to improve and maintain proper airflow inside the vehicle.", "Inspect and repair the blower motor if it's malfunctioning and not providing adequate airflow.", "Clean air ducts to remove obstructions and debris that may restrict airflow.", "Check the entire A/C or heater system for issues affecting airflow and repair as needed.", "Prevent weak airflow by performing regular HVAC system maintenance, including filter changes and system checks."]
,
description: ["Weak airflow can result in reduced comfort and inefficient climate control within the vehicle, often due to issues in the HVAC system.", "Replacing the cabin air filter is a simple step to enhance airflow and maintain air quality.", "Malfunctioning blower motors can hinder airflow, requiring inspection and repair.", "Cleaning air ducts can remove obstructions and improve overall airflow in the HVAC system.", "A comprehensive check of the A/C or heater system can identify issues affecting airflow and efficiency.", "Regular maintenance, including filter changes and system checks, can prevent weak airflow and maintain optimal HVAC performance."]
,
price: ["$10 - $20 or more for cabin air filter replacement, plus labor.", "$100 - $300 or more for blower motor inspection and repair, plus labor.", "$50 - $100 or more for air duct cleaning, plus labor.", "Variable, depending on the specific A/C or heater system issues and necessary repairs, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent weak airflow."]


}

const galleryBox10Ans3 = {

  header: ["Cabin Air Filter Replacement", "A/C System Cleaning and Sanitization", "Inspection for Mold or Mildew", "Regular HVAC System Maintenance"]
,
fix: ["Replace the cabin air filter to improve and maintain air quality and reduce odors inside the vehicle.", "Clean and sanitize the A/C system to eliminate odors caused by microbial growth or debris.", "Inspect the A/C system for mold or mildew and address any issues that contribute to unusual odors.", "Prevent unusual A/C odors by performing regular HVAC system maintenance, including filter changes and system checks."]
,
description: ["Unusual A/C odors can result from contaminants or microbial growth in the HVAC system, affecting air quality and comfort.", "Cabin air filter replacement can enhance air quality and reduce odors inside the vehicle.", "Cleaning and sanitizing the A/C system can eliminate odors caused by microbial growth or debris accumulation.", "Inspection for mold or mildew in the A/C system is crucial to identify and address the source of unusual odors.", "Regular maintenance, including filter changes and system checks, can prevent and mitigate unusual A/C odors."]
,
price: ["$10 - $20 or more for cabin air filter replacement, plus labor.", "$50 - $100 or more for A/C system cleaning and sanitization, plus labor.", "Variable, depending on the extent of mold or mildew issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent and address unusual A/C odors."]


}

const galleryBox10Ans4 = {
  
header: ["Refrigerant Check and Recharge", "A/C System Inspection", "Thermostat Replacement", "Regular HVAC System Maintenance"]
,
fix: ["Check the refrigerant levels and recharge the A/C system to ensure consistent cooling.", "Inspect the entire A/C system for issues affecting cooling performance.", "Replace the thermostat if it's malfunctioning and not regulating the A/C system properly.", "Prevent inconsistent cooling by performing regular HVAC system maintenance, including system checks and maintenance tasks."]
,
description: ["Inconsistent cooling can result in discomfort and temperature fluctuations within the vehicle, often stemming from issues in the A/C system.", "Checking refrigerant levels and recharging the A/C system is essential to maintain consistent cooling.", "A comprehensive inspection of the A/C system can identify the source of issues affecting cooling.", "Thermostat replacement can help maintain proper temperature regulation within the A/C system.", "Regular maintenance, including system checks and maintenance tasks, can prevent inconsistent cooling and maintain optimal A/C performance."]
,
price: ["$100 - $200 or more for refrigerant check and recharge, plus labor.", "Variable, depending on the extent of A/C system issues and the necessary repairs identified during the inspection, plus labor.", "$20 - $50 or more for thermostat replacement, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent inconsistent cooling."]


}

const galleryBox10Ans5 = {

  header: ["Sunroof or Moonroof Drain Cleaning", "Clogged A/C Drain Cleaning", "Window Seal Inspection and Repair", "Regular Maintenance"]
,
fix: ["Clean the sunroof or moonroof drains to prevent water leaks from overhead.", "Clear clogged A/C drains to prevent water buildup and leakage.", "Inspect and repair window seals that may be damaged or deteriorated, allowing water to seep in.", "Prevent water leaks inside the vehicle by performing regular maintenance and addressing minor issues."]
,
description: ["Leaking water inside the vehicle can lead to interior damage and discomfort, often resulting from various sources, including sunroof, A/C, or window seal issues.", "Cleaning sunroof or moonroof drains can prevent water from seeping in through overhead openings.", "Clearing clogged A/C drains can prevent water buildup and leakage from the climate control system.", "Inspection and repair of window seals can address sources of water leaks.", "Regular maintenance and timely problem resolution can prevent water leakage inside the vehicle."]
,
price: ["Variable, depending on the extent of the issue and the necessary cleaning and maintenance tasks, plus labor.", "$50 - $100 or more for clearing clogged A/C drains, plus labor.", "Variable, depending on the extent of window seal damage and necessary repairs, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent water leaks inside the vehicle."]


}

const galleryBox10Ans6 = {

  header: ["A/C Clutch Inspection and Repair", "A/C Refrigerant Check and Recharge", "A/C Electrical System Check", "Regular A/C System Maintenance"]
,
fix: ["Inspect and repair the A/C clutch to ensure it engages properly, allowing the A/C system to function.", "Check the refrigerant levels and recharge the A/C system to facilitate clutch engagement.", "Inspect the A/C electrical system for issues affecting clutch operation and address any problems found.", "Prevent A/C clutch issues by performing regular A/C system maintenance, including system checks and maintenance tasks."]
,
description: ["When the A/C clutch does not engage, the A/C system cannot provide cooling, leading to discomfort in warm weather. The issue often stems from clutch, refrigerant, or electrical system problems.", "Inspecting and repairing the A/C clutch is essential to enable proper clutch engagement and A/C functionality.", "Checking refrigerant levels and recharging the A/C system can facilitate clutch engagement by maintaining proper pressure.", "A comprehensive inspection of the A/C electrical system can identify issues affecting clutch operation, which need to be resolved for the A/C to work.", "Regular maintenance, including system checks and maintenance tasks, can prevent A/C clutch issues and ensure optimal A/C performance."]
,
price: ["$100 - $300 or more for A/C clutch inspection and repair, plus labor.", "$100 - $200 or more for refrigerant check and recharge, plus labor.", "Variable, depending on the extent of A/C electrical system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent A/C clutch issues."]


}

const galleryBox10Ans7 = {

  header: ["A/C System Inspection and Diagnostics", "A/C Refrigerant Check and Recharge", "A/C Electrical System Check", "A/C Compressor Inspection and Repair"]
,
fix: ["Perform a comprehensive inspection and diagnostics of the A/C system to identify and address the issue triggering the warning light.", "Check the refrigerant levels and recharge the A/C system to ensure proper pressure and refrigerant quantity.", "Inspect the A/C electrical system for issues affecting the warning light and address any problems found.", "Inspect and repair the A/C compressor if it's malfunctioning, as it can trigger the warning light when not functioning correctly."]
,
description: ["When the A/C warning light is illuminated, it signifies a problem in the A/C system that needs attention. The issue could be related to refrigerant levels, electrical problems, or A/C compressor malfunction.", "Comprehensive inspection and diagnostics are necessary to pinpoint the cause of the illuminated warning light.", "Checking refrigerant levels and recharging the A/C system can resolve issues related to refrigerant pressure.", "A thorough inspection of the A/C electrical system can identify electrical problems leading to the warning light.", "A malfunctioning A/C compressor can trigger the warning light, so it needs inspection and repair to address the issue."]
,
price: ["Variable, depending on the extent of A/C system issues, diagnostics, and the necessary repairs identified during the inspection, plus labor.", "$100 - $200 or more for refrigerant check and recharge, plus labor.", "Variable, depending on the extent of A/C electrical system issues and the necessary repairs identified during the inspection, plus labor.", "$100 - $300 or more for A/C compressor inspection and repair, plus labor."]


}

const galleryBox10Ans8 = {

  header: ["A/C Refrigerant Check and Recharge", "A/C System Inspection", "Engine Cooling System Check", "Regular A/C System Maintenance"]
,
fix: ["Check the refrigerant levels and recharge the A/C system to ensure it provides cold air at idle.", "Perform a thorough inspection of the A/C system to identify issues affecting cooling performance.", "Inspect the engine cooling system to ensure it's functioning properly, as engine temperature can affect A/C performance.", "Prevent warm air at idle by performing regular A/C system maintenance, including system checks and maintenance tasks."]
,
description: ["Experiencing warm air from the A/C when the vehicle is at idle can be uncomfortable and often indicates A/C or engine cooling system issues affecting cooling performance.", "Checking refrigerant levels and recharging the A/C system is essential to maintain cold air at idle.", "A comprehensive inspection of the A/C system can identify issues affecting cooling performance, helping to resolve the problem.", "The engine cooling system should also be inspected to ensure it's functioning properly, as engine temperature can influence A/C performance.", "Regular maintenance, including system checks and maintenance tasks, can prevent warm air at idle and maintain optimal A/C performance."]
,
price: ["$100 - $200 or more for refrigerant check and recharge, plus labor.", "Variable, depending on the extent of A/C system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of engine cooling system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent warm air at idle."]


}

const galleryBox10Ans9 = {

  header: ["A/C System Inspection and Diagnostics", "A/C Refrigerant Check and Recharge", "A/C Vent and Duct Inspection and Cleaning", "Regular A/C System Maintenance"]
,
fix: ["Perform a comprehensive inspection and diagnostics of the A/C system to identify and address the issue causing uneven cooling.", "Check the refrigerant levels and recharge the A/C system to ensure even cooling throughout the vehicle.", "Inspect and clean A/C vents and ducts to remove obstructions that may be hindering airflow and cooling.", "Prevent uneven cooling by performing regular A/C system maintenance, including system checks and maintenance tasks."]
,
description: ["Uneven cooling inside the vehicle can result in discomfort due to temperature variations, and it often indicates issues within the A/C system, such as refrigerant levels, ducts, or vents.", "A thorough inspection and diagnostics of the A/C system are necessary to pinpoint the cause of uneven cooling and address the issue.", "Checking refrigerant levels and recharging the A/C system is essential to ensure even cooling throughout the vehicle.", "Inspecting and cleaning A/C vents and ducts can remove obstructions that may hinder airflow and cooling, contributing to more consistent cooling.", "Regular maintenance, including system checks and maintenance tasks, can prevent issues leading to uneven cooling and maintain optimal A/C performance."]
,
price: ["Variable, depending on the extent of A/C system issues, diagnostics, and the necessary repairs identified during the inspection, plus labor.", "$100 - $200 or more for refrigerant check and recharge, plus labor.", "Variable, depending on the extent of vent and duct cleaning and any necessary repairs identified during the inspection, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent uneven cooling."]


}


const galleryBox10 = {
  header: "What's up with your Air Conditioning System?",
  checkOptions: ["Reduced Cooling", "Weak Airflow", "Unusual A/C Odors", "Inconsistent Cooling", "Leaking Water Inside the Vehicle", "A/C Clutch Not Engaging", "A/C Warning Light illuminated", "Warm Air at Idle", "Uneven Cooling"],
  Answers: [galleryBox10Ans1, galleryBox10Ans2, galleryBox10Ans3, galleryBox10Ans4, galleryBox10Ans5, galleryBox10Ans6, galleryBox10Ans7, galleryBox10Ans8, galleryBox10Ans9]
};

const galleryBox11Ans1 = {

  header: ["Wheel Alignment Check and Adjustment", "Tire Inspection and Replacement", "Suspension System Inspection and Repair", "Regular Vehicle Maintenance"]
,
fix: ["Check and adjust the wheel alignment to ensure the wheels are properly aligned and prevent drifting.", "Inspect the tires for wear and damage, replacing them as needed to maintain traction and prevent drifting.", "Perform a comprehensive inspection and repair of the suspension system to address issues that may cause drifting.", "Prevent drifting by performing regular vehicle maintenance, including alignment checks, tire inspections, and suspension system checks."]
,
description: ["A car that drifts or pulls to one side can be challenging to control and is often a result of wheel alignment, tire, or suspension system issues affecting the vehicle's stability and handling.", "Checking and adjusting the wheel alignment is crucial to maintaining proper alignment and preventing drifting.", "Regular tire inspections and timely replacement of worn or damaged tires help maintain traction and prevent drifting.", "A comprehensive inspection and repair of the suspension system is necessary to address issues that may cause the car to drift or handle poorly.", "Regular vehicle maintenance, including alignment checks, tire inspections, and suspension system checks, can prevent drifting and ensure stable handling."]
,
price: ["$50 - $150 for wheel alignment check and adjustment, plus labor.", "$100 - $600 or more for tire inspection and replacement (for a full set of tires), plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent drifting."]


}

const galleryBox11Ans2 = {

  header: ["Steering System Inspection and Repairs", "Suspension System Inspection and Repairs", "Wheel Alignment Check and Adjustment", "Regular Vehicle Maintenance"]
,
fix: ["Perform a comprehensive inspection and necessary repairs of the steering system to address excessive looseness or lack of response in steering.", "Inspect and repair the suspension system to ensure it functions properly and contributes to responsive steering.", "Check and adjust the wheel alignment to maintain proper alignment and improve steering response.", "Prevent excessive looseness or lack of response by performing regular vehicle maintenance, including steering and suspension system checks, and wheel alignment checks and adjustments."]
,
description: ["Excessive looseness or lack of response in the steering can compromise vehicle control and handling, often indicating issues in the steering and suspension systems or wheel alignment.", "Comprehensive inspection and repairs of the steering system are necessary to address the issue and restore proper steering response.", "Inspecting and repairing the suspension system is crucial to ensure it functions correctly and contributes to responsive steering.", "Checking and adjusting the wheel alignment helps maintain proper alignment and improve steering response, preventing issues with looseness or unresponsiveness.", "Regular vehicle maintenance, including steering and suspension system checks and wheel alignment checks and adjustments, can prevent and address issues related to excessive looseness or lack of response."]
,
price: ["Variable, depending on the extent of steering system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor.", "$50 - $150 for wheel alignment check and adjustment, plus labor.", "Variable, depending on the specific maintenance tasks performed to prevent excessive looseness or lack of response."]

  
}

const galleryBox11Ans3 = {

  header: ["Wheel Alignment Check and Adjustment", "Tire Inspection and Rotation", "Brake Inspection and Repair", "Suspension System Inspection and Repairs"]
,
fix: ["Check and adjust the wheel alignment to ensure the wheels are properly aligned and prevent the car from pulling.", "Inspect the tires for wear and rotate them as needed to ensure even wear and reduce pulling.", "Perform a comprehensive brake inspection and repair to address brake issues that may cause the car to pull to one side.", "Inspect and repair the suspension system to address issues that may be contributing to the car pulling."]
,
description: ["A car that pulls to one side can be challenging to control and is often a result of wheel alignment, tire, brake, or suspension system issues affecting the vehicle's stability and handling.", "Checking and adjusting the wheel alignment is crucial to maintaining proper alignment and preventing the car from pulling to one side.", "Regular tire inspections and rotation help ensure even wear and reduce the likelihood of pulling.", "A comprehensive brake inspection and timely repairs are necessary to address brake issues that may cause the car to pull to one side.", "Inspecting and repairing the suspension system is important to address issues that may contribute to the car pulling to one side."]
,
price: ["$50 - $150 for wheel alignment check and adjustment, plus labor.", "$20 - $50 for tire inspection and rotation, plus labor.", "Variable, depending on the extent of brake issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor."]

  
}

const galleryBox11Ans4 = {

  header: ["Brake Inspection and Repair", "Wheel Hub and Bearing Inspection and Replacement", "Tire Inspection and Balancing", "Suspension System Inspection and Repairs"]
,
fix: ["Perform a comprehensive brake inspection and necessary repairs to address issues causing the car to pulsate during braking.", "Inspect and replace wheel hubs and bearings as needed to ensure smooth and consistent wheel rotation.", "Inspect the tires for wear and balance them to eliminate tire-related pulsations.", "Inspect and repair the suspension system to address issues that may be contributing to the car pulsating."]
,
description: ["A car that pulsates, especially during braking, can indicate issues in the braking system, wheel hubs, bearings, tires, or suspension system, affecting the vehicle's ride quality and safety.", "Comprehensive brake inspection and repairs are essential to address issues causing pulsations during braking and ensure safe stopping.", "Wheel hub and bearing inspection and replacement help maintain smooth and consistent wheel rotation, eliminating pulsations.", "Tire inspection and balancing are necessary to identify and rectify tire-related pulsations, providing a smoother ride.", "Inspecting and repairing the suspension system is important to address issues that may contribute to the car pulsating during normal driving."]
,
price: ["Variable, depending on the extent of brake issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the condition of wheel hubs and bearings and the necessary replacements, plus labor.", "$20 - $50 for tire inspection and balancing, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor."]

  
}

const galleryBox11Ans5 = {

  header: ["Tire Inspection and Replacement", "Wheel Alignment Check and Adjustment", "Suspension System Inspection and Repairs"]
,
fix: ["Inspect the tires for wear and replace them if necessary to ensure even and consistent traction.", "Check and adjust the wheel alignment to maintain proper alignment and prevent rapid side-to-side movements.", "Perform a comprehensive suspension system inspection and necessary repairs to address issues that may be causing the rapid side-to-side movements."]
,
description: ["Rapid side-to-side movements of the car can affect vehicle stability and handling, often resulting from tire, wheel alignment, or suspension system issues.", "Tire inspection and replacement are crucial to maintain even and consistent traction, reducing the likelihood of rapid side-to-side movements.", "Checking and adjusting the wheel alignment helps maintain proper alignment, preventing issues with the car veering unexpectedly.", "A comprehensive inspection and necessary repairs of the suspension system are essential to address issues contributing to rapid side-to-side movements."]
,
price: ["$100 - $600 or more for tire inspection and replacement (for a full set of tires), plus labor.", "$50 - $150 for wheel alignment check and adjustment, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor."]

  
}

const galleryBox11Ans6 = {
  
  header: ["Suspension System Inspection and Repairs", "Tire Inspection and Rotation", "Wheel Alignment Check and Adjustment"]
  ,
  fix: ["Perform a comprehensive inspection of the suspension system and make necessary repairs to address issues causing the car to sway.", "Inspect the tires for wear and rotate them as needed to ensure even wear and reduce swaying.", "Check and adjust the wheel alignment to maintain proper alignment and minimize swaying."]
  ,
  description: ["A car that sways while driving can compromise handling and stability, often due to issues in the suspension system, tire wear, or wheel alignment.", "Comprehensive inspection and repairs of the suspension system are essential to address issues causing swaying and ensure safe and stable driving.", "Regular tire inspections and rotation help ensure even wear, reducing the likelihood of swaying.", "Checking and adjusting the wheel alignment is important to maintain proper alignment and minimize swaying during driving."]
  ,
  price: ["Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor.", "$20 - $50 for tire inspection and rotation, plus labor.", "$50 - $150 for wheel alignment check and adjustment, plus labor."]
  

}

const galleryBox11Ans7 = {

  header: ["Wheel Alignment Check and Adjustment", "Tire Inspection and Balancing", "Brake Inspection and Repair", "Suspension System Inspection and Repairs"]
,
fix: ["Check and adjust the wheel alignment to ensure the wheels are properly aligned and reduce vibrations or shaking.", "Inspect the tires for wear, balance them, and replace them if needed to eliminate tire-related vibrations.", "Perform a comprehensive brake inspection and necessary repairs to address issues causing vibrations during braking.", "Inspect and repair the suspension system to address issues that may be contributing to the car vibrating or shaking."]
,
description: ["A car that vibrates or shakes can indicate problems in the wheel alignment, tires, brakes, or suspension system, affecting ride quality and safety.", "Checking and adjusting the wheel alignment is crucial to maintain proper alignment and reduce vibrations or shaking.", "Tire inspection and balancing are necessary to identify and rectify tire-related vibrations, providing a smoother ride.", "Comprehensive brake inspection and timely repairs are essential to address issues causing vibrations during braking.", "Inspecting and repairing the suspension system is important to address issues that may contribute to the car vibrating or shaking during normal driving."]
,
price: ["$50 - $150 for wheel alignment check and adjustment, plus labor.", "$20 - $50 for tire inspection and balancing, plus labor.", "Variable, depending on the extent of brake issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor."]

  
}

const galleryBox11 = {
  header: "What does it feel like?",
  checkOptions: ["Car Drifts", "Excessive looseness or lack of response", "Car pulls", "Car pulsates", "Rapid side to side movements", "Car Sways", "Car vibrates or shakes" ],
  Answers: [galleryBox11Ans1, galleryBox11Ans2, galleryBox11Ans3, galleryBox11Ans4, galleryBox11Ans5, galleryBox11Ans6, galleryBox11Ans7]
};


const galleryBox12Ans1 = {

  header: ["Wheel Alignment Check and Adjustment", "Tire Inspection and Balancing", "Brake Inspection and Repair", "Suspension System Inspection and Repairs"]
,
fix: ["Check and adjust the wheel alignment to ensure the wheels are properly aligned and reduce vibrations or shaking.", "Inspect the tires for wear, balance them, and replace them if needed to eliminate tire-related vibrations.", "Perform a comprehensive brake inspection and necessary repairs to address issues causing vibrations during braking.", "Inspect and repair the suspension system to address issues that may be contributing to the car vibrating or shaking."]
,
description: ["A car that vibrates or shakes can indicate problems in the wheel alignment, tires, brakes, or suspension system, affecting ride quality and safety.", "Checking and adjusting the wheel alignment is crucial to maintain proper alignment and reduce vibrations or shaking.", "Tire inspection and balancing are necessary to identify and rectify tire-related vibrations, providing a smoother ride.", "Comprehensive brake inspection and timely repairs are essential to address issues causing vibrations during braking.", "Inspecting and repairing the suspension system is important to address issues that may contribute to the car vibrating or shaking during normal driving."]
,
price: ["$50 - $150 for wheel alignment check and adjustment, plus labor.", "$20 - $50 for tire inspection and balancing, plus labor.", "Variable, depending on the extent of brake issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor."]


} 

const galleryBox12Ans2 = {

  header: ["Engine Knocking Sound", "Suspension System Inspection and Repairs", "Drivetrain Inspection and Repairs"]
,
fix: ["Identify and repair the source of the engine knocking sound, which can be due to issues like low oil, worn bearings, or internal engine problems.", "Perform a comprehensive suspension system inspection and necessary repairs to address issues that may be causing knocking sounds from the suspension.", "Inspect the drivetrain components and perform necessary repairs to address issues causing knocking sounds in the drivetrain."]
,
description: ["A knocking sound in a car can be associated with engine, suspension, or drivetrain issues, affecting vehicle performance and safety.", "Engine knocking sounds may be due to low oil, worn bearings, or internal engine problems and should be promptly identified and repaired.", "Comprehensive suspension system inspection and timely repairs are essential to address issues causing knocking sounds from the suspension.", "Inspecting and repairing drivetrain components is important to address issues that may contribute to knocking sounds in the drivetrain."]
,
price: ["Variable, depending on the source and severity of engine knocking issues, plus labor.", "Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of drivetrain issues and the necessary repairs identified during the inspection, plus labor."]

  
} 

const galleryBox12Ans3 = {

  header: ["Exhaust System Inspection and Repairs", "Cooling System Inspection and Repairs", "Air Intake System Inspection and Repairs"]
,
fix: ["Inspect the exhaust system for leaks, holes, or damaged components, and repair or replace them as needed to eliminate hissing sounds.", "Perform a comprehensive cooling system inspection and necessary repairs to address issues causing hissing sounds related to coolant or steam.", "Inspect the air intake system for leaks or damaged components and make necessary repairs to eliminate hissing sounds during engine operation."]
,
description: ["A hissing sound in a car can be associated with the exhaust, cooling system, or air intake system, indicating issues that affect vehicle performance and safety.", "Hissing sounds from the exhaust may result from leaks or damaged components, which should be repaired or replaced.", "A comprehensive cooling system inspection and timely repairs are essential to address issues causing hissing sounds related to coolant or steam.", "Inspecting and repairing the air intake system is necessary to eliminate hissing sounds during engine operation."]
,
price: ["Variable, depending on the extent of exhaust system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of cooling system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of air intake system issues and the necessary repairs identified during the inspection, plus labor."]

  
} 

const galleryBox12Ans4 = {

  header: ["Drive Belt Inspection and Replacement", "Pulley Inspection and Replacement", "Tensioner Inspection and Replacement"]
,
fix: ["Inspect the drive belts and replace them if worn or damaged to eliminate chirping noises.", "Inspect the pulleys in the drive belt system and replace any faulty components to eliminate chirping sounds.", "Inspect the tensioners in the drive belt system and replace any faulty components to eliminate chirping sounds."]
,
description: ["A chirping sound in a car can be associated with the drive belt system, indicating issues that affect vehicle performance and safety.", "Drive belt inspection and replacement are essential to eliminate chirping noises caused by worn or damaged belts.", "Inspecting and replacing pulleys in the drive belt system is necessary to eliminate chirping sounds and maintain smooth operation.", "Inspecting and replacing tensioners in the drive belt system is important to eliminate chirping sounds and maintain proper belt tension."]
,
price: ["$30 - $150 for drive belt inspection and replacement, plus labor.", "$20 - $50 for pulley inspection and replacement, plus labor.", "$30 - $80 for tensioner inspection and replacement, plus labor."]

  
} 

const galleryBox12Ans5 = {

  header: ["Suspension System Inspection and Repairs", "Strut and Shock Absorber Inspection and Replacement", "Brake System Inspection and Repairs"]
,
fix: ["Perform a comprehensive suspension system inspection and necessary repairs to address issues causing clunking or thumping sounds.", "Inspect and replace worn or damaged struts and shock absorbers to eliminate clunking or thumping noises during driving.", "Conduct a brake system inspection and perform necessary repairs to address issues that may be causing clunking or thumping sounds during braking."]
,
description: ["A clunking or thumping sound in a car can be associated with the suspension system, struts, shock absorbers, or the brake system, indicating issues that affect vehicle performance and safety.", "Comprehensive suspension system inspection and timely repairs are essential to address issues causing clunking or thumping sounds.", "Inspecting and replacing worn or damaged struts and shock absorbers is necessary to eliminate clunking or thumping noises during driving.", "Conducting a brake system inspection and performing necessary repairs is important to address issues that may contribute to clunking or thumping sounds during braking."]
,
price: ["Variable, depending on the extent of suspension system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of struts and shock absorber issues and the necessary replacements identified during the inspection, plus labor.", "Variable, depending on the extent of brake system issues and the necessary repairs identified during the inspection, plus labor."]

  
} 

const galleryBox12Ans6 = {

  header: ["Exhaust System Inspection and Repairs", "Loose or Damaged Undercarriage Inspection and Repairs", "Loose or Broken Interior Components Inspection and Repairs"]
,
fix: ["Inspect the exhaust system for loose or damaged components, and repair or replace them as needed to eliminate rattling sounds.", "Inspect the undercarriage for loose or damaged parts and make necessary repairs to address issues causing rattling sounds.", "Inspect the interior components for loose or broken parts and perform repairs to eliminate rattling sounds inside the vehicle."]
,
description: ["A rattling sound in a car can be associated with the exhaust system, undercarriage, or interior components, indicating issues that affect vehicle performance and comfort.", "Rattling sounds from the exhaust may result from loose or damaged components, which should be repaired or replaced.", "A comprehensive inspection of the undercarriage is necessary to address loose or damaged parts causing rattling sounds.", "Inspecting and repairing loose or broken interior components is important to eliminate rattling sounds inside the vehicle."]
,
price: ["Variable, depending on the extent of exhaust system issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of undercarriage issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of interior component issues and the necessary repairs identified during the inspection, plus labor."]

  
} 

const galleryBox12Ans7 = {

  header: ["Engine Inspection and Repairs", "Valve Adjustment and Repairs", "Hydraulic Lifter Inspection and Repairs"]
,
fix: ["Inspect the engine for issues causing tapping sounds and perform necessary repairs or adjustments to address the problem.", "Check and adjust the valves as needed to eliminate tapping noises related to valve clearance issues.", "Inspect and repair hydraulic lifters if they are causing tapping sounds due to malfunction or wear."]
,
description: ["A tapping sound in a car can be associated with the engine, valves, or hydraulic lifters, indicating issues that affect engine performance and reliability.", "Comprehensive engine inspection and timely repairs are essential to address issues causing tapping sounds.", "Checking and adjusting the valves is necessary to eliminate tapping noises related to valve clearance problems.", "Inspecting and repairing hydraulic lifters is important to eliminate tapping sounds caused by malfunction or wear."]
,
price: ["Variable, depending on the extent of engine issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of valve adjustment and repairs needed, plus labor.", "Variable, depending on the extent of hydraulic lifter issues and the necessary repairs identified, plus labor."]

  
} 

const galleryBox12 = {
  header: "What do you hear?",
  checkOptions: ["Car squeals", "Knocking sound", "Hissing sound", "Chirping sound", "Clunk or Thumping sound", "Rattling sound", "Taping sound"],
  Answers: [galleryBox12Ans1, galleryBox12Ans2, galleryBox12Ans3, galleryBox12Ans4, galleryBox12Ans5, galleryBox12Ans6, galleryBox12Ans7]
};

const galleryBox13Ans1 = {

  header: ["Engine Smoke Diagnosis and Repairs", "Exhaust System Inspection and Repairs"]
,
fix: ["Diagnose the source of the smoke, which can be related to engine issues, and perform necessary repairs to address the problem.", "Inspect the exhaust system for leaks or damage and make repairs as needed to eliminate smoke emissions."]
,
description: ["Smoke in a car can be associated with engine or exhaust system issues, indicating potential problems that affect vehicle performance and emissions.", "Diagnosing the source of the smoke is crucial to identify engine-related issues and perform necessary repairs to address the problem.", "A comprehensive inspection of the exhaust system is necessary to identify leaks or damage causing smoke emissions, followed by the needed repairs."]
,
price: ["Variable, depending on the extent of engine issues and the necessary repairs identified during the inspection, plus labor.", "Variable, depending on the extent of exhaust system issues and the necessary repairs identified during the inspection, plus labor."]

}

const galleryBox13Ans2 = {

  header: ["Body Rust Repair and Prevention", "Undercarriage Rust Repair and Prevention", "Exterior Rust Repair"]
,
fix: ["Repair rusted areas on the vehicle body, undercarriage, or exterior, using appropriate methods like sanding, patching, and painting.", "Prevent further rust by applying rust-inhibiting coatings or treatments to the affected areas.", "Replace severely rusted components when necessary to ensure vehicle safety and integrity."]
,
description: ["Rust on a car can affect the body, undercarriage, or exterior, diminishing the vehicle's appearance, safety, and structural integrity.", "Repairing rusted areas on the body, undercarriage, or exterior is essential to prevent further damage and ensure the vehicle's longevity.", "Applying rust-inhibiting coatings or treatments can prevent future rust from developing on affected areas.", "In cases of severe rust, replacing components is necessary to maintain vehicle safety and integrity."]
,
price: ["Variable, depending on the extent of rust and the necessary repairs or treatments required, plus labor.", "Variable, depending on the extent of undercarriage rust and the necessary repairs or treatments required, plus labor.", "Variable, depending on the extent of exterior rust and the necessary repairs or treatments required, plus labor."]
  
}

const galleryBox13Ans3 = {

  header: ["Diagnostic Trouble Code (DTC) Scan and Analysis", "Component Inspection and Repairs", "Electrical System Diagnosis and Repairs"]
,
fix: ["Perform a DTC scan to identify the specific issue triggering the warning light and analyze the results for further diagnosis.", "Inspect and repair the affected vehicle components or systems, which can range from engine-related issues to electronic control modules.", "Conduct a thorough diagnosis of the electrical system to address any wiring, sensor, or connection problems that may trigger warning lights."]
,
description: ["A warning light on the dashboard can indicate various issues, such as engine problems, electronic control module malfunctions, or electrical system issues.", "Performing a DTC scan and analysis is the initial step to identify the specific issue triggering the warning light.", "Component inspection and repairs are necessary to address the specific problem identified by the DTC scan, which can encompass a wide range of potential issues.", "Diagnosing and repairing the electrical system is important to rectify any wiring, sensor, or connection problems that may be causing warning lights."]
,
price: ["Variable, depending on the specific issue identified by the DTC scan, the necessary component repairs, and the associated labor costs.", "Variable, depending on the extent of component repairs required to resolve the issue causing the warning light, plus labor.", "Variable, depending on the complexity of electrical system diagnosis and repairs, plus labor."]

  
}

const galleryBox13 = {
  header: "What do you see wrong?",
  checkOptions: ["Smoke", "Rust", "Warning light on" ],
  Answers: [galleryBox13Ans1, galleryBox13Ans2, galleryBox13Ans3]
};

const galleryBox14Ans1 = {

  header: ["Fuel System Inspection and Repairs", "Evaporative Emissions System (EVAP) Inspection and Repairs"]
,
fix: ["Inspect the fuel system for leaks or damaged components, and make necessary repairs to eliminate gasoline odors.", "Check the Evaporative Emissions System (EVAP) for issues that may be causing gasoline smells and repair or replace components as needed."]
,
description: ["A gasoline smell inside or around the vehicle can indicate problems with the fuel system or the Evaporative Emissions System (EVAP), affecting both safety and emissions.", "Inspection and repair of the fuel system are crucial to identify and address any leaks or damaged components causing gasoline odors.", "Checking the Evaporative Emissions System (EVAP) is necessary to identify and repair issues that may be causing gasoline smells and emissions problems."]
,
price: ["Variable, depending on the extent of fuel system repairs needed to eliminate gasoline odors, plus labor.", "Variable, depending on the extent of repairs or component replacements required to address EVAP system issues causing gasoline smells, plus labor."]


}

const galleryBox14Ans2 = {

  header: ["Exhaust System Inspection and Repairs"]
,
fix: ["Inspect the exhaust system for issues like a failing catalytic converter or sulfur buildup and make necessary repairs to eliminate the rotten egg smell."]
,
description: ["A rotten egg smell coming from the exhaust can indicate problems with the catalytic converter or sulfur buildup in the exhaust system, affecting emissions and vehicle performance."]
,
price: ["Variable, depending on the extent of exhaust system repairs needed to eliminate the rotten egg smell, plus labor."]

  
}

const galleryBox14Ans3 = {

  header: ["Coolant System Inspection and Repairs"]
,
fix: ["Inspect the coolant system for leaks or issues, and make necessary repairs to prevent coolant leaks and eliminate the sweet smell."]
,
description: ["A sweet smell inside the vehicle, often described as a syrupy or sugary odor, can indicate problems with the coolant system, such as coolant leaks, which affect engine cooling and can lead to overheating."]
,
price: ["Variable, depending on the extent of coolant system repairs needed to prevent coolant leaks and eliminate the sweet smell, plus labor."]

  
}

const galleryBox14Ans4 = {

  header: ["Engine Oil System Inspection and Repairs"]
,
fix: ["Inspect the engine oil system for leaks or issues, and make necessary repairs to prevent oil leaks and eliminate the burning oil smell."]
,
description: ["A burning oil smell, often described as a pungent odor, can indicate problems with the engine oil system, such as oil leaks, which affect engine lubrication and can lead to engine damage."]
,
price: ["Variable, depending on the extent of engine oil system repairs needed to prevent oil leaks and eliminate the burning oil smell, plus labor."]

  
}

const galleryBox14 = {
  header: "What does it smell like?",
  checkOptions: ["Smells like gasoline", "Smells like rotten eggs", "Smells sweet", "Smells like burning oil"],
  Answers: [galleryBox14Ans1, galleryBox14Ans2, galleryBox14Ans3, galleryBox14Ans4]
};

const galleryBox15Ans1 = {

  header: ["Battery Inspection and Replacement"]
,
fix: ["Inspect the battery for signs of damage or corrosion, and replace the battery if it's no longer holding a charge or is damaged."]
,
description: ["A dead battery can result in the vehicle not starting or requiring a jump start. It often indicates the need for a new battery."]
,
price: ["Variable, depending on the type and brand of battery, with costs typically ranging from $50 to $200 for the battery itself. Labor costs for replacement may vary."]


}

const galleryBox15Ans2 = {

  header: ["Starter Motor Inspection and Replacement"]
,
fix: ["Inspect the starter motor for proper operation and replace it if it's no longer functioning correctly or has failed."]
,
description: ["A faulty starter motor can result in the engine not cranking when attempting to start the vehicle. It often indicates the need for a new starter motor."]
,
price: ["Variable, depending on the type and brand of starter motor, with costs typically ranging from $50 to $200 for the starter motor itself. Labor costs for replacement may vary."]

  
}

const galleryBox15Ans3 = {

  header: ["Ignition Switch Inspection and Replacement"]
,
fix: ["Inspect the ignition switch for proper operation and replace it if it's no longer functioning correctly or has electrical issues."]
,
description: ["Ignition switch problems can result in difficulties starting the vehicle, power loss, or other electrical issues. They often indicate the need for a new ignition switch."]
,
price: ["Variable, depending on the type and brand of ignition switch, with costs typically ranging from $20 to $100 for the switch itself. Labor costs for replacement may vary."]

  
}


const galleryBox15Ans4 = {

  header: ["Fuel Injector Inspection and Replacement"]
,
fix: ["Inspect the fuel injectors for proper operation and replace any faulty fuel injectors that are not delivering fuel correctly."]
,
description: ["Faulty fuel injectors can result in engine misfires, poor fuel efficiency, and reduced engine performance. They often indicate the need for fuel injector replacement."]
,
price: ["Variable, depending on the number of injectors to be replaced, with individual fuel injectors costing around $50 to $100 each. Labor costs for replacement may vary."]

  
}

const galleryBox15Ans5 = {

  header: ["Fuel Pressure Inspection and Repairs"]
,
fix: ["Inspect the fuel system for issues causing no fuel pressure, such as a malfunctioning fuel pump, clogged fuel filter, or fuel line problems. Make necessary repairs to restore proper fuel pressure."]
,
description: ["No fuel pressure can result in the engine not starting or stalling. It often indicates issues with the fuel system that require inspection and repair."]
,
price: ["Variable, depending on the specific issue and the extent of repairs needed. Costs can range from $50 for a basic fuel filter replacement to several hundred dollars for more complex fuel system repairs, including the fuel pump."]

  
}

const galleryBox15Ans6 = {

  header: ["Air Intake System Inspection and Repairs"]
,
fix: ["Inspect the air intake system for issues such as clogged air filters, damaged intake hoses, or malfunctioning mass air flow sensors. Make necessary repairs to ensure proper air intake."]
,
description: ["Air intake problems can result in reduced engine performance, poor fuel efficiency, and engine misfires. They often indicate the need for air intake system repairs."]
,
price: ["Variable, depending on the specific issue and the extent of repairs needed. Costs can range from $10 to $50 for a basic air filter replacement to several hundred dollars for more complex air intake system repairs."]

  
}

const galleryBox15Ans7 = {

  header: ["Engine Compression Issues and Repairs"]
,
fix: ["Diagnose and address the root cause of low or no compression, such as worn piston rings, damaged cylinder walls, or malfunctioning valves. Repairs may involve overhauling the engine or replacing components as needed."]
,
description: ["No compression can result in engine misfires, lack of power, and difficulties starting the vehicle. It often indicates internal engine problems that require thorough inspection and repair."]
,
price: ["Variable, depending on the specific issue and the extent of repairs needed. Costs can range from several hundred dollars for minor repairs to several thousand dollars for extensive engine overhauls."]

  
}

const galleryBox15Ans8 = {

  header: ["Anti-Theft System Activation Issues and Resolutions"]
,
fix: ["Diagnose the cause of the anti-theft system activation, which may involve issues with the key fob, ignition system, or vehicle's computer. Repairs may include reprogramming the key, replacing the ignition lock, or resetting the system."]
,
description: ["Anti-theft system activation can prevent the vehicle from starting or cause it to stall unexpectedly. It often requires inspection and troubleshooting to resolve."]
,
price: ["Variable, depending on the specific issue and the extent of repairs needed. Costs can range from $50 to $200 for basic repairs and key reprogramming, to several hundred dollars for more extensive anti-theft system repairs."]

  
}

const galleryBox15Ans9 = {

  header: ["Camshaft/Crankshaft Position Sensor Replacement"]
,
fix: ["Diagnose and replace the faulty camshaft or crankshaft position sensor. This involves locating the sensor, removing the old one, and installing a new sensor to ensure accurate engine timing."]
,
description: ["A faulty camshaft or crankshaft position sensor can lead to engine misfires, poor fuel efficiency, and stalling. Replacing the sensor is essential for proper engine operation."]
,
price: ["Variable, depending on the sensor's location, the specific sensor type, and labor costs. Costs can range from $50 to $150 for the sensor itself, plus labor charges that may vary."]

  
}

const galleryBox15Ans10 = {

  header: ["Timing Belt/Chain Replacement"]
,
fix: ["Diagnose and replace the worn or damaged timing belt or chain. This involves removing the old belt/chain, inspecting related components, and installing a new one to ensure proper engine timing."]
,
description: ["Timing belt or chain issues can result in engine misfires, poor performance, or even catastrophic engine damage. Regular replacement is crucial to prevent these problems."]
,
price: ["Variable, depending on the vehicle's make and model, the specific components needed, and labor costs. Costs can range from $200 to $800 or more, including parts and labor."]

  
}

const galleryBox15Ans11 = {

  header: ["Electrical System Troubleshooting and Repairs"]
,
fix: ["Diagnose and address electrical system problems, which can include issues with the battery, alternator, starter, wiring, fuses, or electrical components. Repairs may involve replacing damaged parts, wiring repairs, or charging system checks."]
,
description: ["Electrical system problems can manifest as issues with starting the vehicle, dead batteries, flickering lights, or malfunctioning accessories. Thorough diagnostics are required to pinpoint and resolve these issues."]
,
price: ["Variable, depending on the specific electrical problem and required repairs. Costs can range from $50 for simple fixes like replacing a fuse, to several hundred dollars for more complex issues like alternator or starter replacement."]

  
}

const galleryBox15Ans12 = {

  header: ["Exhaust System Blockage Resolution"]
,
fix: ["Identify and clear the source of exhaust system blockage, which may involve removing obstructions like debris, soot, or damaged components. Ensure that the exhaust gases can flow freely."]
,
description: ["Exhaust system blockages can lead to reduced engine performance, poor fuel efficiency, and excessive emissions. It's crucial to diagnose and remove blockages for proper vehicle operation."]
,
price: ["Variable, depending on the severity of the blockage and the extent of repairs needed. Costs can range from $50 for simple blockage removal to several hundred dollars for extensive exhaust system repairs."]

  
}

const galleryBox15Ans13 = {

  header: ["Overheating Engine Diagnosis and Repairs"]
,
fix: ["Diagnose and address the overheating issue by identifying the root cause, which may include problems with the cooling system, radiator, thermostat, or a coolant leak. Repairs could involve radiator replacement, thermostat replacement, or coolant system repairs."]
,
description: ["An overheating engine can lead to engine damage and prevent the car from starting. Prompt diagnosis and repairs are essential to prevent further issues."]
,
price: ["Variable, depending on the specific problem causing overheating and the extent of repairs needed. Costs can range from $50 for thermostat replacement to several hundred dollars for radiator replacement or more extensive cooling system repairs."]

  
}


const galleryBox15 = {
  header: "Ohh it won't start.",
  checkOptions: ["Dead Battery", "Faulty Starter Motor", "Ignition Switch Problems", "Faulty Fuel Injector", "No Fuel Pressure", "Air Intake Problems", "No Compression", "Anti-Theft System Activation", "Faulty Camshaft or Crankshaft Position Sensor","Timing Belt or Chain Issues", "Electrical System Problems", "Exhaust System Blockage", "Overheating"],
  Answers: [galleryBox15Ans1, galleryBox15Ans2, galleryBox15Ans3, galleryBox15Ans4, galleryBox15Ans5, galleryBox15Ans6, galleryBox15Ans7, galleryBox15Ans8, galleryBox15Ans9, galleryBox15Ans10, galleryBox15Ans11, galleryBox15Ans12, galleryBox15Ans13]
};

const allGalleryPages = [galleryBox1, galleryBox2, galleryBox3, galleryBox4, galleryBox5, galleryBox6, galleryBox7, galleryBox8, galleryBox9, galleryBox10, galleryBox11, galleryBox12, galleryBox13, galleryBox14, galleryBox15];

var chosenBox;

// page screen choices
function changePageScreenWordsWhenHome(boxNum){

  chosenBox = boxNum;
   
   barTitle.children[0].children[0].innerHTML = `${allGalleryPages[boxNum].header}`;

   for(var opts = 0; opts < allGalleryPages[boxNum].checkOptions.length; opts++){
        createRadioBoxs(allGalleryPages[boxNum].checkOptions[opts]);
   }
   
   
}

// page screen answers


function pageScreenCreateAnswersBoxes(headerText,fixText,discriptionText,priceText){

  var whatsWrongOutputs = document.getElementById("whatsWrongOutputs");

  let anAnswer = document.createElement("div");
  anAnswer.classList.add("anAnswer");

    let answerHeader = document.createElement("h1");
    answerHeader.classList.add("answerHeader");
    answerHeader.appendChild(document.createTextNode(headerText));

    let answerFix = document.createElement("h3");
    answerFix.classList.add("answerFix");
    answerFix.appendChild(document.createTextNode(fixText));

    let answerFixDescription = document.createElement("p");
    answerFixDescription.classList.add("answerFixDescription");
    answerFixDescription.appendChild(document.createTextNode(discriptionText));

    let answerPriceES = document.createElement("h1");
    answerPriceES.classList.add("answerPriceES");

      let pricePrefix = document.createElement("span");
      pricePrefix.classList.add("price");
      pricePrefix.appendChild(document.createTextNode("Price: "));

      let tip = document.createElement("span");
      tip.classList.add("tip");

      let price = document.createElement("span");
      price.appendChild(document.createTextNode(priceText));
      
  // nesting the elements

  anAnswer.appendChild(answerHeader);
  anAnswer.appendChild(answerFix);
  anAnswer.appendChild(answerFixDescription);
    // answer Prices nesting
      answerPriceES.appendChild(pricePrefix);
      answerPriceES.appendChild(tip);
      answerPriceES.appendChild(price);
  anAnswer.appendChild(answerPriceES);

  // give it a event listener

  anAnswer.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "Underinflated Tires"){
      document.getElementById("homeDefault").style.display = "none";
      document.getElementById("pageScreen").style.display = "none";
      document.getElementById("mapScreen").style.display = "none";
      document.getElementById("videoScreen").style.display = "block";
      window.scrollTo(0,0);
      }
  })

  // add an answer

  whatsWrongOutputs.appendChild(anAnswer);

}


function changePageScreenAnswers(){
  let radiobutton = document.getElementsByClassName("radioButton");

  for(let g = 0; g< radiobutton.length; g++){
    if(radiobutton[g].children[0].checked){
      answerlist = allGalleryPages[chosenBox].Answers[g];
    }
  }

  for(let m = 0; m < answerlist.header.length; m++){
    
    pageScreenCreateAnswersBoxes(answerlist.header[m], answerlist.fix[m], answerlist.description[m], answerlist.price[m]);
  }

}


// home to page screen 

for ( var galleryclick = 0; galleryclick < galleryBoxes.length; galleryclick++){
  galleryBoxes[galleryclick].addEventListener("click", (box)=>{
    document.getElementById("homeDefault").style.display = "none";
    document.getElementById("pageScreen").style.display = "block";
    document.getElementById("mapScreen").style.display = "none";
    document.getElementById("videoScreen").style.display = "none";
    window.scrollTo(0,0);


    if(box.target.parentElement.classList[0] == "galleryLogos"){
       changePageScreenWordsWhenHome(box.target.parentElement.parentElement.classList[1]);
    }else if(box.target.parentElement.classList[0] == "galleryBoxes"){
      changePageScreenWordsWhenHome(box.target.parentElement.classList[1]);
    }else{
      changePageScreenWordsWhenHome(box.target.classList[1]);
    }
    



  });
  galleryBoxes[galleryclick].classList.add(galleryclick);
}



// search Machine

var galleryCheckOptionsAndDestination = {
  AllCheckOptions: [],
  AllDestinationsGal: [],
  AllDestinationsAns: []
};

for(let q = 0; q < allGalleryPages.length; q++ ){
  for(let m = 0; m < allGalleryPages[q].checkOptions.length; m++ ){
    galleryCheckOptionsAndDestination.AllCheckOptions[galleryCheckOptionsAndDestination.AllCheckOptions.length] = allGalleryPages[q].checkOptions[m];
    galleryCheckOptionsAndDestination.AllDestinationsGal[galleryCheckOptionsAndDestination.AllDestinationsGal.length] = q;
    galleryCheckOptionsAndDestination.AllDestinationsAns[galleryCheckOptionsAndDestination.AllDestinationsAns.length] = m;

  }  
}


// -


var searchBarsInput = searchbar[0].children[0];

searchBarsInput.addEventListener("input",searchBarInputFind);
searchBarInputFind();

function searchBarInputFind(){
  document.getElementById("searchBarOptions").innerHTML = "";
  if(searchBarsInput.value == ""){
    for(let hi = 0; hi< galleryCheckOptionsAndDestination.AllCheckOptions.length; hi++){
      createSearchBoxOptions(galleryCheckOptionsAndDestination.AllCheckOptions[hi],galleryCheckOptionsAndDestination.AllDestinationsGal[hi],galleryCheckOptionsAndDestination.AllDestinationsAns[hi]);
    }
  }else{
    for(let hi = 0; hi< galleryCheckOptionsAndDestination.AllCheckOptions.length; hi++){
      if(galleryCheckOptionsAndDestination.AllCheckOptions[hi].toLowerCase().includes(searchBarsInput.value.toLowerCase())){
        createSearchBoxOptions(galleryCheckOptionsAndDestination.AllCheckOptions[hi],galleryCheckOptionsAndDestination.AllDestinationsGal[hi],galleryCheckOptionsAndDestination.AllDestinationsAns[hi]);
      }
    }
  }
}


function createSearchBoxOptions(text, DesGal, DesAns){

  

  let Element = document.createElement("p");
  let textElement = document.createTextNode(text);
  Element.appendChild(textElement);
  Element.classList.add("searchBarAnswerItems");
  Element.classList.add(`${DesGal}-Gal`);
  Element.classList.add(`${DesAns}-Ans`);

  document.getElementById("searchBarOptions").appendChild(Element);

  Element.addEventListener("click", (e)=>{
     setPageScreenFromSearch(e.target.innerHTML, Array.from(e.target.classList[1])[0], Array.from(e.target.classList[2])[0]);
     
    let listMapText = document.getElementsByClassName("listMapText");
    let listHomeText = document.getElementsByClassName("listHomeText");

    listMapText[0].style.display =  "block";
    listMapText[1].style.display =  "block";

    listHomeText[0].style.display = "none";
    listHomeText[1].style.display = "none";

    barTitle.children[0].children[1].classList.remove("writeCursorBlink");

  });

}


function setPageScreenFromSearch(text, DesGal,DesAns){
  searchBarMenuOpen();
  document.getElementById("homeDefault").style.display = "none";
  document.getElementById("pageScreen").style.display = "block";
  document.getElementById("mapScreen").style.display = "none";
  document.getElementById("videoScreen").style.display = "none";
  window.scrollTo(0,0);

  
  document.getElementById("whatsWrongInputs").innerHTML = "";
  document.getElementById("whatsWrongOutputs").innerHTML = "<br>";

  barTitle.children[0].children[0].innerHTML = text;

  let answerlist = allGalleryPages[DesGal].Answers[DesAns];

  for(let m = 0; m < answerlist.header.length; m++){
    pageScreenCreateAnswersBoxes(answerlist.header[m], answerlist.fix[m], answerlist.description[m], answerlist.price[m]);
  }


  document.getElementById("mapButton").style.display = "flex";
  document.getElementById("mapButton").style.opacity = "1";
  document.getElementById("mapButton").style.right = "10px";

  document.getElementById("submitButton").style.display = "none";

  document.getElementById("whatsWrongOutputs").style.maxHeight = "10000px";
  for(let qw = 0; qw < document.getElementsByClassName("anAnswer").length; qw++){
    document.getElementsByClassName("anAnswer")[qw].style.opacity ="1";
  }
  
}


// Map Screen -------------------------------------------------------------------------


function setScreenToMapScreen(){

    document.getElementById("homeDefault").style.display = "none";
    document.getElementById("pageScreen").style.display = "none";
    document.getElementById("mapScreen").style.display = "block";
    document.getElementById("videoScreen").style.display = "none";

    if(menuOpen2 == true){
        burgerOverlay.style.display = "none";
        setTimeout(()=>{
          burgerOverlay.style.display = "";
        }, 100);
        menuOpen2Cheack();
    }
   

    let listMapText = document.getElementsByClassName("listMapText");
    let listHomeText = document.getElementsByClassName("listHomeText");

    listMapText[0].style.display =  "none";
    listMapText[1].style.display =  "none";

    listHomeText[0].style.display = "block";
    listHomeText[1].style.display = "block";

}


window.addEventListener("offline", ()=>{
  document.getElementById("mapIsLoading").innerHTML = "No signal"
});

window.addEventListener("online", ()=>{
  document.getElementById("mapIsLoading").innerHTML = "Loading...."
});


// Video Screen ------------------------------------------------------------------------

//document.getElementById("homeDefault").style.display = "none";

document.getElementById("videoBackButton").addEventListener("click",(e)=>{

    
    document.getElementById("homeDefault").style.display = "none";
    document.getElementById("pageScreen").style.display = "block";
    document.getElementById("mapScreen").style.display = "none";
    document.getElementById("videoScreen").style.display = "none";
    barTitle.children[0].children[1].classList.remove("writeCursorBlink");
    
})



