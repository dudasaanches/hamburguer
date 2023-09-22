var banner = document.getElementById("bannerH")
var bannerc = document.getElementById("bannerC")



bannerc.addEventListener("click", function(){
    var lanche1 = document.getElementById("produtos-1")
    var lanche2 = document.getElementById("produtos-2")
    var combo = document.getElementById("combo")

    combo.style.display = "flex"
    
    if(lanche1.style.display === "none"){
        lanche1.style.display = "flex"
        lanche2.style.display = "flex"
    }
    else{
        lanche1.style.display = "none"
        lanche2.style.display = "none"
    }
});

banner.addEventListener("click", function(){
    var combo = document.getElementById("combo")
    var lanche1 = document.getElementById("produtos-1")
    var lanche2 = document.getElementById("produtos-2")

    lanche1.style.display = "flex"
    lanche2.style.display = "flex"
    
    if(combo.style.display === "none"){
        combo.style.display = "flex"
    }
    else{
        combo.style.display = "none"
    }
});