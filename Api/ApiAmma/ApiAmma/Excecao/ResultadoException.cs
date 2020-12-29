using System;

namespace ApiAmma.Excecao
{
    [Serializable]
    public class ResultadoException : Exception
    {
        public string TipoAlerta { get; set; }
        public string TextoAlerta { get; set; }

        public ResultadoException(string tipoAlerta, string textoAlerta)
        {
            TipoAlerta = tipoAlerta;
            TextoAlerta = textoAlerta;
        }

    }
}
