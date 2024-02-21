const remBtn = document.querySelector('.btns__remove-text')
const addBtn = document.querySelector('.btns__add-btn')

const inputText = document.getElementById('text')
const inputTitle = document.querySelector('.title')

const postList = document.querySelector('.list')

remBtn.addEventListener('click', () => {
  inputText.value = ''
  inputTitle.value = ''
})

addBtn.addEventListener('click', () => {
  if(!inputTitle.value || !inputText.value) {
    alert('Заполните все поля ввода')
    return
  }

  const post = `
  <div class="post-wrapper">
    <div class="post" data-is-open="false">
      <textarea class="post-title text-field" cols="10" rows="1" disabled>${inputTitle.value}</textarea>
      <textarea class="post-text text-field" cols="5" rows="5" disabled>${inputText.value}</textarea>
    </div>
    <div class="post-btns">
      <button class="edit-btn" onclick="changeEditable()">Редактировать</button>
      <button class="remove-post-btn" onclick="removePost()">Удалить</button>
    </div>
  </div>
  `

  postList.insertAdjacentHTML('beforeend', post)
  inputText.value = ''
  inputTitle.value = ''
})

function removePost() {
  const post = event.target.closest('.post-wrapper')
  post.remove();
}

function cancleChanges(post, textTitle, textMain) {
  post.previousElementSibling.querySelector('.post-title').value = textTitle
  post.previousElementSibling.querySelector('.post-text').value = textMain
  console.log(post);
}

function changeBtnsText(post, textEdit, textCancle) {
  const saveBtn = post.querySelector('.edit-btn')
  const cancelBtn = post.querySelector('.remove-post-btn')

  saveBtn.textContent = textEdit
  cancelBtn.textContent = textCancle
}

function openEditText() {
  const target = event.target
  const textFields = target.closest('.post-wrapper').children[0]

  const title = textFields.querySelector('.post-title')
  const text = textFields.querySelector('.post-text')

  textFields.dataset.isOpen = 'true'

  title.removeAttribute('disabled')
  text.removeAttribute('disabled')

  return textFields.nextElementSibling
}

function saveNewText() {
  const target = event.target
  const textFields = target.closest('.post-wrapper').children[0]

  const title = textFields.querySelector('.post-title')
  const text = textFields.querySelector('.post-text')


  textFields.dataset.isOpen = 'false'

  title.setAttribute('disabled', true)
  text.setAttribute('disabled', true)

  return textFields.nextElementSibling
}

function changeEditable() {
  const target = event.target
  const textFields = target.closest('.post-wrapper').children[0]
  const status = textFields.dataset.isOpen
  
  const edit = openEditText()
  const save = saveNewText()

  const text = edit.previousElementSibling.querySelector('.post-text').value
  const title = edit.previousElementSibling.querySelector('.post-title').value

  const rmBtn = edit.querySelector('.remove-post-btn')

  if(status === 'false') {
    openEditText()
    changeBtnsText(edit, 'Сохранить', 'Отмена')
    rmBtn.onclick = function() { 
      cancleChanges(edit, title, text) 
    }
  } else {
    saveNewText()
    changeBtnsText(save, 'Редактировать', 'Удалить')
    rmBtn.onclick = removePost
  }
}
