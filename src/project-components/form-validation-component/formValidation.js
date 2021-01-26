const submit_btn = document.querySelector("#submit");
const wrapperDiv = document.querySelector("#form-wrappper");
const wrapper_div_content = wrapperDiv.innerHTML;
const nameEmail = document.querySelectorAll(".formcontrol");
const radioBtn = document.querySelectorAll(".radioBtn");
const form_control = document.querySelectorAll(".formWrapper");
const username = document.getElementById("name");
const emailId = document.getElementById("email");
const warningMsgName = document.querySelector(".warning-message-name");
const warningMsgEmail = document.querySelector(".warning-message-email");
const warningMsgRadio = document.querySelector(".warning-message-radio");
const sign_up_msg = document.querySelector(".successful-sign-up");
const radio_btn = document.forms.registration.gender;
const radio_btn_array = Array.from(radioBtn);

document.forms.registration.noValidate = true;

// generic functions

const emptyFormControl = () => {
  for (const email_name of nameEmail) {
    if (email_name.type === "name") {
      email_name.value = " ";
      email_name.placeholder = "username";
    } else if (email_name.type === "email") {
      email_name.value = " ";
      email_name.placeholder = "you@yourdomain.com";
    }
  }
  for (const radio of radio_btn_array) {
    radio.checked = false;
  }
};

// generic functions

const radio_btn_check = (e) => {
  if (
    radio_btn_array[0].checked === false &&
    radio_btn_array[1].checked === false &&
    radio_btn_array[2].checked === false
  ) {
    e.preventDefault();
    warningMsgRadio.textContent = "select any";
  } else {
    warningMsgRadio.textContent = " ";
  }
};

// generic scanner
document.forms.registration.addEventListener("submit", (e) => {
  for (const email_name of nameEmail) {
    if (email_name.value.length === 0 && email_name.type === "text") {
      e.preventDefault();
      warningMsgName.textContent = "usename is invalid";
    } else if (email_name.value.length === 0 && email_name.type === "email") {
      e.preventDefault();
      warningMsgEmail.textContent = "email is invalid";
    } else if (
      radio_btn_array[0].checked === false &&
      radio_btn_array[1].checked === false &&
      radio_btn_array[2].checked === false
    ) {
      e.preventDefault();
      warningMsgRadio.textContent = "select any";
    } else {
      e.preventDefault();
      emptyFormControl();
      wrapperDiv.style.display = "none";

      sign_up_msg.innerHTML = `<p>Your registration is successful <em>${username.value}</em> </p>
      <button class="sign_up">sign in</button>`;
      sign_up_msg.style.display = "block";

      try {
        document.querySelector(".sign_up").addEventListener("click", () => {
          location.reload();
        });
      } catch (error) {}
    }
  }
});

// generic functions

const addFocusListener = () => {
  for (const email_name of nameEmail) {
    email_name.addEventListener("focus", () => {
      if (email_name.type === "text") {
        warningMsgName.textContent = " ";
      } else if (email_name.type === "email") {
        warningMsgEmail.textContent = " ";
      }
    });
  }
};
// generic functions

const addBlurListener = () => {
  for (const email_name of nameEmail) {
    email_name.addEventListener("blur", () => {
      if (email_name.value.length === 0 && email_name.type === "text") {
        warningMsgName.textContent = "usename is invalid";
        username.style.backgroundColor = "red";
      } else if (email_name.value.length === 0 && email_name.type === "email") {
        warningMsgEmail.textContent = "email is invalid";
        emailId.style.backgroundColor = "red";
      } else {
        email_name.style.backgroundColor = "lime";
      }
    });
  }
};
// generic functions

const checkRadioListener = () => {
  for (const radio_btn of radio_btn_array) {
    radio_btn.addEventListener("click", () => {
      warningMsgRadio.textContent = " ";
    });
  }
};

checkRadioListener();
addFocusListener();
addBlurListener();

// specific functions

const validateUsername = () => {
  const userPtrn = /^([^0-9]*)$/; // number between 0 to 9 and white space are not allowed
  if (userPtrn.test(username.value)) {
    username.style.backgroundColor = "lime";
    warningMsgName.textContent = " ";
  } else {
    warningMsgName.textContent = "username invalid";
    username.style.backgroundColor = "red";
  }
};

const validateEmail = () => {
  const emailPtrn = /[^@]+@[^@]+/;
  if (emailPtrn.test(emailId.value)) {
    emailId.style.backgroundColor = "lime";
    warningMsgEmail.textContent = " ";
  } else {
    emailId.style.backgroundColor = "red";
    warningMsgEmail.textContent = "invalid email address";
  }
};

username.addEventListener("keyup", validateUsername);
emailId.addEventListener("keyup", validateEmail);
