const gallery = document.getElementById('gallery');

const emojis = [
    { char: '⌚', hex: '231A' },
    { char: '⌛', hex: '231B' },
    { char: '⏩', hex: '23E9' },
    { char: '⏪', hex: '23EA' },
    { char: '⏫', hex: '23EB' },
    { char: '⏬', hex: '23EC' },
    { char: '⏰', hex: '23F0' },
    { char: '⏳', hex: '23F3' },
    { char: '☔', hex: '2614' },
    { char: '☕', hex: '2615' },
    { char: '♈', hex: '2648' },
    { char: '♉', hex: '2649' }
];



for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');

    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = emoji.char;

    const hexSpan = document.createElement('span');
    hexSpan.textContent = `Hex: ${emoji.hex}`;

    emojiItem.appendChild(emojiSpan);
    emojiItem.appendChild(hexSpan);

    gallery.appendChild(emojiItem);
}