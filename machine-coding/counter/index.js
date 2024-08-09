function handleButtonClick() {
    let count = 0;
    const spanCounter = document.getElementById("count");

    document.getElementById("btn-click").addEventListener("click", function () {
         count++;
        spanCounter.textContent = count;
    });
}

handleButtonClick();