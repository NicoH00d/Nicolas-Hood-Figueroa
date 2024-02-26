const boton_levelear=document.getElementById("levelear");
const barbaro = {nivelbarbaro: 1}

boton_levelear.onclick=()=>{
    console.log("click");
    barbaro.nivelbarbaro ++;
    const span_nivel = document.getElementById("nivelbarbaro");
    span_nivel.innerHTML = barbaro.nivelbarbaro;
}