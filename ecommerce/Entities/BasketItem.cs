using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace ecommerce.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id {get; set;}

        public int Quantity {get; set;}

        public int ProductId {get; set;}

        public Product Product {get; set;}

        public int basketId {get; set;}

        public Basket basket {get; set;}
    }
}