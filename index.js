// Code your solutions in this file

const cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

console.log(writeCards(cards));

function countDown() {
  let i = "10";
  while (i >= 0) {
    console.log(i--);
  }
}
countDown;
