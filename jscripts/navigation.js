function navFunction(el) {
    el.classList.toggle("change");
    const collapseElement = document.getElementById("burger-icon-wrapper");
    const navElement = document.getElementById("nav-parent");
    const linkHolder = document.getElementById("link-wrapper");

    if(collapseElement.className === "change"){
      navElement.style.width = "12%";
      for(i=0;i<5;i++){
        switch(i){
            case 0:
               linkHolder.children[i].childNodes[0].textContent = "Home";
               break;
            case 1:
                linkHolder.children[i].childNodes[0].textContent = "About";
                break;
            case 2:
                linkHolder.children[i].childNodes[0].textContent = "Contact";
                break;
            case 3:
                linkHolder.children[i].childNodes[0].textContent = "Designs";
                break;
            default:
                linkHolder.children[i].childNodes[0].textContent = "Portfolio";
        }
      }
    }else{
      navElement.style.width = "4%";
      let node;
      for(i=0;i<5;i++){
        linkHolder.children[i].childNodes[0].textContent = "";
        node = document.createElement("i");
        switch(i){
            case 0:   
               linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-house");
               break;
            case 1:  
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-circle-info");
                break;
            case 2:  
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-address-book");
                break;
            case 3:  
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-paint-brush");
                break;
            default:
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-briefcase");

        }
      }
    }
  }