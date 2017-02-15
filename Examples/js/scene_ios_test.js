/**
 * Copyright (c) 2015-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  ViroScene,
  ViroBox,
  ViroDirectionalLight,
  Viro360Image,
  ViroMaterials,
  Viro3DObject,
  ViroAnimations,
  ViroImage,
  ViroText,
  ViroAnimatedComponent,
  Viro360Video,
} from 'react-viro';

var scene_ios_test = React.createClass({
    render: function() {
    return (
        <ViroScene>
          <ViroDirectionalLight color="#ffffff" direction={[0, 0, -1.0]} />
          <Viro360Video source={{uri: "https://s3-us-west-2.amazonaws.com/viro/360_surf.mp4"}} onLoadStart={this._onLoadStart("Start")} onLoadEnd={this._onLoadEnd("End")} rotation={[0,0,0]} />
          <ViroText style={styles.baseText} position={[0,0, -8]} text="Testing!!!" />
          <ViroImage width={5.0} height={10.0} position={[6, .1, -8.1]} rotation={[0, 0, 0]} source={{uri: "http://wiki.magicc.org/images/c/ce/MAGICC_logo_small.jpg"}} />
          <ViroText style={{fontFamily: 'Helvetica-Bold', fontSize:10, textAlign:'center', textAlignVertical:'bottom', textClipMode:'cliptobounds', color:'#ff0000'}} text="Canada is the NYTimes place to visit this year. With it's beautiful cities and epic landscapes, our neighbor up north is full of splendor and adventure. Plus their president is cool :)."  width={5.0} height={10.0} position={[6, .1, -8]} rotation={[0, 0, 0]} />
          <ViroText style={{fontFamily: 'Helvetica-Bold', fontSize:12, textAlign:'left'}} text="Rotated Bold underlined Helvetica up in here!" width={5.0} position={[-3, .1, -8]} rotation={[0, -25, 0]} />
          <ViroText style={styles.baseText} position={[0,-1, -8]} text="Longer text that is within 1 thingy" />
          <ViroText style={styles.baseTextTwo} width={10.0} position={[0,1.5, -8]} text="Testing same text different width and length up in here. Know what I mean?" />
          <Viro3DObject source={require('./res/male02.obj')}
                          position={[-0.0, -100, -10]}
                          scale={[0.1, 0.1, 0.1]}
                          onLoad={this._onLoadObj}
                           />
          <Viro3DObject source={require('./res/heart.obj')}
                          position={[0.2, -5.5, -1.15]}
                          materials={["heart"]}
                           />
          <ViroImage source={require('./res/card_main.png')} height={2} width={4}
                         position={[0, 0, -5]}
                         scale={[0.1, 0.1, 0.1]} />
        </ViroScene>
    );
  },
  _onLoadObj() {
      console.log("Loaded the male02 OBJ file");
  },
  _onLoadStart(startText) {
    return () => {
      console.log("360 photo started");
    }
  },
  _onLoadEnd(endText) {
    return () => {
      console.log("360 photo ended");
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  baseText: {
      fontFamily: 'Courier',
      fontSize: 20,
      color: '#ffff00',
  },
  baseTextTwo: {
      fontFamily: 'Arial',
      fontSize: 12,
      color: '#ffffff',
  },
});

ViroMaterials.createMaterials({
  wework_title: {
    shininess: 1.0,
    lightingModel: "Constant",
    diffuseColor: "#ff0000",
  },
  heart: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/heart_d.jpg'),
  },
})

ViroAnimations.registerAnimations({
    moveRight:{properties:{positionX:"+0.5"}, duration: 1000},
    rotate:{properties:{rotateZ:"+45"}, duration:1000},
    scale:{properties:{scaleX:1.0, scaleY:0.8, scaleZ:1.0},
                  easing:"Bounce",
                  duration: 5000},
    animateImage:[
                  ["moveRight", "rotate"],
                  ["scale"],
    ],
});

module.exports = scene_ios_test;
