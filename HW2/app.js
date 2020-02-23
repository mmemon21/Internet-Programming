$(document).ready(function(){

  var score = 0;

  //Event Listeners
  //Submit Quiz Button
  $("button").on("click", gradeQuiz);

  //Question 5 images
  $(".q5Choice").on("click", function(){
    $(".q5Choice").css("background", "");
    $(this).css("background", "rgb(255, 255, 255)");
  });

  

  function isFormValid(){
    let isValid = true;
    if ($("#q1").val() == ""){
      isValid = false;
      $("#validationFdbk").html("Question 1 was not answered");
    }
    if ($("#q2").val() == ""){
      isValid = false;
      $("#validationFdbk").html("Question 2 was not answered");
    }
    if($("#q7").val() == ""){
      isValid = false;
      $("#validationFdbk").html("Question 7 was not answered");
    }

    return isValid;
  }

  function gradeQuiz(){
    $("#validationFdbk").html("");

    if(!isFormValid()){
      return;
    }

    //vars
    var score = 0;
    let q1Name = $("#q1").val().toUpperCase(); //Now it's a name entry section
    let q2Response = $("#q2").val();
    let q7Response = $("#q7").val();

    //Question 2
    if(q2Response == "bl"){
      score += 10;
    }

    //Question 3
    if($("#one").is(":checked")){
        score += 7.5;
    }
    if($("#three").is(":checked")) {
        score += 7.5;
    }
    if($("#two").is(":checked") || $("#four").is(":checked")) {
      score -= 10;
    }


    //Question 5
    if($("#seal1").css("background-color") == "rgb(255, 255, 0)"){
      score += 10;
    } else if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
      score -= 20;
    } else if($("#seal3").css("background-color") == "rgb(255, 255, 0)"){
      score += 15;
    } else {
      score += 15;
    }


    //Question 7
    if(q7Response == "yes"){
      score += 15;
    }

    //Question 8 
    if($("#kind").is(":checked")) {
      score += 10;
    }
    if($("#rude").is(":checked")) {
      score += 10;
    }
    if($("#netflix").is(":checked")) {
      score += 10;
    }
    if($("#horses").is(":checked") || $("#gamer").is(":checked")) {
      score -= 10;
    }

    $("#name").html(`${q1Name} scored ${score},<br> which makes you ${score*100 / 60}% Thomas Shelby!`)


  }//ready
 }); 