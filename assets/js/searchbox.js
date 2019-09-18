const BOOKS_AND_MEDIA = '1708,1920,2513,197,2175,1978,1736,638,283,1279,4162,3369,239,638,1736';
const BOOKS_AND_MEDIA_FORMAT_STRING = "&format=Book&format=Msscr&format=Jrnl&format=News&format=music&format=Video&format=archv&year=all&yearFrom=&yearTo=&language=all";
const ARTICLES = '1708,1271,2237,2259,2260,2261,2264,1721,1723,1941,1978,2375,1736,2484,638,2479,1697,3313,638,2479,1275,1488,1279,1734,1736,1834,3006,3863,1953,1488,2477,1279,1537,3879,1725,3866,2007,2006,1728,1492,3384,1734,4162';
const ARTICLES_FORMAT_STRING = "&format=Artchap&format=Encyc";
const DISCOVERY_URL = 'https://anderson.on.worldcat.org/search?sortKey=LIBRARY_PLUS_RELEVANCE'

jQuery(document).ready(function($){
    $("#catalog-search").submit(function(e){
        e.preventDefault();

        let queryString = $(this).children('#queryString').val();
        let facet = $(this).children('#search-facet').val();

        //Database list and formats
        let databaseList = '';
        let formats= '';
        if (facet == 'booksmedia'){
            databaseList = BOOKS_AND_MEDIA;
            formats = BOOKS_AND_MEDIA_FORMAT_STRING;
        } else if (facet ==  'articles') {
            databaseList = ARTICLES;
            formats = ARTICLES_FORMAT_STRING;
        } else if (facet == 'allfmts') {
            databaseList = BOOKS_AND_MEDIA + ',' + ARTICLES;
        }

        window.open(DISCOVERY_URL + '&databaseList=' + databaseList + '&queryString=' + queryString + formats, '_blank');
    })
})
