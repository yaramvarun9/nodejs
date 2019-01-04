var random=require('random')
var fs=require('fs')
var faker = require('faker')
var colleges=['IIT Delhi','IIT Mumbai','IIT Chennai','IIT Kharagpur']
var year=['FirstYear','SecondYear','ThirdYear','FourthYear']
var b='';
var k,value,max=0;

for(var i=0;i<=2;i++){
  b+=faker.name.firstName()+"    "+colleges[Math.floor(Math.random()*colleges.length)]+"    "+year[Math.floor(Math.random()*year.length)]+"    "+random.int(0,100)+"    "+random.int(0,100)+"    "+random.int(0,100)+"    "+random.int(0,100)+"    "+random.int(0,100)+"\n";
}
fs.appendFile('data1.txt',b,function(err){
  if(err){
    console.log(err);
  }
  else{
  console.log("saved");
}
});

fs.readFile('data1.txt',function(err, contents) {
  if(err){
    console.log(err);
  }
    var result= contents.toString().split("\n");
//for(i=0;i<result.length;i++){
    //  console.log(result[i].split("    "));
//    }
var arr=[];

//    console.log(arr[1]);
/*
for(i=0;i<20;i++)
{
  value=0;
  arr=result[i].split("    ");
  for(k=3;k<=arr.length-1;k++)
  {
    value+=parseInt(arr[k])
  }
  //value+=parseInt(arr[3])+parseInt(arr[4])+parseInt(arr[5])+parseInt(arr[6]);

  //console.log(value);
  //console.log("\n");
  if(value>max){
    max=value;

  }

}
console.log(max);
}); */
