// VEXORA-style starter template. Edit the settings below before publishing.
const AGENCY = {
  name: "Vexora Studio", // Replace with your final business name
  email: "chameeshamadushan45@gmail.com",
  whatsapp: "94769103981" // International format, digits only
};

document.title = `${AGENCY.name} — Creative Digital Solutions`;
document.querySelectorAll("[data-brand]").forEach(el => {
  el.innerHTML = `${AGENCY.name}<span class="brand-dot">.</span>`;
});
document.querySelectorAll("[data-email]").forEach(el => el.textContent = AGENCY.email);
document.querySelectorAll("[data-email-link]").forEach(el => el.href = `mailto:${AGENCY.email}`);
document.querySelectorAll("[data-wa]").forEach(el => el.textContent = `+${AGENCY.whatsapp.slice(0,2)} ${AGENCY.whatsapp.slice(2,4)} ${AGENCY.whatsapp.slice(4)}`);
document.querySelectorAll("[data-wa-link]").forEach(el => el.href = `https://wa.me/${AGENCY.whatsapp}`);
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Project enquiry — ${data.get("service")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
  );
  window.location.href = `mailto:${AGENCY.email}?subject=${subject}&body=${body}`;
});
