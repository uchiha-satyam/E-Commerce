import React from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import './menu-item.styles.scss';

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

const MenuItem = ({ title, imageUrl, size, router, linkUrl }) => (
	<div
		className={`menu-item ${size}`}
		onClick={() => router.navigate(`${linkUrl}`)}
	>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="background-image"
		></div>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);