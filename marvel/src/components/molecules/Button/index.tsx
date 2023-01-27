import * as S from './styles'

type ButtonProps = {
    label: string
    action?: (event: any) => void | undefined
}

const Button = ({label, action}: ButtonProps) => {
    return (
        <S.BootstrapButton onClick={action}>
            {label}
        </S.BootstrapButton>
    )
}

export default Button