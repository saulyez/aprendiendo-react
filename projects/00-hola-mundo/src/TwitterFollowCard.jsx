export function TwitterFolloCard({userName,name, isFollowing}) {
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="Avatar" 
            src= {`https://unavatar.io/${userName}`}/>
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-info-Username"> @{userName}</span>
            </div>
            <aside>
                <button className='tw-followCard-Button'>Follow</button>
            </aside>
        </header>
    </article>
    )
}