function getValuebyId(id) {
    const element = document.getElementById(id).value;
    return element;
}

function showDonations(input,total,area) {
 
    const addMoney =getValuebyId(input);
    const addMoneyNumber = parseFloat(addMoney);
    const areaText=getInnerTextbyId(area);
    
    
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
    const h2 = document.createElement('h2');
  h2.classList.add('text-2xl', 'font-bold');
  h2.textContent = `${addMoneyNumber} Taka is Donated for ${areaText} Bangladesh`;
  document.getElementById('history-div').appendChild(h2);
  }
  else{
    alert('You don\'t have enough balance');
  
    };
    }
    else{
      alert('Please enter a valid amount');
    }
  }

  function getInnerTextbyId(id){
   const elements= document.getElementById(id).innerText;
    return elements;
  }