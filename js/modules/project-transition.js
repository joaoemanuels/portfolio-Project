export default function initProjectTransition() {

  $(document).ready(function () {
    $('.item[data-categoria="frontend"]').addClass('mostrar');

    $('.filtro').on('click', function (e) {
      e.preventDefault();

      $('.item').removeClass('mostrar');
      $('.filtro').removeClass('selected');

      $(this).addClass('selected');
      const categoria = $(this).data('categoria');

      if (categoria === 'todos') {
        $('.item').addClass('mostrar');
      } else {
        $(`.item[data-categoria="${categoria}"]`).addClass('mostrar');
      }
    });
  });
}