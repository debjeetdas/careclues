$(document).ready(function(){      

      var owl = $(".owl-carousel");
      
     
    owl.owlCarousel({
        navigation : true,
        rewindNav : false,
        margin:30,
        nav:true,
        navText: [ 'Newer story', 'Older story' ],  
        pagination : false,        
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    $('.owl-carousel-vid').owlCarousel({
          items:1,
          merge:true,
          loop:true,
          margin:10,
          video:true,
          lazyLoad:false,
          center:true,
          responsiveClass:true,
          videoWidth: "100%", // Default false; Type: Boolean/Number
          videoHeight: 300, // Default false; Type: Boolean/Number
          items:1,
          nav:true,
          margin:10,
          nav:true,
          navText: ["<img src='../../assets/img/arr_vid_left.png'>","<img src='../../assets/img/arr_vid_right.png'>"]
        });  
    
 

var category_array = [];
        var category_array_no = [];
        var i=0;
    $(".post_category").each(function(){
        var cat_value = $(this).text();
        $(this).text(" ");
        var cat_count=1;
        $(".post_category").each(function(){
            if($(this).text() != " "){
                if($(this).text() == cat_value){
                    cat_count++;
                    $(this).text(" ");
                }
            }
        });
        if(cat_value != " "){
        category_array.push(cat_value);
        category_array_no.push(cat_count);
    }
    });

    $(".category-topic").each(function(){
        if(i<category_array.length){
            $(this).parent().attr('id',category_array[i]);
            $(this).text(category_array[i]);
            $(this).next().text("["+category_array_no[i]+"]");
            i++;
        }

    });

       $(function(){
/*whitepapers Pagination*/
var paginate = $.fn.paginate({//options here
        perPage  : 4,//list items per page
        pageId    : "paginationList", //pagination ul Id
        pager      : "pager",//pager Id
        leftImgSrc  : "/assets/img/pager-left.png",
        rightImgSrc  : "/assets/img/pager-right.png",
        leftImgActiveSrc : "/assets/img/pager-left-active.png",
        rightImgActiveSrc : "/assets/img/pager-right-active.png",
        getCurrentPage : function(currentPage){
            $(".pageNo").html("Page "+currentPage);
        }
});
});
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width>768) {
   $('.bg-content-t-50').each(function(){
        var hb=$(this).height();
        $(this).siblings('div').children('.bg-content-i-50').css('height',hb+'px');
    });
    var hbn=$('.bg-content-a-50').height();
    $('.bg-content-b-50 .blog-yoga-img-2,.bg-content-b-50 .blog-yoga-img-4').css('height',hbn+'px');

}
$(window).resize(function(){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width>768) {
    $('.bg-content-t-50').each(function(){
        var hb=$(this).height();
        $(this).siblings('div').children('.bg-content-i-50').css('height',hb+'px');
    });
    var hbn=$('.bg-content-a-50').height();
    $('.bg-content-b-50 .blog-yoga-img-2,.bg-content-b-50 .blog-yoga-img-4').css('height',hbn+'px');
}
});  
 $('.owl-prev').on('click',function(){
  if($(".owl-stage > .owl-item:first-child").hasClass('active')){
    $(".owl-prev").css({opacity:0.5});
    $(".owl-next").css({opacity:1});
}
 if($(".owl-stage > .owl-item:last-child").not('active')){
                    $(".owl-next").css({opacity:1});
}
  });
    $('.owl-next').on('click',function(){
  if($(".owl-stage > .owl-item:last-child").hasClass('active')){
    $(".owl-next").css({opacity:0.5});
    $(".owl-prev").css({opacity:1});
}
  if($(".owl-stage > .owl-item:first-child").not('active')){
                    $(".owl-prev").css({opacity:1});
}
  
}); 
    (function() {
      var cx = '005283840259052665163:ide36xcdhqe';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

  });