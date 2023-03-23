function addnewwefield() {
    // console.log("adding new button");
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addneweqfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "Enter here");

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode, eqAddButtonOb);
}