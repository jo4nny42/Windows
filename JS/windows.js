// Different windows
const meWindow = document.querySelector('.Window_95');
const academicWindow = document.querySelector('.educationWindow');
const projectWindow = document.querySelector('.projectsWindow');

// the icons on the window
const minimizeButton = document.querySelector('.min');
const maximizeButton = document.querySelector('.max');
const exitButton = document.querySelector('.exit');

// Sidebar icons
const aboutIcon = document.querySelector('.meFigure');
const educationIcon = document.querySelector('.eduFigure');
const projectsIcon = document.querySelector('.proj_img');

//The id's for screens 
var mainScreen = document.getElementById("w95");
var educationScreen = document.getElementById("edu95");
var projectsScreen = document.getElementById("proj95");

//Event listener for the window buttons
minimizeButton.addEventListener('click', minimize);
maximizeButton.addEventListener('click', maximize);
exitButton.addEventListener('click', remove);

//Event listener for the side icons
aboutIcon.addEventListener('click', whoEmerge);
educationIcon.addEventListener('click', educationEmerge);
projectsIcon.addEventListener('click', projectEmerge);


function minimize(){
    meWindow.style.animation = 'minimize 3s ease-in-out';
    meWindow.style.animationFillMode = 'forwards';
}

function maximize(){
    meWindow.style.animation = 'maximize 3s ease-in-out';
    meWindow.style.animationFillMode = 'forwards';

}

function remove(){
    meWindow.style.animation = 'remove .1s ease-out';
    meWindow.style.animationFillMode = 'both';

    document.getElementById("backgroundMusic").pause();
}

function whoEmerge(){
    meWindow.style.animation = 'emerge 15s ease-in-out';
    meWindow.style.animationFillMode = 'both';

    document.getElementById("backgroundMusic").play();
    var display = mainScreen.style.display;

    if (display === "none") {
        mainScreen.style.display = "block";
        meWindow.style.animation = " window_shake .5s ease-in-out"
    } else {
        mainScreen.style.display = "none";
        document.getElementById("backgroundMusic").pause();
    }
}

function educationEmerge(){
    academicWindow.style.animation = 'emerge 15s ease-in-out';
    academicWindow.style.animationFillMode = 'both';

    var display2 = educationScreen.style.display;

    if (display2 === "none") {
        educationScreen.style.display = "block";
        academicWindow.style.animation = " window_shake .5s ease-in-out"
    } else {
        educationScreen.style.display = "none";
    }
}

function projectEmerge(){
    projectWindow.style.animation = 'emerge 15s ease-in-out';
    projectWindow.style.animationFillMode = 'both';

    var display3 = projectsScreen.style.display;

    if (display3 === "none") {
        projectsScreen.style.display = "block";
        projectWindow.style.animation = " window_shake .5s ease-in-out"
    } else {
        projectsScreen.style.display = "none";
    }
}

function changeQuote(){

    //generate a random number
    const arrayRandom = (Math.floor(Math.random()*11));
    //quote array
    const quoteArray=["You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth. -William W. Purkey", "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.-Neil Gaiman", "Everything you can imagine is real. -Pablo Picasso", "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. -Helen Keller", "Do one thing every day that scares you. -Eleanor Roosevelt", "It's no use going back to yesterday, because I was a different person then. -Lewis Carroll", "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. -Socrates", "Do what you feel in your heart to be right-for you'll be criticized anyway. -Eleanor Roosevelt", "Happiness is not something ready made. It comes from your own actions. -Dalai Lama XIV", "Whatever you are, be a good one. -Abraham Lincoln"];
    //get paragraph element
    let fj = document.getElementById("quotes");
    //change quote depending on aray number
    switch(arrayRandom){
        case 0:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 1:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 2:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 3:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 4:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 5:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 6:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 7:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 8:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 9:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
    }
}

let quoteChange=setInterval(changeQuote,14000);