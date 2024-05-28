//File js test bật sự kiện lúc đầu, không có trong index.html

document.getElementById('rollover_alternator_relay').addEventListener('click', function() {
    var dialog = document.querySelector('.ui-dialog');
    if (dialog.style.display === 'none') {
        dialog.style.display = 'block';
    } else {
        dialog.style.display = 'none';
    }
});