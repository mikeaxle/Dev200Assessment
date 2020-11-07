using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsAPI.Models
{
    public class Animal
    {
        public int AnimalId { get; set; }

        public string AnimalName { get; set; }

        public string AnimalSpecies { get; set; }

        public DateTimeOffset Created { get; set; }

        public DateTimeOffset Updated { get; set; }
    }
}
