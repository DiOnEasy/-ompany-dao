import { makeAutoObservable } from "mobx"

interface IModalStates{
    shown: boolean
    submitted: boolean
}

class ModalStore {
    initialState: IModalStates = {
		shown: false,
        submitted: false
	}
    constructor() {
		makeAutoObservable(this)
	}


    setShown = (state: boolean) => {
        this.initialState.shown = state
    }

    setSubmitted = (state: boolean) => {
        this.initialState.submitted = state
    }

}

export default new ModalStore()