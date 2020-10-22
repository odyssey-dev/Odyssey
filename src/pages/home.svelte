function togglePopup(e) {
  $(e).find(".tooltip-button").length && ($(e).find(".tooltip-button").hasClass("active") ? $(e).find(".tooltip-button").removeClass("active") : ($(e).find(".tooltip-button").addClass("active"), eventTracker.fireEvent("SearchResults", "Hover Book Now", "SearchRecord")))
}
$(".recent-booking a.target-10519").click((function(e) {
  eventTracker.fireEvent("SearchResults", "KEP-10519", "Just Booked Link")
})), "undefined" != typeof showMessage3898 && $((function() {
  var e = $(".recent-booking.positive-message").length,
      t = 4e3;
  $(".recent-booking a.close").click((function(e) {
      e.preventDefault(), $(this).parent(".recent-booking").remove(), eventTracker.fireEvent("SearchResults", "close", "Just Booked")
  }));
  var n = 800,
      o = 400;
  if (urgencyMessageTiming11014) {
      n = 5e3;
      o = 5e3;
      var i = 0;
      var a = setInterval((function() {
          ! function(e) {
              $("#recentBooking_" + e).fadeIn(n).delay(7e3).fadeOut(o, 0, (function() {
                  $(this).css({
                      display: "block",
                      visibility: "hidden",
                      "margin-bottom": "-48px"
                  })
              }))
          }(i), ++i === e && clearInterval(a)
      }), n + 7e3)
  } else
      for (var s = 0; s < e; s++) {
          var r = $("#recentBooking_" + s);
          $("#recentBooking_" + s + " a");
          s + 1 == e ? r.delay(t).fadeIn(n).delay(2e4 * (e - 1)).fadeOut(o, 0, (function() {
              $(".wrap-message-fixed ").css("display", "none")
          })) : r.delay(t).fadeIn(n).delay(2e4 * (e - 1)).fadeOut(o, 0, (function() {
              $(this).css({
                  display: "block",
                  visibility: "hidden",
                  "margin-bottom": "-48px"
              })
          })), t = 14600 + t
      }
}));