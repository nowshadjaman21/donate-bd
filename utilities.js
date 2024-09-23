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
  const balance = document.getElementById('balance').innerText;
 
  const balanceNumber = parseFloat(balance);
  if (balanceNumber >= addMoneyNumber && addMoneyNumber > 0) {
    const totalBalance = balanceNumber - addMoneyNumber;
    document.getElementById('balance').innerText = totalBalance;
  }
  else{
    alert('You don\'t have enough balance');
  
    };
    }
    else{
      alert('Please enter a valid amount');
    }
  }