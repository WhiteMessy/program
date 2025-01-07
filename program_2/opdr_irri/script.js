


const createPlayer = () => {

    const player = {
        x: window.innerWidth/2,
        y: window.innerHeight/2,
        style: {
            backgroundColor: "red",
            width: "32px",
            height: "32px"
         
            
        },
        element: document.createElement("div")
    }

    
    
    // Voeg de speler toe aan de body
    player.element.style.position = "absolute"
    document.body.appendChild(player.element)
    
    
    
    
    
    
    
    // Update de style + positie van de speler met elk frame via een recursieve functie
    function animation() {
        const el = player.element
        el.style.left = player.x + "px"
        el.style.top = player.y + "px"
        
        for (property in player.style) {
            el.style[property] = player.style[property]
        }

        window.requestAnimationFrame(animation);
    }
    
    window.requestAnimationFrame(animation);
    

    return player

}