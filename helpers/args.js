const getArgs = (args) => {
  const res = {};
  const [, , ...rest] = args;
  rest.forEach((arg, i, array) => {
    if (arg.charAt(0) == "-") {
      if (i == array.length - 1) {
        res[arg.substring(1)] = true;
      } else if (array[i + 1] && array[i + 1].charAt(0) != "-") {
        res[arg.substring(1)] = array[i + 1];
      } else {
        res[arg.substring(1)] = true;
      }
    }
  });
  return res;
};
export { getArgs };
