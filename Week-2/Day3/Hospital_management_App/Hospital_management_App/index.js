// fill in javascript code here


let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

let doctorData =
  JSON.parse(localStorage.getItem("doctorData")) || [];

displayData(doctorData);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let exp = Number(document.getElementById("exp").value);

  let role = "";

  if (exp > 5) {
    role = "Senior";
  } else if (exp >= 2 && exp <= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  let doctorObj = {
    name: document.getElementById("name").value,
    docID: document.getElementById("docID").value,
    dept: document.getElementById("dept").value,
    exp: exp,
    email: document.getElementById("email").value,
    mbl: document.getElementById("mbl").value,
    role: role
  };

  doctorData.push(doctorObj);

  localStorage.setItem(
    "doctorData",
    JSON.stringify(doctorData)
  );

  displayData(doctorData);

  form.reset();
});

function displayData(data) {
  tbody.innerHTML = "";

  data.forEach(function (doctor, index) {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = doctor.name;

    let td2 = document.createElement("td");
    td2.innerText = doctor.docID;

    let td3 = document.createElement("td");
    td3.innerText = doctor.dept;

    let td4 = document.createElement("td");
    td4.innerText = doctor.exp;

    let td5 = document.createElement("td");
    td5.innerText = doctor.email;

    let td6 = document.createElement("td");
    td6.innerText = doctor.mbl;

    let td7 = document.createElement("td");
    td7.innerText = doctor.role;

    let td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.color = "red";
    td8.style.cursor = "pointer"

    td8.addEventListener("click", function () {
      doctorData.splice(index, 1);

      localStorage.setItem(
        "doctorData",
        JSON.stringify(doctorData)
      );

      displayData(doctorData);
    });

    row.append(
      td1,
      td2,
      td3,
      td4,
      td5,
      td6,
      td7,
      td8
    );

    tbody.append(row);
  });
}