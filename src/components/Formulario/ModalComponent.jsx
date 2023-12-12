import { Dialog } from 'primereact/dialog';

const ModalComponent = ({ children, titulo, visibleModal, onClose }) => {

    return (
        <Dialog header={titulo} visible={visibleModal} onHide={onClose} className='w-full md:w-[50vw]'>
            {children}
        </Dialog>
    );
};

export default ModalComponent;
