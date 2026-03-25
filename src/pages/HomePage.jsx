import '../css/index.css'

export function HomePage ({setCurrentPage}) {
    return <>
    
    <header>
        <div className="header_container">
            <div className="header_text_container">
                <div className="Kavro_title_header">
                    <span><h3>K</h3></span>

                    <h3>avro</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>

            <div className="header_link_gallery">
                <nav>  
                    <button onClick={() => setCurrentPage('gallery')} >Галерея ›</button>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section className="section_Our_services">
            <div className="card_container">
                <div className="card_trova">
                    <div className="card_container_title_trova">
                    <h3>🌱 Покос травы</h3></div>

                    <div className="card_container_text_trova">
                        <span>Косим траву</span>
                        <span>Убираем траву</span>
                    </div>

                    <div className="card_container_text_trova">
                        <span>Вывозим мусор</span>
                        <span>Чистим участок</span>
                    </div>

                    <div className="card_container_text_trova">
                        <span>Подравниваение</span>
                        <span>Удаление сорняков</span>
                    </div>
                </div>

                <div className="card_bild">
                    <div className="card_container_title_bild">
                        <h3>🛠 Разнорабочие</h3>
                    </div>
                    
                        <div className="card_container_text_bild">
                          <span>Вывоз хлама</span>  
                          <span>Демонтаж</span>
                        </div>
                        
                        <div className="card_container_text_bild">
                          <span>Сборка и ремонт</span>  
                          <span>Уборка после работ</span>
                        </div>

                        <div className="card_container_text_bild">
                          <span>Перенос и погрузка</span>  
                          <span>Мелкий ремонт</span>
                        </div>
                </div>
            </div>

            <div className="news">
                <a href="https://t.me/cnskfho" className="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>

                <a href="https://wa.me/79931849236" className="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>
            </div>
        </section>
    </main>

    <div className="footer_gradient"></div>
    
    <footer>
        <div className="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div className="fog"></div>
    </footer>

    
    </>
}
