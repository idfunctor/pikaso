import type { Context } from 'konva/types/Context'

import { Board } from '../../Board'
import { FlexibleCropper } from '../FlexibleCropper'

import type { CircularCropperOptions } from '../../types'

export class FlexibleCircularCropper extends FlexibleCropper {
  constructor(board: Board, options: Partial<CircularCropperOptions>) {
    super(board, {
      ...options,
      circular: true,
      keepRatio: true
    })

    this.setupOverlay()
    this.layer.batchDraw()
  }

  /**
   *
   */
  protected setupOverlay() {
    this.overlay.sceneFunc(
      (
        ctx: Context & {
          fillStyle?: string
        },
        shape
      ) => {
        ctx.beginPath()

        ctx.fillStyle = this.options.overlayColor
        ctx.fillRect(0, 0, shape.width(), shape.height())

        const radius = this.transformer.width() / 2

        ctx.arc(
          this.cropzone.x(),
          this.cropzone.y(),
          radius,
          0,
          2 * Math.PI,
          false
        )
        ctx.clip()
        ctx.clearRect(
          this.cropzone.x() - radius,
          this.cropzone.y() - radius,
          radius * 2,
          radius * 2
        )

        ctx.closePath()
        ctx.fillStrokeShape(shape)
      }
    )
  }
}