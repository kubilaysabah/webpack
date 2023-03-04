import { type FC, type ReactElement, type ReactNode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Footer, Header } from 'layouts'
import routes from 'helpers/routes'

interface Props {
	children?: ReactNode
}

const Root: FC<Props> = (): ReactElement => (
	<>
		<Header />

		<main>
			<RouterProvider router={routes} />
		</main>

		<Footer />
	</>
)

export default Root
