// node faz cache dos modulos ---> terá uma instânica única: --> retorna sempre a mesma instania
module.exports = {
    valor:1,
    inc() {
        this.valor++
    }
}