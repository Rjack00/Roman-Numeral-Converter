const userInput = document.getElementById("number");
const outputDiv = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const invalidEntryResponse = "Please enter a valid number";
const tooBigResponse = "Please enter a number less than or equal to 3999";
const tooSmallResponse = "Please enter a number greater than or equal to 1";

let conversionArr = [];

const convert = (num) => {
    
    console.log("num: "+ num);
    
    if(num <= 0) {
        outputDiv.innerText = conversionArr.join("");
        userInput.value = "";
        conversionArr = [];
        return;
    } else {
        switch (true) {
            case num >= 1000:
                conversionArr.push("M");
                num -= 1000;
                break;
            case num >= 900:
                conversionArr.push("CM");
                num -= 900;
                break;
            case num >= 500:
                conversionArr.push("D");
                num -= 500;
                break;
            case num >= 400:
                conversionArr.push("CD");
                num -= 400;
                break;
            case num >= 100:
                conversionArr.push("C");
                num -= 100;
                break;
            case num >= 90:
                conversionArr.push("XC");
                num -= 90;
                break;
            case num >= 50:
                conversionArr.push("L");
                num -= 50;
                break;
            case num >= 40:
                conversionArr.push("XL");
                num -= 40;
                break;
            case num >= 10:
                conversionArr.push("X");
                num -= 10;
                break;
            case num >= 9:
                conversionArr.push("IX");
                num -= 9;
                break;
            case num >= 5:
                conversionArr.push("V");
                num -= 5;
                break;
            case num >= 4:
                conversionArr.push("IV");
                num -= 4;
                break;
            case num >= 1:
                conversionArr.push("I");
                num -= 1;
                break;
            default:
                console.log("switch default ran");
        }
    }
    convert(num);
}

const conversion = (input) => {
    const inputNum = parseInt(input.value);

    if(input.value.length < 1) {
        outputDiv.innerHTML = `
        <p>${invalidEntryResponse}</p>`;
        userInput.value = "";
        return;
    }
    if(inputNum < 1) {
        outputDiv.innerHTML = `
        <p>${tooSmallResponse}</p>`;
        userInput.value = "";
        return;
    }
    if(inputNum > 3999) {
        outputDiv.innerHTML = `
        <p>${tooBigResponse}</p>`;
        userInput.value = "";
        return;
    }

    
    return convert(inputNum);
}


convertBtn.addEventListener("click", () =>{
    conversion(userInput);
});

userInput.addEventListener("keydown", (e) => {
    if(e.key === 'Enter'){
        conversion(userInput);
    }
})