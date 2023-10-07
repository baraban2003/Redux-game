import cn from "classnames"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundSteps } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (e: IPlaygroundSteps): string => {
    if (e.success && e.success !== null) {
      return cn(stylesCommon.icon, styles.iconSuccess)
    }
    if (!e.success && e.success !== null) {
      return cn(stylesCommon.icon, styles.iconUnsuccess)
    }
    return stylesCommon.icon
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((e) => (
        <span key={e.step} className={getStylesRandomKeys(e)}>
          {MAP_ARROW_CODES[e.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
