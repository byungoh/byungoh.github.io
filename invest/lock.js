const PASSCODE = "2492";

document.addEventListener("DOMContentLoaded", function () {
  const input = prompt("Enter passcode:");
  if (input === PASSCODE) {
    document.body.style.display = "block";
  } else {
    alert("Incorrect passcode.");
    history.back();
  }
});