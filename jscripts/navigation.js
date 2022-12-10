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
                linkHolder.children[i].childNodes[0].textContent = "Notes";
                break;
            case 3:
                linkHolder.children[i].childNodes[0].textContent = "Designs";
                break;
            default:
                linkHolder.children[i].childNodes[0].textContent = "Contact";
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
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-pencil");
                break;
            case 3:  
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-paint-brush");
                break;
            default:
                linkHolder.children[i].childNodes[0].appendChild(node).setAttribute("class","fa-solid fa-address-book");

        }
      }
    }
  }


  function nightMode(){
    document.body.classList.toggle("nightmode");
    document.querySelector(".nightmode-wrapper").classList.toggle("night");
    localStorage.getItem("nightmode") == "on" ? 
    localStorage.setItem("nightmode", "off"):
    localStorage.setItem("nightmode", "on");
  }

 if(localStorage.getItem("nightmode") == "on"){
    document.body.setAttribute("class", "nightmode");
    document.querySelector(".nightmode-wrapper").setAttribute("class","nightmode-wrapper night");
  }else if(localStorage.getItem("nightmode") == "off"){
    document.body.removeAttribute("class");
    document.querySelector(".nightmode-wrapper").setAttribute("class","nightmode-wrapper");
  }