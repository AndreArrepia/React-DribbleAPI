/**
*
* DribbleTags
*
*/

import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';

function DribbleTags({ items, filterShotsByTag, selectedItems }) {

	let AllTags = [];
	let FilterTags = [];
 	
	//Tags with count
	let ListofTags = items.map( (dribbbleShot) => {
 		dribbbleShot.tags.map( (tag) =>  {
 			if(typeof(tag) !== typeof undefined  /*FilterTags.indexOf(tag) === -1*/){
 				if(FilterTags.findIndex(i => i.keyTag === tag) === -1){
					FilterTags.push({ keyTag : tag , count: 1});
 				}else if(FilterTags.findIndex(i => i.keyTag === tag) !== -1){
 					FilterTags[FilterTags.findIndex(i => i.keyTag === tag)].count++;
 				}
			}	
		});
	}); 

	//Tags selected
	let ListofTagsSelected = FilterTags.map((t, index) =>{
		if(selectedItems.indexOf(t.keyTag) > -1){
			FilterTags[index].isSelected = true;
		}else if (selectedItems.indexOf(t.keyTag) === -1){
			FilterTags[index].isSelected = false;
		}
	});


	const elementTagFilter = FilterTags.map((t, index) => (
		<li key={index} className={classNames(styles.listItem, {[styles.listItemSelected] : t.isSelected })} onClick = { () => filterShotsByTag(t.keyTag) }> <div className={styles.tagDescription}>{ t.keyTag } ({t.count}) </div> <div className={styles.checkHolder}><FontAwesome name="check" /></div></li>
	));

  return (
    <div className={styles.dribbleTags}>
    	<ul className={styles.list}>
			<li className={styles.listItem} onClick = { () => filterShotsByTag(null) }> Reset Filters </li>
    		{ elementTagFilter }
    	</ul>
    </div>
  );
}

export default DribbleTags;
