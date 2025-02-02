const Bible = require('../versiculo.js');

describe("Bible tests", () => {
    it('should get "1 reis 1 2"', async () => {
        const ver = new Bible('1 reis 1 2');
        expect(ver.getVersion()).toEqual('Então disseram-lhe os seus servos: Busquem para o rei meu senhor uma moça virgem, que esteja perante o rei, e tenha cuidado dele; e durma no seu seio, para que o rei meu senhor se aqueça.');
    })

    it('should get "salmos 23 1"', async () => {
        const ver = new Bible('salmos 23 1');
        expect(ver.getVersion()).toEqual('O SENHOR é o meu pastor, nada me faltará.');
    })

    it('should get "isaias 55 9"', async () => {
        const ver = new Bible('isaias 55 9');
        expect(ver.getVersion()).toEqual('Porque assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.');
    })

    it('should get "Isaías 55 9"', async () => {
        const ver = new Bible('Isaías 55 9');
        expect(ver.getVersion()).toEqual('Porque assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.');
    })
});