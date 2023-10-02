import EployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'


const EmployeesList = ({data}) =>{

    const elements = data.map(item => {
        const {id,...itemProps} = item;
        return (
            <EployeesListItem key = {id} /* name = {item.name} salary = {item.salary} */ {...itemProps}/>
        )
    });

    

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;