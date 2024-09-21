var persona1name = "Maria Delos Santos Las Marias";
var persona1age = 25;
var persona1address = "Upper Session Road, Baguio City, Benguet";

var persona2name = "Juan Gamoso Dela Cruz";
var persona2age = 28;
var persona2address = "San Nicolas, Candon City, Ilocos Sur";

var p1nameRearrange = persona1name.split(" ");
var p2nameRearrange = persona2name.split(" ");

var p1namelenght = persona1name.lenght;
var p2namelenght = persona2name.length;
var p1addlenght = persona1address.lenght;
var p2addlenght = persona2address.lenght;

var sumOfall = persona1age + persona2age + p1namelenght + p2namelenght + p1addlenght + p2addlenght;
var p1Addp2 = persona1age + persona2age;
var subtractp1 = p1Addp2 - p1namelenght;
var multiplyp2 = subtractp1 * p2namelenght;
var p1ToThePowerp2 = p1addlenght ** p2addlenght;

console.log("Name: ",p1nameRearrange[3].toUpperCase(), p1nameRearrange[4].toUpperCase()+",", p1nameRearrange[0] , p1nameRearrange[1] , p1nameRearrange[2]+",", "Age: ",persona1age,"Address: ", persona1address);
console.log("Name: ", p2nameRearrange[2].toUpperCase() , p2nameRearrange[3].toUpperCase()+",", p2nameRearrange[0] , p2nameRearrange[1]+",", "Age: ",persona2age, "Address:", persona2address);

console.log(sumOfall);
console.log(p1Addp2);
console.log(subtractp1);
console.log(multiplyp2);
console.log(p1addlenght);
