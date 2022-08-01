import chai, { expect } from 'chai'
import snapshot from 'mocha-chai-jest-snapshot'
const { jestSnapshotPlugin } = snapshot

chai.use(jestSnapshotPlugin())

/* eslint-disable no-undef */
describe('Name of the group', () => {
  it('matches simple snapshot', () => {
    // expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
