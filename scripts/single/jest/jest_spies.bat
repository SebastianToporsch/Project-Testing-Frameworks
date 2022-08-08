@echo off 
echo Spies >> outputs/output_jest_spies.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_spies 2>> outputs/output_jest_spies.txt
)