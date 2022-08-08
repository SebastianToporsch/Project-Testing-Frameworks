@echo off 
break>output_jasmine.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine | find "Finished in" >> output_jasmine.txt
  )



