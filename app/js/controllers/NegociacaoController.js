class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._inputQtd = $("#quantidade");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQtd.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionado com sucesso');
    }
}
