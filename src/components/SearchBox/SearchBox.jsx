import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="pa2 w5 ba b--green bg-light-green br4-ns outline-0-ns"
				type="search"
				placeholder="search for ..."
				onChange={searchChange}
			/>
		</div>
		)
}

export default SearchBox;