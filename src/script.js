document.addEventListener("DOMContentLoaded", () => {
    // Accordion Toggle
    document.querySelectorAll(".accordian-head").forEach((item) => {
        item.addEventListener("click", () => {
            let accCollapse = item.nextElementSibling;
            let accIcon = item.children[1];

            // Smooth transition using max-height
            if (accCollapse.style.height) {
                accCollapse.style.height = null;
            } else {
                accCollapse.style.height = accCollapse.scrollHeight + "px";
            }

            // Toggle icon styles
            accIcon?.classList.toggle("bg-black");
            accIcon?.classList.toggle("bg-slate-100");
            accIcon?.classList.toggle("text-white");
            accIcon?.classList.toggle("rotate-45");
        });
    });

    // Navigation Toggle
    const navToggle = document.querySelector(".nav-Toggle");
    const responsiveNav = document.querySelector(".responsive-nav");
    const mask = document.querySelector(".mask");
    const modal = document.querySelector(".modal");

    if (navToggle && responsiveNav && mask) {
        navToggle.addEventListener("click", () => {
            responsiveNav.classList.toggle("max-lg:-left-96");
            responsiveNav.classList.toggle("left-0");
            document.body.style.overflowY = 'hidden'
            mask.classList.toggle("hidden");
        });

        mask.addEventListener("click", () => {
            responsiveNav.classList.add("max-lg:-left-96");
            responsiveNav.classList.remove("left-0");
            document.body.style.overflowY = 'scroll'
            mask.classList.add("hidden");
            modal?.classList.add("hidden");
        });
    }

    // Modal Toggles
    document.querySelectorAll(".modal-tog").forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector(".modal")?.classList.toggle("hidden");
            document.body.style.overflowY = 'hidden'
            mask?.classList.toggle("hidden");
        });
    });
});
