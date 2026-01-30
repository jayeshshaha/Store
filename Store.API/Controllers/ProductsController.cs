using Microsoft.AspNetCore.Mvc;
using Store.Application.Interfaces;                            

namespace Store.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(IProductRepository productRepository) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await productRepository.GetProductsAsync();
            return Ok("");
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var data = await productRepository.GetProductAsync(id);
            if (!data.Exists)
            {
                return NotFound();
            }
            return Ok(data.Product);
        }
    }

}
