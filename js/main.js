'use strict'

function onBallClick(maxDiameter, ballClass) {
        const ball = document.querySelector(`.${ballClass}`)
        let currentWidth = parseInt(ball.style.width) || 100
        let currentHeight =  parseInt(ball.style.height) || 100

        let newDiam = getRandomInt(20,60)
    
        currentWidth += newDiam
        currentHeight += newDiam

        if (currentWidth > maxDiameter || currentHeight > maxDiameter) {
            currentWidth = 100
            currentHeight = 100
        }
    
        ball.style.width = `${currentWidth}px`
        ball.style.height = `${currentHeight}px`
    
        ball.innerText = currentWidth 
        ball.style.backgroundColor = getRandomColor()
}