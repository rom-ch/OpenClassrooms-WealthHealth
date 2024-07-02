export function isValidDate(date) {
  const inputDate = new Date(date).getTime();
  const currentDate = new Date().getTime();

  if (inputDate < currentDate) {
    return "";
  } else if (inputDate > currentDate) {
    return "Please provide a valid date of birth.";
  }
}

export function isValidZip(zip) {
  const zipRegex = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
  if (!zipRegex.test(zip)) {
    return "Please provide a valid Zip code.";
  }
  return "";
}
