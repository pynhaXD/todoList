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
      <button class="remove-post-btn" onclick="cancleChanges()">Удалить</button>
    </div>
  </div>
  `

  postList.innerHTML += post
})

function removePost() {
  const target = event.target
  const post = target.closest('.post-wrapper')

  post.remove();
}

function changeBtnsText(post, textEdit, textCancle) {
  const saveBtn = post.querySelector('.edit-btn')
  const cancelBtn = post.querySelector('.remove-post-btn')

  saveBtn.textContent = textEdit
  cancelBtn.textContent = textCancle
}

function openEditText() {
  const target = event.target
  const post = target.closest('.post-wrapper').children[0]

  const title = post.querySelector('.post-title')
  const text = post.querySelector('.post-text')

  post.dataset.isOpen = 'true'

  title.removeAttribute('disabled')
  text.removeAttribute('disabled')

  return post.nextElementSibling
}

function saveNewText() {
  const target = event.target
  const post = target.closest('.post-wrapper').children[0]

  const title = post.querySelector('.post-title')
  const text = post.querySelector('.post-text')


  post.dataset.isOpen = 'false'

  title.setAttribute('disabled', true)
  text.setAttribute('disabled', true)

  return post.nextElementSibling
}

function changeEditable() {
  const target = event.target
  const post = target.closest('.post-wrapper').children[0]
  const status = post.dataset.isOpen

  const edit = openEditText()
  const save = saveNewText()

  if(status === 'false') {
    openEditText()
    changeBtnsText(edit, 'Сохранить', 'Отмена')
  } else {
    saveNewText()
    changeBtnsText(save, 'Редактировать', 'Удалить')
  }

}