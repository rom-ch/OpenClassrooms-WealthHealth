export function isDateValid(date) {
  const inputDate = new Date(date);
  const currentDate = new Date();

  if (inputDate < currentDate) {
    return true;
  } else {
    return false;
  }
}

export function isValidZip(zip) {
  const zipRegex = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
  zip.match(zipRegex);
}
