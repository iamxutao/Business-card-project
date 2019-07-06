$("#record").change(function() {
    var options = $("#record option:selected").text();
    // alert(options.val());
    $(".record1").text(options);

});