function showWords(count) {
    document.querySelector('.word-tab.active').classList.remove('active');
    if (count === 12) {
        document.querySelector('.word-tab:nth-child(1)').classList.add('active');
        document.getElementById('words-12').style.display = 'flex';
        document.getElementById('words-24').style.display = 'none';
        document.getElementById('keyphrase').style.display = 'none';
    } else if (count === 24) {
        document.querySelector('.word-tab:nth-child(2)').classList.add('active');
        document.getElementById('words-12').style.display = 'none';
        document.getElementById('words-24').style.display = 'flex';
        document.getElementById('keyphrase').style.display = 'none';
    } else {    
        document.querySelector('.word-tab:nth-child(3)').classList.add('active');
        document.getElementById('words-12').style.display = 'none';
        document.getElementById('words-24').style.display = 'none';
        document.getElementById('keyphrase').style.display = 'flex';
    }
}