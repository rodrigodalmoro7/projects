let inputTitle = document.querySelector("#inputField input");
let inputText = document.querySelector("#inputField textarea");
let buttonElement = document.querySelector("#inputField button");
let cardElement = document.querySelector("#scrapsField");

let cards = JSON.parse(localStorage.getItem("card_list")) || [];

function showCards() {
  cardElement.innerHTML = "";

  for (const item of cards) {
    let card = document.createElement("div");
    card.setAttribute("class", "card text-white bg-dark m-2");

    let cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");



    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardContent = document.createElement("p");
    cardContent.setAttribute("class", "card-text");

    let cardTitle = document.createTextNode(item.title);
    let cardText = document.createTextNode(item.text);

    let buttonDelete = document.createElement("div");
    let buttonEdit = document.createElement("div");


    buttonDelete.setAttribute("type", "button");
    buttonEdit.setAttribute("type", "button");


    buttonDelete.setAttribute("class", "btn btn-secondary");
    buttonEdit.setAttribute("class", "btn btn-secondary btn-edit");

    let position = cards.indexOf(item);


    buttonDelete.setAttribute("onclick", `deleteCard(${position})`);
    buttonEdit.setAttribute("onclick", `editCard(${position})`);



    let deleteLabel = document.createTextNode("Excluir");
    let editLabel = document.createTextNode("Editar");




    buttonDelete.appendChild(deleteLabel);
    buttonEdit.appendChild(editLabel);


    cardElement.appendChild(card);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(buttonDelete);
    card.appendChild(buttonEdit);

    cardBody.appendChild(cardContent);


    cardContent.appendChild(cardText);
    cardHeader.appendChild(cardTitle);



  }
}

showCards();

function createCard() {
  let titleText = inputTitle.value;
  let text = inputText.value;
  if (validaDados(titleText, text)) {
    let card = {
      title: titleText,
      text: text,
    };
    cards.push(card);
    inputTitle.value = "";
    inputText.value = "";

    showCards();
    saveInStorage();
  }
}
function validaDados(title, text) {
  if (title.length == 0) return alert(`Preencha todos os campos`);
  if (text.length == 0) return alert(`Preencha todos os campos`);
  return true;
}

buttonElement.onclick = createCard;

function deleteCard(position) {
  cards.splice(position, 1);

  showCards();


}

function editCard(position) {

  return <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Título do modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Texto do corpo do modal, é aqui.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar mudanças</button>
        </div>
      </div>
    </div>
  </div>

  // cards.splice(position, 1);
  //modal = {(head atual) + new info, (body atual) + new info}
  //btn cancel
  //btn ok










  showCards();


}

function saveInStorage() {
  localStorage.setItem("card_list", JSON.stringify(cards));
}
