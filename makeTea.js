function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of" + tea);
}

// Сorrect function call
makeTea(3, "Earl Gray");

// Missing arguments of the function (undefined)
makeTea(3);

// "Extra" arguments of the function
makeTea(3, "Earl Grey", "hey ma!", 42);

// Arguments passed in the wrong order
makeTea("Earl Grey", 3);



// Function without parameters
function barkAtTheMoon() {
    console.log("Woooooooooooooo!");
}
barkAtTheMoon();