import { Status } from "./enumStatus"
import { Priority } from "./enumPriority"
export interface Mission {
    _id: string
    name: string
    status: Status
    priority: Priority
    description: string
}