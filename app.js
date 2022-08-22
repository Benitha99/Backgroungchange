const button=document.querySelector("button")
const body=document.querySelector("body")
const color=['red','blue','green','purple','yellow']

body.style.backgroundColor='violet'

button.addEventListener('click',change)

function change(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}
