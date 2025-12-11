const PASSCODE = "2492";

(function () {
  const input = prompt("Enter passcode for Page 1:");

  if (input === PASSCODE) {
    document.getElementById("protected-content").style.display = "block";
  } else {
    alert("Incorrect passcode.");
    window.location.href = "/";
  }
})();
