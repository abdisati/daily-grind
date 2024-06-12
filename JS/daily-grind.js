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
      color: "yellow",
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
      color: "brown",
      day: "Monday",
      desc: "Mocha drive me coca!",
    };
    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a trouble tea",
      color: "pink",
      day: "Tuesday",
      desc: "I like Bubble Tea!",
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a trouble tea",
      color: "pink",
      day: "Wednesday",
      desc: "I like Bubble Tea!",
    };
    break;

  case 4:
    today = "Thrusday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a trouble tea",
      color: "pink",
      day: "Thrusday",
      desc: "I like Bubble Tea!",
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a trouble tea",
      color: "pink",
      day: "Friday",
      desc: "I like Bubble Tea!",
    };
    break;

  case 6:
    today = "Saturday";
    coffee = {
      name: " Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a trouble tea",
      color: "pink",
      day: "Saturday",
      desc: "I like Bubble Tea!",
    };
    break;

  default:
    today = "Something went wrong!";
}
//This places our coffee object on the page.
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
