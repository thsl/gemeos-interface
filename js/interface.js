$(document).ready(function () {
// isso tudo faz o botão de voltar fechar a modal (melhora a usabilidade )
    $('.modal').on('shown', function () {
        $("body").css("overflow", "hidden");
    });

    $('.modal').on('hidden', function () {
        $("body").css("overflow", "visible");
    });

    $('body').on('hidden.bs.modal', '.modal', function () {
        $(this).removeData('bs.modal');
    });

// Faz o back do browser fechar o modal
    $(".modal").on("shown.bs.modal", function () { // any time a modal is shown
        var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url
    });

// If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function () {
        $(".modal").modal('hide');
    });
});


// Coisas genéricas para TODA a interface
$(document).ready(function () {
    // faz o dropdown funcionar no mobile (mas tem que remover a tag 'data-toggle="dropdown"', e acrescentar a classe na div mãe do dropdown "dropdown-custom")
    $('.dropdown-custom .dropdown-toggle').on('click', function (event) {
        $(this).parent().toggleClass("open");
    });

    $('body').on('click', function (e) {
        if (!$('.dropdown-custom').is(e.target) && $('.dropdown-custom').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
            $('.dropdown-custom').removeClass('open');
        }
    });

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});