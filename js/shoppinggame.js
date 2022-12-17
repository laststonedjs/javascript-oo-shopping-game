let gameComplete = false;
// Define the three constants here
const name = "unknown";
const score = 0;
const items = 0;
// Define the player object here
let player = {
  name,
  score,
  items,
  getCurrentScore() {
    return this.score;
  },
  addPoints(points) {
    this.score = this.score + points;
  },
  deducePoints(points) {
    this.score = this.score - points;
  }
}

// Define the Product class - write the Constructor function for Product class here
function Product(id, name, price, expiryDate) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.expiryDate = expiryDate;
}
// Complete the dateDiff function
const dateDiff = (date1, date2) => {
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());

  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
};

// Here, use Object.defineProperty to create property - daysToExpire
Object.defineProperty(Product.prototype, 'daysToExpire', {
  get: function () {
    return dateDiff(this.expiryDate, new Date());
  }
})

// Add method getDetails to Product here
Product.prototype.getDetails = function () {
  return `Product Name: ${this.name}, Product Price: ${this.price}`;
}

// Define the MagicProduct class here
function MagicProduct(id, name, price, expiryDate, points, isBonus) {
  Product.call(this, id, name, price, expiryDate);
  this.points = points;
  this.isBonus = isBonus;
}

// Establish inheritance between Product() & MagicProduct() here
MagicProduct.prototype = Object.create(Product.prototype);

// Define Rating class here
class Rating {
  constructor() {
    this.rate = "";
  }

  set rating(value) {
    if (value > 1 && value <= 4) {
      this.rate = "OK";
    } else if (value >= 5 && value <= 7) {
      this.rate = "GOOD";
    } else if (value > 7) {
      this.rate = "EXCEPTIONAL";
    } else {
      this.rate = "BAD";
    }
  }
}

// Complete the loadProducts function
const loadProducts = (map, prodId) => {
  let a = new Array();
  try {
    // Call Object.keys() to load the property names of the Product object in to prodKeys array here
    let prodKeys = [];

    let iterator_obj = map.entries();

    if (prodKeys.length > 0) {
      for (let item of iterator_obj) {
        const key = item[0];
        const value = item[1];

        // Create and assign an instance of Product to prodObj here
        let prodObj;

        if (prodObj != undefined && prodObj != null) {
          for (let i = 0; i < prodKeys.length; i++) {
            let property = prodKeys[i];
            if (property == "id") {
              prodObj[property] = prodId;
            } else if (property == "name") {
              prodObj[property] = key;
            } else if (property == "price") {
              prodObj[property] = value.pr;
            } else if (property == "expiryDate") {
              prodObj[property] = value.dt;
            }
          }

          a.push(prodObj);
          prodId++;
        }
      }
    }

    return a;
  } catch (e) {
    return a;
  }
};


// Complete the loadMagicProducts function
const loadMagicProducts = (map, prodId) => {
  let a = new Array();
  try {
    // Call Object.key() to load the property names of the MagicProduct object in to magProdKeys array here
    let magProdKeys = [];

    let iterator_obj = map.entries();

    if (magProdKeys.length > 0) {
      for (let item of iterator_obj) {
        const key = item[0];
        const value = item[1];

        // Create and assign an instance of MagicProduct to prodObj here
        let magProdObj;

        if (magProdObj != undefined && magProdObj != null) {
          for (let i = 0; i < magProdKeys.length; i++) {
            let property = magProdKeys[i];
            if (property == "id") {
              magProdObj[property] = prodId;
            } else if (property == "name") {
              magProdObj[property] = key;
            } else if (property == "price") {
              magProdObj[property] = value.pr;
            } else if (property == "expiryDate") {
              magProdObj[property] = value.dt;
            } else if (property == "points") {
              magProdObj[property] = value.pt;
            } else if (property == "isBonus") {
              magProdObj[property] = value.isB;
            }
          }

          a.push(magProdObj);
          prodId++;
        }
      }
    }
    return a;
  } catch (e) {
    return a;
  }
};

