var ind1 = document.getElementById("ind1");
var ind2 = document.getElementById("ind2");
var ind3 = document.getElementById("ind3");
var ind4 = document.getElementById("ind4");
var character =
    document.getElementById("character");
var block = 
    document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },1000)
    }
}
function jumpkey(event){
    var x = event.keyCode;
    if(x == "38"){
        jump()
    }
}
var checkDead = setInterval(function(){
    var charright = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    document.getElementById("info").innerHTML = "<h1>"+ "charright = " + charright + "</h1>";
    var charbottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));  ///need to fix whatever is making it so that this is not changing as the thing moves
    document.getElementById("info2").innerHTML = "<h1>"+ "charbottom =" + charbottom + "</h1>";
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    document.getElementById("info3").innerHTML = "<h1>"+ "blockleft =" + blockleft + "</h1>";
    var blockright = parseInt(window.getComputedStyle(block).getPropertyValue("right"))
    document.getElementById("info4").innerHTML = "<h1>"+ "blockright =" + blockright + "</h1>";
    var blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    document.getElementById("info5").innerHTML = "<h1>"+ "blocktop =" + blocktop + "</h1>";
    var blockbottom = parseInt(window.getComputedStyle(block).getPropertyValue("bottom"))
    document.getElementById("info6").innerHTML = "<h1>"+ "blockbottom =" + blockbottom + "</h1>";
    if(charright < blockright){
        ind1.style.backgroundColor = "green"
    }
    else{
        ind1.style.backgroundColor = "white"
    }
    if(charright < -(blockleft)){
        ind2.style.backgroundColor = "green"
    }
    else{
        ind2.style.backgroundColor = "white"
    }
    if((charbottom) < blocktop){
        ind3.style.backgroundColor = "green"
    }
    else{
        ind3.style.backgroundColor = "white"
    }
    if(charbottom > blockbottom){
        ind4.style.backgroundColor = "green"
    }
    else{
        ind4.style.backgroundColor = "white"
    }
    if(((charright < blockright) && (charright < -(blockleft))) && ((charbottom) < blocktop)){
        block.style.animation = "none";
        block.style.display = "none";
        var loss = confirm("You Lose")
        if(loss == true){
            block.style.display = "";
            block.style.animation = "";
        }
        else{
            window.close();
        }
    }
},10)