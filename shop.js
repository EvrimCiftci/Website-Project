let quantity = 0;//total quantity





const products = new Map([
  ['t-shirt', 63],
  ['cap', 48],
  ['sneaker', 130],
]); // map method is used to store all prices of the products


let shoppingcart = 0; //total  price of the tshirts
let shoppingcart2 = 0; // total price of the caps
let shoppingcart3 = 0; //total price of the sneakers
let total = 0;
let tshirtquantity = 0; // quantatiy of t-shirts
let capquantity = 0; // quantity of caps
let sneakerquantity = 0; // quantity of sneakers
let capquantity1 = 0;
let tshirtquantity1 = 0;
let sneakerquantity1 = 0;
//Buttons for Tshirts

//increase function for first item
document.getElementById("plus").onclick = function () {
  tshirtquantity += 1; // onclick it adds 1 item
  //current t-shirt quantatiy prints in the label
  document.getElementById("tshirtquantity").innerHTML = tshirtquantity;
  if (tshirtquantity > 1) {
    //giving an warning if a custommer already adds one item, and tries to add more than one
    window.alert(`you already have ${tshirtquantity -1} t-shirt in your cart`)
  }
}

//decrease function for first item
document.getElementById("minus").onclick = function () {
  tshirtquantity -= 1; // onclick it reduces one item
  if (tshirtquantity < 0) {
    tshirtquantity = 0; // if tshirt quantity less than zero it becomes zero again
    // gives warning to the user that they don't have any item in their cart
    window.alert("Your cart is already empty")
    
  }
  document.getElementById("tshirtquantity").innerHTML = tshirtquantity;
}
//add item to the cart function for the first item
document.getElementById("AddButton").onclick =function() {
  if (tshirtquantity > 0) {
     // it adds as many product as customers choose in the earlier methods to the total product quantity
    quantity += tshirtquantity;
    tshirtquantity1 += tshirtquantity;
    //tshirt product info is got from the map method and multipy by the quantity
    shoppingcart = products.get("t-shirt") * tshirtquantity;
    //displays how many items customers have in their cart in total
    document.getElementById("quantity").innerHTML = quantity;
    total += shoppingcart
    //total cost 
    document.getElementById("total").innerHTML = total;
     //displays number of the tshirts that customer has in the cart
    document.getElementById("tqlabel").innerHTML = `you have ${tshirtquantity1} tshirts in your cart`;
  }
  }
//reduce function to reduce item after customers added them to the their cart
document.getElementById("reduce").onclick = function () {
  if (tshirtquantity1 == 0) {
    total - 0;
    // with this line of code total amount of money con not be less than zero
  }
  else {
    //reduces item from the total amount of items
    quantity -= 1;
    //reduces item from the total number of tshirts
    tshirtquantity1 -= 1;
    shoppingcart = products.get("t-shirt");
    if (tshirtquantity1 < 0) {
      tshirtquantity1 = 0;
      //tshirt quantatiy can not be less than zero
    }
    if (shoppingcart < 0) {
      shoppingcart = 0;
      //shopping cart can not be less than zero
    }
    if (quantity < 0) {
      quantity = 0;
      //total number of items can nr ve less than zero
    }
    //prints the quantity of the items after it's reduced 
    document.getElementById("quantity").innerHTML = quantity
    //total amount of tshirts reduced from the total amount of whole items
    total -= shoppingcart;
    document.getElementById("total").innerHTML = total;
    //prints the quantity of tshirts after it's reduced
    document.getElementById("tqlabel").innerHTML = `you have ${tshirtquantity1} tshirts in your cart`;
  
  }
}



//Buttons for cap

//increase function for caps
document.getElementById("plus2").onclick = function () {
  //increases the number of caps that customer will add their cart
  capquantity += 1;
  //displays the number of caps
  document.getElementById("capquantity").innerHTML = capquantity;
  if (capquantity > 1) {
    //gives warning to customers
    window.alert(`you already have ${capquantity -1} cap in your cart`)
  }
}

//reduces function for caps
document.getElementById("minus2").onclick = function () {
//reduces the number of caps that customer will add their cart
  capquantity -= 1;
  if (capquantity < 0) {
    //number of the customers can not be less than 0
    capquantity = 0;
    //giver warning to customers
    window.alert("Your cart is already empty")
    
  }
  document.getElementById("capquantity").innerHTML = capquantity;
}

