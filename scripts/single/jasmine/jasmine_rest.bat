echo REST >> outputs/output_jasmine_rest.txt
for /L %%x in (1, 1, 50) do (
  npm run test_jasmine_rest | find "Finished in" >> outputs/output_jasmine_rest.txt
)