function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


$(document).ready(function() {
    var $shipBar = $('#fresh_antlers');
    var expires = new Date;
    expires.setDate(expires.getDate() + 1);

    (getCookie('maralBanner')) && $shipBar.remove();

    $('#closeMBar').on('click', function(e) {
        $shipBar.fadeOut(200, function() {
            $shipBar.remove();
            document.cookie = 'maralBanner=closed; path=/; expires='+expires.toUTCString();
        });

        e.preventDefault();
    });
});