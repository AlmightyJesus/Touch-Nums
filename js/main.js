'use strict'

var gGameNums = shuffle(creatArray(16))
var gNumsEnder = gGameNums.length
console.log(gGameNums)
var gNextNum = 1

renderTable(Math.sqrt(gGameNums.length))


//check if right cell clicked and start timer at 1st click:

function checkCell(cellNum) {
    if(cellNum===1){
        startTimer()
    }
    var elCell = document.querySelector(`.${'num' + cellNum}`)
    if (cellNum === gNextNum) {
        gNextNum++
        elCell.classList.add("clicked")
    }

    if (gNextNum > gNumsEnder) {
        stopTimer()
    }

}

//render table to HTML:

function renderTable(rows) {
    var strHTML = ''
    var num;
    for (var i = 0; i < rows; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < rows; j++) {
            num = gGameNums.pop()
            strHTML += `<td class="${'num' + num}" onclick="checkCell(${num})">
            ${num}
            </td>`
        }
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

// create an array of selected length:

function creatArray(amount) {
    var nums = []
    for (var i = 1; i <= amount; i++) {
        nums.push(i)
    }
    return nums
}

//shuffle the array:

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//difficulty functions:

function changeEasy() {
    gGameNums = shuffle(creatArray(16))
    renderTable(Math.sqrt(gGameNums.length))
    stopTimer()
}
function changeMedium() {
    gGameNums = shuffle(creatArray(25))
    renderTable(Math.sqrt(gGameNums.length))
    stopTimer()
}
function changeHard() {
    gGameNums = shuffle(creatArray(36))
    renderTable(Math.sqrt(gGameNums.length))
    stopTimer()
}

// timer functions:

var startTime; 
var myTimerInterval ; 

function stopTimer(){

        clearInterval(myTimerInterval);
}

function startTimer() {
    startTime = new Date().getTime();
    myTimerInterval = setInterval(function(){ myTimer() }, 50);
}

function myTimer() {
    var interval = new Date().getTime() - startTime;
    var minuets = Math.floor(interval / 1000 / 60);
    var seconds = Math.floor(interval / 1000 % 60);
    document.getElementById("min").innerHTML = pad2(minuets);
    document.getElementById("sec").innerHTML = pad2(seconds);
}
function pad2(number) {

    if (number < 10) {
        return '0' + number
    }
    else { 
        return '' + number
    }
 
    
}