function get_pay(price, discount, shipping){
    
    let pay = price - (price * (discount/100)) + shipping;
    document.querySelector("#price").innerHTML = price+"원";
    document.querySelector("#discount").innerHTML = discount+"%";
    document.querySelector("#shipping").innerHTML = shipping+"원";
    document.querySelector("#pay").innerHTML = pay+"원";

}