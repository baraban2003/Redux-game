import styles from "./Controls.module.css"
import { PlayCircleOutline, PauseCircleOutline } from "@mui/icons-material"

import { Button } from "../../../UI"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { setIsTimerActive, isTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayCircleOutline />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
      >
        Play
      </Button>
      <Button
        endIcon={<PauseCircleOutline />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
