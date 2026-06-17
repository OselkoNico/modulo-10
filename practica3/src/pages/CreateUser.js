import React, {useState} from "react";

export default function CreateUser() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    })

    const handleOnChange = (e) => {
        setValues(() => {
            handleValideForm();
            //validateInput(e.target.name, e.target.value);
            return {...values, [e.target.name]: e.target.value}
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const [isValidForm, setIsValidForm] = useState(false);

    const handleValideForm = () => {
        if(values.password === values.repeatPassword && values.password !== '' && values.repeatPassword !== '') {
            setIsValidForm(true);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" onChange={handleOnChange}/>
            </div>
            <div className="row">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" onChange={handleOnChange}/>
            </div>
            <div className="row">
                <label htmlFor="repeat-password">Repita contraseña</label>
                <input type="password" id="repeat-password" name="repeatPassword" onChange={handleOnChange}/>
            </div>
            <div className="row-buttons">
                <button disabled={!isValidForm} type="submit">Añadir</button>
            </div>
        </form>
    )
}