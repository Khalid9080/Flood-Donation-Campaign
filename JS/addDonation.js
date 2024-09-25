

//Noakhali Donation
document.getElementById('btn1-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('donation-balance')
    const Noakhalidbalance = donationStringtoNum('noakhali-donation')
    const newBalance = balance + Noakhalidbalance;
    if (Noakhalidbalance < 0) {
        alert(' Negative Value will not be accepted')
    }
    else {
        document.getElementById('donation-balance').innerText = newBalance;
        

    }


})

// Feni Donation
document.getElementById('btn2-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('donation-balance')
    const feniBalance = donationStringtoNum('feni-donation')
    const newBalance = balance + feniBalance;
    if (feniBalance < 0 ) {
        alert(' Negative Value will not be accepted')
    }
    else {
        document.getElementById('donation-balance').innerText = newBalance;
    }


})

//Qouta Donation

document.getElementById('btn3-donate-quotaMovement').addEventListener('click', function (event) {
    event.preventDefault();

    const balance = donationTextStringtoNum('donation-balance')
    const qoutaBalance = donationStringtoNum('qouta-donation')
    const newBalance = balance + qoutaBalance;
    if (qoutaBalance < 0) {
        alert(' Negative Value will not be accepted')
    }
    else {
        document.getElementById('donation-balance').innerText = newBalance;
    }


})


