/**
 * Import translation dictionary for i18n support.
 */
import { translations } from "../i18n/translations";

/**
 * Updates the application's language based on the provided language code.
 * 
 * @param {string} lang - The language code to apply (e.g., 'en' or 'es').
 * 
 * Side Effects:
 * - Saves the selected language to localStorage under the 'lang' key.
 * - Updates the document's 'lang' attribute for accessibility and SEO.
 * - Iterates over all DOM elements with the 'data-i18n' attribute and updates their innerHTML.
 * - Updates placeholders for forms using 'data-i18n-placeholder'.
 * - Updates the language toggle button text to display the current language.
 */
export function setLanguage(lang) {
    // Persist language preference in localStorage
    localStorage.setItem("lang", lang);
    
    // Update the HTML lang attribute for accessibility
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations["en"];
    const currentYear = new Date().getFullYear().toString();

    // 1. Translate standard content (innerHTML)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (key === "footer.rights") {
                el.innerHTML = dict[key].replace("{year}", currentYear);
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // 2. Translate form placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // 3. Update the language toggle button text (if present)
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.textContent = lang.toUpperCase();
    }
}

/**
 * Global Page Initialization
 * Runs immediately when the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Language from localStorage or default to 'en'
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    // Initialize Theme (Dark/Light Mode)
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // Scroll Reveal Logic using IntersectionObserver
    // Animates elements fading in as they enter the viewport
    const revealElements = document.querySelectorAll(".reveal");
    const revealCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
    });

    revealElements.forEach((el) => revealObserver.observe(el));
});