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

Dans mon fichier App.js dans mon component `<Membre />` on ajoute un 'attributs' qui dans notre cas est 'nom' je lui donne valeur. 

Ensuite dans mon fichier Membre.js on peut remarquer que je fais passer un attributs a ma fonctions.
On appel cela un 'props', props va enfaite crée un objet utilisable je vais donc pouvoir l'afficher.
Pour cela j'utilise donc `{nom}` tout simplement entre mes balise h2


### La props Children: 



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MjEzOTE0MTQsLTc2NTIwODAyMywtND
Y3OTQ3MTkyLC0xNDU1NjU5MDc0XX0=
-->