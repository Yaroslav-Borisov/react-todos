export type Todo = {
    userId?: number
    id?: number,
    title: string,
    completed: boolean,
}

export enum FilterType {
    All = 'All',
    Active = 'Active',
    Done = 'Done'
}
