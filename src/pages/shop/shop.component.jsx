import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true
	};
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = collection(firestore, 'collections');
		this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		})
	}

	render() {
		return (
			<div className="shop-page">
				<Routes>
					<Route path='' element={<CollectionsOverviewWithSpinner isLoading={this.state.loading} />} />
					<Route path=':collectionId' element={<CollectionPageWithSpinner isLoading={this.state.loading} />} />
				</Routes>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);