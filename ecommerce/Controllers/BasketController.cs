using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.Intrinsics.X86;
using System.Threading.Tasks;
using ecommerce.Data.Migrations;
using ecommerce.Data;
using ecommerce.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using ecommerce.DTOs;
using System.Runtime.CompilerServices;

namespace ecommerce.Controllers
{
    public class BasketController : BaseEcommerceController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            return new BasketDto {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto {
                    ProductId = item.productId,
                    Quantity = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantiy = item.Quantity

                }).ToList()
            };
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket();
            if (basket == null) basket = CreateBasket();
            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound();
            basket.AddItem(product, quantity);

            var result = await _context.SaveChangesAsync() > 0;
            if(result) return StatusCode(201);
            return BadRequest(new ProblemDetails { Title = "Basket could not be created" } );
        }

        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetrieveBasket();
            if (basket == null) return NotFound();
            basket.RemoveItem(productId, quantity);
            var result = await _context.SaveChangesAsync() > 0;
            if(result) return StatusCode(201);
            return BadRequest(new ProblemDetails{ Title = "Basket could not be created" } );
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                .Include(b => b.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.UtcNow.AddDays(30) };
            var basket = new Basket { BuyerId = buyerId };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            _context.Baskets.Add(basket);
            return basket;
        }
    }
}