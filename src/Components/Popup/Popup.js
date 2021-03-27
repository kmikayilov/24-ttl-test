import React, {useState, Component} from 'react';


import Partner from '../Partner/Partner';
import Button from '../Button/Button';
import Info from '../Info/Info';

import cancel from '../../assets/icons/cancel.svg';
import './Popup.scss';

const logos = require.context('../../assets/icons', true);
const partners = require.context('../../assets/partners', true);

class Popup extends Component {

  render() {
    let logo = logos(`./${this.props.company}.svg`);
    let partner = null;
    let info = null;

    let classnames = ['popup', this.props.company];

    switch(this.props.company) {
      case 'b2basket':
        partner = 
             <Partner 
                info="Один из создателей и Президент Ассоциации торгово-технологических компаний (АТТК)" 
                name="Сергей Егорушкин" 
                jobtitle="Партнёр B2basket" 
                photo={partners('./egorushkin.png').default} /> ;

        info = <Info 
                text1="Eдиный центр электронной торговли. Помогает интернет-магазинам, производителям и поставщикам продавать на маркетплейсах, прайс-площадках и в социальных сетях. Обеспечивает полный цикл услуг от первого клика до вручения товара покупателю за счет собственных инструментов и компетенций."
                text2="Специализируется на товарном размещении и рекламе с показателями эффективности по СРО, ДРР, ROI и прибыли, с аналитикой до каждого товара. Сертифицированные агентство и технологический партнер Яндекс.Маркет, Google Merchant, Оzon, Aliexpress/Tmall и других площадок."
                text3="Работает с 2013 года, 87% клиентов улучшают показатели эффективности каналов продаж. Соучредитель "
                link="Ассоциации торгово-технологических компаний (АТTK)." /> ;
         break;

      case 'cloudcontent':
        partner = 
          <React.Fragment> 
            <Partner 
              info="Основатель, коммерческий директор компании CloudContent и вице-президент по развитию цифрового и нового бизнеса АТТК"  
              name="Дмитрий Безруков" 
              jobtitle="представитель Cloud content" 
              photo={partners('./bezrukov.png').default} /> 
            <Partner 
              info="Основатель, операционный директор CloudContent. Вице президент по финансам и операционной деятельности АТТК" 
              name="Алексей Цибакин" 
              jobtitle="представитель Cloud content" 
              photo={partners('./cibakin.png').default} /> 
          </React.Fragment> ;

          info = <Info 
                text1="Единственная технологическая компания на рынке России в области создания контента в промышленных масштабах, способная удовлетворить любые потребности клиентов. Продуктовые решения компании позволяют как создаватьконтент практически любого типа, но и обрабатывать, хранить и транслировать его в каналы продаж."
                text2="Специалисты компании с многолетним опытом помогают разрабатывать структуры сложнейших каталогов и товарных карточек с 2012 года, а специально разработанное ПО передавать, хранить, обновлять и обрабатывать эти данные."
                text3="Мы сотрудничаем с крупными маркетплейсами и брендами, такими как, Goods, Henderson, Магнит, Сбермаркет, Все Инструменты, Перекресток" /> ;
         break;
      case '24ttl':
        partner = 
          <React.Fragment> 
            <Partner 
              info="Создатель Online Retail Management School. Один из создателей и вице-президент по инновациям Ассоциации торгово-технологических компаний (АТТК)"  
              name="Юрий Шишкин" 
              jobtitle="Основатель и руководитель 24TTL" 
              photo={partners('./shishkin.png').default} /> 
            <Partner 
              info="Руководитель образовательных программ ORM School. Вице-президент по цифровым проектам Ассоциации торгово-технологических компаний." 
              name="Григорий Черняев" 
              jobtitle="Стратегический консультант 24TTl" 
              photo={partners('./chernyaev.png').default} /> 
          </React.Fragment> ;

          info = <Info 
                text1="Одна из ведущих международных консалтинговых IT-компаний, специализирующаяся на разработке инновационных технологических продуктов для онлайн-ритейла, которые повышают конверсию и продажи. Решения 24TTL позволяют провести мониторинг присутствия бренда на маркетплейсах, автоматизировать создание и дистрибуцию высококонверсивного брендового контента, включая rich-контент, видео и дополненную реальность, а также проанализировать его качество и создать стратегию для дальнейшего развития."
                text2="Компания работает в 5 странах: Россия, Украина, Нидерланды, Арабские Эмираты, США. Среди клиентов компании: LG, Hyundai, Phillips, Colgate-Palmolive, Abbott, Panasonic, Procter&Gamble, Lego, Electrolux, Nikon, Grohe, Sennheiser, Omron. 24TTL – резидент Сколково с 2019 года." 
                text3="" /> ;

          classnames[1] = 'ttl';
    }

    return (
      <div className="popup-bg">
        <div className={classnames.join(' ')}>
          <img src={logo.default} alt="b2basket-logo" className="logo"/>
          <img src={cancel} onClick={this.props.closePopup} alt="closePopup" className="closePopup" />
          {info}
          {partner}
          <Button company={this.props.company} />
        </div> 
      </div>
    );
  }
}

export default Popup;