function loadMasterData() {
  let prodId = 1;

  const today = new Date();
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
  const daysLater = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 3);

  //##############Load Products###############################
  let productData = new Map();
  productData.set("popcorn", { pr: 100.50, dt: oneYearLater });
  productData.set("oatmeal", { pr: 100.25, dt: oneYearLater });
  productData.set("macaroni", { pr: 100.10, dt: oneYearLater });
  productData.set("turkey", { pr: 800, dt: daysLater });
  productData.set("crab", { pr: 400, dt: daysLater });
  productData.set("butter", { pr: 25.50, dt: oneYearLater });
  productData.set("flour", { pr: 30, dt: oneYearLater });
  productData.set("pasta", { pr: 40.10, dt: oneYearLater });
  productData.set("chocolate", { pr: 25, dt: oneYearLater });
  productData.set("cola", { pr: 10, dt: oneYearLater });
  productData.set("beaf", { pr: 100.50, dt: daysLater });
  productData.set("fish", { pr: 150, dt: daysLater });
  productData.set("carrot", { pr: 40.10, dt: daysLater });
  productData.set("greens", { pr: 50, dt: daysLater });
  productData.set("sugar", { pr: 100, dt: oneYearLater });


  let pro = loadProducts(productData, prodId);

  //##############Load MagicProducts###############################
  let magicProductData = new Map();
  magicProductData.set("Christmas cake", { pr: 1000, dt: oneYearLater, pt: 10, isB: true });
  magicProductData.set("honey", { pr: 200, dt: oneYearLater, pt: 20, isB: false });
  magicProductData.set("pepper", { pr: 500, dt: oneYearLater, pt: 10, isB: false });
  magicProductData.set("champagne", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });
  magicProductData.set("cocktails", { pr: 2000, dt: oneYearLater, pt: 40, isB: true });


  prodId = pro.length + 1;

  let mpro = loadMagicProducts(magicProductData, prodId);
  let productsList;

  if ((pro != null && pro.length > 0) && (mpro != null && mpro.length > 0)) {
    productsList = pro.concat(mpro);
  }

  return productsList;
}

// Complete this function
const findProductById = (id) => { };

// Complete this function
const generateProductId = () => { };


const getProduct = (prodList, pId) => {
  return prodList.find(findProductById(pId));
};


// Complete this function
const calculateBill = (prod, tBill) => { };

const findPointsToBill = (roundedTotal) => {
  if (roundedTotal > 10 && roundedTotal <= 100) {
    return 5;
  } else if (roundedTotal > 100 && roundedTotal <= 250) {
    return 10;
  } else if (roundedTotal > 250 && roundedTotal <= 400) {
    return 15;
  } else if (roundedTotal > 400 && roundedTotal <= 500) {
    return 20;
  } else if (roundedTotal > 500 && roundedTotal <= 750) {
    return 25;
  } else if (roundedTotal > 1000) {
    return 50;
  } else {
    return 0;
  }
};


// Complete this function
const findPointsForExpDate = (prod) => { };


const calculatePoints = (prod, tBill) => {
  let pointsToBill = findPointsToBill(Math.round(tBill));
  let pointsForExpDate = findPointsForExpDate(prod);
};

// Complete this function
function init(data) {
  if (Object.is(data, undefined) == false && gameComplete == true) {
    console.log("Welcome to the Shopping Master game! You can shop for groceries and become a Shopping Master!");
    console.log("We offer you grocery items that you can buy or reject. You can buy up to 10 items.");
    console.log("As you go along your shopping journey you will collect points.");
    console.log("If you earn 500 points you become a Shopping Master!");
    console.log("You can start the game or quit using the following options.");
    console.log("1 - Shop".green);
    console.log("2 - Quit".green);
    console.log("=============================================================================================\n");

    rl.question("What's your name? ", function (name) {
      // Assign the player object's name property to the user entered name here
      console.log(`Welcome ${player.name} !!!`.blue);
      start(data);
    });

  }
}

function start(data) {
  rl.question("What would you like to do? <Enter option number>: ", function (option) {
    if (option == "" || isNaN(option)) {
      console.log("Invalid option! Enter 1 or 2".red);
      start(data);
    } else {
      doAction(option, data);
    }
  });
}

