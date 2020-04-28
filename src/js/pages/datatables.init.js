/*
Template Name: Ubold - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Version: 3.0.0
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Datatables init js
*/

$(document).ready(function() {

    // ATB Datatable
    $('#atb-datatable').DataTable({
        "ajax": "https://api.jsonbin.io/b/5e87a93585182d79b062feac",
        "columns": [
            { "data": "GENDER" },
            { "data": "NATIONALITY" },
            { "data": "DATE OF BIRTH" },
            { "data": "PROFESSION" },
            { "data": "HOME ADDRESS" },
            { "data": "STATE" },
            { "data": "ZIPCODE" },
            { "data": "COUNTRY" },
            { "data": "ADDRESS IN ANGUILLA" },
            { "data": "ENTRY PORT" },
            { "data": "ARRIVAL DATE" },
            { "data": "INTENDED DEPARTURE" }
        ]
    });

    // Default Datatable
    $('#basic-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'print', 'pdf'],
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        },
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Key Datatable
    $('#key-datatable').DataTable({
        keys: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


    // Alternative Pagination Datatable
    $('#alternative-page-datatable').DataTable({
        "pagingType": "full_numbers",
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Scroll Vertical Datatable
    var atb_table = $('#scroll-vertical-datatable').DataTable({
        "ajax": {
            "url": "https://api.jsonbin.io/b/5e87ab6385182d79b0630045",
            "type": "GET",
            "secret-key": "$2b$10$jjHosLFlFrbynXrMrssuCO8puPJb./OuAni6iiHu2ttvdytEUyKri"
        },
        "columns": [{
            "data": "GENDER"
        }, {
            "data": "NATIONALITY"
        }, {
            "data": "DATE OF BIRTH"
        }, {
            "data": "PROFESSION"
        }, {
            "data": "HOME ADDRESS"
        }, {
            "data": "STATE"
        }, {
            "data": "ZIPCODE"
        }, {
            "data": "COUNTRY"
        }, {
            "data": "ADDRESS IN ANGUILLA"
        }, {
            "data": "ENTRY PORT"
        }, {
            "data": "ARRIVAL DATE"
        }, {
            "data": "INTENDED DEPARTURE"
        }],
        "scrollY": "680px",
        "scrollCollapse": true,
        "bLengthChange": false,
        "pageLength": 15,
        "paging": true,
        "bFilter": true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
    $('#dtSearch').on('keyup change', function() {
        atb_table.search($(this).val()).draw();
    });
    $('#navSearch').on('keyup change', function() {
        atb_table.search($(this).val()).draw();
    });

    // Scroll Vertical Datatable
    $('#scroll-horizontal-datatable').DataTable({
        "scrollX": true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Complex headers with column visibility Datatable
    $('#complex-header-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "columnDefs": [{
            "visible": false,
            "targets": -1
        }]
    });

    // Row created callback Datatable
    $('#row-callback-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "createdRow": function(row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                $('td', row).eq(5).addClass('text-danger');
            }
        }
    });

    // Default Datatable
    $('#state-saving-datatable').DataTable({
        stateSave: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function() {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

});