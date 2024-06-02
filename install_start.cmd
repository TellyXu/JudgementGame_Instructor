@echo on
cd %~dp0
 
echo Starting Backend ...
start cmd /c "cd backend && npm install  && npm start" 
  
echo Starting Frontend ...
start cmd /c "cd frontend && npm install  && npm start"
