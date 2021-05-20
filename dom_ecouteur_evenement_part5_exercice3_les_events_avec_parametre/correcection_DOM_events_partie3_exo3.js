//1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

//2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

//3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

//Méthode Alexis

// let allLi = document.querySelectorAll('li');
// console.log(allLi)
// let arr = Array.from(allLi);
// console.log(arr)

// let button = document.querySelectorAll('input')[2]

// let liIndexA, liIndexB, inputA, inputB,temp;
// button.addEventListener('click', () => {
//     arr.forEach(element => {

//         inputA = document.querySelector('#li-one').value;
//         inputB = document.querySelector('#li-two').value;
//         if (element.innerHTML == inputA) {
//             liIndexA = arr.indexOf(element);
//             temp = element.innerHTML
//         }
//     })
//     arr.forEach(element => {
//         if (element.innerHTML == inputB) {
//             liIndexB = arr.indexOf(element)
//         }
//     })
//     console.log(liIndexA);
//     console.log(liIndexB);
//     console.log(arr[liIndexA].innerHTML)
//     console.log(arr[liIndexB].innerHTML)
//     console.log(temp)
//     //[arr[liIndexA].innerHTML, arr[liIndexB].innerHTML] = [arr[liIndexB].innerHTML, temp]

// })

//Methode Ilyas

// let lesLi = Array.from(document.querySelector('ul').children);

// function invertMe(inputX, inputY) {
//     let x;
//     let y;
//     let index1;
//     let index2;
//     lesLi.forEach(element => {
//         let test = element.innerHTML == inputX;
//         if (test === true) {
//             x = element.innerHTML;
//             index1 = lesLi.indexOf(element);
//         }
//         let test2 = element.innerHTML == inputY;
//         if (test2 === true) {
//             y = element.innerHTML;
//             index2 = lesLi.indexOf(element);
//         }
//     });
//     lesLi[index1].innerHTML = y;
//     lesLi[index2].innerHTML = x;

// }
// let btn = document.querySelectorAll('input')[2];
// let input1;
// let input2;
// btn.addEventListener('click', () => {
//     input1 = document.querySelector('#li-one').value;
//     input2 = document.querySelector('#li-two').value;
//     invertMe(input1, input2);
// });

//Methode MC Mitsu

let liArr = Array.from(document.querySelector('ul').children);
let btn = document.querySelectorAll('input')[2];
let input1;
let input2;
let counter;

function inversion(para1, para2) {
    liArr.forEach((element, i) => {
        if (element.innerHTML == para1) {
            element.innerHTML = para2;
            counter = i;
        }
    });
    liArr.forEach((element, i) => {
        if (element.innerHTML == para2 && counter != i) {
            element.innerHTML = para1;
        }
    });
}

btn.addEventListener('click', () => {
    input1 = document.querySelector('#li-one').value;
    input2 = document.querySelector('#li-two').value;
    inversion(input1, input2);
})