var flag = 0;

function muda_cor(){
    let body = document.getElementById("bg");

    if(flag == 0){
        body.style.backgroundColor = "#579bc9";
        flag = 1;
    } else {
        body.style.backgroundColor = "#483d8b";
        flag = 0;
    }

}