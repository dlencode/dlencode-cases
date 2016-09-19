/**
 * Class FaqItem create new spolier for show/hide information
 * Also may log info about this item.
 */

class FaqItem {
  constructor(id) {
    this.id = document.querySelector(id);
    this.faqHeader = this.id.querySelector('.faq-item-question-header').innerHTML;
    this.question = this.id.querySelector('.faq-item-question');
  }

  /**
   * spolier() - show/hide information
   */

  spoiler() {
    let toogleStatus = false;
    this.question.addEventListener('click', function () {
      if (toogleStatus == false) {
        toogleStatus = true;
        this.parentNode.querySelector('.faq-item-answer').style.display = 'block';
        this.parentNode.querySelector('.faq-item-question-arrow')
                       .querySelector('img').style.transform = 'rotate(180deg)';
      } else {
        toogleStatus = false;
        this.parentNode.querySelector('.faq-item-answer').style.display = 'none';
        this.parentNode.querySelector('.faq-item-question-arrow')
                       .querySelector('img').style.transform = 'rotate(0deg)';
      }
    });

    this.question.addEventListener('dbclick', function (e) {
      e.preventDefault();
      toogleStatus == false;
    });
  }

  /**
   * info() - log information about this FaqItem
   */

  info() {
    console.log(this);
  }
}

// init FaqItem
let faq1 = new FaqItem('#faq-item-1');

// describe spoiler()
faq1.spoiler();

// describe info()
faq1.info();
