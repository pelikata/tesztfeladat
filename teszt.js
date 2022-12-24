function powerSet(arr) {
  let powers = [];

  const total = 2 ** arr.length;

  for (var i = 0; i < total; i++) {
    let tempSet = [];

    function toBinary(decimal) {
      binary = "";

      while (decimal > 0) {
        if (decimal & 1) {
          binary = "1" + binary;
        } else {
          binary = "0" + binary;
        }
        decimal = decimal >> 1;
      }

      return binary;
    }

    let num = toBinary(i);

    while (num.length < arr.length) {
      num = "0" + num;
    }

    for (let b = 0; b < num.length; b++) {
      if (num[b] === "1") {
        tempSet.push(arr[b]);
      }
    }

    if (tempSet.length > 1) {
      powers.push(tempSet);
    }
  }

  return powers.length;
}
