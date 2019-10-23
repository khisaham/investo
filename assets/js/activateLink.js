$(document).ready(function(){

    function siderbarActive(){
        var anchors = $("a#nav_item-link").click(function() {
          //savesubcat()
          alert("have")
          $(this).addClass("active")
          anchors.not(this).removeClass("active")
        })
      }
})