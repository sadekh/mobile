
function ajouterTache() {
let nouvelleTache = '<li>' +tache . value + '</li>';
taskList.innerHTML += nouvelleTache;
$(taskList).listview('refresh');
}

function reinitialiser() {
    taskList.innerHTML = '';
}