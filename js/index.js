var $bwimg = $('.workigBW');
var $win = $ (window);
var $colorimg = $('.workImgCOLOR');
var $work1dp =$('#work1dp');
var $buttproj1= $('.buttproj1');

$win.on('scroll', function() {
//  console.log($win.scrollTop());
 var top = $win.scrollTop() /7;
 var top2 = $win.scrollTop() /3;
 var top3 = $win.scrollTop() /2.5;  
 
//  $bwimg.css({'transform':'translateY(' + top + 'px)'});
 
 $bwimg.css('transform','translate(' + top +   'px )');
    if ($win.scrollTop() >= 954) {
        // console.log('954');
        $('.workigBW').css('display', 'none');
        
    }

    else {($win.scrollTop() <= 954);
        // console.log('954');
        $('.workigBW').show();
     }
       

$colorimg.css('display','absolute');
    if ($win.scrollTop() < 954) {
        // console.log('954');
        $('.workImgCOLOR').hide();
        $('#work1').css('background-color','white','padding-top','10px');
        
    }
        
    else {($win.scrollTop() >= 954) 
        // console.log('954');
        $('.workImgCOLOR').show();
        $('#work1').css('background-image','none');
        $('#work1').css('background-color','turquoise','padding-top','10px');
        $('#work1').css('transition-duration','.6s');
        
        
    }
    
    // animations for the description of work project 1//

    $work1dp.css('transform','translateX(' + top2 +   'px )');
    if ($win.scrollTop() >= 954) {
        // console.log('954');
        $('.work1dp').css('display', 'none');}


    // animate button//

    $buttproj1.css('transform','translateX(' + top3 +   'px )');
    if ($win.scrollTop() <= 954) {
            // console.log('954');
            $('.buttproj1').css('display', 'relative');
        }    


});





     



