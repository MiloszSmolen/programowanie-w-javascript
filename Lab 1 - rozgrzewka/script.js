const calculate = document.querySelector('#przelicz');
const results = document.querySelector('#wynik');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const number4 = document.querySelector('#number4');

    function calculateAndDisplayResults(){
        const value1 = parseFloat(number1.value) || 0;
        const value2 = parseFloat(number2.value) || 0;
        const value3 = parseFloat(number3.value) || 0;
        const value4 = parseFloat(number4.value) || 0;
        const sum = value1 + value2 + value3 + value4;
        const srednia = sum / 4;
        const min = Math.min(value1, value2, value3, value4);
        const max = Math.max(value1, value2, value3, value4);

        results.innerHTML = 
            `Suma: ${sum}<br>
            Średnia: ${srednia}<br>
            Minimum: ${min}<br>
            Maksimum: ${max}`;}

calculate.addEventListener('click', calculateAndDisplayResults);
    number1.addEventListener('input', calculateAndDisplayResults);
    number2.addEventListener('input', calculateAndDisplayResults);
    number3.addEventListener('input', calculateAndDisplayResults);
    number4.addEventListener('input', calculateAndDisplayResults);
