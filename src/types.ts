export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

export enum FilterType {
    All = 'All',
    Active = 'Active',
    Done = 'Done'
}
