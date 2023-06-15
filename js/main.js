let btnDown=Array.from(document.querySelectorAll(".btnDown"));
let dropDown=document.querySelector(".sidebar .nav-item .drop-down");


btnDown.forEach((el)=>{
    el.addEventListener("click",()=>{
        el.classList.toggle("d-block");
    })
})

// bars Click Small Screen
let bars =document.querySelector(".nav .navbars .bars");
let navside =document.querySelector(".sidebar .navside");
let logo =document.querySelector(".nav .logo");
let dwonArraow =Array.from(document.querySelectorAll(".nav-item  .dwon-arraow"));
let a =Array.from(document.querySelectorAll(".sidebar  .nav-item a"));
let span =Array.from(document.querySelectorAll(".sidebar  .nav-item a span"));
let imgMini=document.querySelector(".logo .logo-mini");
let imgBig=document.querySelector(".logo .logo-big");
let instedDrop=Array.from(document.querySelectorAll(".navside .nav-item .drop-down"));


bars.onclick = function(){
    let min1200=window.matchMedia("(min-width:1200px)");
    if(min1200.matches){
        navside.classList.toggle("small");
        logo.classList.toggle("small");
        if(logo.classList.contains("small")){
            imgMini.classList.toggle("d-block");
            imgBig.classList.toggle("d-none");
    
        }else{
            imgMini.classList.toggle("d-block");
            imgBig.classList.toggle("d-none");
        }
        span.forEach((ele)=>{
            ele.classList.toggle("d-none");
        })
        dwonArraow.forEach((ele)=>{
            ele.classList.toggle("d-none");
        })
    }

    
}

let max991=window.matchMedia("(max-width:991px)");
if(max991.matches){
    navside.classList.add("small");
    span.forEach((ele)=>{
        ele.classList.add("d-none");
    })
    dwonArraow.forEach((ele)=>{
        ele.classList.add("d-none");
    })
    instedDrop.forEach((ele)=>{
        ele.classList.add("d-none");
    })
    a.forEach((ele)=>{
        ele.style.padding="20px";
    })
}

// Start Envelop
let envelop=document.querySelector(".envelop");
let envelopBox=document.querySelector(".envelope-box");
envelop.onclick=function(){
    envelopBox.classList.toggle("d-block");
}
// window.onclick=function(e){
//     console.log();
// }

// Start Bell
let bell=document.querySelector(".bell");
let bellBox=document.querySelector(".bell-box");
bell.onclick=function(){
    bellBox.classList.toggle("d-block");
}

// window.onclick=function(e){
    
// }
// Start Bell
let info=document.querySelector(".info");
let infoBox=document.querySelector(".info-box");
info.onclick=function(){
    infoBox.classList.toggle("d-block");
}

// window.onclick=function(e){
//     if(e.target.className != "fa-solid fa-caret-down dwon-arraow"){
//         infoBox.classList.remove("d-block");
        
//     }
//     else if(e.target.className != "fa-solid fa-bell"){
//         bellBox.classList.remove("d-block");
        
//     }
//     else if(e.target != "fa-solid fa-envelope"){
//         envelopBox.classList.remove("d-block");
        
//     }
// }



// Start Table
const addProductsBtn=document.querySelector(".add-products");
const createTable=document.querySelector(".pop-up");
const closeIcon=document.querySelector(".pop-up i");
addProductsBtn.onclick=function(){
    btnCreate.innerHTML="Create";
    mood="create";
    createTable.classList.remove("d-none");
    getName.focus();
}
closeIcon.onclick=function(){
    createTable.classList.add("d-none");
}


const getName=document.querySelector(".pop-up .name");
const getSurName=document.querySelector(".pop-up .surname");
const getPhoneNum=document.querySelector(".pop-up .phonenum");
const getEmail=document.querySelector(".pop-up .email");
const getTotal=document.querySelector(".pop-up .total");
const btnCreate=document.querySelector(".pop-up .crea");
const tBody=document.querySelector("tbody");
let mood="create";
let holdId;

var arr;
if (localStorage.getItem("item") != null) {
    arr=JSON.parse(localStorage.getItem("item"))
    creteItemTable();
}
else{
    arr=[];
}
btnCreate.onclick=function(){
    let obj={
        "name":getName.value,
        "surname":getSurName.value,
        "phone":getPhoneNum.value,
        "email":getEmail.value,
        "total":getTotal.value
    }
    if(mood == "update"){
        arr[holdId].name = getName.value;
        arr[holdId].surname = getSurName.value;
        arr[holdId].phone = getPhoneNum.value;
        arr[holdId].email = getEmail.value;
        arr[holdId].total = getTotal.value;
        localStorage.setItem("item",JSON.stringify(arr));
        mood= "create";
        btnCreate.parentElement.classList.add("d-none");
        creteItemTable();
    }else{
        arr.push(obj);
        localStorage.setItem("item",JSON.stringify(arr));
        creteItemTable();
        clearInputTable();
    }
    
}

