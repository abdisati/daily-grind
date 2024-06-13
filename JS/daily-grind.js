function coffeeTemplate(coffee) {
  return `
    <p>
      <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
      <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
      coffee special is <strong class="feature">${coffee.name}!</strong>,
      ${coffee.desc}
    </p>
  `;
}

// Get current day
let myDate = new Date();
let today = myDate.getDay();
let myDay = today; // Default to today's day of the week

// Use location object to access query string (address bar)
const queryString = window.location.search;
console.log(queryString);

// Separate query string parameters
const urlParams = new URLSearchParams(queryString);

// If the day is specified in the query string, use it
if (urlParams.has("day")) {
  // from query string
  myDay = parseInt(urlParams.get("day"), 10); // Parse the day as an integer
}

// Define coffee object based on the day of the week
let coffee;
switch (myDay) {
  case 0:
    coffee = {
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "A picture of some cold brew coffee",
      color: "rgb(44, 26, 19)",
      day: "Sunday",
      desc: `Indulge in our Cold Brew, meticulously brewed to bring out its naturally smooth and bold flavor profile. Slow-steeped for hours, this refreshing beverage offers a velvety texture and low acidity, perfect for those seeking a cool, invigorating coffee experience. `,
    };
    break;
  case 1:
    coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "A picture of a cup of mocha coffee",
      color: "rgb(107, 68, 35)",
      day: "Monday",
      desc: `Indulge in our Mocha, a decadent blend of rich espresso, velvety steamed milk, and luxurious chocolate syrup. This delightful drink combines the robust and bold notes of freshly brewed coffee with the smooth, creamy texture of milk, all perfectly complemented by the rich, chocolatey sweetness.`,
    };
    break;
  case 2:
    coffee = {
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "A picture of a bubble tea",
      color: "rgb(204, 153, 102)",
      day: "Tuesday",
      desc: `Discover the unique charm of our Bubble Tea, a delightful fusion of refreshing tea and chewy tapioca pearls. Originating from Taiwan, this beloved beverage offers a harmonious blend of brewed tea, creamy milk, and sweetened tapioca pearls.`,
    };
    break;
  case 3:
    coffee = {
      name: "Frappaccino",
      pic: "images/frappaccino.jpg",
      alt: "A picture of a frappaccino",
      color: "rgb(192, 150, 128)",
      day: "Wednesday",
      desc: `A Frappuccino is a delightful and indulgent blended coffee beverage crafted with creamy milk, rich espresso, and ice, all blended together to a smooth perfection. Topped with whipped cream and drizzled with a syrup of your choice, it offers a refreshing and decadent treat.`,
    };
    break;
  case 4:
    coffee = {
      name: "Caramel Latte",
      pic: "images/caramel-latte.jpg",
      alt: "A picture of a caramel latte",
      color: "rgb(193, 101, 57)",
      day: "Thursday",
      desc: `Our Caramel Latte is the perfect blend of rich espresso, creamy steamed milk, and luscious caramel syrup. This delightful drink combines the robust and bold notes of freshly brewed coffee with the smooth, velvety texture of milk, enhanced by the sweet, buttery flavor of caramel.`,
    };
    break;
  case 5:
    coffee = {
      name: "Pumpkin Spice Latte",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "A picture of pumpkin spice latte",
      color: "rgb(204, 119, 34)",
      day: "Friday",
      desc: `Our Pumpkin Spice Latte is a seasonal favorite that brings the cozy, comforting flavors of autumn to your cup. This beloved beverage features the perfect combination of rich espresso, steamed milk, and our signature pumpkin spice blend, infused with warm spices like cinnamon, nutmeg, and cloves.`,
    };
    break;
  case 6:
    coffee = {
      name: "Drip Coffee",
      pic: "images/drip.jpg",
      alt: "A picture of a drip coffee",
      color: "rgba(67, 33, 13, 0.8)",
      day: "Saturday",
      desc: `Our Drip Coffee is a timeless classic, crafted to highlight the pure, unadulterated essence of premium coffee beans. Brewed to perfection, this straightforward yet sophisticated beverage is a staple for coffee lovers who appreciate the deep, nuanced flavors that come from carefully selected and expertly roasted beans.`,
    };
    break;
  default:
    coffee = {
      name: "Unknown",
      pic: "",
      alt: "No coffee picture available",
      color: "rgb(255, 255, 255)",
      day: "Unknown",
      desc: "Something went wrong!",
    };
}

// Output coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// Set background color based on coffee color
document.querySelector("html").style.backgroundColor = coffee.color;
