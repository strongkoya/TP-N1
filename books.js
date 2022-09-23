let books = [
    { id: 1, titre: 'titre 1', auteur: 'auteur 1', prix: 40.5 },
    { id: 2, titre: 'titre 2', auteur: 'auteur 2', prix: 65.5 },
    { id: 3, titre: 'titre 3', auteur: 'auteur 3', prix: 80.0 }
]

var identifiant = books.length;
var disabled = "";//si on est en train de modifier un livre, la suppression doit etre suspendue
function showBookslist() {
    let lignes = "";
    books.forEach(
        book => {
            lignes += "<tr>";
            lignes += "<td>" + book.id + "</td>";
            lignes += `<td>${book.titre} </td>`;
            lignes += `<td>${book.auteur} </td>`;
            lignes += `<td>${book.prix} </td>`;
            lignes += `<td scope="col"> <button class="btn btn-primary" onclick="editerLivre(${book.id})">Editer</button></td>`;
            lignes += `<td scope="col"> <button class="btn btn-danger" onclick="supprimerLivre(${book.id})" ` + disabled + `>Supprimer</button></td>`;
            lignes += "</tr>";
        }
    )

    document.querySelector("tbody").innerHTML = lignes;
}
function ajouterLivre() {
    let formulaireAjout = `<h1>Ajouter un livre</h1>
    <label class="form-label" >Titre</label>
    <input class="form-control" type="text" id="titre" name="titre" ></input>
    <label class="form-label" >Auteur</label>
    <input class="form-control" type="text" id="auteur" name="auteur" ></input>
    <label class="form-label" >Prix</label>
    <input class="form-control" type="text" id="prix" name="prix" ></input>
    <button class="btn btn-primary" onclick="validerLivre()">Valider</button>`;
    document.querySelector(`#divFormulaire`).innerHTML = formulaireAjout;
    //document.getElementById("ajout").style.color = "red";
}
function validerLivre() {

    identifiant++;
    let id = books.length;
    books[id] = { id: identifiant, titre: document.getElementById("titre").value, auteur: document.getElementById("auteur").value, prix: document.getElementById("prix").value };
    //ou on peut utiliser la fonction push() pour ajouter un book à la fin du tableau
    let formulaireAjout = "";
    //console.log(books.length);
    showBookslist();
    //console.log(books[id].titre);

    document.querySelector(`#divFormulaire`).innerHTML = formulaireAjout;

}
function supprimerLivre(int) {

    for (i = 0; i < books.length; i++) {
        if (books[i].id == int) {


            if (confirm("Etes-vous sur de vouloir supprimer le livre?") == true) {
                books.splice(i, 1);
                showBookslist();
            }
        } else {
            showBookslist();
        }

    }



}
function editerLivre(int) {

    for (i = 0; i < books.length; i++) {
        if (books[i].id == int) {
            //books.splice(i,1);
            let formulaireAjout = `<h1>Editer le livre : ${books[i].titre}</h1>
            <label class="form-label" >Titre</label>
            <input class="form-control" type="text" id="titre" name="titre" placeholder="${books[i].titre}" value="${books[i].titre}"></input>
            <label class="form-label" >Auteur</label>
            <input class="form-control" type="text" id="auteur" name="auteur" placeholder="${books[i].auteur}" value="${books[i].auteur}"></input>
            <label class="form-label" >Prix</label>
            <input class="form-control" type="text" id="prix" name="prix" placeholder="${books[i].prix}" value="${books[i].prix}"></input>
            <button class="btn btn-primary" onclick="modifierLivre(`+ i + `)">Valider</button>`;
            document.querySelector(`#divFormulaire`).innerHTML = formulaireAjout;
            disabled = "disabled"

            showBookslist();
        }
    }


}
function modifierLivre(int) {
    /* console.log("identifiant ="+identifiant);
     identifiant++;
     let id =books.length;*/
    books[int] = { id: books[int].id, titre: document.getElementById("titre").value, auteur: document.getElementById("auteur").value, prix: document.getElementById("prix").value };
    //ou on peut utiliser la fonction push() pour ajouter un book à la fin du tableau
    let formulaireAjout = "";
    //console.log(books.length);
    disabled = "";
    showBookslist();
    //console.log(books[id].titre);
    document.querySelector(`#divFormulaire`).innerHTML = formulaireAjout;

}


window.addEventListener("load", showBookslist); //showBookslist   : callBack