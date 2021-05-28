function subtract() {
    let firstNumberValue = document.getElementById("firstNumber").value;
    let secondNumberValue = document.getElementById("secondNumber").value;

    let result = parseFloat(firstNumberValue) - parseFloat(secondNumberValue);

    document.getElementById("result").innerText = result.toString();
}
