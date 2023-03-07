$(function() {

    //project image
    var $device1 = $('.web1');
    var $device2 = $('.web2');
    var $device3 = $('.web3');

    //project introduce
    var $content1 = $('.content1');
    var $content2 = $('.content2');
    var $content3 = $('.content3');

    var $offset = 450;

    var $deviceOST1 = $device1.offset().top - $offset;
    var $deviceOST2 = $device2.offset().top - $offset;
    var $deviceOST3 = $device3.offset().top - $offset;

   

    $(window).scroll(function() {
        if ($(this).scrollTop() > $deviceOST1) {
            $device1.find('img').addClass('animate');
            $content1.addClass('animate');
        } 

        if ($(this).scrollTop() > $deviceOST2) {
            $device2.find('img').addClass('animate');
            $content2.addClass('animate');
        } 
        
        if ($(this).scrollTop() > $deviceOST3) {
            $device3.find('img').addClass('animate');
            $content3.addClass('animate');
        } 
    });

});