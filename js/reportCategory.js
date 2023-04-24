//  OnCLick Chart Visitor
function categoryBtn(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("card-mini-simulator");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.transform = "scaleY(0.2)";
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
  setTimeout(() => {
    document.getElementById(menuName).style.transform = "scaleY(1)";
  }, 50);
}

$(document).ready(function () {
  $("#checkOutbound").hide();
  $("#transporter").hide();
  $("#petRetur").hide();
  $("#picker").hide();
  $("#whsAdministration").hide();
});

window.onload = (event) => {
  document.getElementById("checkReceiving").style.display = "block";
  document.getElementById("checkReceiving").style.transform = "scaleY(1)";
};
