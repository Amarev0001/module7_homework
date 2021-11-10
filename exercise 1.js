let person = {

    city: "Moscow"

}
let student = Object.create(person);

student.ownCity = 'Stavropol';

function printObjProperties(obj) {
    for (const objKey in obj) {
        if(obj.hasOwnProperty(objKey)){
            console.log(`Key: ${objKey}, value: ${obj[objKey]}`);
        }
    }
}

printObjProperties(student);