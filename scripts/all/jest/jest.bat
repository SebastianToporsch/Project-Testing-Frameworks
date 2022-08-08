@echo off 
break>output_jest.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jest --no-color 2>>output_jest.txt 
  )






