
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var SeriesModel = require("../../model/Series");

var createListFromArray = require("../helper/createListFromArray");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var _default = SeriesModel.extend({
  type: 'series.__base_bar__',
  getInitialData: function (option, ecModel) {
    return createListFromArray(this.getSource(), this);
  },
  getMarkerPosition: function (value) {
    var coordSys = this.coordinateSystem;

    if (coordSys) {
      // PENDING if clamp ?
      var pt = coordSys.dataToPoint(coordSys.clampData(value));
      var data = this.getData();
      var offset = data.getLayout('offset');
      var size = data.getLayout('size');
      var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
      pt[offsetIndex] += offset + size / 2;
      return pt;
    }

    return [NaN, NaN];
  },
  defaultOption: {
    zlevel: 0,
    // ????????????
    z: 2,
    // ????????????
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    // stack: null
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // ??????????????????0
    barMinHeight: 0,
    // ???????????????0??????????????????????????????????????????
    barMinAngle: 0,
    // cursor: null,
    large: false,
    largeThreshold: 400,
    progressive: 3e3,
    progressiveChunkMode: 'mod',
    // barMaxWidth: null,
    // ???????????????
    // barWidth: null,
    // ???????????????????????????????????????30%??????????????????
    // barGap: '30%',
    // ????????????????????????????????????????????????20%??????????????????
    // barCategoryGap: '20%',
    // label: {
    //      show: false
    // },
    itemStyle: {},
    emphasis: {}
  }
});

module.exports = _default;