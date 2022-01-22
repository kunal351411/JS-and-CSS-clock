const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate()
{
  const date = new Date();

  const seconds = date.getSeconds();
  if(seconds === 0)
  {
    secondsHand.style.transition = "none";
  }
  const secondsDegrees = ((seconds/60)*360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  if(minutes === 0)
  {
    minutesHand.style.transition = "none";
  }
  const minutesDegrees = ((minutes/60)*360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  if(hours === 0)
  {
    hoursHand.style.transition = "none";
  }
  const hourDegrees = ((hours/12)*360) + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);
setDate();
