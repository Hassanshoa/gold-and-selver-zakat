
function calculateZakat() {
    const goldWeight = document.getElementById("goldWeight").value;
    const goldValue = document.getElementById("goldValue").value;
    const silverWeight = document.getElementById("silverWeight").value;
    const silverValue = document.getElementById("silverValue").value;

    const goldZakat = (goldWeight * goldValue * 0.025).toFixed(2);
    const silverZakat = (silverWeight * silverValue * 0.025).toFixed(2);

    document.getElementById("goldZakat").value = goldZakat;
    document.getElementById("silverZakat").value = silverZakat;
}
document.addEventListener("input", calculateZakat);
