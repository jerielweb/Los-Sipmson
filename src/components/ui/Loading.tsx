import CardStyle from './../../styles/cards.module.css';

export default function LOADING() {
    return (
        <>
            <div className={CardStyle.loading}>
                <div className={CardStyle.loadingItem}>
                    <div className={CardStyle.loader}></div>
                </div>
            </div>
        </>
    )
}
