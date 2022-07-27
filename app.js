let progress = document.querySelector('.progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')

let currentActive = 1


// prev.addEventListener('click',()=>{
   
//     currentActive--

//     if(currentActive < 1){
//         currentActive = 1
        
//     }
//     update()
        
// })
    
// next.addEventListener('click',()=>{
    
//     currentActive++

//     if(currentActive > circles.length){
//         currentActive = circles.length
//     }
//     update()
// })


// function update(){
//     circles.forEach((circle,index)=>{

//         if(index < currentActive){
//             circle.classList.add('active')
//         }else{
//             circle.classList.remove('active')
//         }
//     })

//     const activities = document.querySelectorAll('.active')

//     progress.style.width = (activities.length -1) / (circles.length -1 ) *100 + '%'

//     if(currentActive === 1){

//         prev.disabled = true

//     }else if(activities.length === circles.length){

//         next.disabled = true

//     }else{
//         prev.disabled = false
//         next.disabled = false
//     }
    
// }



next.addEventListener('click',()=>{
    //increment the current active
    currentActive ++

    //check if the currrent active is = the circle length which is the max  we will like
    // to set to the number in order to make the prev work with last value

    if(currentActive === circles.length){
        currentActive = circles.length
    }

    //function to look through the circles
    update()
})

prev.addEventListener('click',()=>{
    //decrement the current active
    currentActive --

    //check if the currrent active is = 1 and set it to one which is the lowest for next to work with
    if(currentActive == 1){
        currentActive = 1
    }

    //function to loop through the circles
    update()
})

function update(){
    //loop through the circle and check if each index is less than the current active 
    //which is the number we want to be we want to add the active class
    //else if it current active is lower than the index we want to remove the class of active

    circles.forEach((circle,index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active')
    //we are setting the width of the progress the blue bar based on the activies that is present
    //among the circles rather than setting it manually -1 is to reduce the amount if width is too much 

    progress.style.width =  (actives.length -1) / (circles.length -1)  * 100 + '%'
 

    if(currentActive === 1){
        //if the current active is 1 the it can go back more than that 
        prev.disabled = true
    }else if(currentActive === circles.length){

        //if the current active the circle.lenght which is 4 the it can go futher more than that 

        next.disabled = true
    }else{
        //the else is if they are in the middle
        prev.disabled = false
        next.disabled = false
    }
}