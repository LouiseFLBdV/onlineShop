let counter = 0;

let asyncPlus = () => {
    return new Promise((resolve, reject) =>setTimeout(() => {
            counter++;
            resolve()
        }, 1000)
    )
}

let print = () =>{
    console.log(counter);
}

let main = () =>{
    asyncPlus()
        .then(print)
        .catch();
}

main();