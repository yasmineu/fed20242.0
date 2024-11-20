// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("toonMenu")
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

const menuSluitButton = document.querySelector("nav button");

menuSluitButton.onclick = sluitMenu;

function sluitMenu(){
    deNav.classList.remove("toonMenu");
}


/************************************/
/* carousel DD nieuws knoppen */
/************************************/

const naarLinksButton = document.querySelector(" main section:nth-of-type(5) button:nth-of-type(1)");
const naarRechtsButton = document.querySelector("main section:nth-of-type(5) button:nth-of-type(2)");
const scroller = document.querySelector("main section:nth-of-type(5) ul");


naarLinksButton.onclick = naarLinks;
naarRechtsButton.onclick = naarRechts;

function naarLinks() {
	const ulWidth = scroller.offsetWidth;
	
	scroller.scrollLeft = scroller.scrollLeft - ulWidth;
}


function naarRechts() {
	const ulWidth = scroller.offsetWidth;
	
	scroller.scrollLeft = scroller.scrollLeft + ulWidth;
}


