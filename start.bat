@echo off
chcp 65001 > nul
cd /d "D:\3Курс\Куратор\Atom_Redesign\project"
echo ==========================================
echo Запуск чайной "Дракон и Феникс"...
echo ==========================================
"D:\node.exe" "D:\node_modules\npm\bin\npm-cli.js" start
pause
