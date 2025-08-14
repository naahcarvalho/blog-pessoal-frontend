import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className="cursor-pointer rounded-full 
                text-purple-800 border-2 border-purple-600 
                px-6 py-2 font-semibold bg-white hover:bg-purple-600 
                hover:text-white transition duration-300 
                ease-in-out animate-pulse">
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;