import { createAction } from "@reduxjs/toolkit"
import { BTN_DISABLED, BTN_ENABLED } from "../types/btnType"

export const disableBtn = createAction(BTN_DISABLED)
export const enableBtn = createAction(BTN_ENABLED)