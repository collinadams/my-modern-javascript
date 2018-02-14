/**
 * A manager of one or more temporarilly-installed "spy" functions
 *
 * @export
 * @returns {Spier} a new instance of a Spier
 */
export function Spier() {
  this.spies = new Map();
}

Spier.prototype = {
  /**
   * Spy on a function
   *
   * @param {any} obj Object that owns the function
   * @param {any} funcName name of the function to spy on
   * @param {any} stub (optional), function to use when invoking the spy
   * @returns {undefined}
   */
  spy(obj, funcName, stub = obj[funcName]) {
    let oldFunc = obj[funcName];
    let spy = function() {
      obj[funcName].count++;
      return stub(...arguments);
    };
    spy.count = 0;
    this.spies.set(spy, [obj, oldFunc, funcName]);
    obj[funcName] = spy;
  },
  /**
   * Get the number of installed spies
   */
  get length() {
    return this.spies.size;
  },
  /**
   * Release a spy
   *
   * @param {function} spy the spy to release
   * @return {undefined}
   */
  release(spy) {
    let [obj, f, n] = this.spies.get(spy);
    this.spies.delete(spy);
    obj[n] = f;
  },
  /**
   * Release all spies
   * @return {undefined}
   */
  releaseAll() {
    for (let [spy] of this.spies) {
      this.release(spy);
    }
  }
};
