import React, { useContext } from 'react'
import { Context } from '../../Context'
import styles from './SearchResultWindow.module.css'
import SearchResultItem from '../SearchResultItem/SearchResultItem'

const SearchResultWindow = () => {
    let { searchResult, setSearchResult } = useContext(Context);

    return (
        <div className={styles.container}>
            {searchResult.map((item, i) =>
                <SearchResultItem searchResult = {searchResult[i]} />
            )}
        </div>
    )
}

export default SearchResultWindow