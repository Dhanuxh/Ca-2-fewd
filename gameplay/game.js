var words=[
    {okob:'book'},
    {pneho:'phone'},
    {dhea:'head'},
    {der:'red'},
    {ounsd:'sound'},
    {aidtdino:'addition'},
    {dardel:'ladder'},
    {potalp:'laptop'},
    {ngki:'king'},
    {pepra:'paper'}
]

var word=document.getElementById('word')
var timer=document.getElementById('time')
var refresh=document.getElementById('refresh-word')
var check=document.getElementById('check-word')
var input=document.getElementById('input')
var score=document.getElementById('score')
var points=0
var time=15
var timerId;
function startTimer() {
    timer.innerHTML = time;
    timerId = setInterval(() => {
      time--;
      sessionStorage.setItem("score", points);
      if (time == 0) {
          clearInterval(timerId)
          resetTime()
      }
      timer.innerHTML = time;
    }, 1000);
  }
  function resetTime() {
    time = 15;
    clearInterval(timerId)
    startTimer(timerId);
  }


function randomnum() {
    return Math.floor(Math.random()*10)
}
var a;
var group;
function wordgenerator() {
    console.log('test')
    a=randomnum()
    group=words[a]
    word.innerText=(Object.keys(group));
    resetTime()
}

wordgenerator()
startTimer()

refresh.onclick=()=>{
    wordgenerator()
}

check.onclick=()=>{
    console.log('test')
    if(input.value==(Object.values(group))){
        points++
        score.innerText=`Score: ${points}`
        wordgenerator()
        input.value=''
    }else{
        alert("Wrong guess!!");
        input.value=''
    }
}