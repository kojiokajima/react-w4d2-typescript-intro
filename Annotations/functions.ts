const add = (a: number, b: number): number => {
    return a + b
}
add(2, 3)




const logger = (message: string): void => {
    console.log(message);  
    // return message + "!!" 
}
logger("Hello there!")




const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message)
    }
}
throwError('dfv')




const todaysWeather = {
    date: new Date(),
    weather: 'rainy'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
    
}
logWeather(todaysWeather)