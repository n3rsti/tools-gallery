function searchApps(){
    let list = document.getElementsByClassName('card')
    let input = document.querySelector('.search__input')
    let upperInput = input.value.toUpperCase()
    let isModule = false
    for(let i = 0; i < list.length; i++){
        li = list[i]
        title = li.querySelector('.card__title')
        modules = li.getElementsByClassName('module')
        query = li.querySelector('.module').innerText
        listTxt = title.innerText
        for(let x = 0; x < modules.length; x++){
            if(modules[x].innerText.toUpperCase().indexOf(upperInput) > -1){
                isModule = true
            }
            else {
                isModule = false
            }

        }
        if(listTxt.toUpperCase().indexOf(upperInput) > -1 || isModule === true){
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