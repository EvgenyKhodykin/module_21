// Дан образец JSON-строки.Ваша задача — создать JS-объект, который при преобразовании в 
// JSON будет возвращать в качестве результата такую же JSON-строку, как в образце. 
// Получившуюся строку вывести в консоль.

const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`
const person = JSON.parse(jsonString)
// console.log(person)
const personString = JSON.stringify(person)
console.log(personString)