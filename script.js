function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'  
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebeh.jpeg')
            }else if(idade < 45){
                img.setAttribute('src', 'img/homem.jpeg')
            }else{
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebem.jpg')
            }else if(idade < 45){
                img.setAttribute('src', 'img/mulher.jpeg')
            }else{
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectado ${genero} de ${idade} anos`;
        res.appendChild(img)
       
    }
}
