// var keywords = ["Jake", "Emanuel", "Ali", "Takashi", "Mike"];
// let randomKeyword = Math.floor(Math.random() * 5);

var name = $('#name').val();

// $(document).ready(function() {
    // $.ajax({
    //     method: "GET",
    //     url: "https://www.behindthename.com/api/lookup.json?name=",
    //     dataType: "json",
    //     data: {
    //       "key": "mm374928734",
    //       "name": $('#name').val()
    //     },
    //     success: function(result, status) {
    //         console.log(result);

    //     }

    // });
function nameSearch(){
    $.ajax({
        method: "GET",
        url: "https://www.behindthename.com/api/lookup.json?name=",
        dataType: "json",
        data: {
          "key": "mm374928734",
          "name": $('#name').val()
        },
        success: function(result, status) {
            console.log(result);

            $("#result1").html("Name: " + result[0].name);
            $("#result2").html("Gender: " + result[0].gender);

            if(result[0].gender == 'm'){
                $('body').css('background', 'yellow');
                $('#genderImage').html("<img src='img/MaleSign.png' alt='xmark' >");
            }
            else if(result[0].gender == 'f'){
                $('body').css('background', 'red');
                $('#genderImage').html("<img src='img/FemaleSign.png' alt='xmark'  >");

            } else if(result[0].gender == 'mf'){
            $('body').css('background-color','purple');
            }

           $('#result3').html("Origin: ");
            result[0].usages.forEach(function(BG){
                $('#result3').append(BG.usage_full + " <-> "); 
            });
            console.log(result[0].usages)

            // $('#nameDisplay').html("Name: " + result[0].name + " Gender: " + result[0].gender);

        }

    });
};