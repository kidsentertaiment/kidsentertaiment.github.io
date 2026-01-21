const YEAR = new Date().getFullYear();
for (const el of document.querySelectorAll("#year")) el.textContent = YEAR;

const TU_CANAL_URL = "https://www.youtube.com/@TU_USUARIO";

const go = document.getElementById("goChannel");
if (go) go.href = TU_CANAL_URL;

const copyBtn = document.getElementById("copyLink");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(TU_CANAL_URL);
      copyBtn.textContent = "Enlace copiado";
      setTimeout(() => (copyBtn.textContent = "Copiar enlace"), 1500);
    } catch {
      alert("No se pudo copiar. Enlace: " + TU_CANAL_URL);
    }
  });
}

// Cookie consent (simple)
const CONSENT_KEY = "cookie_consent_v1"; // values: "accepted" | "rejected"
const banner = document.getElementById("cookieBanner");

function showBannerIfNeeded() {
  if (!banner) return;
  const v = localStorage.getItem(CONSENT_KEY);
  banner.hidden = (v === "accepted" || v === "rejected");
}
showBannerIfNeeded();

const accept = document.getElementById("acceptCookies");
const reject = document.getElementById("rejectCookies");
if (accept) accept.addEventListener("click", () => { localStorage.setItem(CONSENT_KEY, "accepted"); showBannerIfNeeded(); });
if (reject) reject.addEventListener("click", () => { localStorage.setItem(CONSENT_KEY, "rejected"); showBannerIfNeeded(); });

const reset = document.getElementById("resetConsent");
if (reset) reset.addEventListener("click", () => { localStorage.removeItem(CONSENT_KEY); showBannerIfNeeded(); });
