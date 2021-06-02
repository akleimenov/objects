/* Task 1 

1) Необходимо вывести в консоль браузера все свойства и значения объекта `person` в следующем виде:


<property>: <value>
*/
const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

for (let key in person) {
    console.log(`<${key}>: <${person[key]}>`)
}

/* Task 2 
Необходимо вывести в консоль браузера все свойства и значения объекта `person` таким образом, чтобы вывод выглядел следующим образом:

```
First name: Jack
Last name: Sparrow
Age: 25 ages
Where to find: Caribbean sea
*/

const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

for (let key in person) {
    if (key === 'firstName') {
        key = 'First name'
        person['First name'] = person['firstName']
    }
    if (key === 'lastName') {
        key = 'Last name'
        person['Last name'] = person['lastName']
    }
    if (key === 'age') {
        key = 'Age'
        person['Age'] = `${person['age']} ages`
    }
    if (key === 'location') {
        key = 'Where to find'
        person['Where to find'] = person['location']
    }
    console.log(`${key}: ${person[key]}`)
}
