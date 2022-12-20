import { useParams } from "react-router-dom"
import { getBook } from '../data'

export default function Book() {
    let params = useParams();
    let book = getBook(parseInt(params.idbook));
    let {id, author, title, price} = book;
    return (
        <section>
            <h2>Книга "{title}"</h2>
            <p>Автор: <em>{author}</em></p>
            <p>Цена: {price} руб.</p>
        </section>
    )
}