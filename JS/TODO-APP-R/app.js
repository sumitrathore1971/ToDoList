
let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");


btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ol.appendChild(item);
    inp.value = "";
})


ol.addEventListener("click",function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
})

// let delbtns = document.querySelectorAll(".delete")
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click",function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }