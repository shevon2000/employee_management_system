function Employee(props){
    //props.name = 'Sam';
    return(
        <>
            <h3>Employee {props.name}</h3>
            <p>{props.role ? props.role : "No role"}</p>
        </>
    );
}

export default Employee;

/* 
    if we need to render a valeu(js), 
        we need to put it on curly braces
    -----------------------------------------------------------------------------------

    we cannot change the values of the props in the child componennt
        so we do that in parent component by using states
        state is bit different than the variable, it can be tied to the UI
        when the state changes, UI will be automatically update(without page refresh)
    -----------------------------------------------------------------------------------

    child component done only the values 
        parent is the one that controls, what is being passed to the child component

*/