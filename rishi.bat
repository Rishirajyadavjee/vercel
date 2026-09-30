@echo off
echo ====================================================
echo  Stopping existing processes listening on port 3000...
echo ====================================================

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo Terminating PID %%a on port 3000...
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo ====================================================
echo  Starting Smooth Scroll Animation on Port 3000...
echo ====================================================
echo.

npx vite --host 0.0.0.0 --port 3000 --strictPort
