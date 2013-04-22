define(function() {
    var _eventos = {};

    var on = function(tipo, callback, modulo) {
        if (!_eventos[tipo]) {
            _eventos[tipo] = [];
        }
        _eventos[tipo].push({
            'callback': callback,
            'contexto': modulo
        });
    };

    var emit = function(tipo, args) {

        if (!_eventos[tipo]) {
                     return false;
        }

        for (var index in  _eventos[tipo]) {
            info = _eventos[tipo][index];
             
            info.callback.apply(info.contexto, args);
        }
    };
    return {
        'on': on,
        'emit': emit
    };
});

