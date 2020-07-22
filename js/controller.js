//check power of two
function isPowerOfTwo(n) {
    if(n === 0)
    {
        return false;
    }
    else
    {
        let power = 0;

        while (n !== 1)
        {
            if(n % 2 !== 0)
            {
                return false;
            }
            else
            {
                n = n / 2;
                power++;
            }
        }
        return true;
    }
}

//main calculation
function FindLastValue(i) {
    let cstart = 2;
    let oddnum = 3;

    var lastval = 0;

    while (cstart <= i)
    {
        //get result of power of two
        if(isPowerOfTwo(cstart)) {
            oddnum = 3;
            lastval = 1;
            cstart++;
        }
        else
        {
            lastval = oddnum;
            oddnum += 2;
            cstart++;
        }
    }
    document.getElementById('result').innerHTML = lastval + ' is survived';
    HiddenResult();
}

//function of start calculation
function calculate(event) {
    event.preventDefault();

    //assign num of humans
    const value = document.getElementById('val').value;

    if (value === '1') {
        document.getElementById('result').innerHTML = '1' + ' is survived';
        HiddenResult();
    } else {
        HiddenLoading();

        //get time to process (0.5s)
        setTimeout(function after() {
            FindLastValue(value);
            HiddenLoading();
        }, 500)
    }
}

function Validation() {
    //assign num of humans
    const value = document.getElementById('val').value;

    //if value is 1 human
    if(value === '')
    {
        document.getElementById('btnResult').disabled = true;
        document.getElementById('result').innerHTML = null;
        HiddenResult();
    }
    else if(value < '1') {
        document.getElementById('btnResult').disabled = true;
        document.getElementById('result').innerHTML = 'Invalid Value!';
        HiddenResult();
    }
    else if(value > 200000000) {
        document.getElementById('btnResult').disabled = true;
        document.getElementById('result').innerHTML = 'Entered value over than <br> maximum value!';
        HiddenResult();
    }
    else{
        document.getElementById('btnResult').disabled = false;
        document.getElementById('result').innerHTML = '';
    }
}

//hidden result txt
function HiddenResult() {
    var x = document.getElementById("res");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

//show hide loading txt
function HiddenLoading() {
    var x = document.getElementById("wait");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//onload result button is disabled
window.onload = function ex() {
    document.getElementById('btnResult').disabled = true;
}