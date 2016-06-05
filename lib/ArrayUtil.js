/**
 * Created by fabiopigna on 05/06/2016.
 */
Array.prototype.remove = function (o) {
    var index = this.indexOf(o);
    if (index >= 0) {
        this.splice(index, 1);
    }
    return this;
};