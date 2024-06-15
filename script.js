var index = 0;

function mudaCor(){
    var cores  = ['gray','lightblue','orange','darkolivegreen','limegreen','pink'];

    document.getElementsByTagName('body')[0].style.background = cores[index++];

    if(index > cores.length - 1){
        index = 0;
    }
}