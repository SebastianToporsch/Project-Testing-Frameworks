echo REST >> output_mocha_rest.txt
for /L %%x in (1, 1, 50) do (
  npm run test_mocha_rest | find "passing" >> output_mocha_rest.txt
)