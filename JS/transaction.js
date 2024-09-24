


// document.getElementById('btn1-donate-noakhali').addEventListener('click', function (event) {
//    event.preventDefault();

   


//     const balance = donationTextStringtoNum('donation-balance')
//     const Noakhalidbalance = donationStringtoNum('noakhali-donation')
//     const newBalance = balance + Noakhalidbalance;

//      document.getElementById('donation-balance').innerText = newBalance;

     
// const p = document.createElement('p')
// p.innerText=`Added from Noakhali :${Noakhalidbalance} Tk. Nakhalis new Balance is : ${newBalance} `;
// document.getElementById('transaction-donate').appendChild(p)



// })


document.getElementById('btn-history').addEventListener('click',function(){
    getHiddenById('Transaction-form')
})