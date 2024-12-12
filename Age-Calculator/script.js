let date = document.getElementById("date");
let result = document.getElementById("result");

date.max = new Date().toISOString().split("T")[0];

function calculate() {
    let birthdate = new Date(date.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    // as months enums start with 0 as january's index
    let y2 = today.getFullYear();

    let d3,m3,y3;
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }

    y3 = y2 - y1;

    if(m2>m1){
        m3 = m2 -m1;

    }
    else{
        y3--;
        m3 = (m2+12) - m1;
    }

    if (d2>=d1) {
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = d2 + getDaysInMonth(y1,m1) - d1;
    }
    
    
    if (m3 < 0) {
        y3--;
        m3 = 11;
    }
    
    
    result.innerHTML = `you are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;

}
