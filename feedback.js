


  document.getElementById("white1").onclick = function () {
    rate = 1;
    document.getElementById("rate").innerHTML = `your rate ${rate}`;
    document.getElementById("star1").src="../pictures/yellowstar.png"
    document.getElementById("star2").src="../pictures/whitestaricon.png"
    document.getElementById("star3").src = "../pictures/whitestaricon.png"
    document.getElementById("star4").src = "../pictures/whitestaricon.png"
    document.getElementById("star5").src="../pictures/whitestaricon.png"
  }
document.getElementById("white2").onclick = function() {
    rate = 2;
    document.getElementById("rate").innerHTML = `your rate ${rate}`;
    document.getElementById("star1").src = "../pictures/yellowstar.png"
    document.getElementById("star2").src = "../pictures/yellowstar.png"
    document.getElementById("star3").src = "../pictures/whitestaricon.png"
    document.getElementById("star4").src = "../pictures/whitestaricon.png"
    document.getElementById("star5").src="../pictures/whitestaricon.png"
    
  }
  document.getElementById("white3").onclick = function () {
    rate = 3;
    document.getElementById("rate").innerHTML = `your rate ${rate}`;
    document.getElementById("star1").src = "../pictures/yellowstar.png"
    document.getElementById("star2").src = "../pictures/yellowstar.png"
    document.getElementById("star3").src = "../pictures/yellowstar.png"
    document.getElementById("star4").src="../pictures/whitestaricon.png"
    document.getElementById("star5").src="../pictures/whitestaricon.png"
  }
  document.getElementById("white4").onclick = function () {
    rate = 4;
    document.getElementById("rate").innerHTML = `your rate ${rate}`;
    document.getElementById("star1").src = "../pictures/yellowstar.png"
    document.getElementById("star2").src = "../pictures/yellowstar.png"
    document.getElementById("star3").src = "../pictures/yellowstar.png"
    document.getElementById("star4").src = "../pictures/yellowstar.png"
    document.getElementById("star5").src="../pictures/whitestaricon.png"
 
  }
  document.getElementById("white5").onclick = function () {
    rate = 5;
    document.getElementById("rate").innerHTML = `your rate ${rate}`;
    document.getElementById("star1").src = "../pictures/yellowstar.png"
    document.getElementById("star2").src = "../pictures/yellowstar.png"
    document.getElementById("star3").src = "../pictures/yellowstar.png"
    document.getElementById("star4").src = "../pictures/yellowstar.png"
    document.getElementById("star5").src = "../pictures/yellowstar.png"
  
  }

document.getElementById("submit").onclick = function () {
   window.confirm(`you will give us ${rate} out of 5 , are you sure?`)
    document.getElementById("thanksmessage").innerHTML = `We just recieved your comment,Thanks for your comment, your comments mean a lot to us!!`
    var comment = document.getElementById("comment").value;
    document.getElementById("finalcomment").innerHTML = comment; 
    document.getElementById("finalrate").innerHTML = rate + "out of 5";

}

