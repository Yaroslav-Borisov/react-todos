type AddTodoProps = {
    showForm: (isVisible: boolean) => void
}

export function AddTodo({ showForm }: AddTodoProps) {

    const showFormHandler = () => {
        showForm(true)
    }

    return (<>
        <section className="add-todo">
            <button className="add-todo__show-form-button" onClick={showFormHandler}>
                <i className="bi bi-plus-lg"></i>
            </button>
        </section>
    </>)
}