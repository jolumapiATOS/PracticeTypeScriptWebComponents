// Node JS ( runtime-environment ) Express Route()

function routing (route, callback) {
    let response = {}
    let request = {
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            payload: { name: "Jose Luis", age: 29, job: "Software Developer" }
        }
    }

    return callback( request, response );
}

function myFunc(req, res) {
    let { payload } = req.body;


    return "You have succesfully log in " + payload.name;
}

console.log(routing("/Login", myFunc));