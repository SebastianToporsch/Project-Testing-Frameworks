import snapshot from 'jasmine-snapshot'

const { MatchesSnapshot } = snapshot

/* eslint-disable no-undef */
describe('Name of the group', () => {
  it('matches simple snapshot', () => {
    const actual = 'fried chicken'
    // do stuff . . .
    const snapshot = 'fried chicken'
    MatchesSnapshot(snapshot, actual)
  })
})
