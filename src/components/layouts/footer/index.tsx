import {
	type ReactElement,
	forwardRef,
	type ForwardedRef,
	type DetailedHTMLProps,
	type HTMLAttributes,
} from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Footer = forwardRef<HTMLElement, Props>(
	(props, ref: ForwardedRef<HTMLElement>): ReactElement => {
		return (
			<footer {...props} ref={ref}>
				footer
			</footer>
		)
	}
)

Footer.displayName = 'Footer'

export default Footer
