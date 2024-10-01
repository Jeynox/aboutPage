import {AdCard, AdCardProps} from "./AdCard"

export function RecentAds() {
    const ads: AdCardProps[] = [
    {
        imgUrl:"/images/bougie.webp",
        title:"Bougie",
        link:"/ads/bougie",
        price:200,
    },
    {
        imgUrl:"/images/dame-jeanne.webp",
        title:"Vase Dame-Jeane",
        link:"/ads/dame-jeane",
        price:500,
    },
    {
        imgUrl:"/images/porte-magazine.webp",
        title:"Porte Magazine",
        link:"/ads/porte-magazine",
        price:154,
    },
    {
        imgUrl:"/images/table.webp",
        title:"Table",
        link:"/ads/table",
        price:890,
    },
    {
        imgUrl:"/images/vaisselier.webp",
        title:"Vaisselier",
        link:"/ads/vaisslier",
        price:2780,
    },
    {
        imgUrl:"/images/vide-poche.webp",
        title:"Vide poche",
        link:"/ads/vide-poche",
        price:20,
    }
    ]
    return (
        <>
        <h2>Annonces récentes</h2>
        <section className="recent-ads">
            {ads.map((ad) => (
               <AdCard 
                imgUrl={ad.imgUrl}
                title={ad.title}
                link={ad.link}
                price={ad.price}
                key={ad.title}
                /> 
            ))}
        </section>
        </>
    )
}