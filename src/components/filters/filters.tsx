import { FilterType } from "../../types"

type FiltersProps = {
    filter: FilterType
    onChange: (type: FilterType) => void
}

export function Filters({filter, onChange}: FiltersProps) {

    return (
        <aside className="app-filters">
            <section className="toggle-group">
                <button className={filter === FilterType.All ? "button button--primary" : "button"} onClick={() => onChange(FilterType.All)}>All</button>
                <button className={filter === FilterType.Active ? "button button--primary" : "button"} onClick={() => onChange(FilterType.Active)}>Active</button>
                <button className={filter === FilterType.Done ? "button button--primary" : "button"} onClick={() => onChange(FilterType.Done)}>Done</button>
            </section>
        </aside>
    )
}