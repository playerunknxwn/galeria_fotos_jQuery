$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItemli = $('<li style="display: none"></li>')
        $(`<img src="${endereçoDaNovaImagem}">`).appendTo(novoItemli)
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItemli)
        $(novoItemli).appendTo('ul')
        $(novoItemli).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })
})