function rollDice() {
    const numofdice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceresult");
    const diceImage = document.getElementById("diceimage");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_img/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');
}
