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

//Here is code to help us use the query string with JS:

//use location object to access querystring (address bar)

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
let today;
//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate query string parameters
const urlParams = new URLSearchParams(queryString);

//Here's the if block handling the urlParam
// Check if "day" parameter is provided in the query string
if (urlParams.has("day")) {
  myDay = parseInt(urlParams.get("day")); // Convert day from string to integer
}
myDay = urlParams.get("day");

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: " Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "this is a picture of some cold brew",
      color: "rgb(44, 26, 19)",
      day: "Sunday",
      desc: `Indulge in our Cold Brew, meticulously brewed to bring out its naturally smooth and bold flavor profile. Slow-steeped for hours, this refreshing beverage offers a velvety texture and low acidity, perfect for those seeking a cool, invigorating coffee experience. Savor the rich nuances of our finest coffee beans, served chilled over ice to enhance its refreshing qualities. At [Your Coffee Shop Name], we craft Cold Brew with passion and precision to deliver a satisfying and revitalizing coffee choice.`,
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
      desc: `Indulge in our Mocha, a decadent blend of rich espresso, velvety steamed milk, and luxurious chocolate syrup. This delightful drink combines the robust and bold notes of freshly brewed coffee with the smooth, creamy texture of milk, all perfectly complemented by the rich, chocolatey sweetness. Whether you're craving a comforting treat or a luxurious pick-me-up, our Mocha is crafted with care and passion to satisfy your coffee cravings at [Your Coffee Shop Name].`,
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
      desc: `Discover the unique charm of our Bubble Tea, a delightful fusion of refreshing tea and chewy tapioca pearls. Originating from Taiwan, this beloved beverage offers a harmonious blend of brewed tea, creamy milk, and sweetened tapioca pearls. Sip on the smooth texture of tea combined with the playful burst of pearls, creating a refreshing and satisfying drink experience. At [Your Coffee Shop Name], we prepare Bubble Tea with the finest ingredients and care, ensuring each sip brings a taste of authentic delight.`,
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
      desc: `A Frappuccino is a delightful and indulgent blended coffee beverage crafted with creamy milk, rich espresso, and ice, all blended together to a smooth perfection. Topped with whipped cream and drizzled with a syrup of your choice, it offers a refreshing and decadent treat perfect for any time of day, whether you're seeking a pick-me-up or simply craving a deliciously cold coffee experience.`,
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
      desc: `Our Caramel Latte is the perfect blend of rich espresso, creamy steamed milk, and luscious caramel syrup. This delightful drink combines the robust and bold notes of freshly brewed coffee with the smooth, velvety texture of milk, enhanced by the sweet, buttery flavor of caramel.`,
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
      desc: `Our Pumpkin Spice Latte is a seasonal favorite that brings the cozy, comforting flavors of autumn to your cup. This beloved beverage features the perfect combination of rich espresso, steamed milk, and our signature pumpkin spice blend, infused with warm spices like cinnamon, nutmeg, and cloves.`,
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
      desc: `Our Drip Coffee is a timeless classic, crafted to highlight the pure, unadulterated essence of premium coffee beans. Brewed to perfection, this straightforward yet sophisticated beverage is a staple for coffee lovers who appreciate the deep, nuanced flavors that come from carefully selected and expertly roasted beans.`,
    };
    break;

  default:
    today = "Something went wrong!";
}

//This places our coffee object on the page.
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("body").style.backgroundColor = coffee.color;
