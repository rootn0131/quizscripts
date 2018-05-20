a = 1
function answering() {
  $(`#option_${questionArray[a++].answer}`).click()
  setTimeout(answering, 2000)
}
answering()