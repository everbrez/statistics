// actions types

export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

// actions creators

export function toggleSidebar(value) {
  return {
    type: SIDEBAR_TOGGLE,
    value
  }
}

