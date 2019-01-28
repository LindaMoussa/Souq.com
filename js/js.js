$(window).scroll(function(){

   if($(window).scrollTop()>10)
    {
   
        $('.secondnavbar').css("margin-top","0px")
    }
    else{
        
    $('.secondnavbar.fixed-top').css("margin-top","40px")
        }
    });

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
   
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
                      })
//<!--
//    $(function () {
//            $("#myCarousel").carousel("pause");})
//
//-->
$('.carousel').carousel({
  interval: 200000
})