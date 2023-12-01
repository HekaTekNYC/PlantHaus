export const shopTitle = (title) => {
  return title
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
}
