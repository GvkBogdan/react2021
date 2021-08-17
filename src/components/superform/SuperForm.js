import {useState} from "react";
import {saveCar} from "../../services/car.api.service";

export default function SuperForm() {

    let[formState, setFormState] = useState({model:'', price:'', year:''})

    let onFormChange = (e) => {
        setFormState({...formState,[e.target.name]: e.target.value})
    };

    let saveC = (e)=>{
        e.preventDefault();
        console.log(formState);
        saveCar(formState);
    }


    return (
        <div>

            <div className={'form-car'}>
                <form onSubmit={saveC}>
                    <input type="text" name={'model'} value={formState.model}
                           onChange={onFormChange}/>
                    <input type="text" name={'price'} value={formState.price}
                           onChange={onFormChange}/>
                    <input type="text" name={'year'} value={formState.year}
                           onChange={onFormChange}/>
                    <input type="submit"/>
                </form>
            </div>


        </div>
    );
}