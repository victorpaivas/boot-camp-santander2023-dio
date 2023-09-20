"use strict";
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([3, 2], [5]);
const stgArray = concatArray(['Goku', 'Victor'], ['José']);
