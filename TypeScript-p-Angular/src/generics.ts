// Generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
};

const numArray = concatArray<number[]>([3,2], [5]);
const stgArray = concatArray<string[]>(['Goku', 'Victor'], ['José']);