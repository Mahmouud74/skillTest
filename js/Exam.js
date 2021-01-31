var output;
var outputcontainer=[];
btn=document.getElementById("btn1");
$(".b").show('3');
//btn.addEventListener("click",addItem);
function cleAr()
{
    $("#inp1").val("");
}
function addItem()
{
    output= document.getElementById("inp1").value;
    outputcontainer.push(output);
    console.log(outputcontainer);
    displayItems();
    cleAr();
}
function displayItems()
{
    temp=``;
    for(var i = 0 ; i<outputcontainer.length;i++)
    {
        temp+=
        ` <div  class=" col-md-12 ">
                <input type="text" class=" d-inline w-25 form-control bg-dark text-primary " value="${outputcontainer[i]}" disabled="true" >
                <button class="btn btn-danger" id="del" onclick="deelete(${i})">
                X
                </button>
          
            </div>`;
    }
    document.getElementById("output").innerHTML=temp;
}
var remove = document.getElementById("del");
function deelete(index)
{
    var deleted = outputcontainer.splice(index,1);
    displayItems()
}
//hustlin container  bg
function changBg()
{
    
    var x=Math.round(Math.random()*255);
    var y=Math.round(Math.random()*255);
    var z=Math.round(Math.random()*255);
    $(".second").css("backgroundColor","rgb("+x+","+y+","+z+")");
}
let interval 


$(".hustlin").mouseenter(function(){
    interval =setInterval("changBg()", 500 )
});
$(".hustlin").mouseleave(()=>{

    clearInterval(interval)
    $(".second").css("backgroundColor","transparent");

});
//formValidation
function validateMail()
{
    temp=`  <div class="alert alert-warning" role="alert">
                enter A valid Mail
            </div>` ;
    let enteredMail= document.getElementById("inpMail").value.toLowerCase();
    const validationProcess=/[a-z](@)(hotmail)|(yahoo)|(gmail)(.com)$/;
    let x=validationProcess.test(enteredMail);
    console.log(x);
    if(x==false)
    {
        document.getElementById("alertingMail").innerHTML=temp;
    }
    if(x==true)
    {   
        temp=``;
        document.getElementById("alertingMail").innerHTML=temp
    }
}
function validatePhone()
{
    temp=`  <div class="alert alert-warning" role="alert">
                enter A valid phone
            </div>`;
    var enteredPhone=document.getElementById("inpPhone").value;
    var validationProcessII=/^(002)(01)[051][0-9]{8}$/;
    var y = validationProcessII.test(enteredPhone);
    console.log(y);
    if(y==false)
    {
        document.getElementById("alertingPhone").innerHTML=temp;
    }
    if(y==true)
    {
        document.getElementById("alertingPhone").innerHTML=``;
    }
} // fe mosohkela eno b3d el click msh ha yconsole 7oda 
function currentDay(){
    let date = new Date()
    let days=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
    let months=["january","febrauary","March","April","May","June","July","August","September","October","November","December"]
    let day = date.getDay()
    let dayInMonth=date.getDate()
    let month = months[date.getMonth()]
    let Year = date.getFullYear()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let temp = [days[day],dayInMonth,month,Year,hour,minutes]
    console.log(month);
   // console.log(temp);
    return temp
}
let today = currentDay()[0]
let todayInMonth=currentDay()[1]
let currentMonth = currentDay()[2]
let currentYear= currentDay()[3]
let currentHour=currentDay()[4]
let currentMinutes=currentDay()[5]
document.getElementById('today').innerHTML=(""+today+" : "+todayInMonth+"")
document.getElementById('Month').innerHTML=currentMonth
document.getElementById('Year').innerHTML=currentYear
document.getElementById('Hour').innerHTML=currentHour
document.getElementById('Minutes').innerHTML=currentMinutes
