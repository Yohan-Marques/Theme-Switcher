let body = document.querySelector('#fundo')
let h1 = document.querySelector('#paragraph')
let h1_ = document.querySelector('#paragraph2')
let btn = document.querySelector('#btn')

btn.addEventListener('click', circle)

    function circle(){
        colorAdd()
        textAdd()

        function colorAdd(){

            body.classList.toggle('sol')
            body.classList.toggle('lua')

            document.getElementById('fundo').style.transition = 'all .3s ease-in'
            btn.classList.toggle('active')
        }

        function textAdd(){
            
            if(body.classList.contains('lua')){
                
                h1.innerHTML = 'Theme Moon'
                h1.className = 'paragraph'

                h1_.innerHTML = ''

            }else if(body.classList.contains('sol')){

                h1_.innerHTML = 'Theme Sun'
                h1_.className = 'paragraph2'
            
                h1.innerHTML = ''

            }
        }
    }