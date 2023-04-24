const selectElement = document.getElementById("selectCabang");
const contentElements = document.querySelectorAll(".chart-cabang");

selectElement.addEventListener("change", () => {
  const selectedOption = selectElement.value;

  contentElements.forEach((contentElement) => {
    if (contentElement.dataset.option === selectedOption) {
      contentElement.style.display = "block";
    } else {
      contentElement.style.display = "none";
    }
  });
});
