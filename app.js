


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

const checkFAQClick = () => {
    const faqs = document.querySelectorAll(".faq-container")
   

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle("active")

        })
    })
    
}

checkFAQClick()


const checkEmailValidation = () => {
    const form = document.getElementById("form")
    const email = document.getElementById("email-input").value
    const text = document.getElementById("text")
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const contactBtn = document.querySelector(".contact-btn")




contactBtn.addEventListener('click', () => {

    if (email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
     
     
        text.innerHTML = "Your email adress is valid !"
        text.style.color = "#00ff00"
        
     }



    if (!email.match(pattern)) {
        form.classList.add("invalid")
        form.classList.remove("invalid")
     
        text.innerHTML = "Please enter a valid email adress !"
        text.style.color = "#fff"
     }


    if (email == ""){
        text.innerHTML = ""
    }
    

    

})
 

}

 checkEmailValidation()
