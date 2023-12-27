function calcular(){
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let res = document.querySelector('#res')

    if(peso.value.length == 0 && altura.value.length == 0){
        alert('Por favor, insira os dados')
    }

    else{
        let weight = Number(peso.value)
        let height = Number(altura.value)

        const imc = getImc(weight,height)
        const nivelImc = getNivel(imc)

        function getImc(weight, height){
            let imc = weight/height**2
            return imc.toFixed(2);
        }

        function getNivel(imc){
            let nivel = ['Abaixo do peso', 'Peso Normal' , 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
            if (imc>=39.9) return nivel[5]
            if (imc>=34.9) return nivel[4]
            if (imc>=29.9) return nivel[3]
            if (imc>=24.9) return nivel[2]
            if (imc>=18.5) return nivel[1]
            if (imc<=18.5) return nivel[0]
        }

        res.innerHTML = `Seu peso é ${imc} (${nivelImc})`
    }
}