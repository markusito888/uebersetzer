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

## Online (Mac und iPhone)
https://markusito888.github.io/uebersetzer/ (GitHub Pages aus dem Zweig `main`).

- **iPhone:** Adresse in Safari öffnen → Teilen-Knopf → „Zum Home-Bildschirm“.
- **Mac:** Adresse in Safari öffnen → Menü „Ablage“ → „Zum Dock hinzufügen“.

Der API-Schlüssel wird auf jedem Gerät einmal in den Einstellungen eingetragen.
Änderungen veröffentlichen: committen und `git push`. GitHub Pages baut dann in etwa einer Minute neu.

## Abo-Fassung (ohne API-Schlüssel)
https://claude.ai/artifact/RFFT4y7u8roiDFcUzfJfB7 (nur für dich sichtbar, solange du sie nicht teilst)

Läuft als Claude-Artifact über dein Claude-Abo statt über API-Guthaben. Quelle: `artifact/uebersetzer.html`.
Unterschiede zur API-Fassung: übersetzt auf Knopfdruck oder mit ⌘ + Enter (nicht beim Tippen), kein Einfügen-Knopf (⌘V nutzen), Modell wählt claude.ai (Stufe „default“).
Änderungen: Datei bearbeiten und von Claude neu veröffentlichen lassen (gleiche Adresse bleibt).
