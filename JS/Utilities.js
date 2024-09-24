

function donationTextStringtoNum(id) {
    const ds = document.getElementById(id).innerText;
    const stringDonateVAlue = parseFloat(ds)

    return stringDonateVAlue;
}

function donationStringtoNum(id){
    const donation=document.getElementById(id).value
    const Flood_Qouta_Donation = parseFloat(donation);

    return Flood_Qouta_Donation ;
}




function getHiddenById(id){
    document.getElementById('Flood-Donation-form').classList.add('hidden')
    document.getElementById('Transaction-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}


