

// Noakhali Donation
document.getElementById('btn1-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('noakhali-balance');
    const Noakhali_donation = donationStringtoNum('noakhali-donation');
    const newBalance = balance - Noakhali_donation;

    if (newBalance < 0) {
        alert('Account balance of Noakhali is going to be empty.');
    } 
    
    else if(isNaN(newBalance)){
        alert ('Please enter a valid donation amount for Noakhali.');
    }

    else {
        newBalance==0
        document.getElementById('noakhali-balance').innerText = newBalance+' BDT';

       
        const NoakhaliDiv = document.createElement('div');
        NoakhaliDiv.classList.add('border', 'border-1', 'rounded-xl', 'shadow-1xl', 'p-5', 'mt-4');

        
        const p = document.createElement('p');
        p.innerText = `${Noakhali_donation} Tk is donated for Flood Relief in Noakhali,Bangladesh. Your current balance is: ${newBalance} Tk.`;
        NoakhaliDiv.appendChild(p);

       
        const time = document.createElement('p');
        time.innerText = `${new Date().toString()}`;
        time.classList.add('text-sm', 'text-gray-500');
        NoakhaliDiv.appendChild(time);

        
        document.getElementById('transaction-donate').appendChild(NoakhaliDiv);
    }
});



// Feni Donation
document.getElementById('btn2-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('feni-balance');
    const Feni_donation = donationStringtoNum('feni-donation');
    const newBalance = balance - Feni_donation;

    if (newBalance < 0){

        alert('Account balance of Feni is going to be empty.');
    } 
    else if(isNaN(newBalance)){
        alert ('Please enter a valid donation amount for Feni.');
    }
    else {
        newBalance==0
        document.getElementById('feni-balance').innerText = newBalance + ' BDT';

        
        const FeniDiv = document.createElement('div');
        FeniDiv.classList.add('border', 'border-1', 'rounded-xl', 'shadow-1xl', 'p-5', 'mt-4');

       
        const p = document.createElement('p');
        p.innerText = `${Feni_donation} Tk is donated for Flood Relief in Feni,Bangladesh. Your current balance is: ${newBalance} Tk.`;
        FeniDiv.appendChild(p);

       
        const time = document.createElement('p');
        time.innerText = `${new Date().toString()}`;
        time.classList.add('text-sm', 'text-gray-500');
        FeniDiv.appendChild(time); 

        
        document.getElementById('transaction-donate').appendChild(FeniDiv);
    }
});





//Quota Balance
document.getElementById('btn3-donate-quotaMovement').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('qouta-balance')
    const Feni_donation = donationStringtoNum('qouta-donation')
    const newBalance = balance - Feni_donation;
    if (newBalance < 0) {
        alert('Account balance of Quota is going to be empty.')
        
    }

    else if(isNaN(newBalance)){
        alert ('Please enter a valid donation amount for Quota Movement.');
    }

    
    else {
        newBalance==0;
        document.getElementById('qouta-balance').innerText = newBalance+' BDT';
        const QuotaDiv = document.createElement('div');
        QuotaDiv.classList.add('border', 'border-1', 'rounded-xl', 'shadow-1xl', 'p-5', 'mt-4');

        
        const p = document.createElement('p');
        p.innerText = `${Feni_donation} Tk is donated for Quota Movement of Bangladesh. Your current balance is: ${newBalance} Tk.`;
        QuotaDiv.appendChild(p);

        
        const time = document.createElement('p');
        time.innerText = `${new Date().toString()}`;
        time.classList.add('text-sm', 'text-gray-500');
        QuotaDiv.appendChild(time); 

       
        document.getElementById('transaction-donate').appendChild(QuotaDiv);
    }


})