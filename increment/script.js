let counter = document.querySelector('.counter')
let counter2 = document.querySelector('.counter2')
let counter3 = document.querySelector('.counter3')
let plus = '+'
window.addEventListener('load', (e)=>{
    for(let i = 0; i< 15001; i++){

    let countTime =    setInterval(() => {
            counter.innerHTML = `${i}${plus}`
            
        }, 1000)

       setTimeout(() => {clearInterval(countTime)
        
       }, 1500);
   

}

    
   
  
    
})

window.addEventListener('load', (e)=>{
    for(let i = 0; i< 5001; i++){

    let countTime =    setInterval(() => {
            counter2.innerHTML = `${i}${plus}`
            
        }, 1000)

       setTimeout(() => {clearInterval(countTime)
        
       }, 1500);
   

}

    
   
  
    
})


window.addEventListener('load', (e)=>{
    for(let i = 0; i< 6001; i++){

    let countTime =    setInterval(() => {
            counter3.innerHTML = `${i}${plus}`
            
        }, 1000)

       setTimeout(() => {clearInterval(countTime)
        
       }, 1500);
   

}

    
   
  
    
})
//counter.innerText++