// IDK WHOSE CODE I CANNIBALIZED IS BUT THANK YOU

export function parseFunction(S) {
  var carets;
  carets = parseCaret(S);
  var output;

  let i = 0;
  output = "";
  while (i < carets.length) {
    if (allowablechar(carets[i])) {
      output = output + carets[i];
      i = i + 1;
    } else if (
      carets[i] === "x" &&
      (i === carets.length - 1 || allowablechar(carets[i + 1]))
    ) {
      output = output + carets[i];
      i = i + 1;
    } else if (
      carets[i] === "v" &&
      (i === carets.length - 1 || allowablechar(carets[i + 1]))
    ) {
      output = output + carets[i];
      i = i + 1;
    } else if (
      carets[i] === "y" &&
      (i === carets.length - 1 || allowablechar(carets[i + 1]))
    ) {
      output = output + carets[i];
      i = i + 1;
    } else if (
      carets[i] === "e" &&
      (i === carets.length - 1 || allowablechar(carets[i + 1]))
    ) {
      output = output + "(Math.E)";
      i = i + 1;
    } else if (
      carets[i] === "t" &&
      (i === carets.length - 1 || allowablechar(carets[i + 1]))
    ) {
      output = output + "x";
      i = i + 1;
    } else if (
      carets.substring(i, i + 2) === "x'" &&
      (i === carets.length - 2 || allowablechar(carets[i + 2]))
    ) {
      output = output + "v";
      i = i + 2;
    } else if (
      carets.substring(i, i + 2) === "pi" &&
      (i === carets.length - 2 || allowablechar(carets[i + 2]))
    ) {
      output = output + "(Math.PI)";
      i = i + 2;
    } else if (carets.substring(i, i + 2) === "u(") {
      output = output + "u(";
      i = i + 2;
    } else if (carets.substring(i, i + 3) === "ln(") {
      output = output + "Math.log(";
      i = i + 3;
    } else if (carets.substring(i, i + 4) === "abs(") {
      output = output + "Math.abs(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "max(") {
      output = output + "Math.max(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "min(") {
      output = output + "Math.min(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "exp(") {
      output = output + "Math.exp(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "log(") {
      output = output + "Math.log(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "sin(") {
      output = output + "Math.sin(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "cos(") {
      output = output + "Math.cos(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "tan(") {
      output = output + "Math.tan(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "csc(") {
      output = output + "csc(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "sec(") {
      output = output + "sec(";
      i = i + 4;
    } else if (carets.substring(i, i + 4) === "cot(") {
      output = output + "cot(";
      i = i + 4;
    } else if (carets.substring(i, i + 5) === "sqrt(") {
      output = output + "Math.sqrt(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "asin(") {
      output = output + "Math.asin(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "acos(") {
      output = output + "Math.acos(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "atan(") {
      output = output + "Math.atan(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "acsc(") {
      output = output + "acsc(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "asec(") {
      output = output + "asec(";
      i = i + 5;
    } else if (carets.substring(i, i + 5) === "acot(") {
      output = output + "acot(";
      i = i + 5;
    } else if (carets.substring(i, i + 7) === "arcsin(") {
      output = output + "Math.asin(";
      i = i + 7;
    } else if (carets.substring(i, i + 7) === "arccos(") {
      output = output + "Math.acos(";
      i = i + 7;
    } else if (carets.substring(i, i + 7) === "arctan(") {
      output = output + "Math.atan(";
      i = i + 7;
    } else if (carets.substring(i, i + 7) === "arccsc(") {
      output = output + "acsc(";
      i = i + 7;
    } else if (carets.substring(i, i + 7) === "arcsec(") {
      output = output + "asec(";
      i = i + 7;
    } else if (carets.substring(i, i + 7) === "arccot(") {
      output = output + "acot(";
      i = i + 7;
    } else if (carets.substring(i, i + 9) === "Math.pow(") {
      output = output + "Math.pow(";
      i = i + 9;
    } else {
      return "";
    }
  }

  return output;
}

function allowablechar(x) {
  if (x === ".") {
    return true;
  } else if (x === ",") {
    return true;
  } else if (x === "0") {
    return true;
  } else if (x === "1") {
    return true;
  } else if (x === "2") {
    return true;
  } else if (x === "3") {
    return true;
  } else if (x === "4") {
    return true;
  } else if (x === "5") {
    return true;
  } else if (x === "6") {
    return true;
  } else if (x === "7") {
    return true;
  } else if (x === "8") {
    return true;
  } else if (x === "9") {
    return true;
  } else if (x === "+") {
    return true;
  } else if (x === "-") {
    return true;
  } else if (x === "*") {
    return true;
  } else if (x === "/") {
    return true;
  } else if (x === "(") {
    return true;
  } else if (x === ")") {
    return true;
  } else if (x === "[") {
    return true;
  } else if (x === "]") {
    return true;
  } else {
    return false;
  }
}

// Some functions Math doesn't know
export function csc(x) {
  return 1.0 / Math.sin(x);
}
export function sec(x) {
  return 1.0 / Math.cos(x);
}
export function cot(x) {
  return 1.0 / Math.tan(x);
}
export function acsc(x) {
  return Math.asin(1.0 / x);
}
export function asec(x) {
  return Math.acos(1.0 / x);
}
export function acot(x) {
  return Math.atan(1.0 / x);
}
export function u(x) {
  if (x < 0) {
    return 0;
  } else {
    return 1;
  }
}

// Teaching Javascript what ^ means is hard
// so we instead scan through the string and replace it with
// Math.pow( , )
export function parseCaret(S) {
  var caretPosition = 0;
  for (let i = 1; i < S.length; i++) {
    if (S[i] === "^") {
      caretPosition = i;
    }
  }
  if (caretPosition === 0) {
    return S;
  } else {
    var result;
    var firstPart, head, base;
    var secondPart, exponent, tail;
    firstPart = lastParentheses(S.substring(0, caretPosition));
    head = firstPart[0];
    base = firstPart[1];
    secondPart = firstParentheses(S.substring(caretPosition + 1, S.length));
    exponent = secondPart[0];
    tail = secondPart[1];
    result = head + "Math.pow(" + base + "," + exponent + ")" + tail;
    return parseCaret(result);
  }
}

export function firstParentheses(S) {
  if (S[0] === "(" || S[0] === "[") {
    var parentheses = 1;
    var cutoff = 1;
    while (parentheses > 0) {
      if (S[cutoff] === "(") {
        parentheses = parentheses + 1;
      }
      if (S[cutoff] === ")") {
        parentheses = parentheses - 1;
      }
      if (S[cutoff] === "[") {
        parentheses = parentheses + 1;
      }
      if (S[cutoff] === "]") {
        parentheses = parentheses - 1;
      }
      cutoff = cutoff + 1;
    }
    return [S.substring(0, cutoff), S.substring(cutoff, S.length)];
  } else {
    return [S[0], S.substring(1, S.length)];
  }
}
export function lastParentheses(S) {
  if (S[S.length - 1] === ")" || S[S.length - 1] === "]") {
    var parentheses = 1;
    var cutoff = S.length - 2;
    while (parentheses > 0) {
      if (S[cutoff] === ")") {
        parentheses = parentheses + 1;
      }
      if (S[cutoff] === "(") {
        parentheses = parentheses - 1;
      }
      if (S[cutoff] === "]") {
        parentheses = parentheses + 1;
      }
      if (S[cutoff] === "[") {
        parentheses = parentheses - 1;
      }
      cutoff = cutoff - 1;
    }
    return [S.substring(0, cutoff + 1), S.substring(cutoff + 1, S.length)];
  } else {
    return [S.substring(0, S.length - 1), S[S.length - 1]];
  }
}
