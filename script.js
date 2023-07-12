let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

read();
btn.addEventListener("click", () => {
  let obj = {
    name: input1.value,
    lastName: input2.value,
    image: input3.value,
  };

  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.push(obj);
  localStorage.setItem("person", JSON.stringify(data));
  read();
});

function read() {
  list.innerHTML = ""
  let newData = JSON.parse(localStorage.getItem("person")) || [];
  newData.forEach((el, index) => {
    let infoDiv = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    let imgDiv = document.createElement("div");
    let textDiv = document.createElement("div");
    let btnDel = document.createElement("button");
    let btnDiv = document.createElement("div");

    infoDiv.classList.add("info");
    p1.classList.add("p1");
    p2.classList.add("p2");
    img.classList.add("image");
    imgDiv.classList.add("imgDiv");
    textDiv.classList.add("textDiv");

    p1.innerText = `Name: ${el.name}`;
    p2.innerText = `LastName: ${el.lastName}`;
    btnDel.classList.add("delBtn");
    btnDel.innerText = "Delete";
    img.src = el.image;
    imgDiv.append(img);
    textDiv.append(p1);
    textDiv.append(p2);
    infoDiv.append(imgDiv);
    infoDiv.append(textDiv);
    btnDiv.append(btnDel);
    infoDiv.append(btnDiv);
    list.append(infoDiv);

    btnDel.addEventListener("click", () => {
      del(index);
    });
  });
}

function del(index) {
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.splice(index, 1);
  localStorage.setItem("person", JSON.stringify(data));
  read();
}













// btn.addEventListener("click", () => {
//   if (!input1.value || !input2.value) {
//     alert("заполните поле!!!");
//     return;
//   }
//   list.innerHTML += `
//   <div class="main_list">
//   <p>${input1.value[0].toUpperCase() + input1.value.slice(1).toLowerCase()}</p>
//   <p>${input2.value[0].toUpperCase() + input2.value.slice(1).toLowerCase()}</p>
//             <button class="del_btn">delete</button>
//             </div>
//     `;
//   input1.value = "";
//   input2.value = "";
// });

// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del_btn")) {
//     e.target.parentNode.remove();
//   }
// });
