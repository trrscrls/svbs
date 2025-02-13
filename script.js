document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.querySelector('.message');

    yesBtn.addEventListener('click', function() {
        // Crear efecto de lluvia de corazones
        createHeartRain();
        
        // Cambiar mensaje
        message.innerHTML = `
            <h1>¡Eres la mejor decisión de mi vida!</h1>
            <p>¡Feliz San Valentín, mi amor!</p>
        `;
    });

    noBtn.addEventListener('mouseover', function() {
        // Mover el botón "No" aleatoriamente
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function createHeartRain() {
        const heartContainer = document.createElement('div');
        heartContainer.classList.add('heart-container');
        document.body.appendChild(heartContainer);

        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heartContainer.appendChild(heart);
        }

        setTimeout(() => {
            heartContainer.remove();
        }, 5000);
    }
});
