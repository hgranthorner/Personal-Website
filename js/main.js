function changeVisibility(subj) {
  hideAllDynamicContent()
  let subject = document.getElementById(subj)
  subject.style.fontSize = 'medium'
}

function hideAllDynamicContent() {
  let ids = []
  let children = document.getElementById('hiddenDiv').children
  for (let i = 0; i < children.length; i++) {
    children[i].style.fontSize = '0'
  }
}
