 const messages = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Yesica",
    "Diego",
    "Laura",
    "Carlos",
    "Luis",
    "Eliana",
    "Fernando",
    "Camilo",
    "Jose"
    
 ]


 const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);

 }

 module.exports  = {randomMsg};