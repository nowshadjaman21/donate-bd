document.getElementById('quota-donate-btn').addEventListener('click', function () {
  showDonations('quota-donate-input', 'quota-total-donation');
  const addMoneyNumber = getValuebyId('quota-donate-input');
  const h2 = document.createElement('h2');
  h2.innerText = `${addMoneyNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
  document.getElementById('history-container').appendChild(h2);
  
  
})  ;

document.getElementById('feni-donate-btn').addEventListener('click', function () {
  showDonations('feni-donate-input', 'feni-total-donation');
  const addMoneyNumber = getValuebyId('quota-donate-input');
  const h2 = document.createElement('h2');
  h2.innerText = `${addMoneyNumber} Taka is Donated for Flood relif in Feni, Bangladesh`;
  document.getElementById('history-container').appendChild(h2);
})  ;

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
  showDonations('noakhali-donate-input', 'noakhali-total-donation');
  const addMoneyNumber = getValuebyId('quota-donate-input');
  const h2 = document.createElement('h2');
  h2.innerText = `${addMoneyNumber} Taka is Donated for Flood relif in Noakhali, Bangladesh`;
  document.getElementById('history-container').appendChild(h2);
})  ;





