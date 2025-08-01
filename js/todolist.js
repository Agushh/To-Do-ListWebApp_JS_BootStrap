let text = document.getElementById("fname");
let list = document.getElementById("lista");

let ArrayOfActivities = new Array();

function submit()
{
    let stringText = text.value;

    ArrayOfActivities.push(stringText);

    let listElement = document.createElement("li");
    listElement.textContent = stringText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("btn", "btn-sm", "btn-danger", "ms-3");
    deleteButton.onclick = function deleteActivity()
    {
        ArrayOfActivities.splice(ArrayOfActivities.indexOf(stringText), 1);
        listElement.remove();
    }

    listElement.appendChild(deleteButton);
    list.appendChild(listElement);

    text.value = "";
    console.log(ArrayOfActivities);
}