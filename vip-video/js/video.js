;
$(function () {
    var url = window.location.search.substr(5);
    var node =
        '<iframe marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" allowfullscreen="true" scrolling="no" src=' +
        url + ' height="100%" width="100%"></iframe>';
    $('body').append(node);
});