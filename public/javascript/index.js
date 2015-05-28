$(function () {
    // Nav menu button toggles and panels
    $('#nav-Brand').click(function () {
        location.reload();
    });

    $('#nav-Register').click(function () {
        if ($('#RegisterPanel').is(':visible')) {
            $('*[id*=Panel]:visible').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $('*[id*=Panel]:visible').hide();
            $('*[id*=nav-]:visible').parent().removeClass("active");
            $('#RegisterPanel').toggle(200);
            $(this).parent().addClass("active");
        }
        $('.MainContext').show();
    });

    $('#nav-Login').click(function () {
        if ($('#LoginPanel').is(':visible')) {
            $('*[id*=Panel]:visible').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $('*[id*=Panel]:visible').hide();
            $('*[id*=nav-]:visible').parent().removeClass("active");
            $('#LoginPanel').toggle(200);
            $(this).parent().addClass("active");
        }
        $('.MainContext').show();
    });

    $('#nav-New-Widget').click(function () {
        if ($('#NewWidgetPanel').is(':visible')) {
            $('*[id*=Panel]:visible').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $('*[id*=Panel]:visible').hide();
            $('*[id*=nav-]:visible').parent().removeClass("active");
            $('#NewWidgetPanel').toggle(200);
            $(this).parent().addClass("active");
        }
        $('.MainContext').show();
    });

    $('#nav-Acknowledgement').click(function () {
            $(this).parent().addClass("active");
            $('html, body').animate({
                scrollTop: $("#ArticleContrainer").offset().top
            }, 2000);

            $('*[id*=Panel]:visible').hide();
            $('*[id*=nav-]:visible').parent().removeClass("active");
    });

    $('#showLogin').click(function () {
        $('#nav-Login').click();
    });

    if (window.location.search === '?error') {
        $('*[id*=Panel]:visible').hide();
        $('#ResultPanel').toggle(200);
        $('#ResultMsg').html('Invalid Login');
        $('#ResultMsg').css('color', 'red');
    }


})
