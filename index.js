const donationAmount = document.getElementById("donation-amount")

const donation = document.getElementById("donation-p-tag")
const donationButton = document.getElementById("donation-btn");

const reliefButton = document.getElementById("relief-btn");
const reliefDonation = document.getElementById("relief-donation");

const quotaTag = document.getElementById("quota-tag")
const quotaButton = document.getElementById("quota-btn")

donationButton.addEventListener("click",function(){
    const donationValue = parseFloat(document.getElementById("flood-donation").value)

    if(donationValue<=0 || isNaN(donationValue) || donationValue > donationAmount){
        return alert("please enter valid number")
    }
    console.log(donationValue);

    donation.innerText = donationValue;

    document.getElementById("flood-donation").value = ""

    const historyItem = document.createElement("div")
    historyItem.className = "bg-white p-3 rounded-md border border-slate-500";

    historyItem.innerHTML = `
    <p class = "text-xl text-black"> ${donationValue} Donate for Flood at Noakhali, Bangladesh</p>
    <p class = "text-xl text-black">${new Date().toLocaleTimeString()}</p>
    
     `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);

})

reliefButton.addEventListener("click",function(){
    const donateRelief = parseFloat(document.getElementById("donate-relief").value)
    if(donateRelief<=0 || isNaN(donateRelief) || donateRelief > donationAmount){
        return alert("please enter valid number")
    }
    console.log(donateRelief);
    reliefDonation.innerText = donateRelief;

    document.getElementById("donate-relief").value = ""

    const historyItem = document.createElement("div")
    historyItem.className = "bg-white p-3 rounded-md border border-slate-500";

    historyItem.innerHTML = `
    <p class = "text-xl text-black">Donated Amount: ${donateRelief} Donate for Flood Relief in Feni,Bangladesh</p>
    <p class = "text-xl text-black">Donation time: ${new Date().toLocaleTimeString()}</p>
    
     `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
})

quotaButton.addEventListener("click",function(){
    const quotaDonation = parseFloat(document.getElementById("quota-donation").value)
    if(quotaDonation<=0 || isNaN(quotaDonation) || quotaDonation > donationAmount){
        return alert("please enter valid number")
    }
    console.log(quotaDonation);
    quotaTag.innerText = quotaDonation;

    document.getElementById("quota-donation").value = ""

    const historyItem = document.createElement("div")
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border border-slate-500";

    historyItem.innerHTML = `
    <p class = "text-xl text-black"> ${quotaDonation} Aid for Injured in the Quota Movement</p>
    <p class = "text-xl text-black">${new Date().toLocaleTimeString()}</p>
    
     `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
})

// history tab

const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click",function(){
    historyTab.classList.add(
        "text-black",
        "bg-secondary",
    );
    historyTab.classList.remove("text-gray-600");
    donationTab.classList.remove(
        "text-black",
        "bg-secondary",
    ); 
    donationTab.classList.add("text-gray-600");

    document.getElementById("donated-container").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
})

donationTab.addEventListener("click",function(){
    donationTab.classList.add(
       "text-black",
        "bg-secondary",
    )
    historyTab.classList.remove(
        "text-black",
        "bg-secondary",
    )
    document.getElementById("donated-container").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
})