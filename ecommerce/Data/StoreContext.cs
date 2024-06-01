using Microsoft.EntityFrameworkCore;
using ecommerce.Entities;
using System.Diagnostics;

namespace ecommerce.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options){

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> baskets { get; set; }
    }
}