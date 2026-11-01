#!/bin/bash
# Startet den Übersetzer lokal und öffnet ihn im Browser
cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"
if ! curl -s -o /dev/null http://localhost:4380/app/; then
  nohup node server.mjs > server.log 2>&1 &
  sleep 1
fi
open "http://localhost:4380/app/"
