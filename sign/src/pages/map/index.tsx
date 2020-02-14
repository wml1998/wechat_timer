import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Map, Button  } from '@tarojs/components'
import './index.scss'

class MapCom extends Component {
  config: Config = {
    navigationBarTitleText: '一面而就'
  }

  state={
    location: {
      longitude: 0,
      latitude: 0
    }
  }

  componentDidShow () {
    Taro.getLocation({
      type: 'wgs84',
      success: (res)=>{
        this.setState({
          location: res
        })
      }
    })
  }

  componentDidHide () { }

  render () {
    let {longitude, latitude} = this.state.location;
    return (
      <View className='wrap'>
        <Map longitude={longitude} latitude={latitude} show-location/>
        <Button>添加面试</Button>
      </View>
    )
  }
}


export default MapCom as ComponentClass;
