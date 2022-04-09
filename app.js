


var featuresUpdate = () => {
     
    
    const featureTitle = document.querySelector(".text-features-container h2")
    const featureParagraph = document.querySelector(".text-features-container p")
    const image = document.querySelector(".img-features-container img")

    const title1 = document.querySelector(".title1")
    const title2 = document.querySelector(".title2")
    const title3 = document.querySelector(".title3")

    
    title2.addEventListener('click', () => {
        image.src = "images/illustration-features-tab-2.svg"
        featureTitle.innerHTML = "Intelligent search"
        featureParagraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    })

    title3.addEventListener('click', () => {
        
        image.src = "images/illustration-features-tab-3.svg"
        featureTitle.innerHTML = "Share your bookmarks"
        featureParagraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    })

    title1.addEventListener('click', ()=> {
        image.src = "images/illustration-features-tab-1.svg"
       
        featureTitle.innerHTML = "Bookmark in one click"
        featureParagraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."

    })
}
    


featuresUpdate()