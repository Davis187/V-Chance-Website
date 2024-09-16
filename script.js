const categories = {
    kat1: [
        "https://media.discordapp.net/attachments/1188918212436435032/1285150808660246630/Sammler.webp?ex=66e93975&is=66e7e7f5&hm=7a51cd3b8cffe2a5655369bd86516779604b5cdbfbe40c6ec028f694da74d645&=&format=webp",
        "https://media.discordapp.net/attachments/1188918212436435032/1285150829011275847/Verarbeiter.webp?ex=66e9397a&is=66e7e7fa&hm=76e2f39464f26fc16dff1c8e4e9dc1b987076858bf8655588fa7227b233d8444&=&format=webp",
        "https://media.discordapp.net/attachments/1188918212436435032/1285150850020544563/Verarbeiter2.webp?ex=66e9397f&is=66e7e7ff&hm=8723b2225b29d10197243f23b097fbd936c8058fb1275d6da0946023c5d39d55&=&format=webp"
    ],
    kat2: [
        'https://via.placeholder.com/200?text=Bild+2A',
        'https://via.placeholder.com/200?text=Bild+2B',
        'https://via.placeholder.com/200?text=Bild+2C',
		'https://via.placeholder.com/200?text=Bild+2D'
    ],
    kat3: [
        'https://via.placeholder.com/200?text=Bild+3A',
        'https://via.placeholder.com/200?text=Bild+3B',
        'https://via.placeholder.com/200?text=Bild+3C'
    ]
};

function showImages(category) {
    const imagesContainer = document.getElementById('images-container');
    
    // Bilder zurücksetzen und anzeigen
    const imgs = [document.getElementById('image1'), document.getElementById('image2'), document.getElementById('image3'), document.getElementById('image4'),];
    
    imgs.forEach((img, index) => {
        img.src = categories[category][index];
        img.style.display = 'block'; // Bilder anzeigen
    });
}
