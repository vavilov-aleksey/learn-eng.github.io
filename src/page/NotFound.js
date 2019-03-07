import React from 'react';
import '../style/page/notFound.css';

const NotFound = () => (
    <div className='not-page'>
        <h1>404</h1>
        <div className="not-page__error">
            <h3>Ошибка</h3>
            <p>Страница, которую вы ищите, не существует либо устарела.</p>
            <a href="/" title='Главная'>Перейти на главную</a>
        </div>
    </div>
);

export default NotFound;