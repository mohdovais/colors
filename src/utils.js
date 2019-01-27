const TO_STRING_REGEX = /^\[object\s(.+)\]/;

export function typeOf(subject) {
  return TO_STRING_REGEX.exec(
    Object.prototype.toString.call(subject)
  )[1].toLowerCase();
}

export function toArray(subject) {
  return subject === undefined
    ? []
    : typeOf(subject) === "array"
    ? subject
    : [subject];
}
