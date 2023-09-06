function sum_avg(kor, eng, math) {
    let sumVal = kor + eng + math;
    let avgVal = sumVal / 3;
    document.querySelector("#kor").innerHTML = kor;
    document.querySelector("#eng").innerHTML = eng;
    document.querySelector("#math").innerHTML = math;
    document.querySelector("#sum").innerHTML = sumVal;
    document.querySelector("#avg").innerHTML = avgVal;

}