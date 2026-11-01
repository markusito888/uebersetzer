# Übersetzer

Deutsch, Englisch und Spanisch für Mac und iPhone. Zwei Modi:

- **Genau:** bleibt nah am Original, wie DeepL.
- **Natürlich:** überträgt Sinn und Ton, ersetzt Redewendungen, füllt logische Lücken. Darunter steht, was angepasst wurde.

Die Ausgangssprache wird automatisch erkannt, die Zielsprache wählst du rechts (DE, EN, ES). Schreibst du in der Zielsprache, geht es automatisch zurück in die zuletzt benutzte Sprache. Klick auf die erkannte Sprache legt sie fest, ⇄ tauscht die Richtung.
Ton: Locker (du/tú), Neutral, Höflich (Sie/usted). Variante: Deutschland/Österreich/Schweiz, Spanien/Lateinamerika, US/UK.

## Starten
Doppelklick auf `Übersetzer starten.command` → öffnet http://localhost:4380/app/.
Beim ersten Start in den Einstellungen den Claude-API-Schlüssel eintragen (bleibt nur auf dem Gerät).

## Aufbau
- `app/` – die App (HTML, CSS, JS, Manifest, Service Worker, Symbole)
- `app/vendor/anthropic-sdk-1.3.0.mjs` – offizielles Claude-SDK, mit esbuild zu einer Datei gebündelt
- `server.mjs` – kleiner lokaler Server
- `designs/` – die beiden Design-Entwürfe

Nach Änderungen an der App in `app/sw.js` die Versionsnummer (`uebersetzer-v2`) erhöhen.
