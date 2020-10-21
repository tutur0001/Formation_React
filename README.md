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

	const Membre = ({ nom }) => 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc5NzEwNjAwOSwtNDY3OTQ3MTkyLC0xND
U1NjU5MDc0XX0=
-->