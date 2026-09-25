@echo off
title DSA Mastery Launcher
echo ====================================================
echo Starting DSA Mastery (Java Fullstack Application)
echo ====================================================

echo [1/3] Clearing any previous instances on port 5000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul

echo [2/3] Starting Backend Server on http://localhost:5000...
start "DSA Backend (Port 5000)" cmd /k "cd /d %~dp0backend && node src/server.js"

echo [3/3] Starting Frontend Dev Server on http://localhost:5173...
start "DSA Frontend (Port 5173)" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ====================================================
echo App is starting!
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo ====================================================
timeout /t 3 >nul
start http://localhost:5173
