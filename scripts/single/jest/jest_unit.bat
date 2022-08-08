@echo off 
echo Unit >> outputs/output_jest_unit.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_unit 2>> outputs/output_jest_unit.txt
)
