var sortNumber = function (number) {
    number.sort( function(a,b){
        if (a===b) {
            return true;
        }
        return a< b ? true : false;
    });
}


var number = [19, 3, 81, 1, 2, 4];
sortNumber(number);
console.log(number);
