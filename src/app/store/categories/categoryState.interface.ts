import { Category } from "../../utils";

export interface CategoryState {
    categories: Category[],
    error: string | null
}
