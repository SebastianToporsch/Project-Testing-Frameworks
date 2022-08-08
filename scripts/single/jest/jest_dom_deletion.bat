@echo off 
echo Dom Deletion >> outputs/output_jest_deletion.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_dom_deletion 2>> outputs/output_jest_deletion.txt
)