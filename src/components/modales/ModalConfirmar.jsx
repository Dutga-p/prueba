import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const ModalConfirmar = ({ children, titulo = "Confirmar", visibleModal, onClose, confirmar }) => {

    const botones = () => {
        return (
            <>
                <Button label="No" outlined onClick={onClose} />
                <Button label="Yes" severity="danger" onClick={confirmar} />
            </>
        )
    }

    return (
        <Dialog header={titulo} visible={visibleModal} onHide={onClose} footer={botones} className='mx-auto md:w-[50vw]'>
            {children}
        </Dialog>
    );
};

export default ModalConfirmar;
