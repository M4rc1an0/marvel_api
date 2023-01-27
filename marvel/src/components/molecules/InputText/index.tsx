import * as S from './styles'

type InputProps = {
    labelText: string
    change?: () => void
}

const InputText = ({labelText, change}: InputProps) => {
    return (
        <S.InputField size='small' onChange={change} label={labelText} />
    )
}

export default InputText