function addingEventListener() {
    const input = document.getElementById('button').addEventListener('click');

function clickAlert() {
    alert('I was clicked!');
}
input.addingEventListener('click', clickAlert);
}