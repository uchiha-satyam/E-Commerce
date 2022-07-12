import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = collection(firestore, 'collections');
		this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
		})
	}

	render() {
		return (
			<div className="shop-page">
				<Routes>
					<Route path='' element={<CollectionsOverview />} />
					<Route path=':collectionId' element={<CollectionPage />} />
				</Routes>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);