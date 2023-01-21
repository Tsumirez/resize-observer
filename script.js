const box = document.querySelector(".box");
const containerBox = document.querySelector(".container");

const observer = new ResizeObserver(entries => {
    const boxElement = entries[0]
    const isSmall = boxElement.contentRect.width < 150
    boxElement.target.style.backgroundColor = isSmall ? "black" : "green";
});

observer.observe(box);
// observer.observe(containerBox);