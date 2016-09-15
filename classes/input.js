/**
 * Class Input create new class for input.
 * Also may watch for changes in input form.
 */

class Input {
  constructor(id) {
    this.id = document.getElementById(id);
    this.placeholder = this.id.placeholder;
    this.value = this.id.value;
  }

  /**
   * describe() - follow for each entered char and log to console
   */

  describe() {
    this.id.addEventListener('keyup', function () {
      console.log(this.value);
    });
  }

  /**
   * info() - log information about this input
   */

  info() {
    console.log(this);
  }
}
