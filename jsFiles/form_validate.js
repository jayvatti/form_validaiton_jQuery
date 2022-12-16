$( document ).ready(function() {
    $( "#accordion" ).accordion({
        heightStyle: "fill"
    });

    var availableTags = [
        "Pencil & Color",
        "Oil Painting",
        "Pastel Colors",
        "Ink Wash Painting",
        "Textured Painting",
        "Vector Art",
        "Illustration",
        "Creative Design",
        "Acrylic Painting",
        "Hot Wax Painting",
        "Spray Painting"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });

    $( "#button" ).button();
    $( "#button-icon" ).button({
        icon: "ui-icon-gear",
        showLabel: false
    });

    $( "#radioset" ).buttonset();

    $( "#controlgroup" ).controlgroup();

    $( "#tabs" ).tabs();

    $( "#dialog" ).dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "Ok",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });

    // Link to open the dialog
    $( "#dialog-link" ).click(function( event ) {
        $( "#dialog" ).dialog( "open" );
        event.preventDefault();
    });

    $( "#datepicker" ).datepicker({ minDate: 2, maxDate: "+1M +1D" });//setting date range //date is readOnly

    $( function() {
        $( "#slider-range-max" ).slider({
            range: "max",
            min: 1,
            max: 10,
            value: 2,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    } );

    $( "#progressbar" ).progressbar({
        value: 20
    });

    $( "#spinner" ).spinner();

    $( "#menu" ).menu();

    $( "#tooltip" ).tooltip();

    $( "#selectmenu" ).selectmenu();

    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
        function() {
        $( this ).addClass( "ui-state-hover" );
        },
        function() {
            $( this ).removeClass( "ui-state-hover" );
        }

    );

    //checkbox Radio & control group
    $( function() {
        $( ".checkboxradio" ).checkboxradio({
        });
        $( ".controlgroup" ).controlgroup();
    } );

    let counter = 0;//number of times form is submitted
    $.validator.setDefaults({

        submitHandler: function() {
            //storing values of the form in a variable
            let firstName = $('#fname').val();
            let lastName = $('#lname').val();
            let email = $('#email').val();
            let userName = $('#username').val();
            let password = $('#password').val();
            let telephone = $('#telephone').val();

            let deliveryDate = $('#datepicker').val();
            let artStyle = $('#tags').val();
            let image = $('#choose-file').val();
            let comments = $('#text').val();
            let slider = $('#amount').val();

            let addOns= "";//storing checkbox values
            $('input[name="checkbox_1"]:checked').each(function() {
                addOns += $(this).val() + " ";
            });
            let newsLetter = $('input[name="radio_1"]:checked').val()//radiobutton

            if(counter === 0){
                counter++;
                $(".output").append(`<h4 id="output_counter">Form Submission ${counter}</h4>`)//appending to output
                    .append(`<p id="output_firstName">FirstName: ${firstName}</p>`)
                    .append(`<p id="output_lastName">LastName: ${lastName}</p>`)
                    .append(`<p id="output_email">Email: ${email}</p>`)
                    .append(`<p id="output_userName">UserName: ${userName}</p>`)
                    .append(`<p id="output_password">Password: ${password}</p>`)
                    .append(`<p id="output_telephone">Telephone: ${telephone}</p>`)
                    .append(`<p id="output_date">Delivery Date: ${deliveryDate}</p>`)
                    .append(`<p id="output_style">Art Style: ${artStyle}</p>`)
                    .append(`<p id="output_image">Image: ${image}</p>`)
                    .append(`<p id="output_comments">Comments: ${comments}</p>`)
                    .append(`<p id="output_level">Level of Creative Freedom: ${slider}</p>`)
                    .append(`<p id="output_addOns">Add Ons: ${addOns}</p>`)
                    .append(`<p id="output_newsLetter">NewsLetter: ${newsLetter}</p>`)
            }
            else{
                counter++;//incrementing counter
                //DOM selections
                document.getElementById("output_counter").textContent = `Form Submission ${counter}`;
                document.getElementById("output_firstName").textContent = `FirstName: ${firstName}`;
                document.getElementById("output_lastName").textContent = `LastName: ${lastName}`;
                document.getElementById("output_email").textContent = `Email: ${email}`;
                document.getElementById("output_userName").textContent = `UserName: ${userName}`;
                document.getElementById("output_password").textContent = `Password: ${password}`;
                document.getElementById("output_telephone").textContent = `Telephone: ${telephone}`;
                document.getElementById("output_date").textContent = `Delivery Date: ${deliveryDate}`;
                document.getElementById("output_style").textContent = `Art Style: ${artStyle}`;
                document.getElementById("output_image").textContent = `Image: ${image}`;
                document.getElementById("output_comments").textContent = `Comments: ${comments}`;
                document.getElementById("output_level").textContent = `Level of Creative Freedom: ${slider}`;
                document.getElementById("output_addOns").textContent = `Add Ons: ${addOns}`;
                document.getElementById("output_newsLetter").textContent = `NewsLetter: ${newsLetter}`;
            }

        },
        //placement for validation error
        errorPlacement: function (error, element) {
            if (element.attr("name") == "checkbox_1") {
                error.insertAfter($("#addOns"));
            } else {
                error.insertAfter(element);
            }
        },
    });
    //custom form validation
    $("#contact_form").validate({
        ignore: [],//makes sure to NOT ignore hidden fields
        rules: {
            fname: {
                required: true,
                maxlength: 10
            },
            lname: {
                required: true,
                maxlength: 20
            },
            email: {
                required: true,
                email: true,
                maxlength: 30
            },
            username: {
                required: true,
                maxlength: 10,
                minlength: 4
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 30
            },
            telephone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            date: {
                required: true

            },
            tags: {
                required: true,
            },
            choose_file: {
                required: true
            },
            text:{
                required:true
            },
            amount:{
                required:true,
                range: [1, 10]
            },
            checkbox_1:{
                required:true
            },
            radio_1:{
                required:true
            }
        },
        //messages
        messages:{
            username: {
                required: "Please enter a username",
                maxlength: $.validator.format("Must not have more than {0} characters")
            },
            password: {
                required: "Please provide a password",
                minlength: $.validator.format("Must have at least {0} characters")
            },
            date: {
                required: "Please enter a delivery date",
                date: "Please enter a valid delivery date"
            },
            telephone: {
                required: "Please enter your phone number",
                digits: "Please enter digits only",
                maxlength: "Enter a valid number (10 digits)",
                minlength: "Enter a valid number (10 digits)",
            },
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email address"
            },
            radio_1: {
                required: "Please check an option"
            },
            checkbox_1:{
                required: "(Choose at least one)"
            },
            tags: {
                required: "You must choose an Art Style"
            },
            choose_file:{
                required: "Please select a file (Only images allowed)"
            }
        }
    });

});
