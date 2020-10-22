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
On appel cela un 'props', props J'ouvre des accolades j'utilise le prop
va enfaite crée un objet utilisable je vais donc pouvoir l'afficher.
Pour cela j'utilise donc `{nom}` tout simplement entre mes balise h2


### La props Children: 
Exemple d'utilisation du props children: 

Fichier App.js:

	class App extends Component {
		render() {
			return(
				<div>
					<h1> Mon super titre</h1>
					<Membre nom= 'Arthur />
					<Membre nom= 'Adam'>
					Je suis grand et j'ai des lunettes
					</Membre>
				</div>
			)
		}
	}

Je ferme ma balise `<Membre>` entre ces deux balise j'y insert du text "j'initialise" le props Children.


Fichier Membre.js :

	import React, { Fragment } from  'react'  


	const  Membre  = ({ nom, children }) => {	
		return (
			<Fragment>		// J'utulise Fragment
				<h2>Membre de la famille: {nom.toUpperCase()}</h2>
				{  children  ?  <p>{children}</p>  :  <Fragment  />  }
			</Fragment>
		)
	}

	export  default  Membre


Dans mon fichier `Membre.js` j'importe de React `Fragment`, j'ouvre ensuite ces balise j'y met mon code principal.
Dans ma fonction Membre je lui fais passer 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTUwMTY3NzE5NSwxMDgzMDYzNzYsLTE3Mj
EzOTE0MTQsLTc2NTIwODAyMywtNDY3OTQ3MTkyLC0xNDU1NjU5
MDc0XX0=
-->