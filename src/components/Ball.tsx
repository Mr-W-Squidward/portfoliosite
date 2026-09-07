import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'

type BallProps = {
  angle: number
  index: number
  label: string
  isActive: boolean
  isDisabled: boolean
  onClick: () => void
  transitionDuration: number
  wheelRotation: number
}

const starPositions: Record<number, Array<[number, number]>> = {
  1: [[50, 50]],
  2: [[50, 31], [50, 69]],
  3: [[50, 24], [31, 67], [69, 67]],
  4: [[32, 32], [68, 32], [32, 68], [68, 68]],
  5: [[30, 28], [70, 28], [50, 50], [30, 72], [70, 72]],
  6: [[30, 23], [70, 23], [30, 50], [70, 50], [30, 77], [70, 77]],
  7: [[30, 23], [70, 23], [30, 50], [50, 50], [70, 50], [30, 77], [70, 77]],
}

export function Ball({ angle, index, label, isActive, isDisabled, onClick, transitionDuration, wheelRotation }: BallProps) {
  const starCount = index + 1

  return (
    <button
      aria-label={`Show ${label}`}
      aria-pressed={isActive}
      className="dragon-ball-button"
      disabled={isDisabled}
      onClick={onClick}
      style={{
        '--ball-angle': `${angle}deg`,
        '--ball-counter-angle': `${-angle}deg`,
      } as CSSProperties}
      type="button"
    >
      <motion.span
        animate={{ rotate: -wheelRotation }}
        className="ball-upright"
        transition={{ duration: transitionDuration, ease: [0.2, 0.75, 0.2, 1] }}
      >
        <span aria-hidden="true" className="dragon-ball">
          <span className="dragon-ball-shine" />
          <span className="dragon-ball-stars">
            {starPositions[starCount].map(([x, y], starIndex) => (
              <span
                className="dragon-ball-star"
                key={starIndex}
                style={{ '--star-x': `${x}%`, '--star-y': `${y}%` } as CSSProperties}
              >★</span>
            ))}
          </span>
        </span>
        <span className="ball-tooltip">{label}</span>
      </motion.span>
    </button>
  )
}
