@echo off 
break>output_mocha.txt
echo Dom Creation >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_dom_creation | find "passing" >> output_mocha.txt
)

echo +++ >> output_mocha.txt
echo Dom Deletion >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_dom_deletion | find "passing" >> output_mocha.txt
)
echo +++  >> output_mocha.txt
echo Dom Interaction >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_dom_interaction| find "passing" >> output_mocha.txt
)

echo +++  >> output_mocha.txt
echo Dom >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_dom | find "passing" >> output_mocha.txt
)

echo +++  >> output_mocha.txt
echo Mocks >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_mocks | find "passing" >> output_mocha.txt
)

echo +++ >> output_mocha.txt
echo REST >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_rest | find "passing" >> output_mocha.txt
)
echo +++ >> output_mocha.txt
echo Spies >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_spies | find "passing" >> output_mocha.txt
)

echo +++ >> output_mocha.txt
echo Unit >> output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_unit | find "passing" >> output_mocha.txt
)