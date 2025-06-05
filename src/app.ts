const doc = {
    sideInput: document.getElementById("side") as HTMLInputElement,
    angleInput: document.getElementById("angle") as HTMLInputElement,
    radiusInput: document.getElementById("rad") as HTMLInputElement,
    calcButton: document.getElementById("calcButton") as HTMLButtonElement
}
doc.calcButton.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("Kattintva")
    startSolution()
})

function startSolution(){
    const side = Number(doc.sideInput.value)
    const angle = Number(doc.angleInput.value)
    const rad = Math.round(calcRadius(side,angle))
    doc.radiusInput.value= String(rad)
}

function calcRadius(side: number, angle: number):number{
    const rad = angle*Math.PI/180.0
    const result = 0.5*side*Math.sin(rad)
    return result
}