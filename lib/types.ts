import Konva from 'konva'

import type { Line } from './Shape/Line'
import type { Rect } from './Shape/Rect'
import type { Arrow } from './Shape/Arrow'
import type { Label } from './Shape/Label'
import type { Image } from './Shape/Image'
import type { Circle } from './Shape/Circle'
import type { Ellipse } from './Shape/Ellipse'
import type { Polygon } from './Shape/Polygon'
import type { Triangle } from './Shape/Triangle'

export type Nullable<T> = T | null

export interface IEmitter {
  emit: (eventName: string, data: object) => void
}

export interface UnknownObject {
  [key: string]: boolean | number | string
}
export interface Settings {
  container: HTMLDivElement
  width?: number
  height?: number
}

export interface Dimensions {
  width: number
  height: number
}

export interface Point {
  x: number
  y: number
}

export interface ExportOptions {
  pixelRatio?: number
}

export interface HistoryState {
  node: Konva.Stage | Konva.Layer | Konva.Shape | Konva.Group
  current: UnknownObject
}

export interface CropOptions extends ExportOptions {
  rect: Point & Dimensions
}

export interface BaseCropperOptions {
  x: number
  y: number
  keepRatio: boolean
  overlayColor: string
  overlayOpacity: number
  fixed: boolean
  borderColor: string
  borderDash: number[]
  borderWidth: number
  anchorSize: number
  anchorColor: string
  anchorBorderColor: string
  anchorBorderWidth: number
  marginRatio: number
  guides: boolean
  guidesCount: number
  guidesColor: string
  guidesWidth: number
  guidesDash: number[]
  minWidth: number
  minHeight: number
}

export interface RectangleCropperOptions extends BaseCropperOptions {
  circular: false
  width: number
  height: number
  aspectRatio: number
}

export interface CircularCropperOptions extends BaseCropperOptions {
  circular: true
  radius: number
  circleBorderColor?: string
  circleBorderDash?: number[]
  circleBorderWidth?: number
}

export type CropperOptions = RectangleCropperOptions | CircularCropperOptions

export enum DrawType {
  Pencil = 'Pencil',
  Line = 'Line',
  Arrow = 'Arrow',
  Circle = 'Circle',
  Rect = 'Rect',
  Ellipse = 'Ellipse',
  Polygon = 'Polygon',
  Triangle = 'Triangle'
}

export interface Shapes {
  line: Line
  rect: Rect
  arrow: Arrow
  label: Label
  image: Image
  circle: Circle
  ellipse: Ellipse
  triangle: Triangle
  polygon: Polygon
}

export interface DrawableShape {
  draw: (config: Partial<Konva.ShapeConfig>) => void
  stopDrawing: () => void
}

export interface Shape {
  insert: (config: Konva.ShapeConfig) => void
}