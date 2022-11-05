var i = 10;
var j = 5;
/*if (i>j) {
    document.write(`i is the largest`);
}
else if(j>i){
    console.log(`j is greater than i`)
}
else{
document.write(`they are same`)
}

if(true){
    var data="Some text";
    let info="Text";
}
document.write(data);
document.write(info);

for(let i=0; i<10;i++){
    document.write(` `+i)
}

var i =0;
for(;i<10;){
    document.write(` `+i++)
}
*/
// var i=2;
// for(var j=0; j<11;j++){
//     console.log(`2 *${i}=${2*i}`);
// }

// var i=1;
// while(true){
//     var fullname = prompt("Whats your name?");
//     if(fullname=="q"){
//         break;
//     }
//     console.log("Hi"+ fullname);
// }
// while (true) {
//     var username = prompt("Usename")
//     var password = prompt("password")
//     if (username == "Prince"&&
//         password == "1234"){
//                 console.log("login successfull")
//         }
//         else{
//             alert("login unsucessfull")
//         }

// } 
// var mark=100;
// if(mark<50){
//     return;
// }
// function add(x,y) {
//   return(x+y);
// }
// greet("Jane");

// var add= function(x,y){
//     return x+y;
// }
// var add=(x,y)=>{
//     return x+y;
// }
// var res=add(6,2);
// document.write(res)

// var person={
//     fullname:"Jon Doe",
//     age:25,
//     email:"jondoe@gmail.com"


// }
// person.palnet="Earth";
// person.fullname="new name";
// console.log(person);

// var student={
//     id:1,
//     mark1:50,
//     mark2:45,
//     total:function(){
//         var extraMark:5
//         return this.mark1+this.mark2+extraMark;
// }

// }
// document.write(student.total());

// var data=['jon Doe',25]
// document.write(data[0]);
// document.write(data.length);

// var person={
//     fullName:"Prince George",
//     email:princegeorge121gmail.com,
//     phoneNo:[9496828300,8089228300]

// }
// document.write(p.phone[1])

// var num1="1";
// var num2=parseInt(num1);
// document.write(typeof num2);
// var largest=0;
// const numbers=[];
// for(var i=0; i<5; i++){
//     numbers.push(parseInt prompt(??))
// }
// document.write(nos);

// for(let i=0;i<5;i++){
//     SVGAnimatedNumberList.push(parseInt(promot("Enter a number:")))
// }
// largest=Number;

// var names=["Prince","Ajay","Ashique"]
// names.forEach((name)=>{
//     document.write(name.toUpperCase())
// }
// )
var tag=document.getElementById("main");
tag.innerText="new element";
tag.style.color="red";
tag.style.fontSize="50px";
tag.style.fontWeight="20px";
console.log(tag.innerText);
document.write("hello");
document.write(`

`)
var buttons=document.querySelectorAll("button");
console.log(buttons);
buttons.forEach(button=>{
    button.style.backgroundcolor="red";
}
)
var p=document.createElement("A");
p.innerText="hlo Adith";
document.body.appendChild(p);

var table= document.createElement("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td1");
var td1 = document.createElement("td2");
td1.innerText="name";
td2.innerText="Email";
tr.appendChild(td1);
tr.appendChild(td2);
table.appendChild(tr);
document.body.appendChild(table);
function msclick(e){
    e.target.innerText="Helloo"

}
function mshover(e){
    e.target.innerText="Hello";
}






