// script.js
document.getElementById('qr-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const urlInput = document.getElementById('url-input').value;
    const qrResult = document.getElementById('qr-result');
    const downloadLink = document.getElementById('download-link');
    qrResult.innerHTML = '';
    downloadLink.style.display = 'none';

    const qrCode = new QRCode(qrResult, {
        text: urlInput,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // Wait for the QR code to be generated
    setTimeout(() => {
        const qrCanvas = qrResult.querySelector('canvas');
        const qrImageUrl = qrCanvas.toDataURL('image/png');
        downloadLink.href = qrImageUrl;
        downloadLink.download = 'qr_code.png';
        downloadLink.style.display = 'block';
    }, 500);
});
