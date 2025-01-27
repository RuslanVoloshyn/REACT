import { getImageUrl } from './../helpers/utils.js';
import * as PropTypes from "prop-types";
import { Component } from "react";

class Profile1 extends Component {
	render() {
		let {
			imageId,
			name,
			profession,
			awards,
			discovery,
			 
			imageSize
		} = this.props;
		return (
			<section className="profile">
				<h2>{name}</h2>
				<img
					className="avatar"
					src={getImageUrl(imageId)}
					alt={name}
					width={imageSize}
					height={imageSize}
				/>
				<ul>
					<li><b>Професія:</b> {profession}</li>
					<li>
						<b>Нагороди: {awards.length} </b>
						({awards.join(', ')})
					</li>
					<li>
						<b>Відкрито: </b>
						{discovery}
					</li>
				</ul>
			</section>
		);
	}
}

Profile1.propTypes = {
	imageId: PropTypes.any,
	name: PropTypes.any,
	profession: PropTypes.any,
	awards: PropTypes.any,
	discovery: PropTypes.any,
	imageSize: PropTypes.number
}

Profile1.defaultProps = { imageSize: 70 }

export default function Gallery1() {
	return (
		<div>
			<h2>Визначні вчені</h2>
			<Profile1
				imageId="szV5sdG"
				name="Марія Склодовська-Кюрі (Maria Skłodowska-Curie)"
				profession="фізик та хімік"
				discovery="полоній (хімічний елемент)"
				awards={[
					'Нобелівська премія з фізики',
					'Нобелівська премія з хімії',
					'Медаль Дейві',
					'Медаль Маттеуччі'
				]}
			/>
			<Profile1
				imageId='YfeOqp2'
				name='Кацуко Сарухаші (Katsuko Saruhashi)'
				profession='геохімік'
				discovery="метод вимірювання вмісту діоксиду карбону в морській воді"
				awards={[
					'Премія Міяке з геохімії',
					'Премія Танака'
				]}
			/>
		</div>
	);
}
