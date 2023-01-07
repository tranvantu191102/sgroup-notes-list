const inputElement = document.querySelector(".input-add");
const btnAdd = document.querySelector(".btn__add");
let title = "";
let listNotes = [
  {
    id: 341321,
    title: "sdfsdfsdf",
  },
  {
    id: 35345345,
    title: "aaaafff",
  },
  {
    id: 35364567456,
    title: "jjkhkj",
  },
];
inputElement.addEventListener("change", (e) => {
  title = e.target.value;
});
btnAdd.onclick = () => {
  if (title) {
    const newNote = {
      id: Math.floor(Math.random() * 100000000),
      title,
    };
    listNotes.push(newNote);
    renderListNotes();
  } else {
    alert("Enter your note");
  }
};

function renderListNotes() {
  let html = "";
  listNotes.forEach((note) => {
    let newHTML = `
        <div class="card">
        <div class="card__header">
          <div></div>
          <div class="card__header__action">
            <div class="edit" onclick="handleEdit(${note.id})">
              <i class="bx bxs-edit"></i>
            </div>
            <div class="delete" onclick="handleDelete(${note.id})">
              <i class="bx bxs-trash"></i>
            </div>
          </div>
        </div>
        <div class="card__content">
          <p>${note.title}</p>
        </div>
      </div>
        `;
    html += newHTML;
  });

  document.querySelector(".notes-list").innerHTML = html;
}
renderListNotes();

function handleDelete(id) {
  listNotes = listNotes.filter((note) => note.id !== id);
  renderListNotes();
}

function handleEdit(id) {
  const note = listNotes.filter((note) => note.id === id);
  document.querySelector(".header__left__edit").classList.add("active");

  const inputEdit = document.querySelector(".input-edit");
  inputEdit.value = note[0].title;
  let newTitle;
  inputEdit.onchange = (e) => {
    newTitle = e.target.value;
    note[0].title = newTitle;
  };

  listNotes = listNotes.filter((note) => note.id !== id);
  listNotes.push(note[0]);

  document.querySelector(".btn__save").onclick = () => {
    console.log(listNotes);
    renderListNotes();
    document.querySelector(".header__left__edit").classList.remove("active");
  };
}
