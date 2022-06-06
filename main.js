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

GetDaily()


function GetDaily() {
  dailyButton.classList.add("active");
  weeklyButton.classList.remove("active");
  monthlyButton.classList.remove("active");

  fetch('data.json').then(response => {
    return response.json();
  })
  .then(jsondata => {
    // workTime.innerText = jsondata[0].timeframes.daily.current + 'hrs'
    // workPrevious.innerText = 'Previous - ' + jsondata[0].timeframes.daily.previous + 'hrs'

    // playTime.innerText = jsondata[1].timeframes.daily.current + 'hr'
    // playPrevious.innerText = 'Previous - ' + jsondata[1].timeframes.daily.previous + 'hrs'

    // studyTime.innerText = jsondata[2].timeframes.daily.current + 'hrs'
    // studyPrevious.innerText = 'Previous - ' + jsondata[2].timeframes.daily.previous + 'hrs'

    // exerciseTime.innerText = jsondata[3].timeframes.daily.current + 'hr'
    // exercisePrevious.innerText = 'Previous - ' + jsondata[3].timeframes.daily.previous + 'hr'

    // socialTime.innerText = jsondata[4].timeframes.daily.current + 'hr'
    // socialPrevious.innerText = 'Previous - ' + jsondata[4].timeframes.daily.previous + 'hrs'

    // selfCareTime.innerText = jsondata[5].timeframes.daily.current + 'hr'
    // selfCarePrevious.innerText = 'Previous - ' + jsondata[5].timeframes.daily.previous + 'hr'
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
    workTime.innerText = jsondata[0].timeframes.weekly.current + 'hrs'
    workPrevious.innerText = 'Last Week - ' + jsondata[0].timeframes.weekly.previous + 'hrs'

    playTime.innerText = jsondata[1].timeframes.weekly.current + 'hrs'
    playPrevious.innerText = 'Last Week - ' + jsondata[1].timeframes.weekly.previous + 'hrs'

    studyTime.innerText = jsondata[2].timeframes.weekly.current + 'hrs'
    studyPrevious.innerText = 'Last Week - ' + jsondata[2].timeframes.weekly.previous + 'hrs'

    exerciseTime.innerText = jsondata[3].timeframes.weekly.current + 'hrs'
    exercisePrevious.innerText = 'Last Week - ' + jsondata[3].timeframes.weekly.previous + 'hrs'

    socialTime.innerText = jsondata[4].timeframes.weekly.current + 'hrs'
    socialPrevious.innerText = 'Last Week - ' + jsondata[4].timeframes.weekly.previous + 'hrs'

    selfCareTime.innerText = jsondata[5].timeframes.weekly.current + 'hrs'
    selfCarePrevious.innerText = 'Last Week - ' + jsondata[5].timeframes.weekly.previous + 'hrs'
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
    workTime.innerText = jsondata[0].timeframes.monthly.current + 'hrs'
    workPrevious.innerText = 'Last Month - ' + jsondata[0].timeframes.monthly.previous + 'hrs'

    playTime.innerText = jsondata[1].timeframes.monthly.current + 'hrs'
    playPrevious.innerText = 'Last Month - ' + jsondata[1].timeframes.monthly.previous + 'hrs'

    studyTime.innerText = jsondata[2].timeframes.monthly.current + 'hrs'
    studyPrevious.innerText = 'Last Month - ' + jsondata[2].timeframes.monthly.previous + 'hrs'

    exerciseTime.innerText = jsondata[3].timeframes.monthly.current + 'hrs'
    exercisePrevious.innerText = 'Last Month - ' + jsondata[3].timeframes.monthly.previous + 'hrs'

    socialTime.innerText = jsondata[4].timeframes.monthly.current + 'hrs'
    socialPrevious.innerText = 'Last Month - ' + jsondata[4].timeframes.monthly.previous + 'hrs'

    selfCareTime.innerText = jsondata[5].timeframes.monthly.current + 'hrs'
    selfCarePrevious.innerText = 'Last Month - ' + jsondata[5].timeframes.monthly.previous + 'hrs'
 })
}

