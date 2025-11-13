using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ProductManagement.Common
{
    public class Address
    {
        [Required(ErrorMessage = "A street address must be provided.")]
        [StringLength(50,MinimumLength =5, ErrorMessage = "Street address must be at least 5 characters and no more than 50.")]
        public string Street { get; set; }
        [Required(ErrorMessage = "A city name must be provided.")]
        [StringLength(25, MinimumLength = 5, ErrorMessage = "City name must be at least 5 characters and no more than 25.")]
        public string City { get; set; }
        [Required(ErrorMessage = "A country name must be provided.")]
        [StringLength(25, MinimumLength = 2, ErrorMessage = "Country name must be at least 5 characters and no more than 25.")]
        public string Country { get; set; }
    }
}
