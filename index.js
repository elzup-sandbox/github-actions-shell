const date = new Date();

const offset = date.getTimezoneOffset();
const fixedDate = new Date(Date.now() + (offset + 9 * 60) * 60 * 1000);

console.log({ date, offset });
console.log(` date hour: ${date.getHours()}`);
console.log(`fdate hour: ${fixedDate.getHours()}`);
