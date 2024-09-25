const faqElements = document.getElementsByClassName("faq-element")

for(const faqElement of faqElements){
    faqElement.addEventListener("click",function(){
        const arrowIcon = document.getElementsByClassName("icon-arrow")
        const answer = document.getElementsByClassName("answer")

        arrowIcon.classList.toggle('-rotate-180')
        answer.classList.toggle("hidden")
    })
}