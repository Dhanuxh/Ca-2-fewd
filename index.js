var username=document.getElementById('fname')
var play=document.getElementById('play')
play.onclick=()=>{
    sessionStorage.setItem('username',username.value())
}