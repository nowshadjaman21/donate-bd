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
    const div = document.createElement('div');
    div.className= "mt-2 border-2 rounded-lg p-6";

    const currentDate = new Date();
    const localTime = currentDate.toLocaleString(); 
const gmtTime = currentDate.toUTCString(); 
const bangladeshTime = currentDate.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

  div.innerHTML=`
  <h2 class="text-2xl font-bold">${addMoneyNumber} Taka is Donated for ${areaText} Bangladesh</h2>
<p>Date: ${gmtTime} ${bangladeshTime} </p>
  `
  document.getElementById('history-div').appendChild(div);
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