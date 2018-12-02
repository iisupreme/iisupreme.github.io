/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
/* Price calculator code*/
$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
		var quantity = +$(this).val();
		$("#total").text("$" + (price * quantity).toFixed(2));
	})
})

function mySubmit(){
  document.getElementById("submit_popup").style.display = "inline-block"; 
  document.getElementById("checkout_gone").style.display = "none";
  }

function myFunction() {
    alert("Warning! Most Delicious Cupcakes!");
}

function myFunction_popup(Inp_Popup) {
 if (Inp_Popup == 1) {
  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
 }
  else if (Inp_Popup == 2)
  {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }
  else
    {
      var popup = document.getElementById("myPopup2");
      popup.classList.toggle("show");
    }
 
  }

/**console.log("JavaScript is amazing!");*/