using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Threading.Tasks;
using ecommerce.Data.Migrations;
using ecommerce.Entities;

namespace ecommerce.Controllers
{
    public class BasketController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = RetrieveBasket();
            
            if(basket == null) return NotFound();

            return basket;
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int producId, int quantity)
        {
            return StatusCode(201);
        }

        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            return Ok();
        }

        public async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                .Include(b => b.Items)
                .IncludeThen(p => p.product)
                .FirstOrDefaultAsync(x => x.buyerId == Request.Cookies["buyerId"]);
        }

    }
}