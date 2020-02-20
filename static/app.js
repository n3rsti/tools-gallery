window.onload = function(){
    document.querySelector('.search__input').addEventListener('input', searchApps)
}
function searchApps(){
    let list = document.getElementsByClassName('card')
        input = document.querySelector('.search__input')
        upperInput = input.value.toUpperCase()
        searchResults = 0
    
    
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
            searchResults = searchResults + 1
            list[i].style.display = ""
        }
        else {
            list[i].style.display = "none"
        }
    }
    if(searchResults == 0){
        document.querySelector("footer").className = "footer__sticky"
        document.querySelector(".description").style.display = "none"
        document.querySelector(".notools").style.display = "block"
    }
    else {
        document.querySelector("footer").className = ""
        document.querySelector(".description").style.display = ""
        document.querySelector(".notools").style.display = "none"
    }
}