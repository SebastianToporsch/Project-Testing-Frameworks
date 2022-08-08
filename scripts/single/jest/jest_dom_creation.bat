@echo off 
echo Dom Creation >> outputs/output_jest_creation.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_dom_creation 2>> outputs/output_jest_creation.txt
)
