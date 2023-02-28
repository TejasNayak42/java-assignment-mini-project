function adddata() {
  showPopup(true);
  let name = document.getElementById("namebox");
  let usn = document.getElementById("usnbox");
  let marks = document.getElementById("marksbox");
  // If the user has left a recommendation, display a pop-up
  if (name.value != null && name.value.trim() != "") {
    //Call showPopup here
    let m;
    if (marks.value > 100) {
      m = "Invalid";
    } else if (marks.value >= 90) {
      m = "O";
    } else if (marks.value >= 80 && marks.value < 90) {
      m = "A+";
    } else if (marks.value >= 70 && marks.value < 80) {
      m = "A";
    } else if (marks.value >= 60 && marks.value < 70) {
      m = "B+";
    } else if (marks.value >= 50 && marks.value < 60) {
      m = "B";
    } else if (marks.value >= 45 && marks.value < 50) {
      m = "C";
    } else if (marks.value >= 40 && marks.value < 45) {
      m = "D";
    } else if (marks.value < 40) {
      m = "F";
    }
    // Create a new 'recommendation' element and set it's value to the user's message
    var n = document.createElement("div");
    var u = document.createElement("div");
    var mark = document.createElement("div");

    var element = document.createElement("div");
    n.setAttribute("class", "recommendation1");
    n.innerHTML = "Name: " + name.value;
    u.setAttribute("class", "recommendation2");
    u.innerHTML = "USN: " + usn.value;
    mark.setAttribute("class", "recommendation3");
    mark.innerHTML = "Marks: " + marks.value;

    element.innerHTML =
      "Name: " +
      name.value +
      "<br>USN: " +
      usn.value +
      "<br>Grade: " +
      m +
      "<br>-------------------------";
    // Add this element to the end of the list of recommendations

    document.getElementById("board").appendChild(element);

    // Reset the value of the textarea
    namebox.value = "";
    usnbox.value = "";
    marksbox.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "hidden";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}
