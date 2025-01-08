// Creating a function for validate form
function validateForm() {
  //Getting form elements
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");

  //Clear last error
  nameError.innerHTML = "";
  emailError.innerHTML = "";

  //Name validation. Make sure it's not empty
  if (name.trim() === "") {
    nameError.innerHTML = "Name is required.";
    return false;
  }

  //Email validation. Make sure it matches a basic email pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.innerHTML = "Please enter a valid email address";
    return false;
  }

  //If all is ok
  return true;
}
