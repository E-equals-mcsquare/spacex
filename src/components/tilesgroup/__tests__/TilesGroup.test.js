import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tile  from '../tile/Tile'

describe('Tile', () => {
  it('renders Tile', () => {
    const wrapper = shallow(<Tile 
        flightimageurl="https://sampleimage.com"
        missionids={["ABC", "DEF"]}
        missionname="Mission 1"
        launchyear="2014"
        successfullaunch="true"
        successfulland="false" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})