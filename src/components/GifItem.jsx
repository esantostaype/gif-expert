export const GifItem = ({ title, url, id }) => {

	return (
		<li className="card">
			<img src={ url } alt={ title } />
			<p>{ title }</p>
		</li>
	)
}