$(function () {
    console.log("xxxxxxxxxx");
    $('select').selectpicker();
    $('.selectpicker').on('changed.bs.select', function (e) {
        $(this).prevAll('.dropdown-toggle').toggleClass('bs-placeholder', this.value === '');
    }).trigger('changed.bs.select');
});