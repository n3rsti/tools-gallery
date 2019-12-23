window.onload = function(){
    document.querySelector('.search__input').addEventListener('input', searchApps)
}
function searchApps(){
    let list = document.getElementsByClassName('card')
    let input = document.querySelector('.search__input')
    let upperInput = input.value.toUpperCase()
    
    
    for(let i = 0; i < list.length; i++){
        let isModule = false
        li = document.getElementsByClassName('card')[i]
        title = li.querySelector('.card__title')
        modules = li.getElementsByClassName('module')
        listTxt = title.innerText
        for(let x = 0; x < modules.length; x++){
            currentModule = modules[x]
            if(currentModule.innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1){
                isModule = true
                break
            }
            else {
                isModule = false
            }

        }
        if(listTxt.toUpperCase().indexOf(input.value.toUpperCase()) > -1 || isModule === true){
            list[i].style.display = ""
        }
        else {
            list[i].style.display = "none"
        }
        
        
    }
    if(upperInput == ""){
        document.querySelector(".description").style.display = ""
    }
    else {
        document.querySelector(".description").style.display = "none"
    }
}