import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setSteps", () => {
  it("check setSteps", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())
    const firstStep = {
      currentValue: setStepsState.steps[0].currentValue,
      enteredValue: null,
      step: 1,
      success: null,
    }
    expect(initialState.steps.length).toEqual(0)
    expect(setStepsState.steps.length).toEqual(1)
    expect(setStepsState.steps[0]).toEqual(firstStep)
  })
})
