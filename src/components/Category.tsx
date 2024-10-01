import '../assets/style/nav.css'

export type CategoryType = {
    name: string
}

export function Category({name}: CategoryType) {
    return (
        <>
            <a href="" className="category-navigation-link">{name}</a>
        </>
    )
}