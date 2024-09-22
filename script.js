document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

function showHistory() {
    document.getElementById('history-btn').classList.add('bg-green-500');
    document.getElementById('donation-btn').classList.remove('bg-green-500');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
}
function showDonation() {
    document.getElementById('history-btn').classList.remove('bg-green-500');
    document.getElementById('donation-btn').classList.add('bg-green-500');
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
}