$(function()    {
    $('.menu').on('click', function()   {
        if ($('.menu-tags').css('display') == 'none')   {
            $('.menu-tags').css('display', 'block');
        }
        else    {
            $('.menu-tags').hide();
        }
    });
});