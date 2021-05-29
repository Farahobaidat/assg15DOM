let main=document.querySelector("main");
let h1=main.firstElementChild.innerHTML="Main Contact Here";
let colorparagraph=main.querySelectorAll("p");
for(let i =0;i<3;i++){
colorparagraph[i].style.color="purple";
}
let titlecomment=document.querySelector("aside");
titlecomment.firstElementChild.innerHTML="<h4>Title 1</h4> <p>Comment 1 </p>";
titlecomment.firstElementChild.style.color="red";
titlecomment.lastElementChild.innerHTML="<h4>Title 3</h4> <p>Comment 3 </p>";
titlecomment.lastElementChild.style.color="green";
let lastchild=titlecomment.lastElementChild;
lastchild.previousElementSibling.innerHTML="<h4>Title 2</h4> <p>Comment 2 </p>";
lastchild.previousElementSibling.style.color="blue";
 let links=document.querySelector("nav");
 links.firstElementChild.insertAdjacentHTML("beforebegin",'<a href="#">Link 1</a>');
 links.lastElementChild.insertAdjacentHTML("afterend",'<a href="#">Link 7</a>');
 links.children[2].insertAdjacentHTML("afterend",'<a href="#">Link 4</a>');
 