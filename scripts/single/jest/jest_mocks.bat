@echo off 
echo Mocks >> outputs/output_jest_mocks.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_mocks 2>> outputs/output_jest_mocks.txt
)