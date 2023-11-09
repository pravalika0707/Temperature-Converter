let btn = document.querySelector('#btn');
let degree = document.querySelector('#degree');
let result = document.querySelector('#result');
let fres = document.querySelector('#Farenhite');
degree.addEventListener('input', function() {
    let d = parseFloat(this.value); // Parse the input value as a float
    
    if (!isNaN(d)) {
        let c = (d * 9/5) + 32;
        fres.value = c; // Use innerHTML to set the result content
       let re=fres.value;
       result.value=(re- 32) * 5/9 + 273.15;
    } else {
        fres.value = ""; // Handle invalid input
        result.value=""
    }
    // let s=fres.value
    // if (!isNaN(s)) {
       
    //     let c =  (s- 32) * 5/9 + 273.15;
    //     result.value = c; // Use innerHTML to set the result content
    // } else {
    //     result.value = ""; // Handle invalid input
    // }
});
fres.addEventListener('input',function(){
    let r=parseFloat(this.value)
    if (!isNaN(r)) {
       
       let c =  (r- 32) * 5/9 + 273.15;
       let d= (c-32) *5/9;
       degree.value=d;
       result.value = c; // Use innerHTML to set the result content
   } else {
       result.value = ""; // Handle invalid input
       degree.value=""
   }
})
result.addEventListener("input",function(){
    let v=parseFloat(this.value)
    if(!isNaN(v)){
         let  c=v-273.0
         let  k=1.8 * (v-273.15)+32
         fres.value=k
         degree.value=c;

    }
    else{
        degree.value=""
        fres.value=""
    }
})
btn.addEventListener('click',function(){
    degree.value=''
    fres.value=''
    result.value=''
})