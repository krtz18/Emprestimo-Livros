


$(document).ready(function () {

    $('#Emprestimos').DataTable({
        language: (
            {
                "decimal": "",
                "emptyTable": "Não temos emprestimos cadastrados!",
                "info": "Mostrando _START_ registro de _END_ em um total de _TOTAL_ resultados",
                "infoEmpty": "Showing 0 to 0 of 0 entries",
                "infoFiltered": "(filtered from _MAX_ total entries)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ resultados",
                "loadingRecords": "Loading...",
                "processing": "",
                "search": "Buscar:",
                "zeroRecords": "Nenhum empréstimo foi encontrado!",
                "paginate": {
                    "first": "Primeiro",
                    "last": "Último",
                    "next": "Próximo",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }
        )
    });

    setTimeout(function () {

        $(".alert").fadeOut("slow", function () {
            $(this).alert('close');
        })

    }, 3000)
});