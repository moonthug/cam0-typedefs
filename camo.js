// @flow

declare module 'cam0' {

  /////////////////////////////////////////////////////////////////////////////////////////
  //
  // MODELS
  //

  ///////////////////////////////////////
  //
  // PATTERN

  declare type Pattern = {
    id: string,
    author: string,
    layers: Array<Layer>,
    settings: PatternSettings
  };

  ///////////////////////////////////////
  //
  // PATTERN SETTINGS

  declare type PatternSettings = {
    backgroundColor: string,
    blendMode: string,
    blur: boolean,
    blurAmount: number
  };

  ///////////////////////////////////////
  //
  // LAYER

  declare type Layer = {
    id: number,
    draw: boolean,
    noiseSeed: number,
    color: string,
    alpha: number,
    thresholdMin: number,
    thresholdMax: number,
    blendMode: string,
    frequency: number,
    amplitude: number
  };
}
