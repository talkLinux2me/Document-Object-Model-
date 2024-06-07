const friend = document.querySelectorAll("section");

const newel = document.getElementById("bringAfriend")
newel.style.backgroundColor = "lavender";

const mainEl = document.querySelector("body");

mainEl.style.fontFamily = "helvetica"; 
mainEl.style.textAlign = "center"
mainEl.style.backgroundColor = "rgb(199, 201, 240)";


const trail = document.getElementById("routes");

const btn = document.createElement("button");
btn.innerHTML = "Leave us a Review";
document.body.appendChild(btn);

const walkingguy = document.getElementById("walkingGuy");


walkingguy.addEventListener("click",() => {
    window.alert("It's a beautiful day for a walk. ")
});

  
const navItems = document.getElementsByClassName('nav-items');

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', function(event) {
        event.preventDefault();
        navItems[i].style.backgroundColor = 'purple'
        setTimeout(()=>{
            navItems[i].style.backgroundColor = 'rgb(199, 201, 240)'
        }, 2000)
    })
};


const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const comment = form.elements["comment"];

form.addEventListener("submit", validate);


function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const zipVal = validateZip();
  if (zipVal === false) {
    evt.returnValue = false;
    return false;
  }

  const countryVal = validateCountry();
  if (countryVal === false) {
    evt.returnValue = false;
    return false;
  }

  const commentVal = validateComment();
  if (commentVal === false) {
    evt.returnValue = false;
    return false;
  }

alert(`Name: ${nameVal};
Email: ${emailVal};
Country: ${countryVal};
Zip Code: ${zipVal};
Comment: ${comment}`);

  return true;
}

function validateEmail() {
  let emailVal = email.value;

  if (emailVal === "") {
    alert("Please provide an email.");
    email.focus();
    return false;
  }

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol which must not be at the beginning of the email."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  return emailVal;
}

function validateName() {
  if (name.value === "") {
    alert("Please provide a name.");
    name.focus();
    return false;
  }
  return name.value;
}


function validateComment() {
  if (comment.value === "") {
    alert("Please provide a comment.");
    password.focus();
    return false;
  }
  return password.value;
}

function validateCountry() {
  if (country.value === "") {
    alert("Please provide a country.");
    country.focus();
    return false;
  }
  return country.value;
}

function validateZip() {
  if (zip.value === "") {
    alert("Please provide a zip code.");
    zip.focus();
    return false;
  }

  if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
    alert("Zip codes must be in the format #####.");
    zip.focus();
    return false;
  }

  return zip.value;
}

