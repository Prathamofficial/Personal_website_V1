document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('cut', function(e) {
        e.preventDefault();
    });

    document.body.addEventListener('copy', function(e) {
        e.preventDefault();
    });

    document.body.addEventListener('paste', function(e) {
        e.preventDefault();
    });

    document.body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