creteItemTable()
function creteItemTable(){
    let table='';
    for(let i=0 ;i <arr.length;i++){
        table +=`
        <tr class=" text-center">
        <td>${arr[i].name}</td>
        <td>${arr[i].surname}</td>
        <td>${arr[i].phone}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].total}</td>
        <td><button class="upd" onclick="updateThis(${i})">update</button></td>
        <td><button class="del" onclick="removeThis(${i})">delete</button></td>
    </tr>
        `

    }
    tBody.innerHTML=table;
}

function clearInputTable(){
    getName.value="";
    getSurName.value="";
    getPhoneNum.value="";
    getEmail.value="";
    getTotal.value="";
}


function removeThis(id){
    arr.splice(id,1);
    localStorage.setItem("item",JSON.stringify(arr));
    creteItemTable();

}

function updateThis(id){
    createTable.classList.remove("d-none");
    getName.value=arr[id].name;
    getSurName.value=arr[id].surname;
    getPhoneNum.value=arr[id].phone;
    getEmail.value=arr[id].email;
    getTotal.value=arr[id].total;
    mood="update";
    holdId=id;
    btnCreate.innerHTML="Update";

}


let moodSearch="ByName";
let searchInput=document.querySelector(".search-input");
function changeMood() {
    let clickeMood=document.getElementById('greet').value;
    if( clickeMood == "ByName"){
        moodSearch="ByName";
    }else{
        moodSearch="ByEmail";
    }
    searchInput.placeholder=moodSearch;
    searchInput.focus();

} 

function searchTable(text) {
        table='';
    for (let i = 0; i < arr.length; i++) {
        if (moodSearch == "ByName") {
            if (arr[i].name.includes(text.toLowerCase())) {
                table +=`
                <tr class="text-center">
                    <td>${arr[i].name}</td>
                    <td>${arr[i].surname}</td>
                    <td>${arr[i].phone}</td>
                    <td>${arr[i].email}</td>
                    <td>${arr[i].total}</td>
                    <td><button class="upd" onclick="updateThis(${i})">update</button></td>
                    <td><button class="del" onclick="removeThis(${i})">delete</button></td>
                </tr>
                `;
            }
            
        }else{
            if (arr[i].email.includes(text.toLowerCase())) {
                table +=`
                <tr class="text-center">
                    <td>${arr[i].name}</td>
                    <td>${arr[i].surname}</td>
                    <td>${arr[i].phone}</td>
                    <td>${arr[i].email}</td>
                    <td>${arr[i].total}</td>
                    <td><button class="upd" onclick="updateThis(${i})">update</button></td>
                    <td><button class="del" onclick="removeThis(${i})">delete</button></td>
                </tr>
                `;
            }
        }
        
    }
    tBody.innerHTML=table;
}



// Start Slides
const allImgSliders=Array.from(document.querySelectorAll(".img-sliders .holder img"));
const allImgSlidersLength=allImgSliders.length;
const imgPre=document.querySelector(".img-sliders .prev");
const imgNext=document.querySelector(".img-sliders .next");
const ulImgParent=document.querySelector(".img-sliders");
let imgSlidersCureent=1;

imgPre.onclick=function(){
    if (imgSlidersCureent == 1) {
        return false;
    }else{
        imgSlidersCureent -- ;
        createrImgSlider()
    }
}
imgNext.onclick=function(){
    if (imgSlidersCureent == allImgSlidersLength) {
        return false;
    }else{
        imgSlidersCureent ++ ;
        createrImgSlider()
    }
}


const ulImg=document.createElement("ul");
for (let i = 1; i <= allImgSlidersLength; i++) {
    const liImg=document.createElement("li");
    liImg.innerHTML=i;
    liImg.dataset.number=i;
    if(liImg.dataset.number == 1){
            liImg.classList.add("active");
    }
    
    ulImg.appendChild(liImg);
}

ulImgParent.appendChild(ulImg)
const getLiImg=Array.from(document.querySelectorAll(".img-sliders ul li"));


getLiImg.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        imgSlidersCureent=e.target.dataset.number;
        createrImgSlider();
    })
})

function createrImgSlider(){
    removeLiandImgActive();
    allImgSliders[imgSlidersCureent - 1].classList.add("op-1");
    getLiImg[imgSlidersCureent - 1].classList.add("active");

    if (imgSlidersCureent == 1) {
        imgPre.classList.add("prevent");
    }
    else{
        imgPre.classList.remove("prevent");

    }
    if (imgSlidersCureent == allImgSlidersLength) {
        imgNext.classList.add("prevent");
    }
    else{
        imgNext.classList.remove("prevent");

    }
    function removeLiandImgActive(){
        allImgSliders.forEach((e)=>{
            e.classList.remove("op-1");
        });
        getLiImg.forEach((e)=>{
            e.classList.remove("active");
        });
    }
}