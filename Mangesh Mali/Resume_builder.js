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


// Generating CV
function GenerateCV()
{
    // console.log("Generating cv");
    let name1=document.getElementById("name1").value;
    let namet1=document.getElementById("namet1").innerHTML=name1;
    document.getElementById("namet2").innerHTML=name1;

    let addressfield=document.getElementById("addressfield").value;
    let addresst=document.getElementById("addresst").innerHTML=addressfield;

    let contactfield=document.getElementById("contactfield").value;
    let contactt1=document.getElementById("contactt1").innerHTML=contactfield;

    let fbt=document.getElementById("fbt").innerHTML=fbfield=document.getElementById("fbfield").value;

    let instat=document.getElementById("instat").innerHTML=document.getElementById("instafield").value;

    let linkedint=document.getElementById("linkedint").innerHTML=document.getElementById("linkedfield").value;

    let objectivet=document.getElementById("objectivet").innerHTML=document.getElementById("objectfield").value;

    //we

    let wes=document.getElementsByClassName("weField");
    let str1="";
    for(let we of wes)
    {
        str1=str1+`<li> ${we.value} </li>`;
    }
    document.getElementById("wet").innerHTML=str1;

    let eqs=document.getElementsByClassName("eqField");
    let str2="";
    for(let eq of eqs)
    {
        str2=str2+`<li> ${eq.value} </li>`;
    }
    document.getElementById("eqt").innerHTML=str2;


    //code for setting image 
    let file=document.getElementById("img-field").files[0];
    console.log(file);

    let reader=new FileReader()
    reader.readAsDataURL(file);

    console.log(reader.result);
    //set the image to template 
    reader.onloadend=function()
    {
        document.getElementById("imgtemplate").src=reader.result;

    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}


//Print CV
function PrintCV()
{
    window.print();
}
