import { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return(
        <div class='container'>
            <div class='row justify-content-center'>
                <div class='col-6 formulario-pagina-formulario p-4'>
                    <form onSubmit={handleConfirm}>
                        <div class='row mb-3'>
                            <label class='col-3 label-pagina-formulario'>Nombre</label>
                            <input class='col-9 input-pagina-formulario' type='text' value={name} onChange={({target}) => setName(target.value)}/>
                        </div>
                        <div class='row mb-3'>
                            <label class='col-3 label-pagina-formulario'>Teléfono</label>
                            <input class='col-9 input-pagina-formulario' type='text' value={phone} onChange={({target}) => setPhone(target.value)}/>
                        </div>
                        <div class='row mb-3'>
                            <label class='col-3 label-pagina-formulario'>Email</label>
                            <input class='col-9 input-pagina-formulario' type='email' value={email} onChange={({target}) => setEmail(target.value)}/>
                        </div>
                        <div class='row justify-content-center mb-3'>
                            <button type='submit' className='col-4 boton-pagina-formulario'>Generar orden</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CheckoutForm