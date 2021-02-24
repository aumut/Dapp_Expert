$(function () {
    console.log("xxxxxxxxxx");
    //init select
    //$('select').selectpicker();
    //$('.selectpicker').on('changed.bs.select', function (e) {
    //    $(this).prevAll('.dropdown-toggle').toggleClass('bs-placeholder', this.value === '');
    //}).trigger('changed.bs.select');

    //init file upload with preview
    $("#dapp_screen_file").fileinput({
        uploadUrl: "/file-upload-batch/2",
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: ['image', 'text'], // allow only preview of image & text files
        previewFileIconSettings: {
            'docx': '<i class="fas fa-file-word text-primary"></i>',
            'xlsx': '<i class="fas fa-file-excel text-success"></i>',
            'pptx': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
        }
    });
    $("#dapp_screen_file1").fileinput({
        uploadUrl: "/file-upload-batch/2",
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: ['image', 'text'], // allow only preview of image & text files
        previewFileIconSettings: {
            'docx': '<i class="fas fa-file-word text-primary"></i>',
            'xlsx': '<i class="fas fa-file-excel text-success"></i>',
            'pptx': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
        }
    });
});