function primary(number, callback) {
    console.log(1);
    if(number < 18) {
      return callback("not ready", -1 )
    } else {
      return callback("ready", 1 )

    }
    
}


async function secondary(phrase, number) {
    if(number === -1) {
        const resp = fetch("https://jsonplaceholder.typicode.com/comments");
        return (await resp).json();
        
    } else {
      const resp = fetch("https://jsonplaceholder.typicode.com/posts");
      return (await resp).json();
    }
}

primary(17, secondary)