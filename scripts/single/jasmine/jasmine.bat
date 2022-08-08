@echo off 
break>outputs/output_jasmine.txt
echo Dom Creation >> output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_dom_creation | find "Finished in" >> outputs/output_jasmine.txt
)

echo +++ >> outputs/output_jasmine.txt
echo Dom Deletion >> output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_dom_deletion | find "Finished in" >> outputs/output_jasmine.txt
)
echo +++  >> output_jasmine.txt
echo Dom Interaction >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_dom_interaction| find "Finished in" >> outputs/output_jasmine.txt
)

echo +++  >> outputs/output_jasmine.txt
echo Dom >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_dom | find "Finished in" >> outputs/output_jasmine.txt
)

echo +++  >> outputs/output_jasmine.txt
echo Mocks >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_mocks | find "Finished in" >> outputs/output_jasmine.txt
)

echo +++ >> outputs/output_jasmine.txt
echo REST >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_rest | find "Finished in" >> outputs/output_jasmine.txt
)
echo +++ >> outputs/output_jasmine.txt
echo Spies >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_spies | find "Finished in" >> outputs/output_jasmine.txt
)

echo +++ >> outputs/output_jasmine.txt
echo Unit >> outputs/output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_unit | find "Finished in" >> outputs/output_jasmine.txt
)
