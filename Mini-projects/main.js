// Minified !!!
function calculateBmi() { let e = document.getElementById("name").value, t = document.getElementById("weight"), n = document.getElementById("height"), o = document.getElementById("result"), r = document.getElementById("img"), s = parseFloat(t.value), l = parseFloat(n.value), a = (s / (l * l)).toFixed(2); a < 18.5 ? (o.innerHTML = `${e}'ning BMI javobi <span class="text-danger font-weight-bold"> ${a} </span> ga teng. Siz ozg'insiz!`, r.innerHTML = '<img src="https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg" alt="Photo" class="result_img">') : a >= 18.5 && a < 25 ? (o.innerHTML = `${e}'ning BMI javobi <span class="text-danger font-weight-bold"> ${a} </span> ga teng. Sizning vazningiz normal holda.`, r.innerHTML = ' <img src="https://thumbs.dreamstime.com/b/characterizing-male-silhouette-normal-weight-stage-body-mass-index-characterizing-male-silhouette-normal-weight-stage-160201788.jpg" alt="" class="result_img"></img>  ') : a > 24 && a <= 29.9 ? (o.innerHTML = `${e}'ning BMI javobi <span class="text-danger font-weight-bold"> ${a} </span> ga teng. Sizning og'irligingiz normal emas. Sport bilan shug'ullaning!`, r.innerHTML = ' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiPiSdne-wGcIWp32Amnswilyt4Av0g4wCog&usqp=CAU" alt="" class="result_img"> ') : a >= 30 ? (o.innerHTML = `${e}'ning BMI javobi <span class="text-danger font-weight-bold"> ${a} </span> ga teng. Siz juda semizsiz. Ko'proq sport bilan shug'ullanishni maslahat beramiz!`, r.innerHTML = ' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYDRONijJyiosIIub8zWixxJTfVzxSMDCYfw&usqp=CAU" alt="" class="result_img"> ') : (o.innerHTML = "So'ralgan malumotlarni to'g'ri kiriting!", r.innerHTML = '<img src="https://cdn2.vectorstock.com/i/1000x1000/59/56/404-error-emoticon-isolated-vector-24935956.jpg" alt="Photo" class="result_img"></img>') } let item = document.querySelectorAll(".list-group-item"), proUl = document.querySelector("#proUl"), proForm = document.querySelector("#proForm"), filter = document.querySelector("#filter"); proForm.addEventListener("submit", addItem), filter.addEventListener("keyup", filtering); let dels = document.querySelectorAll(".delete"); for (let e = 0; e < dels.length; e++)dels[e].addEventListener("click", removeItem); function removeItem(e) { if (e.target.classList.contains("delete")) { let t = document.querySelector("#info"), n = e.target.parentElement; setTimeout(() => { t.classList.add("del"); let e = n.firstChild.textContent; t.textContent = `${e} is deleted!`, setTimeout(() => { t.classList.remove("del") }, 1200), proUl.removeChild(n) }, 800) } } function filtering(e) { let t = e.target.value.toLowerCase().trim(), n = proUl.querySelectorAll("li"); Array.from(n).forEach(function (e) { -1 != e.firstChild.textContent.toLowerCase().indexOf(t) && t.length > 0 ? (e.classList.remove("no"), e.classList.add("has", "bg-primary")) : (e.classList.remove("has"), e.classList.add("no")) }) } function addItem(e) { let t, n; if (e.preventDefault(), t = document.querySelector("#proInp"), (n = document.createElement("li")).classList.add("list-group-item"), t.value.length > 0) { n.appendChild(document.createTextNode(t.value)); let e = document.createElement("button"); e.className = "btn btn-danger btn-sm float-right delete", e.appendChild(document.createTextNode("X")), n.appendChild(e), proUl.appendChild(n), e.addEventListener("click", removeItem) } } let time = document.getElementById("time"), greeting = document.getElementById("greeting"), focus = document.getElementById("focus"), nameHere = document.getElementById("nameHere"); function showTime() { let e = new Date, t = e.getHours(), n = e.getMinutes(), o = e.getSeconds(); const r = t < 18 ? '<i class="icsun ml-2"></i>' : '<i class="icmoon ml-3"></i>'; time.innerHTML = `${t}</span>:</span>${addZero(n)}<span>:</span>${addZero(o)}${r}`, setTimeout(showTime, 1e3) } function addZero(e) { return (parseInt(e, 10) < 10 ? "0" : "") + e } function setBg() { let e = (new Date).getHours(), t = document.querySelector(".time-fullscr"); e < 12 ? (t.classList.add("morning"), greeting.textContent = "Good Morning") : e < 18 ? (t.classList.add("afternoon"), greeting.textContent = "Good Afternoon", console.log("afternoon")) : (t.classList.add("night"), greeting.textContent = "Good Evening", console.log("night")) } function getName() { null === localStorage.getItem("name") ? nameHere.textContent = "[Enter Name]" : nameHere.textContent = localStorage.getItem("name") } function getFocus() { null === localStorage.getItem("focus") ? focus.textContent = "[Enter focus]" : focus.textContent = localStorage.getItem("focus") } function setName(e) { "keypress" === e.type ? 13 !== e.which && 13 !== e.keyCode || (localStorage.setItem("name", e.target.textContent), nameHere.blur()) : (console.log("blur"), localStorage.setItem("name", e.target.textContent)) } function setFocus(e) { "keypress" === e.type ? 13 !== e.which && 13 !== e.keyCode || (localStorage.setItem("focus", e.target.textContent), focus.blur()) : localStorage.setItem("focus", e.target.textContent) } function scrollTo(e) { window.scroll({ left: 0, top: e.offsetTop, behavior: "smooth" }) } nameHere.addEventListener("keypress", setName), nameHere.addEventListener("blur", setName), focus.addEventListener("keypress", setFocus), focus.addEventListener("blur", setFocus), getName(), getFocus(), showTime(), setBg(), document.querySelector(".arrow_1").addEventListener("click", () => { scrollTo(document.querySelector(".second-part")) }), document.querySelector(".arrow_2").addEventListener("click", () => { scrollTo(document.querySelector(".third")) }), document.querySelector(".arrow_3").addEventListener("click", () => { scrollTo(document.querySelector(".footer-part")) });

