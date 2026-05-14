const form =
  document.getElementById("registrationFrom");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  let isValid = true;

  // INPUTS

  const fullName =
    document.getElementById("fullName");

  const email =
    document.getElementById("email");

  const phone =
    document.getElementById("phone");

  const dob =
    document.getElementById("dob");

  const qualification =
    document.getElementById("qualification");

  const marks =
    document.getElementById("marks");

  // RESET ERRORS

  document
    .querySelectorAll(".error-text")
    .forEach((item) => {
      item.innerText = "";
    });

  document
    .querySelectorAll(".form-control, .form-select")
    .forEach((item) => {

      item.classList.remove("valid");
      item.classList.remove("invalid");

    });

  // FULL NAME

  if (fullName.value.trim() === "") {

    setError(
      fullName,
      "fullNameError",
      "Full Name is required"
    );

    isValid = false;

  } else {

    setSuccess(fullName);

  }

  // EMAIL

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {

    setError(
      email,
      "emailError",
      "Email is required"
    );

    isValid = false;

  } else if (
    !emailPattern.test(email.value)
  ) {

    setError(
      email,
      "emailError",
      "Invalid Email"
    );

    isValid = false;

  } else {

    setSuccess(email);

  }

  // PHONE

  const phonePattern =
    /^[0-9]{10}$/;

  if (phone.value.trim() === "") {

    setError(
      phone,
      "phoneError",
      "Phone Number is required"
    );

    isValid = false;

  } else if (
    !phonePattern.test(phone.value)
  ) {

    setError(
      phone,
      "phoneError",
      "Enter valid 10 digit number"
    );

    isValid = false;

  } else {

    setSuccess(phone);

  }

  // DOB

  if (dob.value === "") {

    setError(
      dob,
      "dobError",
      "Select date of birth"
    );

    isValid = false;

  } else {

    setSuccess(dob);

  }

  // QUALIFICATION

  if (qualification.value === "") {

    setError(
      qualification,
      "qualificationError",
      "Select qualification"
    );

    isValid = false;

  } else {

    setSuccess(qualification);

  }

  // MARKS

  if (marks.value.trim() === "") {

    setError(
      marks,
      "marksError",
      "Enter percentage"
    );

    isValid = false;

  } else {

    setSuccess(marks);

  }

  // GENDER

  const gender =
    document.querySelector(
      "input[name='gender']:checked"
    );

  if (!gender) {

    document.getElementById(
      "genderError"
    ).innerText =
      "Select gender";

    isValid = false;

  }

  // FINAL SUBMIT

  if (isValid) {

    alert(
      "Registration Successful 🚀"
    );

    form.reset();

    document
      .querySelectorAll(
        ".form-control, .form-select"
      )
      .forEach((item) => {

        item.classList.remove("valid");

      });

  }

});

// =========================
// ERROR FUNCTION
// =========================

function setError(
  input,
  errorId,
  message
) {

  input.classList.add("invalid");

  document.getElementById(
    errorId
  ).innerText = message;

}

// =========================
// SUCCESS FUNCTION
// =========================

function setSuccess(input) {

  input.classList.add("valid");

}