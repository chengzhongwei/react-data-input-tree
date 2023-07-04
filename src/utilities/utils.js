export function camelCaseToTitleCase(camelCase) {
  let text = camelCase.replace(/([A-Z])/g, " $1");
  return text.charAt(0).toUpperCase() + text.slice(1);
}
