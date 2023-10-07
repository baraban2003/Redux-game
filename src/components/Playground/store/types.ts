export interface IPlaygroundSteps {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  totalSuccessful: number
  totalUnsuccessful: number
  currentStep: number
  steps: IPlaygroundSteps[]
}
