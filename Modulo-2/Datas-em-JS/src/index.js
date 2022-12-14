const { format } = require("date-fns");

const date = new Date(2014, 9, 12)
console.log(format(date, "dd 'de' M 'de' yyyy"))

