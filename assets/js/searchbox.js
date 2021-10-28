const BOOKS_AND_MEDIA = '197,239,283,638,1279,1708,1736,1978,2175,2513,3369';
const BOOKS_AND_MEDIA_FORMAT_STRING = "&format=Book&format=Msscr&format=Jrnl&format=News&format=music&format=Video&format=archv&year=all&yearFrom=&yearTo=&language=all";
const ARTICLES = '638,1271,1275,1279,1697,1708,1721,1723,1725,1728,1734,1736,1834,1941,1953,1978,2006,2007,2237,2259,2260,2261,2264,2375,3006,3313,3863,3866,3879,3384';
const ARTICLES_FORMAT_STRING = "&format=Artchap&format=Encyc";
const SPANISH = "";
const SPANISH_FORMAT_STRING = "&changedFacet=language&scope=&language=Spa";
const ES_EBOOKS = "";
const ES_EBOOKS_FORMAT_STRING = "&subformat=Book%3A%3Abook_digital&scope=wz%3A1274";
const DISCOVERY_URL = 'https://anderson.on.worldcat.org/v2/search?';

jQuery(document).ready(function($){
    $("#catalog-search").submit(function(e){
        e.preventDefault();

        let queryString = $(this).children('#queryString').val();
        let facet = $(this).children('#search-facet').val();
		let searchType;

        switch(facet){
            case 'booksmedia':
                databaseList = BOOKS_AND_MEDIA;
                formats = BOOKS_AND_MEDIA_FORMAT_STRING;
                searchType = 'Books and Media Search';
                break;
            case 'articles':
                databaseList = ARTICLES;
                formats = ARTICLES_FORMAT_STRING;
                searchType = 'Articles Search';
                break;
            case 'allfmts':
                databaseList = BOOKS_AND_MEDIA + ',' + ARTICLES;
				formats = BOOKS_AND_MEDIA_FORMAT_STRING + ARTICLES_FORMAT_STRING;
                searchType = 'All Formats Search';
                break;
			case 'spanish':
				databaseList = BOOKS_AND_MEDIA + ',' + ARTICLES;
				formats = BOOKS_AND_MEDIA_FORMAT_STRING + ARTICLES_FORMAT_STRING + SPANISH_FORMAT_STRING;
				searchType = 'Spanish Language Only Search';
				break;
			case 'es_ebooks':
				databaseList = BOOKS_AND_MEDIA;
				formats = SPANISH_FORMAT_STRING + ES_EBOOKS_FORMAT_STRING;
				searchType = 'AU Only Spanish eBooks'
        }
		
		//ga('send', 'event', 'Catalog Search', 'Search', searchType);

        window.open(DISCOVERY_URL + '&databaseList=' + databaseList + '&queryString=' + queryString + formats, '_blank');
    })
})
