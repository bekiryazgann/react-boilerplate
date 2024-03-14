import create from "zustand"

export const useSettings = create(() => ({
    settings: {
        words: 10
    }
}))
