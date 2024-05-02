const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hourHand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  
  // 360° is the total circumference
  // the total (360°) is divided by 60 seconds (60 spaces that the seconds will occupy on the circumference)
  const secondsDegrees = (seconds / 60) * 360 + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
