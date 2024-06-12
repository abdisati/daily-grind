//alert("can you see this?");
/*Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.*/

//pic - the src of the coffee
//alt - the alt tag for the coffee pic
//desc - a description of the coffee
//color - the color associated with the coffee
//day - the day of the week for the coffee
//name - the name of the coffee
function coffeeTemplate(coffee) {
  return ` 
<p>
        <img
          src="${coffee.pic}"
          alt="${coffee.alt}"
          id="coffee"
        />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
        coffee special is <strong class="feature">${coffee.name}!</strong>,
        ${coffee.desc}!
      </p>

  `;
}

let myDate = new Date();
let myDay = myDate.getDay();
let coffee;
//console.log(myDay);

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: " Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "this is a picture of some cold brew",
      color: "rgb(44, 26, 19)",
      day: "Sunday",
      desc: `I like me some Cold Brew!`,
    };
    break;

  case 1:
    today = "Monday";
    coffee = {
      name: " Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a cup of mocha coffee",
      color: "rgb(107, 68, 35)",
      day: "Monday",
      desc: "Mocha drive me coca!",
    };
    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a bubble tea",
      color: "rgb(204, 153, 102)",
      day: "Tuesday",
      desc: "I like Bubble Tea!",
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: " Frappaccino",
      pic: "images/frappaccino.jpg",
      alt: "a picture of a frappaccino",
      color: "rgb(192, 150, 128)",
      day: "Wednesday",
      desc: "I like Frappaccino",
    };
    break;

  case 4:
    today = "Thrusday";
    coffee = {
      name: " Caramel Latte!",
      pic: "caramel-latte.jpg",
      alt: "a picture of a caramel latte",
      color: "rgb(193, 101, 57)",
      day: "Thrusday",
      desc: "I like Caramel Latte!",
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: " Pumpkin Spice Latte",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "a picture of pumpkin-spice-latte",
      color: "rgb(204, 119, 34)",
      day: "Friday",
      desc: "I like Pumpkin Spice Latte!",
    };
    break;

  case 6:
    today = "Saturday";
    coffee = {
      name: " Drip",
      pic: "images/drip.jpg",
      alt: "a picture of a Drip",
      color: "rgba(67, 33, 13, 0.8)",
      day: "Saturday",
      desc: "I like Drip!",
    };
    break;

  default:
    today = "Something went wrong!";
}
//This places our coffee object on the page.
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
