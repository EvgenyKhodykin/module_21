// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parser = new DOMParser()
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const xmlDOM = parser.parseFromString(xmlString, 'text/xml')
const listNode = xmlDOM.querySelector('list')

let result = {list:[]}
let arr = []
let studentNode = xmlDOM.querySelector('student')
//здесь будет цикл по студентам
while (studentNode) {
    let student = {
    name: '',
    age: 0,
    prof: '',
    lang: ''
    }

const nameNode = studentNode.querySelector('name')

const langAttr = nameNode.getAttribute('lang')
student.lang = langAttr

const firstNameNode = nameNode.querySelector('first')
const secondNameNode = nameNode.querySelector('second')
student.name = `${firstNameNode.innerHTML} ${secondNameNode.innerHTML}`

const ageNode = studentNode.querySelector('age')
student.age = Number(ageNode.innerHTML)

const profNode = studentNode.querySelector('prof')
student.prof = profNode.innerHTML

console.log(student)
arr.push(student)
//здесь узел студент удаляем
studentNode.remove()
studentNode = xmlDOM.querySelector('student')
}
result.list = arr
console.log(result)