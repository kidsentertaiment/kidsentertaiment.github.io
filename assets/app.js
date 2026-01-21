// Año automático en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// URL del canal de YouTube
const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UCU8hn2SnqSRFTE1VOi20Qsw";

// Botón principal (por si se usa JS en el futuro)
const channelButton = document.querySelector(".btn");
if (channelButton) {
  channelButton.setAttribute("href", YOUTUBE_CHANNEL_URL);
  channelButton.setAttribute("target", "_blank");
  channelButton.setAttribute("rel", "noopener noreferrer");
}

// Nada más: JS mínimo para evitar errores y cumplir requisitos básicos
