// Question #3
let userPassword = "ssswnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(idPassword){
    if(idPassword.length < 6){
        return "Weak";
    } else if (idPassword.length >= 6 && idPassword.length < 10){
        return "Medium";
    } else {
        return "Strong"
    }
}
console.log(checkPasswordStrength(userPassword));