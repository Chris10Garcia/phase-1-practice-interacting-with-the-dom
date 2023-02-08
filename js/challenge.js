
let COUNTER = 0;            //global counter tracker
let INTERVALID = null;      //for keeping track of setInterval is running
const LIKETRACKER = {}      //for keeping track of counter : likes


// Starts counter, set to 1 second
function runCounter(){
    INTERVALID = setInterval(() => {
        COUNTER ++
        document.getElementById('counter').innerText = COUNTER
    }, 1000);
}

// Pauses counter
function pauseCounter(){
    clearInterval(INTERVALID)
    INTERVALID = null;
}

// Determines to pause or run counter
function handlePause(){

    // captures all buttons. last button (pause / resume should not be disabled)
    let allBttns = document.querySelectorAll('button')
    
    // if intervalid has an ID, counter is running
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

// handles plus button action
function handlePlus(){
    COUNTER ++
    document.getElementById('counter').innerText = COUNTER
}

// handles minus button action
function handleMinus(){
    COUNTER --
    document.getElementById('counter').innerText = COUNTER
}


// handles dealing with likes
function handleLikes(){
    
    const currentCOUNT = COUNTER

    // if counter key exists, do the following
    if (currentCOUNT in LIKETRACKER){
        LIKETRACKER[currentCOUNT] ++

        const li = document.querySelector(`[data-num = "${currentCOUNT}"]`)
        const text = `${currentCOUNT} has been liked <span>${LIKETRACKER[currentCOUNT]} </span>times`

        li.innerHTML = text

    // else initialize counter key and like value
    } else {
        LIKETRACKER[currentCOUNT] = 1

        const li = document.createElement('li')
        const text = `${currentCOUNT} has been liked <span>${LIKETRACKER[currentCOUNT]} </span>time`
        li.dataset.num = currentCOUNT

        li.innerHTML = text

        const ulNode = document.querySelector('ul.likes')
        ulNode.append(li)
        
    }

}


// top level event listeners


    // handles submitting comments
document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    p.innerText = e.target["comment-input"].value
    document.getElementById('list').append(p)
})

    // handles button presses and the function it calls back on
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


// old code / brainstorming

/*


    // const currentCOUNT = COUNTER
    // const ulNode = document.querySelector('ul.likes')

    // let li = document.querySelectorAll(['data-num'])
    // let text; 
    // let likeValue = 0;

    // if (li){
    //     likeValue ++

    //     LIKETRACKER[currentCOUNT] = likeValue
        
    //     li = document.createElement('li')
    //     li.dataset.num = likeValue

    //     text = `${currentCOUNT} has been liked <span>${likeValue}</span> time`
        
    // } else {

    // }

    // li.innerHTML = text
    // ulNode.append(li)

    // console.log(li)



*/