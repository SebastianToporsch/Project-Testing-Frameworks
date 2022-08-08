@echo off 
break>output_jest.txt
echo Dom Creation >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_dom_creation --silent=true 2>> output_jest.txt
)

echo +++ >> output_jest.txt
echo Dom Deletion >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_dom_deletion --silent=true 2>> output_jest.txt
)
echo +++  >> output_jest.txt
echo Dom Interaction >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_dom_interaction --silent=true 2>> output_jest.txt
)

echo +++  >> output_jest.txt
echo Dom >> output_jest.txt
for /L %%x in (1, 1, 1) do (output_jest
  npm run test_jest_dom --silent=true 2>> output_jest.txt
)

echo +++  >> output_jest.txt
echo Mocks >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_mocks --silent=true 2>> output_jest.txt
)

echo +++ >> output_jest.txt
echo REST >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_rest --silent=true 2>> output_jest.txt
)
echo +++ >> output_jest.txt
echo Spies >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_spies --silent=true 2>> output_jest.txt
)

echo +++ >> output_jest.txt
echo Unit >> output_jest.txt
for /L %%x in (1, 1, 1) do (
  npm run test_jest_unit --silent=true 2>> output_jest.txt
)



