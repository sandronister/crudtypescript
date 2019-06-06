class NegociacoesView extends View {
    template(model) {
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          ${model.toArray().map(negociao => `<tr>
                <td>${negociao.data.getDate()}/${negociao.data.getMonth() + 1}/${negociao.data.getFullYear()}</td>
                <td>${negociao.quantidade}</td>
                <td>${negociao.valor}</td>
                <td>${negociao.volume}</td>
              </tr>`).join('')}
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>`;
    }
}
