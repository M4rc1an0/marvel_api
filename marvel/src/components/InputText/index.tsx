import * as S from './styles'

type InputProps = {
    labelText: string
    action?: () => void
}

const InputText = ({labelText}: InputProps) => {
    return (
        <S.InputField label={labelText} />
    )
}

export default InputText