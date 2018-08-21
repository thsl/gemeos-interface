$(".select2").select2({
    "language": "pt-BR"
});


$(document).ready(function () {
// Mascaramento dos campos
    $('#cpf').mask('000.000.000-00', {reverse: true, placeholder: "000.000.000-00"});


// Validador de campos


    $("#cadastro-form").validate({
        rules: {
            selectvinculo: {
                selectcheck: true
            },

            cpf: "required"
        },
        messages: {
            cpf: "Este campo não pode ser em branco"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        errorPlacement: function (error, element) {
            if (element.hasClass('select2')) {
                error.insertAfter(element.next('span'));  // select2
            } else {
                error.insertAfter(element);               // default
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-danger").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-danger");
        }
    });

// Adiciona o select2 na validação
    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "Selecione ao menos um vínculo");

// alertas quando deletar
    $('.swal-btn-cancel').click(function (e) {
        e.preventDefault();
        swal({
            title: "Seu cadastro foi enviado e será analisado",
            icon: "success",
            button: "Ok",
        });
    });

});