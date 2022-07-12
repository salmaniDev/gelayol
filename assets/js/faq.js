/////////////// FAQ 

let questions = document.querySelectorAll('.question')
questions.forEach((question) => {
  let btn = question.querySelector('.question_title')
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      item.classList.toggle('active');
      if (item !== question) {
        item.classList.remove('active')
      }
    })
  })
})