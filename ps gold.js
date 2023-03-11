        
function calculateZakat() {
    let goldWeight = document.getElementById("goldWeight").value;
    let goldValue = document.getElementById("goldValue").value;
    let silverWeight = document.getElementById("silverWeight").value;
    let silverValue = document.getElementById("silverValue").value;

    let goldZakat;
    if(goldWeight>=7.5){
        goldZakat=(goldWeight * goldValue * 1/40).toFixed(2);}
    else{
        goldZakat=0;
    }
    let silverZakat;
    if(silverWeight>=52.5){
        silverZakat = (silverWeight * silverValue * 0.025).toFixed(2);}
        else{
            silverZakat=0;
        }


    document.getElementById("goldZakat").value = goldZakat;
    document.getElementById("silverZakat").value = silverZakat;
}
document.addEventListener("input", calculateZakat);

