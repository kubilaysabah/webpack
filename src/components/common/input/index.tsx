import {
	type ReactElement,
	type ForwardedRef,
	type DetailedHTMLProps,
	type InputHTMLAttributes,
	forwardRef,
} from 'react'

type Props = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

const Input = forwardRef<HTMLInputElement, Props>(
	(props: Props, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
		return <input {...props} ref={ref} />
	}
)

Input.displayName = 'Input'

export default Input
