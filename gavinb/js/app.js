const inputs = document.querySelectorAll('input');
const page = document.getElementById('page');

function create_Ele() {
    let element = document.createElement(input[0].value);
    for(let i = 1; i < inputs.length; i++) {
        let attribute = input[i].getAttribute('placeholder');
        let value = input[i].value;
        if (value) {
            element[attribute] = value;
        }
    }
    
    console.log(element);
}