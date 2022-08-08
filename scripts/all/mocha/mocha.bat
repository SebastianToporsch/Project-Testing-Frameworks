@echo off 
break>output_mocha.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha | find "passing" >> output_mocha.txt
  )



