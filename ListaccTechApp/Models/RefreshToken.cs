using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ListaccTechApp.Models
{
	public class RefreshToken
	{

		public int Id { get; set; }
		public string? Token { get; set; }
		public string? JwtId { get; set; }
		public int UserId { get; set; }
		public User? User { get; set; }
		public bool IsUsed { get; set; }
		public DateTime AddedDate { get; set; }
		public DateTime ExpiryDate {get;set;}


    }
}

