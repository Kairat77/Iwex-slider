import React from 'react'
import style from './css/Center.module.css'

export default function Center() {
  return (
  <div className={style.center}>
    <div className={style.bac}>
    <div className="container">
      <div className={style.vul}>
        <div className={style.home_inner}>
          <h1>Изучай язык и открывай новые миры </h1>
          <h2>Работаем с 2011 года, отправили более <br/>10 000 тысяч студентов и людей в Европу.</h2>
          <div className={style.button}>
            <a href="https://iwex.kg/courses/index.html" className={style.block_1}><button  > <div className={style.wave}></div> <span>Курсы</span> </button></a>
            <a href="https://iwex.kg/iwexpoland/index.html" className={style.block_2}><button > <div className={style.wave}></div> <span>Учеба</span></button></a>
            <a href="https://iwex.kg/ferienjob/index.html" className={style.block_3}><button > <div className={style.wave}></div> <span>Работа</span> </button></a>
          </div>
        </div>
            <div className={style.tip}>
              <h3 className={style.typ}>О нас</h3>
              <h2>IWEX - есть прогресс </h2>
              <p>IWEX или Interwork Exchange – это агентство по трудоустройству за рубежом, а также крупная языковая школа.
              </p>
            </div>
      </div>
    </div>
    </div>
  </div>
  )
}