// Complete this function
const shop = (prodList, tBill, lastProd) => {
  let totalBill = tBill;
  const prId = generateProductId();
  let product = null; // Assign the value of product here
  let productDetails = null; // Assign the value of productDetails here

  rl.question(`You can buy - ${productDetails}.\n Do you want to buy this item <Y/N>? `.yellow, function (option) {
    const regexYes = null; // Use the RegExp built-in object type here as appropriate
    const regexNo = null; // Use the RegExp built-in object type here as appropriate
    if (regexYes.test(option)) {
      totalBill = calculateBill(product, totalBill);
      calculatePoints(product, totalBill);
      console.log(`${player.name} you earned ${player.getCurrentScore()} points!`.bold);
      if (player.score >= 500) {
        // Define and set new property status in the player object here
        exitWon();
      } else {
        let iCount = ++player.items;
        // Make the Object.defineProperty() call here to set the value of items using the value of iCount

        if (player.items < 10) {
          shop(prodList, totalBill);
        } else {
          exitLost();
        }
      }

    } else if (regexNo.test(option)) {
      if (player.items < 10) {
        shop(prodList, totalBill);
      } else {
        exitLost();
      }
    } else {
      console.log("Invalid option! Enter Y or N.".red);
      shop(prodList, totalBill, product);
    }
  });
};

// Complete this function
const rateAndExit = () => {
  // Create a new instance of Rating and assign it to a variable named playerRating here
  rl.question("How would you rate this game on a scale of 1-10 (1 being the lowest)?:", function (r) {
    if (r == "" || isNaN(r) || r == 0 || r > 10) {
      console.log("Invalid rating! Please nter a number from 1 - 10".red);
      rateAndExit();
    } else {
      // Call rating setter method of playerRating to set user entered rate value here

      // Call Object.assign() method here to populate target

      console.log(`${target.name} you rated this game as ${target.rate}`.green);
      console.log("Thank you for your valuable feedback.".blue);
      rl.close();
    }
  });
};

// Complete this function
const exitLost = () => {
  let pointsToReach; // Assign calculated value to pointsToReach here
  console.log(`Your chances are over! You are short of ${pointsToReach} to become a Shopping Master. Good Luck for next time!`.yellow);
  rateAndExit();
};

// Complete this function
const exitWon = () => {
  let finalStatus;
  console.log(`Congratulations!!! You became ${finalStatus}!`.blue);
  rateAndExit();
};

// Uncomment this function once you fully implement the game to be able to run it
// (function setGameCompleteFlag(){
//     gameComplete = true;
// })();

function main() {
  let products = loadMasterData();
  init(products);
}



///////////////////////////////////////////////////////////////
const readline = require("readline");
require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const quit = () => {
  rl.on("close", function () {
    console.log("\nGAME OVER !!!".bold);
  });
  process.exit(0);
};

function doAction(o, d) {
  if (o == 1) {
    shop(d, 0);
  } else if (o == 2) {
    quit();
  }
}

main();

exports.gameComplete = gameComplete;
if (typeof name != 'undefined') { exports.name = name; }
if (typeof score != 'undefined') { exports.score = score; }
if (typeof items != 'undefined') { exports.items = items; }
if (typeof player != 'undefined') { exports.player = player; }
if (typeof Product != 'undefined') { exports.Product = Product; }
if (typeof MagicProduct != 'undefined') { exports.MagicProduct = MagicProduct; }
if (typeof Rating != 'undefined') { exports.Rating = Rating; }
exports.dateDiff = dateDiff;
exports.loadProducts = loadProducts;
exports.loadMagicProducts = loadMagicProducts;
exports.loadMasterData = loadMasterData;
exports.findProductById = findProductById;
exports.generateProductId = generateProductId;
exports.getProduct = getProduct;
exports.findPointsToBill = findPointsToBill;
exports.findPointsForExpDate = findPointsForExpDate;
exports.calculateBill = calculateBill;
exports.calculatePoints = calculatePoints;
exports.init = init;
exports.shop = shop;
exports.rateAndExit = rateAndExit;
exports.exitLost = exitLost;
exports.exitWon = exitWon;
exports.main = main;



