import arrowLeft from '../../assets/images/Arrow Left.svg'
import arrowRight from '../../assets/images/Arrow Right.svg'

type ArrowsProps = {
  disabled: boolean
  onNext: () => void
  onPrevious: () => void
}

export function Arrows({ disabled, onNext, onPrevious }: ArrowsProps) {
  return (
    <div aria-label="Section controls" className="scene-arrows" role="group">
      <button aria-label="Previous section" className="arrow-button arrow-button-left" disabled={disabled} onClick={onPrevious} type="button">
        <img alt="" aria-hidden="true" src={arrowLeft} />
      </button>
      <button aria-label="Next section" className="arrow-button arrow-button-right" disabled={disabled} onClick={onNext} type="button">
        <img alt="" aria-hidden="true" src={arrowRight} />
      </button>
    </div>
  )
}
