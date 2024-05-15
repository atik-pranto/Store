using Microsoft.EntityFrameworkCore;
using ecommerce.Entities;

namespace ecommerce.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options){

        }

        public DbSet<Product> Products { get; set; }
    }
}