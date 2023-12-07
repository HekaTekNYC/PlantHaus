const shopTitle = (title) => {
  return title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())
}

export default shopTitle
