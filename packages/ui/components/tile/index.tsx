import React, { Component } from 'react'

import { TouchableHighlight, View } from 'react-native'
import { clear } from 'theme/include/colors'

interface Props {
  style: any
  onPress: () => void
}

const styles: any = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  }
}

export default class Tile extends Component<Props> {
  render() {
    const { style, onPress } = this.props

    return (
      <TouchableHighlight underlayColor={clear} onPress={onPress} style={[styles.tile, styles.container, style]}>
        <View style={styles.container}>
          {this.props.children}
        </View>
      </TouchableHighlight>
    )
  }
}
