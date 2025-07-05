// two types primitive and non primitive 
//memory me kaise store aur access hote us basis pe do categorization h

//PRIMITIVE STRING CALL BY VALUE COPY JAATI H
/* NUMMBER null nan undefined symbol BigInt

reference type ya NON PRIMITIVE
ARRAY OBJECTS FUNCTIONS*/
let myObj = { 
             name:" zaid",
             age :19}
             const hheroes = ["zaid" , "azim" , ]
             console.log(myObj);
             console.log(hheroes);
           //smjha nai  console.table(myObj,hheroes)
             
             let func = function(){}
             console.log(typeof func);
             const id =Symbol("123")
             const anotherId= Symbol("123")
             console.log(id === anotherId);
             