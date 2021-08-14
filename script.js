/*
document.getElementById("submitform").addEventListener("click", function () {
  let name = document.getElementById("contactname").value;
  let email = document.getElementById("contactemail").value;
  let phone = document.getElementById("contactphone").value;
  let text = document.getElementById("contactmessage").value;
  let errors = document.getElementById("errors");
  let errormessage = "";

  let patt = new RegExp("^[A-Z][-a-zA-Z]+$");
  let nres = patt.test(name);

  if (nres === false) {
    errormessage += "Name must atleast contain 3 to 100 characters<br/>";
  } else {
    errormessage = "";
  }
  let epatt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$");
  let eres = epatt.test(email);
  if (eres === false) {
    errormessage += "Invalid email<br/>";
  }
  let ppatt = new RegExp("[8-9][0-9]{9}");
  let pres = ppatt.test(phone);
  if (pres === false) {
    errormessage += "Phone must contain a maximum of 10 digits only<br/>";
  }
  let mpatt = new RegExp("[a-zA-z0-9]{1,500}");
  let mres = mpatt.test(text);
  if (mres === false) {
    errormessage +=
      "Invalid Text.Message must contain a minimum of 1 character upto maximum of 500 characters";
  }

  errors.innerHTML = errormessage;
  //alert(`${name}, ${email}, ${phone}, ${text}`);
});
*/
$(document).ready(function () {
  $("#submitform").click(function () {
    let name = $("#contactname").val();
    let email = $("#contactemail").val();
    let phone = $("#contactphone").val();
    let text = $("#contactmessage").val();
    let errormessage = "";

    let patt = new RegExp("^[A-Z][-a-zA-Z]+$");
    let nres = patt.test(name);
    if (nres === false) {
      errormessage += "Name must atleast contain 3 to 100 characters<br/>";
    } else {
      errormessage = "";
    }

    let epatt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$");
    let eres = epatt.test(email);
    if (eres === false) {
      errormessage += "Invalid email<br/>";
    }

    let ppatt = new RegExp("[8-9][0-9]{9}");
    let pres = ppatt.test(phone);
    if (pres === false) {
      errormessage += "Phone must contain a maximum of 10 digits only<br/>";
    }

    let mpatt = new RegExp("[a-zA-z0-9]{1,500}");
    let mres = mpatt.test(text);
    if (mres === false) {
      errormessage +=
        "Invalid Text.Message must contain a minimum of 1 character upto maximum of 500 characters";
    }
    $("#errors").html(errormessage);
  });
});
