// const petName = "Leo";
// const reminderTemplate =
//   "{NAME} is due for another visit. Please call us so we up a new appointment. We look forward to seeing you and {NAME} soon";

// const reminder = reminderTemplate.replace(/{NAME}/g, petName);

// console.log(reminder);

// const petName = "Leo";
// const placeholder = "{NAME}"
// const reminderTemplate =
//   "{NAME} is due for another visit. Please call us so we up a new appointment. We look forward to seeing you and {NAME} soon";

// const reminder = reminderTemplate.replaceAll(placeholder, petName);

// console.log(reminder);

// const petName = "Leo";
// const placeholder = "{NAME}"
// const reminderTemplate =
//   "{NAME} is due for another visit. Please call us so we up a new appointment. We look forward to seeing you and {NAME} soon";

// const reminder = reminderTemplate.replace(new RegExp(placeholder, "g"), petName);


const petName = "Leo";
const placeholder = "{NAME}"
const reminderTemplate =
  "{NAME} is due for another visit. Please call us so we up a new appointment. We look forward to seeing you and {NAME} soon";

const reminder = reminderTemplate.replaceAll(placeholder, petName);

console.log(reminder);
