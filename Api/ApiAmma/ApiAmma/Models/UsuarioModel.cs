using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAmma.Models
{
    public class UsuarioModel
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string senha { get; set; }
        public string cargo { get; set; }
        public int idAvatar { get; set; }
        public int codTema { get; set; }

    }
}
