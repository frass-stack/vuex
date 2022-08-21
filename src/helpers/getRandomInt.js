


const getRandomInt = () => {
    return new Promise( resolve => {
        const randomInt = Math.floor( ( Math.random()*20) +1 )

        //Emito el resolve con una demora
        setTimeout( () => {
            resolve(randomInt)
        }, 1000)
    })
}


export default getRandomInt