function openNav() {
  document.getElementById("sortable-list").style.width = "200px";
  document.getElementById("sortable-list").style.display = "block";
  document.getElementById("open_btn").style.display = "none";
  document.getElementById("close_btn").style.display = "block";
}

function closeNav() {
  document.getElementById("sortable-list").style.width = "0";
  document.getElementById("mySidenav").style.marginLeft= "0";
  document.getElementById("close_btn").style.display = "none";
  document.getElementById("open_btn").style.display = "block";
}




/*add*
function appendNode() {
let parent = document.getElementById("myList1");
  // 아이디가 "list"인 요소를 선택함.
let newItem = document.getElementById("newItem");
// 아이디가 "item"인 요소를 선택함.
parent.appendChild(newItem);
// 해당 요소의 맨 마지막 자식 노드로 추가함.
}
function appendNode2() {
let parent2 = document.getElementById("myList2");
let newItem2 = document.getElementById("newItem");

parent2.appendChild(newItem2);

}
/
/*
function myFunction() {
const node = document.getElementById("myList2").lastElementChild;
document.getElementById("myList1").appendChild(node);
}
function myFunction2() {
const node2 = document.getElementById("myList1").lastElementChild;
document.getElementById("myList2").appendChild(node2);
}
*/
