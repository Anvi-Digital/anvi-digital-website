export function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
