module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) =>
    "eslint . --ext ts --ext tsx --ext js --ext jsx --fix " +
    filenames.map((x) => '"' + x + '"').join(" "),
};
