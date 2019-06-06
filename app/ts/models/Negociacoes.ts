class Negociacoes{

  private _list:Array<Negociacao> = []

  adiciona(negociacao:Negociacao):void{
    this._list.push(negociacao)
  }

  toArray():Array<Negociacao>{
    return [].concat(this._list)
  } 
}