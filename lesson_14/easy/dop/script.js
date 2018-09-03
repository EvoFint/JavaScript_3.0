let age = document.getElementById('age');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let user = {
    name: name.value,
    surname: surname.value,
    age: age,
    showUser: function(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
    }
}

user.showUser(user.surname, user.name);