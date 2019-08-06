// Write your Pizza Builder JavaScript in this file.

//Add and remove pepperonni

$(document).ready(function(){
let totalPrice = parseFloat($("#prices").text())

$(".btn-pepperonni").on("click", function(){

    const isDisplayed = $(".pep").css("display");
    if(isDisplayed === "block") {
        totalPrice--
        $(".pep").hide(); 
        $(".pepperonni").hide();
    }
    else {
        totalPrice++
        $(".pep").show();
        $(".pepperonni").show();
    }   
    $("#prices").text(totalPrice)
}); 

// let pep = false 
 // if(pep){
    //     $(".pepperoni").append(pep);
    //     debugger
    //     pep = false;
    // }
    // else {
    //     pep = $(".pep").detach();   
    //     debugger
    // }
 
//Add and remove mushroom
    
$(".btn-mushrooms").on("click", function(){

        const isDisplayed = $(".mushroom").css("display");
        if(isDisplayed === "block") {
            totalPrice--
            $(".mushroom").hide();
            $(".mushrooms").hide()
        }
        else {
            totalPrice++
            $(".mushroom").show();
            $(".mushrooms").show();
        }    
        $("#prices").text(totalPrice)
});    

//Add and remove peppers

$(".btn-green-peppers").on("click", function(){

    const isDisplayed = $(".green-pepper").css("display");
    if(isDisplayed === "block") {
        totalPrice--
        $(".green-pepper").hide();
        $(".greenpeppers").hide();
    }
    else {
        totalPrice++
        $(".green-pepper").show();
        $(".greenpeppers").show();
    }    
    $("#prices").text(totalPrice)
}); 

//Add and remove white sauce

$(".whitesauce").hide();

const getPriceWhiteSauce = parseInt($("#option-4").text())

$(".btn-sauce").on("click", function(){
    $(".sauce").toggleClass("sauce-white")
    const isDisplayed = $(".whitesauce").css("display");
    if (isDisplayed === "none") {
        totalPrice += getPriceWhiteSauce;
        $(".whitesauce").show();
    } else {
        totalPrice -= getPriceWhiteSauce;
        $(".whitesauce").hide()
    }
    $("#prices").text(totalPrice)
});

//Add and remove gluten free crust

$(".glutenfreecrust").hide();

const getPriceGlutenCrust = parseInt($("#option-5").text())

$(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free")
    const isDisplayed = $(".glutenfreecrust").css("display");
    if (isDisplayed === "none") {
        totalPrice += getPriceGlutenCrust;
        $(".glutenfreecrust").show();
    } else {
        totalPrice -= getPriceGlutenCrust;
        $(".glutenfreecrust").hide()
    }
    $("#prices").text(totalPrice)
});

//disable and enable buttons

// $(".btn-pepperonni").click(function(){
//     $(".btn-pepperonni").toggleClass("active");
// });

// $(".btn-mushrooms").click(function(){
//     $(".btn-mushrooms").toggleClass("active");
// });

// $(".btn-green-peppers").click(function(){
//     $(".btn-green-peppers").toggleClass("active");
// });

// $(".btn-sauce").click(function(){
//     $(".btn-sauce").toggleClass("active");
// });

// $(".btn-crust").click(function(){
//     $(".btn-crust").toggleClass("active");
// });

//disable and enable depending on button clicked

$(".btn").click(function(){
    $(this).toggleClass("active");
});

});

//total price

// $('.panel.price').each(function(){
//     debugger
//     var sum = 0;
//     $(this).each(function(){
//       sum += parseInt($('.sum').text());
//     debugger

//     });
//     $("#prices").text(sum);
//   });