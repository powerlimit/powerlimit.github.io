var rate;
var descr;
var percent;
function select(r) {
    rate = Number(r);
    if (rate == 1) {
        percent = Number(1.05);
        descr = "1 день ";
    }
    if (rate == 7) {
        percent = Number(1.5);
        descr = "7 дней ";
    }
    if (rate == 15) {
        percent = Number(2.5);
        descr = "15 дней ";
    }
    if (rate == 30) {
        percent = Number(4.5);
        descr = "30 дней ";
    }
    document.getElementById("descr").innerHTML = descr;
    calculate();
}
function calculate() {
    var sum = Number(document.getElementById("size").value);
    document.getElementById("current").innerHTML = sum.toString();
    var resSum = Math.floor(sum * percent);
    document.getElementById("result").innerHTML = resSum.toString();
    wNumber();
}
function wNumber() {
    $('.w-number').each(function () {
        $(this).text($(this).text().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
    });
}
