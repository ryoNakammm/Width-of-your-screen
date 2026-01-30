const boxElements = document.getElementsByClassName("box");
let lastTime = 0;

function checkMargin(timestamp) {
    const elapsed = timestamp - lastTime;
    if (elapsed >= 16) {
        for (let i = 0; i < boxElements.length; i++) {
            const box = boxElements[i];
            const marginLeftValue = box.previousElementSibling;
            const marginRightValue = box.nextElementSibling;

            const style = window.getComputedStyle(box);
            marginLeftValue.textContent = `${parseInt(style.getPropertyValue("margin-left"))}px`;
            marginRightValue.textContent = `${parseInt(style.getPropertyValue("margin-right"))}px`;
        }
        lastTime = timestamp;
    }
    window.requestAnimationFrame(checkMargin);
};

window.requestAnimationFrame(checkMargin);