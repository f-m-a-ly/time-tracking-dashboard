const dailyButton = document.getElementById('dailyBtn')
const weeklyButton = document.getElementById('weeklyBtn')
const monthlyButton = document.getElementById('monthlyBtn')

const workTime = document.getElementById('workTime')
const workPrevious = document.getElementById('workPrevious')

const playTime = document.getElementById('playTime')
const playPrevious = document.getElementById('playPrevious')

const studyTime = document.getElementById('studyTime')
const studyPrevious = document.getElementById('studyPrevious')

const exerciseTime = document.getElementById('exerciseTime')
const exercisePrevious = document.getElementById('exercisePrevious')

const socialTime = document.getElementById('socialTime')
const socialPrevious = document.getElementById('socialPrevious')

const selfCareTime = document.getElementById('selfCareTime')
const selfCarePrevious = document.getElementById('selfCarePrevious')

const activityTime = [workTime, playTime, studyTime, exerciseTime, socialTime, selfCareTime]
const activityPrevious = [workPrevious, playPrevious, studyPrevious, exercisePrevious, socialPrevious, selfCarePrevious]

let currentHours = ''
let previousHours = ''

GetDaily()


function GetDaily() {
  dailyButton.classList.add("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.remove("active");

  fetch('data.json').then(response => {
    return response.json();
  })
  .then(jsondata => {
    for (let i = 0; i < activityTime.length; i++) {
      if (jsondata[i].timeframes.daily.current > 1 || jsondata[i].timeframes.daily.current == 0) currentHours = 'hrs'
      else currentHours = 'hr'

      if (jsondata[i].timeframes.daily.previous > 1 || jsondata[i].timeframes.daily.previous == 0) previousHours = 'hrs'
      else previousHours = 'hr'

      activityTime[i].innerText = jsondata[i].timeframes.daily.current + currentHours;
      activityPrevious[i].innerText = 'Previous - ' +  jsondata[i].timeframes.daily.previous + previousHours;
    }
 })
}

function GetWeekly() {
  dailyButton.classList.remove("active");
  weeklyButton.classList.add("active");
  monthlyButton.classList.remove("active");

  fetch('data.json').then(response => {
    return response.json();
  })
  .then(jsondata => {
    for (let i = 0; i < activityTime.length; i++) {
      if (jsondata[i].timeframes.weekly.current > 1 || jsondata[i].timeframes.weekly.current == 0) currentHours = 'hrs'
      else currentHours = 'hr'

      if (jsondata[i].timeframes.weekly.previous > 1 || jsondata[i].timeframes.weekly.previous == 0) previousHours = 'hrs'
      else previousHours = 'hr'

      activityTime[i].innerText = jsondata[i].timeframes.weekly.current + currentHours;
      activityPrevious[i].innerText = 'Last Week - ' +  jsondata[i].timeframes.weekly.previous + previousHours;
    }
 })
}

function GetMonthly() {
  dailyButton.classList.remove("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.add("active");

  fetch('data.json').then(response => {
    return response.json();
  })
  .then(jsondata => {
    for (let i = 0; i < activityTime.length; i++) {
      if (jsondata[i].timeframes.monthly.current > 1 || jsondata[i].timeframes.monthly.current == 0) currentHours = 'hrs'
      else currentHours = 'hr'

      if (jsondata[i].timeframes.monthly.previous > 1 || jsondata[i].timeframes.monthly.previous == 0) previousHours = 'hrs'
      else previousHours = 'hr'

      activityTime[i].innerText = jsondata[i].timeframes.monthly.current + currentHours;
      activityPrevious[i].innerText = 'Last Month - ' +  jsondata[i].timeframes.monthly.previous + previousHours;
    }
 })
}

