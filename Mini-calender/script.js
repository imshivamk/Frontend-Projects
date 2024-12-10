document.addEventListener("DOMContentLoaded", ()=>{
    const date = document.getElementById("date");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];


    date.textContent = today.getDate();
    day.textContent = days[today.getDay()];
    month.textContent = months[today.getMonth()];
    year.textContent = today.getFullYear();

});
  