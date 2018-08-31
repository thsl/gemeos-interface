// Desabilita o enviar no enter, para não dar conflito com o TagEditor
/*$('#cadastro-form').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

*/
/*$(window).on('load',function(){
    $('#ModalCadastro').modal('show');
});
*/

$('.tags-editor-textarea').tagEditor({
    placeholder: 'Digite aqui'
});

$(".select2").select2({
    "language": "pt-BR"
});


// Contador de caracteres

$('#motivos-textarea').simplyCountable({
    counter: '#motivos-textarea-counter',
    countType: 'characters',
    strictMax: true,
    countDirection: 'down',
    maxCount: 150
});

$(document).ready(function () {


// alertas quando enviar
    $('.swal-btn-cancel').click(function (e) {
        e.preventDefault();
        swal({
            title: "Seu cadastro foi enviado e será analisado",
            icon: "success",
            button: "Ok",
        });
    });

});




