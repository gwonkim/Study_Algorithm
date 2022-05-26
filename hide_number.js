
function solution1(phone_number) {
    let length = phone_number.length;
    return phone_number.slice(length-4).padStart(length, '*');
}

function solution2(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}