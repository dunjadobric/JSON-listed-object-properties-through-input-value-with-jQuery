$(document).ready(function() {
    var input = $("#number");

    $("#click").click(function() {
        // console.log(input.val());
        getResponse();
        $("#click").attr("disabled", true);
        if (input.val() > 10) {
            alert("Number must be between 1 and 10");
        }
    });

    function getResponse() {
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/?userId=" + input.val(),
            success: function(response) {
                printData(response);
                //console.log(response);
            },
            error: function() {
                console.log("Error");
            }
        });
    };

    // getResponse();

    function printData(response) {
        console.log(response);
        response.forEach(element => {
            console.log(element.title);
            $("#posts").append(
                `
                <div class="post">
                <div class="postTitle">
                <p class="title">Subject:</p>
                <p class="subjectText text">${element.title}</p>
                </div>    
                
                <div class="postMessage">
                <p class="title">Message:</p>
                <p class="bodyText text">${element.body}</p>
                </div>
            </div>
                `
            );
        });
    };

    $("#reset").click(function() {
        input.val('');
        $("#posts").html("");
        $("#click").attr("disabled", false);
    });

});