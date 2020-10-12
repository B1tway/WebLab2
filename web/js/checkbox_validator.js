$('.form-check-input').on('change', function () {
    let current = $(this);
    if ($("input:checked").length == 0) {
        $(this).prop("checked", true);
        validate();
        return;
    }
    console.log($(this).prop("checked", true));
    console.log($(this).prop('id'));
    console.log(123);

    let name = current.prop('id');
    $(".form-check-input").each(function () {
        let current_name = $(this).prop('id');
        if (!(current_name === name)) {
            $(this).prop('checked', false);
        }
    });

    validate();
});