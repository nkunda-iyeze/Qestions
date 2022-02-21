//using selectors inside the element
const questions = document.querySelectorAll(`.question`);

questions.forEach(function (question) {
    // console.log(question);
    const btn = question.querySelector(`.question-btn`);
    // console.log(btn)
    btn.addEventListener(`click`, function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove(`show-text`);
            }
        });
        question.classList.toggle(`show-text`);
    })
})





// traversing the dom

// const btns = document.querySelectorAll(`.question-btn`);
// btns.forEach(function (btn) {
//     btn.addEventListener(`click`, function (event) {
//         // variable question is holding parent Element of event btn; 
//         const question = event.currentTarget.parentElement.parentElement;
//         // now we add toggle method of classList ;
//         question.classList.toggle(`show-text`);
//     })
// })