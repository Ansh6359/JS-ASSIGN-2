// Constants for query selectors
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const myStudentId = document.getElementById("myStudentId");

// Constants for color ranges
const colorRanges = [
    { min: 0, max: 20, color: "red" },
    { min: 20, max: 40, color: "green" },
    { min: 40, max: 60, color: "blue" },
    { min: 60, max: 80, color: "orange" },
    { min: 80, max: 100, color: "purple" }
];

// Function to change background color and display student ID
function changeCustomColor() {
    const inputValue = parseInt(customNumberInput.value);
    myStudentId.textContent = "Your Student ID: 200542632";
    const matchingColor = colorRanges.find(range => inputValue >= range.min && inputValue <= range.max);
    if (matchingColor) {
        document.body.style.backgroundColor = matchingColor.color;
    } else {
        document.body.style.backgroundColor = "red"; // Default to red for out-of-range values
    }
}

// Function to generate a random number and change background color
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomValue;
    changeCustomColor();
}

// Function to generate options for the image names and update image
function updateImageOptions() {
    const imageSrcArray = ["./img1.jpg", "./img2.jpg", "./img3.jpg", "./img4.jpg", "./img5.jpg"];
    imageSelect.innerHTML = "<option value=''>Please choose...</option>";

    imageSrcArray.forEach((src, index) => {
        const option = document.createElement("option");
        option.value = src;
        option.textContent = `Image ${index + 1}`;
        imageSelect.appendChild(option);
    });

    imageSelect.addEventListener("change", () => {
        const selectedImageSrc = imageSelect.value;
        images.src = `./img/${selectedImageSrc}`;
    });
}

// Event listeners for buttons
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

// Initialize the select list with options and image update functionality
updateImageOptions();
