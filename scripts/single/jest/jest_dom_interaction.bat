@echo off 
echo Dom Interaction >> outputs/output_jest_interaction.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest_dom_interaction 2>> outputs/output_jest_interaction.txt
)