

// function for coverting temperature
function genrate() {
    let fromUnit =document.querySelector('#fromUnit').value
    let toUnit =document.querySelector('#toUnit').value
    let tempreatue = parseFloat(document.querySelector('#temprature').value);


    let convrtValue;
    let resValue;

    // logic to convert 
    switch (fromUnit) {
        case 'C':
            if (toUnit ==='F') {
                convrtValue = (tempreatue * 9/5) +32;
                resValue ='F';
            }else if(toUnit === 'K'){
                convrtValue = tempreatue + 273.15;
                resValue = 'K';
            }else{
                convrtValue =tempreatue;
                resValue= 'C'
            }
            break;

            case 'F':
                if (toUnit ==='C') {
                    convrtValue = (tempreatue - 32) * 5/9;
                    resValue ='C';
                }else if(toUnit === 'K'){
                    convrtValue = (tempreatue -32)* 5/9 + 273.15;
                    resValue = 'K';
                }else{
                    convrtValue =tempreatue;
                    resValue= 'F'
                }
                break;

            case 'K':
                if (toUnit ==='C') {
                    convrtValue = tempreatue -2073.15;
                    resValue ='C';
                }else if(toUnit === 'K'){
                    convrtValue = (tempreatue - 273.15) * 9/5 +32;
                    resValue = 'K';
                }else{
                    convrtValue =tempreatue;
                    resValue= 'K'
                }
                break;


                default:
                    break;
        }
                document.querySelector('#result').value = convrtValue.toFixed(2) + ' ' + resValue;
    
}


const btn =document.querySelector('button');
// refrence https://www.vedantu.com/maths/conversion-of-temperature
// click  Event here 
btn.addEventListener('click',genrate);

