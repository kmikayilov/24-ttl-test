import React, {useState, Component} from 'react';
import basket from '../../assets/icons/b2basket.svg';
import vector from '../../assets/icons/Vector.svg';
import cancel from '../../assets/icons/cancel.svg';
import photo from '../../assets/photos/partner_photo.png';

import './Popup.scss';

class Popup extends Component {
  render() {
    return (
      <div className="popup-bg">
        <div className="popup">
          <img src={basket} alt="b2basket-logo" className="logo"/>
          <img src={cancel} onClick={this.props.closePopup} alt="closePopup" className="closePopup" />
          <div className="company_info">
            <div className="col">Eдиный центр электронной торговли. Помогает интернет-магазинам, производителям и поставщикам продавать на маркетплейсах, прайс-площадках и в социальных сетях. Обеспечивает полный цикл услуг от первого клика до вручения товара покупателю за счет собственных инструментов и компетенций.</div>
            <div className="col">Специализируется на товарном размещении и рекламе с показателями эффективности по СРО, ДРР, ROI и прибыли, с аналитикой до каждого товара. Сертифицированные агентство и технологический партнер Яндекс.Маркет, Google Merchant, Оzon, Aliexpress/Tmall и других площадок.</div>
            <div className="col">Работает с 2013 года, 87% клиентов улучшают показатели эффективности каналов продаж. Соучредитель <a href="#">Ассоциации торгово-технологических компаний (АТTK).</a></div>
          </div>
          <div className="company_partners">
            <div className="partner_info">
              <div className="info">Один из создателей и Президент Ассоциации торгово-технологических компаний (АТТК)</div>
              <div className="name">Сергей Егорушкин</div>
              <div className="partner">Партнёр B2basket</div>
            </div>
            <div className="partner_photo"><img src={photo} /></div>
          </div>

          <div className="learn-more">
            <div className="text">Узнать больше об B2basket</div>
            <div className="icon"><img src={vector} alt="vector" /></div>
          </div>
        </div> 

      </div>
    );
  }
}

export default Popup;
