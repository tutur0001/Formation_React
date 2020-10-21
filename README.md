Formation à React 
==

Les bases
-
### Les components:
Crée un components dis Stateless:


	const Membre = () => {

	return (

	<h2>Ceci est un titre</h2>

	)

	}

  

	export default Membre




### Les props: 
Crée un props et utiliser un props:
exemple: 

#### fichier App.js 

	class App extends Component {
		render() {
			return(
				<div>
					<h1> Mon super titre</h1>
					<Membre nom= 'Arthur />
					<Membre nom= 'Adam' />
				</div>
			)
		}
	}


#### Fichier Components Membre.js 

	const Membre = ({ nom }) => {
		return (
			<h2>Membre de la famille: {nom}</h2>
		)
	}

Dans mon fichier App.js dans mon component `<Membre />`
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc2NTIwODAyMywtNDY3OTQ3MTkyLC0xND
U1NjU5MDc0XX0=
-->