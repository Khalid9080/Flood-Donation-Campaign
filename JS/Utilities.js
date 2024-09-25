

function donationTextStringtoNum(id) {
    const ds = document.getElementById(id).innerText;
    const stringDonateVAlue = parseFloat(ds)

    return stringDonateVAlue;
}


function donationStringtoNum(id){
    const donation = document.getElementById(id).value.trim();  
    const FloodQouta_Donation = parseFloat(donation);

    if (isNaN(FloodQouta_Donation) || FloodQouta_Donation <= 0) {
        alert('Please enter a valid donation amount (Numbers Only)');
        return null;  
    }

    return FloodQouta_Donation;
}




function getHiddenById(id){
    document.getElementById('Flood-Donation-form').classList.add('hidden')
    document.getElementById('Transaction-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}


