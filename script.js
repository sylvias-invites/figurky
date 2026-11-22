document.addEventListener("DOMContentLoaded", () => {
    const inviteEl = document.getElementById("invite-text");
    const dateEl = document.getElementById("date-text");
    const scrollPrompt = document.getElementById("scroll-prompt");
    const stickyHeader = document.getElementById("sticky-header");
    const heroSection = document.getElementById("uvod");

    // 1. POSTUPNÉ VYPISOVÁNÍ TEXTU (PÍSMENKO PO PÍSMENKU)
    function typeWriter(element, text, speed, callback) {
        let index = 0;
        element.textContent = "";

        function typeNext() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeNext, speed);
            } else if (callback) {
                callback();
            }
        }
        typeNext();
    }

    // Spuštění po krátké prodlevě po načtení figurek a jmen
    setTimeout(() => {
        const inviteText = inviteEl.getAttribute("data-text");
        const dateText = dateEl.getAttribute("data-text");

        // Nejdřív se napíše "Srdečně vás zveme na naši svatbu"
        typeWriter(inviteEl, inviteText, 65, () => {
            // Po krátké pauze se napíše datum "29.9.2027"
            setTimeout(() => {
                typeWriter(dateEl, dateText, 95, () => {
                    // Nakonec se objeví výzva se šipkou dolů
                    setTimeout(() => {
                        scrollPrompt.classList.add("visible");
                    }, 300);
                });
            }, 350);
        });
    }, 600);

    // 2. ZOBRAZENÍ MENU AŽ PO ODSCROLLOVÁNÍ Z ÚVODNÍ OBRAZOVKY
    window.addEventListener("scroll", () => {
        const triggerPoint = heroSection.offsetHeight * 0.65;
        if (window.scrollY > triggerPoint) {
            stickyHeader.classList.add("visible");
        } else {
            stickyHeader.classList.remove("visible");
        }
    });

    // Ovládání bočního menu
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const navDrawer = document.getElementById("nav-drawer");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => navDrawer.classList.add("open"));
    menuClose.addEventListener("click", () => navDrawer.classList.remove("open"));
    navLinks.forEach(link => {
        link.addEventListener("click", () => navDrawer.classList.remove("open"));
    });

    // 3. JEMNÉ KONFETY (BÍLÉ, ŠEDÉ, KRÉMOVÉ - ČTVERCE A SRDCE)
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
        "#FFFFFF", // čistě bílá
        "#F2E8D5", // krémová
        "#E5D8C0", // teplá béžovo-krémová
        "#D3D0CB", // jemná světle šedá
        "#B8B4AE"  // tlumená šedá
    ];

    const confettiCount = 55;
    const particles = [];

    for (let i = 0; i < confettiCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: Math.random() > 0.45 ? "heart" : "square",
            speedY: Math.random() * 1.4 + 0.7,
            speedX: Math.random() * 0.8 - 0.4,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 2 - 1,
            opacity: Math.random() * 0.45 + 0.45
        });
    }

    function drawHeart(ctx, size) {
        const topCurveHeight = size * 0.3;
        ctx.beginPath();
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
        ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
        ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
        ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;

            if (p.shape === "heart") {
                drawHeart(ctx, p.size * 1.2);
            } else {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            }

            ctx.restore();

            p.y += p.speedY;
            p.x += p.speedX + Math.sin(p.y * 0.015) * 0.3;
            p.rotation += p.rotationSpeed;

            if (p.y > canvas.height + 20) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();

    // 4. ODPOČET K DATU SVATBY (29. 9. 2027 11:00)
    const weddingDate = new Date("2027-09-29T11:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const daysEl = document.getElementById("cd-days");
        if (!daysEl) return;

        if (diff <= 0) {
            daysEl.textContent = "0";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days;
        document.getElementById("cd-hours").textContent = hours;
        document.getElementById("cd-minutes").textContent = minutes;
        document.getElementById("cd-seconds").textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // 5. ODESLÁNÍ RSVP FORMULÁŘE
    const rsvpForm = document.getElementById("rsvp-form");
    if (rsvpForm) {
        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("rsvp-status").textContent = "Děkujeme! Vaše odpověď byla zaznamenána.";
            rsvpForm.reset();
        });
    }

    
});
