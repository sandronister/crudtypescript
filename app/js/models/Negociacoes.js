class Negociacoes {
    constructor() {
        this._list = [];
    }
    adiciona(negociacao) {
        this._list.push(negociacao);
    }
    toArray() {
        return [].concat(this._list);
    }
}
