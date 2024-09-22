function getValuebyId(id) {
    const element = document.getElementById(id).value;
    return element;
}

function showDonations(input,total) {
 
    const addMoney =getValuebyId(input);
    const addMoneyNumber = parseFloat(addMoney);
    if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
      const donatedAmount = document.getElementById(total).innerText;
      const donatedMoney = parseFloat(donatedAmount);
      const totalDonation = donatedMoney + addMoneyNumber;
  document.getElementById(total).innerText = totalDonation;
    }
    else{
      alert('Please enter a valid amount');
    }
  }