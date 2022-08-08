@echo off 
echo Dom >> outputs/output_jest_dom.txt
for /L %%x in (1, 1, 50) do (output_jest
  npm run test_jest_dom 2>> outputs/output_jest_dom.txt
)