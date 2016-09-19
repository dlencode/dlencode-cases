/**
 * Class Input create new class for input.
 * Also may watch for changes in input form.
 */

class Input {
  constructor(id) {
    this.id = document.querySelector(id);
    this.placeholder = this.id.placeholder;
    this.value = this.id.value;
  }

  /**
   * follow() - follow for each entered char and log to console
   */

  follow() {
    this.id.addEventListener('keyup', function () {
      console.log(this.value);
    });
  }

  /**
   * info() - log information about this Input
   */

  info() {
    console.log(this);
  }
}

// init Input
let input = new Input('input');

// describe follow()
input.follow();

// describe info()
input.info();
