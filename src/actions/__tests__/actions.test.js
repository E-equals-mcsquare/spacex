import * as actions from '../index'

describe('actions', () => {
    const serviceUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'
    const mockJson = {
        type: 'serviceUrl',
        serviceUrl: serviceUrl
    }
    describe('serviceUrl', () => {
      it('should create an action with a given serviceUrl', () => {
        const expectedAction = {
          type: actions.serviceUrl,
          serviceUrl
        }
        expect(mockJson).toEqual(expectedAction)
      })
    })
  })