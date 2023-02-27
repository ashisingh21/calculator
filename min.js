
const enter = document.getElementById('#enter');
const key = document.querySelectorAll('.key');
const screen = document.querySelector('#screen');

let prob = '';
Array.from(key).forEach(key => {
    key.addEventListener("click", function (e) {
        if (e.target.innerHTML == '=') {
            document.querySelector('#screen').value = eval(prob);
        }
        else if (e.target.innerHTML == 'C') {
            prob = ''
            document.querySelector('#screen').value = prob;
        } else if (e.target.innerHTML == 'CE') {
            prob = prob.slice(0, -1)
            document.querySelector('#screen').value = prob;
        }
        else {
            prob += e.target.innerHTML;
            document.querySelector('#screen').value = prob;
        }
    })
});


