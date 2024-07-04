export function isValidDate(date) {
  const inputDate = new Date(date);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - inputDate.getFullYear();
  const month = currentDate.getMonth() - inputDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < inputDate.getDate()))
    age--;

  if (age >= 18) {
    return "";
  } else if (age < 18) {
    return "The employee must be at least 18.";
  }
}

export function isValidZip(zip) {
  const zipRegex = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
  if (!zipRegex.test(zip)) {
    return "Please provide a valid Zip code.";
  }
  return "";
}

export function isValidName(name) {
  const nameRegex = new RegExp("^[a-zA-Z]+([ -']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$");
  if (!nameRegex.test(name)) {
    return "The name format is in valid.";
  }
  return "";
}
