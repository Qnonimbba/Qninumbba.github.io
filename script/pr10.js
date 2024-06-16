const Tovar_Ar = [["AnonimPC Gaming X48 v36","AnonimPC Gaming X49 v21"],["AnonimPC Gaming X49 v26"],["AnonimPC Gaming X39 v81","AnonimPC Gaming X66 v17","AnonimPC Gaming X66 v22"]];
const cina = [[25599,28999],[30499],[35999,37499,37999]];

function clearSelect(selectObject) {
    while (selectObject.length > 1)
        selectObject.remove(selectObject.length - 1);
}

function ShowTovar(categoryIndex, selectId) {
    var TOVARSelect = document.getElementById(selectId);
    if (categoryIndex <= 0) {
        TOVARSelect.style.visibility = 'hidden';
        return false;
    }

    clearSelect(TOVARSelect);
    TOVARSelect.style.visibility = 'visible';
    for (var i = 0; i < Tovar_Ar[categoryIndex - 1].length; i++) {
        var newItem = new Option();
        newItem.text = Tovar_Ar[categoryIndex - 1][i] + "  -  " + cina[categoryIndex - 1][i] + " грн.";
        TOVARSelect.add(newItem, i + 1);
    }
}

function Zamovlennya(selectId1, selectId2, surnameId, nameId, emailId, phoneId) {
    var surnameInput = document.getElementById(surnameId);
    var nameInput = document.getElementById(nameId);
    var emailInput = document.getElementById(emailId);
    var phoneInput = document.getElementById(phoneId);
    var str = surnameInput.value + " " +  nameInput.value + " | " + emailInput.value + " | " +  phoneInput.value;
    var S = 0;
    var TOVARSelect = document.getElementById(selectId2);
    var catSelect = document.getElementById(selectId1);
    var categoryIndex = catSelect.selectedIndex;
    str = str + "<br><br> Ви замовили товари: ";
    for (var i = 0; i < TOVARSelect.options.length; i++) {
        if (TOVARSelect.options[i].selected == true) {
            str = str + "<br>" + TOVARSelect.options[i].text;
            S = S + cina[categoryIndex - 1][i - 1];
        }
    }
    str = str + "<br><br> Загальна сума замовлення: " + S + " грн.";
    document.getElementById('textrez').innerHTML = str;
}
