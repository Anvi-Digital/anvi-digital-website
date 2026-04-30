export function scrollToContact(e?: React.MouseEvent | Event) {
  if (e) e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
