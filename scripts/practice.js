
var expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = 'anees.rehman@gmail.com'
console.log(expression.test(email));


console.log('anees.rehman@gmail.com,nauman.samejaa@gmail.com,'.split(','))

emails = 'anees.rehman@gmail.com,nauman.samejaa@gmail.com,'.split(',');

if (emails.at(-1) == ''){
    emails.pop()
    console.log(emails)
}