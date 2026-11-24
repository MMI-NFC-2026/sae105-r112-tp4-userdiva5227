// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon?.addEventListener("click", (event) => {
const summary =
    event.target instanceof Element ? event.target.closest("summary") : null;

if (!summary) return;

const detailActif = summary.closest("details");
if (!detailActif || !accordeon.contains(detailActif)) return;

accordeon.querySelectorAll("details[open]").forEach((detail) => {
    if (detail !== detailActif) detail.open = false;
});
});