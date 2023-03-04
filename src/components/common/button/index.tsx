import {
	type ReactElement,
	type ForwardedRef,
	type ButtonHTMLAttributes,
	type DetailedHTMLProps,
	forwardRef,
} from 'react'

type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

type Props = ButtonProps

const Button = forwardRef<HTMLButtonElement, Props>(
	(props: Props, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
		return <button {...props} ref={ref} />
	}
)

Button.displayName = 'Button'

export default Button
