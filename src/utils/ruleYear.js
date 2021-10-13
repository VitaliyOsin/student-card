export const ruleYear = (n) => {
  let m;
  if (n === 1) {
    console.log("=1");
    m = "год";
  } else if (n > 9) {
    console.log(">9");
    const narr = Number(n.toString().split("")[1]);

    console.log(narr);
    if (n > 19) {
      console.log(">9>19");
      if (narr === 1) {
        console.log(">19=1");
        m = "год";
      } else if (narr > 1 && narr < 5) {
        console.log(">9>19>1<5");
        m = "года";
      } else {
        console.log("else", n, narr);
        m = "лет";
      }
    } else {
      m = "лет";
    }
  } else {
    m = n > 1 && n < 5 ? "года" : "лет";
  }
  return m;
};
