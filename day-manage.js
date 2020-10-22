
let display = document.getElementById("display");

function displayFake() {


    let day = new DateFake(22, 10, 2020);

    console.log(day.month);

    display.innerHTML = day.getInformation();6
}

displayFake();