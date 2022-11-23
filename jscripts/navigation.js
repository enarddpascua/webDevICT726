function myFunction(x) {
    x.classList.toggle("change");
    const element = document.getElementById("burger-icon-wrapper");
    const navElement = document.getElementById("nav-parent");
    const linkHolder = document.getElementById("link-wrapper");
    if(element.className === "change"){
      navElement.style.width = "30%";
      for(i=0;i<5;i++){
        let node = document.createElement("i");
        let liNode = document.createElement("li");
        let anchorNode = document.createElement("a");
        let textNode;
        switch(i){
          case 0:
            textNode = document.createTextNode("Home");
            break;
          case 1:
            textNode = document.createTextNode("Contact");
            break;
          case 2:
            textNode = document.createTextNode("Designs");
            break;
          case 3:
            textNode = document.createTextNode("About");
            break;
          default:
            textNode = document.createTextNode("Portfolio");
        }
        anchorNode.appendChild(textNode);
        liNode.appendChild(anchorNode);
        linkHolder.appendChild(liNode);
      }
    }else{
      navElement.style.width = "10%";
    }
  }