import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice} from '@reduxjs/toolkit'

interface UIState {
  mobileMenuOpen: boolean
  activeFilter: string
  scrolled: boolean
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeFilter: 'All',
  scrolled: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false
    },
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload
    },
    setScrolled(state, action: PayloadAction<boolean>) {
      state.scrolled = action.payload
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setActiveFilter, setScrolled } = uiSlice.actions
export default uiSlice.reducer