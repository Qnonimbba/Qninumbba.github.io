function List() {
            let d = document;
            let form = d.forms[`form1`];
            let surname = form.elements.my1.value;
            let name = form.elements.my2.value;
            let phone = form.elements.my3.value;
            let gmail = form.elements.my4.value;
            let e11 = form.elements.lan;
            let e12 = form.elements.paymentMethod;
            let selectedProducts = "";
            let totalPrice = 0; 
            for (let i = 0; i < e11.length; i++) {
                if (e11[i].checked) {
                    selectedProducts += e11[i].nextSibling.nodeValue.trim() + "<br>";
                    totalPrice += parseInt(e11[i].value);
                }
            }
            let selectedPaymentMethod = "";
            for (let i = 0; i < e12.length; i++) {
                if (e12[i].checked) {
                    selectedPaymentMethod = e12[i].value;
                }
            }
            d.getElementById("selectedData").innerHTML = "<h2>Прізвище:</h2>" + surname + "<h2>Ім'я:</h2>" + name + "<h2>Телефон:</h2>" + phone + "<h2>Gmail:</h2>" + gmail +"<h2>Обрані товари</h2>" + selectedProducts + "<h2>Вартість:</h2>" + totalPrice +"<h2>Обраний метод оплати:</h2>" + selectedPaymentMethod;
        }
const Tovar_Ar = [["Товар1","Товар2","Товар3","Товар4","Товар5"], ["Товар6","Товар7","Товар8","Товар9","Товар10"]];
const cina = [[1,2,3,4,5],[6,7,8,9,10]];
