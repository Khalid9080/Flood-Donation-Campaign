


//Noakhali Donation
document.getElementById('btn1-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('noakhali-balance')
    const Noakhali_donation = donationStringtoNum('noakhali-donation')
    const newBalance = balance - Noakhali_donation;
    if (newBalance < 0) {
        alert('Account balance of noakhali is going to be empty.')
        
    }
    else {
        newBalance==0;
        document.getElementById('noakhali-balance').innerText = newBalance;

        // Transaction --
        const p = document.createElement('p')
        p.innerText=`You have donated : ${Noakhali_donation} Tk for nakhali. Your current balance is : ${newBalance} Tk.`;
        // p.innerText=`${new Date().toString()}`
        document.getElementById('transaction-donate').appendChild(p)

        const time=document.createElement('p')
        time.innerText=`${new Date().toString()}`;
        time.classList.add('text-sm', 'text-gray-500');
        document.getElementById('transaction-donate').appendChild(time)
    }


})

//Feni Balance
document.getElementById('btn2-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('feni-balance')
    const Feni_donation = donationStringtoNum('feni-donation')
    const newBalance = balance - Feni_donation;
    if (newBalance < 0) {
        alert('Account balance of Feni is going to be empty.')
        
    }
    else {
        newBalance==0;
        document.getElementById('feni-balance').innerText = newBalance;
    }


})

//Feni Balance
document.getElementById('btn3-donate-quotaMovement').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('qouta-balance')
    const Feni_donation = donationStringtoNum('qouta-donation')
    const newBalance = balance - Feni_donation;
    if (newBalance < 0) {
        alert('Account balance of Quota is going to be empty.')
        
    }
    else {
        newBalance==0;
        document.getElementById('qouta-balance').innerText = newBalance;
    }


})