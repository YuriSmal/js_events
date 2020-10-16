// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних").
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом,
// який тепер ви зможете відредагувати. 
// Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

// let span = document.createElement("span");
// span.classList.add("initial");
// span.innerHTML = "Очікую на ввід даних";
// document.body.appendChild(span);

// let input = document.createElement("input");
// input.setAttribute("value", "Очікую на ввід даних");

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyA' && event.altKey) {
//         span.style.display = "none";
//         document.body.appendChild(input);
//     }
// })

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyS' && event.shiftKey) {
//         localStorage.setItem(input, input.value);
//         input.style.display = "none";
//         span.innerText = localStorage.getItem(input);
//         span.style.display = "inline";
//         console.log(span);

//     } 
// })

//  2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px,
//  виводити лог ми використовуємо мобільну версію, 
//  при більшому розмірі сторінки - що ми використовуємо десктоп версію.

// window.addEventListener('resize', function() {
//     let windowWidth = document.documentElement.clientWidth;
//     if (windowWidth < 600) {
//         console.log("Вмикаємо мобільну версію!");
//     } else {
//         console.log("Використовуємо десктопну версію");
//     }
// })

//  3. Повісити івент на інпут,
//  при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

// let input = document.createElement("input");
// document.body.appendChild(input);

// input.addEventListener("blur", function(event) {
//     if (event.target.value) {
//         alert(event.target.value);
//     }
// });

//  4. При натисканні на кнопку альт+ о виводити модальне вікно на екран,
//   альт + с - закривати. 

// let modal = document.getElementById("modal-window");
// let hint = document.getElementById("hint");

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyO' && event.altKey) {
//         modal.classList.add("active");
//         hint.innerHTML = "Now press 'Alt+C' to close modal window"; 
//     };
// });

// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyQ' && event.altKey) {
//         modal.classList.remove("active");
//         hint.innerHTML = "Press 'Alt+O' to open modal window";
//     };
// });

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном.
//  по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента).
//  В модальному вікні має бути текст та кнопка закрити.

// ДЛЯ РОБОТИ ПОТРІБНО РОЗКОМЕНТУВАТИ "FOR TASK 5" В INDEX.HTML

// let modal = document.getElementById("modal-window");

// let video = docu

// function toggleModal() {
//     modal.classList.toggle("active");
//     document.getElementById("iframe").src = "https://www.youtube.com/embed/0Dik2IjKois?list=LL";
// }

// function closeModal() {
    
//     modal.classList.remove("active");
//     document.getElementById("iframe").src = " ";   
// }