//function to get today's date
function getTodaysDate() {
  //create a new Date object
  const date = new Date();
  //day of week displays as a number (0-6)
  const dayNumber = date.getDay();
  // array with day names
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  //get day name based off day number
  const dayName = daysOfWeek[dayNumber];

  //month displays as a number (0-11)
  const monthNumber = date.getMonth();
  //array with month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //get month name based of month number
  const monthName = months[monthNumber];

  //get date number
  const dateNumber = date.getDate();

  //get year
  const year = date.getFullYear();

  //display date
  let today = document.getElementById("display-date");
  today.innerHTML = `<p><span id="day">${dayName}</span> ${monthName} ${dateNumber}, ${year}</p>`;
}
getTodaysDate();

//function to update times
function updateTime() {
  //create new Date object for current time
  const date = new Date();

  //get hours, minutes, and seconds
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //convert to 12hr format
  const formattedHours = hours % 12 || 12;

  //Determine whether it's AM or PM
  const meridiem = hours < 12 ? "AM" : "PM";

  //add leading zeros if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //update time display
  const time = document.getElementById("display-time");
  time.innerHTML = `<p id="time">${formattedHours}:${minutes}:${seconds} ${meridiem}</p>`;

  //Determine time of day message
  let greeting, backgroundImage;
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning!";
    backgroundImage =
      'url("https://images.unsplash.com/photo-1570062274461-6e442f07e236?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon!";
    backgroundImage =
      'url("https://images.unsplash.com/photo-1597217190944-3615102a0c6d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  } else if (hours >= 17 && hours < 21) {
    greeting = "Good Evening!";
    backgroundImage =
      'url("https://images.unsplash.com/uploads/1412276054206cd55c23b/e04e888a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  } else {
    greeting = "Good Night!";
    backgroundImage =
      'url("https://images.unsplash.com/photo-1472552944129-b035e9ea3744?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  }

  //Display updated greeting message
  document.getElementById("greeting-msg").textContent = greeting;

  // Display updated background image
  document.body.style.backgroundImage = backgroundImage;
}
updateTime();

//update every second
setInterval(updateTime, 1000);
