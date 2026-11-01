// Beispieltexte, damit man in den Entwürfen Modus und Höflichkeit durchklicken kann
const BEISPIEL = {
  quelle: "Hey, sorry for the late reply — been swamped. Wanna grab coffee Thursday? Lmk.",
  ausgabe: {
    natuerlich: {
      locker: "¡Hola! Perdona por tardar en contestar, he estado a tope. ¿Te apetece un café el jueves? Ya me dices.",
      neutral: "Hola, perdona la tardanza en responder; he tenido muchísimo trabajo. ¿Te gustaría tomar un café el jueves? Me avisas.",
      hoeflich: "Buenas tardes. Disculpe la demora en mi respuesta; he estado muy ocupado. ¿Le gustaría tomar un café el jueves? Quedo a la espera de su confirmación."
    },
    genau: {
      locker: "Hola, perdón por la respuesta tardía, he estado saturado. ¿Quieres tomar un café el jueves? Avísame.",
      neutral: "Hola, perdón por la respuesta tardía; he estado muy ocupado. ¿Quieres tomar un café el jueves? Avísame.",
      hoeflich: "Hola, disculpe la respuesta tardía; he estado muy ocupado. ¿Quiere tomar un café el jueves? Avíseme."
    }
  },
  hinweise: {
    locker: ["„swamped“ → „a tope“: Redewendung statt Wort für Wort", "„Lmk“ ausgeschrieben als „Ya me dices“", "„Wanna grab coffee“ → „¿Te apetece un café?“, so fragt man in Spanien"],
    neutral: ["„swamped“ → „muchísimo trabajo“: verständlich statt wörtlich", "„Lmk“ → „Me avisas“", "Satzzeichen an Spanisch angepasst (¿ … ?)"],
    hoeflich: ["Anrede mit „usted“", "Begrüßung „Buenas tardes“ ergänzt", "Höfliche Schlussformel ergänzt, wie es Einheimische schreiben würden"]
  }
};

function demoStarten(wurzel) {
  const zustand = { modus: "natuerlich", ton: "locker" };
  const $ = (s) => wurzel.querySelectorAll(s);
  function zeichnen() {
    $("[data-modus]").forEach((b) => b.classList.toggle("an", b.dataset.modus === zustand.modus));
    $("[data-ton]").forEach((b) => b.classList.toggle("an", b.dataset.ton === zustand.ton));
    $(".ausgabe-text").forEach((e) => (e.textContent = BEISPIEL.ausgabe[zustand.modus][zustand.ton]));
    $(".quelle-text").forEach((e) => (e.textContent = BEISPIEL.quelle));
    $(".hinweise").forEach((e) => {
      e.style.display = zustand.modus === "natuerlich" ? "" : "none";
      const liste = e.querySelector("ul");
      liste.innerHTML = BEISPIEL.hinweise[zustand.ton].map((h) => `<li>${h}</li>`).join("");
    });
    $(".modus-info").forEach((e) => (e.textContent = zustand.modus === "natuerlich"
      ? "Überträgt den Sinn, ergänzt Lücken und klingt wie von Einheimischen geschrieben."
      : "Bleibt so nah wie möglich am Originaltext."));
  }
  wurzel.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-modus],[data-ton]");
    if (!b) return;
    if (b.dataset.modus) zustand.modus = b.dataset.modus;
    if (b.dataset.ton) zustand.ton = b.dataset.ton;
    zeichnen();
  });
  zeichnen();
}
document.addEventListener("DOMContentLoaded", () => document.querySelectorAll(".geraet").forEach(demoStarten));
