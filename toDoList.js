// start variables 
let theInput= document.querySelector(".add-task input");
let theAddButton=document.querySelector(".add-task .plus");
let tasksContainer=document.querySelector(".tasks-content");
let noTaskMsg =document.querySelector(".no-tasks-message");
let tasksCount =document.querySelector(".tasks-count span");
let tasksCompleted =document.querySelector(".task-completed span");
let complete=0;
window.onload=()=>{
    theInput.focus();
}

theAddButton.onclick=()=>{
    // check if the feild is empty
    if(theInput.value.trim()==="") swal("the feild is empty","","info");
    // else if(check(theInput.value)){ 
    else if(check(theInput.value.trim())) swal("the task is alredy exsist","","info");
    else{
        // remove the massage
        noTaskMsg.remove();
        console.log(theInput.value);
        // add new task
        add(theInput.value.trim());
    }
    // delet the value form the inpur feild
    theInput.value="";
}

function add(mm){
    // to add tasks
    // create span 
    let box=document.createElement("span");
    box.classList.add("task-box");
    // to add the feild text
    let text=document.createElement("span");
    text.classList.add("text");
    text.innerText=mm;
    // add text button to span
    box.append(text);
    // crete delete button
    let del=document.createElement("span");
    del.classList.add("delete");
    del.textContent="delete";
    // add delete button to span
    box.append(del)
    tasksContainer.append(box);
    // check();
}

function check(mm){
    // create array with tasks
    let ar=document.querySelectorAll(".task-box .text");
    // check the value of tasks is not exsist
    for(i=0;i<ar.length;i++){
        if(mm==ar[i].textContent){
            return true;
        }
    }
    // console.log(one.textContent +" "+"inside foreach");
    // return mm==one.textContent ? true:false;
    // })
    // pol.typeof()
    // console.log(pol+" "+"pol");
    // console.log(ar + "ar");
    
}

// let ar=document.querySelectorAll(".task-box .text");
// console.log(ar);

document.addEventListener("click",(e)=>{
// if click on delete button
    if(e.target.className=="delete") {
        console.log(e.target.parentNode);
        // remove the task
        e.target.parentNode.remove();
    };
    // if click on delete task box
    if(e.target.className=="task-box") {
        console.log(e.target);
        // add finished class
        e.target.firstChild.classList.toggle("finished");
    };
    // if click delete all button
    if(e.target.className=="delete-all") {
        // delete all tasks
        for(let i=0 ; i!=tasksContainer.children.length ;){
            tasksContainer.children[i].remove();
        }
    };
    // if click finish all button
    if(e.target.className=="finish-all") {
        // add finished class
        tasksContainer.childNodes.forEach((el)=>{
            // decieded required boxes
            if(el.className=="task-box"){
                el.firstChild.classList.add("finished");
            }
        })
    };

    // number of tasks exsist in the box
    tasksCount.textContent =tasksContainer.children.length;
    
    tasksCompleted.innerHTML=document.querySelectorAll(".tasks-content .task-box .finished").length;
    
    // tasksContainer.childNodes.forEach((el)=>{s
    //     if(el.className=="task-box"){
    //         if(el.firstChild.contains=="finished"){
    //             complete++;
    //             tasksCompleted.textContent=complete;
    //         }
    //     }
    // })
})