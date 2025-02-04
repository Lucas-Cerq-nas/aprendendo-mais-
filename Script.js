    //Sistema de Trocas de Paginas 
    const Icon_burger = document.getElementById('MenuIcon')
        const Menu = document.querySelector('menu#MenuContainer')
            const h1 = document.querySelector("h1")
        let rotate_burger = false

    Icon_burger.addEventListener('click', function(){
            //sistema de click do Icone_Burger
        if(rotate_burger){ // se a rotação for verdadeira
            Icon_burger.style.transform = 'rotateZ(0deg)'
                    
            Menu.style.transform = 'translateX(0px)'
                setTimeout(() => {
                    Menu.style.display = 'block'
                }, 100)
                

                if(window.innerWidth <= 500){
                    document.body.style.overflow = 'scroll'
                }
            
                Icon_burger.style.border = 'none'
                document.body.style.overflowX = 'hidden'

        }else{// se a rotação for falsa 
            Icon_burger.style.transform = 'rotateZ(180deg)' 
                
            h1.style.border = 'none'
                
                Menu.style.transform = 'translateX(-48px)'  // faz com que o menu saia da tela
                Menu.style.transition = 'transform 0.2s linear'

                setTimeout(() => {
                    Menu.style.display = 'none'
                    }, 200);
                    
                    if(window.innerHeight < 600){
                        Icon_burger.style.backgroundColor = ' rgb(159, 135, 204)' 
                        Icon_burger.style.border = '2px solid black'
                        Icon_burger.style.borderRadius = '8px 10px 0px'
                    }else{
                        Icon_burger.style.background = 'none'
                        Icon_burger.style.border = 'none'
                    }

            document.body.style.overflow = 'hidden' 
        }

        Icon_burger.style.transition = 'transform 0.5s ease'

        rotate_burger = !rotate_burger // retorna true or false quando clicar

    })

    // Sistema de troca de paginas
function Target_Vetor(chaves){

        // Sistema para saber em qual pagina vc esta 
        // sofri pra descobrir isso sozinho >:(
    let Links_ = document.querySelectorAll('a.Links__') //Links
        Links_.forEach((links__paint, index_key_link) => { //(pega a class, index de cada link)

            // caso o index for igual a chave do outro link
                if(index_key_link === chaves){
                    links__paint.classList.add('paint_link') //add class
                }else{
                    links__paint.classList.remove('paint_link')
                }
        })

    // Sistema do conteiner_Artigo
    let conteu_pag = document.querySelectorAll('div.pag')

        conteu_pag.forEach((conteudo, index) => {
            if(index === chaves){
                conteudo.classList.add("on")
                 
            }else{
                conteudo.classList.remove('on')
                
            }     
        } )
}   

        // Sistema de click dos links, para troca de pagina
    const Links = document.querySelectorAll("a.Links__")
Links.forEach((link,index) => {
    link.addEventListener('click', () => {
        Target_Vetor(index)
    })
})

    