// add function for caps
document.getElementById("AddButton2").onclick = function () { 
  if (capquantity > 0) {
   //adds the number of caps that customer chose earlier to the cart
    quantity += capquantity;
    // add  quantity of cap to  the cart
    capquantity1 += capquantity;
    //product price multipy by quantity of product
    shoppingcart2 = products.get("cap") * capquantity;
    document.getElementById("quantity").innerHTML = quantity;
    total += shoppingcart2;
    document.getElementById("total").innerHTML = total;
    document.getElementById("caplabel").innerHTML = `you have ${capquantity1} caps in your cart`;
  }
 }
//reduce function for item 2
document.getElementById("reduce2").onclick = function () {
  if (capquantity1 == 0) {
    total - 0;
    //total can not be less than 0
  }

  else {
    //reduces item -1
    capquantity1 -= 1;
    quantity -= 1;
    if (capquantity1 < 0) {
      capquantity1 = 0;
      //quantity can not be less than 0, and gives warning to user 
      window.alert("you already don't have any caps in your cart")
      shoppingcart2 - 0;
    }
    if (capquantity1 >= 1) {
      shoppingcart2 = products.get("cap");
    }
    if (shoppingcart2 < 0) {
      shoppingcart2 = 0;
    }
    if (quantity < 0) {
      quantity = 0;
    }
    if (capquantity1 == 0 && shoppingcart2 > 0) {
      shoppingcart2 = 0;
    }
    if (capquantity1 == 0 && quantity > 0) {
      quantity - 0;
    }
    shoppingcart2 = products.get("cap");
    //reduces amount of 1 item
    total -= shoppingcart2;
    document.getElementById("total").innerHTML = total;
    document.getElementById("quantity").innerHTML = quantity
    document.getElementById("caplabel").innerHTML = `you have ${capquantity1} caps in your cart`;

  }
}


// buttons for sneakers


//increase function for item 3
document.getElementById("plus3").onclick = function () {
  //increase by 1
  sneakerquantity += 1;
  document.getElementById("sneakerquantity").innerHTML = sneakerquantity;
  if (sneakerquantity > 1) {
    //gives warning if you already have one
    window.alert(`you already have ${sneakerquantity -1} sneakers in your cart`)
  }
}

//decrease function for item 3
document.getElementById("minus3").onclick = function () {
  //decrease the quantity of item 3
  sneakerquantity -= 1;
  if (sneakerquantity < 0) {
    //quantity of sneakers can not be less than 0
    sneakerquantity = 0;
    // if the user has 0 in heir cart and tries to decrease it warns user
    window.alert("Your cart is already empty")
    
  }
  document.getElementById("sneakerquantity").innerHTML = sneakerquantity;
}

//add function
 document.getElementById("AddButton3").onclick = function () { 
   if (sneakerquantity > 0) {
    //total quantity increased by sneaker quantity
    quantity += sneakerquantity;
     sneakerquantity1 += sneakerquantity;
     //price of sneakers multipy by number of sneakers to find how much it costs
    shoppingcart3 = products.get("sneaker") * sneakerquantity;
    document.getElementById("quantity").innerHTML = quantity;
    total += shoppingcart3;
    document.getElementById("total").innerHTML = total;
    document.getElementById("sneakerlabel").innerHTML = `you have ${sneakerquantity1} caps in your cart`;
  }
 }

 document.getElementById("reduce3").onclick = function () {
   if (sneakerquantity1 == 0) {
    //total price can not be less than 0
    total - 0;
  }

   else {
     //reduces 1 item on every click
    sneakerquantity1 -= 1;
    quantity -= 1;
    if (sneakerquantity1 < 0) {
      sneakerquantity1 = 0;
      // if users have 0 item in their cart system warns them
      window.alert("you already don't have any sneakers in your cart")
      shoppingcart3 - 0;
    }
     if (sneakerquantity1 >= 1) {
      shoppingcart3 = products.get("cap");
    }
     if (shoppingcart3 < 0) {
      //price of sneakers can not be less than 0
      shoppingcart3 = 0;
    }
    if (quantity < 0) {
      quantity = 0;
    }
    if (sneakerquantity1 == 0 && shoppingcart3 > 0) {
      shoppingcart3 = 0;
    }
    if (sneakerquantity1 == 0 && quantity > 0) {
      quantity - 0;
    }
   
    shoppingcart3 = products.get("sneaker");
    total -= shoppingcart3;
    document.getElementById("total").innerHTML = total;
    document.getElementById("quantity").innerHTML = quantity
    document.getElementById("sneakerlabel").innerHTML = `you have ${sneakerquantity1} caps in your cart`;
  }
}
