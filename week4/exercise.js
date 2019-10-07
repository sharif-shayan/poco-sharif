function creditCard(cn) {
    let containsOnlyNumbers = false;
    let containsSixtenDigits = false;
    let isFinalDigitEven = false;
    let isTwoDefferintDigits = false;

    //only numbers
    let counter = 0;
    for (let i = 0; i < 16; i++) {
        let tmp = Number.parseInt(cn[i]);
        if (Number.isInteger(tmp)) {
            counter++;
        }
    }
    if (counter == 16) {
        containsOnlyNumbers = true;
    }

    //must be 16 digits
    if (cn.length === 16) {
        containsSixtenDigits = true;
    }

    //final digit even
    let finalDigit = cn[cn.length - 1];
    if (Number.parseInt(finalDigit) % 2 == 0) {
        isFinalDigitEven = true;
    }

    /*sum of 16 digit >16
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let tmp = Number.parseInt(cn[i]);
        if (Number.isInteger(tmp)) {
            sum += tmp;
        }
        if (sum > 16) {
            resultCondition4 = true;
        }
    }*/
       //at least 2 different digit
    let firstDigit = cn[0];
    for (let i = 1; i < 16; i++) {
        if (firstDigit != Number.parseInt(cn[i])) {
            isTwoDefferintDigits = true;
        }
    }
    return containsOnlyNumbers && isTwoDefferintDigits && isFinalDigitEven && containsSixtenDigits;
}

document.write(creditCard("6122355665433434"));


