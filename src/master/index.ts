import { Worker as WorkerType } from "../types/master"
import { selectWorkerImplementation } from "./implementation"

export { FunctionThread, ModuleThread } from "../types/master"
export { Pool } from "./pool"
export { spawn } from "./spawn"
export { Thread } from "./thread"

export type Worker = WorkerType

export const Worker = selectWorkerImplementation()
