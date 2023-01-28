import * as S from './styles'

type ModalProps = {
    children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
    return (
        <S.OpacityModal>
            <S.Modal>
                    {children}
            </S.Modal>
        </S.OpacityModal>
    )
}

export default Modal