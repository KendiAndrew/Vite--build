import "../../Styles/App.css"

export function About (){
    return(
        <div className="aboutMain">
            <h1 className='aboutTitle'>
                Висновок після проходження курсу по React:
                <ul className="about_ul">
                    <li>
                        <h5 className="about__title">1. Основні здобутки:</h5>
                        <ul className="about__ul">
                            <li><span>Розуміння концепцій React:</span> Отримані знання про основи React, включаючи компоненти, пропси, стан (state) та життєвий цикл компонентів.</li>
                            <li><span>JSX:</span> Вміння використовувати JSX для написання читабельного та зрозумілого коду, що комбінує HTML та JavaScript.</li>
                            <li><span>Компоненти:</span> Навички створення функціональних та класових компонентів, розуміння їх різниці та випадків застосування.</li>
                            <li><span>Динамічний UI:</span> Здатність створювати динамічний інтерфейс користувача з використанням стану та подій.</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="about__title">2. Робота з даними:</h5>
                        <ul className="about__ul">
                            <li><span>Пропси та стан:</span> Глибоке розуміння передачі даних через пропси та управління станом компонентів.</li>
                            <li><span>Зовнішні API:</span> Досвід роботи з зовнішніми API для отримання та відправлення даних за допомогою Axios.</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="about__title">3. Додаткові інструменти та бібліотеки:</h5>
                        <ul className="about__ul">
                            <li><span>React Router: </span> Вміння реалізовувати маршрутизацію у додатках за допомогою React Router.</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="about__title">4. Оптимізація та продуктивність:</h5>
                        <ul className="about__ul">
                            <li><span>Мемоізація: </span> Знання про використання <span>`React.memo`</span> та <span>`useMemo`</span> для оптимізації продуктивності.</li>
                            <li>Розбиття коду:<span></span> Вміння розбивати код на частини для покращення продуктивності додатку.</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="about__title">5. Тестування та відлагодження:</h5>
                        <ul className="about__ul">
                            <li><span>Відлагодження: </span> Використання інструментів для відлагодження React-додатків, таких як React Developer Tools.</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="about__title">6. Кращі практики та структурування коду:</h5>
                        <ul className="about__ul">
                            <li><span>Кращі практики: </span>Вміння застосовувати кращі практики в розробці, такі як розбиття на компоненти, уникнення глибокої вкладеності, використання хуків замість класів.</li>
                            <li><span>Структурування проекту:</span> Розуміння структури проекту, організації файлів та папок.</li>
                        </ul>
                    </li>
                </ul>
            </h1>
        </div>
    )
}