import {
	type ReactElement,
	type ForwardedRef,
	type DetailedHTMLProps,
	type HTMLAttributes,
	forwardRef,
} from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Header = forwardRef<HTMLHeadingElement, Props>(
	(props, ref: ForwardedRef<HTMLHeadingElement>): ReactElement => {
		return (
			<header {...props} ref={ref}>
				header
			</header>
		)
	}
)

Header.displayName = 'Header'

export default Header
