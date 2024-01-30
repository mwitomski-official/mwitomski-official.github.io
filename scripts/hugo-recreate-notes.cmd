@echo off
cd ..
cd "assets\indices"
del /S *.json
cd..
cd ..
hugo-obsidian -input=content -output=assets/indices -index -root=.
pause