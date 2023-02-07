
let COUNTER = 0;
let INTERVALID = null;
const LIKETRACKER = {} 



function runCounter(){
    INTERVALID = setInterval(() => {
        COUNTER ++
        document.getElementById('counter').innerText = COUNTER

    }, 1000);
}

function pauseCounter(){
    clearInterval(INTERVALID)
    INTERVALID = null;
}

function handlePause(){
    let allBttns = document.querySelectorAll('button')
    
    if (!INTERVALID){
        runCounter()
        for (let i = 0; i < 3; i++ ){
            allBttns[i].disabled = false
        }

        allBttns[3].innerText = 'pause'
        
    } else {
        pauseCounter()
        for (let i = 0; i < 3; i++ ){
            allBttns[i].disabled = true
        }

        allBttns[3].innerText = 'resume'
    }
}

function handlePlus(){
    COUNTER ++
    document.getElementById('counter').innerText = COUNTER
}

function handleMinus(){
    COUNTER --
    document.getElementById('counter').innerText = COUNTER
}



function handleLikes(){

    const currentCOUNT = COUNTER.toString()
    let likesNode = document.querySelector('ul.likes')

    if (currentCOUNT in LIKETRACKER){

        LIKETRACKER[currentCOUNT] ++
        const qSelectorText = `[data-num = "${currentCOUNT}"]`
        console.log(qSelectorText)
        const li = document.querySelector(qSelectorText)
        li.innerHTML = `${currentCOUNT} has been liked <span>${LIKETRACKER[currentCOUNT]} </span>times`
        

    } else {
        const li = document.createElement('li')
        LIKETRACKER[currentCOUNT] = 1
        const text = `${currentCOUNT} has been liked <span>${LIKETRACKER[currentCOUNT]} </span>time`
        li.innerHTML = text
        li.dataset.num = 1
        likesNode.append(li)
    }



}

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    p.innerText = e.target["comment-input"].value
    document.getElementById('list').append(p)
})

document.getElementById('plus').addEventListener('click', handlePlus)
document.getElementById('minus').addEventListener('click', handleMinus)
document.getElementById('heart').addEventListener('click', handleLikes)
document.getElementById('pause').addEventListener('click', handlePause)


document.addEventListener('DOMContentLoaded', runCounter)



/*
Completed


-> a counter that increases by 1 second
    - requires timer functions? (setTimeout(), setInterval, clearInterval)
    - function for counter to run setInterval (which is better to use than setTimeout)
        - return the ID so that clearInterval can be used 
    - function for counter to stop (clearInterval)
        - use the ID from setInterval timer

-> + / - sign that increases or decreases the counter by 1
    - this depends / requires the use of the counter variable

-> a comment box that adds comment when submitted
    - this is independent of the counter

-> a pause button that disables...
    - stops counter function running
    - + / - button
    - like button
    - submit button

-> a like button that captures the counter position and number of times it was clicked
    - this depends / requires the use of the counter variable
    - this requires a counter array / object that keeps track of counter and clicks
        - this can be an object, with key value pairs (can't really be an array because you can have negative numbers)
            - "COUNTER" : "#_of_likes"
                - if the key is not there, it's assigned to the object, value = 1
                - if the key is there, take value, ++
        - capture element where data is going
            if like value is 1, '1 time this is liked'
            if like value is greater, 'x times this is liked' 
            update html
    
    - build variable to
        - build string ID KEY for object : value of counter (data-num="value" : likes)

*/