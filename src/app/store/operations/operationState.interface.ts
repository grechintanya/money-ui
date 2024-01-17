import { Operation } from "../../utils";

export interface OperationState {
    operations: Operation[],
    error: string | null
}
