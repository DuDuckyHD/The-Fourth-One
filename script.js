document.addEventListener("DOMContentLoaded", function() {
    // Fade in page
    document.body.classList.add("loaded");

    // Fade out on link click
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        if (link.target !== "_blank" && !link.href.includes("mailto:")) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const href = this.href;
                document.body.classList.remove("loaded");
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // match transition duration
            });
        }
    });
});

