var banner = document.getElementById("bannerH")
var bannerc = document.getElementById("bannerC")
var combo = document.getElementById("combo")



function excluirlanches(){
    var lanche1 = document.getElementById("produtos")
    lanche1.style.display = "none"
}

bannerc.addEventListener("submit", excluirlanches)