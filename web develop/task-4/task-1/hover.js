/*Name this external file hover_script.js*/



function upDate(previewPic){

    let imageSelected = document.getElementById(previewPic).src;
    let textSelected = document.getElementById(previewPic).alt;
    document.getElementById("image").style.backgroundImage = "url('"+imageSelected+"')";
    document.getElementById("image").innerText = textSelected;


}

function unDo(){


    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerText = "Hover over an image below to display here.";



}