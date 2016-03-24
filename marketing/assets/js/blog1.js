// $(window).bind(function(){
//     $('.gsc-search-button .gsc-search-button-v2').attr('src','');
// });
$(document).ready(function(){      
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
    

      var owl = $(".owl-carousel");
     
    owl.owlCarousel({
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
                items:1
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
          videoHeight: 356, // Default false; Type: Boolean/Number
          items:1,
          nav:true,
          margin:10,
          nav:true,
          navText: ["<img src='../../assets/img/arr_vid_left.png'>","<img src='../../assets/img/arr_vid_right.png'>"]
        });    

    $(function(){
/*whitepapers Pagination*/
var paginate = $.fn.paginate({//options here
        perPage  : 3,//list items per page
        pageId    : "paginationList", //pagination ul Id
        pager      : "pager",//pager Id
        leftImgSrc  : "images/pager-left.png",
        rightImgSrc  : "images/pager-right.png",
        leftImgActiveSrc : "images/pager-left-active.png",
        rightImgActiveSrc : "images/pager-right-active.png",
        getCurrentPage : function(currentPage){
            $(".pageNo").html("Page "+currentPage);
        }
});
    });
    });