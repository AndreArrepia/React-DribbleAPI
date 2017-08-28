/**
*
* ShotsDribble
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import OrderButton from '../OrderButton';
import DribbleTags from '../DribbleTags';
import _ from 'underscore';

function ShotsDribble( {dribbleShots, toggleOrderShots, isOrderDesc, filterShotsByTag, filter} ) {

	let sortitemNodes;
	let filterNodes = [];
	let resultNodes;
	let localResults = [];

	//Filter Logic
		for(var item in dribbleShots){
			if(filter.length > 0){
				if(_.intersection(dribbleShots[item].tags , filter).length === filter.length){
					localResults.push(dribbleShots[item]);
					filterNodes = localResults;
				}
		}else{
			filterNodes = dribbleShots;
		}
	}

	let dribbleShotsClone = filterNodes.slice();

	//Sort

	if(isOrderDesc == false){
		 sortitemNodes = dribbleShotsClone.sort((a,b) =>(
		 a.likes_count - b.likes_count 
	));
	}else{
		 sortitemNodes = dribbleShotsClone.sort((a,b) =>(
		 b.likes_count - a.likes_count 
	));
	}

	resultNodes = sortitemNodes;





	const itemNodes = resultNodes.map(shot => (
		<div key={shot.id} className={styles.singleShotWrapper}>
			<img src={shot.images.teaser} />
			<p className={styles.infoWrapper}> 
				<span className={styles.title}>{shot.title}</span> 
				<span className={styles.likes}> {shot.likes_count}&nbsp;<FontAwesome name="thumbs-up" /></span> 
			</p>
			<div className={styles.overlayTags}>
				<p><FontAwesome name="tags" />{shot.tags.map( (singletag, index)=>( <span key={index}> {singletag}</span>))}</p>
			</div>
		</div>

	));

	




	return (
		<div className={styles.shotsDribble}>
			<div className={styles.navigationBar}>
				<a className={styles.navigationBarLink} href="/animations">Animations</a>
			</div>
			<div className={styles.dribblesContainer}>
				<div className={styles.sideContainer}>
					<OrderButton toggleOrderShots = { toggleOrderShots } isOrderDesc = {isOrderDesc} />
					<DribbleTags selectedItems={ filter } items = {filterNodes} filterShotsByTag = {filterShotsByTag} />
				</div>
				<div className={styles.mainContainer}>
					{ itemNodes }
				</div>
			</div>
		</div>
		);
}





export default ShotsDribble;
