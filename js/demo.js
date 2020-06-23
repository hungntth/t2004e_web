var x =10;
let y=20;
const z=30;
k=10;
x = "hello world";
console.log(x);
let f=y>10;
let u=false;
if(f){
    console.log("y > 10");
}else{
    console.log("y < 10");
}
for (let i=0;i<10;i++){
    console.log("Xin chao "+i);
}
x="10";
y=20;
console.log(x+y);
x=parseInt(x);
console.log(x+y);
k="hello"
k=parseInt(k);
console.log(k);
if(isNaN(k)){
    console.log("ngon");

}else{
    console.log(k);
}
let ary=[1,2,3];
ary[3]="hello";
ary[4]=[5,"xin chao",7];
ary[4][3]=[3.14,1,"a"];
function sayHello(){
    console.log("Hello Everybody!");
}
function sum(a,b) {
    return a+b;
}
// sum(5,6);
console.log(sum(5,6));
let arr=[5.1,7,9,12,2];
arr.map(function (e){
    console.log(e);
    }
);
arr.push(77);
function checkSNT(n){
    if(n<2) return false;
    if(n<3) return true;
    for(let i=2;i<=math.sqrt(n);i++){
        if(n%i==0) return false;
    }
    return true;
}
let snt=[];
for(let i=0;i<100;i++){
    if(checkSNT(i))
        snt.push(i);
}
for(let i=0;i < snt.length;i++){
    console.log(snt[i]);
}
snt.map(function (e) {
    console.log(e);

});
snt.map(e=>{
    console.log(e);
});
