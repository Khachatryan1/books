import pageNotfound from '../assets/images/pagenotfound.png'

export const NotFound = () => {
    return (
        <div className={ 'page-notfound-container' }>
            <img src={ pageNotfound } alt={ 'page not found' }/>
        </div>
    )
}