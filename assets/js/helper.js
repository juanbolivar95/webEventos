/*
    ? DocumentFragment
        * Es un contenedor en memoria que no forma parte del DOM real.
        * Permite crear o agrupar múltiples elementos sin causar repintados intermedios.
        * Mejora el rendimiento porque se inserta en el DOM de una sola vez.

    ? class SocialLink extends HTMLElement
        * Define un Web Component <social-link>.
        * Hereda de HTMLElement → se convierte en un "custom element".
        * connectedCallback() → se ejecuta cuando el elemento entra al DOM.
        * Lee los atributos "icon" y "url" definidos en el HTML o por JS.
        * Renderiza un <a> con un ícono de FontAwesome dentro del componente.
        * Se registra con customElements.define("social-link", SocialLink),
        * lo que permite usar <social-link> como etiqueta nativa en el HTML.
*/


document.addEventListener("DOMContentLoaded", () => {
    getSocials();
});

const getSocials = async () => {
    const footerSocials = document.querySelector(".footer-socials");
    const headerSocials = document.querySelector(".header-socials");

    try {
        const response = await fetch("/assets/data/socials.json");
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const socials = await response.json();

        const footerFragment = document.createDocumentFragment();
        const headerFragment = document.createDocumentFragment();

        socials.forEach((social) => {
            const footerLink = document.createElement("social-link");
            footerLink.setAttribute("icon", social.icon);
            footerLink.setAttribute("url", social.url);

            const headerLink = footerLink.cloneNode();
            headerLink.setAttribute("icon", social.icon);
            headerLink.setAttribute("url", social.url);

            footerFragment.appendChild(footerLink);
            headerFragment.appendChild(headerLink);
        });

        footerSocials.appendChild(footerFragment);
        headerSocials.appendChild(headerFragment);

    } catch (error) {
        console.error("Error cargando JSON de redes sociales:", error);
    }
};


class SocialLink extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute("icon") || "fa-brands fa-question";
        const url = this.getAttribute("url") || "#";

        this.innerHTML = `
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <i class="${icon}"></i>
            </a>
        `;
    }
}

customElements.define("social-link", SocialLink);