// function calculateBmi() {
//    let name = document.getElementById("name").value,
//       weightVal = document.getElementById("weight"),
//       heightVal = document.getElementById("height"),
//       result = document.getElementById("result"),
//       img = document.getElementById("img"),
//       weight = parseFloat(weightVal.value),
//       height = parseFloat(heightVal.value),
//       bmi = (weight / (height * height)).toFixed(2);
//    if (bmi < 18.5) {
//       result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Siz ozg'insiz!`;
//       img.innerHTML = `<img src="https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg" alt="Photo" class="result_img">`
//    } else if (bmi >= 18.5 && bmi < 25) {
//       result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Sizning vazningiz normal holda.`;
//       img.innerHTML = ` <img src="https://thumbs.dreamstime.com/b/characterizing-male-silhouette-normal-weight-stage-body-mass-index-characterizing-male-silhouette-normal-weight-stage-160201788.jpg" alt="" class="result_img"></img>  `
//    } else if (bmi > 24 && bmi <= 29.9) {
//       result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Sizning og'irligingiz normal emas. Sport bilan shug'ullaning!`;
//       img.innerHTML = ` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiPiSdne-wGcIWp32Amnswilyt4Av0g4wCog&usqp=CAU" alt="" class="result_img"> `
//    } else if (bmi >= 30) {
//       result.innerHTML = `${name}'ning BMI javobi <span class="text-danger font-weight-bold"> ${bmi} </span> ga teng. Siz juda semizsiz. Ko'proq sport bilan shug'ullanishni maslahat beramiz!`;
//       img.innerHTML = ` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYDRONijJyiosIIub8zWixxJTfVzxSMDCYfw&usqp=CAU" alt="" class="result_img"> `
//    }
//    else {
//       result.innerHTML = `So'ralgan malumotlarni to'g'ri kiriting!`;
//       img.innerHTML = `<img src="https://cdn2.vectorstock.com/i/1000x1000/59/56/404-error-emoticon-isolated-vector-24935956.jpg" alt="Photo" class="result_img"></img>`
//    }
// }
// let item = document.querySelectorAll('.list-group-item');
// let proUl = document.querySelector('#proUl');
// let proForm = document.querySelector('#proForm');
// let filter = document.querySelector('#filter');
// proForm.addEventListener('submit', addItem);
// filter.addEventListener('keyup', filtering);
// let dels = document.querySelectorAll('.delete')
// for (let i = 0; i < dels.length; i++) { dels[i].addEventListener('click', removeItem) }
// function removeItem(e) {
//    if (e.target.classList.contains('delete')) {
//       let info = document.querySelector('#info');
//       let removed = e.target.parentElement;
//       setTimeout(() => {
//          info.classList.add('del');
//          let delItem = removed.firstChild.textContent;
//          info.textContent = `${delItem} is deleted!`
//          setTimeout(() => {
//             info.classList.remove('del');
//          }, 1200); proUl.removeChild(removed);
//       }, 800)
//    }
// }
// function filtering(e) {
//    let text = e.target.value.toLowerCase().trim();
//    let items = proUl.querySelectorAll('li');
//    let arr = Array.from(items);
//    arr.forEach(function (item) {
//       let itemName = item.firstChild.textContent;
//       if (itemName.toLowerCase().indexOf(text) != -1 && text.length > 0) {
//          item.classList.remove('no')
//          item.classList.add('has', 'bg-primary')
//       } else {
//          item.classList.remove('has')
//          item.classList.add('no')
//       }
//    })
// };
// function addItem(e) {
//    let proInp, li;
//    e.preventDefault();
//    proInp = document.querySelector('#proInp');
//    li = document.createElement('li');
//    li.classList.add('list-group-item');
//    if (proInp.value.length > 0) {
//       li.appendChild(document.createTextNode(proInp.value));
//       let button = document.createElement('button');
//       button.className = 'btn btn-danger btn-sm float-right delete';
//       button.appendChild(document.createTextNode('X'))
//       li.appendChild(button)
//       proUl.appendChild(li);
//       button.addEventListener('click', removeItem);
//    }
// }
// // New Project
// // ---------------------------------------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------------------------------------------------------------------------------------------
// let time = document.getElementById('time'),
//    greeting = document.getElementById('greeting'),
//    focus = document.getElementById('focus'),
//    nameHere = document.getElementById('nameHere');
// function showTime() {
//    let today = new Date(),
//       hour = today.getHours(),
//       min = today.getMinutes(),
//       sec = today.getSeconds();
//    // Set AM PM
//    const apPm = hour < 18 ? '<i class="icsun ml-2"></i>' : '<i class="icmoon ml-3"></i>';
//    // 12 hr format
//    // hour = hour % 12 || 12;
//    time.innerHTML = `${hour}</span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${apPm}`
//    setTimeout(showTime, 1000);
// }
// function addZero(n) { return (parseInt(n, 10) < 10 ? '0' : '') + n; }
// function setBg() {
//    let today = new Date(),
//       hour = today.getHours(),
//       timeBg = document.querySelector('.time-fullscr');
//    if (hour < 12) {
//       // Morning
//       timeBg.classList.add('morning');
//       greeting.textContent = 'Good Morning';
//    } else if (hour < 18) {
//       // Afternoon
//       timeBg.classList.add('afternoon');
//       greeting.textContent = 'Good Afternoon';
//       console.log(`afternoon`);
//    } else {
//       // Night
//       timeBg.classList.add('night');
//       greeting.textContent = 'Good Evening';
//       console.log(`night`);
//    }
// }
// // !!! // Localstorage proces !!!
// nameHere.addEventListener('keypress', setName);
// nameHere.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
// focus.addEventListener('blur', setFocus);
// // Getting name and focus
// function getName() {
//    if (localStorage.getItem('name') === null) {
//       nameHere.textContent = '[Enter Name]';
//    } else { nameHere.textContent = localStorage.getItem('name'); }
// }
// function getFocus() {
//    if (localStorage.getItem('focus') === null) {
//       focus.textContent = '[Enter focus]';
//    }
//    else { focus.textContent = localStorage.getItem('focus'); }
// }
// getName();
// getFocus();
// // Save in localstorage name and focus 
// function setName(e) {
//    if (e.type === 'keypress') {
//       if (e.which === 13 || e.keyCode === 13) {
//          localStorage.setItem('name', e.target.textContent);
//          nameHere.blur();
//       }
//    } else {
//       console.log('blur');
//       localStorage.setItem('name', e.target.textContent);
//    }
// }
// function setFocus(e) {
//    if (e.type === 'keypress') {
//       // Make sure enter is pressed
//       if (e.which === 13 || e.keyCode === 13) {
//          localStorage.setItem('focus', e.target.textContent);
//          focus.blur();
//       }
//    } else {
//       localStorage.setItem('focus', e.target.textContent);
//    }
// }
// // RUN :)
// showTime();
// setBg();
// // Scroll animation
// function scrollTo(elem) {
//    window.scroll({
//       left: 0,
//       top: elem.offsetTop,
//       behavior: 'smooth'
//    });
// }
// document.querySelector('.arrow_1').addEventListener('click', () => {
//    scrollTo(document.querySelector('.second-part'));
// }); document.querySelector('.arrow_2').addEventListener('click', () => {
//    scrollTo(document.querySelector('.third'));
// }); document.querySelector('.arrow_3').addEventListener('click', () => {
//    scrollTo(document.querySelector('.footer-part'));});