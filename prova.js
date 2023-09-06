window.onload = function() {
  function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '16px';
  }
}
function togglePasswordVisibility() {
  var x = document.getElementById("MyInput");
  if (x.type === 'password') {
      x.type = "text";
  } else {
      x.type = "password";
  }
}
}