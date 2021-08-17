import {createRef, useState} from "react";
import {saveCar} from "../../services/car.api.service";

export default function SuperForm() {

   // let refObject = createRef();// спосіб-3.... ще одна можливість отримувати дані з форми

    let[formState, setFormState] = useState({model:'', price:'', year:''})

    let onFormChange = (e) => {
        setFormState({...formState,[e.target.name]: e.target.value})
    };

    let saveC = (e)=>{
        e.preventDefault();
        console.log(formState);
        saveCar(formState);

        // Спосіб-3

        //в формі прописати ref={refObject}
        /*console.log(refObject.current.model.value);// отримуємо дані
        console.log(refObject.current.price.value);// отримуємо дані
        console.log(refObject.current.year.value);// отримуємо дані
        let m = refObject.current.model.value;
        let p = refObject.current.price.value;
        let y = refObject.current.year.value;
        saveCar({model:m, price:p, year:y})
         */

    };


    return (
        <div>

            <div className={'form-car'} >
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