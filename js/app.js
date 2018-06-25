//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/


var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

var more = document.getElementById('more');
var one = document.getElementById('one');
one.addEventListener('click', moreContent);

console.log(more);

function moreContent(){
    if (more.style.display === 'block'){
        more.style.display = 'none';
    } else{
        more.style.display = 'block';
        more.innerHTML = bacon;
    }
    }

// function moreContent(){
//     more.innerHTML = bacon;
// }


//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/
var less = document.getElementById('less');
var noMore = document.getElementById('noMore');

noMore.addEventListener('click', lessContent);
function lessContent(){
less.style.display = 'none';
}


//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/
var biggie = document.getElementById('biggie');
biggie.addEventListener('mouseover', zoom);

function zoom(){
    biggie.style.fontSize = "150%";
}


//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = ['Big Mac', 'Filet-O-Fish', 'Chicken Nuggets'];
var showMenu = document.getElementById("showMenu");
var menu = document.getElementById('menu');
console.log(menu);

showMenu.addEventListener('click', valueMenu);

function valueMenu(){
    menu.innerHTML = menuItems;
}


//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 30px after clicking on the text.*/
var drink = document.getElementById('drink');
drink.addEventListener('click', redFace);

function redFace(){
    drink.style.fontSize = "30px";
    drink.style.color = 'red';
}

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/
var price = document.getElementById('price');
var cookie = document.getElementById('cookie');
cookie.addEventListener('mouseover', showPrice);

function showPrice(){
price.innerHTML = "$5.55";
}


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/
var displayQuote = document.getElementById('displayQuote');
var benjamin = document.getElementById("Benjamin");

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
benjamin.addEventListener('click', quote);

function quote(){
    displayQuote.innerHTML = myQuote;
}




//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];
console.log(quotes.length);

var displayQuote = document.getElementById("displayQuotes");
var random = document.getElementById('random');
random.addEventListener("click", randomQuote);

function randomQuote(){
var number = Math.floor((Math.random()*10)<(quotes.length))
displayQuote.innerHTML = quotes[number];
}


//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/

var img = document.getElementsByTagName("img");
console.log(img);
console.log(img.length);
img[8].src = "http://cdn1.evo.co.uk/sites/evo/files/styles/gallery_adv/public/2017/09/483589.jpg?itok=FOBlyXiU";
//adding new img b/c old link broken
//don't know how to change src to an assets jpg. Only url




var showHide = document.getElementById("showHide");
var moneyFreedom = "Don't spend what you don't have.";

var showMoney= document.getElementById("freedom");
showMoney.innerHTML = moneyFreedom;

console.log(showHide);

showHide.addEventListener('click', moneyWisdom);

function moneyWisdom(){
if(showMoney.style.display === 'block'){
    showMoney.style.display = 'none';
} else {
    showMoney.style.display = 'block';
}}
