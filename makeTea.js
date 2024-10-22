function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of" + tea);
}

// Сorrect function call
makeTea(3, "Earl Gray");

// Missing arguments of the function (undefined)
makeTea(3);

// "Лишние" аргументы функции
makeTea(3, "Earl Grey", "hey ma!", 42);

// Аргументы переданы в неверном порядке
makeTea("Earl Grey", 3);



// Функция без параметров
function barkAtTheMoon() {
    console.log("Woooooooooooooo!");
}
barkAtTheMoon();