// Create a slider function that returns an object with two methods:
// next() and prev(). These methods should increment and decrement a
// counter variable in the closure of the slider function. The counter
// should be initialized to 0. The slider function should also take an
// array of images as an argument. The next() and prev() methods should
// return the current image element in the array. If the counter is at
// the end or beginning of the array, the counter should loop around.

function slider(images) {
    let counter = 0;
    return {
        next: function() {
        if (counter === images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        return images[counter];
        },
        prev: function() {
        if (counter === 0) {
            counter = images.length - 1;
        } else {
            counter--;
        }
        return images[counter];
        }
    };
}