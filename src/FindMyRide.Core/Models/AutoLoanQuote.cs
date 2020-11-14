using System;
using System.ComponentModel.DataAnnotations;

namespace FindMyRide.Core.Models
{
    public class AutoLoanQuote
    {
        [Key]
        public Guid AutoLoanQuoteId { get; set; }
    }

}
