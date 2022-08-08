@echo off 
echo REST >> outputs/output_jest_rest.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_rest 2>> outputs/output_jest_rest.txt
)