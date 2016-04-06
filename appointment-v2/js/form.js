$(document).ready(function() {
  $(document.body).on('click', '.dropdown-menu li', function(event) {
      var $target = $(event.currentTarget);

      $target.closest('.btn-group')
          .find('[data-bind="label"]').text($target.text()).css("color", "black")
          .end()
          .children('.dropdown-toggle').dropdown('toggle');

      return false;

  });
  $('#dateRangePicker')
      .datepicker({
          format: 'mm/dd/yyyy',
          startDate: '01/01/1900',
          endDate: '12/30/2020'
      })
      .on('changeDate', function(e) {
          // Revalidate the date field
          $('#dateRangeForm').formValidation('revalidateField', 'date');
      });
  $("#SendRequest").click(function() {
      var platform = $("#dropdown_title2").html();
      var isValid = (platform !== 'Gender')

      if (!isValid) {
          alert('Please fill in missing details');
      } else {
          $(".log-in-placeholder1").css("color", "black");
      }
  });
  $(".register-btn").click(function() {
      $(".reg").show();
      $(".log").hide();
  });
  $(".reg-start-close1").click(function() {
      $(".log").show();
      $(".reg").hide();
  });
  $(".reg-end-close1").click(function(){
      $(".log").show();
      $(".reg").hide();
  });
  $('#pwd').hideShowPassword({
      innerToggle: true,
      touchSupport: Modernizr.touch
  });
  $('.login-img-div a').click(function(){
  $('#loginScreen').modal();
  });
  $(".log-start-close").click(function(){
        $(".reg").hide(); 
  });
  $(".reg-end-close2").click(function(){
     $('#loginScreen').modal('hide');
  });
  $(".log-start-close").click(function(){
     $('#loginScreen').modal('hide');
  });
    $(".float-right").click(function(){
      $('.booking-menu').toggle();
       $('.booking-menu1').hide();
        $('.minus2').show();
       $('.plus2').hide();
        $('.minus1').hide();
       $('.plus1').show();
  });
      $(".float-left").click(function(){
      $('.booking-menu1').toggle();
       $('.booking-menu').hide();
        $('.minus1').show();
       $('.plus1').hide();
        $('.minus2').hide();
       $('.plus2').show();
  });

});            