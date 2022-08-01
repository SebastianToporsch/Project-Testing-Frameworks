import { getFixturePath } from 'jest-fixtures'

/* eslint-disable no-undef */
describe('Name of the group', () => {
  it('should behave...', async () => {
    const fixtureFilePath = await getFixturePath('fixtures', 'index', 'index.html')
    console.log(fixtureFilePath)
  })
})
